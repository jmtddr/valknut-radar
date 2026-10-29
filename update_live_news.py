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

FEEDS = [
    ("https://news.google.com/rss/search?q=waiver+OR+covenants+OR+AGD+OR+debenturistas+OR+deb%C3%AAntures+reestrutura%C3%A7%C3%A3o&hl=pt-BR&gl=BR&ceid=BR:pt-419", "Waiver / AGD"),
    ("https://news.google.com/rss/search?q=%22recupera%C3%A7%C3%A3o+extrajudicial%22+OR+%22vencimento+antecipado%22+OR+V%C3%B3rtx+OR+Pent%C3%A1gono+OR+%22Oliveira+Trust%22+deb%C3%AAntures&hl=pt-BR&gl=BR&ceid=BR:pt-419", "Waiver / AGD"),
    ("https://news.google.com/rss/search?q=rebaixamento+OR+rating+Fitch+OR+Moody%27s+deb%C3%AAntures+OR+CRA+OR+d%C3%ADvida&hl=pt-BR&gl=BR&ceid=BR:pt-419", "Downgrade Rating"),
    ("https://news.google.com/rss/search?q=%22recupera%C3%A7%C3%A3o+judicial%22+OR+%22tutela+cautelar%22+OR+%22pedido+de+fal%C3%AAncia%22+d%C3%ADvida+milh%C3%B5es&hl=pt-BR&gl=BR&ceid=BR:pt-419", "Pedido de RJ"),
]

def norm(s):
    return "".join(c for c in unicodedata.normalize("NFD", str(s or "").lower()) if unicodedata.category(c) != "Mn")

def format_pubdate(pub_str):
    try:
        dt = parsedate_to_datetime(pub_str)
        br_tz = timezone(timedelta(hours=-3))
        dt_br = dt.astimezone(br_tz)
        return dt_br.strftime("%d/%m/%Y %H:%M")
    except Exception:
        now_br = datetime.now(timezone(timedelta(hours=-3)))
        return now_br.strftime("%d/%m/%Y %H:%M")

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

                clean_title = re.sub(r"\s+-\s+[^-]+$", "", raw_title).strip()
                key = norm(clean_title)[:65]
                if not clean_title or key in seen:
                    continue
                seen.add(key)

                cat, fonte, escopo = classify(clean_title, desc, src, default_cat)
                resumo = desc[:230] if len(desc) > 35 and norm(desc) != norm(clean_title) else f"Monitoramento automático ({src}): atualização sobre {cat}."

                items_out.append({
                    "data_hora": format_pubdate(pub),
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

    if items_out:
        with open("live-news.json", "w", encoding="utf-8") as f:
            json.dump(items_out[:24], f, ensure_ascii=False, indent=2)
        print(f"live-news.json atualizado com {len(items_out[:24])} notícias.")

if __name__ == "__main__":
    main()
