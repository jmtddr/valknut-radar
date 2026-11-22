/**
 * ============================================================================
 * VALKNUT — SPECIAL SITUATIONS // Google Apps Script Backend & Multi-Proxy Engine
 * Release v7.0 — Produção Blindada (15x85KB Chunked UTF-8, 6 Abas, Anti-Injection, QSA/DJEN & Health)
 * ============================================================================
 *
 * COMO ATUALIZAR A IMPLANTAÇÃO MANTENDO A MESMA URL (`APPS_SCRIPT_URL`):
 * 1. Abra a Planilha Mestre no Google Sheets > clique em "Extensões" > "Apps Script".
 *    (Se usar script avulso fora da planilha, adicione `MASTER_SHEET_ID` em
 *    Configurações do Projeto > Propriedades do Script).
 * 2. Substitua o conteúdo de `Código.gs` por este arquivo e salve (Ctrl+S).
 * 3. Clique em "Implantar" > "Gerenciar implantações" > ícone de lápis (Editar) >
 *    em Versão selecione **"Nova versão"** > clique em "Implantar".
 * 4. Teste rápido de saúde da implantação: abra `<APPS_SCRIPT_URL>?action=health`
 *    e verifique `{"status":"ok","version":"7.0","router":true,...}`.
 * 5. Opcional (varredura 24/7 + gravação automática na aba `Noticias`):
 *    execute uma vez `instalarGatilhosAutomaticos()`.
 */

const APP_RELEASE_VERSION = '7.0';
const MASTER_CACHE_KEY = 'vk_master_sheet_v70';
const CACHE_TTL_SECONDS = 300; // 5 minutos de cache em memória no servidor Google
const PUBLIC_REFRESH_COOLDOWN_KEY = 'vk_public_refresh_cooldown';
const PUBLIC_REFRESH_COOLDOWN_SECONDS = 60;
const CHUNK_MAX_UTF8_BYTES = 85 * 1024; // 85 KB por fatia em UTF-8 (abaixo do teto estrito de 100 KB do CacheService)
const CHUNK_CHAR_SIZE = 72000;          // Passo base antes da verificação exata de bytes UTF-8 (<= 85 KB)
const MAX_CACHE_CHUNKS = 15;            // 15 fatias x 85 KB = ~1,27 MB de capacidade total em CacheService
const MAX_NOTICIAS_ROWS = 500;          // Limite máximo de linhas na aba `Noticias` (1 cabeçalho + 499 itens)

// Allowlist estrita de domínios HTTPS permitidos no proxy RSS/Dados Abertos (anti-SSRF)
const ALLOWED_PROXY_HOSTS = {
  'news.google.com': true,
  'dadosabertos.ccee.org.br': true,
  'dadosabertos.aneel.gov.br': true,
  'integra.ons.org.br': true,
  'ons-aws-prod-opendata.s3.amazonaws.com': true,
  'www.rad.cvm.gov.br': true,
  'dados.cvm.gov.br': true,
  'comunicaapi.pje.jus.br': true,
  'brasilapi.com.br': true
};

// Bloqueio por hash SHA-256 de tokens normalizados (sem exposição nominal no código)
const BLOCKED_TOKEN_SHA256 = {
  'd252e0c8ec8a9a143e74a72447f3abaf7a4fad0f7755a819dcc9cd293980cc78': true
};

function decodeHtmlEntities_(str) {
  if (!str) return '';
  var s = String(str);
  for (var pass = 0; pass < 2; pass++) {
    if (s.indexOf('&') === -1) break;
    s = s
      .replace(/&nbsp;/gi, ' ')
      .replace(/&quot;/gi, '"')
      .replace(/&#0*39;|&apos;/gi, "'")
      .replace(/&lt;/gi, '<')
      .replace(/&gt;/gi, '>')
      .replace(/&#8211;|&ndash;/gi, '–')
      .replace(/&#8212;|&mdash;/gi, '—')
      .replace(/&#x([0-9a-f]+);/gi, function(m, hex) {
        var cp = parseInt(hex, 16);
        return (!isNaN(cp) && cp > 0 && cp <= 0x10ffff) ? String.fromCodePoint(cp) : m;
      })
      .replace(/&#(\d+);/g, function(m, dec) {
        var cp = Number(dec);
        return (!isNaN(cp) && cp > 0 && cp <= 0x10ffff) ? String.fromCodePoint(cp) : m;
      })
      .replace(/&amp;/gi, '&');
  }
  return s.replace(/\u00a0/g, ' ').replace(/\s{2,}/g, ' ').trim();
}

function utf8ByteLength_(str) {
  var s = String(str || '');
  var bytes = 0;
  for (var i = 0; i < s.length; i++) {
    var code = s.charCodeAt(i);
    if (code <= 0x7f) bytes += 1;
    else if (code <= 0x7ff) bytes += 2;
    else if (code >= 0xd800 && code <= 0xdfff) { bytes += 4; i++; }
    else bytes += 3;
  }
  return bytes;
}

function parsePassivoNum_(raw) {
  if (typeof raw === 'number') return isNaN(raw) ? 0 : raw;
  var s = String(raw == null ? '' : raw).replace(/R\$/gi, '').trim();
  if (!s) return 0;
  if (s.indexOf(',') !== -1 && s.indexOf('.') !== -1) s = s.replace(/\./g, '').replace(',', '.');
  else if (s.indexOf(',') !== -1) s = s.replace(',', '.');
  var n = parseFloat(s);
  return isNaN(n) ? 0 : n;
}

function openMasterSpreadsheet_() {
  const propId = PropertiesService.getScriptProperties().getProperty('MASTER_SHEET_ID');
  if (propId && propId.trim()) {
    return SpreadsheetApp.openById(propId.trim());
  }
  const active = SpreadsheetApp.getActiveSpreadsheet();
  if (active) return active;
  throw new Error('Planilha Mestre não vinculada. Defina MASTER_SHEET_ID nas Propriedades do Script.');
}

function sha256Hex_(input) {
  const raw = Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    String(input || ''),
    Utilities.Charset.UTF_8
  );
  let out = '';
  for (var i = 0; i < raw.length; i++) {
    var b = (raw[i] + 256) % 256;
    out += (b < 16 ? '0' : '') + b.toString(16);
  }
  return out;
}

function isExcludedEntity_(textValue) {
  const clean = String(textValue || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
  if (!clean) return false;
  const tokens = clean.split(/[^a-z0-9]+/);
  for (var i = 0; i < tokens.length; i++) {
    var tk = tokens[i];
    if (tk && tk.length >= 4 && BLOCKED_TOKEN_SHA256[sha256Hex_(tk)]) {
      return true;
    }
  }
  return false;
}

/**
 * Proteção contra Formula Injection (CSV/Sheet Injection) ao gravar entradas externas RSS.
 */
function sanitizeSheetCell_(val) {
  const str = String(val == null ? '' : val);
  if (/^\s*[=+\-@\t\r]/.test(str)) {
    return "'" + str;
  }
  return str;
}

/**
 * Validação aritmética Módulo-11 para CNPJ de 14 dígitos.
 */
function isValidCnpj14_(raw) {
  const digits = String(raw || '').replace(/\D/g, '');
  if (digits.length !== 14 || /^(\d)\1{13}$/.test(digits)) return false;
  const w1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const w2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  var s1 = 0;
  for (var i = 0; i < 12; i++) s1 += parseInt(digits.charAt(i), 10) * w1[i];
  var r1 = s1 % 11;
  var d1 = r1 < 2 ? 0 : 11 - r1;
  if (parseInt(digits.charAt(12), 10) !== d1) return false;
  var s2 = 0;
  for (var j = 0; j < 13; j++) s2 += parseInt(digits.charAt(j), 10) * w2[j];
  var r2 = s2 % 11;
  var d2 = r2 < 2 ? 0 : 11 - r2;
  return parseInt(digits.charAt(13), 10) === d2;
}

/**
 * Normaliza o nome-base da empresa (antes de parênteses) para deduplicação determinística.
 */
function normalizeCompanyBase_(raw) {
  return String(raw || '')
    .split('(')[0]
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Deduplica linhas da aba principal por CNPJ numérico (>= 11 dígitos) ou nome-base idêntico
 * quando não há CNPJs distintos, preservando o maior passivo consolidado do grupo econômico.
 */
function deduplicateLeadRows_(rows) {
  const deduped = [];
  const idxByBase = {};
  const idxByCnpj = {};

  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    if (!row) continue;
    var baseKey = normalizeCompanyBase_(row[2]);
    var cnpjDigits = String(row[3] || '').replace(/\D/g, '');
    var cnpjKey = cnpjDigits.length >= 11 ? cnpjDigits : '';

    var existingIdx = -1;
    if (cnpjKey && Object.prototype.hasOwnProperty.call(idxByCnpj, cnpjKey)) {
      existingIdx = idxByCnpj[cnpjKey];
    } else if (!cnpjKey && baseKey && baseKey.length >= 4 && Object.prototype.hasOwnProperty.call(idxByBase, baseKey)) {
      existingIdx = idxByBase[baseKey];
    }

    if (existingIdx >= 0) {
      var prevRow = deduped[existingIdx];
      var maxLen = Math.max(prevRow.length, row.length);
      var mergedRow = new Array(maxLen);
      for (var c = 0; c < maxLen; c++) {
        var newerVal = c < row.length ? row[c] : '';
        var olderVal = c < prevRow.length ? prevRow[c] : '';
        var newerEmpty = newerVal === null || newerVal === undefined || String(newerVal).trim() === '';
        if (c === 11) {
          var pNew = parsePassivoNum_(newerVal);
          var pOld = parsePassivoNum_(olderVal);
          mergedRow[c] = pOld > pNew ? olderVal : (newerEmpty ? olderVal : newerVal);
        } else if (c === 5 && !newerEmpty && String(newerVal).trim().length <= 2 && String(olderVal || '').trim().length > 2) {
          mergedRow[c] = olderVal;
        } else {
          mergedRow[c] = newerEmpty ? olderVal : newerVal;
        }
      }
      deduped[existingIdx] = mergedRow;
      if (baseKey && baseKey.length >= 4) idxByBase[baseKey] = existingIdx;
      if (cnpjKey) idxByCnpj[cnpjKey] = existingIdx;
    } else {
      var newIdx = deduped.length;
      deduped.push(row);
      if (baseKey && baseKey.length >= 4) idxByBase[baseKey] = newIdx;
      if (cnpjKey) idxByCnpj[cnpjKey] = newIdx;
    }
  }

  return deduped;
}

function isAuthorizedSyncRequest_(params) {
  const configuredToken = PropertiesService.getScriptProperties().getProperty('SYNC_API_TOKEN');
  const providedToken = String((params && params.token) || '').trim();
  if (!configuredToken || configuredToken.length < 16 || !providedToken) {
    return false;
  }
  return configuredToken === providedToken;
}

/**
 * Rate-limit para `?nocache=1` / `?force=1` em chamadas públicas:
 * Permite bypass imediato com token autorizado ou no máximo 1 vez a cada 60s publicamente.
 */
function resolveBypassCache_(params) {
  const requested = String((params && (params.nocache || params.force)) || '') === '1';
  if (!requested) return false;
  if (isAuthorizedSyncRequest_(params)) return true;
  try {
    const cache = CacheService.getScriptCache();
    if (cache.get(PUBLIC_REFRESH_COOLDOWN_KEY) !== null) {
      return false;
    }
    cache.put(PUBLIC_REFRESH_COOLDOWN_KEY, '1', PUBLIC_REFRESH_COOLDOWN_SECONDS);
    return true;
  } catch (e) {
    return false;
  }
}

function doGet(e) {
  try {
    const params = (e && e.parameter) ? e.parameter : {};
    const action = String(params.action || 'sheet').toLowerCase();

    if (action === 'health') {
      return createJsonResponse({
        status: 'ok',
        version: APP_RELEASE_VERSION,
        router: true,
        timestamp: new Date().toISOString()
      });
    }

    const bypassCache = resolveBypassCache_(params);

    if (action === 'rss' && params.url) {
      return handleRssProxyRequest(params.url, bypassCache);
    }

    if (action === 'djen') {
      return handleDjenProxyRequest(params, bypassCache);
    }

    if (action === 'ons_ccee' || action === 'pld') {
      return handleOnsCceeProxyRequest(params, bypassCache);
    }

    if (action === 'sync') {
      if (!isAuthorizedSyncRequest_(params)) {
        return createJsonResponse({
          status: 'error',
          code: 403,
          message: 'Ação restrita ao gatilho interno agendado ou token autorizado.'
        });
      }
      const result = sincronizarRadarAutomatico();
      return createJsonResponse({ status: 'success', version: APP_RELEASE_VERSION, syncResult: result });
    }

    return handleMasterSheetRead(bypassCache);
  } catch (err) {
    return createJsonResponse({
      status: 'error',
      message: String(err && err.message ? err.message : err)
    });
  }
}

function doPost(e) {
  try {
    const params = (e && e.parameter) ? e.parameter : {};
    if (!isAuthorizedSyncRequest_(params)) {
      return createJsonResponse({ status: 'error', code: 403, message: 'Não autorizado.' });
    }
    const result = sincronizarRadarAutomatico();
    return createJsonResponse({ status: 'success', version: APP_RELEASE_VERSION, syncResult: result });
  } catch (err) {
    return createJsonResponse({
      status: 'error',
      message: String(err && err.message ? err.message : err)
    });
  }
}

/**
 * 1. Leitura Unificada das 6 Abas da Planilha Mestre (Release v5.0):
 *    - Aba "Radar de Originação (Leads)"       -> campo `data`
 *    - Aba "Noticias"                          -> campo `noticias`
 *    - Aba "Tracking PREs YTD (2026)"          -> campo `tracking_pres` / `pres`
 *    - Aba "Radar Preditivo (Tier 0)"          -> campo `tier0`
 *    - Aba "Pipeline Ativo (Mandatos)"         -> campo `mandatos`
 *    - Aba "Diretrizes & Fontes Monitoradas"   -> campo `diretrizes`
 */
function putChunkedCache(cache, baseKey, str, ttl) {
  try {
    if (!str) return;
    const chunks = [];
    var pos = 0;
    const len = str.length;
    while (pos < len) {
      var step = Math.min(CHUNK_CHAR_SIZE, len - pos);
      var end = pos + step;
      // Avoid splitting surrogate pairs
      if (end < len) {
        var c = str.charCodeAt(end - 1);
        if (c >= 0xd800 && c <= 0xdbff) end--;
      }
      var slice = str.substring(pos, end);
      while (utf8ByteLength_(slice) > CHUNK_MAX_UTF8_BYTES && slice.length > 1024) {
        end = pos + Math.floor(slice.length * 0.85);
        if (end < len) {
          var cs = str.charCodeAt(end - 1);
          if (cs >= 0xd800 && cs <= 0xdbff) end--;
        }
        slice = str.substring(pos, end);
      }
      chunks.push(slice);
      pos = end;
      if (chunks.length > MAX_CACHE_CHUNKS) return;
    }
    if (chunks.length < 1 || chunks.length > MAX_CACHE_CHUNKS) return;
    const pairs = {};
    pairs[baseKey + '_meta'] = String(chunks.length);
    for (var i = 0; i < chunks.length; i++) {
      pairs[baseKey + '_' + i] = chunks[i];
    }
    cache.putAll(pairs, ttl);
  } catch (e) {}
}

function getChunkedCache(cache, baseKey) {
  try {
    const meta = cache.get(baseKey + '_meta');
    if (!meta) return cache.get(baseKey);
    const count = parseInt(meta, 10);
    if (!count || count < 1 || count > MAX_CACHE_CHUNKS) return null;
    const keys = [];
    for (var i = 0; i < count; i++) {
      keys.push(baseKey + '_' + i);
    }
    const map = cache.getAll(keys);
    let out = '';
    for (var j = 0; j < count; j++) {
      const part = map[baseKey + '_' + j];
      if (typeof part !== 'string') return null;
      out += part;
    }
    return out;
  } catch (e) {
    return null;
  }
}

function clearChunkedCache(cache, baseKey) {
  try {
    const keys = [baseKey, baseKey + '_meta'];
    for (var i = 0; i < MAX_CACHE_CHUNKS; i++) keys.push(baseKey + '_' + i);
    cache.removeAll(keys);
  } catch (e) {}
}

function handleMasterSheetRead(bypassCache) {
  const cache = CacheService.getScriptCache();
  const cacheKey = MASTER_CACHE_KEY;
  if (!bypassCache) {
    const cachedPayload = getChunkedCache(cache, cacheKey);
    if (cachedPayload) {
      return ContentService.createTextOutput(cachedPayload).setMimeType(ContentService.MimeType.JSON);
    }
  }

  const ss = openMasterSpreadsheet_();

  // 1. Radar de Originação (Leads) — filtrado e deduplicado por CNPJ válido ou nome-base
  const leadsSheet = ss.getSheetByName('Radar de Originação (Leads)') || ss.getSheets()[0];
  const rows = leadsSheet ? leadsSheet.getDataRange().getValues() : [];
  const filteredLeads = rows.length > 1 ? rows.slice(1).filter(function(r) {
    if (!r) return false;
    var emp = String(r[2] || '').trim();
    return emp !== '' && !isExcludedEntity_(emp);
  }) : [];
  const dataRows = deduplicateLeadRows_(filteredLeads);

  // 2. Noticias
  const noticiasSheet = ss.getSheetByName('Noticias');
  let noticiasRows = [];
  if (noticiasSheet) {
    const nRows = noticiasSheet.getDataRange().getValues();
    noticiasRows = nRows.length > 1 ? nRows.slice(1).filter(function(r) {
      if (!r) return false;
      var t1 = String(r[6] || '').trim();
      var t2 = String(r[2] || '').trim();
      if (!t1 && !t2) return false;
      return !isExcludedEntity_(t1 + ' ' + t2 + ' ' + String(r[3] || ''));
    }) : [];
  }

  // 3. Tracking PREs YTD (2026)
  const presSheet = ss.getSheetByName('Tracking PREs YTD (2026)');
  let trackingPresRows = [];
  if (presSheet) {
    const pRows = presSheet.getDataRange().getValues();
    trackingPresRows = pRows.length > 1 ? pRows.slice(1).filter(function(r) {
      if (!r) return false;
      var emp = String(r[1] || '').trim();
      return emp !== '' && !isExcludedEntity_(emp);
    }) : [];
  }

  // 4. Radar Preditivo (Tier 0)
  const tier0Sheet = ss.getSheetByName('Radar Preditivo (Tier 0)');
  let tier0Rows = [];
  if (tier0Sheet) {
    const tRows = tier0Sheet.getDataRange().getValues();
    tier0Rows = tRows.length > 1 ? tRows.slice(1).filter(function(r) {
      if (!r) return false;
      var emp = String(r[0] || '').trim();
      return emp !== '' && !isExcludedEntity_(emp);
    }) : [];
  }

  // 5. Pipeline Ativo (Mandatos)
  const mandatosSheet = ss.getSheetByName('Pipeline Ativo (Mandatos)');
  let mandatosRows = [];
  if (mandatosSheet) {
    const mRows = mandatosSheet.getDataRange().getValues();
    mandatosRows = mRows.length > 1 ? mRows.slice(1).filter(function(r) {
      if (!r) return false;
      var emp = String(r[0] || '').trim();
      return emp !== '' && !isExcludedEntity_(emp);
    }) : [];
  }

  // 6. Diretrizes & Fontes Monitoradas
  const diretrizesSheet = ss.getSheetByName('Diretrizes & Fontes Monitoradas');
  let diretrizesRows = [];
  if (diretrizesSheet) {
    const dRows = diretrizesSheet.getDataRange().getValues();
    diretrizesRows = dRows.length > 1 ? dRows.slice(1).filter(function(r) {
      if (!r) return false;
      var k = String(r[0] || '').trim();
      var v = String(r[1] || '').trim();
      return (k !== '' || v !== '') && !isExcludedEntity_(k + ' ' + v);
    }) : [];
  }

  const payloadObj = {
    status: 'success',
    version: APP_RELEASE_VERSION,
    updated_at: new Date().toISOString(),
    count: dataRows.length,
    data: dataRows,
    noticias_count: noticiasRows.length,
    noticias: noticiasRows,
    tracking_pres_count: trackingPresRows.length,
    tracking_pres: trackingPresRows,
    pres: trackingPresRows,
    tier0_count: tier0Rows.length,
    tier0: tier0Rows,
    mandatos_count: mandatosRows.length,
    mandatos: mandatosRows,
    diretrizes_count: diretrizesRows.length,
    diretrizes: diretrizesRows
  };

  const jsonStr = JSON.stringify(payloadObj);
  putChunkedCache(cache, cacheKey, jsonStr, CACHE_TTL_SECONDS);

  return ContentService.createTextOutput(jsonStr).setMimeType(ContentService.MimeType.JSON);
}

/**
 * 1B. Proxy com Cache para Telemetria ONS & PLD Horário Oficial da CCEE
 */
function handleOnsCceeProxyRequest(params, bypassCache) {
  const submarket = String((params && (params.submercado || params.submarket)) || 'SIN').replace(/[^A-Za-z0-9_-]/g, '').toUpperCase() || 'SIN';
  const dateStr = String((params && (params.data || params.date)) || Utilities.formatDate(new Date(), 'America/Sao_Paulo', 'yyyy-MM-dd')).replace(/[^0-9-]/g, '').slice(0, 10);
  const yearNum = Number(dateStr.slice(0, 4)) || new Date().getFullYear();
  const mesRef = dateStr.slice(0, 4) + dateStr.slice(5, 7);
  const diaNum = String(parseInt(dateStr.slice(8, 10), 10) || '');
  const cache = CacheService.getScriptCache();
  const cacheKey = 'vk_ons_ccee_v50_' + submarket + '_' + dateStr;
  if (!bypassCache) {
    const cached = getChunkedCache(cache, cacheKey);
    if (cached) {
      return ContentService.createTextOutput(cached).setMimeType(ContentService.MimeType.JSON);
    }
  }

  const uaHeaders = {
    'Accept': 'application/json, text/csv, */*',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
  };

  let onsData = null;
  let onsSummary = {};
  try {
    const onsRes = UrlFetchApp.fetch('https://integra.ons.org.br/api/energiaagora/GetBalancoEnergetico/null', {
      method: 'get',
      muteHttpExceptions: true,
      headers: uaHeaders
    });
    if (onsRes.getResponseCode() >= 200 && onsRes.getResponseCode() < 300) {
      onsData = JSON.parse(onsRes.getContentText('UTF-8'));
      const mapKeys = { 'SE': 'sudesteECentroOeste', 'S': 'sul', 'NE': 'nordeste', 'N': 'norte' };
      let sinLoad = 0, sinRen = 0, sinTot = 0;
      Object.keys(mapKeys).forEach(function(k) {
        const node = onsData && onsData[mapKeys[k]];
        if (!node) return;
        const g = node.geracao || {};
        const carga = Number(node.cargaVerificada || 0);
        const h = Number(g.hidraulica || 0) + Number(g.itaipu50HzBrasil || 0) + Number(g.itaipu60Hz || 0);
        const e = Number(g.eolica || 0);
        const s = Number(g.solar || 0) + Number(g.mmgd || 0);
        const t = Number(g.termica || 0) + Number(g.nuclear || 0);
        const ren = h + e + s;
        const tot = ren + t;
        sinLoad += carga;
        sinRen += ren;
        sinTot += tot;
        onsSummary[k] = {
          carga_mw_num: Math.round(carga),
          renovavel_pct_num: tot > 0 ? Math.round((ren / tot) * 1000) / 10 : null
        };
      });
      if (sinLoad > 0) {
        onsSummary.SIN = {
          carga_mw_num: Math.round(sinLoad),
          renovavel_pct_num: sinTot > 0 ? Math.round((sinRen / sinTot) * 1000) / 10 : null
        };
      }
    }
  } catch (e) {}

  let earSummary = {};
  try {
    const earUrl = 'https://ons-aws-prod-opendata.s3.amazonaws.com/dataset/ear_subsistema_di/EAR_DIARIO_SUBSISTEMA_' + yearNum + '.csv';
    const earRes = UrlFetchApp.fetch(earUrl, { method: 'get', muteHttpExceptions: true, headers: uaHeaders });
    if (earRes.getResponseCode() >= 200 && earRes.getResponseCode() < 300) {
      const earLines = earRes.getContentText('UTF-8').split(/\r?\n/);
      let targetEarDay = '';
      const byDay = {};
      for (let i = 1; i < earLines.length; i++) {
        const p = earLines[i].split(';');
        if (p.length < 6) continue;
        const sub = String(p[0] || '').trim().toUpperCase();
        const d = String(p[2] || '').trim().slice(0, 10);
        if (!d || d > dateStr) continue;
        if (d > targetEarDay) targetEarDay = d;
        if (!byDay[d]) byDay[d] = { verSum: 0, maxSum: 0, pct: {} };
        const eMax = parseFloat(p[3] || '0') || 0;
        const eVer = parseFloat(p[4] || '0') || 0;
        const ePct = parseFloat(p[5] || '0') || 0;
        byDay[d].pct[sub] = Math.round(ePct * 10) / 10;
        if (eMax > 0) {
          byDay[d].verSum += eVer;
          byDay[d].maxSum += eMax;
        }
      }
      if (targetEarDay && byDay[targetEarDay]) {
        earSummary = byDay[targetEarDay].pct;
        if (byDay[targetEarDay].maxSum > 0) {
          earSummary.SIN = Math.round((byDay[targetEarDay].verSum / byDay[targetEarDay].maxSum) * 1000) / 10;
        }
        earSummary.reference_date = targetEarDay;
      }
    }
  } catch (e) {}

  let cceePld = { connected: false, source: 'none', records: [], pldBySubmarket: {} };
  try {
    const pkgRes = UrlFetchApp.fetch('https://dadosabertos.ccee.org.br/api/3/action/package_show?id=pld_horario', {
      method: 'get',
      muteHttpExceptions: true,
      headers: uaHeaders
    });
    if (pkgRes.getResponseCode() >= 200 && pkgRes.getResponseCode() < 300) {
      const pkgJson = JSON.parse(pkgRes.getContentText('UTF-8'));
      const resources = (pkgJson && pkgJson.result && pkgJson.result.resources) ? pkgJson.result.resources : [];
      let resId = '';
      for (let i = 0; i < resources.length; i++) {
        const nm = String((resources[i].name || '') + ' ' + (resources[i].description || '')).toLowerCase();
        if (nm.indexOf(String(yearNum)) !== -1 && resources[i].datastore_active) {
          resId = resources[i].id;
          break;
        }
      }
      if (resId) {
        const filtersObj = { MES_REFERENCIA: mesRef };
        const dsUrl = 'https://dadosabertos.ccee.org.br/api/3/action/datastore_search?resource_id=' +
          encodeURIComponent(resId) + '&filters=' + encodeURIComponent(JSON.stringify(filtersObj)) + '&limit=5000';
        const dsRes = UrlFetchApp.fetch(dsUrl, { method: 'get', muteHttpExceptions: true, headers: uaHeaders });
        if (dsRes.getResponseCode() >= 200 && dsRes.getResponseCode() < 300) {
          const dsJson = JSON.parse(dsRes.getContentText('UTF-8'));
          const allRecs = (dsJson && dsJson.result && dsJson.result.records) ? dsJson.result.records : [];
          let recs = allRecs;
          let matchedCkanDay = dateStr;
          if (diaNum && allRecs.length > 0) {
            const exactRecs = allRecs.filter(function(r) {
              const dRaw = String(r.DIA || '').trim();
              if (/^\d{4}-\d{2}-\d{2}/.test(dRaw)) return dRaw.slice(0, 10) === dateStr;
              return parseInt(dRaw, 10) === diaNum;
            });
            if (exactRecs.length > 0) {
              recs = exactRecs;
            } else {
              let maxD = 0;
              allRecs.forEach(function(r) {
                const dInt = parseInt(String(r.DIA || '').trim().slice(-2), 10);
                if (!isNaN(dInt) && dInt <= diaNum && dInt > maxD) maxD = dInt;
              });
              if (maxD > 0) {
                matchedCkanDay = mesRef.slice(0, 4) + '-' + mesRef.slice(4, 6) + '-' + (maxD < 10 ? '0' + maxD : String(maxD));
                recs = allRecs.filter(function(r) { return parseInt(String(r.DIA || '').trim().slice(-2), 10) === maxD; });
              }
            }
          }
          if (recs.length > 0) {
            const subAcc = { SE: [], S: [], NE: [], N: [] };
            recs.forEach(function(r) {
              const sm = String(r.SUBMERCADO || '').toUpperCase();
              const k = sm.indexOf('SUDESTE') !== -1 ? 'SE' : (sm === 'SUL' ? 'S' : (sm.indexOf('NORDESTE') !== -1 ? 'NE' : (sm === 'NORTE' ? 'N' : '')));
              const v = parseFloat(String(r.PLD_HORA || '').replace(',', '.'));
              if (k && !isNaN(v) && v > 0) subAcc[k].push(v);
            });
            const pldMap = {};
            let weightedSum = 0, weightTot = 0, allSum = 0, allCnt = 0;
            Object.keys(subAcc).forEach(function(k) {
              if (subAcc[k].length > 0) {
                const avg = subAcc[k].reduce(function(a, b) { return a + b; }, 0) / subAcc[k].length;
                pldMap[k] = Math.round(avg * 100) / 100;
                const w = (onsSummary[k] && onsSummary[k].carga_mw_num > 0) ? onsSummary[k].carga_mw_num : 0;
                weightedSum += avg * w;
                weightTot += w;
                allSum += avg;
                allCnt += 1;
              }
            });
            if (allCnt > 0) {
              pldMap.SIN = Math.round(((weightTot > 0 ? weightedSum / weightTot : allSum / allCnt)) * 100) / 100;
            }
            cceePld = { connected: true, source: 'ccee_ckan', reference_date: matchedCkanDay, records: recs.slice(0, 120), pldBySubmarket: pldMap };
          }
        }
      }
    }
  } catch (e) {}

  if (!cceePld.connected) {
    try {
      const cmoUrl = 'https://ons-aws-prod-opendata.s3.amazonaws.com/dataset/cmo_tm/CMO_SEMIHORARIO_' + yearNum + '.csv';
      const cmoRes = UrlFetchApp.fetch(cmoUrl, {
        method: 'get',
        muteHttpExceptions: true,
        headers: { 'Range': 'bytes=-750000', 'User-Agent': uaHeaders['User-Agent'] }
      });
      if (cmoRes.getResponseCode() >= 200 && cmoRes.getResponseCode() < 300) {
        const lines = cmoRes.getContentText('UTF-8').split(/\r?\n/);
        const subHrAcc = { SE: {}, S: {}, NE: {}, N: {} };
        let matchedDay = '';
        for (let i = lines.length - 1; i >= 1; i--) {
          const p = lines[i].split(';');
          if (p.length < 4) continue;
          const dtRaw = String(p[2] || '').trim();
          const d = dtRaw.slice(0, 10);
          if (!d || d.length < 10 || d > dateStr) continue;
          if (!matchedDay) matchedDay = d;
          if (d !== matchedDay) break;
          const k = String(p[0] || '').trim().toUpperCase();
          const hr = parseInt(dtRaw.slice(11, 13), 10) || 0;
          const v = Math.max(0, parseFloat(p[3] || '0') || 0);
          if (subHrAcc[k]) {
            if (!subHrAcc[k][hr]) subHrAcc[k][hr] = [];
            subHrAcc[k][hr].push(v);
          }
        }
        const pldMap = {};
        const synthRecs = [];
        let weightedSum = 0, weightTot = 0, allSum = 0, allCnt = 0;
        Object.keys(subHrAcc).forEach(function(k) {
          const hrs = Object.keys(subHrAcc[k]);
          if (hrs.length > 0) {
            let arr = [];
            for (let h = 0; h < 24; h++) {
              const vals = subHrAcc[k][h];
              const rawH = (vals && vals.length > 0) ? (vals.reduce(function(a, b) { return a + b; }, 0) / vals.length) : 57.31;
              arr.push(Math.min(1611.04, Math.max(57.31, rawH)));
            }
            for (let it = 0; it < 8; it++) {
              const avgD = arr.reduce(function(a, b) { return a + b; }, 0) / 24.0;
              if (avgD <= 785.27 + 1e-6) break;
              const sc = 785.27 / avgD;
              arr = arr.map(function(x) { return Math.max(57.31, x * sc); });
            }
            const avg = arr.reduce(function(a, b) { return a + b; }, 0) / 24.0;
            pldMap[k] = Math.round(avg * 100) / 100;
            synthRecs.push({ SUBMERCADO: k, PLD_HORA: pldMap[k], DATA: matchedDay });
            const w = (onsSummary[k] && onsSummary[k].carga_mw_num > 0) ? onsSummary[k].carga_mw_num : 0;
            weightedSum += avg * w;
            weightTot += w;
            allSum += avg;
            allCnt += 1;
          }
        });
        if (allCnt > 0) {
          pldMap.SIN = Math.round(((weightTot > 0 ? weightedSum / weightTot : allSum / allCnt)) * 100) / 100;
          cceePld = { connected: true, source: 'ons_dessem_s3', reference_date: matchedDay, records: synthRecs, pldBySubmarket: pldMap };
        }
      }
    } catch (e) {}
  }

  const payloadStr = JSON.stringify({
    status: 'ok',
    version: APP_RELEASE_VERSION,
    submarket: submarket,
    date: dateStr,
    ons: onsData,
    onsSummary: onsSummary,
    ear: earSummary,
    ccee: cceePld,
    records: cceePld.records || [],
    updated_at: new Date().toISOString()
  });
  putChunkedCache(cache, cacheKey, payloadStr, CACHE_TTL_SECONDS);
  return ContentService.createTextOutput(payloadStr).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Valida URL HTTPS contra allowlist estrita de hosts (anti-SSRF).
 */
function parseAllowedHttpsUrl_(rawUrl) {
  const cleanUrl = String(rawUrl || '').trim();
  if (!cleanUrl || cleanUrl.indexOf('@') !== -1 || /[\s\r\n]/.test(cleanUrl)) {
    return { ok: false, code: 400, message: 'Apenas URLs HTTPS válidas são permitidas.' };
  }
  const hostMatch = cleanUrl.match(/^https:\/\/([a-zA-Z0-9.-]+)(?::443)?(\/|\?|$)/);
  if (!hostMatch) {
    return { ok: false, code: 400, message: 'Apenas URLs HTTPS válidas são permitidas.' };
  }
  const hostname = hostMatch[1].toLowerCase();
  if (!ALLOWED_PROXY_HOSTS[hostname]) {
    return { ok: false, code: 403, message: 'Domínio não autorizado na allowlist do proxy.' };
  }
  return { ok: true, url: cleanUrl, hostname: hostname };
}

function resolveHttpsRedirectUrl_(currentUrl, locationHeader) {
  const loc = String(locationHeader || '').trim();
  if (!loc) return '';
  if (/^https:\/\//i.test(loc)) {
    return loc;
  }
  if (loc.charAt(0) === '/') {
    const originMatch = String(currentUrl || '').match(/^(https:\/\/[a-zA-Z0-9.-]+(?::443)?)/);
    return originMatch ? (originMatch[1] + loc) : '';
  }
  return '';
}

/**
 * 2. Proxy de RSS/XML com Allowlist Estrita de Domínios HTTPS (Anti-SSRF),
 *    suporte seguro a até 2 redirecionamentos verificados e CacheService particionado.
 */
function handleRssProxyRequest(targetUrl, bypassCache) {
  const initialCheck = parseAllowedHttpsUrl_(targetUrl);
  if (!initialCheck.ok) {
    return createJsonResponse({ status: 'error', code: initialCheck.code, message: initialCheck.message });
  }

  const cleanUrl = initialCheck.url;
  const cache = CacheService.getScriptCache();
  const cacheKey = 'vk_rss_' + sha256Hex_(cleanUrl).slice(0, 40);

  if (!bypassCache) {
    const cachedXml = getChunkedCache(cache, cacheKey);
    if (cachedXml) {
      return createJsonResponse({
        status: 'ok',
        cached: true,
        url: cleanUrl,
        contents: cachedXml
      });
    }
  }

  var currentUrl = cleanUrl;
  var response = null;
  var code = 0;

  for (var hop = 0; hop <= 2; hop++) {
    response = UrlFetchApp.fetch(currentUrl, {
      method: 'get',
      muteHttpExceptions: true,
      followRedirects: false,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; ValknutSpecialSituationsBot/4.7)',
        'Accept': 'application/rss+xml, application/xml, text/xml, application/atom+xml, */*'
      }
    });

    code = response.getResponseCode();
    if ((code === 301 || code === 302 || code === 303 || code === 307 || code === 308) && hop < 2) {
      const respHeaders = response.getHeaders() || {};
      const locationHdr = respHeaders['Location'] || respHeaders['location'] || '';
      const redirectedUrl = resolveHttpsRedirectUrl_(currentUrl, locationHdr);
      const redirectCheck = parseAllowedHttpsUrl_(redirectedUrl);
      if (!redirectCheck.ok) {
        return createJsonResponse({
          status: 'error',
          code: redirectCheck.code,
          http_code: code,
          url: cleanUrl,
          message: 'Redirecionamento bloqueado fora da allowlist HTTPS.'
        });
      }
      currentUrl = redirectCheck.url;
      continue;
    }
    break;
  }

  const xmlText = response ? response.getContentText('UTF-8') : '';

  if (code >= 200 && code < 300 && xmlText && xmlText.length > 50) {
    putChunkedCache(cache, cacheKey, xmlText, CACHE_TTL_SECONDS);
    return createJsonResponse({
      status: 'ok',
      cached: false,
      http_code: code,
      url: currentUrl,
      contents: xmlText
    });
  }

  return createJsonResponse({
    status: 'error',
    http_code: code,
    url: cleanUrl,
    message: 'Falha ao obter feed XML na origem.'
  });
}

/**
 * 3. Proxy Blindado para API Pública do DJEN / Comunica PJe do CNJ (com Cache de 5 min e Fallback JSON)
 */
function handleDjenProxyRequest(params, bypassCache) {
  const dataHoje = Utilities.formatDate(new Date(), 'America/Sao_Paulo', 'yyyy-MM-dd');
  const dataInicio = String((params && params.dataInicio) || dataHoje).replace(/[^0-9-]/g, '').slice(0, 10) || dataHoje;
  const siglaTribunal = String((params && params.siglaTribunal) || 'TJSP').replace(/[^A-Za-z0-9]/g, '').slice(0, 10) || 'TJSP';
  const termo = String((params && params.termo) || 'recuperação judicial').slice(0, 80);

  const cache = CacheService.getScriptCache();
  const djenCacheKey = 'vk_djen_' + sha256Hex_(siglaTribunal + '|' + dataInicio + '|' + termo).slice(0, 40);

  if (!bypassCache) {
    const cachedJson = getChunkedCache(cache, djenCacheKey);
    if (cachedJson) {
      return ContentService.createTextOutput(cachedJson).setMimeType(ContentService.MimeType.JSON);
    }
  }

  const endpoint = 'https://comunicaapi.pje.jus.br/api/v1/comunicacao'
    + '?siglaTribunal=' + encodeURIComponent(siglaTribunal)
    + '&dataDisponibilizacaoInicio=' + encodeURIComponent(dataInicio)
    + '&dataDisponibilizacaoFim=' + encodeURIComponent(dataHoje)
    + '&texto=' + encodeURIComponent(termo)
    + '&itensPorPagina=50&pagina=1';

  try {
    const response = UrlFetchApp.fetch(endpoint, {
      method: 'get',
      muteHttpExceptions: true,
      headers: { 'Accept': 'application/json' }
    });

    const code = response.getResponseCode();
    const rawBody = response.getContentText('UTF-8');

    if (code >= 200 && code < 300 && rawBody) {
      const parsed = JSON.parse(rawBody);
      if (parsed !== null && typeof parsed === 'object') {
        putChunkedCache(cache, djenCacheKey, rawBody, CACHE_TTL_SECONDS);
        return ContentService.createTextOutput(rawBody).setMimeType(ContentService.MimeType.JSON);
      }
    }

    return createJsonResponse({
      status: 'error',
      http_code: code || 502,
      items: []
    });
  } catch (err) {
    return createJsonResponse({
      status: 'error',
      http_code: 502,
      items: []
    });
  }
}

/**
 * Decodifica links news.google.com/rss/articles/... para a URL direta do portal original
 */
function resolveGoogleNewsUrl_(gurl) {
  var u = String(gurl || '').trim();
  if (!u || !/^https?:\/\/news\.google\.com\//i.test(u)) return u;
  var m = u.match(/\/articles\/([^?/#]+)/);
  if (!m) return u;
  var token = m[1];
  try {
    var ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';
    var resp1 = UrlFetchApp.fetch('https://news.google.com/rss/articles/' + token, {
      muteHttpExceptions: true,
      followRedirects: true,
      headers: { 'User-Agent': ua }
    });
    if (resp1.getResponseCode() < 200 || resp1.getResponseCode() >= 300) return u;
    var body = resp1.getContentText('UTF-8') || '';
    var sgM = body.match(/data-n-a-sg="([^"]+)"/);
    var tsM = body.match(/data-n-a-ts="([^"]+)"/);
    if (!sgM || !tsM) return u;

    var innerArr = [
      'garturlreq',
      [
        ['X', 'X', ['X', 'X'], null, null, 1, 1, 'US:en', null, 1, null, null, null, null, null, 0, 1],
        'X', 'X', 1, [1, 1, 1], 1, 1, null, 0, 0, null, 0
      ],
      token,
      parseInt(tsM[1], 10),
      sgM[1]
    ];
    var fReq = JSON.stringify([[['Fbv4je', JSON.stringify(innerArr), null, 'generic']]]);
    var resp2 = UrlFetchApp.fetch('https://news.google.com/_/DotsSplashUi/data/batchexecute', {
      method: 'post',
      muteHttpExceptions: true,
      contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
      payload: 'f.req=' + encodeURIComponent(fReq),
      headers: { 'User-Agent': ua }
    });
    if (resp2.getResponseCode() >= 200 && resp2.getResponseCode() < 300) {
      var lines = (resp2.getContentText('UTF-8') || '').split(/\r?\n/);
      for (var i = 0; i < lines.length; i++) {
        if (lines[i].indexOf('garturlres') === -1) continue;
        try {
          var outer = JSON.parse(lines[i]);
          var inner = JSON.parse(outer[0][2]);
          if (Array.isArray(inner) && inner.length > 1) {
            var cand = String(inner[1] || '').trim();
            if (/^https?:\/\//i.test(cand) && !/^https?:\/\/news\.google\.com\//i.test(cand) && cand.indexOf('consent.google.com') === -1) {
              return cand;
            }
          }
        } catch (e2) {}
      }
    }
  } catch (e) {}
  return u;
}

/**
 * 4. Rotina Autônoma 24/7 de Varredura RSS e Gravação Direta na Aba `Noticias`
 */
function sincronizarRadarAutomatico() {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) {
    return {
      timestamp: new Date().toISOString(),
      skipped: true,
      reason: 'LockService ocupado por outra execução concorrente.'
    };
  }

  try {
    const feedsConfig = [
      {
        url: 'https://news.google.com/rss/search?q=%28waiver+OR+covenants+OR+%22assembleia+de+debenturistas%22+OR+debenturistas+OR+standstill%29+%28reestrutura%C3%A7%C3%A3o+OR+inadimpl%C3%AAncia+OR+%22vencimento+antecipado%22+OR+d%C3%ADvida%29+-portugal+-lisboa+when%3A7d&hl=pt-BR&gl=BR&ceid=BR:pt-419',
        tag: 'WAIVER / AGD',
        catAba: 'Waivers, AGDs & Downgrades Rating',
        escopo: 'CVM & Fatos Relevantes'
      },
      {
        url: 'https://news.google.com/rss/search?q=%28%22recupera%C3%A7%C3%A3o+extrajudicial%22+OR+%22vencimento+antecipado%22+OR+%28%28V%C3%B3rtx+OR+Pent%C3%A1gono+OR+%22Oliveira+Trust%22%29+deb%C3%AAntures%29%29+%28d%C3%ADvida+OR+credores+OR+inadimpl%C3%AAncia%29+-portugal+when%3A30d&hl=pt-BR&gl=BR&ceid=BR:pt-419',
        tag: 'RE / DEBÊNTURES',
        catAba: 'Waivers, AGDs & Downgrades Rating',
        escopo: 'CVM & Fatos Relevantes'
      },
      {
        url: 'https://news.google.com/rss/search?q=%28%22rebaixa+rating%22+OR+%22rebaixamento+de+rating%22+OR+%22rebaixa+nota%22%29+%28Fitch+OR+Moody%27s+OR+%22S%26P%22%29+%28deb%C3%AAntures+OR+CRA+OR+CRI+OR+emissora%29+-portugal+-soberano+when%3A30d&hl=pt-BR&gl=BR&ceid=BR:pt-419',
        tag: 'DOWNGRADE RATING',
        catAba: 'Waivers, AGDs & Downgrades Rating',
        escopo: 'CVM & Fatos Relevantes'
      },
      {
        url: 'https://news.google.com/rss/search?q=%28%22recupera%C3%A7%C3%A3o+judicial%22+OR+%22tutela+cautelar%22+OR+%22pedido+de+fal%C3%AAncia%22%29+%28d%C3%ADvida+OR+credores%29+milh%C3%B5es+-portugal+when%3A14d&hl=pt-BR&gl=BR&ceid=BR:pt-419',
        tag: 'PEDIDO DE RJ',
        catAba: 'Pedidos de RJ & Cautelares 20-B',
        escopo: 'Mercado & Macro'
      },
      {
        url: 'https://news.google.com/rss/search?q=%28%22unidade+produtiva+isolada%22+OR+%22stalking+horse%22+OR+%22leil%C3%A3o+de+UPI%22+OR+%22carve-out%22%29+%28d%C3%ADvida+OR+reestrutura%C3%A7%C3%A3o+OR+ativos%29+-portugal+when%3A30d&hl=pt-BR&gl=BR&ceid=BR:pt-419',
        tag: 'LEILÃO DE UPI',
        catAba: 'Leilões de UPI, Ativos & Falências',
        escopo: 'Mercado & Macro'
      },
      {
        url: 'https://news.google.com/rss/search?q=%28%22caducidade+ANEEL%22+OR+%28curtailment+d%C3%ADvida%29+OR+%28%22fian%C3%A7a+banc%C3%A1ria%22+energia%29+OR+%22desligamento+CCEE%22%29+when%3A30d&hl=pt-BR&gl=BR&ceid=BR:pt-419',
        tag: 'ENERGIA / CCEE',
        catAba: 'Waivers, AGDs & Downgrades Rating',
        escopo: 'CVM & Fatos Relevantes'
      },
      {
        url: 'https://news.google.com/rss/search?q=%28%22legal+claims%22+OR+%22venda+de+ativos%22+OR+%22desinvestimento%22+OR+%22financiamento+DIP%22%29+%28d%C3%ADvida+OR+reestrutura%C3%A7%C3%A3o%29+milh%C3%B5es+when%3A30d&hl=pt-BR&gl=BR&ceid=BR:pt-419',
        tag: 'ATIVOS / DIP',
        catAba: 'Leilões de UPI, Ativos & Falências',
        escopo: 'Mercado & Macro'
      }
    ];

    const ss = openMasterSpreadsheet_();
    let noticiasSheet = ss.getSheetByName('Noticias');
    if (!noticiasSheet) {
      noticiasSheet = ss.insertSheet('Noticias');
      noticiasSheet.appendRow(['Data e Hora', 'Fonte', 'Tag Curta', 'Categoria da Aba', 'Escopo', 'Macro-Setor', 'Título Analítico', 'Resumo Técnico', 'URL Original']);
    }

    const existingValues = noticiasSheet.getDataRange().getValues();
    const seenKeys = {};
    for (let i = 1; i < existingValues.length; i++) {
      const c0 = String(existingValues[i][0] || '').trim();
      const c6 = String(existingValues[i][6] || '').trim();
      const isAlt = /^\d+(\.0)?$/.test(c0) && /^https?:\/\//i.test(c6);
      const rawT = decodeHtmlEntities_(isAlt ? String(existingValues[i][2] || '') : c6);
      const t = rawT.replace(/^'+/, '').toLowerCase().trim().slice(0, 58);
      if (t) seenKeys[t] = true;
    }

    let aquecidos = 0;
    let gravadas = 0;
    let djenCapturados = 0;
    const novasLinhas = [];
    const cache = CacheService.getScriptCache();

    feedsConfig.forEach(function(fc) {
      try {
        const resp = UrlFetchApp.fetch(fc.url, { muteHttpExceptions: true, followRedirects: true });
        if (resp.getResponseCode() >= 200 && resp.getResponseCode() < 300) {
          aquecidos++;
          const xmlText = resp.getContentText('UTF-8');
          const rssCacheKey = 'vk_rss_' + sha256Hex_(fc.url).slice(0, 40);
          putChunkedCache(cache, rssCacheKey, xmlText, CACHE_TTL_SECONDS);

          const itemMatches = xmlText.match(/<item>[\s\S]*?<\/item>/gi) || [];
          itemMatches.slice(0, 8).forEach(function(itemXml) {
            const titleMatch = itemXml.match(/<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/i);
            const linkMatch = itemXml.match(/<link>([\s\S]*?)<\/link>/i);
            const pubDateMatch = itemXml.match(/<pubDate>([\s\S]*?)<\/pubDate>/i);
            const sourceMatch = itemXml.match(/<source[^>]*>([\s\S]*?)<\/source>/i);
            const descMatch = itemXml.match(/<description>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/description>/i);

            let rawTitle = titleMatch ? decodeHtmlEntities_(titleMatch[1].replace(/<[^>]+>/g, ' ')) : '';
            const xmlSource = sourceMatch ? decodeHtmlEntities_(sourceMatch[1].replace(/<[^>]+>/g, ' ')) : '';
            let sourceName = xmlSource || 'Mercado / Agências';
            if (rawTitle.indexOf(' - ') !== -1) {
              const parts = rawTitle.split(' - ');
              const tail = decodeHtmlEntities_(parts.pop());
              if (!xmlSource && tail) sourceName = tail;
              rawTitle = decodeHtmlEntities_(parts.join(' - '));
            }
            if (!rawTitle || rawTitle.length < 18 || isExcludedEntity_(rawTitle)) return;
            const lowTitle = rawTitle.toLowerCase();
            if (/\b(portugal|lisboa|laos|macau|angola|soberano|imposto de renda|onde investir)\b/i.test(lowTitle)) return;
            if (/\b(afirma rating|reafirma rating|atribui rating inicial|aaa\(bra\))\b/i.test(lowTitle) && !/\b(rebaixa|negativ|default|inadimpl)\b/i.test(lowTitle)) return;

            const normKey = lowTitle.slice(0, 58);
            if (seenKeys[normKey]) return;

            const pubDate = pubDateMatch ? new Date(pubDateMatch[1].trim()) : new Date();
            if (isNaN(pubDate.getTime()) || pubDate.getFullYear() < 2026) return;

            const dtFmt = Utilities.formatDate(pubDate, 'America/Sao_Paulo', 'dd/MM/yyyy HH:mm');
            const rawLinkUrl = linkMatch ? linkMatch[1].trim() : '';
            const linkUrl = resolveGoogleNewsUrl_(rawLinkUrl);
            if (/^https?:\/\/[^/]+\.pt(\/|$)/i.test(linkUrl)) return;
            const rawDesc = descMatch ? decodeHtmlEntities_(descMatch[1].replace(/<[^>]+>/g, ' ')) : '';
            const resumo = (rawDesc && rawDesc.length > 35 && rawDesc.toLowerCase().indexOf(lowTitle.slice(0, 32)) === -1)
              ? rawDesc.slice(0, 235)
              : ('Monitoramento ' + fc.tag + ' • Fonte original: ' + sourceName + '.');

            seenKeys[normKey] = true;
            novasLinhas.push([
              sanitizeSheetCell_(dtFmt),
              sanitizeSheetCell_(sourceName),
              sanitizeSheetCell_(fc.tag),
              sanitizeSheetCell_(fc.catAba),
              sanitizeSheetCell_(fc.escopo),
              sanitizeSheetCell_('Mercado & Macro (RJ / Crédito)'),
              sanitizeSheetCell_(rawTitle),
              sanitizeSheetCell_(resumo),
              sanitizeSheetCell_(linkUrl)
            ]);
          });
        }
      } catch (e) {}
    });

    // Sonda oportunista DJEN / CNJ (Tutelas Cautelares Art. 20-B & PRE em TJSP/TJRJ/TJMG — não bloqueante)
    try {
      const nowDjen = new Date();
      const iniDjen = new Date(nowDjen.getTime() - 3 * 24 * 60 * 60 * 1000);
      const dtIniStr = Utilities.formatDate(iniDjen, 'America/Sao_Paulo', 'yyyy-MM-dd');
      const dtFimStr = Utilities.formatDate(nowDjen, 'America/Sao_Paulo', 'yyyy-MM-dd');
      const djenUrl = 'https://comunicaapi.pje.jus.br/api/v1/comunicacao?siglaTribunal=TJSP&texto='
        + encodeURIComponent('tutela cautelar antecedente recuperacao')
        + '&dataDisponibilizacaoInicio=' + dtIniStr
        + '&dataDisponibilizacaoFim=' + dtFimStr
        + '&itensPorPagina=5';
      const djenResp = UrlFetchApp.fetch(djenUrl, { muteHttpExceptions: true, followRedirects: true });
      if (djenResp.getResponseCode() >= 200 && djenResp.getResponseCode() < 300) {
        const djenJson = JSON.parse(djenResp.getContentText('UTF-8') || '{}');
        const djenItems = djenJson.items || [];
        djenItems.slice(0, 5).forEach(function(di) {
          const proc = String(di.numero_processo || '').trim();
          const orgao = String(di.nomeOrgao || 'TJSP').trim();
          const titulo = decodeHtmlEntities_('DJEN ' + orgao + ' — Cautelar Art. 20-B / Pré-RJ (' + proc + ')');
          if (!proc || isExcludedEntity_(titulo)) return;
          const normKey = titulo.toLowerCase().slice(0, 58);
          if (seenKeys[normKey]) return;
          seenKeys[normKey] = true;
          djenCapturados++;
          const dtFmt = Utilities.formatDate(nowDjen, 'America/Sao_Paulo', 'dd/MM/yyyy HH:mm');
          const resumo = decodeHtmlEntities_(String(di.texto || '')).slice(0, 230) || ('Publicação oficial DJEN/CNJ (' + proc + ').');
          novasLinhas.push([
            sanitizeSheetCell_(dtFmt),
            sanitizeSheetCell_('DJEN / CNJ'),
            sanitizeSheetCell_('CAUTELAR 20-B'),
            sanitizeSheetCell_('Pedidos de RJ & Cautelares 20-B'),
            sanitizeSheetCell_('Tribunais & DJEN'),
            sanitizeSheetCell_('Mercado & Macro (RJ / Crédito)'),
            sanitizeSheetCell_(titulo),
            sanitizeSheetCell_(resumo),
            sanitizeSheetCell_('https://comunica.pje.jus.br/')
          ]);
        });
      }
    } catch (e) {}

    if (novasLinhas.length > 0) {
      noticiasSheet.getRange(noticiasSheet.getLastRow() + 1, 1, novasLinhas.length, 9).setValues(novasLinhas);
      gravadas = novasLinhas.length;
      if (noticiasSheet.getLastRow() > MAX_NOTICIAS_ROWS) {
        noticiasSheet.deleteRows(2, noticiasSheet.getLastRow() - MAX_NOTICIAS_ROWS);
      }
      clearChunkedCache(cache, MASTER_CACHE_KEY);
    } else if (noticiasSheet.getLastRow() > MAX_NOTICIAS_ROWS) {
      noticiasSheet.deleteRows(2, noticiasSheet.getLastRow() - MAX_NOTICIAS_ROWS);
      clearChunkedCache(cache, MASTER_CACHE_KEY);
    }

    return {
      timestamp: new Date().toISOString(),
      version: APP_RELEASE_VERSION,
      feedsAquecidos: aquecidos,
      djenCapturados: djenCapturados,
      novasNoticiasGravadasNaPlanilha: gravadas
    };
  } finally {
    try {
      lock.releaseLock();
    } catch (e) {}
  }
}

function instalarGatilhosAutomaticos() {
  const triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(function(t) {
    if (t.getHandlerFunction() === 'sincronizarRadarAutomatico') {
      ScriptApp.deleteTrigger(t);
    }
  });

  ScriptApp.newTrigger('sincronizarRadarAutomatico')
    .timeBased()
    .everyMinutes(15)
    .create();

  Logger.log('Gatilho de 15 minutos instalado com sucesso!');
}

function createJsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
