#!/usr/bin/env python3
"""
Robô Autônomo de Originação Pré-Mídia & Grafo QSA — VALKNUT SPECIAL SITUATIONS (v7.0)
Coleta sinais oficiais pré-mídia de estresse de dívida, inadimplência privada e pré-colapso contábil:
  1. CVM Dados Abertos — IPE (Documentos Eventuais 2026 limpos de ruído Art. 12 / Res. 44:
     AGDs, Waivers, Standstill, PIK, Conta Vinculada, Cautelares Art. 20-B, PRE/RJ e Carve-outs).
  2. CVM Dados Abertos — Securitizadoras (`INF_MENSAL_CRA` & `INF_MENSAL_CRI` 2026):
     Captura empresas FECHADAS (`Ltda.` e `S.A.` de capital fechado do Agronegócio, Indústria e
     Real Estate) com concentração >= 20% em CRAs/CRIs em atraso, inadimplência ou PDD relevante.
  3. CVM Dados Abertos — ITR (`itr_cia_aberta_2026.zip`):
     Screening contábil trimestral pré-colapso (Dívida Bruta >= R$ 150M, Dívida CP >= 1,35x Caixa
     e Despesa Financeira >= 1,45x EBIT ou EBIT <= 0).
  4. DJEN / CNJ (`comunicaapi.pje.jus.br`) — sonda oportunista não-bloqueante.
  5. Receita Federal via BrasilAPI (+ fallback `publica.cnpj.ws`) — enriquecimento incremental de
     Razão Social (resolvendo nomes das `Ltda.` de CRA/CRI), QSA (`doc_socio`), Capital Social,
     CNAE e Grafo Societário Cross-QSA (`qsa_shared_links`) de contágio econômico.

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
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timedelta, timezone
from pathlib import Path

csv.field_size_limit(10_000_000)

ROOT_DIR = Path(__file__).resolve().parent
DEALS_PATH = ROOT_DIR / "deals.json"
LIVE_LEADS_PATH = ROOT_DIR / "live-leads.json"

USER_AGENT = "ValknutRadar/7.0 (SpecialSituationsResearch; +https://jmtddr.github.io/valknut-radar/)"
CVM_IPE_BASE = "https://dados.cvm.gov.br/dados/CIA_ABERTA/DOC/IPE/DADOS"
CVM_CRA_BASE = "https://dados.cvm.gov.br/dados/SECURIT/DOC/INF_MENSAL_CRA/DADOS"
CVM_CRI_BASE = "https://dados.cvm.gov.br/dados/SECURIT/DOC/INF_MENSAL_CRI/DADOS"
CVM_ITR_BASE = "https://dados.cvm.gov.br/dados/CIA_ABERTA/DOC/ITR/DADOS"
BRASILAPI_CNPJ_URL = "https://brasilapi.com.br/api/cnpj/v1/{cnpj}"
CNPJWS_URL = "https://publica.cnpj.ws/cnpj/{cnpj}"
DJEN_API_URL = "https://comunicaapi.pje.jus.br/api/v1/comunicacao"

BLOCKED_TOKEN_SHA256 = {
    "d252e0c8ec8a9a143e74a72447f3abaf7a4fad0f7755a819dcc9cd293980cc78"
}

MAX_TIER0_LEADS = 75
MAX_IPE_LEADS = 34
MAX_CRA_CRI_LEADS = 26
MAX_ITR_LEADS = 18
MAX_QSA_FETCH_PER_RUN = 210
QSA_CACHE_TTL_DAYS = 45

# Bloqueios absolutos de falsos positivos verificados em produção na CVM IPE
CVM_HARD_NOISE_SUBSTRINGS = (
    "art. 12",
    "artigo 12",
    "resolucao cvm 44",
    "res. cvm 44",
    "res cvm 44",
    "instrucao cvm 358",
    "icvm 358",
    "valores mobiliarios negociados e detidos",
    "posicao acionaria consolidada",
    "participacao acionaria relevante",
    "aquisicao de participacao acionaria",
    "alienacao de participacao acionaria relevante",
    "reducao de participacao acionaria",
    "aumento de participacao acionaria",
    "relatorio mensal de atividades",
    "contas demonstrativas mensais",
    "prestacao de contas do administrador",
    "quadro geral de credores",
    "encerramento da recuperacao judicial",
    "encerramento do processo de recuperacao",
    "sentenca de encerramento da recuperacao",
    "cumprimento das obrigacoes previstas no plano",
    "materiais da eleicao",
    "boletim de voto a distancia",
    "mapa consolidado de voto",
    "mapa final de votacao",
    "free float",
    "percentual minimo de acoes em circulacao",
    "waiver b3",
    "reajuste tarifario",
    "revisao tarifaria",
    "metas corporativas",
    "remuneracao dos administradores",
    "politica de dividendos",
)

# Avisos societários rotineiros ignorados salvo sinal inequívoco de estresse de dívida
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
    "ajuste de redacao",
    "ajustes de redacao",
    "troca de controle",
    "alienacao de controle",
)

# Palavras que indicam que "vencimento antecipado" é pedido de WAIVER/SUSTAÇÃO e não default consumado
WAIVER_DE_VENCIMENTO_MARKERS = (
    "nao declaracao de vencimento antecipado",
    "nao declaracao do vencimento antecipado",
    "nao decretacao de vencimento antecipado",
    "sustacao de vencimento antecipado",
    "dispensa de vencimento antecipado",
    "renuncia a declaracao de vencimento antecipado",
    "waiver",
)

# Regras de classificação pré-mídia (aplicadas apenas sobre Tipo + Espécie + Assunto, NUNCA sobre Categoria fixa)
CVM_SIGNAL_RULES = [
    (
        "Cautelar Art. 20-B / PRE / RJ",
        93,
        (
            "recuperacao extrajudicial",
            "pedido de recuperacao judicial",
            "ajuizamento de recuperacao judicial",
            "deferimento do processamento da recuperacao",
            "tutela cautelar",
            "cautelar antecedente",
            "art. 20-b",
            "artigo 20-b",
            "mediacao antecedente",
            "stay period",
            "suspensao das execucoes",
            "pedido de falencia",
            "autofalencia",
            "plano de recuperacao judicial",
            "plano de recuperacao extrajudicial",
            "aditamento ao plano de recuperacao",
        ),
    ),
    (
        "AGD / Waiver / PIK / Covenant",
        84,
        (
            "nao declaracao de vencimento",
            "nao declaracao do vencimento",
            "sustacao de vencimento",
            "dispensa de vencimento",
            "waiver",
            "descumprimento de covenant",
            "quebra de covenant",
            "indice financeiro",
            "indices financeiros",
            "suspensao de amortizacao",
            "suspensao do pagamento",
            "incorporacao da remuneracao",
            "incorporacao de juros",
            "capitalizacao de juros",
            "liberacao de conta vinculada",
            "liberacao da conta reserva",
            "prorrogacao de vencimento",
            "prorrogacao do prazo de vencimento",
            "alteracao da data de vencimento",
            "repactuacao",
            "standstill",
            "cleansing material",
            "blowout",
            "reestruturacao de divida",
            "reestruturacao financeira",
            "reperfilamento",
            "renegociacao de divida",
            "renegociacao de passivo",
            "assessores financeiros",
            "assessor financeiro para",
            "solicitada por debenturistas",
            "reforco de garantia",
            "substituicao do agente fiduciario",
        ),
    ),
    (
        "Vencimento Antecipado / Default / Downgrade",
        90,
        (
            "vencimento antecipado",
            "inadimplemento",
            "inadimplencia",
            "evento de default",
            "descumprimento de obrigacao pecuniaria",
            "nao pagamento da amortizacao",
            "nao pagamento de juros",
            "rebaixamento de rating",
            "rebaixamento da nota",
            "downgrade",
            "execucao de garantia",
            "excussao de garantia",
            "bloqueio judicial",
            "arresto",
        ),
    ),
    (
        "Carve-out / Desinvestimento / UPI",
        73,
        (
            "unidade produtiva isolada",
            "stalking horse",
            "carve-out",
            "carve out",
            "desinvestimento",
            "alienacao de ativo",
            "alienacao de ativos",
            "venda de ativo relevante",
            "venda de subsidiaria",
            "venda de unidade",
            "alienacao de unidade",
        ),
    ),
]

CORP_SUFFIX_RE = re.compile(
    r"(?<![a-z0-9])(?:s\.a\.|s/a|s\.a|ltda\.|ltda|eireli|me|epp|spe|participacoes|empreendimentos|holding|grupo|cia|companhia|brasil|do\s+brasil|de\s+investimentos|em\s+recuperacao\s+judic[i]?al)(?![a-z0-9])"
)

LEGACY_RJ_NAME_RE = re.compile(r"em\s+recuperacao\s+judic[i]?al|massa\s+falida|falid[oa]")

FINANCIAL_ISSUER_EXCLUDE_RE = re.compile(
    r"\b(?:banco|banrisul|bradesco|itau|santander|btg\s+pactual|abc\s+brasil|pine|daycoval|bmg|pan\s+s\.a|mercantil\s+do\s+brasil|"
    r"seguradora|seguros|previdencia|ressegur|porto\s+seguro|sul\s+america|irb\s+brasil|caixa\s+seguridade|bb\s+seguridade|"
    r"securitizadora|arrendamento\s+mercantil|leasing|b3\s+s\.a|cielo|stone|pagseguro|xp\s+inc|br\s+partners)\b"
)

HOMEBUILDER_RE = re.compile(
    r"\b(?:incorporad|construtor|empreendimentos\s+imobiliarios|cyrela|mrv|eztec|even|trisul|lavvi|plano\s+&\s+plano|cury|direcional|moura\s+dubeux|tenda|helbor|mitre|gafisa|pdg|viver|tecnisa|rossi|jhsf|log\s+commercial|syn\s+prop|multiplan|iguatemi|allos)\b"
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


def safe_float(val, default: float = 0.0) -> float:
    if val is None:
        return default
    s = str(val).strip()
    if not s:
        return default
    if "," in s and "." in s:
        s = s.replace(".", "").replace(",", ".")
    elif "," in s:
        s = s.replace(",", ".")
    try:
        return float(s)
    except Exception:
        return default


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


def http_get_bytes(url: str, timeout: int = 30, accept: str = "*/*") -> bytes:
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": USER_AGENT,
            "Accept": accept,
        },
    )
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read()


def clean_stem(name: str) -> str:
    emp_n = norm(name)
    stem = re.sub(r"\([^)]*\)", " ", emp_n)
    stem = CORP_SUFFIX_RE.sub(" ", stem)
    stem = re.sub(r"[^a-z0-9 ]+", " ", stem)
    return re.sub(r"\s+", " ", stem).strip()


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
        stem = clean_stem(d.get("empresa", ""))
        if len(stem) >= 5:
            by_stem[stem] = d
    return deals, by_cnpj, by_stem


def match_deal(cnpj14: str, empresa_nome: str, by_cnpj: dict, by_stem: dict):
    if cnpj14 and cnpj14 in by_cnpj:
        return by_cnpj[cnpj14]
    stem = clean_stem(empresa_nome)
    if not stem or len(stem) < 5:
        return None
    if stem in by_stem:
        return by_stem[stem]
    first_two = " ".join(stem.split()[:2])
    if len(first_two) >= 8:
        for k, deal in by_stem.items():
            if k == first_two or k.startswith(first_two + " "):
                return deal
    return None


def classify_cvm_filing(categoria: str, tipo: str, especie: str, assunto: str):
    cat_n = norm(categoria)
    tip_n = norm(tipo)
    esp_n = norm(especie)
    ass_n = norm(assunto)

    # CRÍTICO: nunca casar palavras-chave sobre `cat_n` isoladamente, pois a CVM possui categorias fixas
    # como "Informações de Companhias em Recuperação Judicial ou Extrajudicial" que geravam falsos positivos.
    target = f"{tip_n} {esp_n} {ass_n}".strip()
    full_meta = f"{cat_n} {target}".strip()

    if not ass_n and not esp_n:
        return None, 0

    # Bloqueio imediato de ruído societário/regulatório recorrente (Art. 12 CVM, RMA mensal, encerramento RJ, etc.)
    if any(bad in full_meta for bad in CVM_HARD_NOISE_SUBSTRINGS):
        return None, 0
    if "valores mobiliarios negociados" in cat_n or "politica de " in cat_n or "estatuto social" in cat_n:
        return None, 0
    if "ata da reuniao do conselho" in full_meta and not any(
        k in ass_n
        for k in (
            "recuperacao judicial",
            "recuperacao extrajudicial",
            "tutela cautelar",
            "art. 20-b",
            "standstill",
            "reestruturacao de divida",
            "reperfilamento",
            "inadimplemento",
            "waiver",
        )
    ):
        return None, 0

    has_hard_distress = any(
        kw in ass_n
        for kw in (
            "waiver",
            "standstill",
            "cleansing material",
            "blowout",
            "suspensao de amortizacao",
            "suspensao do pagamento",
            "incorporacao da remuneracao",
            "incorporacao de juros",
            "inadimplemento",
            "inadimplencia",
            "vencimento antecipado",
            "recuperacao extrajudicial",
            "pedido de recuperacao judicial",
            "tutela cautelar",
            "art. 20-b",
            "reestruturacao de divida",
            "reestruturacao financeira",
            "reperfilamento",
            "rebaixamento de rating",
            "downgrade",
            "liberacao de conta vinculada",
            "unidade produtiva isolada",
            "stalking horse",
        )
    )
    if not has_hard_distress and any(ex in full_meta for ex in CVM_ROUTINE_EXCLUSIONS):
        return None, 0

    # Se for pedido de não declaração / waiver de vencimento antecipado, classifica como AGD/Waiver (pré-default)
    if any(w in target for w in WAIVER_DE_VENCIMENTO_MARKERS):
        if (
            "emissao de debentures" in target
            or "oferta publica de distribuicao" in target
            or "escritura da " in target
        ) and "assembleia geral de debenturistas" not in full_meta and "agd" not in target:
            pass
        else:
            return "AGD / Waiver / PIK / Covenant", 85

    for label, base_score, keywords in CVM_SIGNAL_RULES:
        if any(kw in target for kw in keywords):
            if label == "AGD / Waiver / PIK / Covenant":
                if (
                    "emissao de debentures" in target
                    or "oferta publica" in target
                    or "distribuicao publica" in target
                ) and not has_hard_distress:
                    continue
                if "aviso aos debenturistas" in full_meta and not has_hard_distress:
                    continue
            if label == "Carve-out / Desinvestimento / UPI":
                if not any(c in cat_n for c in ("fato relevante", "comunicado ao mercado", "assembleia")):
                    continue
                if any(noise in full_meta for noise in ("fundo de investimento", "fii", "fiagro", "etf", "bdr")):
                    continue
            return label, base_score
    return None, 0


def collect_cvm_ipe_leads(now_utc: datetime, by_cnpj: dict, by_stem: dict):
    year = now_utc.year
    cutoff_date = (now_utc - timedelta(days=150)).strftime("%Y-%m-%d")
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
            print(f"[CVM IPE] Fallback from {url}: {exc}")

    if not zip_bytes:
        return [], {"status": "error", "url": candidate_urls[0], "filings_scanned": 0, "leads_exported": 0}

    scanned = 0
    matched_raw = []
    with zipfile.ZipFile(io.BytesIO(zip_bytes)) as zf:
        csv_names = [n for n in zf.namelist() if n.lower().endswith(".csv")]
        if not csv_names:
            return [], {"status": "empty_zip", "url": used_url, "filings_scanned": 0, "leads_exported": 0}
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
                if FINANCIAL_ISSUER_EXCLUDE_RE.search(norm(nome)):
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

    # Ordena priorizando maior severidade e data mais recente: 1 único card por CNPJ!
    matched_raw.sort(key=lambda r: (r["base_score"], r["data_entrega"]), reverse=True)

    grouped = {}
    for item in matched_raw:
        key = item["cnpj_digits"] or clean_stem(item["empresa"]) or norm(item["empresa"])
        if key not in grouped:
            item["filing_count"] = 1
            item["latest_entrega"] = item["data_entrega"]
            item["recent_assuntos"] = [item["assunto"][:160]]
            grouped[key] = item
        else:
            g = grouped[key]
            g["filing_count"] += 1
            if item["data_entrega"] > g["latest_entrega"]:
                g["latest_entrega"] = item["data_entrega"]
            snippet = item["assunto"][:160]
            if len(g["recent_assuntos"]) < 3 and snippet not in g["recent_assuntos"]:
                g["recent_assuntos"].append(snippet)

    today_dt = datetime.strptime(now_utc.strftime("%Y-%m-%d"), "%Y-%m-%d")
    leads = []
    for idx, item in enumerate(grouped.values(), start=1):
        deal = match_deal(item["cnpj_digits"], item["empresa"], by_cnpj, by_stem)
        dt_ref_age = item.get("latest_entrega") or item["data_entrega"]
        try:
            age_days = max(0, (today_dt - datetime.strptime(dt_ref_age, "%Y-%m-%d")).days)
        except Exception:
            age_days = 60

        emp_n = norm(item["empresa"])
        is_legacy_rj = bool(LEGACY_RJ_NAME_RE.search(emp_n))
        score = item["base_score"]
        if is_legacy_rj and "informacoes de companhias em recuperacao" in norm(item["categoria_cvm"]):
            score -= 20
        elif is_legacy_rj:
            score -= 8

        if age_days <= 10:
            score += 7
        elif age_days <= 25:
            score += 4
        elif age_days > 75:
            score -= 6

        if item["filing_count"] >= 4:
            score += 6
        elif item["filing_count"] >= 2:
            score += 3

        if not deal and not is_legacy_rj:
            score += 5
        score = max(50, min(97, int(round(score))))

        leads.append(
            {
                "id": f"cvm-ipe-{item['cnpj_digits'] or idx}",
                "lead_origin": "CVM IPE",
                "empresa": item["empresa"],
                "cnpj": item["cnpj"],
                "cnpj_digits": item["cnpj_digits"],
                "codigo_cvm": item["codigo_cvm"],
                "data_entrega": dt_ref_age,
                "data_referencia": item["data_referencia"],
                "signal_type": item["signal_type"],
                "categoria_cvm": item["categoria_cvm"],
                "tipo_cvm": item["tipo_cvm"],
                "assunto": item["assunto"][:240],
                "recent_assuntos": item["recent_assuntos"],
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

    leads.sort(key=lambda r: (r["fit_score"], r["data_entrega"], r["filing_count"]), reverse=True)
    top_leads = leads[:MAX_IPE_LEADS]
    return top_leads, {
        "status": "ok",
        "url": used_url,
        "filings_scanned": scanned,
        "signals_matched": len(matched_raw),
        "unique_leads": len(leads),
        "leads_exported": len(top_leads),
    }


def _parse_securit_zip(kind: str, base_url: str, year: int):
    """Lê INF_MENSAL_CRA ou INF_MENSAL_CRI e extrai devedores corporativos concentrados em atraso/PDD."""
    prefix = f"inf_mensal_{kind.lower()}"
    zip_bytes = None
    used_url = None
    for y in (year, year - 1):
        url = f"{base_url}/{prefix}_{y}.zip"
        try:
            zip_bytes = http_get_bytes(url, timeout=35)
            used_url = url
            break
        except Exception as exc:
            print(f"[CVM {kind}] Fallback from {url}: {exc}")

    if not zip_bytes:
        return [], {"status": "error", "certs_scanned": 0, "stressed_certs": 0}

    # Chave do certificado: (cnpj_sec14, cod_cert)
    latest_ver = {}
    ap_rows = {}
    geral_rows = {}
    classe_info = defaultdict(lambda: {"situacoes": set(), "cetips": set(), "integralizado": 0.0, "taxas": []})
    devedores_by_cert = defaultdict(list)

    with zipfile.ZipFile(io.BytesIO(zip_bytes)) as zf:
        names = {n.lower(): n for n in zf.namelist()}

        def find_member(sub: str):
            for low, orig in names.items():
                if sub in low and low.endswith(".csv"):
                    return orig
            return None

        # 1. Ativo/Passivo: descobre o último (Data_Referencia, Versao) por certificado
        ap_name = find_member("_ativo_passivo_")
        if ap_name:
            with zf.open(ap_name) as raw_f:
                reader = csv.DictReader(io.TextIOWrapper(raw_f, encoding="latin-1", errors="replace"), delimiter=";")
                for r in reader:
                    c_sec = digits_only(r.get("CNPJ_Emissora"))
                    cert = (r.get("Codigo_Identificacao_Certificado") or "").strip()
                    if not cert:
                        continue
                    dt_ref = (r.get("Data_Referencia") or "").strip()[:10]
                    ver = int(safe_float(r.get("Versao"), 0))
                    key = (c_sec, cert)
                    rk = (dt_ref, ver)
                    if key not in latest_ver or rk >= latest_ver[key]:
                        latest_ver[key] = rk
                        ap_rows[key] = r

        # 2. Geral (Securitizadora, Agente Fiduciário, Nome da Emissão)
        g_name = find_member("_geral_")
        if g_name:
            with zf.open(g_name) as raw_f:
                reader = csv.DictReader(io.TextIOWrapper(raw_f, encoding="latin-1", errors="replace"), delimiter=";")
                for r in reader:
                    key = (digits_only(r.get("CNPJ_Emissora")), (r.get("Codigo_Identificacao_Certificado") or "").strip())
                    rk = ((r.get("Data_Referencia") or "").strip()[:10], int(safe_float(r.get("Versao"), 0)))
                    if key in latest_ver and rk == latest_ver[key]:
                        geral_rows[key] = r

        # 3. Classe (Situacao == 'Em atraso', Codigo_CETIP, Valor Integralizado)
        cl_name = find_member("_classe_")
        if cl_name:
            with zf.open(cl_name) as raw_f:
                reader = csv.DictReader(io.TextIOWrapper(raw_f, encoding="latin-1", errors="replace"), delimiter=";")
                for r in reader:
                    key = (digits_only(r.get("CNPJ_Emissora")), (r.get("Codigo_Identificacao_Certificado") or "").strip())
                    rk = ((r.get("Data_Referencia") or "").strip()[:10], int(safe_float(r.get("Versao"), 0)))
                    if key not in latest_ver or rk != latest_ver[key]:
                        continue
                    info = classe_info[key]
                    sit = (r.get("Situacao") or "").strip()
                    if sit:
                        info["situacoes"].add(sit)
                    cetip = (r.get("Codigo_CETIP") or "").strip()
                    if cetip:
                        info["cetips"].add(cetip)
                    v_int = safe_float(r.get("Valor_Total_Integralizado") or r.get("Total_Integralizado") or r.get("Valor"))
                    info["integralizado"] += max(0.0, v_int)
                    tx = (r.get("Taxa_Juros") or "").strip()
                    if tx and len(info["taxas"]) < 2:
                        info["taxas"].append(tx)

        # 4. Identifica quais certificados estão estressados antes de carregar cedentes/devedores
        stressed_keys = {}
        for key, ap in ap_rows.items():
            cl = classe_info.get(key, {})
            sits_norm = " | ".join(norm(s) for s in cl.get("situacoes", set()))
            has_sit_atraso = any(
                k in sits_norm for k in ("atraso", "inadimpl", "vencimento antecipado", "execucao", "reestrutur")
            )
            cred_venc = max(0.0, safe_float(ap.get("Creditos_Vencidos")))
            cred_atr = max(0.0, safe_float(ap.get("Creditos_A_Vencer_Com_Parcelas_Atraso")))
            pdd = max(0.0, safe_float(ap.get("Reducao_Valor_Recuperacao")))
            ativo = max(
                0.0,
                safe_float(ap.get("Valor_Atualizado_Emissao")),
                safe_float(ap.get("Direitos_Creditorios") or ap.get("Creditos")),
                safe_float(ap.get("Ativo")),
                cl.get("integralizado", 0.0),
            )
            impaired = cred_venc + pdd
            if not has_sit_atraso:
                if impaired < 20_000_000 or (ativo > 0 and (impaired / ativo) < 0.12):
                    continue
            if ativo < 15_000_000 and impaired < 15_000_000:
                continue
            stressed_keys[key] = {
                "has_sit_atraso": has_sit_atraso,
                "situacoes": sorted(cl.get("situacoes", set())),
                "cetips": sorted(cl.get("cetips", set())),
                "ativo": ativo,
                "cred_venc": cred_venc,
                "cred_atr": cred_atr,
                "pdd": pdd,
                "dt_ref": latest_ver[key][0],
            }

        # 5. Cedente / Devedor apenas dos certificados estressados (concentração >= 20% e CNPJ válido!)
        cd_name = find_member("_cedente_devedor_")
        if cd_name and stressed_keys:
            with zf.open(cd_name) as raw_f:
                reader = csv.DictReader(io.TextIOWrapper(raw_f, encoding="latin-1", errors="replace"), delimiter=";")
                for r in reader:
                    c_sec = digits_only(r.get("CNPJ_Emissora"))
                    cert = (r.get("Codigo_Identificacao_Certificado") or "").strip()
                    key = (c_sec, cert)
                    if key not in stressed_keys:
                        continue
                    rk = ((r.get("Data_Referencia") or "").strip()[:10], int(safe_float(r.get("Versao"), 0)))
                    if rk != latest_ver[key]:
                        continue
                    deb_cnpj = digits_only(r.get("CNPJ"))
                    if not is_valid_cnpj(deb_cnpj) or deb_cnpj == c_sec:
                        continue
                    pct_raw = safe_float(r.get("Percentual"), 0.0)
                    share = (pct_raw / 100.0) if pct_raw > 1.0001 else pct_raw
                    share = max(0.0, min(1.0, share))
                    if share < 0.20:
                        continue
                    devedores_by_cert[key].append(
                        {
                            "cnpj14": deb_cnpj,
                            "tipo_papel": (r.get("Tipo") or "Devedor").strip(),
                            "share": share,
                        }
                    )

    records = []
    for key, st in stressed_keys.items():
        devs = devedores_by_cert.get(key) or []
        if not devs:
            continue
        # Se houver tanto Devedor quanto Cedente para o mesmo lastro, prioriza Devedor para não duplicar o cedente financeiro
        only_devedores = [d for d in devs if "devedor" in norm(d["tipo_papel"])]
        chosen_devs = only_devedores if only_devedores else devs
        # Deduplica CNPJ dentro do mesmo certificado mantendo o maior share
        by_deb = {}
        for d in chosen_devs:
            c14 = d["cnpj14"]
            if c14 not in by_deb or d["share"] > by_deb[c14]["share"]:
                by_deb[c14] = d

        g = geral_rows.get(key) or {}
        sec_nome = (g.get("Companhia_Emissora") or "").strip()
        fiduciario = (g.get("Agente_Fiduciario") or "").strip()
        dt_entrega = (g.get("Data_Entrega") or st["dt_ref"] or "").strip()[:10]
        lastro = (g.get("Detalhamento_Lastro") or g.get("Tipo_Lastro") or g.get("Segmento_Creditos_Vinculados") or "").strip()

        for c14, d in by_deb.items():
            sh = d["share"]
            exp_mm = round((st["ativo"] * sh) / 1_000_000.0, 2)
            imp_mm = round(((st["cred_venc"] + st["pdd"]) * sh) / 1_000_000.0, 2)
            if exp_mm < 15.0 and imp_mm < 12.0:
                continue
            records.append(
                {
                    "kind": kind,
                    "cnpj14": c14,
                    "cert": key[1],
                    "cetips": st["cetips"][:3],
                    "situacoes": st["situacoes"],
                    "has_sit_atraso": st["has_sit_atraso"],
                    "share_pct": round(sh * 100.0, 1),
                    "exposure_mm": exp_mm,
                    "impaired_mm": imp_mm,
                    "securitizadora": sec_nome,
                    "agente_fiduciario": fiduciario,
                    "lastro": lastro,
                    "dt_ref": st["dt_ref"],
                    "dt_entrega": dt_entrega or st["dt_ref"],
                    "url": used_url,
                }
            )

    return records, {
        "status": "ok",
        "url": used_url,
        "certs_scanned": len(ap_rows),
        "stressed_certs": len(stressed_keys),
        "debtor_links": len(records),
    }


def collect_cvm_cra_cri_leads(now_utc: datetime, by_cnpj: dict, by_stem: dict):
    year = now_utc.year
    cra_recs, cra_meta = _parse_securit_zip("CRA", CVM_CRA_BASE, year)
    cri_recs, cri_meta = _parse_securit_zip("CRI", CVM_CRI_BASE, year)

    agg = {}
    for rec in cra_recs + cri_recs:
        c14 = rec["cnpj14"]
        if c14 not in agg:
            agg[c14] = {
                "cnpj14": c14,
                "kinds": set(),
                "certs": set(),
                "cetips": set(),
                "securitizadoras": set(),
                "fiduciarios": set(),
                "situacoes": set(),
                "has_sit_atraso": False,
                "exposure_mm": 0.0,
                "impaired_mm": 0.0,
                "dt_entrega": rec["dt_entrega"],
                "dt_ref": rec["dt_ref"],
                "url": rec["url"],
            }
        a = agg[c14]
        a["kinds"].add(rec["kind"])
        a["certs"].add(rec["cert"])
        for ct in rec["cetips"]:
            a["cetips"].add(ct)
        if rec["securitizadora"]:
            a["securitizadoras"].add(rec["securitizadora"])
        if rec["agente_fiduciario"]:
            a["fiduciarios"].add(rec["agente_fiduciario"])
        for s in rec["situacoes"]:
            a["situacoes"].add(s)
        a["has_sit_atraso"] = a["has_sit_atraso"] or rec["has_sit_atraso"]
        a["exposure_mm"] += rec["exposure_mm"]
        a["impaired_mm"] += rec["impaired_mm"]
        if rec["dt_entrega"] > a["dt_entrega"]:
            a["dt_entrega"] = rec["dt_entrega"]
        if rec["dt_ref"] > a["dt_ref"]:
            a["dt_ref"] = rec["dt_ref"]

    leads = []
    for c14, a in agg.items():
        deal = by_cnpj.get(c14)
        exp_mm = round(a["exposure_mm"], 1)
        imp_mm = round(a["impaired_mm"], 1)
        kinds_str = "/".join(sorted(a["kinds"]))
        secs = sorted(a["securitizadoras"])
        fids = sorted(a["fiduciarios"])
        cetips = sorted(a["cetips"])[:4]

        # Score de originação calibrado por materialidade (sweet spot R$ 50M - R$ 2.5B e devedor fora da planilha)
        score = 83 if a["has_sit_atraso"] else 78
        if 60.0 <= exp_mm <= 1800.0:
            score += 6
        elif exp_mm > 1800.0:
            score += 4
        if imp_mm >= 80.0:
            score += 4
        elif imp_mm >= 25.0:
            score += 2
        if not deal:
            score += 4
        score = max(65, min(96, int(round(score))))

        sit_badge = "Em Atraso" if a["has_sit_atraso"] else "Vencidos / PDD Relevante"
        sec_short = secs[0].split()[0] if secs else "Securitizadora"
        fid_short = fids[0].split()[0] if fids else "Ag. Fiduciário"
        cetip_txt = f" [{', '.join(cetips[:2])}]" if cetips else ""
        exp_fmt = f"{exp_mm:,.1f}".replace(",", "X").replace(".", ",").replace("X", ".")
        imp_fmt = f"{imp_mm:,.1f}".replace(",", "X").replace(".", ",").replace("X", ".")
        assunto = (
            f"{kinds_str} {sit_badge}{cetip_txt}: R$ {exp_fmt}M lastreados "
            f"(R$ {imp_fmt}M vencidos/PDD) • Sec.: {sec_short} • AF: {fid_short}"
        )

        empresa_init = deal.get("empresa") if deal else f"Devedor {kinds_str} ({format_cnpj(c14)})"
        leads.append(
            {
                "id": f"cvm-sec-{c14}",
                "lead_origin": "CVM CRA/CRI",
                "empresa": empresa_init,
                "needs_qsa_name": not bool(deal),
                "cnpj": format_cnpj(c14),
                "cnpj_digits": c14,
                "codigo_cvm": "",
                "data_entrega": a["dt_entrega"],
                "data_referencia": a["dt_ref"],
                "signal_type": f"{kinds_str} em Atraso / PDD (Dívida Privada)",
                "categoria_cvm": f"Informe Mensal {kinds_str} (CVM Securitizadoras)",
                "tipo_cvm": sit_badge,
                "assunto": assunto[:240],
                "recent_assuntos": [assunto[:160]],
                "link_download": a["url"] or "",
                "filing_count": len(a["certs"]),
                "exposicao_cra_cri_mm": exp_mm,
                "atraso_pdd_mm": imp_mm,
                "securitizadora": ", ".join(secs[:2]),
                "agente_fiduciario": ", ".join(fids[:2]),
                "cetip_codes": cetips,
                "in_pipeline": bool(deal),
                "deal_id": deal.get("id") if deal else None,
                "deal_empresa": deal.get("empresa") if deal else None,
                "deal_passivo_mm": deal.get("passivo_mm") if deal else None,
                "fit_score": score,
                "source": f"CVM {kinds_str} 2026",
            }
        )

    # Prioriza não-mapeados + sweet spot + maior atraso/exposição
    leads.sort(key=lambda r: (not r["in_pipeline"], r["fit_score"], r["atraso_pdd_mm"], r["exposicao_cra_cri_mm"]), reverse=True)
    top_leads = leads[:MAX_CRA_CRI_LEADS]
    return top_leads, {
        "status": "ok",
        "cra": cra_meta,
        "cri": cri_meta,
        "unique_stressed_debtors": len(leads),
        "leads_exported": len(top_leads),
    }


def collect_cvm_itr_leads(now_utc: datetime, by_cnpj: dict, by_stem: dict):
    """Screening contábil trimestral pré-colapso sobre `itr_cia_aberta_2026.zip`."""
    year = now_utc.year
    zip_bytes = None
    used_url = None
    for y in (year, year - 1):
        url = f"{CVM_ITR_BASE}/itr_cia_aberta_{y}.zip"
        try:
            zip_bytes = http_get_bytes(url, timeout=45)
            used_url = url
            break
        except Exception as exc:
            print(f"[CVM ITR] Fallback from {url}: {exc}")

    if not zip_bytes:
        return [], {"status": "error", "issuers_scanned": 0, "leads_exported": 0}

    latest_meta = {}
    with zipfile.ZipFile(io.BytesIO(zip_bytes)) as zf:
        names = {n.lower(): n for n in zf.namelist()}

        def find_exact_suffix(suf: str):
            for low, orig in names.items():
                if low.endswith(suf):
                    return orig
            return None

        idx_csv = None
        for low, orig in names.items():
            if re.search(r"itr_cia_aberta_\d{4}\.csv$", low):
                idx_csv = orig
                break

        if idx_csv:
            with zf.open(idx_csv) as raw_f:
                reader = csv.DictReader(io.TextIOWrapper(raw_f, encoding="latin-1", errors="replace"), delimiter=";")
                for r in reader:
                    c14 = digits_only(r.get("CNPJ_CIA"))
                    if len(c14) != 14:
                        continue
                    dt_ref = (r.get("DT_REFER") or "").strip()[:10]
                    ver = int(safe_float(r.get("VERSAO"), 0))
                    rk = (dt_ref, ver)
                    if c14 not in latest_meta or rk >= latest_meta[c14]["rk"]:
                        latest_meta[c14] = {
                            "rk": rk,
                            "dt_refer": dt_ref,
                            "versao": ver,
                            "denom": (r.get("DENOM_CIA") or "").strip(),
                            "cd_cvm": (r.get("CD_CVM") or "").strip(),
                            "dt_receb": (r.get("DT_RECEB") or dt_ref).strip()[:10],
                            "link_doc": (r.get("LINK_DOC") or "").strip(),
                        }

        accts = defaultdict(dict)

        def read_balance_csv(member_name: str, target_codes: set, fallback_only: bool = False):
            if not member_name:
                return
            with zf.open(member_name) as raw_f:
                reader = csv.DictReader(io.TextIOWrapper(raw_f, encoding="latin-1", errors="replace"), delimiter=";")
                for r in reader:
                    if (r.get("ORDEM_EXERC") or "").strip() != "ÚLTIMO":
                        continue
                    cd = (r.get("CD_CONTA") or "").strip()
                    if cd not in target_codes:
                        continue
                    c14 = digits_only(r.get("CNPJ_CIA"))
                    meta = latest_meta.get(c14)
                    if not meta:
                        continue
                    rk = ((r.get("DT_REFER") or "").strip()[:10], int(safe_float(r.get("VERSAO"), 0)))
                    if rk != meta["rk"]:
                        continue
                    if fallback_only and cd in accts[c14]:
                        continue
                    escala = (r.get("ESCALA_MOEDA") or "").strip().upper()
                    val = safe_float(r.get("VL_CONTA"), 0.0)
                    val_mm = (val / 1000.0) if escala == "MIL" else (val / 1_000_000.0)
                    accts[c14][cd] = val_mm

        read_balance_csv(find_exact_suffix("_bpa_con_2026.csv") or find_exact_suffix("_bpa_con_2025.csv"), {"1.01.01", "1.01.02"})
        read_balance_csv(find_exact_suffix("_bpp_con_2026.csv") or find_exact_suffix("_bpp_con_2025.csv"), {"2.01.04", "2.02.01", "2.03"})
        read_balance_csv(find_exact_suffix("_bpa_ind_2026.csv") or find_exact_suffix("_bpa_ind_2025.csv"), {"1.01.01", "1.01.02"}, fallback_only=True)
        read_balance_csv(find_exact_suffix("_bpp_ind_2026.csv") or find_exact_suffix("_bpp_ind_2025.csv"), {"2.01.04", "2.02.01", "2.03"}, fallback_only=True)

        # DRE: prioriza janela acumulada no ano (DT_INI_EXERC terminando em -01-01 ou maior span de dias)
        dre_spans = defaultdict(dict)

        def read_dre_csv(member_name: str, fallback_only: bool = False):
            if not member_name:
                return
            with zf.open(member_name) as raw_f:
                reader = csv.DictReader(io.TextIOWrapper(raw_f, encoding="latin-1", errors="replace"), delimiter=";")
                for r in reader:
                    if (r.get("ORDEM_EXERC") or "").strip() != "ÚLTIMO":
                        continue
                    cd = (r.get("CD_CONTA") or "").strip()
                    if cd not in {"3.01", "3.05", "3.06.02"}:
                        continue
                    c14 = digits_only(r.get("CNPJ_CIA"))
                    meta = latest_meta.get(c14)
                    if not meta:
                        continue
                    rk = ((r.get("DT_REFER") or "").strip()[:10], int(safe_float(r.get("VERSAO"), 0)))
                    if rk != meta["rk"]:
                        continue
                    if fallback_only and cd in accts[c14]:
                        continue
                    dt_ini = (r.get("DT_INI_EXERC") or "").strip()[:10]
                    dt_fim = (r.get("DT_FIM_EXERC") or "").strip()[:10]
                    is_ytd = 1 if dt_ini.endswith("-01-01") else 0
                    span_key = (is_ytd, dt_fim, f"-{dt_ini}")
                    prev_span = dre_spans[c14].get(cd)
                    if prev_span and span_key < prev_span:
                        continue
                    escala = (r.get("ESCALA_MOEDA") or "").strip().upper()
                    val = safe_float(r.get("VL_CONTA"), 0.0)
                    val_mm = (val / 1000.0) if escala == "MIL" else (val / 1_000_000.0)
                    dre_spans[c14][cd] = span_key
                    accts[c14][cd] = val_mm

        read_dre_csv(find_exact_suffix("_dre_con_2026.csv") or find_exact_suffix("_dre_con_2025.csv"))
        read_dre_csv(find_exact_suffix("_dre_ind_2026.csv") or find_exact_suffix("_dre_ind_2025.csv"), fallback_only=True)

    leads = []
    for c14, m in latest_meta.items():
        denom = m["denom"]
        denom_n = norm(denom)
        if not denom or contains_blocked_entity(denom):
            continue
        if FINANCIAL_ISSUER_EXCLUDE_RE.search(denom_n):
            continue
        if LEGACY_RJ_NAME_RE.search(denom_n):
            continue

        a = accts.get(c14) or {}
        caixa = max(0.0, a.get("1.01.01", 0.0) + a.get("1.01.02", 0.0))
        div_cp = max(0.0, a.get("2.01.04", 0.0))
        div_lp = max(0.0, a.get("2.02.01", 0.0))
        div_bruta = div_cp + div_lp
        pl = a.get("2.03", 0.0)
        receita = a.get("3.01", 0.0)
        ebit = a.get("3.05", 0.0)
        raw_fin = a.get("3.06.02", 0.0)
        desp_fin = abs(raw_fin) if raw_fin < 0 else raw_fin

        # Exige operação real e dívida bruta relevante (>= R$ 150M)
        if div_bruta < 150.0 or receita < 25.0:
            continue
        # Parede de liquidez de curto prazo: Dívida CP >= R$ 80M e >= 1,35x Caixa
        if div_cp < 80.0 or div_cp < 1.35 * max(1.0, caixa):
            continue
        # Asfixia financeira: EBIT <= 0 ou Despesa Financeira >= 1,45x EBIT
        if ebit > 0 and desp_fin < 1.45 * ebit:
            continue
        # Incorporadoras/construtoras: evita falso positivo de SFH saudável exigindo PL < 0 ou EBIT < 0
        if HOMEBUILDER_RE.search(denom_n) and pl >= 0 and ebit >= 0:
            continue

        deal = match_deal(c14, denom, by_cnpj, by_stem)
        cp_caixa_ratio = round(div_cp / max(5.0, caixa), 2)

        score = 80
        if cp_caixa_ratio >= 3.0:
            score += 5
        elif cp_caixa_ratio >= 2.0:
            score += 3
        if pl < 0:
            score += 5
        if ebit <= 0:
            score += 3
        if 150.0 <= div_bruta <= 2800.0:
            score += 4
        if not deal:
            score += 3
        score = max(68, min(95, int(round(score))))

        pl_tag = f" • PL R$ {pl:,.0f}M (Passivo a Descoberto)" if pl < 0 else ""
        cob_tag = "EBIT Negativo" if ebit <= 0 else f"Desp. Fin. {desp_fin / max(1.0, ebit):.1f}x EBIT"
        assunto = (
            f"ITR {m['dt_refer'][:7]}: Dívida Bruta R$ {div_bruta:,.0f}M | "
            f"CP R$ {div_cp:,.0f}M vs. Caixa R$ {caixa:,.0f}M ({cp_caixa_ratio:.1f}x) • {cob_tag}{pl_tag}"
        ).replace(",", ".")

        leads.append(
            {
                "id": f"cvm-itr-{c14}",
                "lead_origin": "CVM ITR Contábil",
                "empresa": denom,
                "cnpj": format_cnpj(c14),
                "cnpj_digits": c14,
                "codigo_cvm": m["cd_cvm"],
                "data_entrega": m["dt_receb"],
                "data_referencia": m["dt_refer"],
                "signal_type": "Pré-Colapso Contábil (ITR: Dívida CP > Caixa)",
                "categoria_cvm": "Demonstrações Trimestrais ITR (Consolidado)",
                "tipo_cvm": f"Parede de Liquidez ({cp_caixa_ratio:.1f}x CP/Caixa)",
                "assunto": assunto[:240],
                "recent_assuntos": [assunto[:160]],
                "link_download": m["link_doc"],
                "filing_count": 1,
                "itr_metrics": {
                    "divida_bruta_mm": round(div_bruta, 1),
                    "divida_cp_mm": round(div_cp, 1),
                    "caixa_mm": round(caixa, 1),
                    "pl_mm": round(pl, 1),
                    "ebit_mm": round(ebit, 1),
                    "desp_fin_mm": round(desp_fin, 1),
                    "cp_caixa_x": cp_caixa_ratio,
                },
                "in_pipeline": bool(deal),
                "deal_id": deal.get("id") if deal else None,
                "deal_empresa": deal.get("empresa") if deal else None,
                "deal_passivo_mm": deal.get("passivo_mm") if deal else None,
                "fit_score": score,
                "source": "CVM ITR 2026",
            }
        )

    leads.sort(key=lambda r: (not r["in_pipeline"], r["fit_score"], r["itr_metrics"]["divida_bruta_mm"]), reverse=True)
    top_leads = leads[:MAX_ITR_LEADS]
    return top_leads, {
        "status": "ok",
        "url": used_url,
        "issuers_scanned": len(latest_meta),
        "candidates_flagged": len(leads),
        "leads_exported": len(top_leads),
    }


def merge_multi_engine_leads(ipe_leads: list, sec_leads: list, itr_leads: list) -> list:
    """Funde os 3 motores pré-mídia por CNPJ, bonificando emissores com convergência de sinais."""
    merged = {}
    for lead in ipe_leads + sec_leads + itr_leads:
        key = lead.get("cnpj_digits") or lead["id"]
        if key not in merged:
            lead["origins"] = [lead["lead_origin"]]
            merged[key] = lead
        else:
            cur = merged[key]
            if lead["lead_origin"] not in cur["origins"]:
                cur["origins"].append(lead["lead_origin"])
            cur["multi_signal"] = True
            cur["fit_score"] = min(98, max(cur["fit_score"], lead["fit_score"]) + 4)
            # Preserva nome real se o primeiro veio de CRA/CRI sem nome ainda
            if cur.get("needs_qsa_name") and not lead.get("needs_qsa_name"):
                cur["empresa"] = lead["empresa"]
                cur["needs_qsa_name"] = False
            # Anexa métricas complementares
            for k in ("exposicao_cra_cri_mm", "atraso_pdd_mm", "securitizadora", "agente_fiduciario", "cetip_codes", "itr_metrics"):
                if k in lead and k not in cur:
                    cur[k] = lead[k]
            for sn in lead.get("recent_assuntos") or []:
                if len(cur.get("recent_assuntos", [])) < 4 and sn not in cur["recent_assuntos"]:
                    cur.setdefault("recent_assuntos", []).append(sn)

    out = list(merged.values())
    out.sort(key=lambda r: (r["fit_score"], r.get("data_entrega") or ""), reverse=True)
    return out[:MAX_TIER0_LEADS]


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
        return [], {"status": "ok", "items_seen": len(items), "note": "DJEN CNJ acessível"}
    except urllib.error.HTTPError as he:
        return [], {
            "status": f"http_{he.code}",
            "items_seen": 0,
            "note": "DJEN CNJ indisponível / geobloqueado no runner de nuvem (cobertura ativa via CVM IPE + CRA/CRI + ITR + RSS)",
        }
    except Exception as exc:
        return [], {"status": "unavailable", "items_seen": 0, "note": f"DJEN CNJ indisponível ({type(exc).__name__})"}


def fetch_single_qsa(cnpj14: str, today_str: str):
    """Consulta QSA via BrasilAPI (primário) e publica.cnpj.ws (fallback), preservando `doc_socio`."""
    url = BRASILAPI_CNPJ_URL.format(cnpj=cnpj14)
    try:
        raw = http_get_bytes(url, timeout=12, accept="application/json")
        d = json.loads(raw.decode("utf-8", errors="replace"))
        if isinstance(d, dict) and d.get("razao_social"):
            qsa_list = []
            for s in (d.get("qsa") or [])[:12]:
                nome = (s.get("nome_socio") or "").strip()
                qual = (s.get("qualificacao_socio") or "").strip()
                doc = (s.get("cnpj_cpf_do_socio") or "").strip()
                if nome and not contains_blocked_entity(nome):
                    entry = {"nome": nome, "qualificacao": qual}
                    if doc:
                        entry["doc_socio"] = doc
                    qsa_list.append(entry)
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
                doc = (s.get("cpf_cnpj_socio") or "").strip()
                if nome and not contains_blocked_entity(nome):
                    entry = {"nome": nome, "qualificacao": qual}
                    if doc:
                        entry["doc_socio"] = doc
                    qsa_list.append(entry)
            cap_val = safe_float(d2.get("capital_social"), 0.0)
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
                if data and not contains_blocked_entity(data.get("razao_social", "")):
                    existing_qsa[c14] = data
                    fetched_ok += 1

    valid_set = set(ordered_cnpjs)
    pruned_qsa = {k: v for k, v in existing_qsa.items() if k in valid_set}
    return pruned_qsa, {
        "total_valid_cnpjs": len(ordered_cnpjs),
        "cached_total": len(pruned_qsa),
        "fetched_this_run": fetched_ok,
        "attempted_this_run": len(to_fetch),
    }


def build_cross_qsa_links(deals: list, tier0_leads: list, qsa_by_cnpj: dict) -> list:
    """Constrói o Grafo Societário Cross-QSA identificando sócios/administradores/holdings em >= 2 empresas."""
    entity_by_cnpj = {}
    for d in deals:
        c14 = digits_only(d.get("cnpj"))
        if len(c14) == 14:
            entity_by_cnpj[c14] = {
                "cnpj_digits": c14,
                "empresa": d.get("empresa") or "",
                "in_pipeline": True,
                "deal_id": d.get("id"),
                "lead_id": None,
                "passivo_mm": safe_float(d.get("passivo_mm"), 0.0),
                "status_rj": d.get("tipo_procedimento") or d.get("status_processual") or "Pipeline",
            }

    for lead in tier0_leads:
        c14 = lead.get("cnpj_digits") or ""
        if len(c14) != 14:
            continue
        if c14 in entity_by_cnpj:
            entity_by_cnpj[c14]["lead_id"] = lead["id"]
            entity_by_cnpj[c14]["signal_type"] = lead.get("signal_type")
        else:
            entity_by_cnpj[c14] = {
                "cnpj_digits": c14,
                "empresa": lead.get("empresa") or "",
                "in_pipeline": False,
                "deal_id": None,
                "lead_id": lead["id"],
                "passivo_mm": safe_float(lead.get("exposicao_cra_cri_mm") or (lead.get("itr_metrics") or {}).get("divida_bruta_mm"), 0.0),
                "status_rj": lead.get("lead_origin") or "Tier 0",
                "signal_type": lead.get("signal_type"),
            }

    appearances = defaultdict(dict)
    socio_display = {}

    for c14, qdata in qsa_by_cnpj.items():
        ent = entity_by_cnpj.get(c14)
        if not ent:
            continue
        for s in qdata.get("qsa") or []:
            nome = (s.get("nome") or "").strip()
            nome_n = norm(nome)
            if len(nome_n) < 10 or len(nome_n.split()) < 2:
                continue
            if contains_blocked_entity(nome_n) or FINANCIAL_ISSUER_EXCLUDE_RE.search(nome_n):
                continue
            if any(b in nome_n for b in ("uniao federal", "tesouro nacional", "bndespar", "caixa economica")):
                continue
            doc = digits_only(s.get("doc_socio"))
            key = f"pj:{doc}" if len(doc) == 14 else f"nm:{nome_n}"
            socio_display[key] = {
                "socio": nome,
                "qualificacao": (s.get("qualificacao") or "").strip(),
                "is_holding_pj": len(doc) == 14 or bool(CORP_SUFFIX_RE.search(nome_n)),
            }
            appearances[key][c14] = ent

    links = []
    for key, cnpj_map in appearances.items():
        if len(cnpj_map) < 2:
            continue
        ents = list(cnpj_map.values())
        distinct_roots = { (clean_stem(e["empresa"]).split() or [e["cnpj_digits"]])[0] for e in ents }
        is_cross_brand = len(distinct_roots) >= 2
        has_lead = any(e.get("lead_id") for e in ents)
        has_deal = any(e.get("in_pipeline") for e in ents)
        total_passivo = round(sum(e.get("passivo_mm") or 0.0 for e in ents), 1)
        info = socio_display[key]
        links.append(
            {
                "socio": info["socio"],
                "qualificacao": info["qualificacao"],
                "is_holding_pj": info["is_holding_pj"],
                "cross_brand_group": is_cross_brand,
                "companies_count": len(ents),
                "bridges_pipeline_and_premedia": bool(has_lead and has_deal),
                "combined_exposure_mm": total_passivo,
                "empresas": [
                    {
                        "cnpj_digits": e["cnpj_digits"],
                        "empresa": e["empresa"],
                        "in_pipeline": e["in_pipeline"],
                        "deal_id": e["deal_id"],
                        "lead_id": e["lead_id"],
                        "status": e.get("signal_type") or e.get("status_rj"),
                    }
                    for e in ents[:6]
                ],
            }
        )

    links.sort(
        key=lambda x: (
            x["cross_brand_group"],
            x["bridges_pipeline_and_premedia"],
            x["is_holding_pj"],
            x["companies_count"],
            x["combined_exposure_mm"],
        ),
        reverse=True,
    )
    return links[:80]


def main():
    now_utc = datetime.now(timezone.utc)
    now_br = now_utc.astimezone(timezone(timedelta(hours=-3)))

    deals, by_cnpj, by_stem = load_deals_index()
    print(f"[Radar] Pipeline base carregado: {len(deals)} grupos econômicos reais.")

    ipe_leads, cvm_meta = collect_cvm_ipe_leads(now_utc, by_cnpj, by_stem)
    print(
        f"[CVM IPE] {cvm_meta.get('filings_scanned', 0)} docs -> "
        f"{cvm_meta.get('leads_exported', 0)} leads limpos (de {cvm_meta.get('unique_leads', 0)} únicos)."
    )

    sec_leads, sec_meta = collect_cvm_cra_cri_leads(now_utc, by_cnpj, by_stem)
    print(
        f"[CVM CRA/CRI] {sec_meta.get('unique_stressed_debtors', 0)} devedores corporativos em atraso/PDD -> "
        f"{sec_meta.get('leads_exported', 0)} leads selecionados."
    )

    itr_leads, itr_meta = collect_cvm_itr_leads(now_utc, by_cnpj, by_stem)
    print(
        f"[CVM ITR] {itr_meta.get('issuers_scanned', 0)} cias abertas analisadas -> "
        f"{itr_meta.get('leads_exported', 0)} alertas contábeis pré-colapso."
    )

    tier0_leads = merge_multi_engine_leads(ipe_leads, sec_leads, itr_leads)
    _, djen_meta = probe_djen_opportunistic(now_utc)
    print(f"[DJEN] Status: {djen_meta.get('status')} ({djen_meta.get('note')})")

    qsa_by_cnpj, qsa_meta = enrich_qsa_incremental(deals, tier0_leads, now_utc)
    print(
        f"[QSA] Base consolidada: {qsa_meta['cached_total']}/{qsa_meta['total_valid_cnpjs']} "
        f"CNPJs com QSA (novos nesta execução: {qsa_meta['fetched_this_run']})."
    )

    # Resolve Razão Social das Ltda./S.A. fechadas de CRA/CRI via QSA da Receita Federal e reconcilia com deals.json!
    filtered_leads = []
    for lead in tier0_leads:
        c14 = lead.get("cnpj_digits") or ""
        q = qsa_by_cnpj.get(c14)
        if q:
            razao = (q.get("razao_social") or "").strip()
            fantasia = (q.get("nome_fantasia") or "").strip()
            if contains_blocked_entity(f"{razao} {fantasia}"):
                continue
            if lead.get("needs_qsa_name") and razao:
                # Ignora securitizadoras/bancos que eventualmente apareçam como cedentes
                if FINANCIAL_ISSUER_EXCLUDE_RE.search(norm(razao)):
                    continue
                lead["empresa"] = razao
                lead["nome_fantasia"] = fantasia
                deal = match_deal(c14, razao, by_cnpj, by_stem)
                if deal:
                    lead["in_pipeline"] = True
                    lead["deal_id"] = deal.get("id")
                    lead["deal_empresa"] = deal.get("empresa")
                    lead["deal_passivo_mm"] = deal.get("passivo_mm")
            lead["uf"] = q.get("uf") or ""
            lead["municipio"] = q.get("municipio") or ""
            lead["cnae"] = q.get("cnae") or ""
            lead["porte"] = q.get("porte") or ""
            lead["capital_social"] = q.get("capital_social") or 0
            lead["qsa_preview"] = [s["nome"] for s in (q.get("qsa") or [])[:3]]
        lead.pop("needs_qsa_name", None)
        filtered_leads.append(lead)

    tier0_leads = filtered_leads
    qsa_shared_links = build_cross_qsa_links(deals, tier0_leads, qsa_by_cnpj)
    print(f"[Cross-QSA] {len(qsa_shared_links)} conexões societárias cruzadas detectadas.")

    # Anexa conexões Cross-QSA diretamente nos cards Tier 0 correspondentes
    peers_by_cnpj = defaultdict(list)
    for lk in qsa_shared_links:
        cnpjs_in_lk = [e["cnpj_digits"] for e in lk["empresas"]]
        for c14 in cnpjs_in_lk:
            others = [e["empresa"] for e in lk["empresas"] if e["cnpj_digits"] != c14]
            if others and len(peers_by_cnpj[c14]) < 3:
                peers_by_cnpj[c14].append(f"{lk['socio']} -> {', '.join(others[:2])}")
    for lead in tier0_leads:
        c14 = lead.get("cnpj_digits") or ""
        if c14 in peers_by_cnpj:
            lead["shared_qsa_peers"] = peers_by_cnpj[c14]

    new_premedia_count = sum(1 for x in tier0_leads if not x.get("in_pipeline"))
    by_origin_counts = defaultdict(int)
    for x in tier0_leads:
        for orig in x.get("origins") or [x.get("lead_origin", "CVM IPE")]:
            by_origin_counts[orig] += 1

    payload = {
        "schema_version": "7.0",
        "updated_at": now_utc.strftime("%Y-%m-%dT%H:%M:%SZ"),
        "updated_at_br": now_br.strftime("%d/%m/%Y %H:%M"),
        "sources": {
            "cvm_ipe": cvm_meta,
            "cvm_securit_cra_cri": sec_meta,
            "cvm_itr_contabil": itr_meta,
            "djen": djen_meta,
            "qsa_receita": qsa_meta,
        },
        "stats": {
            "tier0_leads_total": len(tier0_leads),
            "tier0_new_unmapped": new_premedia_count,
            "tier0_in_pipeline": len(tier0_leads) - new_premedia_count,
            "by_origin": dict(by_origin_counts),
            "qsa_enriched_cnpjs": len(qsa_by_cnpj),
            "cross_qsa_links_total": len(qsa_shared_links),
        },
        "tier0_leads": tier0_leads,
        "qsa_shared_links": qsa_shared_links,
        "qsa_by_cnpj": qsa_by_cnpj,
    }

    LIVE_LEADS_PATH.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"[OK] Gravado {LIVE_LEADS_PATH.name} ({LIVE_LEADS_PATH.stat().st_size:,} bytes).")


if __name__ == "__main__":
    main()
