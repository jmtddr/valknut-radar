/**
 * ============================================================================
 * VALKNUT — SPECIAL SITUATIONS // Google Apps Script Backend & Multi-Proxy Engine
 * Release v4.6 — Leitura Unificada de 4 Abas Públicas + Segurança SSRF/Sync
 * ============================================================================
 *
 * COMO ATUALIZAR A IMPLANTAÇÃO MANTENDO A MESMA URL (`APPS_SCRIPT_URL`):
 * 1. Abra a Planilha Mestre no Google Sheets > clique em "Extensões" > "Apps Script".
 *    (Se usar script avulso fora da planilha, adicione `MASTER_SHEET_ID` em
 *    Configurações do Projeto > Propriedades do Script).
 * 2. Substitua o conteúdo de `Código.gs` por este arquivo e salve (Ctrl+S).
 * 3. Clique em "Implantar" > "Gerenciar implantações" > ícone de lápis (Editar) >
 *    em Versão selecione **"Nova versão"** > clique em "Implantar".
 * 4. Opcional (varredura 24/7 + gravação automática na aba `Noticias`):
 *    execute uma vez `instalarGatilhosAutomaticos()`.
 */

const CACHE_TTL_SECONDS = 300; // 5 minutos de cache em memória no servidor Google

// Allowlist estrita de domínios HTTPS permitidos no proxy RSS/Dados Abertos (anti-SSRF)
const ALLOWED_PROXY_HOSTS = {
  'news.google.com': true,
  'dadosabertos.ccee.org.br': true,
  'dadosabertos.aneel.gov.br': true,
  'integra.ons.org.br': true,
  'www.rad.cvm.gov.br': true,
  'dados.cvm.gov.br': true,
  'comunicaapi.pje.jus.br': true
};

// Bloqueio por hash SHA-256 de tokens normalizados (sem exposição nominal no código)
const BLOCKED_TOKEN_SHA256 = {
  'd252e0c8ec8a9a143e74a72447f3abaf7a4fad0f7755a819dcc9cd293980cc78': true
};

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

function isAuthorizedSyncRequest_(params) {
  const configuredToken = PropertiesService.getScriptProperties().getProperty('SYNC_API_TOKEN');
  const providedToken = String((params && params.token) || '').trim();
  if (!configuredToken || configuredToken.length < 16 || !providedToken) {
    return false;
  }
  return configuredToken === providedToken;
}

function doGet(e) {
  try {
    const params = (e && e.parameter) ? e.parameter : {};
    const action = String(params.action || 'sheet').toLowerCase();
    const bypassCache = String(params.nocache || params.force || '') === '1';

    if (action === 'rss' && params.url) {
      return handleRssProxyRequest(params.url, bypassCache);
    }

    if (action === 'djen') {
      return handleDjenProxyRequest(params);
    }

    if (action === 'ons_ccee' || action === 'pld') {
      return handleOnsCceeProxyRequest(params);
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
      return createJsonResponse({ status: 'success', syncResult: result });
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
    return createJsonResponse({ status: 'success', syncResult: result });
  } catch (err) {
    return createJsonResponse({
      status: 'error',
      message: String(err && err.message ? err.message : err)
    });
  }
}

/**
 * 1. Leitura Unificada das 4 Abas Públicas da Planilha Mestre:
 *    - Aba "Radar de Originação (Leads)"       -> campo `data`
 *    - Aba "Noticias"                          -> campo `noticias`
 *    - Aba "Tracking PREs YTD (2026)"          -> campo `tracking_pres`
 *    - Aba "Radar Preditivo (Tier 0)"          -> campo `tier0`
 *    (Abas internas de Mandatos/Diretrizes não são expostas no endpoint público)
 */
function putChunkedCache(cache, baseKey, str, ttl) {
  try {
    const chunkSize = 85000;
    const count = Math.ceil(str.length / chunkSize);
    if (count > 8) return;
    const pairs = {};
    pairs[baseKey + '_meta'] = String(count);
    for (var i = 0; i < count; i++) {
      pairs[baseKey + '_' + i] = str.substring(i * chunkSize, (i + 1) * chunkSize);
    }
    cache.putAll(pairs, ttl);
  } catch (e) {}
}

function getChunkedCache(cache, baseKey) {
  try {
    const meta = cache.get(baseKey + '_meta');
    if (!meta) return cache.get(baseKey);
    const count = parseInt(meta, 10);
    if (!count || count < 1 || count > 8) return null;
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
    for (var i = 0; i < 8; i++) keys.push(baseKey + '_' + i);
    cache.removeAll(keys);
  } catch (e) {}
}

function handleMasterSheetRead(bypassCache) {
  const cache = CacheService.getScriptCache();
  const cacheKey = 'vk_master_sheet_v46';
  if (!bypassCache) {
    const cachedPayload = getChunkedCache(cache, cacheKey);
    if (cachedPayload) {
      return ContentService.createTextOutput(cachedPayload).setMimeType(ContentService.MimeType.JSON);
    }
  }

  const ss = openMasterSpreadsheet_();

  // 1. Radar de Originação (Leads)
  const leadsSheet = ss.getSheetByName('Radar de Originação (Leads)') || ss.getSheets()[0];
  const rows = leadsSheet ? leadsSheet.getDataRange().getValues() : [];
  const dataRows = rows.length > 1 ? rows.slice(1).filter(function(r) {
    if (!r) return false;
    var emp = String(r[2] || '').trim();
    return emp !== '' && !isExcludedEntity_(emp);
  }) : [];

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

  const payloadObj = {
    status: 'success',
    version: '4.6',
    updated_at: new Date().toISOString(),
    count: dataRows.length,
    data: dataRows,
    noticias_count: noticiasRows.length,
    noticias: noticiasRows,
    tracking_pres_count: trackingPresRows.length,
    tracking_pres: trackingPresRows,
    pres: trackingPresRows,
    tier0_count: tier0Rows.length,
    tier0: tier0Rows
  };

  const jsonStr = JSON.stringify(payloadObj);
  putChunkedCache(cache, cacheKey, jsonStr, CACHE_TTL_SECONDS);

  return ContentService.createTextOutput(jsonStr).setMimeType(ContentService.MimeType.JSON);
}

/**
 * 1B. Proxy com Cache para Telemetria ONS & PLD Horário Oficial da CCEE
 */
function handleOnsCceeProxyRequest(params) {
  const submarket = String((params && (params.submercado || params.submarket)) || 'SIN').toUpperCase();
  const dateStr = String((params && (params.data || params.date)) || Utilities.formatDate(new Date(), 'America/Sao_Paulo', 'yyyy-MM-dd'));
  const cache = CacheService.getScriptCache();
  const cacheKey = 'vk_ons_ccee_' + submarket + '_' + dateStr;
  const cached = cache.get(cacheKey);
  if (cached && String(params.nocache || params.force || '') !== '1') {
    return ContentService.createTextOutput(cached).setMimeType(ContentService.MimeType.JSON);
  }

  let onsData = null;
  let cceePld = null;
  try {
    const onsRes = UrlFetchApp.fetch('https://integra.ons.org.br/api/energiaagora/GetBalancoEnergetico/null', {
      method: 'get',
      muteHttpExceptions: true,
      headers: { 'Accept': 'application/json' }
    });
    if (onsRes.getResponseCode() >= 200 && onsRes.getResponseCode() < 300) {
      onsData = JSON.parse(onsRes.getContentText('UTF-8'));
    }
  } catch (e) {}

  try {
    const cceeRes = UrlFetchApp.fetch('https://dadosabertos.ccee.org.br/api/3/action/package_show?id=pld_horario', {
      method: 'get',
      muteHttpExceptions: true,
      headers: { 'Accept': 'application/json' }
    });
    if (cceeRes.getResponseCode() >= 200 && cceeRes.getResponseCode() < 300) {
      const cceeJson = JSON.parse(cceeRes.getContentText('UTF-8'));
      cceePld = {
        connected: Boolean(cceeJson && cceeJson.success),
        resourceCount: (cceeJson && cceeJson.result && cceeJson.result.resources) ? cceeJson.result.resources.length : 0
      };
    }
  } catch (e) {}

  const payloadStr = JSON.stringify({
    status: 'ok',
    submarket: submarket,
    date: dateStr,
    ons: onsData,
    ccee: cceePld,
    updated_at: new Date().toISOString()
  });
  try {
    cache.put(cacheKey, payloadStr, CACHE_TTL_SECONDS);
  } catch (e) {}
  return ContentService.createTextOutput(payloadStr).setMimeType(ContentService.MimeType.JSON);
}

/**
 * 2. Proxy de RSS/XML com Allowlist Estrita de Domínios HTTPS (Anti-SSRF) e CacheService
 */
function handleRssProxyRequest(targetUrl, bypassCache) {
  const cleanUrl = String(targetUrl || '').trim();
  const hostMatch = cleanUrl.match(/^https:\/\/([a-zA-Z0-9.-]+)(?:\/|$)/);
  if (!hostMatch || cleanUrl.indexOf('@') !== -1) {
    return createJsonResponse({ status: 'error', code: 400, message: 'Apenas URLs HTTPS válidas são permitidas.' });
  }
  const hostname = hostMatch[1].toLowerCase();
  if (!ALLOWED_PROXY_HOSTS[hostname]) {
    return createJsonResponse({ status: 'error', code: 403, message: 'Domínio não autorizado na allowlist do proxy.' });
  }

  const cache = CacheService.getScriptCache();
  const cacheKey = 'vk_rss_' + Utilities.base64EncodeWebSafe(cleanUrl).slice(0, 180);
  const cachedXml = cache.get(cacheKey);

  if (cachedXml && !bypassCache) {
    return createJsonResponse({
      status: 'ok',
      cached: true,
      url: cleanUrl,
      contents: cachedXml
    });
  }

  const response = UrlFetchApp.fetch(cleanUrl, {
    method: 'get',
    muteHttpExceptions: true,
    followRedirects: false,
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; ValknutSpecialSituationsBot/4.6)',
      'Accept': 'application/rss+xml, application/xml, text/xml, application/atom+xml, */*'
    }
  });

  const code = response.getResponseCode();
  const xmlText = response.getContentText('UTF-8');

  if (code >= 200 && code < 300 && xmlText && xmlText.length > 50) {
    try {
      if (xmlText.length < 95000) {
        cache.put(cacheKey, xmlText, CACHE_TTL_SECONDS);
      }
    } catch (cacheErr) {}
    return createJsonResponse({
      status: 'ok',
      cached: false,
      http_code: code,
      url: cleanUrl,
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
 * 3. Proxy para API Pública do DJEN / Comunica PJe do CNJ
 */
function handleDjenProxyRequest(params) {
  const dataHoje = Utilities.formatDate(new Date(), 'America/Sao_Paulo', 'yyyy-MM-dd');
  const dataInicio = String(params.dataInicio || dataHoje).replace(/[^0-9-]/g, '').slice(0, 10) || dataHoje;
  const siglaTribunal = String(params.siglaTribunal || 'TJSP').replace(/[^A-Za-z0-9]/g, '').slice(0, 10) || 'TJSP';
  const termo = String(params.termo || 'recuperação judicial').slice(0, 80);

  const endpoint = 'https://comunicaapi.pje.jus.br/api/v1/comunicacao'
    + '?siglaTribunal=' + encodeURIComponent(siglaTribunal)
    + '&dataDisponibilizacaoInicio=' + encodeURIComponent(dataInicio)
    + '&dataDisponibilizacaoFim=' + encodeURIComponent(dataHoje)
    + '&texto=' + encodeURIComponent(termo)
    + '&itensPorPagina=50&pagina=1';

  const response = UrlFetchApp.fetch(endpoint, {
    method: 'get',
    muteHttpExceptions: true,
    headers: { 'Accept': 'application/json' }
  });

  return ContentService
    .createTextOutput(response.getContentText('UTF-8'))
    .setMimeType(ContentService.MimeType.JSON);
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
        url: 'https://news.google.com/rss/search?q=%28waiver+OR+covenants+OR+AGD+OR+debenturistas+OR+%22deb%C3%AAntures%22%29+%28reestrutura%C3%A7%C3%A3o+OR+inadimpl%C3%AAncia+OR+vencimento%29+when%3A7d&hl=pt-BR&gl=BR&ceid=BR:pt-419',
        tag: 'WAIVER / AGD',
        catAba: 'Waivers, AGDs & Downgrades Rating',
        escopo: 'CVM & Fatos Relevantes'
      },
      {
        url: 'https://news.google.com/rss/search?q=%22recupera%C3%A7%C3%A3o+extrajudicial%22+OR+%22vencimento+antecipado%22+OR+V%C3%B3rtx+OR+Pent%C3%A1gono+OR+%22Oliveira+Trust%22+deb%C3%AAntures+when%3A30d&hl=pt-BR&gl=BR&ceid=BR:pt-419',
        tag: 'RE / DEBÊNTURES',
        catAba: 'Waivers, AGDs & Downgrades Rating',
        escopo: 'CVM & Fatos Relevantes'
      },
      {
        url: 'https://news.google.com/rss/search?q=rebaixamento+OR+rating+Fitch+OR+Moody%27s+deb%C3%AAntures+OR+CRA+OR+d%C3%ADvida+when%3A30d&hl=pt-BR&gl=BR&ceid=BR:pt-419',
        tag: 'DOWNGRADE RATING',
        catAba: 'Waivers, AGDs & Downgrades Rating',
        escopo: 'CVM & Fatos Relevantes'
      },
      {
        url: 'https://news.google.com/rss/search?q=%22recupera%C3%A7%C3%A3o+judicial%22+OR+%22tutela+cautelar%22+OR+%22pedido+de+fal%C3%AAncia%22+d%C3%ADvida+milh%C3%B5es+when%3A14d&hl=pt-BR&gl=BR&ceid=BR:pt-419',
        tag: 'PEDIDO DE RJ',
        catAba: 'Pedidos de RJ & Cautelares 20-B',
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
      const isAlt = /^\d+$/.test(c0) && /^https?:\/\//i.test(c6);
      const rawT = isAlt ? String(existingValues[i][2] || '') : c6;
      const t = rawT.toLowerCase().trim().slice(0, 58);
      if (t) seenKeys[t] = true;
    }

    let aquecidos = 0;
    let gravadas = 0;
    const novasLinhas = [];

    feedsConfig.forEach(function(fc) {
      try {
        const resp = UrlFetchApp.fetch(fc.url, { muteHttpExceptions: true, followRedirects: true });
        if (resp.getResponseCode() >= 200 && resp.getResponseCode() < 300) {
          aquecidos++;
          const xmlText = resp.getContentText('UTF-8');
          const cache = CacheService.getScriptCache();
          const cacheKey = 'vk_rss_' + Utilities.base64EncodeWebSafe(fc.url).slice(0, 180);
          if (xmlText.length < 95000) cache.put(cacheKey, xmlText, CACHE_TTL_SECONDS);

          const itemMatches = xmlText.match(/<item>[\s\S]*?<\/item>/gi) || [];
          itemMatches.slice(0, 8).forEach(function(itemXml) {
            const titleMatch = itemXml.match(/<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/i);
            const linkMatch = itemXml.match(/<link>([\s\S]*?)<\/link>/i);
            const pubDateMatch = itemXml.match(/<pubDate>([\s\S]*?)<\/pubDate>/i);
            const sourceMatch = itemXml.match(/<source[^>]*>([\s\S]*?)<\/source>/i);

            let rawTitle = titleMatch ? titleMatch[1].replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").trim() : '';
            let sourceName = sourceMatch ? sourceMatch[1].trim() : 'Mercado / Agências';
            if (rawTitle.indexOf(' - ') !== -1) {
              const parts = rawTitle.split(' - ');
              sourceName = parts.pop().trim() || sourceName;
              rawTitle = parts.join(' - ').trim();
            }
            if (!rawTitle || rawTitle.length < 18 || isExcludedEntity_(rawTitle)) return;

            const normKey = rawTitle.toLowerCase().slice(0, 58);
            if (seenKeys[normKey]) return;

            const pubDate = pubDateMatch ? new Date(pubDateMatch[1].trim()) : new Date();
            if (isNaN(pubDate.getTime()) || pubDate.getFullYear() < 2026) return;

            const dtFmt = Utilities.formatDate(pubDate, 'America/Sao_Paulo', 'dd/MM/yyyy HH:mm');
            const linkUrl = linkMatch ? linkMatch[1].trim() : '';

            seenKeys[normKey] = true;
            novasLinhas.push([
              dtFmt,
              sourceName,
              fc.tag,
              fc.catAba,
              fc.escopo,
              'Mercado & Macro (RJ / Crédito)',
              rawTitle,
              'Capturado automaticamente pelo Motor Valknut 24/7 (' + sourceName + ').',
              linkUrl
            ]);
          });
        }
      } catch (e) {}
    });

    if (novasLinhas.length > 0) {
      noticiasSheet.getRange(noticiasSheet.getLastRow() + 1, 1, novasLinhas.length, 9).setValues(novasLinhas);
      gravadas = novasLinhas.length;
      clearChunkedCache(CacheService.getScriptCache(), 'vk_master_sheet_v46');
    }

    return {
      timestamp: new Date().toISOString(),
      feedsAquecidos: aquecidos,
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
