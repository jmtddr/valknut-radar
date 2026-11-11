#!/usr/bin/env python3
"""
Robô Autônomo 24/7 — VALKNUT SPECIAL SITUATIONS (v4.6)
Varre feeds RSS de Waivers, AGDs, Covenants, Debêntures, CRAs, CRIs, Cortes de Rating
e Recuperação Judicial no Brasil, reconcilia `deal_id` contra `deals.json` e atualiza
`live-news.json` na raiz do repositório preservando fatos curados do pipeline.
"""
import hashlib
import json
import re
import unicodedata
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent
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


def norm(s: str) -> str:
    return "".join(
        c
        for c in unicodedata.normalize("NFD", str(s or "").lower())
        if unicodedata.category(c) != "Mn"
    )


def is_excluded(text: str) -> bool:
    tokens = re.split(r"[^a-z0-9]+", norm(text))
    for tk in tokens:
        if len(tk) >= 4 and hashlib.sha256(tk.encode("utf-8")).hexdigest() in BLOCKED_TOKEN_SHA256:
            return True
    return False


def parse_recent_pubdate(pub_str: str):
    br_tz = timezone(timedelta(hours=-3))
    now_br = datetime.now(br_tz)
    try:
        dt = parsedate_to_datetime(pub_str).astimezone(br_tz)
        if dt.year < 2026 or (now_br - dt).days > 75:
            return None
        return dt.strftime("%d/%m/%Y %H:%M")
    except Exception:
        return now_br.strftime("%d/%m/%Y %H:%M")


def parse_br_sort_key(dt_str: str) -> int:
    m = re.match(r"^(\d{2})/(\d{2})/(\d{4})(?:\s+(\d{2}):(\d{2}))?", str(dt_str or "").strip())
    if not m:
        return 0
    d, mo, y = int(m.group(1)), int(m.group(2)), int(m.group(3))
    hh = int(m.group(4) or 12)
    mm = int(m.group(5) or 0)
    try:
        return int(datetime(y, mo, d, hh, mm).timestamp())
    except ValueError:
        return 0


def match_deal(blob_norm: str, deals: list):
    for d in deals:
        raw_emp = str(d.get("empresa") or "").split("(")[0]
        clean_emp = re.sub(r"\b(grupo|rede|s\.a\.|s/a|ltda|industria|comercio)\b", "", norm(raw_emp)).strip()
        if len(clean_emp) >= 5 and clean_emp in blob_norm:
            return d
    return None


def classify(title: str, desc: str, source: str, default_cat: str, deals: list):
    b = norm(f"{title} {desc} {source}")
    if any(
        k in b
        for k in [
            "fitch",
            "moody",
            "s&p",
            "rebaixamento",
            "rebaixa",
            "downgrade",
            "rd(bra)",
            "ccc(bra)",
            "observacao negativa",
        ]
    ):
        cat = "Downgrade Rating"
    elif any(
        k in b
        for k in [
            "waiver",
            "covenant",
            "agd",
            "debenturista",
            "debenture",
            "vencimento antecipado",
            "standstill",
            "reperfilamento",
            "repactuacao",
            "recuperacao extrajudicial",
            "plano extrajudicial",
            "securitizadora",
            "vortx",
            "pentagono",
            "oliveira trust",
            "opea",
            "virgo",
            "cra ",
            "cras ",
            "cri ",
            "cris ",
            "fidc",
            "dip ",
        ]
    ):
        cat = "Waiver / AGD"
    elif any(k in b for k in ["falencia", "autofalencia", "convolacao", "massa falida"]):
        cat = "Falência"
    elif any(k in b for k in ["upi", "leilao", "alienacao judicial", "sale & leaseback"]):
        cat = "Leilão de UPI"
    elif any(k in b for k in ["cautelar", "20-b", "tutela de urgencia"]):
        cat = "Cautelar 20-B"
    else:
        cat = default_cat

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
    else:
        fonte = "CVM / Fatos Relevantes" if cat in ("Waiver / AGD", "Downgrade Rating") else "Valor Econômico"

    matched = match_deal(b, deals)
    escopo = (
        "cvm"
        if cat in ("Waiver / AGD", "Downgrade Rating")
        else ("pipeline" if matched else "mercado")
    )
    return cat, fonte, escopo, matched


def main():
    deals = []
    if DEALS_PATH.exists():
        deals = json.loads(DEALS_PATH.read_text(encoding="utf-8"))

    existing_items = []
    if LIVE_NEWS_PATH.exists():
        try:
            existing_items = json.loads(LIVE_NEWS_PATH.read_text(encoding="utf-8"))
        except Exception:
            existing_items = []

    fresh_rss = []
    seen = set()
    headers = {"User-Agent": "Mozilla/5.0 (compatible; ValknutRadarBot/4.6)"}

    for url, default_cat in FEEDS:
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=15) as resp:
                xml_bytes = resp.read()
            root = ET.fromstring(xml_bytes)
            for item in root.findall(".//item")[:12]:
                raw_title = (item.findtext("title") or "").strip()
                link = (item.findtext("link") or "").strip()
                pub = (item.findtext("pubDate") or "").strip()
                src = (item.findtext("source") or "Google News BR").strip()
                desc = re.sub(r"<[^>]+>", " ", item.findtext("description") or "")
                desc = re.sub(r"\s+", " ", desc).strip()

                dt_fmt = parse_recent_pubdate(pub)
                if not dt_fmt:
                    continue

                clean_title = re.sub(r"\s+-\s+[^-]+$", "", raw_title).strip()
                if not clean_title or is_excluded(clean_title):
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

    merged = []
    for it in fresh_rss + existing_items:
        title = str(it.get("titulo") or "").strip()
        if not title or is_excluded(title):
            continue
        k = norm(title)[:62]
        if k in seen and it not in fresh_rss:
            continue
        seen.add(k)
        merged.append(it)

    merged.sort(key=lambda x: parse_br_sort_key(x.get("data_hora", "")), reverse=True)
    capped = merged[:90]
    for idx, item in enumerate(capped, start=1):
        if not item.get("id"):
            item["id"] = 1000 + idx

    if capped:
        LIVE_NEWS_PATH.write_text(
            json.dumps(capped, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
        )
        print(f"live-news.json atualizado com {len(capped)} notícias consolidadas.")


if __name__ == "__main__":
    main()
