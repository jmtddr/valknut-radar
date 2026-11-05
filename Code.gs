/**
 * ============================================================================
 * VALKNUT — SPECIAL SITUATIONS // Google Apps Script Backend & Multi-Proxy Engine
 * Planilha Mestre ID: 1RZ17lR--PvwqwNmABweT50awL30rlTAktWhlZAWQyuE
 * ============================================================================
 *
 * COMO ATUALIZAR A IMPLANTAÇÃO MANTENDO A MESMA URL:
 * 1. Abra a Planilha Mestre no Google Sheets:
 *    https://docs.google.com/spreadsheets/d/1RZ17lR--PvwqwNmABweT50awL30rlTAktWhlZAWQyuE/edit
 * 2. Clique em "Extensões" > "Apps Script".
 * 3. Substitua o conteúdo de `Código.gs` por este código e salve (Ctrl+S).
 * 4. Clique em "Implantar" > "Gerenciar implantações" > ícone de lápis (Editar) >
 *    em Versão selecione "Nova versão" > clique em "Implantar".
 * 5. Opcional (varredura 24/7): execute uma vez `instalarGatilhosAutomaticos()`.
 */

const SHEET_ID = '1RZ17lR--PvwqwNmABweT50awL30rlTAktWhlZAWQyuE';
const CACHE_TTL_SECONDS = 600; // 10 minutos de cache em memória no servidor Google

function doGet(e) {
  try {
    const params = (e && e.parameter) ? e.parameter : {};
    const action = String(params.action || 'sheet').toLowerCase();

    if (action === 'rss' && params.url) {
      return handleRssProxyRequest(params.url, String(params.nocache || '') === '1');
    }

    if (action === 'djen') {
      return handleDjenProxyRequest(params);
    }

    if (action === 'sync') {
      const result = sincronizarRadarAutomatico();
      return createJsonResponse({ status: 'success', syncResult: result });
    }

    return handleMasterSheetRead();
  } catch (err) {
    return createJsonResponse({
      status: 'error',
      message: String(err && err.message ? err.message : err)
    });
  }
}

/**
 * 1. Leitura Unificada da Planilha Mestre:
 *    - Aba "Radar de Originação (Leads)" -> campo `data`
 *    - Aba "Noticias"                    -> campo `noticias`
 */
function handleMasterSheetRead() {
  const ss = SpreadsheetApp.openById(SHEET_ID);

  const leadsSheet = ss.getSheetByName('Radar de Originação (Leads)') || ss.getSheets()[0];
  const rows = leadsSheet ? leadsSheet.getDataRange().getValues() : [];
  const dataRows = rows.length > 1 ? rows.slice(1).filter(function(r) {
    return r && String(r[2] || '').trim() !== '';
  }) : [];

  const noticiasSheet = ss.getSheetByName('Noticias');
  let noticiasRows = [];
  if (noticiasSheet) {
    const nRows = noticiasSheet.getDataRange().getValues();
    noticiasRows = nRows.length > 1 ? nRows.slice(1).filter(function(r) {
      return r && String(r[6] || '').trim() !== '';
    }) : [];
  }

  return createJsonResponse({
    status: 'success',
    updated_at: new Date().toISOString(),
    count: dataRows.length,
    data: dataRows,
    noticias_count: noticiasRows.length,
    noticias: noticiasRows
  });
}

/**
 * 2. Proxy Privado de RSS/XML com CacheService (Elimina bloqueio CORS e Rate-Limit)
 */
function handleRssProxyRequest(targetUrl, bypassCache) {
  const cleanUrl = String(targetUrl || '').trim();
  if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
    return createJsonResponse({ status: 'error', message: 'URL inválida para proxy RSS.' });
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
    followRedirects: true,
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; ValknutSpecialSituationsBot/4.3; +https://jmtddr.github.io/valknut-radar/)',
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
  const dataInicio = params.dataInicio || dataHoje;
  const siglaTribunal = params.siglaTribunal || 'TJSP';
  const termo = params.termo || 'recuperação judicial';

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
 * 4. Rotina Autônoma de Varredura e Pré-Aquecimento (com filtro +when:30d / +when:7d)
 */
function sincronizarRadarAutomatico() {
  const feedsParaAquecer = [
    'https://news.google.com/rss/search?q=%28waiver+OR+covenants+OR+AGD+OR+debenturistas+OR+%22deb%C3%AAntures%22%29+%28reestrutura%C3%A7%C3%A3o+OR+inadimpl%C3%AAncia+OR+vencimento%29+when%3A7d&hl=pt-BR&gl=BR&ceid=BR:pt-419',
    'https://news.google.com/rss/search?q=waiver+OR+covenants+OR+AGD+OR+debenturistas+OR+deb%C3%AAntures+reestrutura%C3%A7%C3%A3o+when%3A30d&hl=pt-BR&gl=BR&ceid=BR:pt-419',
    'https://news.google.com/rss/search?q=%22recupera%C3%A7%C3%A3o+extrajudicial%22+OR+%22vencimento+antecipado%22+OR+V%C3%B3rtx+OR+Pent%C3%A1gono+OR+%22Oliveira+Trust%22+deb%C3%AAntures+when%3A30d&hl=pt-BR&gl=BR&ceid=BR:pt-419',
    'https://news.google.com/rss/search?q=rebaixamento+OR+rating+Fitch+OR+Moody%27s+deb%C3%AAntures+OR+CRA+OR+d%C3%ADvida+when%3A30d&hl=pt-BR&gl=BR&ceid=BR:pt-419',
    'https://news.google.com/rss/search?q=%22recupera%C3%A7%C3%A3o+judicial%22+OR+%22tutela+cautelar%22+OR+%22pedido+de+fal%C3%AAncia%22+d%C3%ADvida+milh%C3%B5es+when%3A14d&hl=pt-BR&gl=BR&ceid=BR:pt-419',
    'https://neofeed.com.br/tag/recuperacao-judicial/feed/',
    'https://www.seudinheiro.com/assuntos/recuperacao-judicial/feed/',
    'https://www.infomoney.com.br/tudo-sobre/recuperacao-judicial/feed/'
  ];

  let aquecidos = 0;
  feedsParaAquecer.forEach(function(url) {
    try {
      handleRssProxyRequest(url, false);
      aquecidos++;
    } catch (e) {}
  });

  return {
    timestamp: new Date().toISOString(),
    feedsAquecidos: aquecidos,
    totalFeeds: feedsParaAquecer.length
  };
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
