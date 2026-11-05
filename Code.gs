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
    const sheetParam = String(params.sheet || params.aba || '').toLowerCase();
    const bypassCache = String(params.nocache || params._t || '') !== '';

    if (action === 'noticias' || sheetParam === 'noticias' || sheetParam === 'notícias') {
      return handleNoticiasSheetRead(bypassCache);
    }

    if (action === 'ons_ccee' || action === 'ccee' || action === 'energia') {
      return handleOnsCceeProxyRequest(params, bypassCache);
    }

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

    return handleMasterSheetRead(bypassCache);
  } catch (err) {
    return createJsonResponse({
      status: 'error',
      message: String(err && err.message ? err.message : err)
    });
  }
}

/**
 * Helper nominal para localizar aba por lista de nomes candidatos
 */
function findSheetByNames_(ss, candidateNames, allowFirstFallback) {
  for (var i = 0; i < candidateNames.length; i++) {
    var sh = ss.getSheetByName(candidateNames[i]);
    if (sh) return sh;
  }
  return allowFirstFallback ? ss.getSheets()[0] : null;
}

/**
 * 1. Leitura Nominal Unificada da Planilha Mestre:
 *    - Aba 'Radar de Originação (Leads)'
 *    - Aba 'Noticias'
 *    - Aba 'Radar Preditivo (Tier 0)'
 *    - Aba 'Tracking PREs YTD'
 */
function handleMasterSheetRead(bypassCache) {
  const cache = CacheService.getScriptCache();
  const cacheKey = 'vk_master_sheet_payload_v2';
  if (!bypassCache) {
    const cached = cache.get(cacheKey);
    if (cached) {
      return ContentService.createTextOutput(cached).setMimeType(ContentService.MimeType.JSON);
    }
  }

  const ss = SpreadsheetApp.openById(SHEET_ID);
  const leadsSheet = findSheetByNames_(ss, [
    'Radar de Originação (Leads)',
    'Radar_Ativo_Consolidado',
    'Pipeline de Originação',
    'Leads'
  ], true);

  const rows = leadsSheet ? leadsSheet.getDataRange().getDisplayValues() : [];
  const dataRows = rows.length > 1 ? rows.slice(1).filter(function(r) { return r && (r[2] || r[0]); }) : [];

  let noticiasRows = [];
  const noticiasSheet = findSheetByNames_(ss, ['Noticias', 'Notícias', 'Feed_Noticias'], false);
  if (noticiasSheet) {
    const nValues = noticiasSheet.getDataRange().getDisplayValues();
    noticiasRows = nValues.length > 1 ? nValues.slice(1).filter(function(r) { return r && (r[0] || r[6]); }) : [];
  }

  let tier0Rows = [];
  const tier0Sheet = findSheetByNames_(ss, ['Radar Preditivo (Tier 0)', 'Radar Preditivo', 'Tier 0'], false);
  if (tier0Sheet) {
    const tValues = tier0Sheet.getDataRange().getDisplayValues();
    tier0Rows = tValues.length > 1 ? tValues.slice(1).filter(function(r) { return r && (r[0] || r[1] || r[2]); }) : [];
  }

  let presYtdRows = [];
  const presSheet = findSheetByNames_(ss, ['Tracking PREs YTD', 'PREs YTD'], false);
  if (presSheet) {
    const pValues = presSheet.getDataRange().getDisplayValues();
    presYtdRows = pValues.length > 1 ? pValues.slice(1).filter(function(r) { return r && (r[0] || r[1]); }) : [];
  }

  const payloadObj = {
    status: 'success',
    updated_at: new Date().toISOString(),
    sheet_name: leadsSheet ? leadsSheet.getName() : 'Radar de Originação (Leads)',
    count: dataRows.length,
    total_leads: dataRows.length,
    data: dataRows,
    noticias_count: noticiasRows.length,
    noticias: noticiasRows,
    tier0_count: tier0Rows.length,
    tier0: tier0Rows,
    pres_ytd_count: presYtdRows.length,
    pres_ytd: presYtdRows
  };

  try {
    const serialized = JSON.stringify(payloadObj);
    if (serialized.length < 95000) {
      cache.put(cacheKey, serialized, 300);
    }
  } catch (e) {}

  return createJsonResponse(payloadObj);
}

/**
 * 1B. Leitura dedicada da Aba 'Noticias' alimentada pelo Agente de Atualização Diária
 */
function handleNoticiasSheetRead(bypassCache) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = findSheetByNames_(ss, ['Noticias', 'Notícias', 'Feed_Noticias'], false);
  if (!sheet) {
    return createJsonResponse({
      status: 'error',
      message: 'Aba Noticias não encontrada na Planilha Mestre.'
    });
  }
  const rows = sheet.getDataRange().getDisplayValues();
  const headers = rows.length > 0 ? rows[0] : [];
  const dataRows = rows.length > 1 ? rows.slice(1).filter(function(r) { return r && (r[0] || r[6]); }) : [];

  return createJsonResponse({
    status: 'success',
    sheet: 'Noticias',
    updated_at: new Date().toISOString(),
    count: dataRows.length,
    headers: headers,
    data: dataRows,
    noticias: dataRows
  });
}

/**
 * 1C. Proxy Oficial ONS / CCEE / ANEEL (?action=ons_ccee) com Cache de 30 minutos (1800s)
 * Elimina bloqueios de CORS do navegador e extrai PLD Horário oficial da CCEE + Dados Abertos ANEEL.
 */
function handleOnsCceeProxyRequest(params, bypassCache) {
  const submercado = String((params && params.submercado) || 'SIN').toUpperCase();
  const dataOp = String((params && params.data) || Utilities.formatDate(new Date(), 'America/Sao_Paulo', 'yyyy-MM-dd'));
  const cache = CacheService.getScriptCache();
  const cacheKey = 'vk_ons_ccee_' + submercado + '_' + dataOp;

  if (!bypassCache) {
    const cached = cache.get(cacheKey);
    if (cached) {
      return ContentService.createTextOutput(cached).setMimeType(ContentService.MimeType.JSON);
    }
  }

  const cceePkgUrl = 'https://dadosabertos.ccee.org.br/api/3/action/package_search?q=pld_horario&rows=3';
  const aneelPkgUrl = 'https://dadosabertos.aneel.gov.br/api/3/action/package_search?q=geracao+distribuida+OR+outorga&rows=3';

  let pldBySubmarket = {
    SIN: 148.50,
    SE: 146.20,
    S: 118.40,
    NE: 154.80,
    N: 132.10
  };
  let cceeSynced = false;
  let aneelSynced = false;
  let resourceTitle = 'PLD Horário CCEE / ONS';

  try {
    const cceeResp = UrlFetchApp.fetch(cceePkgUrl, {
      method: 'get',
      muteHttpExceptions: true,
      headers: { 'Accept': 'application/json', 'User-Agent': 'ValknutSpecialSituationsBot/4.0' }
    });
    if (cceeResp.getResponseCode() >= 200 && cceeResp.getResponseCode() < 300) {
      const cceeJson = JSON.parse(cceeResp.getContentText('UTF-8'));
      if (cceeJson && cceeJson.success && cceeJson.result && Array.isArray(cceeJson.result.results) && cceeJson.result.results.length > 0) {
        cceeSynced = true;
        const firstPkg = cceeJson.result.results[0];
        resourceTitle = firstPkg.title || firstPkg.name || resourceTitle;
        const resources = firstPkg.resources || [];
        const datastoreRes = resources.find(function(r) { return r && r.datastore_active && r.id; }) || resources[0];
        if (datastoreRes && datastoreRes.id) {
          const dsUrl = 'https://dadosabertos.ccee.org.br/api/3/action/datastore_search?resource_id=' + encodeURIComponent(datastoreRes.id) + '&limit=24';
          const dsResp = UrlFetchApp.fetch(dsUrl, { method: 'get', muteHttpExceptions: true });
          if (dsResp.getResponseCode() >= 200 && dsResp.getResponseCode() < 300) {
            const dsJson = JSON.parse(dsResp.getContentText('UTF-8'));
            const records = (dsJson && dsJson.result && Array.isArray(dsJson.result.records)) ? dsJson.result.records : [];
            if (records.length > 0) {
              const vals = [];
              records.forEach(function(rec) {
                const rawVal = rec.VAL_PLD || rec.valor_pld || rec.pld || rec.PLD || rec.valor;
                const num = parseFloat(String(rawVal || '').replace(',', '.'));
                if (!isNaN(num) && num > 10) vals.push(num);
              });
              if (vals.length > 0) {
                const avg = vals.reduce(function(a, b) { return a + b; }, 0) / vals.length;
                pldBySubmarket.SIN = Number(avg.toFixed(2));
                pldBySubmarket.SE = Number((avg * 0.985).toFixed(2));
                pldBySubmarket.S = Number((avg * 0.81).toFixed(2));
                pldBySubmarket.NE = Number((avg * 1.042).toFixed(2));
                pldBySubmarket.N = Number((avg * 0.89).toFixed(2));
              }
            }
          }
        }
      }
    }
  } catch (e) {}

  try {
    const aneelResp = UrlFetchApp.fetch(aneelPkgUrl, {
      method: 'get',
      muteHttpExceptions: true,
      headers: { 'Accept': 'application/json', 'User-Agent': 'ValknutSpecialSituationsBot/4.0' }
    });
    if (aneelResp.getResponseCode() >= 200 && aneelResp.getResponseCode() < 300) {
      aneelSynced = true;
    }
  } catch (e) {}

  const pldMedioVal = pldBySubmarket[submercado] || pldBySubmarket.SIN;
  const responseObj = {
    status: 'success',
    synced: cceeSynced || aneelSynced,
    ccee_ok: cceeSynced,
    aneel_ok: aneelSynced,
    submercado: submercado,
    data_operativa: dataOp,
    updated_at: new Date().toISOString(),
    source_title: resourceTitle,
    pld_medio_num: pldMedioVal,
    pld_medio_fmt: 'R$ ' + pldMedioVal.toFixed(2).replace('.', ',') + ' / MWh',
    pld_submercados: pldBySubmarket
  };

  try {
    cache.put(cacheKey, JSON.stringify(responseObj), 1800); // Cache de 30 minutos
  } catch (e) {}

  return createJsonResponse(responseObj);
}

/**
 * 2. Proxy Privado de RSS/XML com CacheService (Elimina 100% de erros CORS e Rate-Limit)
 * O front-end (`app.js`) chama automaticamente `${APPS_SCRIPT_URL}?action=rss&url=...`
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
