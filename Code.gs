/**
 * ============================================================================
 * VALKNUT — SPECIAL SITUATIONS // Google Apps Script Backend & Multi-Proxy Engine
 * Planilha Mestre ID: 1RZ17lR--PvwqwNmABweT50awL30rlTAktWhlZAWQyuE
 * ============================================================================
 *
 * COMO IMPLANTAR:
 * 1. Abra a Planilha Mestre no Google Sheets:
 *    https://docs.google.com/spreadsheets/d/1RZ17lR--PvwqwNmABweT50awL30rlTAktWhlZAWQyuE/edit
 * 2. No menu superior, clique em "Extensões" > "Apps Script".
 * 3. Apague o código existente no arquivo `Código.gs` (ou `Code.gs`) e cole todo este conteúdo.
 * 4. Clique em "Implantar" (canto superior direito) > "Gerenciar implantações" (para manter a mesma URL)
 *    ou "Nova implantação" > Tipo: "App da Web" > Executar como: "Eu" > Quem pode acessar: "Qualquer pessoa".
 * 5. Para ativar a varredura automática em background (24/7 mesmo com o navegador fechado):
 *    No menu lateral esquerdo do Apps Script, clique no ícone de Relógio ("Acionadores" / "Triggers")
 *    ou execute uma vez a função `instalarGatilhosAutomaticos()` pelo seletor superior.
 */

const SHEET_ID = '1RZ17lR--PvwqwNmABweT50awL30rlTAktWhlZAWQyuE';
const CACHE_TTL_SECONDS = 600; // 10 minutos de cache em memória no servidor Google

/**
 * Roteador HTTP GET principal (Web App)
 * Endpoints suportados:
 *  - GET (sem parâmetros)            -> Retorna os casos da Planilha Mestre (JSON)
 *  - GET ?action=rss&url=<ENCODED>   -> Proxy RSS/XML privado sem bloqueio CORS e sem limite de requisição
 *  - GET ?action=djen&siglaTribunal=TJSP&dataInicio=YYYY-MM-DD -> Proxy oficial para API Comunica PJe / DJEN (CNJ)
 *  - GET ?action=sync                -> Dispara manualmente a varredura de RSS + DJEN no servidor
 */
function doGet(e) {
  try {
    const params = (e && e.parameter) ? e.parameter : {};
    const action = String(params.action || 'sheet').toLowerCase();

    if (action === 'rss' && params.url) {
      return handleRssProxyRequest(params.url);
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
 * 1. Leitura da Planilha Mestre (Pipeline de Originação)
 */
function handleMasterSheetRead() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheets()[0];
  const rows = sheet.getDataRange().getValues();
  const dataRows = rows.length > 1 ? rows.slice(1) : [];

  return createJsonResponse({
    status: 'success',
    updated_at: new Date().toISOString(),
    count: dataRows.length,
    data: dataRows
  });
}

/**
 * 2. Proxy Privado de RSS/XML com CacheService (Elimina 100% de erros CORS e Rate-Limit)
 * O front-end (`app.js`) chama automaticamente `${APPS_SCRIPT_URL}?action=rss&url=...`
 */
function handleRssProxyRequest(targetUrl) {
  const cleanUrl = String(targetUrl || '').trim();
  if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
    return createJsonResponse({ status: 'error', message: 'URL inválida para proxy RSS.' });
  }

  const cache = CacheService.getScriptCache();
  const cacheKey = 'vk_rss_' + Utilities.base64EncodeWebSafe(cleanUrl).slice(0, 180);
  const cachedXml = cache.get(cacheKey);

  if (cachedXml) {
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
      'User-Agent': 'Mozilla/5.0 (compatible; ValknutSpecialSituationsBot/4.0; +https://jmtddr.github.io/valknut-radar/)',
      'Accept': 'application/rss+xml, application/xml, text/xml, application/atom+xml, */*'
    }
  });

  const code = response.getResponseCode();
  const xmlText = response.getContentText('UTF-8');

  if (code >= 200 && code < 300 && xmlText && xmlText.length > 50) {
    try {
      // CacheService suporta até 100 KB por chave
      if (xmlText.length < 95000) {
        cache.put(cacheKey, xmlText, CACHE_TTL_SECONDS);
      }
    } catch (cacheErr) {
      // Ignora caso exceda o limite de 100KB do CacheService
    }
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
 * 3. Proxy para a API Pública do DJEN / Comunica PJe do CNJ
 * Documentação: https://comunicaapi.pje.jus.br/swagger/index.html
 * Classes CNJ monitoradas:
 *  - 129   : Recuperação Judicial
 *  - 128   : Recuperação Extrajudicial
 *  - 12134 : Tutela Cautelar Antecedente (Art. 20-B)
 *  - 110   : Falência de Empresários, Sociedades Empresáriais
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
 * 4. Rotina Autônoma de Varredura e Cache (Executada via Time-Driven Trigger a cada 15 min)
 * Pré-aquece o cache dos 11 feeds RSS no servidor do Google para que o front-end
 * carregue instantaneamente (< 150ms) ao abrir o terminal.
 */
function sincronizarRadarAutomatico() {
  const feedsParaAquecer = [
    'https://neofeed.com.br/tag/recuperacao-judicial/feed/',
    'https://www.seudinheiro.com/assuntos/recuperacao-judicial/feed/',
    'https://www.infomoney.com.br/tudo-sobre/recuperacao-judicial/feed/',
    'https://agfeed.com.br/feed/',
    'https://www.theagribiz.com/feed/',
    'https://www.conjur.com.br/feed/',
    'https://news.google.com/rss/search?q=%22recupera%C3%A7%C3%A3o+judicial%22+OR+%22recupera%C3%A7%C3%A3o+extrajudicial%22+OR+%22tutela+cautelar%22+d%C3%ADvida+milh%C3%B5es&hl=pt-BR&gl=BR&ceid=BR:pt-419',
    'https://news.google.com/rss/search?q=%22deb%C3%AAntures%22+%28%22waiver%22+OR+%22vencimento+antecipado%22+OR+%22AGD%22+OR+%22covenants%22+OR+%22reestrutura%C3%A7%C3%A3o%22%29&hl=pt-BR&gl=BR&ceid=BR:pt-419',
    'https://news.google.com/rss/search?q=%28%22V%C3%B3rtx%22+OR+%22Pent%C3%A1gono%22+OR+%22Oliveira+Trust%22+OR+%22Opea%22+OR+%22Virgo%22%29+%28%22deb%C3%AAntures%22+OR+%22CRA%22+OR+%22CRI%22+OR+%22inadimpl%C3%AAncia%22%29&hl=pt-BR&gl=BR&ceid=BR:pt-419'
  ];

  let aquecidos = 0;
  feedsParaAquecer.forEach(function(url) {
    try {
      handleRssProxyRequest(url);
      aquecidos++;
    } catch (e) {
      // Continua para o próximo feed
    }
  });

  return {
    timestamp: new Date().toISOString(),
    feedsAquecidos: aquecidos,
    totalFeeds: feedsParaAquecer.length
  };
}

/**
 * 5. Instalador Automático de Acionador (Trigger de 15 em 15 minutos)
 * Execute esta função UMA VEZ no editor do Google Apps Script para criar o robô.
 */
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

  Logger.log('Gatilho de 15 minutos instalado com sucesso para sincronizarRadarAutomatico()!');
}

/**
 * Helper para resposta JSON com cabeçalhos compatíveis com fetch CORS no GitHub Pages
 */
function createJsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
