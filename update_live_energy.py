#!/usr/bin/env python3
"""
Valknut Radar v5.0 — Pipeline Autônomo de Telemetria Elétrica Real (ONS AWS S3 + CCEE CKAN)
Consolida os últimos 30 dias operacionais verificados (24h por subsistema SIN, SE, S, NE, N)
a partir dos repositórios oficiais de Dados Abertos do ONS (AWS S3) e da CCEE (CKAN Datastore),
gerando `live-energy.json` na raiz do repositório sem multiplicadores sintéticos.
"""

import csv
import io
import json
import re
import unicodedata
import urllib.parse
import urllib.request
import zipfile
from collections import defaultdict
from datetime import datetime, timedelta, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent
LIVE_ENERGY_PATH = ROOT / "live-energy.json"
DEALS_PATH = ROOT / "deals.json"

ONS_S3_BASE = "https://ons-aws-prod-opendata.s3.amazonaws.com/dataset"
CVM_OFERTAS_URL = "https://dados.cvm.gov.br/dados/OFERTA/DISTRIB/DADOS/oferta_distribuicao.zip"
ONS_INTEGRA_URL = "https://integra.ons.org.br/api/energiaagora/GetBalancoEnergetico/null"
CCEE_PKG_SHOW_URL = "https://dadosabertos.ccee.org.br/api/3/action/package_show?id=pld_horario"
CCEE_DATASTORE_URL = "https://dadosabertos.ccee.org.br/api/3/action/datastore_search"

BROWSER_HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36"
    ),
    "Accept": "application/json, text/csv, text/plain, */*",
}

SUBMARKET_LABELS = {
    "SIN": "Sistema Interligado Nacional (SIN)",
    "SE": "Submercado Sudeste / Centro-Oeste",
    "S": "Submercado Sul",
    "NE": "Submercado Nordeste",
    "N": "Submercado Norte",
}

SUBMARKET_KEYS = ("SIN", "SE", "S", "NE", "N")
REGIONAL_KEYS = ("SE", "S", "NE", "N")

CCEE_SUBMARKET_MAP = {
    "SUDESTE": "SE",
    "SUDESTE/CENTRO-OESTE": "SE",
    "SE": "SE",
    "SE/CO": "SE",
    "SUL": "S",
    "S": "S",
    "NORDESTE": "NE",
    "NE": "NE",
    "NORTE": "N",
    "N": "N",
}


def fmt_int_br(val: float) -> str:
    n = int(round(val))
    return f"{n:,}".replace(",", ".")


def fmt_dec_br(val: float, decimals: int = 1) -> str:
    s = f"{val:,.{decimals}f}"
    return s.replace(",", "_").replace(".", ",").replace("_", ".")


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
    except ValueError:
        return default


def fetch_bytes(url: str, extra_headers: dict = None, timeout: int = 25) -> bytes:
    hdrs = dict(BROWSER_HEADERS)
    if extra_headers:
        hdrs.update(extra_headers)
    req = urllib.request.Request(url, headers=hdrs)
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read()


def fetch_ons_integra_ratios() -> tuple[float, dict[str, float]]:
    """
    Obtém referência instantânea do ONS Energia Agora para:
    - Geração nuclear verificada em Angra (SE/CO) dentro de val_gertermica do balanço;
    - Participação regional de MMGD dentro de val_gersolar do balanço.
    """
    nuclear_se_mw = 1350.0
    mmgd_share = {"SE": 0.68, "S": 0.85, "NE": 0.24, "N": 0.75}
    if LIVE_ENERGY_PATH.exists():
        try:
            prev = json.loads(LIVE_ENERGY_PATH.read_text(encoding="utf-8"))
            prev_subs = prev.get("submarkets") or {}
            for sub in ("SE", "S", "NE", "N"):
                s_arr = (prev_subs.get(sub) or {}).get("solar") or []
                m_arr = (prev_subs.get(sub) or {}).get("mmgd") or []
                tot_sm = sum(s_arr) + sum(m_arr)
                if tot_sm > 50.0:
                    mmgd_share[sub] = min(0.95, max(0.05, sum(m_arr) / tot_sm))
        except Exception:
            pass
    try:
        raw = fetch_bytes(ONS_INTEGRA_URL, {"Accept": "application/json"}, timeout=12)
        data = json.loads(raw.decode("utf-8"))
        se_gen = (data.get("sudesteECentroOeste") or {}).get("geracao") or {}
        nuc = safe_float(se_gen.get("nuclear"), -1.0)
        if nuc >= 0.0:
            nuclear_se_mw = nuc
        region_json_keys = {
            "SE": "sudesteECentroOeste",
            "S": "sul",
            "NE": "nordeste",
            "N": "norte",
        }
        for sub, jkey in region_json_keys.items():
            gen = (data.get(jkey) or {}).get("geracao") or {}
            sol_c = max(0.0, safe_float(gen.get("solar"), 0.0))
            mmgd_v = max(0.0, safe_float(gen.get("mmgd"), 0.0))
            if (sol_c + mmgd_v) > 50.0:
                mmgd_share[sub] = min(0.95, max(0.05, mmgd_v / (sol_c + mmgd_v)))
    except Exception as exc:
        print(f"[ONS Integra] Usando proporções operacionais padrão ({exc})")
    return nuclear_se_mw, mmgd_share


def fetch_ons_ear_daily(years: list[int]) -> dict[str, dict[str, float]]:
    """
    Lê EAR_DIARIO_SUBSISTEMA_{YEAR}.csv no ONS AWS S3 OpenData e calcula
    o percentual de cada subsistema + o EAR ponderado físico do SIN
    (soma de ear_verif_subsistema_mwmes / soma de ear_max_subsistema).
    """
    ear_by_day: dict[str, dict[str, float]] = defaultdict(dict)
    mwmes_acc: dict[str, list[float]] = defaultdict(lambda: [0.0, 0.0])

    for yr in years:
        url = f"{ONS_S3_BASE}/ear_subsistema_di/EAR_DIARIO_SUBSISTEMA_{yr}.csv"
        try:
            text = fetch_bytes(url, timeout=25).decode("utf-8", errors="ignore")
        except Exception as exc:
            print(f"[ONS EAR] Aviso ao ler {yr}: {exc}")
            continue
        lines = text.splitlines()
        if len(lines) < 2:
            continue
        header = [c.strip().lower() for c in lines[0].split(";")]
        idx_sub = header.index("id_subsistema") if "id_subsistema" in header else 0
        idx_dt = header.index("ear_data") if "ear_data" in header else 2
        idx_max = header.index("ear_max_subsistema") if "ear_max_subsistema" in header else 3
        idx_ver = (
            header.index("ear_verif_subsistema_mwmes")
            if "ear_verif_subsistema_mwmes" in header
            else 4
        )
        idx_pct = (
            header.index("ear_verif_subsistema_percentual")
            if "ear_verif_subsistema_percentual" in header
            else 5
        )

        for ln in lines[1:]:
            if not ln.strip():
                continue
            parts = ln.split(";")
            if len(parts) <= max(idx_sub, idx_dt, idx_max, idx_ver, idx_pct):
                continue
            sub = parts[idx_sub].strip().upper()
            day = parts[idx_dt].strip()[:10]
            if sub not in REGIONAL_KEYS or len(day) != 10:
                continue
            ear_max = safe_float(parts[idx_max], 0.0)
            ear_ver = safe_float(parts[idx_ver], 0.0)
            ear_pct = safe_float(parts[idx_pct], 0.0)
            ear_by_day[day][sub] = ear_pct
            if ear_max > 0.0:
                mwmes_acc[day][0] += ear_ver
                mwmes_acc[day][1] += ear_max

    for day, (ver_sum, max_sum) in mwmes_acc.items():
        if max_sum > 0.0:
            ear_by_day[day]["SIN"] = (ver_sum / max_sum) * 100.0

    return ear_by_day


def fetch_ons_balanco_hourly(year: int) -> dict[tuple[str, str], dict[int, tuple[float, float, float, float, float]]]:
    """
    Lê os últimos ~700 KB de BALANCO_ENERGIA_SUBSISTEMA_{YEAR}.csv via HTTP Range
    (cobrindo ~50 dias completos de curvas de 24h para N, NE, S, SE e SIN).
    Retorna {(day, sub): {hour: (hidro, termica, eolica, solar, carga)}}.
    """
    url = f"{ONS_S3_BASE}/balanco_energia_subsistema_ho/BALANCO_ENERGIA_SUBSISTEMA_{year}.csv"
    hdr_bytes = fetch_bytes(url, {"Range": "bytes=0-511"}, timeout=20)
    header_line = hdr_bytes.decode("utf-8", errors="ignore").splitlines()[0]
    header = [c.strip().lower() for c in header_line.split(";")]

    try:
        tail_bytes = fetch_bytes(url, {"Range": "bytes=-720000"}, timeout=30)
        raw_lines = tail_bytes.decode("utf-8", errors="ignore").splitlines()
        data_lines = raw_lines[1:] if len(raw_lines) > 1 else raw_lines
    except Exception:
        full_bytes = fetch_bytes(url, timeout=45)
        data_lines = full_bytes.decode("utf-8", errors="ignore").splitlines()[1:]

    idx_sub = header.index("id_subsistema") if "id_subsistema" in header else 0
    idx_dt = header.index("din_instante") if "din_instante" in header else 2
    idx_h = header.index("val_gerhidraulica") if "val_gerhidraulica" in header else 3
    idx_t = header.index("val_gertermica") if "val_gertermica" in header else 4
    idx_e = header.index("val_gereolica") if "val_gereolica" in header else 5
    idx_s = header.index("val_gersolar") if "val_gersolar" in header else 6
    idx_c = header.index("val_carga") if "val_carga" in header else 7

    balanco: dict[tuple[str, str], dict[int, tuple[float, float, float, float, float]]] = defaultdict(dict)
    for ln in data_lines:
        if not ln.strip():
            continue
        parts = ln.split(";")
        if len(parts) <= max(idx_sub, idx_dt, idx_h, idx_t, idx_e, idx_s, idx_c):
            continue
        sub = parts[idx_sub].strip().upper()
        if sub not in SUBMARKET_KEYS:
            continue
        dt_str = parts[idx_dt].strip()
        if len(dt_str) < 13 or dt_str[4] != "-":
            continue
        day = dt_str[:10]
        try:
            hr = int(dt_str[11:13])
        except ValueError:
            continue
        if not (0 <= hr <= 23):
            continue
        hidro = max(0.0, safe_float(parts[idx_h], 0.0))
        termica = max(0.0, safe_float(parts[idx_t], 0.0))
        eolica = max(0.0, safe_float(parts[idx_e], 0.0))
        solar = max(0.0, safe_float(parts[idx_s], 0.0))
        carga = max(0.0, safe_float(parts[idx_c], 0.0))
        balanco[(day, sub)][hr] = (hidro, termica, eolica, solar, carga)

    return balanco


def stream_ons_curtailment(months: list[tuple[int, int]], min_day: str, max_day: str = "9999-12-31"):
    """
    Faz streaming linha a linha dos CSVs mensais de Constrained-Off Eólico e Fotovoltaico
    do ONS AWS S3 (ordenados por usina, razão pela qual o arquivo mensal completo deve ser varrido).
    Semi-horários (48 patamares/dia) são convertidos em MW médios horários (/2.0) e MWmed diários (/48.0),
    além de consolidar o Ranking de Usinas/SPEs mais penalizadas por Curtailment na janela de 30 dias.
    """
    hourly_curt: dict[tuple[str, str, str], list[float]] = defaultdict(lambda: [0.0] * 24)
    reason_mwmed: dict[tuple[str, str, str], float] = defaultdict(float)
    plant_acc: dict[tuple[str, str, str, str, str], dict] = {}

    datasets = [
        ("eol", "Eólica", "restricao_coff_eolica_tm", "RESTRICAO_COFF_EOLICA"),
        ("sol", "Solar", "restricao_coff_fotovoltaica_tm", "RESTRICAO_COFF_FOTOVOLTAICA"),
    ]
    for yr, mo in months:
        ym_tag = f"{yr}_{mo:02d}"
        for kind, fonte_lbl, folder, prefix in datasets:
            url = f"{ONS_S3_BASE}/{folder}/{prefix}_{ym_tag}.csv"
            req = urllib.request.Request(url, headers=BROWSER_HEADERS)
            try:
                with urllib.request.urlopen(req, timeout=45) as resp:
                    header_raw = resp.readline().decode("utf-8", errors="ignore")
                    hdr = [c.strip().lower() for c in header_raw.split(";")]
                    i_sub = hdr.index("id_subsistema") if "id_subsistema" in hdr else 0
                    i_uf = hdr.index("id_estado") if "id_estado" in hdr else 2
                    i_usina = hdr.index("nom_usina") if "nom_usina" in hdr else 4
                    i_ceg = hdr.index("ceg") if "ceg" in hdr else 6
                    i_dt = hdr.index("din_instante") if "din_instante" in hdr else 7
                    i_ger = hdr.index("val_geracao") if "val_geracao" in hdr else 8
                    i_ref = hdr.index("val_geracaoreferencia") if "val_geracaoreferencia" in hdr else 11
                    i_reff = (
                        hdr.index("val_geracaoreferenciafinal")
                        if "val_geracaoreferenciafinal" in hdr
                        else 12
                    )
                    i_raz = hdr.index("cod_razaorestricao") if "cod_razaorestricao" in hdr else 13
                    i_apur = (
                        hdr.index("val_geracaonaorealizadaapurada")
                        if "val_geracaonaorealizadaapurada" in hdr
                        else 19
                    )
                    req_len = max(i_sub, i_uf, i_usina, i_ceg, i_dt, i_ger, i_ref, i_reff, i_raz, i_apur) + 1

                    for raw_line in resp:
                        ln = raw_line.decode("utf-8", errors="ignore")
                        parts = ln.split(";")
                        if len(parts) < req_len:
                            continue
                        dt_str = parts[i_dt].strip()
                        day = dt_str[:10]
                        if day < min_day or day > max_day:
                            continue
                        sub = parts[i_sub].strip().upper()
                        if sub not in REGIONAL_KEYS:
                            continue

                        raz = parts[i_raz].strip().upper()
                        apur_str = parts[i_apur].strip()
                        ger_v = max(0.0, safe_float(parts[i_ger], 0.0))
                        ref_raw = parts[i_reff].strip() or parts[i_ref].strip()
                        ref_v = max(0.0, safe_float(ref_raw, 0.0)) if ref_raw else ger_v

                        curt_mw = 0.0
                        if raz or apur_str:
                            curt_mw = safe_float(apur_str, 0.0) if apur_str else 0.0
                            if curt_mw <= 0.0 and raz in ("ENE", "CNF", "REL"):
                                curt_mw = max(0.0, ref_v - ger_v)

                        usina_nm = parts[i_usina].strip()
                        if usina_nm:
                            ceg_code = parts[i_ceg].strip()
                            uf_code = parts[i_uf].strip().upper()[:2]
                            pkey = (usina_nm, ceg_code, uf_code, sub, fonte_lbl)
                            st = plant_acc.get(pkey)
                            if st is None:
                                st = {
                                    "lost_mwh": 0.0,
                                    "gen_mwh": 0.0,
                                    "ref_mwh": 0.0,
                                    "ENE": 0.0,
                                    "CNF": 0.0,
                                    "REL": 0.0,
                                    "days": set(),
                                }
                                plant_acc[pkey] = st
                            st["gen_mwh"] += ger_v * 0.5
                            st["ref_mwh"] += max(ref_v, ger_v + curt_mw) * 0.5
                            if curt_mw > 0.0:
                                lost_h = curt_mw * 0.5
                                st["lost_mwh"] += lost_h
                                tag_r = raz if raz in ("ENE", "CNF", "REL") else "CNF"
                                st[tag_r] += lost_h
                                st["days"].add(day)

                        if curt_mw > 0.0:
                            try:
                                hr = int(dt_str[11:13])
                            except ValueError:
                                continue
                            if not (0 <= hr <= 23):
                                continue
                            half_mw = curt_mw / 2.0
                            hourly_curt[(day, sub, kind)][hr] += half_mw
                            hourly_curt[(day, "SIN", kind)][hr] += half_mw
                            tag_raz = raz if raz in ("ENE", "CNF", "REL") else "CNF"
                            reason_mwmed[(day, sub, tag_raz)] += curt_mw / 48.0
                            reason_mwmed[(day, "SIN", tag_raz)] += curt_mw / 48.0
            except Exception as exc:
                print(f"[ONS Curtailment] Aviso ao processar {prefix}_{ym_tag}: {exc}")

    top_plants = []
    for (usina_nm, ceg_code, uf_code, sub, fonte_lbl), st in plant_acc.items():
        lost_mwh = st["lost_mwh"]
        if lost_mwh < 500.0:
            continue
        denom_mwh = max(st["ref_mwh"], st["gen_mwh"] + lost_mwh, 1.0)
        curt_pct = min(99.9, round(100.0 * lost_mwh / denom_mwh, 1))
        raz_map = {"ENE": st["ENE"], "CNF": st["CNF"], "REL": st["REL"]}
        dom_raz = max(raz_map, key=raz_map.get)
        dom_pct = int(round(100.0 * raz_map[dom_raz] / max(lost_mwh, 1e-6)))
        est_loss_mm = round((lost_mwh * 180.0) / 1_000_000.0, 2)
        top_plants.append({
            "usina": usina_nm,
            "ceg": ceg_code or "N/D",
            "uf": uf_code or sub,
            "submercado": sub,
            "fonte": fonte_lbl,
            "curt_mwh": int(round(lost_mwh)),
            "curt_mwmed": round(lost_mwh / (30.0 * 24.0), 1),
            "curt_pct": curt_pct,
            "est_rev_loss_mm": est_loss_mm,
            "dominant_reason": dom_raz,
            "dominant_reason_pct": dom_pct,
            "days_affected": len(st["days"]),
        })

    top_plants.sort(key=lambda x: x["curt_mwh"], reverse=True)
    return hourly_curt, reason_mwmed, top_plants[:35]


def fetch_ccee_pld_hourly(year: int, months: list[tuple[int, int]], min_day: str) -> dict[tuple[str, str], list[float]]:
    """
    Consulta o CKAN Datastore oficial da CCEE (`pld_horario_{YEAR}`) por `MES_REFERENCIA`.
    Em caso de indisponibilidade, faz fallback transparente para o CMO Semi-Horário do ONS S3.
    """
    pld_hourly: dict[tuple[str, str], list[float]] = {}
    try:
        pkg_raw = fetch_bytes(CCEE_PKG_SHOW_URL, {"Accept": "application/json"}, timeout=20)
        pkg_json = json.loads(pkg_raw.decode("utf-8"))
        resources = (pkg_json.get("result") or {}).get("resources") or []
        res_id = None
        for r in resources:
            name_str = f"{r.get('name', '')} {r.get('description', '')}".lower()
            if str(year) in name_str and r.get("datastore_active"):
                res_id = r.get("id")
                break
        if not res_id and resources:
            active_res = [r for r in resources if r.get("datastore_active")]
            if active_res:
                res_id = active_res[-1].get("id")

        if res_id:
            acc: dict[tuple[str, str], dict[int, float]] = defaultdict(dict)
            for yr, mo in months:
                mes_ref = f"{yr}{mo:02d}"
                filters_q = json.dumps({"MES_REFERENCIA": mes_ref}, separators=(",", ":"))
                qs = urllib.parse.urlencode(
                    {"resource_id": res_id, "filters": filters_q, "limit": 5000}
                )
                ds_raw = fetch_bytes(
                    f"{CCEE_DATASTORE_URL}?{qs}", {"Accept": "application/json"}, timeout=25
                )
                ds_json = json.loads(ds_raw.decode("utf-8"))
                records = (ds_json.get("result") or {}).get("records") or []
                for rec in records:
                    sub_raw = str(rec.get("SUBMERCADO") or "").strip().upper()
                    sub = CCEE_SUBMARKET_MAP.get(sub_raw)
                    if not sub:
                        continue
                    dia_raw = str(rec.get("DIA") or "").strip()
                    if "-" in dia_raw and len(dia_raw) >= 10:
                        day = dia_raw[:10]
                    else:
                        try:
                            day = f"{yr}-{mo:02d}-{int(dia_raw):02d}"
                        except ValueError:
                            continue
                    if day < min_day:
                        continue
                    try:
                        hr = int(rec.get("HORA"))
                    except (TypeError, ValueError):
                        continue
                    if 0 <= hr <= 23:
                        val = safe_float(rec.get("PLD_HORA"), 0.0)
                        if val > 0.0:
                            acc[(day, sub)][hr] = val

            for (day, sub), hr_map in acc.items():
                if hr_map:
                    mean_v = sum(hr_map.values()) / len(hr_map)
                    pld_hourly[(day, sub)] = [round(hr_map.get(h, mean_v), 2) for h in range(24)]
    except Exception as exc:
        print(f"[CCEE PLD] Aviso no CKAN Datastore ({exc}); ativando fallback CMO ONS S3.")

    if not pld_hourly:
        # Metodologia regulatória ANEEL REN 1.032/2022 (média horária do CMO DESSEM + piso/teto horários + teto estrutural diário)
        pld_min = 57.31
        pld_max_h = 1611.04
        pld_max_est = 785.27
        cmo_url = f"{ONS_S3_BASE}/cmo_tm/CMO_SEMIHORARIO_{year}.csv"
        try:
            tail = fetch_bytes(cmo_url, {"Range": "bytes=-750000"}, timeout=25)
            acc_cmo: dict[tuple[str, str, int], list[float]] = defaultdict(list)
            for ln in tail.decode("utf-8", errors="ignore").splitlines()[1:]:
                p = ln.split(";")
                if len(p) < 4:
                    continue
                sub = p[0].strip().upper()
                dt_s = p[2].strip()
                if sub not in REGIONAL_KEYS or len(dt_s) < 13 or dt_s[:10] < min_day:
                    continue
                hr = int(dt_s[11:13])
                acc_cmo[(dt_s[:10], sub, hr)].append(max(0.0, safe_float(p[3], 0.0)))
            days_seen = sorted({k[0] for k in acc_cmo})
            for d in days_seen:
                for sub in REGIONAL_KEYS:
                    arr = []
                    for h in range(24):
                        vals = acc_cmo.get((d, sub, h))
                        raw_h = (sum(vals) / len(vals)) if vals else pld_min
                        arr.append(min(pld_max_h, max(pld_min, raw_h)))
                    for _ in range(8):
                        avg_d = sum(arr) / 24.0
                        if avg_d <= pld_max_est + 1e-6:
                            break
                        scale = pld_max_est / avg_d
                        arr = [max(pld_min, x * scale) for x in arr]
                    pld_hourly[(d, sub)] = [round(x, 2) for x in arr]
        except Exception as exc:
            print(f"[ONS CMO Fallback] Aviso: {exc}")

    return pld_hourly


def _norm_key(text: str) -> str:
    s = unicodedata.normalize("NFD", str(text or "").lower())
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    s = re.sub(r"[^a-z0-9 ]+", " ", s)
    return re.sub(r"\s+", " ", s).strip()


def _clean_conjunto_stem(usina_name: str) -> str:
    s = _norm_key(usina_name)
    s = re.sub(r"^(?:conj|conjunto)\s+", "", s)
    s = re.sub(r"\b\d+\s*kv\b", " ", s)
    s = re.sub(r"\bpiloto\b", " ", s)
    s = re.sub(r"\s+[ivx0-9]+\s*$", " ", s)
    return re.sub(r"\s+", " ", s).strip()


def _fmt_cnpj(raw: str) -> str:
    d = re.sub(r"\D+", "", str(raw or ""))
    if len(d) != 14:
        return str(raw or "").strip()
    return f"{d[:2]}.{d[2:5]}.{d[5:8]}/{d[8:12]}-{d[12:]}"


UTILITY_SPONSORS = (
    "engie", "auren", "edp", "copel", "eneva", "vale", "cpfl",
    "eletrobras", "chesf", "furnas", "cemig", "neoenergia", "enel", "axia",
)


def enrich_curtailment_plants_with_spes_and_debt(plants: list[dict]) -> list[dict]:
    """Cruza Conjuntos ONS -> SPEs/CEGs/Potência/Operador (ONS S3) -> Debêntures Lei 12.431 (CVM)."""
    if not plants:
        return plants

    conj_to_spes: dict[str, list[tuple[str, str]]] = defaultdict(list)
    try:
        req = urllib.request.Request(
            f"{ONS_S3_BASE}/usina_conjunto/RELACIONAMENTO_USINA_CONJUNTO.csv",
            headers=BROWSER_HEADERS,
        )
        with urllib.request.urlopen(req, timeout=20) as resp:
            raw_rel = resp.read().decode("utf-8", errors="replace")
        for row in csv.DictReader(io.StringIO(raw_rel), delimiter=";"):
            if (row.get("dat_fimrelacionamento") or "").strip():
                continue
            nom_conj = (row.get("nom_conjunto") or "").strip()
            nom_u = (row.get("nom_usina") or "").strip()
            ceg = (row.get("ceg") or "").strip()
            if nom_conj and ceg:
                k_exact = _norm_key(nom_conj)
                k_stem = _clean_conjunto_stem(nom_conj)
                conj_to_spes[k_exact].append((nom_u, ceg))
                if k_stem and k_stem != k_exact:
                    conj_to_spes[k_stem].append((nom_u, ceg))
    except Exception as exc:
        print(f"[ONS Conjunto->SPE] Aviso: {exc}")

    ceg_meta: dict[str, dict] = {}
    try:
        req_cap = urllib.request.Request(
            f"{ONS_S3_BASE}/capacidade-geracao/CAPACIDADE_GERACAO.csv",
            headers=BROWSER_HEADERS,
        )
        with urllib.request.urlopen(req_cap, timeout=25) as resp:
            raw_cap = resp.read().decode("utf-8", errors="replace")
        for row in csv.DictReader(io.StringIO(raw_cap), delimiter=";"):
            if (row.get("dat_desativacao") or "").strip():
                continue
            ceg = (row.get("ceg") or "").strip()
            if len(ceg) < 12:
                continue
            key18 = ceg[:18]
            pot = safe_float(row.get("val_potenciaefetiva", "0"))
            prop = (row.get("nom_agenteproprietario") or "").strip()
            oper = (row.get("nom_agenteoperador") or "").strip()
            rec = ceg_meta.setdefault(key18, {"mw": 0.0, "prop": prop, "oper": oper})
            rec["mw"] += max(0.0, pot)
            if not rec["prop"] and prop:
                rec["prop"] = prop
            if not rec["oper"] and oper:
                rec["oper"] = oper
    except Exception as exc:
        print(f"[ONS Capacidade] Aviso: {exc}")

    incentivized_issuers: list[dict] = []
    try:
        req_cvm = urllib.request.Request(CVM_OFERTAS_URL, headers=BROWSER_HEADERS)
        with urllib.request.urlopen(req_cvm, timeout=25) as resp:
            zbytes = resp.read()
        by_issuer: dict[str, dict] = {}
        with zipfile.ZipFile(io.BytesIO(zbytes)) as zf:
            if "oferta_resolucao_160.csv" in zf.namelist():
                with zf.open("oferta_resolucao_160.csv") as f160:
                    rdr = csv.DictReader(io.TextIOWrapper(f160, encoding="latin-1", errors="replace"), delimiter=";")
                    for r in rdr:
                        if (r.get("Titulo_incentivado") or "").strip().upper() != "S":
                            continue
                        vm = _norm_key(r.get("Valor_Mobiliario", ""))
                        if "debenture" not in vm and "nota" not in vm:
                            continue
                        nome = (r.get("Nome_Emissor") or "").strip()
                        nome_n = _norm_key(nome)
                        if any(ex in nome_n for ex in ("transmissora", "transmissao", "rodovia", "saneamento", "aguas", "portuaria", "bioenergetica", "agroindustrial", "agropecuaria", "acucar", "alcool", "celulose", "ferrovia", "telecom")):
                            continue
                        cnpj14 = re.sub(r"\D+", "", r.get("CNPJ_Emissor") or "")
                        if len(cnpj14) != 14:
                            continue
                        vol = safe_float(r.get("Valor_Total_Registrado", "0")) / 1e6
                        af = (r.get("Agente_fiduciario") or "").strip()
                        rec = by_issuer.setdefault(cnpj14, {"nome": nome, "nome_n": nome_n, "cnpj": _fmt_cnpj(cnpj14), "vol_mm": 0.0, "af": af})
                        rec["vol_mm"] += max(0.0, vol)
                        if af and not rec["af"]:
                            rec["af"] = af
            if "oferta_distribuicao.csv" in zf.namelist():
                with zf.open("oferta_distribuicao.csv") as f400:
                    rdr = csv.DictReader(io.TextIOWrapper(f400, encoding="latin-1", errors="replace"), delimiter=";")
                    for r in rdr:
                        if (r.get("Oferta_Incentivo_Fiscal") or "").strip().upper() != "S":
                            continue
                        dt_em = (r.get("Data_Emissao") or r.get("Data_Inicio_Oferta") or "").strip()[:4]
                        if dt_em and dt_em.isdigit() and int(dt_em) < 2017:
                            continue
                        nome = (r.get("Nome_Emissor") or "").strip()
                        nome_n = _norm_key(nome)
                        if any(ex in nome_n for ex in ("transmissora", "transmissao", "rodovia", "saneamento", "aguas", "portuaria", "bioenergetica", "agroindustrial", "agropecuaria", "acucar", "alcool", "celulose", "ferrovia", "telecom")):
                            continue
                        cnpj14 = re.sub(r"\D+", "", r.get("CNPJ_Emissor") or "")
                        if len(cnpj14) != 14:
                            continue
                        vol = safe_float(r.get("Valor_Total", "0")) / 1e6
                        rec = by_issuer.setdefault(cnpj14, {"nome": nome, "nome_n": nome_n, "cnpj": _fmt_cnpj(cnpj14), "vol_mm": 0.0, "af": ""})
                        if vol > rec["vol_mm"]:
                            rec["vol_mm"] = max(rec["vol_mm"], vol)
        incentivized_issuers = list(by_issuer.values())
    except Exception as exc:
        print(f"[CVM Lei 12.431] Aviso: {exc}")

    deals_list = []
    if DEALS_PATH.exists():
        try:
            deals_list = json.loads(DEALS_PATH.read_text(encoding="utf-8"))
        except Exception:
            deals_list = []

    generic_energy_words = {
        "conj", "conjunto", "eolica", "eolico", "eolicos", "eolicas", "solar", "fotovoltaica",
        "energia", "energias", "renovaveis", "renovavel", "geracao", "participacoes", "holding",
        "centrais", "central", "parque", "complexo", "usina", "piloto", "norte", "sul", "leste", "oeste",
        "serra", "campo", "santa", "santo", "sao", "bom", "boa", "nova", "novo", "alto", "vale", "ufv", "eol",
    }

    for p in plants:
        raw_u = p.get("usina", "")
        k_exact = _norm_key(raw_u)
        k_stem = _clean_conjunto_stem(raw_u)
        spe_rows = conj_to_spes.get(k_exact) or conj_to_spes.get(k_stem) or []
        if not spe_rows and len(k_stem) >= 5:
            for ck, vals in conj_to_spes.items():
                if k_stem in ck or ck in k_stem:
                    spe_rows = vals
                    break

        unique_cegs = []
        seen_c = set()
        for nom_spe, ceg_code in spe_rows:
            if ceg_code[:18] not in seen_c:
                seen_c.add(ceg_code[:18])
                unique_cegs.append((nom_spe, ceg_code))

        total_mw = 0.0
        operators = defaultdict(float)
        owners = defaultdict(float)
        for _, ceg_code in unique_cegs:
            cm = ceg_meta.get(ceg_code[:18])
            if cm:
                mw = cm["mw"] or 25.0
                total_mw += mw
                if cm["oper"]:
                    operators[cm["oper"]] += mw
                if cm["prop"]:
                    owners[cm["prop"]] += mw

        top_oper = max(operators, key=operators.get) if operators else ""
        top_owner = max(owners, key=owners.get) if owners else (unique_cegs[0][0] if unique_cegs else "")
        if unique_cegs:
            p["ceg"] = unique_cegs[0][1]
            p["spes_count"] = len(unique_cegs)
        else:
            p["spes_count"] = 1
        p["potencia_mw"] = round(total_mw, 1) if total_mw > 0 else None
        p["operador_ons"] = top_oper or top_owner or "Em mapeamento ONS"
        p["proprietario_ons"] = top_owner or top_oper or ""

        oper_norm = _norm_key(f"{top_oper} {top_owner}")
        is_utility = any(u in oper_norm for u in UTILITY_SPONSORS)
        p["perfil_risco"] = "Utility / Corporativo" if is_utility else "Project Finance / SPE"

        best_deb = None
        candidate_phrases = [k_stem]
        for nom_spe, _ in unique_cegs[:6]:
            sp_stem = _clean_conjunto_stem(re.sub(r"^(?:eol|ufv|cgh|pch|ute)\s+", "", _norm_key(nom_spe)))
            if len(sp_stem) >= 5 and sp_stem not in candidate_phrases:
                candidate_phrases.append(sp_stem)
        core_tokens = [w for w in k_stem.split() if len(w) >= 4 and w not in generic_energy_words]
        phrase = k_stem
        for iss in incentivized_issuers:
            inorm = iss["nome_n"]
            matched = False
            if any(len(ph) >= 6 and ph in inorm for ph in candidate_phrases):
                matched = True
            elif len(core_tokens) >= 2 and all(t in inorm for t in core_tokens[:2]):
                matched = True
            elif len(core_tokens) == 1 and len(core_tokens[0]) >= 5 and re.search(rf"\b{re.escape(core_tokens[0])}\b", inorm):
                if any(ew in inorm for ew in ("eolica", "eolico", "solar", "energia", "renovave", "geracao", "holding", "ventos", "fotovoltaica")):
                    matched = True
            if matched:
                if not best_deb or iss["vol_mm"] > best_deb["vol_mm"]:
                    best_deb = iss

        if best_deb:
            p["debenture_emissor"] = best_deb["nome"]
            p["debenture_cnpj"] = best_deb["cnpj"]
            p["debenture_vol_mm"] = round(best_deb["vol_mm"], 1)
            if best_deb["af"]:
                p["agente_fiduciario"] = best_deb["af"]

        for d in deals_list:
            if d.get("setor_macro") != "Energia & Infraestrutura":
                continue
            d_emp = _norm_key(d.get("empresa", ""))
            d_tese = _norm_key(f"{d.get('tese', '')} {d.get('descricao_empresa', '')}")
            if (len(phrase) >= 6 and (phrase in d_emp or phrase in d_tese)) or (
                top_oper and len(_norm_key(top_oper)) >= 5 and _norm_key(top_oper) in d_emp
            ):
                p["deal_id"] = d.get("id")
                p["deal_empresa"] = d.get("empresa")
                break

    return plants


def main():
    br_tz = timezone(timedelta(hours=-3))
    now_utc = datetime.now(timezone.utc)
    now_br = now_utc.astimezone(br_tz)
    cur_year = now_br.year

    nuclear_se_ref, mmgd_share_ref = fetch_ons_integra_ratios()
    years_to_check = [cur_year - 1, cur_year] if now_br.month == 1 else [cur_year]

    ear_by_day = fetch_ons_ear_daily(years_to_check)
    balanco: dict[tuple[str, str], dict[int, tuple[float, float, float, float, float]]] = {}
    for yr in years_to_check:
        try:
            yr_bal = fetch_ons_balanco_hourly(yr)
            balanco.update(yr_bal)
        except Exception as exc:
            print(f"[ONS Balanço] Aviso ao ler {yr}: {exc}")

    complete_days = sorted(
        day
        for day in {k[0] for k in balanco}
        if all(len(balanco.get((day, sub), {})) == 24 for sub in SUBMARKET_KEYS)
    )
    if not complete_days:
        print("[ONS Balanço] Nenhum dia completo de 24h retornado nesta janela; preservando live-energy.json anterior.")
        return

    target_days = complete_days[-30:]
    min_day = target_days[0]
    ref_day = target_days[-1]

    months_needed = sorted({(int(d[:4]), int(d[5:7])) for d in target_days})
    hourly_curt, reason_mwmed, top_curtailment_plants = stream_ons_curtailment(months_needed, min_day, ref_day)
    top_curtailment_plants = enrich_curtailment_plants_with_spes_and_debt(top_curtailment_plants)
    pld_hourly: dict[tuple[str, str], list[float]] = {}
    for yr in sorted({y for y, _ in months_needed}):
        yr_months = [(y, m) for y, m in months_needed if y == yr]
        pld_hourly.update(fetch_ccee_pld_hourly(yr, yr_months, min_day))

    # Carry-forward para EAR e PLD caso algum dia tenha defasagem de publicação de 24h
    sorted_ear_days = sorted(ear_by_day.keys())
    last_ear_known = {"SIN": 57.6, "SE": 55.1, "S": 81.5, "NE": 59.0, "N": 54.2}
    for d in sorted_ear_days:
        if d <= min_day:
            for s in SUBMARKET_KEYS:
                if s in ear_by_day[d]:
                    last_ear_known[s] = ear_by_day[d][s]

    last_pld_known = {s: [165.0] * 24 for s in REGIONAL_KEYS}

    history: dict[str, dict] = {}
    for day in target_days:
        for s in SUBMARKET_KEYS:
            if s in ear_by_day.get(day, {}):
                last_ear_known[s] = ear_by_day[day][s]
        for s in REGIONAL_KEYS:
            if (day, s) in pld_hourly:
                last_pld_known[s] = pld_hourly[(day, s)]

        day_entry: dict[str, dict] = {}
        # Primeiro monta os 4 submercados regionais (SE, S, NE, N) para garantir soma exata no SIN
        reg_nuclear = {"SE": [0] * 24, "S": [0] * 24, "NE": [0] * 24, "N": [0] * 24}
        reg_solar_cent = {}
        reg_mmgd = {}

        for sub in REGIONAL_KEYS:
            hr_map = balanco[(day, sub)]
            hidro_arr, term_arr, nuc_arr, eol_arr, sol_arr, mmgd_arr, carga_arr = (
                [],
                [],
                [],
                [],
                [],
                [],
                [],
            )
            for h in range(24):
                vh, vt, ve, vs, vc = hr_map[h]
                if sub == "SE":
                    vn = min(nuclear_se_ref, vt * 0.45)
                else:
                    vn = 0.0
                vt_conv = max(0.0, vt - vn)

                m_ratio = mmgd_share_ref.get(sub, 0.5)
                v_mmgd = vs * m_ratio
                v_sol_c = max(0.0, vs - v_mmgd)

                hidro_arr.append(int(round(vh)))
                term_arr.append(int(round(vt_conv)))
                nuc_arr.append(int(round(vn)))
                eol_arr.append(int(round(ve)))
                sol_arr.append(int(round(v_sol_c)))
                mmgd_arr.append(int(round(v_mmgd)))
                carga_arr.append(int(round(vc)))

            reg_nuclear[sub] = nuc_arr
            reg_solar_cent[sub] = sol_arr
            reg_mmgd[sub] = mmgd_arr

            pld_arr = list(last_pld_known[sub])
            curt_eol = [int(round(x)) for x in hourly_curt[(day, sub, "eol")]]
            curt_sol = [int(round(x)) for x in hourly_curt[(day, sub, "sol")]]

            carga_med = sum(carga_arr) / 24.0
            gen_ren = sum(hidro_arr) + sum(eol_arr) + sum(sol_arr) + sum(mmgd_arr)
            gen_tot = gen_ren + sum(term_arr) + sum(nuc_arr)
            ren_pct = (100.0 * gen_ren / gen_tot) if gen_tot > 0 else 0.0
            pld_med = sum(pld_arr) / 24.0
            curt_med = (sum(curt_eol) + sum(curt_sol)) / 24.0

            raz_totals = {
                rz: reason_mwmed[(day, sub, rz)] for rz in ("ENE", "CNF", "REL")
            }
            raz_sum = sum(raz_totals.values())
            if curt_med >= 0.5 and raz_sum > 0:
                top_rz = max(raz_totals, key=raz_totals.get)
                top_pct = int(round(100.0 * raz_totals[top_rz] / raz_sum))
                curt_str = f"{fmt_int_br(curt_med)} MWmed ({top_pct}% {top_rz})"
            elif curt_med >= 0.5:
                curt_str = f"{fmt_int_br(curt_med)} MWmed"
            else:
                curt_str = "0 MWmed (Sem corte)"

            day_entry[sub] = {
                "label": SUBMARKET_LABELS[sub],
                "carga_mw": f"{fmt_int_br(carga_med)} MWmed",
                "renovavel_pct": f"{fmt_dec_br(ren_pct, 1)}%",
                "ear_pct": f"{fmt_dec_br(last_ear_known[sub], 1)}%",
                "pld_medio": f"R$ {fmt_dec_br(pld_med, 2)} / MWh",
                "curtailment_mw": curt_str,
                "hidro": hidro_arr,
                "termica": term_arr,
                "nuclear": nuc_arr,
                "eolica": eol_arr,
                "solar": sol_arr,
                "mmgd": mmgd_arr,
                "carga": carga_arr,
                "pld_hora": pld_arr,
                "curt_eolica": curt_eol,
                "curt_solar": curt_sol,
            }

        # Agora monta o agregado físico do SIN (preservando val_carga e balanço oficial do SIN)
        sin_map = balanco[(day, "SIN")]
        sin_hidro, sin_term, sin_nuc, sin_eol, sin_sol, sin_mmgd, sin_carga, sin_pld = (
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
        )
        for h in range(24):
            vh, vt, ve, vs, vc = sin_map[h]
            vn = reg_nuclear["SE"][h]
            vt_conv = max(0.0, vt - vn)
            v_sol_c = sum(reg_solar_cent[s][h] for s in REGIONAL_KEYS)
            v_mmgd = max(0.0, round(vs) - v_sol_c)

            sin_hidro.append(int(round(vh)))
            sin_term.append(int(round(vt_conv)))
            sin_nuc.append(int(round(vn)))
            sin_eol.append(int(round(ve)))
            sin_sol.append(int(round(v_sol_c)))
            sin_mmgd.append(int(round(v_mmgd)))
            sin_carga.append(int(round(vc)))

            # PLD horário médio do SIN ponderado pela carga horária de cada submercado
            w_load = sum(day_entry[s]["carga"][h] for s in REGIONAL_KEYS)
            if w_load > 0:
                w_pld = (
                    sum(day_entry[s]["pld_hora"][h] * day_entry[s]["carga"][h] for s in REGIONAL_KEYS)
                    / w_load
                )
            else:
                w_pld = sum(day_entry[s]["pld_hora"][h] for s in REGIONAL_KEYS) / 4.0
            sin_pld.append(round(w_pld, 2))

        sin_curt_eol = [int(round(x)) for x in hourly_curt[(day, "SIN", "eol")]]
        sin_curt_sol = [int(round(x)) for x in hourly_curt[(day, "SIN", "sol")]]

        sin_carga_med = sum(sin_carga) / 24.0
        sin_gen_ren = sum(sin_hidro) + sum(sin_eol) + sum(sin_sol) + sum(sin_mmgd)
        sin_gen_tot = sin_gen_ren + sum(sin_term) + sum(sin_nuc)
        sin_ren_pct = (100.0 * sin_gen_ren / sin_gen_tot) if sin_gen_tot > 0 else 0.0
        sin_pld_med = sum(sin_pld) / 24.0
        sin_curt_med = (sum(sin_curt_eol) + sum(sin_curt_sol)) / 24.0

        sin_raz = {rz: reason_mwmed[(day, "SIN", rz)] for rz in ("ENE", "CNF", "REL")}
        sin_raz_sum = sum(sin_raz.values())
        if sin_curt_med >= 0.5 and sin_raz_sum > 0:
            top_rz = max(sin_raz, key=sin_raz.get)
            top_pct = int(round(100.0 * sin_raz[top_rz] / sin_raz_sum))
            sin_curt_str = f"{fmt_int_br(sin_curt_med)} MWmed ({top_pct}% {top_rz})"
        elif sin_curt_med >= 0.5:
            sin_curt_str = f"{fmt_int_br(sin_curt_med)} MWmed"
        else:
            sin_curt_str = "0 MWmed (Sem corte)"

        day_entry["SIN"] = {
            "label": SUBMARKET_LABELS["SIN"],
            "carga_mw": f"{fmt_int_br(sin_carga_med)} MWmed",
            "renovavel_pct": f"{fmt_dec_br(sin_ren_pct, 1)}%",
            "ear_pct": f"{fmt_dec_br(last_ear_known['SIN'], 1)}%",
            "pld_medio": f"R$ {fmt_dec_br(sin_pld_med, 2)} / MWh",
            "curtailment_mw": sin_curt_str,
            "hidro": sin_hidro,
            "termica": sin_term,
            "nuclear": sin_nuc,
            "eolica": sin_eol,
            "solar": sin_sol,
            "mmgd": sin_mmgd,
            "carga": sin_carga,
            "pld_hora": sin_pld,
            "curt_eolica": sin_curt_eol,
            "curt_solar": sin_curt_sol,
        }

        # Ordena chaves como SIN, SE, S, NE, N
        history[day] = {k: day_entry[k] for k in SUBMARKET_KEYS}

    payload = {
        "updated_at": now_utc.strftime("%Y-%m-%dT%H:%M:%SZ"),
        "updated_at_br": now_br.strftime("%d/%m/%Y %H:%M"),
        "reference_date": ref_day,
        "min_date": min_day,
        "max_date": ref_day,
        "source_status": "ONS AWS OpenData + CCEE Oficial",
        "submarkets": history[ref_day],
        "top_curtailment_plants": top_curtailment_plants,
        "history": history,
    }

    LIVE_ENERGY_PATH.write_text(
        json.dumps(payload, ensure_ascii=False, separators=(",", ":")) + "\n",
        encoding="utf-8",
    )
    sin_ref = history[ref_day]["SIN"]
    print(
        f"live-energy.json atualizado ({len(history)} dias: {min_day} -> {ref_day}) | "
        f"SIN {ref_day}: Carga={sin_ref['carga_mw']} | EAR={sin_ref['ear_pct']} | "
        f"PLD={sin_ref['pld_medio']} | Curtailment={sin_ref['curtailment_mw']} | "
        f"Top Usinas={len(top_curtailment_plants)}"
    )


if __name__ == "__main__":
    main()
