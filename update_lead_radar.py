#!/usr/bin/env python3
"""
Robô Autônomo de Originação Pré-Mídia & QSA — VALKNUT SPECIAL SITUATIONS (v6.0)
Coleta sinais oficiais pré-mídia de estresse de dívida e carve-out diretamente de:
  1. CVM Dados Abertos — IPE (Documentos Eventuais 2026: AGDs, Waivers, PIK,
     Suspensão de Amortização, Liberação de Conta Vinculada, Cautelares Art. 20-B,
     Recuperação Extrajudicial / Judicial, Carve-outs e Desinvestimentos).
  2. DJEN / CNJ (comunicaapi.pje.jus.br) — coleta oportunista best-effort de
     Tutelas Cautelares Antecedentes e PREs (não-bloqueante caso geobloqueado).
  3. Receita Federal via BrasilAPI (e fallback publica.cnpj.ws) — enriquecimento
     incremental do Quadro de Sócios e Administradores (QSA), Capital Social,
     CNAE e Situação Cadastral para leads CVM e casos do pipeline (`deals.json`).

Saída flat na raiz: `live-leads.json`
Dependências: apenas biblioteca padrão do Python 3.11+.
"""
import csv
import hashlib
import io
import json
import re
import time
import unicodedata
import urllib.error
import urllib.parse
import urllib.request
import zipfile
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timedelta, timezone
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent
DEALS_PATH = ROOT_DIR / "deals.json"
LIVE_LEADS_PATH = ROOT_DIR / "live-leads.json"

USER_AGENT = "ValknutRadar/6.0 (SpecialSituationsResearch; +https://jmtddr.github.io/valknut-radar/)"
CVM_IPE_BASE = "https://dados.cvm.gov.br/dados/CIA_ABERTA/DOC/IPE/DADOS"
BRASILAPI_CNPJ_URL = "https://brasilapi.com.br/api/cnpj/v1/{cnpj}"
CNPJWS_URL = "https://publica.cnpj.ws/cnpj/{cnpj}"
DJEN_API_URL = "https://comunicaapi.pje.jus.br/api/v1/comunicacao"

BLOCKED_TOKEN_SHA256 = {
    "d252e0c8ec8a9a143e74a72447f3abaf7a4fad0f7755a819dcc9cd293980cc78"
}

MAX_TIER0_LEADS = 45
MAX_QSA_FETCH_PER_RUN = 190
QSA_CACHE_TTL_DAYS = 45

# Termos de exclusão para filtrar avisos rotineiros da CVM (dividendos, cupom regular, etc.)
CVM_ROUTINE_EXCLUSIONS = (
    "pagamento de juros",
    "pagamento de dividendos",
    "pagamento de jcp",
    "juros sobre o capital proprio",
    "programa de recompra",
    "plano de opcao de compra",
    "outorga de opcoes",
    "aumento de capital dentro do limite",
    "calendario de eventos corporativos",
    "politica de negociacao",
    "politica de divulgacao",
    "codigo de conduta",
    "eleicao de membros do conselho",
    "distribuicao de dividendos",
    "resgate antecipado facultativo",
)

# Regras de classificação pré-mídia (ordenadas por prioridade/severidade)
CVM_SIGNAL_RULES = [
    (
        "Cautelar Art. 20-B / PRE / RJ",
        92,
        (
            "recuperacao extrajudicial",
            "recuperacao judicial",
            "tutela cautelar",
            "cautelar antecedente",
            "art. 20-b",
            "artigo 20-b",
            "mediacao antecedente",
            "stay period",
            "plano de recuperacao",
            "pedido de falencia",
            "autofalencia",
        ),
    ),
    (
        "Vencimento Antecipado / Default / Downgrade",
        88,
        (
            "vencimento antecipado",
            "inadimplemento",
            "inadimplencia",
            "evento de default",
            "descumprimento de covenant",
            "descumprimento de obrigacao",
            "rebaixamento de rating",
            "rebaixamento da nota",
            "downgrade",
            "execucao de garantia",
            "excussao de garantia",
        ),
    ),
    (
        "AGD / Waiver / PIK / Covenant",
        78,
        (
            "waiver",
            "covenant",
            "suspensao de amortizacao",
            "suspensao do pagamento",
            "incorporacao da remuneracao",
            "incorporacao de juros",
            "liberacao de conta vinculada",
            "liberacao da conta reserva",
            "conta vinculada",
            "prorrogacao de vencimento",
            "prorrogacao do prazo",
            "alteracao da data de vencimento",
            "repactuacao",
            "standstill",
            "reestruturacao de divida",
            "reestruturacao financeira",
            "reperfilamento",
            "renegociacao",
            "solicitada por debenturistas",
            "nao declaracao de vencimento",
            "nao declaracao do vencimento",
            "substituicao de garantia",
            "reforco de garantia",
            "substituicao do agente fiduciario",
        ),
    ),
    (
        "Carve-out / Desinvestimento / UPI",
        70,
        (
            "unidade produtiva isolada",
            "stalking horse",
            "carve-out",
            "carve out",
            "desinvestimento",
            "venda de ativo",
            "alienacao de ativo",
            "venda de ativos",
            "alienacao de ativos",
            "venda de participacao",
            "alienacao de participacao",
            "alienacao de controle",
            "venda de subsidiaria",
            "venda de operacao",
        ),
    ),
]

CORP_SUFFIX_RE = re.compile(
    r"(?<![a-z0-9])(?:s\.a\.|s/a|s\.a|ltda\.|ltda|participacoes|empreendimentos|holding|grupo|cia|companhia|brasil|do\s+brasil|de\s+investimentos)(?![a-z0-9])"
)


def norm(text: str) -> str:
    if not text:
        return ""
    s = unicodedata.normalize("NFD", str(text).lower())
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    return re.sub(r"\s+", " ", s).strip()


def contains_blocked_entity(text: str) -> bool:
    for token in re.findall(r"[a-z0-9]+", norm(text)):
        if len(token) < 5:
            continue
        if hashlib.sha256(token.encode("utf-8")).hexdigest() in BLOCKED_TOKEN_SHA256:
            return True
    return False


def digits_only(value: str) -> str:
    return re.sub(r"\D+", "", str(value or ""))


def is_valid_cnpj(cnpj14: str) -> bool:
    c = digits_only(cnpj14)
    if len(c) != 14 or len(set(c)) == 1:
        return False
    weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    weights2 = [6] + weights1
    s1 = sum(int(c[i]) * weights1[i] for i in range(12))
    d1 = 11 - (s1 % 11)
    d1 = 0 if d1 >= 10 else d1
    s2 = sum(int(c[i]) * weights2[i] for i in range(13))
    d2 = 11 - (s2 % 11)
    d2 = 0 if d2 >= 10 else d2
    return c[-2:] == f"{d1}{d2}"


def format_cnpj(cnpj14: str) -> str:
    c = digits_only(cnpj14)
    if len(c) != 14:
        return str(cnpj14 or "")
    return f"{c[:2]}.{c[2:5]}.{c[5:8]}/{c[8:12]}-{c[12:]}"


def http_get_bytes(url: str, timeout: int = 25, accept: str = "*/*") -> bytes:
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": USER_AGENT,
            "Accept": accept,
        },
    )
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read()


def load_deals_index():
    deals = []
    if DEALS_PATH.exists():
        try:
            deals = json.loads(DEALS_PATH.read_text(encoding="utf-8"))
        except Exception:
            deals = []

    by_cnpj = {}
    by_stem = {}
    for d in deals:
        cnpj14 = digits_only(d.get("cnpj", ""))
        if len(cnpj14) == 14:
            by_cnpj[cnpj14] = d
        emp_n = norm(d.get("empresa", ""))
        stem = CORP_SUFFIX_RE.sub(" ", emp_n)
        stem = re.sub(r"\([^)]*\)", " ", stem)
        stem = re.sub(r"[^a-z0-9 ]+", " ", stem)
        stem = re.sub(r"\s+", " ", stem).strip()
        if len(stem) >= 5:
            by_stem[stem] = d
    return deals, by_cnpj, by_stem


def match_deal(cnpj14: str, empresa_nome: str, by_cnpj: dict, by_stem: dict):
    if cnpj14 and cnpj14 in by_cnpj:
        return by_cnpj[cnpj14]
    emp_n = norm(empresa_nome)
    stem = CORP_SUFFIX_RE.sub(" ", emp_n)
    stem = re.sub(r"[^a-z0-9 ]+", " ", stem)
    stem = re.sub(r"\s+", " ", stem).strip()
    if not stem or len(stem) < 5:
        return None
    if stem in by_stem:
        return by_stem[stem]
    first_two = " ".join(stem.split()[:2])
    if len(first_two) >= 7:
        for k, deal in by_stem.items():
            if k.startswith(first_two) or first_two in k:
                return deal
    return None


def classify_cvm_filing(categoria: str, tipo: str, especie: str, assunto: str):
    cat_n = norm(categoria)
    tip_n = norm(tipo)
    esp_n = norm(especie)
    ass_n = norm(assunto)
    full = f"{cat_n} {tip_n} {esp_n} {ass_n}"

    # Ignora avisos rotineiros a menos que tenham palavra-chave de estresse real
    has_hard_distress = any(
        kw in full
        for kw in (
            "waiver",
            "covenant",
            "suspensao",
            "incorporacao",
            "inadimpl",
            "vencimento antecipado",
            "recuperacao",
            "cautelar",
            "standstill",
            "reestruturacao de divida",
            "reestruturacao financeira",
            "reperfilamento",
            "renegociacao",
            "downgrade",
            "rebaixamento",
            "conta vinculada",
            "conta reserva",
            "prorrogacao",
            "repactuacao",
            "solicitada por debenturistas",
            "nao declaracao",
            "unidade produtiva",
            "stalking horse",
            "carve-out",
            "desinvestimento",
        )
    )
    if not has_hard_distress:
        if any(ex in full for ex in CVM_ROUTINE_EXCLUSIONS):
            return None, 0

    for label, base_score, keywords in CVM_SIGNAL_RULES:
        if any(kw in full for kw in keywords):
            if label == "AGD / Waiver / PIK / Covenant":
                if (
                    "emissao de debentures" in full
                    or "oferta publica" in full
                    or "distribuicao publica" in full
                ) and not has_hard_distress:
                    continue
                if "aviso aos debenturistas" in full and not has_hard_distress:
                    continue
            if label == "Carve-out / Desinvestimento / UPI":
                if not any(
                    c in cat_n
                    for c in ("fato relevante", "comunicado ao mercado", "assembleia")
                ):
                    continue
                if any(
                    noise in full
                    for noise in ("fundo de investimento", "fii", "fiagro", "etf", "bdr")
                ):
                    continue
            return label, base_score
    return None, 0


def collect_cvm_ipe_leads(now_utc: datetime, by_cnpj: dict, by_stem: dict):
    year = now_utc.year
    cutoff_date = (now_utc - timedelta(days=120)).strftime("%Y-%m-%d")
    candidate_urls = [
        f"{CVM_IPE_BASE}/ipe_cia_aberta_{year}.zip",
        f"{CVM_IPE_BASE}/ipe_cia_aberta_{year - 1}.zip",
    ]

    zip_bytes = None
    used_url = None
    for url in candidate_urls:
        try:
            zip_bytes = http_get_bytes(url, timeout=30)
            used_url = url
            break
        except Exception as exc:
            print(f"[CVM] Fallback from {url}: {exc}")

    if not zip_bytes:
        return [], {
            "status": "error",
            "url": candidate_urls[0],
            "filings_scanned": 0,
            "leads_found": 0,
        }

    scanned = 0
    matched_raw = []
    with zipfile.ZipFile(io.BytesIO(zip_bytes)) as zf:
        csv_names = [n for n in zf.namelist() if n.lower().endswith(".csv")]
        if not csv_names:
            return [], {"status": "empty_zip", "url": used_url, "filings_scanned": 0, "leads_found": 0}
        with zf.open(csv_names[0]) as raw_f:
            reader = csv.DictReader(io.TextIOWrapper(raw_f, encoding="latin-1", errors="replace"), delimiter=";")
            for row in reader:
                scanned += 1
                dt_entrega = (row.get("Data_Entrega") or row.get("Data_Referencia") or "").strip()[:10]
                if not dt_entrega or dt_entrega < cutoff_date:
                    continue

                nome = (row.get("Nome_Companhia") or "").strip()
                cnpj_raw = (row.get("CNPJ_Companhia") or "").strip()
                cnpj14 = digits_only(cnpj_raw)
                cat = (row.get("Categoria") or "").strip()
                tip = (row.get("Tipo") or "").strip()
                esp = (row.get("Especie") or "").strip()
                assunto = (row.get("Assunto") or "").strip()
                link = (row.get("Link_Download") or "").strip()
                cod_cvm = (row.get("Codigo_CVM") or "").strip()

                if not nome or contains_blocked_entity(f"{nome} {assunto}"):
                    continue

                signal_type, base_score = classify_cvm_filing(cat, tip, esp, assunto)
                if not signal_type:
                    continue

                matched_raw.append(
                    {
                        "empresa": nome,
                        "cnpj": format_cnpj(cnpj14) if len(cnpj14) == 14 else cnpj_raw,
                        "cnpj_digits": cnpj14,
                        "codigo_cvm": cod_cvm,
                        "data_entrega": dt_entrega,
                        "data_referencia": (row.get("Data_Referencia") or "").strip()[:10],
                        "signal_type": signal_type,
                        "base_score": base_score,
                        "categoria_cvm": cat,
                        "tipo_cvm": tip or esp,
                        "assunto": assunto or f"{cat} — {tip or esp}",
                        "link_download": link,
                    }
                )

    # Ordena do mais recente para o mais antigo
    matched_raw.sort(key=lambda r: (r["data_entrega"], r["base_score"]), reverse=True)

    # Deduplica por (cnpj_digits ou empresa_norm, signal_type), contando recorrência de filings
    grouped = {}
    for item in matched_raw:
        key = (item["cnpj_digits"] or norm(item["empresa"]), item["signal_type"])
        if key not in grouped:
            item["filing_count"] = 1
            item["recent_assuntos"] = [item["assunto"][:160]]
            grouped[key] = item
        else:
            grouped[key]["filing_count"] += 1
            if len(grouped[key]["recent_assuntos"]) < 3 and item["assunto"][:160] not in grouped[key]["recent_assuntos"]:
                grouped[key]["recent_assuntos"].append(item["assunto"][:160])

    # Calcula score de originação diferenciado (50-97) e reconcilia com deals.json
    today_str = now_utc.strftime("%Y-%m-%d")
    today_dt = datetime.strptime(today_str, "%Y-%m-%d")

    leads = []
    for idx, item in enumerate(grouped.values(), start=1):
        deal = match_deal(item["cnpj_digits"], item["empresa"], by_cnpj, by_stem)
        try:
            age_days = max(0, (today_dt - datetime.strptime(item["data_entrega"], "%Y-%m-%d")).days)
        except Exception:
            age_days = 60

        emp_n = norm(item["empresa"])
        ass_n = norm(item["assunto"])
        is_legacy_rj_routine = (
            ("em recuperacao judicial" in emp_n or "massa falida" in emp_n)
            and ("informacoes de companhias em recuperacao" in norm(item["categoria_cvm"]) or "relatorio mensal" in ass_n)
        )

        score = item["base_score"]
        if is_legacy_rj_routine:
            score -= 22
        if age_days <= 10:
            score += 7
        elif age_days <= 25:
            score += 4
        elif age_days > 60:
            score -= 6
        if item["filing_count"] >= 4:
            score += 7
        elif item["filing_count"] >= 2:
            score += 4
        if not deal and not is_legacy_rj_routine:
            score += 5
        score = max(48, min(97, int(round(score))))

        leads.append(
            {
                "id": f"cvm-{item['cnpj_digits'] or idx}-{idx}",
                "empresa": item["empresa"],
                "cnpj": item["cnpj"],
                "cnpj_digits": item["cnpj_digits"],
                "codigo_cvm": item["codigo_cvm"],
                "data_entrega": item["data_entrega"],
                "data_referencia": item["data_referencia"],
                "signal_type": item["signal_type"],
                "categoria_cvm": item["categoria_cvm"],
                "tipo_cvm": item["tipo_cvm"],
                "assunto": item["assunto"][:240],
                "link_download": item["link_download"],
                "filing_count": item["filing_count"],
                "in_pipeline": bool(deal),
                "deal_id": deal.get("id") if deal else None,
                "deal_empresa": deal.get("empresa") if deal else None,
                "deal_passivo_mm": deal.get("passivo_mm") if deal else None,
                "fit_score": score,
                "source": "CVM IPE 2026",
            }
        )

    # Prioriza novos leads de alto score e filings mais recentes
    leads.sort(key=lambda r: (r["fit_score"], r["data_entrega"], r["filing_count"]), reverse=True)
    top_leads = leads[:MAX_TIER0_LEADS]

    meta = {
        "status": "ok",
        "url": used_url,
        "filings_scanned": scanned,
        "signals_matched": len(matched_raw),
        "unique_leads": len(leads),
        "leads_exported": len(top_leads),
    }
    return top_leads, meta


def probe_djen_opportunistic(now_utc: datetime):
    """Consulta best-effort ao DJEN/CNJ; ignora graciosamente se houver bloqueio regional (HTTP 403)."""
    dt_ini = (now_utc - timedelta(days=7)).strftime("%Y-%m-%d")
    dt_fim = now_utc.strftime("%Y-%m-%d")
    params = urllib.parse.urlencode(
        {
            "siglaTribunal": "TJSP",
            "texto": "tutela cautelar antecedente recuperacao judicial",
            "dataDisponibilizacaoInicio": dt_ini,
            "dataDisponibilizacaoFim": dt_fim,
            "itensPorPagina": "10",
        }
    )
    url = f"{DJEN_API_URL}?{params}"
    try:
        raw = http_get_bytes(url, timeout=8, accept="application/json")
        payload = json.loads(raw.decode("utf-8", errors="replace"))
        items = payload.get("items") or payload.get("comunicacoes") or []
        return [], {
            "status": "ok",
            "items_seen": len(items),
            "note": "DJEN CNJ acessível",
        }
    except urllib.error.HTTPError as he:
        return [], {
            "status": f"http_{he.code}",
            "items_seen": 0,
            "note": "DJEN CNJ indisponível / geobloqueado no runner de nuvem (fallback ativo via CVM IPE + RSS Jurídico)",
        }
    except Exception as exc:
        return [], {
            "status": "unavailable",
            "items_seen": 0,
            "note": f"DJEN CNJ indisponível ({type(exc).__name__})",
        }


def fetch_single_qsa(cnpj14: str, today_str: str):
    """Consulta QSA via BrasilAPI (primário) e publica.cnpj.ws (fallback)."""
    # 1. BrasilAPI
    url = BRASILAPI_CNPJ_URL.format(cnpj=cnpj14)
    try:
        raw = http_get_bytes(url, timeout=12, accept="application/json")
        d = json.loads(raw.decode("utf-8", errors="replace"))
        if isinstance(d, dict) and d.get("razao_social"):
            qsa_list = []
            for s in (d.get("qsa") or [])[:12]:
                nome = (s.get("nome_socio") or "").strip()
                qual = (s.get("qualificacao_socio") or "").strip()
                if nome:
                    qsa_list.append({"nome": nome, "qualificacao": qual})
            tel = (d.get("ddd_telefone_1") or "").strip()
            return cnpj14, {
                "razao_social": (d.get("razao_social") or "").strip(),
                "nome_fantasia": (d.get("nome_fantasia") or "").strip(),
                "situacao": (d.get("descricao_situacao_cadastral") or "").strip(),
                "data_inicio": (d.get("data_inicio_atividade") or "").strip()[:10],
                "capital_social": float(d.get("capital_social") or 0),
                "porte": (d.get("porte") or "").strip(),
                "cnae": (d.get("cnae_fiscal_descricao") or "").strip(),
                "municipio": (d.get("municipio") or "").strip(),
                "uf": (d.get("uf") or "").strip(),
                "telefone": tel,
                "qsa": qsa_list,
                "source": "BrasilAPI",
                "fetched_at": today_str,
            }
    except urllib.error.HTTPError as he:
        if he.code == 404:
            return cnpj14, None
    except Exception:
        pass

    # 2. Fallback publica.cnpj.ws (respeitando rate-limit leve)
    try:
        time.sleep(0.35)
        raw2 = http_get_bytes(CNPJWS_URL.format(cnpj=cnpj14), timeout=12, accept="application/json")
        d2 = json.loads(raw2.decode("utf-8", errors="replace"))
        if isinstance(d2, dict) and d2.get("razao_social"):
            est = d2.get("estabelecimento") or {}
            qsa_list = []
            for s in (d2.get("socios") or [])[:12]:
                nome = (s.get("nome") or "").strip()
                qual = ((s.get("qualificacao_socio") or {}).get("descricao") or "").strip()
                if nome:
                    qsa_list.append({"nome": nome, "qualificacao": qual})
            cap_str = str(d2.get("capital_social") or "0").replace(",", ".")
            try:
                cap_val = float(cap_str)
            except Exception:
                cap_val = 0.0
            return cnpj14, {
                "razao_social": (d2.get("razao_social") or "").strip(),
                "nome_fantasia": (est.get("nome_fantasia") or "").strip(),
                "situacao": (est.get("situacao_cadastral") or "").strip(),
                "data_inicio": (est.get("data_inicio_atividade") or "").strip()[:10],
                "capital_social": cap_val,
                "porte": ((d2.get("porte") or {}).get("descricao") or "").strip(),
                "cnae": ((est.get("atividade_principal") or {}).get("descricao") or "").strip(),
                "municipio": ((est.get("cidade") or {}).get("nome") or "").strip(),
                "uf": ((est.get("estado") or {}).get("sigla") or "").strip(),
                "telefone": f"{est.get('ddd1') or ''}{est.get('telefone1') or ''}".strip(),
                "qsa": qsa_list,
                "source": "CNPJ.ws",
                "fetched_at": today_str,
            }
    except Exception:
        pass

    return cnpj14, None


def enrich_qsa_incremental(deals: list, tier0_leads: list, now_utc: datetime):
    today_str = now_utc.strftime("%Y-%m-%d")
    cutoff_dt = now_utc - timedelta(days=QSA_CACHE_TTL_DAYS)
    existing_qsa = {}
    if LIVE_LEADS_PATH.exists():
        try:
            prev = json.loads(LIVE_LEADS_PATH.read_text(encoding="utf-8"))
            if isinstance(prev.get("qsa_by_cnpj"), dict):
                existing_qsa = prev["qsa_by_cnpj"]
        except Exception:
            existing_qsa = {}

    # Prioridade 1: leads CVM pré-mídia; Prioridade 2: sweet spot (100M-2.5B); Prioridade 3: demais deals
    ordered_cnpjs = []
    seen = set()

    def push_cnpj(raw_val: str):
        c14 = digits_only(raw_val)
        if c14 and c14 not in seen and is_valid_cnpj(c14):
            seen.add(c14)
            ordered_cnpjs.append(c14)

    for lead in tier0_leads:
        push_cnpj(lead.get("cnpj_digits") or lead.get("cnpj"))

    sweet_deals = [d for d in deals if 100 <= float(d.get("passivo_mm") or 0) <= 2500]
    other_deals = [d for d in deals if not (100 <= float(d.get("passivo_mm") or 0) <= 2500)]
    for d in sweet_deals + other_deals:
        push_cnpj(d.get("cnpj"))

    to_fetch = []
    for c14 in ordered_cnpjs:
        cached = existing_qsa.get(c14)
        if cached and cached.get("fetched_at"):
            try:
                f_dt = datetime.strptime(cached["fetched_at"][:10], "%Y-%m-%d").replace(tzinfo=timezone.utc)
                if f_dt >= cutoff_dt:
                    continue
            except Exception:
                pass
        to_fetch.append(c14)
        if len(to_fetch) >= MAX_QSA_FETCH_PER_RUN:
            break

    fetched_ok = 0
    if to_fetch:
        print(f"[QSA] Enriquecendo {len(to_fetch)} CNPJs válidos via BrasilAPI/CNPJ.ws...")
        with ThreadPoolExecutor(max_workers=2) as pool:
            futures = {}
            for idx, c14 in enumerate(to_fetch):
                if idx > 0 and idx % 2 == 0:
                    time.sleep(0.32)
                futures[pool.submit(fetch_single_qsa, c14, today_str)] = c14
            for fut in as_completed(futures):
                c14, data = fut.result()
                if data:
                    existing_qsa[c14] = data
                    fetched_ok += 1

    # Retém apenas CNPJs relevantes (deals + tier0_leads) para manter live-leads.json enxuto
    valid_set = set(ordered_cnpjs)
    pruned_qsa = {k: v for k, v in existing_qsa.items() if k in valid_set}
    return pruned_qsa, {
        "total_valid_cnpjs": len(ordered_cnpjs),
        "cached_total": len(pruned_qsa),
        "fetched_this_run": fetched_ok,
        "attempted_this_run": len(to_fetch),
    }


def main():
    now_utc = datetime.now(timezone.utc)
    now_br = now_utc.astimezone(timezone(timedelta(hours=-3)))

    deals, by_cnpj, by_stem = load_deals_index()
    print(f"[Radar] Pipeline base carregado: {len(deals)} grupos econômicos reais.")

    tier0_leads, cvm_meta = collect_cvm_ipe_leads(now_utc, by_cnpj, by_stem)
    print(
        f"[CVM] {cvm_meta.get('filings_scanned', 0)} documentos varridos -> "
        f"{cvm_meta.get('leads_exported', 0)} leads pré-mídia de alta convicção."
    )

    _, djen_meta = probe_djen_opportunistic(now_utc)
    print(f"[DJEN] Status: {djen_meta.get('status')} ({djen_meta.get('note')})")

    qsa_by_cnpj, qsa_meta = enrich_qsa_incremental(deals, tier0_leads, now_utc)
    print(
        f"[QSA] Base consolidada: {qsa_meta['cached_total']}/{qsa_meta['total_valid_cnpjs']} "
        f"CNPJs com QSA (novos nesta execução: {qsa_meta['fetched_this_run']})."
    )

    # Anexa prévia do QSA nos leads Tier 0
    for lead in tier0_leads:
        q = qsa_by_cnpj.get(lead.get("cnpj_digits") or "")
        if q:
            lead["uf"] = q.get("uf") or ""
            lead["municipio"] = q.get("municipio") or ""
            lead["capital_social"] = q.get("capital_social") or 0
            lead["qsa_preview"] = [s["nome"] for s in (q.get("qsa") or [])[:3]]

    new_premedia_count = sum(1 for x in tier0_leads if not x.get("in_pipeline"))
    payload = {
        "schema_version": "6.0",
        "updated_at": now_utc.strftime("%Y-%m-%dT%H:%M:%SZ"),
        "updated_at_br": now_br.strftime("%d/%m/%Y %H:%M"),
        "sources": {
            "cvm_ipe": cvm_meta,
            "djen": djen_meta,
            "qsa_receita": qsa_meta,
        },
        "stats": {
            "tier0_leads_total": len(tier0_leads),
            "tier0_new_unmapped": new_premedia_count,
            "tier0_in_pipeline": len(tier0_leads) - new_premedia_count,
            "qsa_enriched_cnpjs": len(qsa_by_cnpj),
        },
        "tier0_leads": tier0_leads,
        "qsa_by_cnpj": qsa_by_cnpj,
    }

    LIVE_LEADS_PATH.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"[OK] Gravado {LIVE_LEADS_PATH.name} ({LIVE_LEADS_PATH.stat().st_size:,} bytes).")


if __name__ == "__main__":
    main()
