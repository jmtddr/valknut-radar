#!/usr/bin/env python3
"""
Robô Autônomo 24/7 — VALKNUT SPECIAL SITUATIONS
Executa via GitHub Actions a cada 30 minutos para buscar notícias novas de Waivers, AGDs,
Covenants, Debêntures, CRAs, CRIs, Cortes de Rating e Recuperação Judicial no Brasil,
salvando em `live-news.json` sem depender de proxies CORS do navegador.
"""
import json
import re
import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET
from datetime import datetime, timezone, timedelta
from email.utils import parsedate_to_datetime
import unicodedata

import os

FEEDS = [
    ("https://news.google.com/rss/search?q=waiver+OR+covenants+OR+AGD+OR+debenturistas+OR+deb%C3%AAntures+reestrutura%C3%A7%C3%A3o+when:30d&hl=pt-BR&gl=BR&ceid=BR:pt-419", "Waiver / AGD"),
    ("https://news.google.com/rss/search?q=%22recupera%C3%A7%C3%A3o+extrajudicial%22+OR+%22vencimento+antecipado%22+OR+V%C3%B3rtx+OR+Pent%C3%A1gono+OR+%22Oliveira+Trust%22+deb%C3%AAntures+when:30d&hl=pt-BR&gl=BR&ceid=BR:pt-419", "Waiver / AGD"),
    ("https://news.google.com/rss/search?q=rebaixamento+OR+rating+Fitch+OR+Moody%27s+deb%C3%AAntures+OR+CRA+OR+d%C3%ADvida+when:30d&hl=pt-BR&gl=BR&ceid=BR:pt-419", "Downgrade Rating"),
    ("https://news.google.com/rss/search?q=%22recupera%C3%A7%C3%A3o+judicial%22+OR+%22tutela+cautelar%22+OR+%22pedido+de+fal%C3%AAncia%22+d%C3%ADvida+milh%C3%B5es+when:30d&hl=pt-BR&gl=BR&ceid=BR:pt-419", "Pedido de RJ"),
]

def norm(s):
    return "".join(c for c in unicodedata.normalize("NFD", str(s or "").lower()) if unicodedata.category(c) != "Mn")

def parse_pubdate(pub_str):
    try:
        dt = parsedate_to_datetime(pub_str)
        br_tz = timezone(timedelta(hours=-3))
        dt_br = dt.astimezone(br_tz)
        if dt_br.year < 2026:
            return None, 0
        return dt_br.strftime("%d/%m/%Y %H:%M"), int(dt_br.timestamp() * 1000)
    except Exception:
        return None, 0

def parse_date_str_ts(s):
    if not s:
        return 0
    s = str(s).strip()
    m = re.match(r"^(\d{2})/(\d{2})/(\d{4})(?:\s+(\d{2}):(\d{2}))?", s)
    if m:
        d, mo, y = int(m.group(1)), int(m.group(2)), int(m.group(3))
        hh = int(m.group(4)) if m.group(4) else 12
        mm = int(m.group(5)) if m.group(5) else 0
        dt = datetime(y, mo, d, hh, mm, tzinfo=timezone(timedelta(hours=-3)))
        return int(dt.timestamp() * 1000)
    return 0

def classify(title, desc, source, default_cat):
    b = norm(f"{title} {desc} {source}")
    if any(k in b for k in ["fitch", "moody", "s&p", "rebaixamento", "rebaixa", "downgrade", "rd(bra)", "ccc(bra)", "observacao negativa"]):
        cat = "Downgrade Rating"
    elif any(k in b for k in ["waiver", "covenant", "agd", "debenturista", "debenture", "vencimento antecipado", "standstill", "reperfilamento", "repactuacao", "recuperacao extrajudicial", "plano extrajudicial", "securitizadora", "vortx", "pentagono", "oliveira trust", "opea", "virgo", "cra ", "cras ", "cri ", "cris ", "fidc"]):
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
    elif any(k in s_norm for k in ["brazil journal", "forbes", "exame", "neofeed"]):
        fonte = "Brazil Journal"
    elif any(k in s_norm for k in ["fitch", "moody", "cvm", "infomoney", "seu dinheiro"]):
        fonte = "CVM / Fatos Relevantes"
    elif any(k in s_norm for k in ["vortx", "pentagono", "oliveira trust", "opea", "vert", "virgo"]):
        fonte = "Agentes Fiduciários"
    elif any(k in s_norm for k in ["jota", "conjur", "migalhas", "folha", "uol"]):
        fonte = "Jota / Tribunais"
    else:
        fonte = "CVM / Fatos Relevantes" if cat in ("Waiver / AGD", "Downgrade Rating") else "Valor Econômico"

    escopo = "cvm" if cat in ("Waiver / AGD", "Downgrade Rating") else "mercado"
    return cat, fonte, escopo

def main():
    existing_items = []
    for path in ("data/news.json", "live-news.json"):
        if os.path.exists(path):
            try:
                with open(path, "r", encoding="utf-8") as f:
                    data = json.load(f)
                    if isinstance(data, list) and len(data) > 0:
                        existing_items = data
                        break
            except Exception:
                pass

    items_out = []
    seen = set()
    headers = {"User-Agent": "Mozilla/5.0 (compatible; ValknutRadarBot/4.2; +https://jmtddr.github.io/valknut-radar/)"}

    for url, default_cat in FEEDS:
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=15) as resp:
                xml_bytes = resp.read()
            root = ET.fromstring(xml_bytes)
            for item in root.findall(".//item")[:10]:
                raw_title = (item.findtext("title") or "").strip()
                link = (item.findtext("link") or "").strip()
                pub = (item.findtext("pubDate") or "").strip()
                src = (item.findtext("source") or "Google News BR").strip()
                desc = re.sub(r"<[^>]+>", " ", item.findtext("description") or "")
                desc = re.sub(r"\s+", " ", desc).strip()

                dt_str, ts = parse_pubdate(pub)
                if not dt_str or ts <= 0:
                    continue
                if re.search(r"/(2022|2023|2024|2025)/", link):
                    continue

                clean_title = re.sub(r"\s+-\s+[^-]+$", "", raw_title).strip()
                key = norm(clean_title)[:65]
                if not clean_title or key in seen:
                    continue
                seen.add(key)

                cat, fonte, escopo = classify(clean_title, desc, src, default_cat)
                resumo = desc[:230] if len(desc) > 35 and norm(desc) != norm(clean_title) else f"Monitoramento automático ({src}): atualização sobre {cat}."

                items_out.append({
                    "data_hora": dt_str,
                    "timestamp": ts,
                    "titulo": clean_title,
                    "fonte": fonte,
                    "setor": "Mercado & Macro (RJ / Crédito)",
                    "categoria": cat,
                    "escopo": escopo,
                    "resumo": resumo,
                    "url": link,
                    "deal_id": None,
                    "empresa_nome": f"Radar Ao Vivo // {src}"
                })
        except Exception as e:
            print(f"Aviso ao consultar feed {url}: {e}")

    for item in existing_items:
        title = item.get("titulo") or ""
        key = norm(title)[:65]
        if not key or key in seen:
            continue
        ts = item.get("timestamp") or parse_date_str_ts(item.get("data_hora"))
        if ts < 1767225600000:  # 2026-01-01
            continue
        item["timestamp"] = ts
        seen.add(key)
        items_out.append(item)

    items_out.sort(key=lambda x: x.get("timestamp", 0), reverse=True)

    if items_out:
        os.makedirs("data", exist_ok=True)
        with open("data/news.json", "w", encoding="utf-8") as f:
            json.dump(items_out, f, ensure_ascii=False, indent=2)
        with open("live-news.json", "w", encoding="utf-8") as f:
            json.dump(items_out, f, ensure_ascii=False, indent=2)
        print(f"data/news.json e live-news.json atualizados com {len(items_out)} notícias ordenadas.")

if __name__ == "__main__":
    main()
