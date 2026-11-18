#!/usr/bin/env python3
"""
Robô Autônomo 24/7 — VALKNUT SPECIAL SITUATIONS (v5.0)
Varre feeds RSS de Waivers, AGDs, Covenants, Debêntures, CRAs, CRIs, Cortes de Rating
e Recuperação Judicial no Brasil, decodifica entidades HTML (&nbsp;, &amp;, etc.),
reconcilia `deal_id` contra `deals.json` (CNPJs, apelidos em parênteses, tickers e stems)
e atualiza `live-news.json` na raiz preservando integralmente os itens curados (`id >= 900`).
"""
import hashlib
import html
import json
import re
import unicodedata
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent
LIVE_NEWS_PATH = ROOT_DIR / "live-news.json"
DEALS_PATH = ROOT_DIR / "deals.json"

BLOCKED_TOKEN_SHA256 = {
    "d252e0c8ec8a9a143e74a72447f3abaf7a4fad0f7755a819dcc9cd293980cc78"
}

FEEDS = [
    (
        "https://news.google.com/rss/search?q=%28waiver+OR+covenants+OR+AGD+OR+debenturistas+OR+%22deb%C3%AAntures%22%29+%28reestrutura%C3%A7%C3%A3o+OR+inadimpl%C3%AAncia+OR+vencimento%29+when%3A7d&hl=pt-BR&gl=BR&ceid=BR:pt-419",
        "Waiver / AGD",
    ),
    (
        "https://news.google.com/rss/search?q=waiver+OR+covenants+OR+AGD+OR+debenturistas+OR+deb%C3%AAntures+reestrutura%C3%A7%C3%A3o+when%3A30d&hl=pt-BR&gl=BR&ceid=BR:pt-419",
        "Waiver / AGD",
    ),
    (
        "https://news.google.com/rss/search?q=%22recupera%C3%A7%C3%A3o+extrajudicial%22+OR+%22vencimento+antecipado%22+OR+V%C3%B3rtx+OR+Pent%C3%A1gono+OR+%22Oliveira+Trust%22+deb%C3%AAntures+when%3A30d&hl=pt-BR&gl=BR&ceid=BR:pt-419",
        "Waiver / AGD",
    ),
    (
        "https://news.google.com/rss/search?q=rebaixamento+OR+rating+Fitch+OR+Moody%27s+deb%C3%AAntures+OR+CRA+OR+d%C3%ADvida+when%3A30d&hl=pt-BR&gl=BR&ceid=BR:pt-419",
        "Downgrade Rating",
    ),
    (
        "https://news.google.com/rss/search?q=%22recupera%C3%A7%C3%A3o+judicial%22+OR+%22tutela+cautelar%22+OR+%22pedido+de+fal%C3%AAncia%22+d%C3%ADvida+milh%C3%B5es+when%3A14d&hl=pt-BR&gl=BR&ceid=BR:pt-419",
        "Pedido de RJ",
    ),
]

CORP_SUFFIX_RE = re.compile(
    r"(?<![a-z0-9])(?:s\.a\.|s/a|s\.a|ltda\.|ltda|participacoes|empreendimentos|holding|grupo|rede|industria|comercio|agronegocios|agronegocio|engenharia|sport\s+club|paulista|do\s+brasil|de\s+rodovias|concessionaria)(?![a-z0-9])"
)

GENERIC_SHORT_STOPWORDS = {
    "sta", "cia", "sul", "rio", "luz", "sol", "mar", "bom", "nova", "novo", "real", "ouro", "vale", "agro", "vida",
    "graos", "soja", "milho", "algodao", "cafe", "cana", "acucar", "etanol", "agropecuaria", "agricola", "insumos",
    "sementes", "fertilizantes", "pecuaria", "fazenda", "fazendas", "armazens", "gerais", "logistica", "transportes",
    "energia", "geracao", "transmissao", "engenharia", "construcoes", "construtora", "incorporadora", "imoveis",
    "industrial", "industria", "comercio", "servicos", "solucoes", "tecnologia", "alimentos", "bebidas", "texteis",
    "textil", "varejo", "atacado", "holding", "participacoes", "investimentos", "brasil", "nacional", "central",
    "uniao", "alianca", "familia", "irmaos", "essencial", "princesa", "gold", "lider", "ideal", "total", "global",
    "prime", "alpha", "beta", "omega", "norte", "leste", "oeste", "centro", "cerrado", "grupo", "rede", "safras"
}

EXPLICIT_DOWNGRADE_TERMS = (
    "rebaixamento",
    "rebaixa",
    "downgrade",
    "corta rating",
    "corte de rating",
    "descer rating",
    "desce rating",
    "reduz rating",
    "perspectiva negativa",
    "observacao negativa",
    "rd(bra)",
    "ccc",
    "cc(bra)",
    "d(bra)",
)

RATING_CONTEXT_TERMS = (
    "fitch",
    "moody",
    "s&p",
    "standard & poor",
    "rating",
    "nota de credito",
)


def decode_html_entities(s: str) -> str:
    if not s:
        return ""
    txt = str(s)
    txt = html.unescape(html.unescape(txt))
    txt = txt.replace("\xa0", " ").replace("&nbsp;", " ").replace("&NBSP;", " ")
    txt = re.sub(r"\s+", " ", txt)
    return txt.strip()


def norm(s: str) -> str:
    return "".join(
        c
        for c in unicodedata.normalize("NFD", decode_html_entities(str(s or "")).lower())
        if unicodedata.category(c) != "Mn"
    )


def is_excluded(text: str) -> bool:
    tokens = re.split(r"[^a-z0-9]+", norm(text))
    for tk in tokens:
        if len(tk) >= 4 and hashlib.sha256(tk.encode("utf-8")).hexdigest() in BLOCKED_TOKEN_SHA256:
            return True
    return False


def parse_recent_pubdate(pub_str: str):
    if not pub_str or not str(pub_str).strip():
        return None
    br_tz = timezone(timedelta(hours=-3))
    now_br = datetime.now(br_tz)
    try:
        dt = parsedate_to_datetime(str(pub_str).strip()).astimezone(br_tz)
        if dt > now_br + timedelta(days=1):
            return None
        if dt.year < 2026 or (now_br - dt).days > 75:
            return None
        return dt.strftime("%d/%m/%Y %H:%M")
    except Exception:
        return None


def parse_br_sort_key(dt_str: str) -> int:
    s = str(dt_str or "").strip()
    m = re.match(r"^(\d{2})/(\d{2})/(\d{4})(?:\s+(\d{2}):(\d{2}))?$", s)
    if m:
        d, mo, y = int(m.group(1)), int(m.group(2)), int(m.group(3))
        hh = int(m.group(4) or 12)
        mm = int(m.group(5) or 0)
    else:
        m_iso = re.match(r"^(\d{4})-(\d{2})-(\d{2})", s)
        if not m_iso:
            return 0
        y, mo, d = int(m_iso.group(1)), int(m_iso.group(2)), int(m_iso.group(3))
        hh, mm = 12, 0
    try:
        br_tz = timezone(timedelta(hours=-3))
        dt = datetime(y, mo, d, hh, mm, tzinfo=br_tz)
        if dt > datetime.now(br_tz) + timedelta(days=1):
            return 0
        return int(dt.timestamp())
    except ValueError:
        return 0


def is_actual_downgrade(blob_norm: str) -> bool:
    if re.search(r"\b(?:evita|evitou|descarta|afasta)\s+rebaixamento\b", blob_norm):
        return False
    if any(k in blob_norm for k in EXPLICIT_DOWNGRADE_TERMS):
        return True
    if any(r in blob_norm for r in RATING_CONTEXT_TERMS) and any(
        d in blob_norm for d in ("inadimplencia", "calote")
    ):
        return True
    return False


def _is_valid_alias_candidate(cand: str) -> bool:
    if not cand:
        return False
    words = [w for w in cand.split() if w]
    if not words:
        return False
    if len(words) == 1:
        w = words[0]
        if w in GENERIC_SHORT_STOPWORDS:
            return False
        return len(w) >= 4
    non_generic = [w for w in words if w not in GENERIC_SHORT_STOPWORDS and len(w) >= 3]
    return len(non_generic) >= 1 and len(cand) >= 6


def extract_deal_aliases(d: dict) -> list:
    aliases = []
    full_emp = str(d.get("empresa") or "")
    pre_paren_raw = norm(full_emp.split("(")[0]).strip()
    pre_clean = re.sub(r"[^a-z0-9]+", " ", pre_paren_raw).strip()
    if _is_valid_alias_candidate(pre_clean):
        aliases.append(pre_clean)

    stripped = CORP_SUFFIX_RE.sub(" ", pre_paren_raw)
    clean_emp = re.sub(r"[^a-z0-9]+", " ", stripped).strip()
    clean_emp = re.sub(r"^(?:e|de|do|da|dos|das|s|a)\s+|\s+(?:e|de|do|da|dos|das|s|a)$", "", clean_emp).strip()
    if _is_valid_alias_candidate(clean_emp):
        aliases.append(clean_emp)

    if re.search(r"\bgpa\b", norm(full_emp)) and "pao de acucar" in norm(full_emp):
        aliases.append("gpa")

    for pm in re.findall(r"\(([^)]+)\)", full_emp):
        for part in re.split(r"[/,&•;-]", pm):
            p_norm = norm(part)
            p_clean = re.sub(r"\b(?:grupo|ex|antiga|rede|cia|ltda|s\.a\.|sa)\b", " ", p_norm)
            p_clean = re.sub(r"[^a-z0-9]+", " ", p_clean).strip()
            if _is_valid_alias_candidate(p_clean):
                aliases.append(p_clean)

    if " - " in full_emp.split("(")[0]:
        after_dash = re.sub(r"[^a-z0-9]+", " ", norm(full_emp.split("(")[0].split(" - ")[-1])).strip()
        if _is_valid_alias_candidate(after_dash):
            aliases.append(after_dash)

    tk = norm(str(d.get("ticker") or "").strip())
    if len(tk) >= 4:
        aliases.append(tk)

    for code in re.findall(r"\b([A-Z]{4}\d{1,2})\b", str(d.get("processo") or "")):
        aliases.append(code.lower())

    return sorted(set(aliases), key=len, reverse=True)


def match_deal(raw_text: str, deals: list):
    blob_norm = norm(raw_text)
    text_digits_list = re.findall(r"\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2}", str(raw_text or ""))
    text_cnpjs = {re.sub(r"\D", "", x) for x in text_digits_list if len(re.sub(r"\D", "", x)) >= 11}

    if text_cnpjs:
        for d in deals:
            d_digits = re.sub(r"\D", "", str(d.get("cnpj") or ""))
            if len(d_digits) >= 11 and d_digits in text_cnpjs:
                return d

    best_deal = None
    best_score = 0
    for d in deals:
        for alias in extract_deal_aliases(d):
            if re.search(r"\b" + re.escape(alias) + r"\b", blob_norm):
                score = len(alias) + (15 if " " in alias else 0) + (20 if alias == "gpa" else 0)
                if score > best_score:
                    best_score = score
                    best_deal = d
                break
    return best_deal


def _has_decreed_bankruptcy(text_norm: str) -> bool:
    if re.search(
        r"(?:reversao\s+de\s+falencia|falencia\s+revertida|afasta\s+falencia|suspende\s+falencia|evita\s+falencia|risco\s+de\s+convolacao|falencia\s+pode\s+ser)",
        text_norm,
    ):
        return False
    return any(k in text_norm for k in ("decreta falencia", "falencia decretada", "autofalencia", "convolacao em falencia", "massa falida"))


def classify(title: str, desc: str, source: str, default_cat: str, deals: list):
    raw_combined = f"{title} {desc} {source}"
    t_norm = norm(title)
    b = norm(raw_combined)
    if is_actual_downgrade(t_norm) or is_actual_downgrade(b):
        cat = "Downgrade Rating"
    elif _has_decreed_bankruptcy(t_norm) or (
        "falencia" in t_norm
        and not re.search(r"(?:reversao|revertida|afasta|suspende|evita|pode\s+ser|risco)", t_norm)
    ):
        cat = "Falência"
    elif re.search(r"\b(?:leilao|upis?|alienacao\s+judicial|sale\s*&\s*leaseback)\b", t_norm):
        cat = "Leilão de UPI"
    elif any(k in t_norm for k in ["cautelar", "20-b", "tutela de urgencia"]):
        cat = "Cautelar 20-B"
    elif any(
        k in t_norm
        for k in [
            "waiver", "covenant", "agd", "debenturista", "debenture", "vencimento antecipado",
            "standstill", "reperfilamento", "repactuacao", "recuperacao extrajudicial",
            "plano extrajudicial", "notas comerciais",
        ]
    ) or re.search(r"\b(?:cras?|cris?|fidcs?)\b", t_norm):
        cat = "Waiver / AGD"
    elif any(k in t_norm for k in ["recuperacao judicial", "pedido de rj", "deferimento", "plano de rj"]) or re.search(r"\brj\b", t_norm):
        cat = "Pedido de RJ"
    elif _has_decreed_bankruptcy(b):
        cat = "Falência"
    elif re.search(r"\b(?:leilao|upis?|alienacao\s+judicial|sale\s*&\s*leaseback)\b", b):
        cat = "Leilão de UPI"
    elif any(
        k in b
        for k in [
            "waiver", "covenant", "agd", "debenturista", "debenture", "vencimento antecipado",
            "standstill", "reperfilamento", "repactuacao", "recuperacao extrajudicial",
            "plano extrajudicial", "securitizadora", "vortx", "pentagono", "oliveira trust",
            "opea", "virgo",
        ]
    ) or re.search(r"\b(?:cras?|cris?|fidcs?)\b", b):
        cat = "Waiver / AGD"
    elif any(k in b for k in ["cautelar", "20-b", "tutela de urgencia"]):
        cat = "Cautelar 20-B"
    elif any(k in b for k in ["recuperacao judicial", "pedido de rj", "deferimento de rj"]):
        cat = "Pedido de RJ"
    else:
        cat = "Waiver / AGD" if default_cat == "Downgrade Rating" else default_cat

    s_norm = norm(source)
    if "valor" in s_norm or "globo" in s_norm:
        fonte = "Valor Econômico"
    elif "pipeline" in s_norm:
        fonte = "Pipeline"
    elif any(k in s_norm for k in ["brazil journal", "forbes", "exame", "neofeed", "bloomberg"]):
        fonte = "Brazil Journal"
    elif any(k in s_norm for k in ["fitch", "moody", "cvm", "infomoney", "seu dinheiro", "moneytimes", "money times"]):
        fonte = "CVM / Fatos Relevantes"
    elif any(k in s_norm for k in ["vortx", "pentagono", "oliveira trust", "opea", "vert", "virgo", "agencia infra"]):
        fonte = "Agentes Fiduciários"
    elif any(k in s_norm for k in ["jota", "conjur", "migalhas", "folha", "uol"]):
        fonte = "Jota / Tribunais"
    elif "empresa em crise" in s_norm:
        fonte = "Empresa em Crise"
    else:
        fonte = "CVM / Fatos Relevantes" if cat in ("Waiver / AGD", "Downgrade Rating") else "Valor Econômico"

    matched = match_deal(raw_combined, deals)
    escopo = (
        "cvm"
        if cat in ("Waiver / AGD", "Downgrade Rating")
        else ("pipeline" if matched else "mercado")
    )
    return cat, fonte, escopo, matched


def assign_deterministic_id(norm_key: str, used_ids: set) -> int:
    det_id = 100000 + (int(hashlib.sha1(norm_key.encode("utf-8")).hexdigest()[:8], 16) % 899999)
    while det_id in used_ids:
        det_id += 1
        if det_id > 999999:
            det_id = 100000
    used_ids.add(det_id)
    return det_id


def is_curated_item(it: dict) -> bool:
    cur_id = it.get("id")
    return isinstance(cur_id, int) and 900 <= cur_id < 100000


def main():
    deals = []
    if DEALS_PATH.exists():
        deals = json.loads(DEALS_PATH.read_text(encoding="utf-8"))

    existing_items = []
    if LIVE_NEWS_PATH.exists():
        try:
            raw_loaded = json.loads(LIVE_NEWS_PATH.read_text(encoding="utf-8"))
            existing_items = raw_loaded if isinstance(raw_loaded, list) else raw_loaded.get("items", [])
        except Exception:
            existing_items = []

    fresh_rss = []
    seen = set()
    headers = {"User-Agent": "Mozilla/5.0 (compatible; ValknutRadarBot/5.0)"}

    for url, default_cat in FEEDS:
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=15) as resp:
                xml_bytes = resp.read()
            root = ET.fromstring(xml_bytes)
            for item in root.findall(".//item")[:12]:
                raw_title = decode_html_entities(item.findtext("title") or "")
                link = (item.findtext("link") or "").strip()
                pub = (item.findtext("pubDate") or "").strip()
                src = decode_html_entities(item.findtext("source") or "Google News BR")
                raw_desc_no_tags = re.sub(r"<[^>]+>", " ", item.findtext("description") or "")
                desc = decode_html_entities(raw_desc_no_tags)

                dt_fmt = parse_recent_pubdate(pub)
                if not dt_fmt:
                    continue

                clean_title = decode_html_entities(re.sub(r"\s+-\s+[^-]+$", "", raw_title))
                if not clean_title or is_excluded(clean_title) or is_excluded(desc):
                    continue

                key = norm(clean_title)[:62]
                if key in seen:
                    continue
                seen.add(key)

                cat, fonte, escopo, matched = classify(clean_title, desc, src, default_cat, deals)
                resumo = (
                    desc[:230]
                    if len(desc) > 35 and norm(desc) != norm(clean_title)
                    else f"Monitoramento automático ({src}): atualização sobre {cat}."
                )

                fresh_rss.append(
                    {
                        "data_hora": dt_fmt,
                        "titulo": clean_title,
                        "fonte": fonte,
                        "setor": matched["setor_macro"] if matched else "Mercado & Macro (RJ / Crédito)",
                        "categoria": cat,
                        "escopo": escopo,
                        "resumo": resumo,
                        "url": link,
                        "deal_id": matched["id"] if matched else None,
                        "empresa_nome": matched["empresa"] if matched else f"Radar Ao Vivo // {src}",
                    }
                )
        except Exception as e:
            print(f"Aviso ao consultar feed {url}: {e}")

    curated_preserved = []
    rss_consolidated = []
    seen_curated_keys = set()

    # 1. Preserve ALL curated items (900 <= id < 100000) first with HTML entity cleanup & deal_id reconciliation
    for it in existing_items:
        if not isinstance(it, dict) or not is_curated_item(it):
            continue
        title = decode_html_entities(it.get("titulo") or "")
        resumo_txt = decode_html_entities(it.get("resumo") or "")
        if not title or is_excluded(title) or is_excluded(resumo_txt):
            continue
        it["titulo"] = title
        it["resumo"] = resumo_txt
        if not it.get("deal_id"):
            matched_existing = match_deal(f"{title} {resumo_txt} {it.get('empresa_nome', '')}", deals)
            if matched_existing:
                it["deal_id"] = matched_existing["id"]
                if str(it.get("empresa_nome") or "").startswith(("Radar", "Planilha Mestre")):
                    it["empresa_nome"] = matched_existing["empresa"]
        k = norm(title)[:62]
        if k in seen_curated_keys:
            continue
        seen_curated_keys.add(k)
        curated_preserved.append(it)

    # 2. Consolidate fresh + existing RSS items without duplicating curated items
    seen_rss_keys = set(seen_curated_keys)
    for it in fresh_rss + [x for x in existing_items if isinstance(x, dict) and not is_curated_item(x)]:
        title = decode_html_entities(it.get("titulo") or "")
        resumo_txt = decode_html_entities(it.get("resumo") or "")
        if not title or is_excluded(title) or is_excluded(resumo_txt):
            continue
        if parse_br_sort_key(it.get("data_hora", "")) == 0:
            continue
        it["titulo"] = title
        it["resumo"] = resumo_txt

        if it.get("categoria") == "Downgrade Rating":
            blob_check = norm(f"{title} {resumo_txt} {it.get('fonte', '')}")
            if not is_actual_downgrade(blob_check):
                new_cat, _, new_escopo, _ = classify(
                    title, resumo_txt, str(it.get("fonte") or ""), "Waiver / AGD", deals
                )
                it["categoria"] = new_cat
                it["escopo"] = new_escopo

        if not it.get("deal_id"):
            matched_existing = match_deal(f"{title} {resumo_txt}", deals)
            if matched_existing:
                it["deal_id"] = matched_existing["id"]
                if str(it.get("empresa_nome") or "").startswith("Radar"):
                    it["empresa_nome"] = matched_existing["empresa"]

        k = norm(title)[:62]
        if k in seen_rss_keys:
            continue
        seen_rss_keys.add(k)
        rss_consolidated.append(it)

    rss_consolidated.sort(key=lambda x: parse_br_sort_key(x.get("data_hora", "")), reverse=True)
    capped_rss = rss_consolidated[:95]

    used_ids = set()
    for item in curated_preserved:
        cur_id = item.get("id")
        if isinstance(cur_id, int) and 900 <= cur_id < 100000 and cur_id not in used_ids:
            used_ids.add(cur_id)
        else:
            cand = 901
            while cand in used_ids:
                cand += 1
            item["id"] = cand
            used_ids.add(cand)

    for item in capped_rss:
        norm_key = norm(item.get("titulo", ""))[:80]
        item["id"] = assign_deterministic_id(norm_key, used_ids)

    final_items = curated_preserved + capped_rss
    final_items.sort(key=lambda x: parse_br_sort_key(x.get("data_hora", "")), reverse=True)

    if final_items:
        LIVE_NEWS_PATH.write_text(
            json.dumps(final_items, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
        )
        print(
            f"live-news.json atualizado com {len(final_items)} notícias "
            f"({len(curated_preserved)} curadas id>=900 + {len(capped_rss)} RSS)."
        )


if __name__ == "__main__":
    main()
