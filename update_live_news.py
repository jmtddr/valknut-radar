#!/usr/bin/env python3
"""
Robô Autônomo 24/7 — VALKNUT SPECIAL SITUATIONS (v5.0)
Varre feeds RSS de Waivers, AGDs, Covenants, Debêntures, CRAs, CRIs, Cortes de Rating
e Recuperação Judicial no Brasil, decodifica entidades HTML (&nbsp;, &amp;, etc.),
reconcilia `deal_id` contra `deals.json` (CNPJs, apelidos em parênteses, tickers e stems)
e atualiza `live-news.json` na raiz preservando integralmente os itens curados (`id >= 900`).
"""
import base64
import hashlib
import html
import json
import re
import unicodedata
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from concurrent.futures import ThreadPoolExecutor, as_completed
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
        "https://news.google.com/rss/search?q=%28waiver+OR+covenants+OR+AGD+OR+debenturistas+OR+%22deb%C3%AAntures%22%29+%28reestrutura%C3%A7%C3%A3o+OR+inadimpl%C3%AAncia+OR+%22vencimento+antecipado%22+OR+reperfilamento%29+when%3A7d&hl=pt-BR&gl=BR&ceid=BR:pt-419",
        "Waiver / AGD",
    ),
    (
        "https://news.google.com/rss/search?q=%28waiver+OR+covenants+OR+AGD+OR+debenturistas%29+%28reestrutura%C3%A7%C3%A3o+OR+inadimpl%C3%AAncia+OR+reperfilamento+OR+standstill%29+when%3A30d&hl=pt-BR&gl=BR&ceid=BR:pt-419",
        "Waiver / AGD",
    ),
    (
        "https://news.google.com/rss/search?q=%28%22recupera%C3%A7%C3%A3o+extrajudicial%22+OR+%22vencimento+antecipado%22+OR+V%C3%B3rtx+OR+Pent%C3%A1gono+OR+%22Oliveira+Trust%22%29+%28deb%C3%AAntures+OR+CRA+OR+CRI+OR+d%C3%ADvida%29+when%3A30d&hl=pt-BR&gl=BR&ceid=BR:pt-419",
        "Waiver / AGD",
    ),
    (
        "https://news.google.com/rss/search?q=%28rebaixamento+OR+rebaixa+OR+downgrade+OR+%22perspectiva+negativa%22+OR+%22observa%C3%A7%C3%A3o+negativa%22%29+%28Fitch+OR+Moody%27s+OR+%22S%26P%22%29+%28deb%C3%AAntures+OR+CRA+OR+CRI+OR+d%C3%ADvida%29+when%3A30d&hl=pt-BR&gl=BR&ceid=BR:pt-419",
        "Downgrade Rating",
    ),
    (
        "https://news.google.com/rss/search?q=%28%22recupera%C3%A7%C3%A3o+judicial%22+OR+%22tutela+cautelar%22+OR+%22pedido+de+fal%C3%AAncia%22%29+d%C3%ADvida+milh%C3%B5es+when%3A14d&hl=pt-BR&gl=BR&ceid=BR:pt-419",
        "Pedido de RJ",
    ),
    (
        "https://news.google.com/rss/search?q=%28%22unidade+produtiva+isolada%22+OR+%22stalking+horse%22+OR+%22leil%C3%A3o+de+UPI%22+OR+%22carve-out%22%29+%28d%C3%ADvida+OR+reestrutura%C3%A7%C3%A3o+OR+%22recupera%C3%A7%C3%A3o+judicial%22%29+when%3A30d&hl=pt-BR&gl=BR&ceid=BR:pt-419",
        "Leilão de UPI",
    ),
    (
        "https://news.google.com/rss/search?q=%28%22caducidade%22+ANEEL+OR+curtailment+d%C3%ADvida+OR+%22fian%C3%A7a+banc%C3%A1ria%22+execu%C3%A7%C3%A3o+OR+%22desligamento+CCEE%22%29+when%3A30d&hl=pt-BR&gl=BR&ceid=BR:pt-419",
        "Waiver / AGD",
    ),
    (
        "https://news.google.com/rss/search?q=%28%22legal+claims%22+OR+%22venda+de+ativos%22+reestrutura%C3%A7%C3%A3o+OR+%22financiamento+DIP%22+OR+%22empr%C3%A9stimo+DIP%22%29+milh%C3%B5es+when%3A30d&hl=pt-BR&gl=BR&ceid=BR:pt-419",
        "Leilão de UPI",
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

FOREIGN_URL_PATTERNS = (
    ".pt/",
    "sapo.pt",
    "observador.pt",
    "dn.pt",
    "publico.pt",
    "jornaldenegocios.pt",
    "correiodamanhacanada.com",
    "/world-news/",
)

NOISE_TEXT_PATTERNS = (
    "rating de portugal",
    "rating do laos",
    "rating do brasil",
    "subida de 'rating'",
    "subida de rating",
    "melhorar perspetiva",
    "africa ocidental",
    "descer rating da sjm",
    "pede recuperacao judicial nos eua",
    "imposto de renda",
    "lci, lca",
    "onde investir",
    "recomendados para",
    "renda fixa isenta",
    "dez estados brasileiros que mais buscam",
    "mercado secundario brasileiro com volume",
    "aproveita desconto e compra",
    "lucra r$",
)

PRIMARY_ISSUANCE_PATTERNS = (
    "lanca oferta de",
    "aprova emissao",
    "aprova 15a emissao",
    "aprova a emissao",
    "conclui emissao",
    "conclui captacao",
    "encerra oferta",
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


def is_rss_noise_item(title: str, desc: str, url: str = "") -> bool:
    t_n = norm(title)
    b_n = norm(f"{title} {desc}")
    u_l = str(url or "").lower()
    if any(fp in u_l for fp in FOREIGN_URL_PATTERNS):
        return True
    if any(np in b_n for np in NOISE_TEXT_PATTERNS):
        return True
    # Descarta afirmação/atribuição/elevação saudável de rating sem sinal de estresse
    if any(r in t_n for r in RATING_CONTEXT_TERMS):
        if any(pos in t_n for pos in ("afirma rating", "atribui rating", "eleva rating", "mantem rating", "manter rating", "perspectiva estavel")):
            if not is_actual_downgrade(b_n):
                return True
    # Descarta emissões primárias saudáveis sem relação com reestruturação/PRE/RJ/waiver
    if any(pi in t_n for pi in PRIMARY_ISSUANCE_PATTERNS):
        if not any(d in b_n for d in ("recuperacao", "reestruturacao", "reperfilamento", "waiver", "inadimpl", "vencimento antecipado", "cautelar")):
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
        words = [w for w in clean_emp.split() if w]
        if len(words) >= 3 and words[0] not in GENERIC_SHORT_STOPWORDS:
            two_w = f"{words[0]} {words[1]}"
            if len(two_w) >= 8 and _is_valid_alias_candidate(two_w):
                aliases.append(two_w)

    if re.search(r"\bgpa\b", norm(full_emp)) and "pao de acucar" in norm(full_emp):
        aliases.append("gpa")

    for pm in re.findall(r"\(([^)]+)\)", full_emp):
        for part in re.split(r"[/,&•;-]", pm):
            p_norm = norm(part)
            p_clean = re.sub(r"\b(?:grupo|ex|antiga|rede|cia|ltda|s\.a\.|sa|tecelagem)\b", " ", p_norm)
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

    cnj_list = re.findall(r"\b\d{7}-\d{2}\.\d{4}\.\d\.\d{2}\.\d{4}\b", str(raw_text or ""))
    if cnj_list:
        for cnj in cnj_list:
            for d in deals:
                if cnj in str(d.get("processo") or ""):
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
            "waiver", "covenant", "agd", "debenturista", "vencimento antecipado",
            "standstill", "reperfilamento", "repactuacao", "recuperacao extrajudicial",
            "plano extrajudicial", "inadimplencia", "desligamento ccee", "caducidade",
        ]
    ):
        cat = "Waiver / AGD"
    elif any(k in t_norm for k in ["recuperacao judicial", "pedido de rj", "deferimento", "plano de rj"]) or re.search(r"\brj\b", t_norm):
        cat = "Pedido de RJ"
    elif _has_decreed_bankruptcy(b):
        cat = "Falência"
    elif re.search(r"\b(?:leilao|upis?|alienacao\s+judicial|sale\s*&\s*leaseback|stalking\s+horse|carve-out)\b", b):
        cat = "Leilão de UPI"
    elif any(
        k in b
        for k in [
            "waiver", "covenant", "agd", "debenturista", "vencimento antecipado",
            "standstill", "reperfilamento", "repactuacao", "recuperacao extrajudicial",
            "plano extrajudicial", "vortx", "pentagono", "oliveira trust",
            "opea", "virgo", "desligamento ccee", "caducidade",
        ]
    ):
        cat = "Waiver / AGD"
    elif any(k in b for k in ["cautelar", "20-b", "tutela de urgencia"]):
        cat = "Cautelar 20-B"
    elif any(k in b for k in ["recuperacao judicial", "pedido de rj", "deferimento de rj"]):
        cat = "Pedido de RJ"
    else:
        if default_cat == "Downgrade Rating":
            return None, None, None, None
        cat = default_cat

    s_norm = norm(source)
    clean_src = decode_html_entities(source or "").strip()
    if "valor" in s_norm or "globo" in s_norm:
        fonte = "Valor Econômico"
    elif "pipeline" in s_norm:
        fonte = "Pipeline"
    elif any(k in s_norm for k in ["brazil journal", "forbes", "exame", "neofeed", "bloomberg"]):
        fonte = clean_src if clean_src and len(clean_src) <= 28 else "Brazil Journal"
    elif any(k in s_norm for k in ["fitch", "moody", "s&p", "cvm"]):
        fonte = "CVM / Fatos Relevantes"
    elif any(k in s_norm for k in ["vortx", "pentagono", "oliveira trust", "opea", "vert", "virgo", "agencia infra"]):
        fonte = "Agentes Fiduciários"
    elif any(k in s_norm for k in ["jota", "conjur", "migalhas"]):
        fonte = "Jota / Tribunais"
    elif "empresa em crise" in s_norm:
        fonte = "Empresa em Crise"
    elif clean_src and s_norm not in ("google news br", "google news", ""):
        fonte = clean_src[:32]
    else:
        fonte = "Imprensa Especializada"

    matched = match_deal(raw_combined, deals)
    escopo = (
        "cvm"
        if cat in ("Waiver / AGD", "Downgrade Rating")
        else ("pipeline" if matched else "mercado")
    )
    return cat, fonte, escopo, matched


def build_clean_rss_summary(clean_title: str, raw_desc: str, src: str, cat: str, matched: dict | None) -> str:
    """Evita repetir o título literal do Google News RSS dentro do campo resumo."""
    desc_clean = re.sub(r"\s+" + re.escape(src) + r"\s*$", "", raw_desc or "", flags=re.I).strip()
    t_n = norm(clean_title)
    d_n = norm(desc_clean)
    if len(desc_clean) > 45 and d_n != t_n and not d_n.startswith(t_n[:45]) and not t_n.startswith(d_n[:45]):
        return desc_clean[:230]
    if matched:
        passivo = matched.get("passivo_mm") or 0
        fase = matched.get("fase") or matched.get("tipo_processo") or cat
        return (
            f"Fato monitorado via {src} vinculado a {matched['empresa']} "
            f"({fase} • Passivo monitorado: R$ {passivo:,.0f} MM)."
        ).replace(",", ".")
    return f"Evento de {cat} capturado no monitoramento contínuo ({src}) para triagem de originação."


def extract_event_cluster_key(it: dict) -> str:
    """Chave de agrupamento de evento para impedir que 1 única notícia domine dezenas de slots."""
    did = it.get("deal_id")
    cat = norm(it.get("categoria") or "geral")
    if did:
        return f"deal:{did}:{cat}"
    words = [
        w
        for w in re.findall(r"[a-z0-9]{4,}", norm(it.get("titulo") or ""))
        if w not in GENERIC_SHORT_STOPWORDS
        and w not in {"recuperacao", "judicial", "extrajudicial", "divida", "dividas", "milhoes", "bilhoes", "debentures", "pedido", "tutela", "cautelar", "rating", "fitch", "moody"}
    ]
    anchor = "-".join(words[:2]) if words else norm(it.get("titulo") or "")[:24]
    return f"topic:{anchor}:{cat}"


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


BROWSER_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"


def is_google_news_url(url: str) -> bool:
    u = str(url or "").strip().lower()
    return u.startswith(("http://news.google.com", "https://news.google.com"))


def resolve_google_news_url(gurl: str) -> str:
    """Decodifica URLs news.google.com/rss/articles/... para a URL direta do site original."""
    u = str(gurl or "").strip()
    if not u or not is_google_news_url(u):
        return u

    m = re.search(r"/articles/([^?/#]+)", u)
    if not m:
        return u
    token = m.group(1)

    # 1. Tenta decodificação base64 direta (tokens legados sem AU_yqL)
    try:
        pad = token + "=" * (-len(token) % 4)
        raw = base64.urlsafe_b64decode(pad)
        txt = raw.decode("latin-1", errors="ignore")
        um = re.search(r"https?://[^\s\x00-\x1f\"'<>]+", txt)
        if um and not is_google_news_url(um.group(0)) and "consent.google.com" not in um.group(0):
            return um.group(0)
    except Exception:
        pass

    # 2. Obtém assinatura (data-n-a-sg / data-n-a-ts) e decodifica via endpoint público batchexecute
    try:
        req = urllib.request.Request(
            f"https://news.google.com/rss/articles/{token}",
            headers={"User-Agent": BROWSER_UA},
        )
        with urllib.request.urlopen(req, timeout=12) as resp:
            final_u = resp.geturl()
            body = resp.read().decode("utf-8", errors="ignore")
        if final_u and final_u.startswith("http") and not is_google_news_url(final_u) and "consent.google.com" not in final_u:
            return final_u

        sg_m = re.search(r'data-n-a-sg="([^"]+)"', body)
        ts_m = re.search(r'data-n-a-ts="([^"]+)"', body)
        if not (sg_m and ts_m):
            return u

        inner_arr = [
            "garturlreq",
            [
                ["X", "X", ["X", "X"], None, None, 1, 1, "US:en", None, 1, None, None, None, None, None, 0, 1],
                "X",
                "X",
                1,
                [1, 1, 1],
                1,
                1,
                None,
                0,
                0,
                None,
                0,
            ],
            token,
            int(ts_m.group(1)),
            sg_m.group(1),
        ]
        f_req = json.dumps(
            [[["Fbv4je", json.dumps(inner_arr, separators=(",", ":")), None, "generic"]]],
            separators=(",", ":"),
        )
        post_data = urllib.parse.urlencode({"f.req": f_req}).encode("utf-8")
        req2 = urllib.request.Request(
            "https://news.google.com/_/DotsSplashUi/data/batchexecute",
            data=post_data,
            headers={
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                "User-Agent": BROWSER_UA,
            },
        )
        with urllib.request.urlopen(req2, timeout=12) as resp2:
            txt2 = resp2.read().decode("utf-8", errors="ignore")

        for line in txt2.splitlines():
            if "garturlres" not in line:
                continue
            try:
                outer = json.loads(line)
                inner = json.loads(outer[0][2])
                if isinstance(inner, list) and len(inner) > 1:
                    cand = str(inner[1]).strip()
                    if cand.startswith(("http://", "https://")) and not is_google_news_url(cand) and "consent.google.com" not in cand:
                        return cand
            except Exception:
                continue
    except Exception:
        pass

    return u


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

    # Cache de URLs já resolvidas anteriormente para evitar re-consultas desnecessárias
    cached_direct_url_by_key = {}
    for ex in existing_items:
        if isinstance(ex, dict):
            ex_url = str(ex.get("url") or "").strip()
            ex_key = norm(ex.get("titulo") or "")[:62]
            if ex_key and ex_url.startswith(("http://", "https://")) and not is_google_news_url(ex_url):
                cached_direct_url_by_key[ex_key] = ex_url

    fresh_rss = []
    seen = set()
    headers = {"User-Agent": "Mozilla/5.0 (compatible; ValknutRadarBot/7.0)"}

    for url, default_cat in FEEDS:
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=15) as resp:
                xml_bytes = resp.read()
            root = ET.fromstring(xml_bytes)
            for item in root.findall(".//item")[:14]:
                raw_title = decode_html_entities(item.findtext("title") or "")
                link = (item.findtext("link") or "").strip()
                pub = (item.findtext("pubDate") or "").strip()
                src_el = item.find("source")
                src = decode_html_entities((src_el.text if src_el is not None and src_el.text else "") or "Imprensa")
                src_url = (src_el.attrib.get("url") or "").strip() if src_el is not None else ""
                raw_desc_no_tags = re.sub(r"<[^>]+>", " ", item.findtext("description") or "")
                desc = decode_html_entities(raw_desc_no_tags)

                dt_fmt = parse_recent_pubdate(pub)
                if not dt_fmt:
                    continue

                clean_title = decode_html_entities(re.sub(r"\s+-\s+[^-]+$", "", raw_title))
                if not clean_title or is_excluded(clean_title) or is_excluded(desc):
                    continue
                if is_rss_noise_item(clean_title, desc, src_url):
                    continue

                key = norm(clean_title)[:62]
                if key in seen:
                    continue
                seen.add(key)

                cat, fonte, escopo, matched = classify(clean_title, desc, src, default_cat, deals)
                if not cat:
                    continue

                resumo = build_clean_rss_summary(clean_title, desc, src, cat, matched)
                resolved_or_link = cached_direct_url_by_key.get(key, link)
                if is_rss_noise_item(clean_title, desc, resolved_or_link):
                    continue

                entry = {
                    "data_hora": dt_fmt,
                    "titulo": clean_title,
                    "fonte": fonte,
                    "setor": matched["setor_macro"] if matched else "Mercado & Macro (RJ / Crédito)",
                    "categoria": cat,
                    "escopo": escopo,
                    "resumo": resumo,
                    "url": resolved_or_link,
                    "deal_id": matched["id"] if matched else None,
                    "empresa_nome": matched["empresa"] if matched else f"Radar Ao Vivo // {src}",
                }
                if src_url and src_url.startswith(("http://", "https://")) and not is_google_news_url(src_url):
                    entry["source_url"] = src_url
                fresh_rss.append(entry)
        except Exception as e:
            print(f"Aviso ao consultar feed {url}: {e}")

    curated_preserved = []
    rss_candidates = []
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
                if not str(it.get("empresa_nome") or "").strip() or str(it.get("empresa_nome") or "").startswith(("Radar", "Planilha Mestre")):
                    it["empresa_nome"] = matched_existing["empresa"]
                if it.get("escopo") == "mercado":
                    it["escopo"] = "pipeline"
        if not str(it.get("empresa_nome") or "").strip():
            it["empresa_nome"] = f"Planilha Mestre // {it.get('fonte') or 'Mercado'}"
        k = norm(title)[:62]
        if k in seen_curated_keys:
            continue
        seen_curated_keys.add(k)
        curated_preserved.append(it)

    # 2. Consolidate fresh + existing RSS items, purging noise and applying event-level clustering (max 2 per event)
    seen_rss_keys = set(seen_curated_keys)
    for it in fresh_rss + [x for x in existing_items if isinstance(x, dict) and not is_curated_item(x)]:
        title = decode_html_entities(it.get("titulo") or "")
        resumo_txt = decode_html_entities(it.get("resumo") or "")
        item_url = str(it.get("url") or "").strip()
        if not title or is_excluded(title) or is_excluded(resumo_txt):
            continue
        if is_rss_noise_item(title, resumo_txt, item_url):
            continue
        if parse_br_sort_key(it.get("data_hora", "")) == 0:
            continue

        # Se era Downgrade Rating e não é rebaixamento real, descarta em vez de poluir Waiver/AGD
        blob_check = norm(f"{title} {resumo_txt}")
        if it.get("categoria") == "Downgrade Rating" and not is_actual_downgrade(blob_check):
            continue

        it["titulo"] = title
        matched_obj = None
        if not it.get("deal_id"):
            matched_obj = match_deal(f"{title} {resumo_txt}", deals)
            if matched_obj:
                it["deal_id"] = matched_obj["id"]
                if not str(it.get("empresa_nome") or "").strip() or str(it.get("empresa_nome") or "").startswith("Radar"):
                    it["empresa_nome"] = matched_obj["empresa"]
        else:
            matched_obj = next((d for d in deals if d.get("id") == it.get("deal_id")), None)
            if matched_obj and not str(it.get("empresa_nome") or "").strip():
                it["empresa_nome"] = matched_obj["empresa"]

        if not str(it.get("empresa_nome") or "").strip():
            it["empresa_nome"] = f"Radar Ao Vivo // {it.get('fonte') or 'Mercado'}"

        # Corrige resumos antigos redundantes onde o Google News repetiu o título
        src_hint = str(it.get("empresa_nome") or "").replace("Radar Ao Vivo // ", "").strip() or str(it.get("fonte") or "Imprensa")
        it["resumo"] = build_clean_rss_summary(title, resumo_txt, src_hint, str(it.get("categoria") or "Mercado"), matched_obj)

        k = norm(title)[:62]
        if k in seen_rss_keys:
            continue
        seen_rss_keys.add(k)
        if is_google_news_url(item_url) and k in cached_direct_url_by_key:
            it["url"] = cached_direct_url_by_key[k]
        rss_candidates.append(it)

    rss_candidates.sort(key=lambda x: parse_br_sort_key(x.get("data_hora", "")), reverse=True)

    # Event clustering: máximo de 2 matérias RSS por (deal_id/tópico, categoria) para diversidade de leads
    cluster_counts = {}
    capped_rss = []
    for it in rss_candidates:
        ckey = extract_event_cluster_key(it)
        cnt = cluster_counts.get(ckey, 0)
        if cnt >= 2:
            continue
        cluster_counts[ckey] = cnt + 1
        capped_rss.append(it)
        if len(capped_rss) >= 95:
            break

    # 3. Resolve all remaining Google News redirect links to direct publisher URLs in parallel
    to_resolve = [item for item in capped_rss if is_google_news_url(item.get("url", ""))]
    resolved_count = 0
    if to_resolve:
        print(f"Resolvendo {len(to_resolve)} links do Google News para URLs diretas dos portais...")
        with ThreadPoolExecutor(max_workers=6) as pool:
            fut_map = {pool.submit(resolve_google_news_url, item["url"]): item for item in to_resolve}
            for fut in as_completed(fut_map):
                item = fut_map[fut]
                try:
                    direct_url = fut.result()
                    if direct_url and not is_google_news_url(direct_url):
                        item["url"] = direct_url
                        resolved_count += 1
                except Exception:
                    pass

    # Filtra pós-resolução caso alguma URL decodificada seja de domínio estrangeiro (.pt etc.)
    capped_rss = [it for it in capped_rss if not is_rss_noise_item(it.get("titulo", ""), it.get("resumo", ""), it.get("url", ""))]

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

    direct_total = sum(1 for x in final_items if x.get("url") and not is_google_news_url(x.get("url", "")))
    if final_items:
        LIVE_NEWS_PATH.write_text(
            json.dumps(final_items, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
        )
        print(
            f"live-news.json atualizado com {len(final_items)} notícias "
            f"({len(curated_preserved)} curadas id>=900 + {len(capped_rss)} RSS clusterizadas | "
            f"{resolved_count} recém-resolvidas | {direct_total}/{len(final_items)} com link direto do portal)."
        )


if __name__ == "__main__":
    main()
