/**
 * ==========================================================================
 * VALKNUT ANALYTICS // Special Situations & Distressed Debt Platform
 * Application Core & State Management Controller
 * ==========================================================================
 */

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwOMjUrheleQxp9XB-4bjiaFOiwDLkRL_R6F2vodaiPpE7qpFcLr9KFWB-nYHRHN_-1/exec';

const STRATEGIES = {
  all: {
    badge: 'VISÃO CONSOLIDADA',
    title: 'PIPELINE CONSOLIDADO // VISÃO GERAL DE MERCADO',
    desc: 'Monitoramento unificado de empresas em estresse financeiro severo, processos concursais e procedimentos preparatórios no Brasil.'
  },
  watchdog: {
    badge: 'CREDITOR-SIDE // WATCHDOG',
    title: 'ESTRATÉGIA: CREDITOR-SIDE & WATCHDOG DE COLATERAL',
    desc: 'Casos com alta concentração bancária (CR4 > 60%), covenants sob estresse em debêntures e tutelas preparatórias sem fiscalização independente de caixa.'
  },
  dip: {
    badge: 'DIP FINANCING // SPECIAL SITUATIONS',
    title: 'ESTRATÉGIA: DIP FINANCING & M&A DISTRESSED',
    desc: 'Oportunidades de injeção de Dinheiro Novo prioritário (Art. 69-A a 69-F), alienação judicial de UPIs, desinvestimento fabril e reestruturações com deságio.'
  },
  consensual: {
    badge: 'CONSENSUAL // ART. 20-B',
    title: 'ESTRATÉGIA: CONSENSUAL & PRÉ-CONCURSAL',
    desc: 'Negociações pré-concursais sob o Art. 20-B, Recuperações Extrajudiciais homologadas/em curso e acordos de standstill para quórum qualificado.'
  },
  precursor: {
    badge: 'FORENSICS // TIER 0',
    title: 'ESTRATÉGIA: DISTRESS PRECURSOR (TIER 0)',
    desc: 'Sinais forenses de estresse 60 a 120 dias antes do ajuizamento público: spikes no CENPROT, execuções fiscais PGFN, CVM Res. 175 e reguladores.'
  }
};

const CITY_COORDINATES = {
  'São Paulo,SP': [-23.5505, -46.6333],
  'Campinas,SP': [-22.9099, -47.0626],
  'Ribeirão Preto,SP': [-21.1775, -47.8103],
  'São José dos Campos,SP': [-23.1896, -45.8841],
  'Santos,SP': [-23.9608, -46.3336],
  'Sorocaba,SP': [-23.5015, -47.4526],
  'Barueri,SP': [-23.5105, -46.8761],
  'São Bernardo do Campo,SP': [-23.6944, -46.5654],
  'Salto,SP': [-23.2008, -47.2869],
  'Piracicaba,SP': [-22.7253, -47.6476],
  'São Caetano do Sul,SP': [-23.6229, -46.5552],
  'Rio de Janeiro,RJ': [-22.9068, -43.1729],
  'São João da Barra,RJ': [-21.6403, -41.0514],
  'Belo Horizonte,MG': [-19.9167, -43.9345],
  'Sete Lagoas,MG': [-19.4658, -44.2467],
  'Montes Claros,MG': [-16.7350, -43.8617],
  'Vitória,ES': [-20.3155, -40.3128],
  'Viana,ES': [-20.3906, -40.4958],
  'Curitiba,PR': [-25.4284, -49.2733],
  'Maringá,PR': [-23.4210, -51.9331],
  'Porto Alegre,RS': [-30.0346, -51.2177],
  'Caxias do Sul,RS': [-29.1678, -51.1794],
  'Canoas,RS': [-29.9177, -51.1836],
  'Passo Fundo,RS': [-28.2628, -52.4067],
  'Esteio,RS': [-29.8525, -51.1828],
  'Joinville,SC': [-26.3044, -48.8464],
  'Cuiabá,MT': [-15.6010, -56.0974],
  'Primavera do Leste,MT': [-15.5586, -54.2961],
  'Rondonópolis,MT': [-16.4674, -54.6368],
  'Nova Bandeirantes,MT': [-9.8653, -57.8578],
  'Sorriso,MT': [-12.5428, -55.7214],
  'Dourados,MS': [-22.2211, -54.8056],
  'Sidrolândia,MS': [-20.9317, -54.9614],
  'Ponta Porã,MS': [-22.5361, -55.7256],
  'Goiânia,GO': [-16.6869, -49.2648],
  'Salvador,BA': [-12.9714, -38.5014],
  'Recife,PE': [-8.0476, -34.8770],
  'Caucaia,CE': [-3.7360, -38.6531],
  'Palmas,TO': [-10.1844, -48.3336],
  'Paragominas,PA': [-2.9972, -47.3533],
  'Manaus,AM': [-3.1190, -60.0217]
};

const UF_TO_REGION = {
  'SP': 'Sudeste', 'RJ': 'Sudeste', 'MG': 'Sudeste', 'ES': 'Sudeste',
  'PR': 'Sul', 'SC': 'Sul', 'RS': 'Sul',
  'MT': 'Centro-Oeste', 'MS': 'Centro-Oeste', 'GO': 'Centro-Oeste', 'DF': 'Centro-Oeste',
  'BA': 'Nordeste', 'PE': 'Nordeste', 'CE': 'Nordeste', 'RN': 'Nordeste', 'PB': 'Nordeste',
  'AL': 'Nordeste', 'SE': 'Nordeste', 'MA': 'Nordeste', 'PI': 'Nordeste',
  'AM': 'Norte', 'PA': 'Norte', 'RO': 'Norte', 'TO': 'Norte', 'AC': 'Norte', 'AP': 'Norte', 'RR': 'Norte'
};

let DEALS_DATA = [];
let currentStrategy = 'all';
let currentProcessType = '';
let currentUf = '';
let currentSetor = '';
let currentSort = 'score_desc';
let searchTerm = '';
let viewMode = 'table';
let mapSectionOpen = false;
let leafletMapInstance = null;
let leafletMarkersLayer = null;
let currentModalItem = null;
let currentModalTab = 'visao';
let searchDebounceTimeout = null;

document.addEventListener('DOMContentLoaded', async () => {
  await bootstrapApp();
  setupSmartPolling();
});

async function bootstrapApp() {
  await fetchDealsData();
  populateDropdownFilters();
  updateStrategyCounters();
  renderContent();
}

async function fetchDealsData() {
  updateStatusBadge('Sincronizando...');
  try {
    const response = await fetch(APPS_SCRIPT_URL);
    if (response.ok) {
      const json = await response.json();
      if (json.status === 'success' && Array.isArray(json.data) && json.data.length > 0) {
        DEALS_DATA = parseAppsScriptRows(json.data);
        updateStatusBadge(`Online: ${DEALS_DATA.length} leads`, true);
        return;
      }
    }
  } catch (err) {
    console.warn('API remota indisponível, utilizando base estática local:', err.message);
  }

  try {
    const localRes = await fetch('./deals.json');
    if (localRes.ok) {
      DEALS_DATA = await localRes.json();
      updateStatusBadge(`Base Local: ${DEALS_DATA.length} leads`, false);
    }
  } catch (err) {
    console.error('Falha ao carregar deals.json:', err);
    updateStatusBadge('Erro de Conexão', false);
  }
}

function parseAppsScriptRows(rows) {
  const parsed = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r];
    if (!row || row.length < 3) continue;

    const empresa = String(row[2] || '').trim();
    if (!empresa || empresa.toLowerCase().includes('empresa/grupo')) continue;
    if (empresa.toLowerCase().includes('safira')) continue;

    let passivoVal = 0.0;
    let passivoDisplay = String(row[11] || '0').trim();
    try {
      if (typeof row[11] === 'number') {
        passivoVal = row[11];
        passivoDisplay = passivoVal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      } else {
        passivoVal = parseFloat(passivoDisplay.replace(/\./g, '').replace(',', '.')) || 0.0;
      }
    } catch (e) { passivoVal = 0.0; }

    const trib = String(row[6] || '');
    const reg = String(row[5] || '');
    const fase = String(row[8] || '');
    const tier = String(row[10] || '');
    const tese = String(row[16] || '');
    const credoresStr = String(row[12] || 'Mapeamento em curso');

    let cidade = 'São Paulo';
    let uf = 'SP';
    for (const key of Object.keys(CITY_COORDINATES)) {
      const parts = key.split(',');
      const c = parts[0];
      const u = parts[1];
      if (trib.includes(c) || reg.includes(c) || empresa.includes(c)) {
        cidade = c; uf = u; break;
      }
    }

    const coord = CITY_COORDINATES[`${cidade},${uf}`] || [-23.5505, -46.6333];
    const regiaoMacro = UF_TO_REGION[uf] || 'Sudeste';

    const faseLower = fase.toLowerCase();
    const tierLower = tier.toLowerCase();
    const teseLower = tese.toLowerCase();

    let tipoProcesso = 'PRJ';
    let tipoLabel = 'Recuperação Judicial (PRJ)';
    if (tierLower.includes('tier 0') || faseLower.includes('precursor')) {
      tipoProcesso = 'Tier 0';
      tipoLabel = 'Sinais Forenses (Tier 0)';
    } else if (faseLower.includes('cautelar') || faseLower.includes('20-b') || faseLower.includes('51-a') || tierLower.includes('tier 1')) {
      tipoProcesso = 'Cautelar / Pré-RJ';
      tipoLabel = 'Cautelar Antecedente (Art. 20-B)';
    } else if (faseLower.includes('extrajudicial') || faseLower.includes('pre') || tierLower.includes('tier 3')) {
      tipoProcesso = 'PRE';
      tipoLabel = 'Recuperação Extrajudicial (PRE)';
    }

    let stratId = 'watchdog';
    let stratName = 'Creditor-Side & Watchdog';
    if (tipoProcesso === 'Tier 0') {
      stratId = 'precursor';
      stratName = 'Distress Precursor (Tier 0)';
    } else if (teseLower.includes('dip') || teseLower.includes('upi') || teseLower.includes('m&a') || teseLower.includes('financiamento')) {
      stratId = 'dip';
      stratName = 'DIP Financing & M&A Distressed';
    } else if (tipoProcesso === 'PRE' || faseLower.includes('cautelar') || faseLower.includes('20-b')) {
      stratId = 'consensual';
      stratName = 'Consensual & Pré-Concursal';
    }

    const triggers = [];
    if (credoresStr.toLowerCase().includes('banco') || credoresStr.toLowerCase().includes('caixa') || credoresStr.toLowerCase().includes('itaú') || credoresStr.toLowerCase().includes('bradesco')) {
      triggers.push('Alta Concentração de Dívida Institucional (CR4 > 60%)');
    }
    if (teseLower.includes('dip')) {
      triggers.push('Previsão de Financiamento DIP (Fiscalização de Tranches)');
    }
    if (teseLower.includes('upi') || teseLower.includes('alienação') || teseLower.includes('desinvestimento')) {
      triggers.push('Alienação de UPI / Desinvestimento de Ativos (Conta Escrow)');
    }
    if (faseLower.includes('cautelar') || faseLower.includes('20-b')) {
      triggers.push('Fase Pré-RJ / Cautelar sem Administrador Judicial Nomeado');
    }
    if (triggers.length === 0) {
      triggers.push('Monitoramento Periódico de Autos e Covenants');
    }

    const scoreVal = typeof row[9] === 'number' ? row[9] : (parseFloat(String(row[9] || '8.5').replace(',', '.')) || 8.5);
    let dataEvento = String(row[0] || '2026');
    if (dataEvento.includes('T')) dataEvento = dataEvento.split('T')[0];

    parsed.push({
      id: r + 1,
      data_evento: dataEvento,
      data_adicao: String(row[1] || '2026-10-08'),
      empresa: empresa,
      cnpj: String(row[3] || '00.000.000/0001-00'),
      setor_macro: String(row[4] || 'Indústria & Manufatura'),
      setor_detalhe: String(row[4] || 'Geral'),
      regiao: reg,
      cidade: cidade,
      uf: uf,
      coordenadas: coord,
      regiao_macro: regiaoMacro,
      tribunal: trib,
      processo: String(row[7] || 'Em autuação'),
      fase: fase,
      tipo_processo: tipoProcesso,
      tipo_processo_label: tipoLabel,
      score: scoreVal,
      tier: tier,
      passivo_mm: passivoVal,
      passivo_display: passivoDisplay,
      credores: credoresStr,
      perfil_passivo: String(row[13] || 'Bancário + Mercado de Capitais'),
      advocacia: String(row[14] || 'Não divulgado'),
      aj: String(row[15] || 'N/A ou A Nomear'),
      tese: tese || 'Tese em estruturação.',
      status: String(row[17] || 'Ativo'),
      proximas_acoes: String(row[18] || 'Acompanhamento processual'),
      watchdog_eligible: true,
      watchdog_triggers: triggers,
      strategy_id: stratId,
      strategy_name: stratName,
      institutional_triggers: triggers
    });
  }
  return parsed;
}

function setupSmartPolling() {
  const POLLING_INTERVAL_MS = 15 * 60 * 1000;
  setInterval(async () => {
    if (document.visibilityState === 'visible') {
      const prevLength = DEALS_DATA.length;
      await fetchDealsData();
      if (DEALS_DATA.length !== prevLength) {
        updateStrategyCounters();
        renderContent();
      }
    }
  }, POLLING_INTERVAL_MS);

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      fetchDealsData().then(() => {
        updateStrategyCounters();
        renderContent();
      });
    }
  });
}

function updateStatusBadge(label, isLive = true) {
  const statusEl = document.getElementById('lastUpdateTime');
  const syncStatus = document.getElementById('syncStatus');
  const syncSub = document.getElementById('syncSub');
  const now = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

  if (statusEl) statusEl.textContent = `${label} (${now})`;
  if (syncStatus) syncStatus.textContent = isLive ? 'Sincronizado via Google Apps Script' : 'Base Local (Offline Fallback)';
  if (syncSub) syncSub.textContent = `Última Checagem: ${new Date().toLocaleDateString('pt-BR')} às ${now}`;
}

async function forceSyncData() {
  await fetchDealsData();
  populateDropdownFilters();
  updateStrategyCounters();
  renderContent();
}

function getFilteredDeals() {
  return DEALS_DATA.filter(item => {
    if (currentStrategy !== 'all' && item.strategy_id !== currentStrategy) return false;
    if (currentProcessType !== '' && item.tipo_processo !== currentProcessType) return false;
    if (currentUf !== '' && item.uf !== currentUf) return false;
    if (currentSetor !== '' && item.setor_macro !== currentSetor) return false;

    if (searchTerm !== '') {
      const blob = [
        item.empresa, item.cnpj, item.credores, item.tribunal,
        item.processo, item.tese, item.setor_macro, item.cidade,
        item.uf, ...(item.watchdog_triggers || [])
      ].join(' ').toLowerCase();
      if (!blob.includes(searchTerm)) return false;
    }
    return true;
  }).sort((a, b) => {
    if (currentSort === 'score_desc') return (b.score || 0) - (a.score || 0);
    if (currentSort === 'passivo_desc') return (b.passivo_mm || 0) - (a.passivo_mm || 0);
    if (currentSort === 'data_desc') return String(b.data_evento || '').localeCompare(String(a.data_evento || ''));
    return String(a.empresa || '').localeCompare(String(b.empresa || ''));
  });
}

function updateKPIs(deals) {
  const totalVolume = deals.reduce((sum, d) => sum + (d.passivo_mm || 0), 0);
  const avgTicket = deals.length > 0 ? totalVolume / deals.length : 0;
  let maxDeal = { empresa: 'N/A', passivo_mm: 0 };
  deals.forEach(d => {
    if ((d.passivo_mm || 0) > maxDeal.passivo_mm) maxDeal = d;
  });
  const ufs = new Set(deals.map(d => d.uf).filter(Boolean));

  document.getElementById('kpiTotalVolume').textContent = `R$ ${formatNumberBR(totalVolume)} MM`;
  document.getElementById('kpiActiveDeals').textContent = deals.length;
  document.getElementById('kpiAvgTicket').textContent = `R$ ${formatNumberBR(avgTicket)} MM`;
  document.getElementById('kpiMaxPassivo').textContent = `R$ ${formatNumberBR(maxDeal.passivo_mm)} MM`;
  document.getElementById('kpiMaxCompany').textContent = maxDeal.empresa;
  document.getElementById('kpiJurisdictions').textContent = `${ufs.size} UFs Ativas`;
}

function updateStrategyCounters() {
  const total = DEALS_DATA.length;
  document.getElementById('count-all').textContent = total;
  document.getElementById('count-watchdog').textContent = DEALS_DATA.filter(d => d.strategy_id === 'watchdog').length;
  document.getElementById('count-dip').textContent = DEALS_DATA.filter(d => d.strategy_id === 'dip').length;
  document.getElementById('count-consensual').textContent = DEALS_DATA.filter(d => d.strategy_id === 'consensual').length;
  document.getElementById('count-precursor').textContent = DEALS_DATA.filter(d => d.strategy_id === 'precursor').length;

  document.getElementById('proc-count-all').textContent = total;
  document.getElementById('proc-count-prj').textContent = DEALS_DATA.filter(d => d.tipo_processo === 'PRJ').length;
  document.getElementById('proc-count-pre').textContent = DEALS_DATA.filter(d => d.tipo_processo === 'PRE').length;
  document.getElementById('proc-count-cautelar').textContent = DEALS_DATA.filter(d => d.tipo_processo === 'Cautelar / Pré-RJ').length;
  document.getElementById('proc-count-tier0').textContent = DEALS_DATA.filter(d => d.tipo_processo === 'Tier 0').length;
}

function renderContent() {
  const deals = getFilteredDeals();
  updateKPIs(deals);
  const container = document.getElementById('contentArea');
  if (deals.length === 0) {
    container.innerHTML = `<div class="empty-state"><p style="font-weight: 600; margin-bottom: 4px;">Nenhum lead encontrado com os filtros selecionados.</p><p>Ajuste os parâmetros de busca ou troque de aba de estratégia.</p></div>`;
    return;
  }
  if (viewMode === 'table') {
    renderTableView(deals, container);
  } else {
    renderGridView(deals, container);
  }
  if (mapSectionOpen) updateMapMarkers();
}

function getBadgeClass(tipo) {
  if (tipo === 'PRJ') return 'badge-prj';
  if (tipo === 'PRE') return 'badge-pre';
  if (tipo === 'Cautelar / Pré-RJ') return 'badge-cautelar';
  if (tipo === 'Tier 0') return 'badge-tier0';
  return 'badge-pre';
}

function renderTableView(deals, container) {
  let html = `
    <div class="table-container">
      <table class="table">
        <thead>
          <tr>
            <th style="width: 28%;">Empresa / Setor & CNPJ</th>
            <th style="width: 14%;">Fase Concursal</th>
            <th style="width: 14%;">Jurisdição</th>
            <th style="width: 13%; text-align: right;">Passivo (R$ MM)</th>
            <th style="width: 18%;">Principais Credores</th>
            <th style="width: 5%; text-align: center;">Score</th>
            <th style="width: 8%; text-align: center;">Ações</th>
          </tr>
        </thead>
        <tbody>
  `;
  deals.forEach(item => {
    const passivoStr = item.passivo_display || formatNumberBR(item.passivo_mm);
    const badgeCls = getBadgeClass(item.tipo_processo);
    const credoresTrunc = (item.credores && item.credores.length > 55) ? `${item.credores.substring(0, 55)}...` : (item.credores || 'Mapeamento em curso');

    html += `
      <tr>
        <td>
          <span class="company-name">${escapeHtml(item.empresa)}</span>
          <span class="company-meta">${escapeHtml(item.cnpj)} &bull; ${escapeHtml(item.setor_macro)}</span>
        </td>
        <td>
          <span class="badge ${badgeCls}">${escapeHtml(item.tipo_processo_label || item.tipo_processo)}</span>
          <div style="font-size: 10px; color: var(--text-tertiary); margin-top: 3px; font-family: var(--font-mono);">${escapeHtml(item.processo || 'N/A')}</div>
        </td>
        <td>
          <div style="font-weight: 600; color: #FFF;">${escapeHtml(item.cidade)}, ${escapeHtml(item.uf)}</div>
          <div style="font-size: 10px; color: var(--text-tertiary);">${escapeHtml(item.tribunal)}</div>
        </td>
        <td class="passivo-cell">R$ ${escapeHtml(passivoStr)}</td>
        <td><span style="font-size: 11px;">${escapeHtml(credoresTrunc)}</span></td>
        <td class="score-cell">${item.score || '8.5'}</td>
        <td style="text-align: center;">
          <button class="btn btn-secondary" style="padding: 4px 8px; font-size: 11px;" onclick="openDossier(${item.id})">Ficha</button>
        </td>
      </tr>
    `;
  });
  html += `</tbody></table></div>`;
  container.innerHTML = html;
}

function renderGridView(deals, container) {
  let html = `<div class="deal-grid">`;
  deals.forEach(item => {
    const passivoStr = item.passivo_display || formatNumberBR(item.passivo_mm);
    const badgeCls = getBadgeClass(item.tipo_processo);

    html += `
      <div class="deal-card" onclick="openDossier(${item.id})">
        <div>
          <div class="deal-card-header">
            <div>
              <strong style="color: #FFF; font-size: 14px; display: block; margin-bottom: 2px;">${escapeHtml(item.empresa)}</strong>
              <span class="company-meta">${escapeHtml(item.cidade)}, ${escapeHtml(item.uf)} &bull; ${escapeHtml(item.cnpj)}</span>
            </div>
            <span class="badge ${badgeCls}">${escapeHtml(item.tipo_processo)}</span>
          </div>

          <div class="deal-metrics-box">
            <div class="metric-item">
              <div class="metric-label">Passivo</div>
              <div class="metric-val" style="color: var(--status-amber);">R$ ${escapeHtml(passivoStr)}</div>
            </div>
            <div class="metric-item">
              <div class="metric-label">Score</div>
              <div class="metric-val" style="color: var(--primary);">${item.score || '8.5'}</div>
            </div>
            <div class="metric-item">
              <div class="metric-label">Setor</div>
              <div class="metric-val" style="font-size: 11px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${escapeHtml(item.setor_macro)}</div>
            </div>
          </div>

          <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.45; margin-bottom: 8px;">
            ${escapeHtml((item.tese && item.tese.length > 120) ? `${item.tese.substring(0, 120)}...` : item.tese)}
          </p>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-subtle); padding-top: 10px; margin-top: 10px;">
          <span style="font-family: var(--font-mono); font-size: 10px; color: var(--text-tertiary);">${escapeHtml(item.tribunal)}</span>
          <button class="btn btn-secondary" style="padding: 3px 8px; font-size: 11px;">Ver Dossiê</button>
        </div>
      </div>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

function setStrategy(stratId) {
  currentStrategy = stratId;
  document.querySelectorAll('.segmented-btn').forEach(b => b.classList.remove('active'));
  const targetBtn = document.getElementById(`tab-${stratId}`);
  if (targetBtn) targetBtn.classList.add('active');

  const meta = STRATEGIES[stratId] || STRATEGIES.all;
  document.getElementById('strategyBadge').textContent = meta.badge;
  document.getElementById('strategyTitle').textContent = meta.title;
  document.getElementById('strategyDesc').textContent = meta.desc;
  renderContent();
}

function setProcessFilter(proc) {
  currentProcessType = proc;
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  if (proc === '') document.getElementById('proc-all').classList.add('active');
  else if (proc === 'PRJ') document.getElementById('proc-prj').classList.add('active');
  else if (proc === 'PRE') document.getElementById('proc-pre').classList.add('active');
  else if (proc === 'Cautelar / Pré-RJ') document.getElementById('proc-cautelar').classList.add('active');
  else if (proc === 'Tier 0') document.getElementById('proc-tier0').classList.add('active');
  renderContent();
}

function handleSearch(val) {
  clearTimeout(searchDebounceTimeout);
  searchDebounceTimeout = setTimeout(() => {
    searchTerm = val.trim().toLowerCase();
    renderContent();
  }, 150);
}

function handleUfChange(val) {
  currentUf = val;
  const ufSelect = document.getElementById('selectUf');
  if (ufSelect) ufSelect.value = val;
  document.querySelectorAll('.uf-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-uf') === val || (val === '' && !btn.hasAttribute('data-uf')));
  });
  renderContent();
  if (mapSectionOpen) updateMapMarkers();
}

function handleSetorChange(val) {
  currentSetor = val;
  renderContent();
}

function handleSortChange(val) {
  currentSort = val;
  renderContent();
}

function setViewMode(mode) {
  viewMode = mode;
  document.getElementById('btnViewTable').classList.toggle('active', mode === 'table');
  document.getElementById('btnViewGrid').classList.toggle('active', mode === 'grid');
  renderContent();
}

function toggleMap() {
  const section = document.getElementById('mapSection');
  mapSectionOpen = !mapSectionOpen;
  section.style.display = mapSectionOpen ? 'block' : 'none';
  document.getElementById('tab-map').classList.toggle('active', mapSectionOpen);

  if (mapSectionOpen) {
    if (!leafletMapInstance) {
      leafletMapInstance = L.map('map', { center: [-15.7938, -47.8827], zoom: 4 });
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Esri, CartoDB',
        maxZoom: 18
      }).addTo(leafletMapInstance);
      leafletMarkersLayer = L.layerGroup().addTo(leafletMapInstance);
    }
    setTimeout(() => {
      leafletMapInstance.invalidateSize();
      updateMapMarkers();
    }, 100);
  }
}

function updateMapMarkers() {
  if (!leafletMarkersLayer) return;
  leafletMarkersLayer.clearLayers();

  const deals = getFilteredDeals();
  const bounds = [];

  deals.forEach(item => {
    if (!item.coordenadas || !Array.isArray(item.coordenadas) || item.coordenadas.length !== 2) return;
    const [lat, lng] = item.coordenadas;
    if (isNaN(lat) || isNaN(lng)) return;

    let markerColor = '#0284C7';
    if (item.tipo_processo === 'PRJ') markerColor = '#F59E0B';
    if (item.tipo_processo === 'PRE') markerColor = '#0EA5E9';
    if (item.tipo_processo === 'Cautelar / Pré-RJ') markerColor = '#F43F5E';
    if (item.tipo_processo === 'Tier 0') markerColor = '#A855F7';

    const circle = L.circleMarker([lat, lng], {
      radius: 6.5,
      fillColor: markerColor,
      color: '#FFFFFF',
      weight: 1.5,
      fillOpacity: 0.85
    });

    const popupHtml = `
      <div style="font-family: var(--font-sans); color: #0F172A; min-width: 170px;">
        <strong style="font-size: 13px; display: block; margin-bottom: 2px;">${escapeHtml(item.empresa)}</strong>
        <div style="font-size: 10px; color: #64748B; margin-bottom: 6px;">${escapeHtml(item.cidade)}, ${escapeHtml(item.uf)}</div>
        <div style="font-size: 11px; margin-bottom: 4px;"><strong>Passivo:</strong> R$ ${escapeHtml(item.passivo_display || formatNumberBR(item.passivo_mm))} MM</div>
        <button onclick="openDossier(${item.id})" style="background: #0284C7; color: white; border: none; border-radius: 4px; padding: 4px 8px; font-size: 10px; font-weight: 600; cursor: pointer; width: 100%; margin-top: 4px;">Abrir Ficha</button>
      </div>
    `;

    circle.bindPopup(popupHtml);
    leafletMarkersLayer.addLayer(circle);
    bounds.push([lat, lng]);
  });

  if (bounds.length > 0 && leafletMapInstance) {
    leafletMapInstance.fitBounds(bounds, { padding: [30, 30], maxZoom: 8 });
  }
}

function openDossier(id) {
  const item = DEALS_DATA.find(d => d.id === id);
  if (!item) return;

  currentModalItem = item;
  document.getElementById('modalCompany').textContent = item.empresa;
  document.getElementById('modalSubheader').textContent = `${item.cnpj} // ${item.tribunal} // Autos: ${item.processo || 'Em autuação'}`;

  setModalTab('visao');
  document.getElementById('detailModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('detailModal').style.display = 'none';
  document.body.style.overflow = '';
  currentModalItem = null;
}

function handleOverlayClick(e) {
  if (e.target.id === 'detailModal') closeModal();
}

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

function setModalTab(tab) {
  currentModalTab = tab;
  document.querySelectorAll('.modal-tab').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById(`modal-tab-${tab}`);
  if (btn) btn.classList.add('active');

  const body = document.getElementById('modalBody');
  const d = currentModalItem;
  if (!d) return;

  const passivoStr = d.passivo_display || formatNumberBR(d.passivo_mm);

  if (tab === 'visao') {
    body.innerHTML = `
      <div class="dossier-grid">
        <div class="dossier-card">
          <div class="dossier-label">Passivo Total Estimado</div>
          <div class="dossier-value mono" style="font-size: 18px; color: var(--status-amber);">R$ ${escapeHtml(passivoStr)} MM</div>
        </div>
        <div class="dossier-card">
          <div class="dossier-label">Score de Triagem</div>
          <div class="dossier-value mono" style="font-size: 18px; color: var(--primary);">${d.score || '8.5'} / 10</div>
        </div>
        <div class="dossier-card">
          <div class="dossier-label">Fase Concursal Atual</div>
          <div class="dossier-value">${escapeHtml(d.fase || d.tipo_processo_label)}</div>
        </div>
        <div class="dossier-card">
          <div class="dossier-label">Macro-Setor & Segmento</div>
          <div class="dossier-value">${escapeHtml(d.setor_macro)} &bull; ${escapeHtml(d.setor_detalhe)}</div>
        </div>
        <div class="dossier-card full-width">
          <div class="dossier-label">Tese de Mandato & Situação Especial</div>
          <div class="dossier-value" style="font-size: 13px; font-weight: 500; color: #E2E8F0;">${escapeHtml(d.tese)}</div>
        </div>
        <div class="dossier-card full-width">
          <div class="dossier-label">Plano Tático & Próximos Passos</div>
          <div class="dossier-value" style="font-size: 13px; font-weight: 500; color: var(--text-secondary);">${escapeHtml(d.proximas_acoes || 'Acompanhamento processual ativo.')}</div>
        </div>
      </div>
    `;
  } else if (tab === 'credores') {
    body.innerHTML = `
      <div class="dossier-grid">
        <div class="dossier-card full-width">
          <div class="dossier-label">Sindicatos & Principais Credores Mapeados</div>
          <div class="dossier-value" style="font-size: 14px; font-weight: 500; color: #E2E8F0;">${escapeHtml(d.credores)}</div>
        </div>
        <div class="dossier-card">
          <div class="dossier-label">Perfil da Dívida</div>
          <div class="dossier-value">${escapeHtml(d.perfil_passivo)}</div>
        </div>
        <div class="dossier-card">
          <div class="dossier-label">Classificação de Risco (Tier)</div>
          <div class="dossier-value mono">${escapeHtml(d.tier)}</div>
        </div>
      </div>
    `;
  } else if (tab === 'processo') {
    body.innerHTML = `
      <div class="dossier-grid">
        <div class="dossier-card">
          <div class="dossier-label">Tribunal de Justiça & Comarca</div>
          <div class="dossier-value">${escapeHtml(d.tribunal)}</div>
        </div>
        <div class="dossier-card">
          <div class="dossier-label">Número dos Autos</div>
          <div class="dossier-value mono">${escapeHtml(d.processo || 'Em autuação')}</div>
        </div>
        <div class="dossier-card">
          <div class="dossier-label">Patronos da Devedora (Advocacia)</div>
          <div class="dossier-value">${escapeHtml(d.advocacia || 'Não divulgado')}</div>
        </div>
        <div class="dossier-card">
          <div class="dossier-label">Administrador Judicial (AJ)</div>
          <div class="dossier-value">${escapeHtml(d.aj || 'N/A ou A Nomear')}</div>
        </div>
      </div>
    `;
  } else if (tab === 'gatilhos') {
    const triggers = d.watchdog_triggers || [];
    body.innerHTML = `
      <div class="dossier-grid">
        <div class="dossier-card full-width">
          <div class="dossier-label">Gatilhos de Monitoramento & Mandatos</div>
          ${triggers.length > 0 ? `
            <div style="margin-top: 8px;">
              ${triggers.map(t => `
                <div style="font-size: 13px; color: #CBD5E1; line-height: 1.5; margin-bottom: 6px; display: flex; align-items: flex-start; gap: 8px;">
                  <span style="color: var(--primary); font-weight: bold;">•</span>
                  <span>${escapeHtml(t)}</span>
                </div>
              `).join('')}
            </div>
          ` : '<p style="color: var(--text-tertiary); font-size: 12px; margin-top: 6px;">Nenhum gatilho específico ativo.</p>'}
        </div>
      </div>
    `;
  }
}

function copyDossierSummary() {
  const d = currentModalItem;
  if (!d) return;
  const text = `VALKNUT ANALYTICS // LEAD DOSSIER\n` +
    `Empresa: ${d.empresa}\n` +
    `CNPJ: ${d.cnpj}\n` +
    `Passivo: R$ ${d.passivo_display || formatNumberBR(d.passivo_mm)} MM\n` +
    `Fase: ${d.fase || d.tipo_processo_label}\n` +
    `Processo: ${d.processo} (${d.tribunal})\n` +
    `Credores: ${d.credores}\n` +
    `Tese: ${d.tese}\n`;
  navigator.clipboard.writeText(text).then(() => {
    alert('Resumo copiado com sucesso.');
  }).catch(() => {
    alert('Não foi possível copiar o texto.');
  });
}

function formatNumberBR(val) {
  if (isNaN(val)) return '0,00';
  return val.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function populateDropdownFilters() {
  const ufSelect = document.getElementById('selectUf');
  const setorSelect = document.getElementById('selectSetor');
  const ufContainer = document.getElementById('ufFilters');

  const ufs = [...new Set(DEALS_DATA.map(d => d.uf).filter(Boolean))].sort();
  const setores = [...new Set(DEALS_DATA.map(d => d.setor_macro).filter(Boolean))].sort();

  ufSelect.innerHTML = '<option value="">Todas as UFs</option>' + ufs.map(uf => `<option value="${uf}">${uf}</option>`).join('');
  setorSelect.innerHTML = '<option value="">Todos os Setores</option>' + setores.map(s => `<option value="${s}">${s}</option>`).join('');

  if (ufContainer) {
    ufContainer.innerHTML = '<button class="uf-filter-btn active" onclick="handleUfChange(\'\')">BR</button>' +
      ufs.map(uf => `<button class="uf-filter-btn" data-uf="${uf}" onclick="handleUfChange('${uf}')">${uf}</button>`).join('');
  }
}

function exportCSV() {
  const deals = getFilteredDeals();
  if (deals.length === 0) {
    alert('Nenhum registro para exportar.');
    return;
  }

  const headers = [
    "ID", "Data Evento", "Empresa", "CNPJ", "Setor", "UF", "Cidade",
    "Tribunal", "Processo", "Fase Concursal", "Passivo (R$ MM)", "Score",
    "Credores", "Tese de Mandato", "Estratégia"
  ];

  const rows = deals.map(d => [
    d.id,
    `"${d.data_evento || ''}"`,
    `"${(d.empresa || '').replace(/"/g, '""')}"`,
    `"${d.cnpj || ''}"`,
    `"${d.setor_macro || ''}"`,
    `"${d.uf || ''}"`,
    `"${d.cidade || ''}"`,
    `"${(d.tribunal || '').replace(/"/g, '""')}"`,
    `"${d.processo || ''}"`,
    `"${(d.fase || '').replace(/"/g, '""')}"`,
    `"${d.passivo_display || d.passivo_mm || ''}"`,
    d.score || '',
    `"${(d.credores || '').replace(/"/g, '""')}"`,
    `"${(d.tese || '').replace(/"/g, '""')}"`,
    `"${d.strategy_name || ''}"`
  ]);

  const csvContent = [headers.join(";"), ...rows.map(r => r.join(";"))].join("\r\n");
  const blob = new Blob(["\uFEFF" + csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `valknut_pipeline_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
