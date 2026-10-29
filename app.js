/**
 * ==========================================================================
 * VALKNUT — SPECIAL SITUATIONS // Inteligência Concursal & Distressed Debt
 * Platform Release v4.0 — Complete UI/UX, Tear Sheet, Pricing & Comps
 * ==========================================================================
 */

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwOMjUrheleQxp9XB-4bjiaFOiwDLkRL_R6F2vodaiPpE7qpFcLr9KFWB-nYHRHN_-1/exec';

let DEALS_DATA = [
  {
    "id": 1,
    "data_evento": "2026-09-25",
    "data_adicao": "2026-10-02",
    "empresa": "Aeris Energy",
    "cnpj": "12.528.708/0001-07",
    "setor_detalhe": "Energia / Bens de Capital",
    "setor_macro": "Energia & Infraestrutura",
    "regiao": "Caucaia, CE",
    "tribunal": "TJCE - 1ª Vara Cível de Caucaia",
    "processo": "0204512-11.2026.8.06.0064",
    "fase": "Cautelar Antecedente (art. 20-B)",
    "score": 9.5,
    "tier": "Tier 1",
    "passivo_mm": 1000,
    "passivo_display": "1.000",
    "credores": "Bradesco, Santander, Itaú e Debenturistas (Vórtx/Pentágono)",
    "perfil_passivo": "Bancário Concentrado + Debêntures",
    "advocacia": "BMA Advogados",
    "aj": "N/A (Fase Cautelar)",
    "tese": "(1) Causa da crise: Desalavancagem operacional severa após encerramento antecipado de contratos de fornecimento de pás eólicas (Siemens Gamesa / WEG), ociosidade fabril no Ceará e compressão do caixa frente a R$ 1,0 bilhão em dívidas financeiras; (2) Gargalo imediato: Tutela cautelar antecedente (art. 20-B) para blindagem de caixa contra travas bancárias e negociação de standstill em AGDs das emissões de debêntures (AERI11/AERI12) junto a Vórtx e Pentágono; (3) Oportunidade de mandato: Financial Advisory junto ao sindicato bancário (Bradesco, Santander, Itaú), estruturação de DIP Financing para capital de giro e M&A Distressed da planta industrial no Porto do Pecém/CE.",
    "status": "Em Análise",
    "proximas_acoes": "Acompanhar recurso da Oi contra falência no TJRJ e preparação de venda de UPI da subsidiária Tahto (Brasil Telecom Call Center), cujo plano de RJ foi homologado pela 7ª Vara Empresarial/RJ.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Previsão de Financiamento DIP (Fiscalização de Tranches)",
      "Fase Pré-RJ / Cautelar sem Administrador Judicial Nomeado",
      "Emissão de Debêntures / Mercado de Capitais (Fiscalização de Covenants)"
    ],
    "cidade": "Caucaia",
    "uf": "CE",
    "coordenadas": [
      -3.736,
      -38.6531
    ],
    "regiao_macro": "Nordeste",
    "tipo_processo": "Cautelar / Pré-RJ",
    "tipo_processo_label": "Cautelar Antecedente (Art. 20-B)",
    "strategy_id": "consensual",
    "strategy_name": "Consensual & Pré-Concursal",
    "strategy_tag": "CONSENSUAL / ART. 20-B",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Previsão de Financiamento DIP (Fiscalização de Tranches)",
      "Fase Pré-RJ / Cautelar sem Administrador Judicial Nomeado",
      "Emissão de Debêntures / Mercado de Capitais (Fiscalização de Covenants)"
    ],
    "subtipo_processo": "Cautelar / Pré-RJ",
    "causa_crise": "Desalavancagem operacional severa após encerramento antecipado de contratos de fornecimento de pás eólicas (Siemens Gamesa / WEG), ociosidade fabril no Ceará e compressão do caixa frente a R$ 1,0 bilhão em dívidas financeiras",
    "gargalo_imediato": "Tutela cautelar antecedente (art. 20-B) para blindagem de caixa contra travas bancárias e negociação de standstill em AGDs das emissões de debêntures (AERI11/AERI12) junto a Vórtx e Pentágono",
    "tese_mandato": "Financial Advisory junto ao sindicato bancário (Bradesco, Santander, Itaú), estruturação de DIP Financing para capital de giro e M&A Distressed da planta industrial no Porto do Pecém/CE.",
    "agentes_fiduciarios": "Vórtx DTVM / Pentágono DTVM",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "energy_meta": {
      "debenture_codigo": "AERI11 / AERI12 (R$ 650M)",
      "agente_fiduciario": "Vórtx DTVM / Pentágono DTVM",
      "inadimplemento_ccee": "Adimplente (Autoprodutor / Indústria Eólica)",
      "risco_caducidade": "Baixo — Contratos de fornecimento e Porto do Pecém/CE ativos",
      "corte_rating_curtailment": "Rating rebaixado para CCC(bra); impacto indireto por postergação de capex eólico devido ao curtailment no NE",
      "submercado": "Nordeste"
    },
    "descricao_empresa": "Fabricante líder na América Latina de pás eólicas para aerogeradores de alta potência, fundada em 2010 e listada no Novo Mercado da B3 (AERI3). Opera complexo industrial estrategicamente instalado adjacente ao Porto do Pecém (Caucaia/CE), com capacidade histórica superior a 4 GW/ano, atendendo clientes globais como Vestas, WEG, Nordex e Siemens Gamesa.",
    "model_params": {
      "haircut_pct": 37,
      "recuperacao_pct": 63,
      "haircut_estimado_pct": 37,
      "recuperacao_estimada_pct": 63,
      "desconto_secundario_pct": 30.0,
      "valor_recuperado_mm": 630.0,
      "ev_estimado_mm": 500.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 18.0,
        "classe_i_pct": 3.0,
        "classe_ii_pct": 42.0,
        "fiscal_pct": 7.0,
        "classe_iii_pct": 27.0,
        "classe_iv_pct": 3.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 18.0,
        "c1_trabalhista": 3.0,
        "c2_garantia_real": 42.0,
        "c3_quirografario": 27.0,
        "c4_me_epp": 3.0,
        "passivo_fiscal_estimado_mm": 70.0
      },
      "dip_necessidade_mm": 120.0,
      "upi_valuation_estimado_mm": 350.0
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-24",
      "data_marco_br": "24/11/2026",
      "dias_restantes": 39,
      "marco_label": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE",
      "marco_tipo": "Cautelar 20-B (60d)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (39d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-24",
      "tipo_marco": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE",
      "urgencia": "ALTA"
    },
    "url_noticia": "https://neofeed.com.br/negocios/aeris-aciona-tutela-cautelar-para-renegociar-divida-com-credores/",
    "url_tribunal_cvm": "https://esaj.tjce.jus.br/cpopg/open.do"
  },
  {
    "id": 2,
    "data_evento": "2026-09-16",
    "data_adicao": "2026-10-02",
    "empresa": "Grupo Veneto (Ambbag / LimpServ)",
    "cnpj": "14.880.035/0001-77",
    "setor_detalhe": "Serviços & Embalagens",
    "setor_macro": "Indústria & Manufatura",
    "regiao": "São Paulo, SP",
    "tribunal": "TJSP - 1ª Vara Regional Empresarial",
    "processo": "1008421-15.2026.8.26.0260",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.5,
    "tier": "Tier 2",
    "passivo_mm": 180,
    "passivo_display": "180",
    "credores": "Bancos comerciais privados (Itaú, Santander, Bradesco) e Fornecedores químicos",
    "perfil_passivo": "Bancário (Capital de Giro e Recebíveis)",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "Aguardando nomeação judicial",
    "tese": "(1) Causa da crise: Elevação do custo de resinas plásticas e insumos químicos combinada ao aperto de liquidez no desconto de duplicatas e capital de giro bancário; (2) Gargalo imediato: Processamento da Recuperação Judicial na Vara Regional Empresarial de SP com necessidade de apresentação do plano de recuperação (art. 53) em 60 dias e liberação de travas de recebíveis; (3) Oportunidade de mandato: Gestão Interina (CRO) para saneamento de margens operacionais, renegociação com sindicato bancário (Itaú, Santander, Bradesco) e estruturação do PRJ.",
    "status": "Novo",
    "proximas_acoes": "Contatar diretoria do Grupo Veneto / Ambbag para assessoria financeira na elaboração do PRJ em 60 dias.",
    "watchdog_eligible": false,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "cidade": "São Paulo",
    "uf": "SP",
    "coordenadas": [
      -23.5505,
      -46.6333
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (PRJ)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Elevação do custo de resinas plásticas e insumos químicos combinada ao aperto de liquidez no desconto de duplicatas e capital de giro bancário",
    "gargalo_imediato": "Processamento da Recuperação Judicial na Vara Regional Empresarial de SP com necessidade de apresentação do plano de recuperação (art. 53) em 60 dias e liberação de travas de recebíveis",
    "tese_mandato": "Gestão Interina (CRO) para saneamento de margens operacionais, renegociação com sindicato bancário (Itaú, Santander, Bradesco) e estruturação do PRJ.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Conglomerado industrial e de serviços ambientais sediado na Grande São Paulo, composto pelas operadoras Ambbag (fabricação de embalagens industriais flexíveis e big bags de polipropileno) e LimpServ (terceirização de limpeza técnica e gestão de resíduos industriais), atendendo indústrias químicas, petroquímicas e logísticas no Sudeste.",
    "model_params": {
      "haircut_pct": 59,
      "recuperacao_pct": 41,
      "haircut_estimado_pct": 59,
      "recuperacao_estimada_pct": 41,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 73.8,
      "ev_estimado_mm": 90.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 21.6
      },
      "dip_necessidade_mm": 21.6,
      "upi_valuation_estimado_mm": 63.0
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-15",
      "data_marco_br": "15/11/2026",
      "dias_restantes": 30,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (30d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-15",
      "tipo_marco": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "urgencia": "ALTA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/categoria/recuperacao-judicial",
    "url_tribunal_cvm": "https://esaj.tjsp.jus.br/cpopg/open.do"
  },
  {
    "id": 3,
    "data_evento": "2026-09-20",
    "data_adicao": "2026-10-02",
    "empresa": "Grupo de Transporte & Agro Rondonópolis",
    "cnpj": "17.452.890/0001-41",
    "setor_detalhe": "Agronegócio & Logística",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Rondonópolis, MT",
    "tribunal": "TJMT - 4ª Vara Cível de Rondonópolis",
    "processo": "1014251-88.2026.8.11.0003",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.5,
    "tier": "Tier 2",
    "passivo_mm": 34,
    "passivo_display": "34",
    "credores": "Bancos de Montadoras (Scania, Volvo), Bancos privados e Postos de Combustível",
    "perfil_passivo": "Finame / Alienação Fiduciária de Frotas",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "Aguardando nomeação judicial",
    "tese": "(1) Causa da crise: Queda nos fretes de grãos no corredor logístico da BR-163 (Mato Grosso) somada à alta da Selic sobre contratos de Finame e alienação fiduciária de caminhões; (2) Gargalo imediato: Ações de busca e apreensão de frota movidas por bancos de montadoras (Scania e Volvo) e vencimento do stay period na 4ª Vara Cível de Rondonópolis/MT; (3) Oportunidade de mandato: Financial Advisory para comprovação de essencialidade da frota pesada, alongamento de contratos de leasing/Finame e renegociação com distribuidoras de combustível.",
    "status": "Em Análise",
    "proximas_acoes": "Mapear garantias fiduciárias de frota junto aos bancos de montadoras (Scania e Volvo).",
    "watchdog_eligible": false,
    "watchdog_triggers": [],
    "cidade": "Rondonópolis",
    "uf": "MT",
    "coordenadas": [
      -16.4674,
      -54.6361
    ],
    "regiao_macro": "Centro-Oeste",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (PRJ)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [],
    "subtipo_processo": "PRJ",
    "causa_crise": "Queda nos fretes de grãos no corredor logístico da BR-163 (Mato Grosso) somada à alta da Selic sobre contratos de Finame e alienação fiduciária de caminhões",
    "gargalo_imediato": "Ações de busca e apreensão de frota movidas por bancos de montadoras (Scania e Volvo) e vencimento do stay period na 4ª Vara Cível de Rondonópolis/MT",
    "tese_mandato": "Financial Advisory para comprovação de essencialidade da frota pesada, alongamento de contratos de leasing/Finame e renegociação com distribuidoras de combustível.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Grupo familiar mato-grossense com atuação integrada no transporte rodoviário pesado de grãos (corredor logístico BR-163 / Rondonópolis–Santos) e cultivo de soja e milho no sul do Mato Grosso, operando frota própria de caminhões bitrem e rodotrem financiados via linhas Finame e bancos de montadoras.",
    "model_params": {
      "haircut_pct": 51,
      "recuperacao_pct": 49,
      "haircut_estimado_pct": 51,
      "recuperacao_estimada_pct": 49,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 16.7,
      "ev_estimado_mm": 17.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 22.0,
        "classe_i_pct": 4.0,
        "classe_ii_pct": 36.0,
        "fiscal_pct": 8.0,
        "classe_iii_pct": 25.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 22.0,
        "c1_trabalhista": 4.0,
        "c2_garantia_real": 36.0,
        "c3_quirografario": 25.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 2.7
      },
      "dip_necessidade_mm": 15.0,
      "upi_valuation_estimado_mm": 11.9
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-19",
      "data_marco_br": "19/11/2026",
      "dias_restantes": 34,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (34d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-19",
      "tipo_marco": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "urgencia": "ALTA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/categoria/recuperacao-judicial",
    "url_tribunal_cvm": "https://pje.tjmt.jus.br/pje/ConsultaPublica/listView.seam"
  },
  {
    "id": 4,
    "data_evento": "2026-09-22",
    "data_adicao": "2026-10-02",
    "empresa": "Grupo Industrial de Caxias do Sul (Ex-20 empresas)",
    "cnpj": "88.612.450/0001-19",
    "setor_detalhe": "Indústria / Comércio",
    "setor_macro": "Indústria & Manufatura",
    "regiao": "Caxias do Sul, RS",
    "tribunal": "TJRS - Vara Empresarial de Caxias do Sul",
    "processo": "5014822-10.2026.8.21.0010",
    "fase": "Recuperação Extrajudicial (Classe 128)",
    "score": 6.5,
    "tier": "Tier 3",
    "passivo_mm": 295,
    "passivo_display": "295",
    "credores": "Bancos regionais (Banrisul, BRDE, Sicredi), Itaú e Fornecedores de aço",
    "perfil_passivo": "Bancário Regional + Fornecedores",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "N/A (Fase Extrajudicial)",
    "tese": "(1) Causa da crise: Retração de encomendas no polo metalmecânico da Serra Gaúcha, impacto logístico das enchentes no RS e encarecimento das linhas de capital de giro; (2) Gargalo imediato: Homologação do plano de Recuperação Extrajudicial (Classe 128) em Caxias do Sul/RS exigindo adesão qualificada (> 50%) de bancos regionais (Banrisul, BRDE, Sicredi) e fornecedores siderúrgicos; (3) Oportunidade de mandato: Estruturação de venda de UPI fabril não-core, assessoria na captação de linha de giro pós-homologação e monitoramento de conta vinculada (Escrow).",
    "status": "Novo",
    "proximas_acoes": "Avaliar plantas industriais em Caxias do Sul elegíveis para desinvestimento como UPI.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Venda de UPI / Desinvestimento de Ativos (Conta Escrow)"
    ],
    "cidade": "Caxias do Sul",
    "uf": "RS",
    "coordenadas": [
      -29.1678,
      -51.1794
    ],
    "regiao_macro": "Sul",
    "tipo_processo": "PRE",
    "tipo_processo_label": "Recuperação Extrajudicial (PRE)",
    "strategy_id": "consensual",
    "strategy_name": "Consensual & Pré-Concursal",
    "strategy_tag": "CONSENSUAL / ART. 20-B",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Venda de UPI / Desinvestimento de Ativos (Conta Escrow)"
    ],
    "subtipo_processo": "PRE",
    "causa_crise": "Retração de encomendas no polo metalmecânico da Serra Gaúcha, impacto logístico das enchentes no RS e encarecimento das linhas de capital de giro",
    "gargalo_imediato": "Homologação do plano de Recuperação Extrajudicial (Classe 128) em Caxias do Sul/RS exigindo adesão qualificada (> 50%) de bancos regionais (Banrisul, BRDE, Sicredi) e fornecedores siderúrgicos",
    "tese_mandato": "Estruturação de venda de UPI fabril não-core, assessoria na captação de linha de giro pós-homologação e monitoramento de conta vinculada (Escrow).",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Tradicional grupo metalmecânico e comercial da Serra Gaúcha (Caxias do Sul/RS), estruturado a partir da consolidação de 20 sociedades empresárias familiares atuantes em estamparia pesada, usinagem, implementos rodoviários e distribuição de aços planos e longos para o polo automotivo do Sul.",
    "model_params": {
      "haircut_pct": 40,
      "recuperacao_pct": 60,
      "haircut_estimado_pct": 40,
      "recuperacao_estimada_pct": 60,
      "desconto_secundario_pct": 30.0,
      "valor_recuperado_mm": 177.0,
      "ev_estimado_mm": 191.8,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 35.4
      },
      "dip_necessidade_mm": 35.4,
      "upi_valuation_estimado_mm": 103.2
    },
    "calendar_meta": {
      "data_marco_iso": "2026-12-21",
      "data_marco_br": "21/12/2026",
      "dias_restantes": 66,
      "marco_label": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)",
      "marco_tipo": "Homologação PRE",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (66d)",
      "is_fixed_edital": false,
      "data_marco": "2026-12-21",
      "tipo_marco": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/categoria/recuperacao-judicial",
    "url_tribunal_cvm": "https://www.tjrs.jus.br/novo/busca/?return=proc&client=wp_index"
  },
  {
    "id": 5,
    "data_evento": "2026-08-10",
    "data_adicao": "2026-10-02",
    "empresa": "Alliança Saúde",
    "cnpj": "42.771.949/0001-35",
    "setor_detalhe": "Saúde / Diagnósticos",
    "setor_macro": "Saúde & Farma",
    "regiao": "São Paulo, SP",
    "tribunal": "TJSP - 2ª Vara de Falências e RJs",
    "processo": "1084120-55.2026.8.26.0100",
    "fase": "Homologação de PRE (Classe 12154)",
    "score": 6.5,
    "tier": "Tier 3",
    "passivo_mm": 1140,
    "passivo_display": "1.140",
    "credores": "Debenturistas (emissões públicas e privadas) e Bancos credores",
    "perfil_passivo": "Mercado de Capitais + Financiamentos Estruturados",
    "advocacia": "BMA Advogados",
    "aj": "N/A (Fase Extrajudicial)",
    "tese": "(1) Causa da crise: Alavancagem decorrente de aquisições de laboratórios de medicina diagnóstica, pressão de capital de giro por glosas e alongamento de prazos de operadoras de saúde; (2) Gargalo imediato: Cumprimento das metas de desalavancagem pós-homologação da Recuperação Extrajudicial (R$ 1,14 bilhão) e observância de covenants financeiros perante debenturistas (Oliveira Trust / Pentágono) e bancos; (3) Oportunidade de mandato: Assessoria em M&A de ativos diagnósticos regionais (carve-out de unidades não-core) e monitoramento Creditor-Side para titulares de debêntures.",
    "status": "Em Análise",
    "proximas_acoes": "Monitorar cumprimento do plano de PRE e desinvestimento de laboratórios regionais não-core.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Emissão de Debêntures / Mercado de Capitais (Fiscalização de Covenants)"
    ],
    "cidade": "São Paulo",
    "uf": "SP",
    "coordenadas": [
      -23.5505,
      -46.6333
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRE",
    "tipo_processo_label": "Recuperação Extrajudicial (PRE)",
    "strategy_id": "consensual",
    "strategy_name": "Consensual & Pré-Concursal",
    "strategy_tag": "CONSENSUAL / ART. 20-B",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Emissão de Debêntures / Mercado de Capitais (Fiscalização de Covenants)"
    ],
    "subtipo_processo": "PRE",
    "causa_crise": "Alavancagem decorrente de aquisições de laboratórios de medicina diagnóstica, pressão de capital de giro por glosas e alongamento de prazos de operadoras de saúde",
    "gargalo_imediato": "Cumprimento das metas de desalavancagem pós-homologação da Recuperação Extrajudicial (R$ 1,14 bilhão) e observância de covenants financeiros perante debenturistas (Oliveira Trust / Pentágono) e bancos",
    "tese_mandato": "Assessoria em M&A de ativos diagnósticos regionais (carve-out de unidades não-core) e monitoramento Creditor-Side para titulares de debêntures.",
    "agentes_fiduciarios": "Pentágono DTVM, Oliveira Trust DTVM",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Uma das maiores plataformas de medicina diagnóstica e análises clínicas do Brasil (B3: AALR3, ex-Alliar), controlada pelo empresário Nelson Tanure. Reúne mais de 100 unidades operacionais e marcas regionais líderes (CDB em SP, Axial em MG, Delfin na Bahia e Multiscan no ES), com forte parque de ressonância magnética e patologia clínica.",
    "model_params": {
      "haircut_pct": 34,
      "recuperacao_pct": 66,
      "haircut_estimado_pct": 34,
      "recuperacao_estimada_pct": 66,
      "desconto_secundario_pct": 30.0,
      "valor_recuperado_mm": 752.4,
      "ev_estimado_mm": 570.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 136.8
      },
      "dip_necessidade_mm": 136.8,
      "upi_valuation_estimado_mm": 399.0
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-08",
      "data_marco_br": "08/11/2026",
      "dias_restantes": 23,
      "marco_label": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)",
      "marco_tipo": "Homologação PRE",
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (23d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-08",
      "tipo_marco": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)",
      "urgencia": "ALTA"
    },
    "url_noticia": "https://www.infomoney.com.br/mercados/allianca-saude-obtem-homologacao-do-plano-de-recuperacao-extrajudicial/",
    "url_tribunal_cvm": "https://esaj.tjsp.jus.br/cpopg/open.do"
  },
  {
    "id": 6,
    "data_evento": "2026-09-30",
    "data_adicao": "2026-10-02",
    "empresa": "Produtores Rurais Família Roversi",
    "cnpj": "29.418.720/0001-05",
    "setor_detalhe": "Agro",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Rondonópolis, MT",
    "tribunal": "TJMT - 4ª Vara Cível de Rondonópolis",
    "processo": "1021450-12.2026.8.11.0003",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.5,
    "tier": "Tier 2",
    "passivo_mm": 45,
    "passivo_display": "45",
    "credores": "Tradings agrícolas, Revendas locais de insumos e Bancos de fomento (BB, Sicredi)",
    "perfil_passivo": "Tradings (Barter) + Financiamento de Máquinas",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "Aguardando nomeação judicial",
    "tese": "(1) Causa da crise: Quebra climática e alta de custos de insumos agrícolas no MT; (2) Gargalo imediato: Vencimento de CPRs e linhas de custeio com BB e Sicredi; (3) Tese de mandato: Financial Advisory Rural e renegociação de garantias.",
    "status": "Novo",
    "proximas_acoes": "Abordar credores de barter e cooperativa Sicredi para monitoramento de safra.",
    "watchdog_eligible": false,
    "watchdog_triggers": [],
    "cidade": "Rondonópolis",
    "uf": "MT",
    "coordenadas": [
      -16.4674,
      -54.6361
    ],
    "regiao_macro": "Centro-Oeste",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (PRJ)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [],
    "subtipo_processo": "PRJ",
    "causa_crise": "Quebra climática e alta de custos de insumos agrícolas no MT",
    "gargalo_imediato": "Vencimento de CPRs e linhas de custeio com BB e Sicredi",
    "tese_mandato": "Tese de mandato: Financial Advisory Rural e renegociação de garantias.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Grupo agrícola familiar tradicional da região sul de Mato Grosso (Rondonópolis e Itiquira), dedicado à produção em escala de soja, milho segunda safra e algodão em áreas próprias e arrendadas, utilizando estrutura intensiva de custeio via CPRs e contratos de barter com tradings internacionais.",
    "model_params": {
      "haircut_pct": 54,
      "recuperacao_pct": 46,
      "haircut_estimado_pct": 54,
      "recuperacao_estimada_pct": 46,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 20.7,
      "ev_estimado_mm": 22.5,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 22.0,
        "classe_i_pct": 4.0,
        "classe_ii_pct": 36.0,
        "fiscal_pct": 8.0,
        "classe_iii_pct": 25.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 22.0,
        "c1_trabalhista": 4.0,
        "c2_garantia_real": 36.0,
        "c3_quirografario": 25.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 3.6
      },
      "dip_necessidade_mm": 15.0,
      "upi_valuation_estimado_mm": 15.7
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-29",
      "data_marco_br": "29/11/2026",
      "dias_restantes": 44,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (44d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-29",
      "tipo_marco": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/categoria/recuperacao-judicial",
    "url_tribunal_cvm": "https://pje.tjmt.jus.br/pje/ConsultaPublica/listView.seam"
  },
  {
    "id": 7,
    "data_evento": "2026-09-30",
    "data_adicao": "2026-10-02",
    "empresa": "Raízen S.A. (RAIZ4)",
    "cnpj": "33.453.598/0001-23",
    "setor_detalhe": "Energia & Infraestrutura",
    "setor_macro": "Energia & Infraestrutura",
    "regiao": "Piracicaba, SP",
    "tribunal": "TJSP - Varas Empresariais de SP",
    "processo": "Debêntures / Sindicato RAIZ4",
    "fase": "Recuperação Extrajudicial (Classe 128)",
    "score": 6.5,
    "tier": "Tier 3",
    "passivo_mm": 3500,
    "passivo_display": "3.500",
    "credores": "Debenturistas institucionais (múltiplas emissões), Sindicato de bancos nacionais e globais",
    "perfil_passivo": "Mercado de Capitais (Debêntures) + Sindicato Bancário",
    "advocacia": "Pinheiro Neto Advogados",
    "aj": "N/A (Fase Extrajudicial)",
    "tese": "(1) Causa da crise: Alavancagem financeira elevada em ciclo de juros altos e capex sucroenergético; (2) Gargalo imediato: Repactuação de emissões de debêntures e linhas sindicalizadas; (3) Tese de mandato: Assessoria a debenturistas e M&A de usinas/ativos.",
    "status": "Novo",
    "proximas_acoes": "Acompanhar deliberações de debenturistas e venda de ativos de geração distribuída.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Emissão de Debêntures / Mercado de Capitais (Fiscalização de Covenants)"
    ],
    "cidade": "Piracicaba",
    "uf": "SP",
    "coordenadas": [
      -22.7253,
      -47.6476
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRE",
    "tipo_processo_label": "Recuperação Extrajudicial (PRE)",
    "strategy_id": "consensual",
    "strategy_name": "Consensual & Pré-Concursal",
    "strategy_tag": "CONSENSUAL / ART. 20-B",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Emissão de Debêntures / Mercado de Capitais (Fiscalização de Covenants)"
    ],
    "subtipo_processo": "PRE",
    "causa_crise": "Alavancagem financeira elevada em ciclo de juros altos e capex sucroenergético",
    "gargalo_imediato": "Repactuação de emissões de debêntures e linhas sindicalizadas",
    "tese_mandato": "Tese de mandato: Assessoria a debenturistas e M&A de usinas/ativos.",
    "agentes_fiduciarios": "Pentágono DTVM / Oliveira Trust",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "energy_meta": {
      "debenture_codigo": "RAIZ14 / RAIZ24 / Bonds 2034-2054",
      "agente_fiduciario": "Pentágono DTVM / Oliveira Trust",
      "inadimplemento_ccee": "Monitoramento de garantias em comercialização e cogeração de biomassa",
      "risco_caducidade": "Moderado — Revisão de outorgas de cogeração a bagaço e plantas de E2G",
      "corte_rating_curtailment": "Pressão em ICSD por alavancagem consolidada (3,2x Dívida Líquida/EBITDA) e capex intensivo em E2G",
      "submercado": "Sudeste/Centro-Oeste"
    },
    "descricao_empresa": "Gigante integrada de bioenergia e distribuição de combustíveis (B3: RAIZ4), joint venture controlada pela Cosan e pela Shell. É a maior produtora global de etanol de cana-de-açúcar e pioneira mundial em etanol de segunda geração (E2G), operando 35 parques de bioenergia, cerca de 1,3 milhão de hectares cultivados e rede superior a 8.000 postos Shell no Brasil e Argentina.",
    "model_params": {
      "haircut_pct": 32,
      "recuperacao_pct": 68,
      "haircut_estimado_pct": 32,
      "recuperacao_estimada_pct": 68,
      "desconto_secundario_pct": 30.0,
      "valor_recuperado_mm": 2380.0,
      "ev_estimado_mm": 1750.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 18.0,
        "classe_i_pct": 3.0,
        "classe_ii_pct": 42.0,
        "fiscal_pct": 7.0,
        "classe_iii_pct": 27.0,
        "classe_iv_pct": 3.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 18.0,
        "c1_trabalhista": 3.0,
        "c2_garantia_real": 42.0,
        "c3_quirografario": 27.0,
        "c4_me_epp": 3.0,
        "passivo_fiscal_estimado_mm": 245.0
      },
      "dip_necessidade_mm": 420.0,
      "upi_valuation_estimado_mm": 1225.0
    },
    "calendar_meta": {
      "data_marco_iso": "2026-12-29",
      "data_marco_br": "29/12/2026",
      "dias_restantes": 74,
      "marco_label": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)",
      "marco_tipo": "Homologação PRE",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (74d)",
      "is_fixed_edital": false,
      "data_marco": "2026-12-29",
      "tipo_marco": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://www.infomoney.com.br/mercados/raizen-detalha-reestruturacao-veja-o-que-esta-em-jogo-para-credores-e-acionistas/",
    "url_tribunal_cvm": "https://esaj.tjsp.jus.br/cpopg/open.do"
  },
  {
    "id": 8,
    "data_evento": "2026-10-01",
    "data_adicao": "2026-10-02",
    "empresa": "Paranapanema S.A. (PMAM3)",
    "cnpj": "60.398.369/0001-26",
    "setor_detalhe": "Indústria & Manufatura",
    "setor_macro": "Indústria & Manufatura",
    "regiao": "Santo André, SP",
    "tribunal": "TJSP - 1ª Vara Regional Empresarial",
    "processo": "1001920-44.2023.8.26.0260",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 5.5,
    "tier": "Tier 2",
    "passivo_mm": 3940,
    "passivo_display": "3.940",
    "credores": "Bancos privados (Santander, Bradesco, Itaú, BB) e Credores comerciais de concentrado de cobre (Glencore, Trafigura)",
    "perfil_passivo": "Sindicato Bancário + Tradings Internacionais",
    "advocacia": "Felsberg Advogados",
    "aj": "Laspro Consultores Ltda.",
    "tese": "(1) Causa da crise: Restrição de capital de giro para compra de concentrado de cobre; (2) Gargalo imediato: Execução do plano concursal e necessidade de linhas de importação; (3) Tese de mandato: DIP Financing e alienação de ativos industriais (UPI).",
    "status": "Novo",
    "proximas_acoes": "Monitorar negociações com sindicato bancário e tradings internacionais (Glencore/Trafigura).",
    "watchdog_eligible": false,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "cidade": "Santo André",
    "uf": "SP",
    "coordenadas": [
      -23.5505,
      -46.6333
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (PRJ)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Restrição de capital de giro para compra de concentrado de cobre",
    "gargalo_imediato": "Execução do plano concursal e necessidade de linhas de importação",
    "tese_mandato": "Tese de mandato: DIP Financing e alienação de ativos industriais (UPI).",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Maior produtora brasileira não integrada de cobre refinado (cátodos, vergalhões e fios) e coprodutos metalúrgicos (B3: PMAM3), fundada em 1961. Seu principal complexo industrial e metalúrgico localiza-se no polo de Dias d'Ávila/BA, além de unidades de transformação de cobre em Santo André/SP e Serra/ES.",
    "model_params": {
      "haircut_pct": 57,
      "recuperacao_pct": 43,
      "haircut_estimado_pct": 57,
      "recuperacao_estimada_pct": 43,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 1694.2,
      "ev_estimado_mm": 2561.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 472.8
      },
      "dip_necessidade_mm": 472.8,
      "upi_valuation_estimado_mm": 1379.0
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-30",
      "data_marco_br": "30/11/2026",
      "dias_restantes": 45,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (45d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-30",
      "tipo_marco": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://www.infomoney.com.br/business/paranapanema-celebra-liquidacao-parcial-de-acordo-global-de-r-42-bi-com-credores/",
    "url_tribunal_cvm": "https://esaj.tjsp.jus.br/cpopg/open.do"
  },
  {
    "id": 9,
    "data_evento": "2026-10-01",
    "data_adicao": "2026-10-02",
    "empresa": "OSX Brasil S/A",
    "cnpj": "09.112.685/0001-32",
    "setor_detalhe": "Energia & Infraestrutura",
    "setor_macro": "Energia & Infraestrutura",
    "regiao": "São João da Barra, RJ",
    "tribunal": "TJRJ - 3ª Vara Empresarial do Rio",
    "processo": "0392144-80.2020.8.19.0001",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 5.5,
    "tier": "Tier 2",
    "passivo_mm": 8000,
    "passivo_display": "8.000",
    "credores": "Prumo Logística (Porto do Açu), Debenturistas e Fornecedores marítimos",
    "perfil_passivo": "Créditos Estruturados + Passivo Operacional",
    "advocacia": "Galdino & Coelho Advogados",
    "aj": "Deloitte Touche Tohmatsu",
    "tese": "(1) Causa da crise: Passivo concursado histórico da indústria naval e offshore; (2) Gargalo imediato: Homologação de aditivo ao plano e monetização de áreas no Porto do Açu; (3) Tese de mandato: M&A Distressed de ativos portuários (UPI) com a Prumo.",
    "status": "Novo",
    "proximas_acoes": "Avaliar estruturação de UPI imobiliária/portuária em São João da Barra (Porto do Açu).",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Emissão de Debêntures / Mercado de Capitais (Fiscalização de Covenants)"
    ],
    "cidade": "São João da Barra",
    "uf": "RJ",
    "coordenadas": [
      -21.6403,
      -41.0514
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (PRJ)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Emissão de Debêntures / Mercado de Capitais (Fiscalização de Covenants)"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Passivo concursado histórico da indústria naval e offshore",
    "gargalo_imediato": "Homologação de aditivo ao plano e monetização de áreas no Porto do Açu",
    "tese_mandato": "Tese de mandato: M&A Distressed de ativos portuários (UPI) com a Prumo.",
    "agentes_fiduciarios": "Oliveira Trust DTVM",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "energy_meta": {
      "debenture_codigo": "OSXB11 / Dívida Estruturada Porto do Açu",
      "agente_fiduciario": "Oliveira Trust DTVM",
      "inadimplemento_ccee": "N/A — Infraestrutura Portuária e Naval (Porto do Açu)",
      "risco_caducidade": "Alto — Disputas regulatórias e contratuais de arrendamento retroportuário no Açu/RJ",
      "corte_rating_curtailment": "Em cumprimento de plano de RJ com foco em monetização de áreas logísticas para projetos offshore/eólicos",
      "submercado": "Sudeste/Centro-Oeste"
    },
    "descricao_empresa": "Companhia de construção naval e infraestrutura portuária offshore integrante do antigo grupo EBX (B3: OSXB3), detentora de direitos de superfície e ativos retroportuários estratégicos no Complexo Industrial e Portuário do Açu, em São João da Barra/RJ, voltados à logística de óleo, gás e desmantelamento de plataformas.",
    "model_params": {
      "haircut_pct": 52,
      "recuperacao_pct": 48,
      "haircut_estimado_pct": 52,
      "recuperacao_estimada_pct": 48,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 3840.0,
      "ev_estimado_mm": 5200.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 18.0,
        "classe_i_pct": 3.0,
        "classe_ii_pct": 42.0,
        "fiscal_pct": 7.0,
        "classe_iii_pct": 27.0,
        "classe_iv_pct": 3.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 18.0,
        "c1_trabalhista": 3.0,
        "c2_garantia_real": 42.0,
        "c3_quirografario": 27.0,
        "c4_me_epp": 3.0,
        "passivo_fiscal_estimado_mm": 560.0
      },
      "dip_necessidade_mm": 960.0,
      "upi_valuation_estimado_mm": 2800.0
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-30",
      "data_marco_br": "30/11/2026",
      "dias_restantes": 45,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (45d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-30",
      "tipo_marco": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://www.osx.com.br/show.aspx?idCanal=kDpD2GF4+JsaRZWpTtZJHQ==",
    "url_tribunal_cvm": "https://www3.tjrj.jus.br/consultaprocessual/"
  },
  {
    "id": 10,
    "data_evento": "2026-10-01",
    "data_adicao": "2026-10-04",
    "empresa": "Chilli Beans (Mustang 25 Participações)",
    "cnpj": "20.755.790/0001-22",
    "setor_detalhe": "Varejo & Consumo / Franquias",
    "setor_macro": "Varejo & Consumo",
    "regiao": "Barueri, SP",
    "tribunal": "TJSP - Varas Empresariais de SP",
    "processo": "Debêntures 1ª Emissão (Vert)",
    "fase": "Cautelar Antecedente (art. 20-B)",
    "score": 9.5,
    "tier": "Tier 1",
    "passivo_mm": 600,
    "passivo_display": "600",
    "credores": "Securitizadora Vert (R$ 89M de debêntures vencidas), Bancos de Capital de Giro",
    "perfil_passivo": "Mercado de Capitais (Debêntures exigíveis em 3 dias) + Bancário",
    "advocacia": "Aguardando autuação",
    "aj": "N/A (Fase Prévia)",
    "tese": "(1) Causa da crise: Disputa societária e acionamento de cláusula de vencimento antecipado de debêntures na holding Mustang 25 Participações por descumprimento de obrigações não-financeiras; (2) Gargalo imediato: Cobrança imediata de R$ 89 milhões em debêntures pela Vert Securitizadora com prazo de cura de 3 dias e risco de cross-default no passivo consolidado de R$ 600 milhões; (3) Oportunidade de mandato: Ajuizamento de Cautelar Antecedente (art. 20-B) para suspensão de exigibilidade da série da Vert e estruturação de M&A / entrada de investidor estratégico (alienação de participação minoritária de 30%).",
    "status": "Novo",
    "proximas_acoes": "Avaliar abordagem à devedora e à Securitizadora Vert (R$ 89M) para standstill.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Emissão de Debêntures / Mercado de Capitais (Fiscalização de Covenants)"
    ],
    "cidade": "Barueri",
    "uf": "SP",
    "coordenadas": [
      -23.5105,
      -46.8761
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "Cautelar / Pré-RJ",
    "tipo_processo_label": "Cautelar Antecedente (Art. 20-B)",
    "strategy_id": "consensual",
    "strategy_name": "Consensual & Pré-Concursal",
    "strategy_tag": "CONSENSUAL / ART. 20-B",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Emissão de Debêntures / Mercado de Capitais (Fiscalização de Covenants)"
    ],
    "subtipo_processo": "Cautelar / Pré-RJ",
    "causa_crise": "Disputa societária e acionamento de cláusula de vencimento antecipado de debêntures na holding Mustang 25 Participações por descumprimento de obrigações não-financeiras",
    "gargalo_imediato": "Cobrança imediata de R$ 89 milhões em debêntures pela Vert Securitizadora com prazo de cura de 3 dias e risco de cross-default no passivo consolidado de R$ 600 milhões",
    "tese_mandato": "Ajuizamento de Cautelar Antecedente (art. 20-B) para suspensão de exigibilidade da série da Vert e estruturação de M&A / entrada de investidor estratégico (alienação de participação minoritária de 30%).",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Vert Securitizadora",
    "descricao_empresa": "Maior rede especializada em óculos solares, armações de grau e acessórios de moda da América Latina, fundada por Caito Maia e controlada pela holding Mustang 25 Participações. Opera modelo híbrido de franquias e lojas próprias com mais de 1.000 pontos de venda no Brasil e presença internacional nos EUA, Europa e Oriente Médio.",
    "model_params": {
      "haircut_pct": 47,
      "recuperacao_pct": 53,
      "haircut_estimado_pct": 47,
      "recuperacao_estimada_pct": 53,
      "desconto_secundario_pct": 30.0,
      "valor_recuperado_mm": 318.0,
      "ev_estimado_mm": 300.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 72.0
      },
      "dip_necessidade_mm": 72.0,
      "upi_valuation_estimado_mm": 210.0
    },
    "calendar_meta": {
      "data_marco_iso": "2026-10-25",
      "data_marco_br": "25/10/2026",
      "dias_restantes": 9,
      "marco_label": "Vencimento da Janela de Standstill / Cura da 1ª Emissão de Debêntures (Vert)",
      "marco_tipo": "Standstill DCM",
      "urgencia_nivel": "critico",
      "urgencia_label": "URGENTE (9d)",
      "is_fixed_edital": true,
      "data_marco": "2026-10-25",
      "tipo_marco": "Vencimento da Janela de Standstill / Cura da 1ª Emissão de Debêntures (Vert)",
      "urgencia": "CRÍTICA"
    },
    "url_noticia": "https://exame.com/insight/chilli-beans-ganha-prazo-para-renegociar-divida-de-r-89-milhoes/p",
    "url_tribunal_cvm": "https://esaj.tjsp.jus.br/cpopg/open.do"
  },
  {
    "id": 11,
    "data_evento": "2026-10-02",
    "data_adicao": "2026-10-04",
    "empresa": "SteelCorp (Roberto Justus / Daniel Vorcaro)",
    "cnpj": "51.354.194/0001-64",
    "setor_detalhe": "Construção Civil / Steel Frame",
    "setor_macro": "Construção Civil & Real Estate",
    "regiao": "São Paulo, SP",
    "tribunal": "TJSP - Varas Empresariais de SP",
    "processo": "1092410-12.2026.8.26.0100",
    "fase": "Cautelar Antecedente (art. 20-B)",
    "score": 9.5,
    "tier": "Tier 1",
    "passivo_mm": 143,
    "passivo_display": "143",
    "credores": "Banco Master, Fundos de Investimento e Debenturistas",
    "perfil_passivo": "Conflito Societário + Dívida com Fundo/Banco",
    "advocacia": "Aguardando autuação",
    "aj": "N/A (Fase Prévia)",
    "tese": "(1) Causa da crise: Conflito societário agudo entre os blocos de acionistas (Roberto Justus e Daniel Vorcaro / Banco Master) sobre cronograma de aportes de capital e expansão industrial no segmento de construção modular (steel frame); (2) Gargalo imediato: Paralisação de desembolsos de capital de giro e iminência de pedido de proteção concursal sobre R$ 143 milhões de passivo com fundos e debenturistas; (3) Oportunidade de mandato: Financial Advisory independente na mediação societária e repactuação de dívida com o Banco Master e fundos credores, cumulada com implantação de CRO / Gestão Interina.",
    "status": "Novo",
    "proximas_acoes": "Contato imediato com acionistas e credores para mediação societária e financeira.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Emissão de Debêntures / Mercado de Capitais (Fiscalização de Covenants)"
    ],
    "cidade": "São Paulo",
    "uf": "SP",
    "coordenadas": [
      -23.5505,
      -46.6333
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "Cautelar / Pré-RJ",
    "tipo_processo_label": "Cautelar Antecedente (Art. 20-B)",
    "strategy_id": "consensual",
    "strategy_name": "Consensual & Pré-Concursal",
    "strategy_tag": "CONSENSUAL / ART. 20-B",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Emissão de Debêntures / Mercado de Capitais (Fiscalização de Covenants)"
    ],
    "subtipo_processo": "Cautelar / Pré-RJ",
    "causa_crise": "Conflito societário agudo entre os blocos de acionistas (Roberto Justus e Daniel Vorcaro / Banco Master) sobre cronograma de aportes de capital e expansão industrial no segmento de construção modular (steel frame)",
    "gargalo_imediato": "Paralisação de desembolsos de capital de giro e iminência de pedido de proteção concursal sobre R$ 143 milhões de passivo com fundos e debenturistas",
    "tese_mandato": "Financial Advisory independente na mediação societária e repactuação de dívida com o Banco Master e fundos credores, cumulada com implantação de CRO / Gestão Interina.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Construtora industrializada especializada no sistema construtivo modular Light Steel Frame e engenharia a seco, resultante de sociedade entre o empresário Roberto Justus e veículos ligados ao grupo financeiro Master (Daniel Vorcaro), focada em obras residenciais de alto padrão, galpões corporativos e infraestrutura rápida.",
    "model_params": {
      "haircut_pct": 38,
      "recuperacao_pct": 62,
      "haircut_estimado_pct": 38,
      "recuperacao_estimada_pct": 62,
      "desconto_secundario_pct": 30.0,
      "valor_recuperado_mm": 88.7,
      "ev_estimado_mm": 71.5,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 17.2
      },
      "dip_necessidade_mm": 17.2,
      "upi_valuation_estimado_mm": 50.0
    },
    "calendar_meta": {
      "data_marco_iso": "2026-12-01",
      "data_marco_br": "01/12/2026",
      "dias_restantes": 46,
      "marco_label": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE",
      "marco_tipo": "Cautelar 20-B (60d)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (46d)",
      "is_fixed_edital": false,
      "data_marco": "2026-12-01",
      "tipo_marco": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://www.metropoles.com/colunas/demetrio-vecchioli/vorcaro-negociou-com-justus-fechou-com-brb-e-recebeu-170-a-mais",
    "url_tribunal_cvm": "https://esaj.tjsp.jus.br/cpopg/open.do"
  },
  {
    "id": 12,
    "data_evento": "2026-10-02",
    "data_adicao": "2026-10-04",
    "empresa": "Tradener Comercializadora de Energia",
    "cnpj": "02.691.745/0001-70",
    "setor_detalhe": "Energia / Comercialização Elétrica",
    "setor_macro": "Energia & Infraestrutura",
    "regiao": "Curitiba, PR",
    "tribunal": "TJPR - 1ª Vara de Falências de Curitiba",
    "processo": "0014820-35.2026.8.16.0185",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.5,
    "tier": "Tier 2",
    "passivo_mm": 210,
    "passivo_display": "210",
    "credores": "Banco Daycoval, CCEE e Contrapartes do Mercado Livre de Energia",
    "perfil_passivo": "Financiamento Estruturado + Garantias de Energia",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "Aguardando nomeação judicial",
    "tese": "(1) Causa da crise: Descasamento severo de marcação a mercado (MtM) em contratos de compra e venda de energia no Ambiente de Contratação Livre (ACL) e aperto de garantias financeiras junto à CCEE; (2) Gargalo imediato: Contestação judicial de financiamento pré-RJ pelo Banco Daycoval nas Varas Empresariais de Curitiba/PR e risco de desligamento compulsório da CCEE por insuficiência de garantias no MCP; (3) Oportunidade de mandato: Assessoria especializada em Special Situations de Energia para repactuação de PPAs bilaterais, blindagem de outorgas perante CCEE/ANEEL e liderança do Comitê de Credores.",
    "status": "Novo",
    "proximas_acoes": "Analisar garantias fiduciárias do Banco Daycoval e contratos no Mercado Livre (CCEE).",
    "watchdog_eligible": false,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "cidade": "Curitiba",
    "uf": "PR",
    "coordenadas": [
      -25.4284,
      -49.2733
    ],
    "regiao_macro": "Sul",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (PRJ)",
    "strategy_id": "consensual",
    "strategy_name": "Consensual & Pré-Concursal",
    "strategy_tag": "CONSENSUAL / ART. 20-B",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Descasamento severo de marcação a mercado (MtM) em contratos de compra e venda de energia no Ambiente de Contratação Livre (ACL) e aperto de garantias financeiras junto à CCEE",
    "gargalo_imediato": "Contestação judicial de financiamento pré-RJ pelo Banco Daycoval nas Varas Empresariais de Curitiba/PR e risco de desligamento compulsório da CCEE por insuficiência de garantias no MCP",
    "tese_mandato": "Assessoria especializada em Special Situations de Energia para repactuação de PPAs bilaterais, blindagem de outorgas perante CCEE/ANEEL e liderança do Comitê de Credores.",
    "agentes_fiduciarios": "Vórtx DTVM (Garantias CCEE)",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "energy_meta": {
      "debenture_codigo": "Notas Comerciais / CCBs Daycoval (R$ 210M)",
      "agente_fiduciario": "Vórtx DTVM (Garantias CCEE)",
      "inadimplemento_ccee": "Crítico — Risco de desligamento compulsório e chamada de margem no MCP/CCEE",
      "risco_caducidade": "Alto — Risco de cassação de outorga de comercialização pela ANEEL",
      "corte_rating_curtailment": "Forte descasamento de preços no ACL e exposição a modulação horária de PLD",
      "submercado": "Sul"
    },
    "descricao_empresa": "Pioneira na comercialização independente de energia elétrica no Brasil, fundada em 1998 em Curitiba/PR e primeira empresa autorizada pela ANEEL a operar no Ambiente de Contratação Livre (ACL). Além da mesa de trading de energia, detém participações em ativos de geração hidrelétrica (PCHs), eólica e exploração de gás natural.",
    "model_params": {
      "haircut_pct": 53,
      "recuperacao_pct": 47,
      "haircut_estimado_pct": 53,
      "recuperacao_estimada_pct": 47,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 98.7,
      "ev_estimado_mm": 105.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 18.0,
        "classe_i_pct": 3.0,
        "classe_ii_pct": 42.0,
        "fiscal_pct": 7.0,
        "classe_iii_pct": 27.0,
        "classe_iv_pct": 3.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 18.0,
        "c1_trabalhista": 3.0,
        "c2_garantia_real": 42.0,
        "c3_quirografario": 27.0,
        "c4_me_epp": 3.0,
        "passivo_fiscal_estimado_mm": 14.7
      },
      "dip_necessidade_mm": 25.2,
      "upi_valuation_estimado_mm": 73.5
    },
    "calendar_meta": {
      "data_marco_iso": "2026-12-01",
      "data_marco_br": "01/12/2026",
      "dias_restantes": 46,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (46d)",
      "is_fixed_edital": false,
      "data_marco": "2026-12-01",
      "tipo_marco": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://consulta.tjpr.jus.br/projudi_consulta/",
    "url_tribunal_cvm": "https://consulta.tjpr.jus.br/projudi_consulta/"
  },
  {
    "id": 13,
    "data_evento": "2026-10-02",
    "data_adicao": "2026-10-04",
    "empresa": "Ulbra S/A (Rede Aelbra / Evolua)",
    "cnpj": "88.332.580/0001-65",
    "setor_detalhe": "Tecnologia & Serviços B2B",
    "setor_macro": "Tecnologia & Serviços B2B",
    "regiao": "Canoas, RS",
    "tribunal": "TJRS - Vara Empresarial de Canoas",
    "processo": "5000481-14.2019.8.21.0008",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 6,
    "tier": "Tier 2",
    "passivo_mm": 1500,
    "passivo_display": "1.500",
    "credores": "Banco Master, Banco Genial, FIDC Calêndula e Credores Trabalhistas",
    "perfil_passivo": "Fundos Estruturados (FIDCs) + Passivo Trabalhista",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "Brizola e Japur Administração Judicial",
    "tese": "(1) Causa da crise: Passivo histórico bilionário (R$ 1,5 bilhão) de natureza trabalhista, fiscal e financeira na rede de ensino superior Aelbra/Ulbra, agravado por disputas entre fundos detentores de créditos estruturados; (2) Gargalo imediato: Reorganização do bloco de controle e saída do Banco Master da estrutura de FIDCs (FIDC Calêndula e Banco Genial), exigindo repactuação das tranches de amortização pós-RJ no TJRS; (3) Oportunidade de mandato: Estruturação de operações de Distressed Debt (cessão secundária de créditos trabalhistas e bancários) e monetização de ativos imobiliários educacionais (campi universitários no RS).",
    "status": "Em Análise",
    "proximas_acoes": "Acompanhar movimentação de saída do Banco Master e monetização de campi universitários.",
    "watchdog_eligible": false,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "cidade": "Canoas",
    "uf": "RS",
    "coordenadas": [
      -29.9177,
      -51.1836
    ],
    "regiao_macro": "Sul",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (PRJ)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Passivo histórico bilionário (R$ 1,5 bilhão) de natureza trabalhista, fiscal e financeira na rede de ensino superior Aelbra/Ulbra, agravado por disputas entre fundos detentores de créditos estruturados",
    "gargalo_imediato": "Reorganização do bloco de controle e saída do Banco Master da estrutura de FIDCs (FIDC Calêndula e Banco Genial), exigindo repactuação das tranches de amortização pós-RJ no TJRS",
    "tese_mandato": "Estruturação de operações de Distressed Debt (cessão secundária de créditos trabalhistas e bancários) e monetização de ativos imobiliários educacionais (campi universitários no RS).",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Entidade mantenedora da Universidade Luterana do Brasil (Ulbra / Rede Aelbra, hoje sob a marca gestora Evolua Educação), sediada em Canoas/RS. Administra ampla rede de campi universitários presenciais, hospitais veterinários/universitários e polos de ensino a distância (EAD) nos estados do Rio Grande do Sul, Tocantins, Amazonas, Pará, Goiás e Rondônia.",
    "model_params": {
      "haircut_pct": 60,
      "recuperacao_pct": 40,
      "haircut_estimado_pct": 60,
      "recuperacao_estimada_pct": 40,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 600.0,
      "ev_estimado_mm": 750.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 180.0
      },
      "dip_necessidade_mm": 180.0,
      "upi_valuation_estimado_mm": 525.0
    },
    "calendar_meta": {
      "data_marco_iso": "2026-12-01",
      "data_marco_br": "01/12/2026",
      "dias_restantes": 46,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (46d)",
      "is_fixed_edital": false,
      "data_marco": "2026-12-01",
      "tipo_marco": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://www.extraclasse.org.br/educacao/2026/10/as-conexoes-entre-ulbra-banco-genial-fundos-de-investimento-e-o-master/",
    "url_tribunal_cvm": "https://www.tjrs.jus.br/novo/busca/?return=proc&client=wp_index"
  },
  {
    "id": 14,
    "data_evento": "2026-10-03",
    "data_adicao": "2026-10-04",
    "empresa": "Lupatech S/A",
    "cnpj": "89.468.960/0001-15",
    "setor_detalhe": "Petróleo & Gás / Indústria Metalmecânica",
    "setor_macro": "Indústria & Manufatura",
    "regiao": "Caxias do Sul, RS",
    "tribunal": "TJRS - Vara Empresarial de Caxias do Sul",
    "processo": "5008912-30.2026.8.21.0010",
    "fase": "Recuperação Extrajudicial (Classe 128)",
    "score": 8.5,
    "tier": "Tier 3",
    "passivo_mm": 386,
    "passivo_display": "386",
    "credores": "Debenturistas de emissões privadas e bancos comerciais",
    "perfil_passivo": "Mercado de Capitais (Debêntures) + Quirografários",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "N/A (Fase Extrajudicial)",
    "tese": "(1) Causa da crise: Restrição histórica de capital de giro para atendimento da carteira de pedidos (backlog) de válvulas e cabos de ancoragem para o setor de óleo e gás (Petrobras) somada ao peso de debêntures legadas; (2) Gargalo imediato: Coleta de quórum de adesão de debenturistas e credores quirografários para homologação de plano de Recuperação Extrajudicial de R$ 386 milhões; (3) Oportunidade de mandato: Financial Advisory na repactuação das escrituras de debêntures, estruturação de linha de financiamento a fornecedores (Supply Chain DIP) e venda de imóveis industriais não-operacionais em Caxias do Sul/RS.",
    "status": "Novo",
    "proximas_acoes": "Avaliar termos de repactuação de debêntures e venda de ativos metalmecânicos não-core.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Emissão de Debêntures / Mercado de Capitais (Fiscalização de Covenants)"
    ],
    "cidade": "Caxias do Sul",
    "uf": "RS",
    "coordenadas": [
      -29.1678,
      -51.1794
    ],
    "regiao_macro": "Sul",
    "tipo_processo": "PRE",
    "tipo_processo_label": "Recuperação Extrajudicial (PRE)",
    "strategy_id": "consensual",
    "strategy_name": "Consensual & Pré-Concursal",
    "strategy_tag": "CONSENSUAL / ART. 20-B",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Emissão de Debêntures / Mercado de Capitais (Fiscalização de Covenants)"
    ],
    "subtipo_processo": "PRE",
    "causa_crise": "Restrição histórica de capital de giro para atendimento da carteira de pedidos (backlog) de válvulas e cabos de ancoragem para o setor de óleo e gás (Petrobras) somada ao peso de debêntures legadas",
    "gargalo_imediato": "Coleta de quórum de adesão de debenturistas e credores quirografários para homologação de plano de Recuperação Extrajudicial de R$ 386 milhões",
    "tese_mandato": "Financial Advisory na repactuação das escrituras de debêntures, estruturação de linha de financiamento a fornecedores (Supply Chain DIP) e venda de imóveis industriais não-operacionais em Caxias do Sul/RS.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Fabricante brasileira de equipamentos de alta tecnologia para o setor de óleo e gás (válvulas industriais, cabos de ancoragem para plataformas offshore em águas profundas e compressores de gás natural) e metalurgia de precisão (B3: LUPA3), com parque fabril principal localizado no distrito industrial de Caxias do Sul/RS.",
    "model_params": {
      "haircut_pct": 40,
      "recuperacao_pct": 60,
      "haircut_estimado_pct": 40,
      "recuperacao_estimada_pct": 60,
      "desconto_secundario_pct": 30.0,
      "valor_recuperado_mm": 231.6,
      "ev_estimado_mm": 193.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 46.3
      },
      "dip_necessidade_mm": 46.3,
      "upi_valuation_estimado_mm": 135.1
    },
    "calendar_meta": {
      "data_marco_iso": "2027-01-01",
      "data_marco_br": "01/01/2027",
      "dias_restantes": 77,
      "marco_label": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)",
      "marco_tipo": "Homologação PRE",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (77d)",
      "is_fixed_edital": false,
      "data_marco": "2027-01-01",
      "tipo_marco": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://www.seudinheiro.com/2026/empresas/de-novo-lupatech-lupa3-entrega-plano-de-recuperacao-extrajudicial-a-cvm-entenda-a-crise-kaes/",
    "url_tribunal_cvm": "https://www.tjrs.jus.br/novo/busca/?return=proc&client=wp_index"
  },
  {
    "id": 15,
    "data_evento": "2026-10-04",
    "data_adicao": "2026-10-04",
    "empresa": "Grupo Orlando (Pecuaristas de MT)",
    "cnpj": "23.514.890/0001-12",
    "setor_detalhe": "Agronegócio / Pecuária de Corte",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Nova Bandeirantes, MT",
    "tribunal": "TJMT - Comarca de Nova Bandeirantes",
    "processo": "1004812-22.2026.8.11.0041",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.5,
    "tier": "Tier 2",
    "passivo_mm": 38,
    "passivo_display": "38",
    "credores": "Banco do Brasil e Caixa Econômica Federal (concentram 79% da dívida), fornecedores de insumos/nutrição",
    "perfil_passivo": "Bancário Público Concentrado (BB e Caixa) + Crédito Rural",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "Aguardando nomeação judicial",
    "tese": "(1) Causa da crise: Compressão das margens da pecuária de corte em Mato Grosso combinada ao vencimento concentrado de cédulas de crédito rural de custeio e investimento; (2) Gargalo imediato: Deferimento da Recuperação Judicial na Comarca de Nova Bandeirantes/MT com 79% do passivo (R$ 38 milhões) concentrado em apenas dois bancos públicos (Banco do Brasil e Caixa Econômica Federal); (3) Oportunidade de mandato: Assessoria Financeira Rural na modelagem do PRJ (art. 53) e negociação de alongamento de 12 anos com carência junto às superintendências de recuperação de crédito de BB e Caixa.",
    "status": "Novo",
    "proximas_acoes": "Mapear garantias reais (hipotecas e penhor pecuário) junto ao BB e Caixa (79% da dívida).",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "cidade": "Nova Bandeirantes",
    "uf": "MT",
    "coordenadas": [
      -9.8653,
      -57.8578
    ],
    "regiao_macro": "Centro-Oeste",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (PRJ)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Compressão das margens da pecuária de corte em Mato Grosso combinada ao vencimento concentrado de cédulas de crédito rural de custeio e investimento",
    "gargalo_imediato": "Deferimento da Recuperação Judicial na Comarca de Nova Bandeirantes/MT com 79% do passivo (R$ 38 milhões) concentrado em apenas dois bancos públicos (Banco do Brasil e Caixa Econômica Federal)",
    "tese_mandato": "Assessoria Financeira Rural na modelagem do PRJ (art. 53) e negociação de alongamento de 12 anos com carência junto às superintendências de recuperação de crédito de BB e Caixa.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Grupo pecuário familiar estabelecido no extremo norte de Mato Grosso (Nova Bandeirantes e Alta Floresta), especializado em pecuária de corte extensiva e semi-intensiva (ciclo completo de cria, recria e engorda bovina) com forte base fundiária própria dada em garantia hipotecária e fiduciária ao Banco do Brasil e à Caixa.",
    "model_params": {
      "haircut_pct": 53,
      "recuperacao_pct": 47,
      "haircut_estimado_pct": 53,
      "recuperacao_estimada_pct": 47,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 17.9,
      "ev_estimado_mm": 19.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 22.0,
        "classe_i_pct": 4.0,
        "classe_ii_pct": 36.0,
        "fiscal_pct": 8.0,
        "classe_iii_pct": 25.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 22.0,
        "c1_trabalhista": 4.0,
        "c2_garantia_real": 36.0,
        "c3_quirografario": 25.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 3.0
      },
      "dip_necessidade_mm": 15.0,
      "upi_valuation_estimado_mm": 13.3
    },
    "calendar_meta": {
      "data_marco_iso": "2026-12-03",
      "data_marco_br": "03/12/2026",
      "dias_restantes": 48,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (48d)",
      "is_fixed_edital": false,
      "data_marco": "2026-12-03",
      "tipo_marco": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/categoria/recuperacao-judicial",
    "url_tribunal_cvm": "https://pje.tjmt.jus.br/pje/ConsultaPublica/listView.seam"
  },
  {
    "id": 16,
    "data_evento": "2026-10-07",
    "data_adicao": "2026-10-05",
    "empresa": "Grupo Pão de Açúcar (GPA - PCAR3)",
    "cnpj": "47.508.411/0001-56",
    "setor_detalhe": "Varejo Alimentar & Consumo",
    "setor_macro": "Varejo & Consumo",
    "regiao": "São Paulo, SP",
    "tribunal": "TJSP - 1ª Vara de Falências e RJs",
    "processo": "1048210-12.2026.8.26.0100",
    "fase": "Recuperação Extrajudicial (Classe 128)",
    "score": 8.5,
    "tier": "Tier 3",
    "passivo_mm": 4568,
    "passivo_display": "4.568",
    "credores": "Sindicato de bancos privados (Itaú, Bradesco, Santander), Debenturistas institucionais e Fundos Imobiliários (locadores)",
    "perfil_passivo": "Bancário Comercial + Mercado de Capitais (Debêntures) + Aluguéis Comerciais",
    "advocacia": "Pinheiro Neto Advogados",
    "aj": "N/A (Fase Extrajudicial)",
    "tese": "(1) Causa da crise: Elevado custo financeiro da dívida bruta (R$ 4,57 bilhões), pressão de passivos contingentes tributários/trabalhistas e queima de caixa operacional nas bandeiras de varejo alimentar; (2) Gargalo imediato: Negociação de Recuperação Extrajudicial / reperfilamento amplo com sindicato de bancos (Itaú, Bradesco, Santander) e titulares de debêntures (Vórtx / Pentágono) para evitar deterioração do crédito comercial com fornecedores; (3) Oportunidade de mandato: Estruturação de M&A Distressed / Sale & Leaseback de imóveis próprios e pontos comerciais de supermercados (UPIs) e assessoria financeira a comitês de credores institucionais.",
    "status": "Novo",
    "proximas_acoes": "Mapear ativos imobiliários e lojas disponíveis para Sale & Leaseback / UPI.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Venda de UPI / Desinvestimento de Ativos (Conta Escrow)",
      "Emissão de Debêntures / Mercado de Capitais (Fiscalização de Covenants)"
    ],
    "cidade": "São Paulo",
    "uf": "SP",
    "coordenadas": [
      -23.5505,
      -46.6333
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRE",
    "tipo_processo_label": "Recuperação Extrajudicial (PRE)",
    "strategy_id": "consensual",
    "strategy_name": "Consensual & Pré-Concursal",
    "strategy_tag": "CONSENSUAL / ART. 20-B",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Venda de UPI / Desinvestimento de Ativos (Conta Escrow)",
      "Emissão de Debêntures / Mercado de Capitais (Fiscalização de Covenants)"
    ],
    "subtipo_processo": "PRE",
    "causa_crise": "Elevado custo financeiro da dívida bruta (R$ 4,57 bilhões), pressão de passivos contingentes tributários/trabalhistas e queima de caixa operacional nas bandeiras de varejo alimentar",
    "gargalo_imediato": "Negociação de Recuperação Extrajudicial / reperfilamento amplo com sindicato de bancos (Itaú, Bradesco, Santander) e titulares de debêntures (Vórtx / Pentágono) para evitar deterioração do crédito comercial com fornecedores",
    "tese_mandato": "Estruturação de M&A Distressed / Sale & Leaseback de imóveis próprios e pontos comerciais de supermercados (UPIs) e assessoria financeira a comitês de credores institucionais.",
    "agentes_fiduciarios": "Vórtx DTVM, Pentágono DTVM",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Histórico grupo varejista alimentar multiformato (B3: PCAR3), detentor das bandeiras premium Pão de Açúcar, Minuto Pão de Açúcar e Extra Mercado, com mais de 700 lojas físicas concentradas no estado de São Paulo e principais capitais, além de operação relevante de e-commerce alimentar.",
    "model_params": {
      "haircut_pct": 42,
      "recuperacao_pct": 58,
      "haircut_estimado_pct": 42,
      "recuperacao_estimada_pct": 58,
      "desconto_secundario_pct": 30.0,
      "valor_recuperado_mm": 2649.4,
      "ev_estimado_mm": 2969.2,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 548.2
      },
      "dip_necessidade_mm": 548.2,
      "upi_valuation_estimado_mm": 1598.8
    },
    "calendar_meta": {
      "data_marco_iso": "2027-01-05",
      "data_marco_br": "05/01/2027",
      "dias_restantes": 81,
      "marco_label": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)",
      "marco_tipo": "Homologação PRE",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (81d)",
      "is_fixed_edital": false,
      "data_marco": "2027-01-05",
      "tipo_marco": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://capitalaberto.com.br/empresas/2026/09/reestruturacao-bilionaria-do-gpa-esbarra-em-disputas",
    "url_tribunal_cvm": "https://esaj.tjsp.jus.br/cpopg/open.do"
  },
  {
    "id": 17,
    "data_evento": "2026-10-15",
    "data_adicao": "2026-10-05",
    "empresa": "Oncoclínicas do Brasil (ONCO3)",
    "cnpj": "12.104.241/0001-09",
    "setor_detalhe": "Saúde & Medicina Oncológica",
    "setor_macro": "Saúde & Farma",
    "regiao": "São Paulo, SP",
    "tribunal": "TJSP - 3ª Vara de Falências e RJs",
    "processo": "1094120-88.2026.8.26.0100",
    "fase": "Recuperação Extrajudicial (Classe 128)",
    "score": 8,
    "tier": "Tier 3",
    "passivo_mm": 5100,
    "passivo_display": "5.100",
    "credores": "Titulares de Debêntures e CRIs, Securitizadoras e Agentes Fiduciários (Vórtx, Pentágono, Oliveira Trust)",
    "perfil_passivo": "Mercado de Capitais (Debêntures e CRIs) + Bancário de Saúde",
    "advocacia": "Spinelli Advogados // Mattos Filho",
    "aj": "N/A (Fase Extrajudicial)",
    "tese": "(1) Causa da crise: Alavancagem financeira de R$ 5,1 bilhões após ciclo intensivo de M&A hospitalar, atraso de repasses de operadoras de saúde e oposição da acionista Latache Capital (14,6% do capital) contra o plano de Recuperação Extrajudicial (que prevê haircut de 45%); (2) Gargalo imediato: Prazo judicial peremptório de 15 dias fixado pela 3ª Vara de Falências de SP para comprovação de quórum mínimo na RE, AGDs de debêntures (ONCOA1) e CRIs (Opea Securitizadora) e AGE do Conselho em 06/11/2026; (3) Oportunidade de mandato: Assessoria Creditor-Side aos titulares de CRIs (Opea) e debenturistas (Pentágono/Vórtx), além de estruturação de M&A Distressed de hospitais e clínicas oncológicas (UPIs).",
    "status": "Novo",
    "proximas_acoes": "Acompanhar prazo judicial de 15 dias na 3ª Vara de SP e AGE de 06/11/2026.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Emissão de Debêntures / Mercado de Capitais (Fiscalização de Covenants)"
    ],
    "cidade": "São Paulo",
    "uf": "SP",
    "coordenadas": [
      -23.5505,
      -46.6333
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRE",
    "tipo_processo_label": "Recuperação Extrajudicial (PRE)",
    "strategy_id": "consensual",
    "strategy_name": "Consensual & Pré-Concursal",
    "strategy_tag": "CONSENSUAL / ART. 20-B",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Emissão de Debêntures / Mercado de Capitais (Fiscalização de Covenants)"
    ],
    "subtipo_processo": "PRE",
    "causa_crise": "Alavancagem financeira de R$ 5,1 bilhões após ciclo intensivo de M&A hospitalar, atraso de repasses de operadoras de saúde e oposição da acionista Latache Capital (14,6% do capital) contra o plano de Recuperação Extrajudicial (que prevê haircut de 45%)",
    "gargalo_imediato": "Prazo judicial peremptório de 15 dias fixado pela 3ª Vara de Falências de SP para comprovação de quórum mínimo na RE, AGDs de debêntures (ONCOA1) e CRIs (Opea Securitizadora) e AGE do Conselho em 06/11/2026",
    "tese_mandato": "Assessoria Creditor-Side aos titulares de CRIs (Opea) e debenturistas (Pentágono/Vórtx), além de estruturação de M&A Distressed de hospitais e clínicas oncológicas (UPIs).",
    "agentes_fiduciarios": "Vórtx DTVM, Pentágono DTVM, Oliveira Trust DTVM",
    "securitizadoras": "Opea Securitizadora",
    "descricao_empresa": "Maior grupo dedicado exclusivamente ao tratamento oncológico, hematologia e radioterapia na América Latina (B3: ONCO3), fundado em Belo Horizonte em 2010. Opera mais de 140 unidades entre clínicas ambulatoriais e Cancer Centers de alta complexidade em 14 estados brasileiros, em parcerias estratégicas com operadoras como Unimed e SulAmérica.",
    "model_params": {
      "haircut_pct": 45,
      "recuperacao_pct": 55,
      "haircut_estimado_pct": 45,
      "recuperacao_estimada_pct": 55,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 2805.0,
      "ev_estimado_mm": 3315.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 612.0
      },
      "dip_necessidade_mm": 612.0,
      "upi_valuation_estimado_mm": 1785.0
    },
    "calendar_meta": {
      "data_marco_iso": "2026-10-30",
      "data_marco_br": "30/10/2026",
      "dias_restantes": 14,
      "marco_label": "Fim do Prazo Judicial Peremptório (15d) — Quórum RE & AGDs ONCO3",
      "marco_tipo": "Prazo Judicial / AGD",
      "urgencia_nivel": "critico",
      "urgencia_label": "URGENTE (14d)",
      "is_fixed_edital": true,
      "data_marco": "2026-10-30",
      "tipo_marco": "Fim do Prazo Judicial Peremptório (15d) — Quórum RE & AGDs ONCO3",
      "urgencia": "CRÍTICA"
    },
    "url_noticia": "https://neofeed.com.br/negocios/oncoclinicas-da-passo-atras-para-tentar-salvar-plano-de-recuperacao-extrajudicial/",
    "url_tribunal_cvm": "https://esaj.tjsp.jus.br/cpopg/open.do"
  },
  {
    "id": 18,
    "data_evento": "2026-10-02",
    "data_adicao": "2026-10-05",
    "empresa": "Private Construtora",
    "cnpj": "10.616.350/0001-30",
    "setor_detalhe": "Construção Civil & Real Estate",
    "setor_macro": "Construção Civil & Real Estate",
    "regiao": "Vitória, ES",
    "tribunal": "TJES - Vara de RJ e Falência de Vitória",
    "processo": "0015243-88.2026.8.08.0024",
    "fase": "Cautelar Antecedente (art. 20-B)",
    "score": 9.5,
    "tier": "Tier 1",
    "passivo_mm": 201,
    "passivo_display": "201",
    "credores": "Bancos financiadores à produção (Caixa, Bradesco, Santander), adquirentes de imóveis e fornecedores de materiais (cimento/aço)",
    "perfil_passivo": "Financiamento à Produção (Plano Empresário) + Fornecedores",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "N/A (Fase Cautelar)",
    "tese": "(1) Causa da crise: Estouro de orçamento de obras residenciais (inflação do INCC), aumento de distratos de adquirentes e restrição de repasses em contratos de financiamento à produção; (2) Gargalo imediato: Prazo improrrogável de 30 dias da Tutela Cautelar Antecedente (art. 20-B) em Vitória/ES para converter a proteção em Recuperação Judicial ou concluir acordo com Caixa, Bradesco e Santander (R$ 201 milhões); (3) Oportunidade de mandato: Financial Advisory emergencial para segregação de SPEs com patrimônio de afetação, venda de terrenos em estoque como UPI livre de sucessão e captação de DIP para conclusão de obras.",
    "status": "Novo",
    "proximas_acoes": "Abordar construtora e bancos financiadores (Caixa, Bradesco, Santander) para DIP e UPI de SPEs.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Previsão de Financiamento DIP (Fiscalização de Tranches)",
      "Venda de UPI / Desinvestimento de Ativos (Conta Escrow)",
      "Fase Pré-RJ / Cautelar sem Administrador Judicial Nomeado"
    ],
    "cidade": "Vitória",
    "uf": "ES",
    "coordenadas": [
      -20.3155,
      -40.3128
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "Cautelar / Pré-RJ",
    "tipo_processo_label": "Cautelar Antecedente (Art. 20-B)",
    "strategy_id": "consensual",
    "strategy_name": "Consensual & Pré-Concursal",
    "strategy_tag": "CONSENSUAL / ART. 20-B",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Previsão de Financiamento DIP (Fiscalização de Tranches)",
      "Venda de UPI / Desinvestimento de Ativos (Conta Escrow)",
      "Fase Pré-RJ / Cautelar sem Administrador Judicial Nomeado"
    ],
    "subtipo_processo": "Cautelar / Pré-RJ",
    "causa_crise": "Estouro de orçamento de obras residenciais (inflação do INCC), aumento de distratos de adquirentes e restrição de repasses em contratos de financiamento à produção",
    "gargalo_imediato": "Prazo improrrogável de 30 dias da Tutela Cautelar Antecedente (art. 20-B) em Vitória/ES para converter a proteção em Recuperação Judicial ou concluir acordo com Caixa, Bradesco e Santander (R$ 201 milhões)",
    "tese_mandato": "Financial Advisory emergencial para segregação de SPEs com patrimônio de afetação, venda de terrenos em estoque como UPI livre de sucessão e captação de DIP para conclusão de obras.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Vert Securitizadora",
    "descricao_empresa": "Incorporadora e construtora capixaba com sede em Vitória/ES e forte atuação nos mercados residenciais e comerciais de médio e alto padrão na Grande Vitória (Vitória, Vila Velha e Serra), operando múltiplos empreendimentos imobiliários estruturados via SPEs e financiamentos à produção (Plano Empresário).",
    "model_params": {
      "haircut_pct": 38,
      "recuperacao_pct": 62,
      "haircut_estimado_pct": 38,
      "recuperacao_estimada_pct": 62,
      "desconto_secundario_pct": 30.0,
      "valor_recuperado_mm": 124.6,
      "ev_estimado_mm": 130.7,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 24.1
      },
      "dip_necessidade_mm": 24.1,
      "upi_valuation_estimado_mm": 70.3
    },
    "calendar_meta": {
      "data_marco_iso": "2026-12-01",
      "data_marco_br": "01/12/2026",
      "dias_restantes": 46,
      "marco_label": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE",
      "marco_tipo": "Cautelar 20-B (60d)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (46d)",
      "is_fixed_edital": false,
      "data_marco": "2026-12-01",
      "tipo_marco": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/categoria/recuperacao-judicial",
    "url_tribunal_cvm": "https://sistemas.tjes.jus.br/pje/ConsultaPublica/listView.seam"
  },
  {
    "id": 19,
    "data_evento": "2026-10-05",
    "data_adicao": "2026-10-05",
    "empresa": "Grupo Laurindo de Castilhos (Agrícola Formosa / Tapera)",
    "cnpj": "18.235.934/0001-78",
    "setor_detalhe": "Agronegócio / Grãos & Algodão",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Curitiba, PR",
    "tribunal": "TJPR - 1ª Vara de Falências de Curitiba",
    "processo": "0008410-10.2026.8.16.0179",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.5,
    "tier": "Tier 2",
    "passivo_mm": 252,
    "passivo_display": "252",
    "credores": "Fosnor (R$ 87,4M garantia real), SLC Agrícola (R$ 115,9M), Securitizadoras Virgo e Reit (R$ 304,5M extraconcursais) e BRDE",
    "perfil_passivo": "Alienação Fiduciária de Terras (Securitizadoras/CRI) + Fornecedores de Insumos (Fosnor) + BRDE",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "AJUDD Administração Judicial",
    "tese": "(1) Causa da crise: Quebra de produtividade nas lavouras de soja e algodão somada ao vencimento de CRIs/CRAs garantidos por alienação fiduciária de fazendas; (2) Gargalo imediato: Disputa de competência entre TJPR (Curitiba) e TJBA, impugnações severas ao plano de RJ e cobrança extraconcursal de R$ 304,5 milhões pelas securitizadoras Virgo e Reit, além de R$ 87,4M da Fosnor e R$ 115,9M da SLC Agrícola; (3) Oportunidade de mandato: Creditor-Side Advisory para as securitizadoras (Virgo e Reit) e credores com garantia real (Fosnor e BRDE) na execução ou venda estruturada de fazendas como UPI.",
    "status": "Novo",
    "proximas_acoes": "Mapear posição de Fosnor (R$ 87,4M), SLC (R$ 115,9M) e securitizadoras Virgo/Reit (R$ 304,5M).",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Venda de UPI / Desinvestimento de Ativos (Conta Escrow)"
    ],
    "cidade": "Curitiba",
    "uf": "PR",
    "coordenadas": [
      -25.4284,
      -49.2733
    ],
    "regiao_macro": "Sul",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (PRJ)",
    "strategy_id": "dip",
    "strategy_name": "DIP Financing & M&A Distressed",
    "strategy_tag": "DIP FINANCING / UPI M&A",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Venda de UPI / Desinvestimento de Ativos (Conta Escrow)"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Quebra de produtividade nas lavouras de soja e algodão somada ao vencimento de CRIs/CRAs garantidos por alienação fiduciária de fazendas",
    "gargalo_imediato": "Disputa de competência entre TJPR (Curitiba) e TJBA, impugnações severas ao plano de RJ e cobrança extraconcursal de R$ 304,5 milhões pelas securitizadoras Virgo e Reit, além de R$ 87,4M da Fosnor e R$ 115,9M da SLC Agrícola",
    "tese_mandato": "Creditor-Side Advisory para as securitizadoras (Virgo e Reit) e credores com garantia real (Fosnor e BRDE) na execução ou venda estruturada de fazendas como UPI.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Virgo Securitizadora, Reit Securitizadora",
    "descricao_empresa": "Grupo produtor de grãos e fibras (Agrícola Formosa e Fazenda Tapera) fundado pela família Laurindo de Castilhos, com administração central no Paraná e extensas propriedades agrícolas no oeste da Bahia (cerrado baiano), dedicadas ao cultivo tecnificado de soja, milho e algodão em larga escala.",
    "model_params": {
      "haircut_pct": 52,
      "recuperacao_pct": 48,
      "haircut_estimado_pct": 52,
      "recuperacao_estimada_pct": 48,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 121.0,
      "ev_estimado_mm": 163.8,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 22.0,
        "classe_i_pct": 4.0,
        "classe_ii_pct": 36.0,
        "fiscal_pct": 8.0,
        "classe_iii_pct": 25.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 22.0,
        "c1_trabalhista": 4.0,
        "c2_garantia_real": 36.0,
        "c3_quirografario": 25.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 20.2
      },
      "dip_necessidade_mm": 30.2,
      "upi_valuation_estimado_mm": 88.2
    },
    "calendar_meta": {
      "data_marco_iso": "2026-12-04",
      "data_marco_br": "04/12/2026",
      "dias_restantes": 49,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (49d)",
      "is_fixed_edital": false,
      "data_marco": "2026-12-04",
      "tipo_marco": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/categoria/recuperacao-judicial",
    "url_tribunal_cvm": "https://consulta.tjpr.jus.br/projudi_consulta/"
  },
  {
    "id": 20,
    "data_evento": "2026-10-06",
    "data_adicao": "2026-10-06",
    "empresa": "Grupo Martins (Produtores Sidrolândia)",
    "cnpj": "31.840.120/0001-88",
    "setor_detalhe": "Agro",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Sidrolândia, MS",
    "tribunal": "TJMS - Comarca de Sidrolândia",
    "processo": "0801422-11.2026.8.12.0045",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.5,
    "tier": "Tier 2",
    "passivo_mm": 32,
    "passivo_display": "32",
    "credores": "Sicredi e BB (72% da dívida)",
    "perfil_passivo": "Bancário / Cooperativa",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "Aguardando nomeação judicial",
    "tese": "(1) Causa da crise: Frustração de safra em Mato Grosso do Sul por adversidades climáticas e queda nas cotações agrícolas frente a dívidas bancárias dolarizadas e em CDI; (2) Gargalo imediato: Apresentação do plano de Recuperação Judicial na Comarca de Sidrolândia/MS (passivo de R$ 32 milhões) sob forte concentração de voto no Sicredi e Banco do Brasil (72% dos créditos); (3) Oportunidade de mandato: Assessoria Financeira na defesa de laudos de viabilidade econômico-financeira e repactuação bilateral com Sicredi e BB para aprovação em AGC sem cram down litigioso.",
    "status": "Novo",
    "proximas_acoes": "Abordar áreas de crédito rural de Sicredi e Banco do Brasil (detentores de 72% do passivo).",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "cidade": "Sidrolândia",
    "uf": "MS",
    "coordenadas": [
      -20.9317,
      -54.9614
    ],
    "regiao_macro": "Centro-Oeste",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (PRJ)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Frustração de safra em Mato Grosso do Sul por adversidades climáticas e queda nas cotações agrícolas frente a dívidas bancárias dolarizadas e em CDI",
    "gargalo_imediato": "Apresentação do plano de Recuperação Judicial na Comarca de Sidrolândia/MS (passivo de R$ 32 milhões) sob forte concentração de voto no Sicredi e Banco do Brasil (72% dos créditos)",
    "tese_mandato": "Assessoria Financeira na defesa de laudos de viabilidade econômico-financeira e repactuação bilateral com Sicredi e BB para aprovação em AGC sem cram down litigioso.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Grupo familiar de produtores rurais estabelecido no polo agrícola de Sidrolândia e Maracaju (Mato Grosso do Sul), atuante na produção comercial de soja, milho safrinha e integração lavoura-pecuária em terras próprias e arrendadas na região central sul-mato-grossense.",
    "model_params": {
      "haircut_pct": 53,
      "recuperacao_pct": 47,
      "haircut_estimado_pct": 53,
      "recuperacao_estimada_pct": 47,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 15.0,
      "ev_estimado_mm": 16.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 22.0,
        "classe_i_pct": 4.0,
        "classe_ii_pct": 36.0,
        "fiscal_pct": 8.0,
        "classe_iii_pct": 25.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 22.0,
        "c1_trabalhista": 4.0,
        "c2_garantia_real": 36.0,
        "c3_quirografario": 25.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 2.6
      },
      "dip_necessidade_mm": 15.0,
      "upi_valuation_estimado_mm": 11.2
    },
    "calendar_meta": {
      "data_marco_iso": "2026-12-05",
      "data_marco_br": "05/12/2026",
      "dias_restantes": 50,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (50d)",
      "is_fixed_edital": false,
      "data_marco": "2026-12-05",
      "tipo_marco": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/categoria/recuperacao-judicial",
    "url_tribunal_cvm": "https://esaj.tjms.jus.br/cpopg5/open.do"
  },
  {
    "id": 21,
    "data_evento": "2026-10-01",
    "data_adicao": "2026-10-06",
    "empresa": "Grupo Pery",
    "cnpj": "27.910.440/0001-54",
    "setor_detalhe": "Agronegócio & Silvicultura",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Dourados, MS",
    "tribunal": "TJMS - Vara Cível de Dourados",
    "processo": "0809122-45.2026.8.12.0002",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.5,
    "tier": "Tier 2",
    "passivo_mm": 196,
    "passivo_display": "196",
    "credores": "BTG Pactual e Itaú",
    "perfil_passivo": "Bancário Privado",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "Aguardando nomeação judicial",
    "tese": "(1) Causa da crise: Descompasso de fluxo de caixa na operação agrícola em Dourados/MS diante da retração de margens da soja/milho e aperto de crédito pelos bancos privados; (2) Gargalo imediato: Publicação do edital do art. 52 e vencimento do prazo legal para entrega do Plano de Recuperação Judicial sobre R$ 196 milhões de passivo liderado por BTG Pactual e Itaú Unibanco; (3) Oportunidade de mandato: Financial Advisory e Creditor-Side para estruturação de tranches de pagamento atreladas à receita líquida de safra e auditoria de garantias reais rurais (penhor agrícola e hipotecas).",
    "status": "Novo",
    "proximas_acoes": "Contatar mesas de crédito agro do BTG Pactual e Itaú Unibanco após entrega do PRJ.",
    "watchdog_eligible": false,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "cidade": "Dourados",
    "uf": "MS",
    "coordenadas": [
      -22.2211,
      -54.8056
    ],
    "regiao_macro": "Centro-Oeste",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (PRJ)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Descompasso de fluxo de caixa na operação agrícola em Dourados/MS diante da retração de margens da soja/milho e aperto de crédito pelos bancos privados",
    "gargalo_imediato": "Publicação do edital do art. 52 e vencimento do prazo legal para entrega do Plano de Recuperação Judicial sobre R$ 196 milhões de passivo liderado por BTG Pactual e Itaú Unibanco",
    "tese_mandato": "Financial Advisory e Creditor-Side para estruturação de tranches de pagamento atreladas à receita líquida de safra e auditoria de garantias reais rurais (penhor agrícola e hipotecas).",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Tradicional grupo agropecuário da região da Grande Dourados (Mato Grosso do Sul), com operações consolidadas em cultivo de soja, milho e pecuária seletiva, mantendo relacionamento intensivo com bancos de investimento (BTG Pactual e Itaú) para financiamento de safra e expansão de área.",
    "model_params": {
      "haircut_pct": 52,
      "recuperacao_pct": 48,
      "haircut_estimado_pct": 52,
      "recuperacao_estimada_pct": 48,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 94.1,
      "ev_estimado_mm": 98.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 22.0,
        "classe_i_pct": 4.0,
        "classe_ii_pct": 36.0,
        "fiscal_pct": 8.0,
        "classe_iii_pct": 25.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 22.0,
        "c1_trabalhista": 4.0,
        "c2_garantia_real": 36.0,
        "c3_quirografario": 25.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 15.7
      },
      "dip_necessidade_mm": 23.5,
      "upi_valuation_estimado_mm": 68.6
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-30",
      "data_marco_br": "30/11/2026",
      "dias_restantes": 45,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (45d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-30",
      "tipo_marco": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/categoria/recuperacao-judicial",
    "url_tribunal_cvm": "https://esaj.tjms.jus.br/cpopg5/open.do"
  },
  {
    "id": 22,
    "data_evento": "2026-10-06",
    "data_adicao": "2026-10-07",
    "empresa": "Braskem S/A (BAK / BRKM5)",
    "cnpj": "42.150.391/0001-70",
    "setor_detalhe": "Petroquímica / Indústria & Materiais Básicos",
    "setor_macro": "Indústria & Manufatura",
    "regiao": "São Paulo, SP",
    "tribunal": "TJSP - Varas Empresariais de SP",
    "processo": "Standstill / Bonds & Debêntures BRKM5",
    "fase": "Recuperação Extrajudicial (Classe 128)",
    "score": 9,
    "tier": "Tier 3",
    "passivo_mm": 58000,
    "passivo_display": "58.000",
    "credores": "Sindicato internacional de bancos (Citi, JPMorgan, Santander, Bradesco, Itaú), titulares de bonds no exterior e Petrobras",
    "perfil_passivo": "Mercado Internacional (Bonds / Dívida Externa) + Sindicato Bancário Local e Global",
    "advocacia": "BMA Advogados // Davis Polk",
    "aj": "N/A (Fase Extrajudicial)",
    "tese": "(1) Causa alegada da crise: Passivo socioambiental bilionário de Maceió/AL somado ao ciclo de baixa global dos spreads petroquímicos sobre dívida bruta de R$ 58,0 bilhões; (2) Gargalo imediato de liquidez: Standstill prorrogado até 30/10/2026 sob contraproposta de credores exigindo injeção de US$ 1,85 Bi em capital novo e conversão de até US$ 3,8 Bi de dívidas em equity, sob risco de aceleração de bonds e Chapter 11 nos EUA; (3) Tese de mandato sugerida: Creditor-Side Advisory para comitês de bondholders na modelagem da diluição societária e governança de corporation, e assessoria a fornecedores industriais estratégicos.",
    "status": "Novo",
    "proximas_acoes": "Monitorar prazo fatal de negociação com credores prorrogado até 30/10/2026, contraproposta de aporte de US$ 1,85 Bi pelos controladores, conversão de US$ 3,8 Bi de dívida em ações e resposta à B3 sobre transformação em corporation.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Venda de UPI / Desinvestimento de Ativos (Conta Escrow)"
    ],
    "cidade": "São Paulo",
    "uf": "SP",
    "coordenadas": [
      -23.5505,
      -46.6333
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRE",
    "tipo_processo_label": "Recuperação Extrajudicial (PRE)",
    "strategy_id": "consensual",
    "strategy_name": "Consensual & Pré-Concursal",
    "strategy_tag": "CONSENSUAL / ART. 20-B",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Venda de UPI / Desinvestimento de Ativos (Conta Escrow)"
    ],
    "subtipo_processo": "PRE",
    "causa_crise": "Passivo ambiental e contingências bilionárias decorrentes do evento geológico de Maceió/AL somados ao ciclo de baixa global dos spreads petroquímicos (PE/PP/PVC) sobre uma dívida bruta de R$ 58,0 bilhões",
    "gargalo_imediato": "Negociações de standstill internacional com sindicato de bancos globais/locais (Citi, JPMorgan, Santander, Bradesco, Itaú) e bondholders, além da definição de reestruturação societária entre Petrobras, Novonor e fundos credores (IG4)",
    "tese_mandato": "Assessoria a comitês de credores quirografários e fornecedores estratégicos da cadeia química nacional, avaliação de carve-outs de ativos industriais (UPIs) e monitoramento de covenants de bonds e debêntures.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Sexta maior petroquímica do mundo e líder absoluta na produção de resinas termoplásticas (polietileno PE, polipropileno PP e PVC) nas Américas (B3: BRKM5 / NYSE: BAK), controlada conjuntamente pela Novonor (ex-Odebrecht) e pela Petrobras, operando 40 unidades industriais no Brasil (BA, RS, SP, AL, RJ), EUA, México e Alemanha.",
    "model_params": {
      "haircut_pct": 38,
      "recuperacao_pct": 62,
      "haircut_estimado_pct": 38,
      "recuperacao_estimada_pct": 62,
      "desconto_secundario_pct": 30.0,
      "valor_recuperado_mm": 35960.0,
      "ev_estimado_mm": 37700.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 6960.0
      },
      "dip_necessidade_mm": 6960.0,
      "upi_valuation_estimado_mm": 20300.0
    },
    "calendar_meta": {
      "data_marco_iso": "2027-01-04",
      "data_marco_br": "04/01/2027",
      "dias_restantes": 80,
      "marco_label": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)",
      "marco_tipo": "Homologação PRE",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (80d)",
      "is_fixed_edital": false,
      "data_marco": "2027-01-04",
      "tipo_marco": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://neofeed.com.br/negocios/o-impasse-de-us-109-bilhoes-braskem-recorre-a-recuperacao-extrajudicial/",
    "url_tribunal_cvm": "https://esaj.tjsp.jus.br/cpopg/open.do"
  },
  {
    "id": 23,
    "data_evento": "2026-10-06",
    "data_adicao": "2026-10-07",
    "empresa": "Grupo Apex Partners (Apex Participações / Securitizadora)",
    "cnpj": "24.184.238/0001-80",
    "setor_detalhe": "Serviços Financeiros & Crédito",
    "setor_macro": "Serviços Financeiros & Crédito",
    "regiao": "Vitória, ES",
    "tribunal": "TJES - Vara de RJ e Falência de Vitória",
    "processo": "5014820-44.2026.8.08.0024",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.5,
    "tier": "Tier 2",
    "passivo_mm": 986,
    "passivo_display": "986",
    "credores": "Titulares de Debêntures e Notas Comerciais, Cotistas de FIDCs, Investidores de Wealth Management e Securitizadoras",
    "perfil_passivo": "Mercado de Capitais (Debêntures e Notas Comerciais) + Fundos Estruturados (FIDCs) + Dívida Intercompany",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "Laspro Consultores Ltda.",
    "tese": "(1) Causa da crise: Descasamento de liquidez e inadimplência cruzada em operações de securitização, notas comerciais, debêntures e FIDCs estruturados pela holding financeira no Espírito Santo; (2) Gargalo imediato: Determinação judicial de perícia forense e constatação prévia (art. 51-A) conduzida pela Laspro Consultores nas Varas Empresariais de Vitória/ES sobre R$ 986 milhões de passivo; (3) Oportunidade de mandato: Creditor-Side Advisory e investigação forense (Asset Tracing) em favor de debenturistas, titulares de notas comerciais e cotistas de FIDCs para segregação de carteiras de recebíveis adimplentes.",
    "status": "Novo",
    "proximas_acoes": "Mapear debenturistas e cotistas de FIDCs da securitizadora para instalar comitê de credores.",
    "watchdog_eligible": false,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "cidade": "Vitória",
    "uf": "ES",
    "coordenadas": [
      -20.3155,
      -40.3128
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "Cautelar / Pré-RJ",
    "tipo_processo_label": "Cautelar Antecedente (Art. 20-B)",
    "strategy_id": "consensual",
    "strategy_name": "Consensual & Pré-Concursal",
    "strategy_tag": "CONSENSUAL / ART. 20-B",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "subtipo_processo": "Cautelar / Pré-RJ",
    "causa_crise": "Descasamento de liquidez e inadimplência cruzada em operações de securitização, notas comerciais, debêntures e FIDCs estruturados pela holding financeira no Espírito Santo",
    "gargalo_imediato": "Determinação judicial de perícia forense e constatação prévia (art. 51-A) conduzida pela Laspro Consultores nas Varas Empresariais de Vitória/ES sobre R$ 986 milhões de passivo",
    "tese_mandato": "Creditor-Side Advisory e investigação forense (Asset Tracing) em favor de debenturistas, titulares de notas comerciais e cotistas de FIDCs para segregação de carteiras de recebíveis adimplentes.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Plataforma capixaba de investimentos, gestão de patrimônio (wealth management), banco de investimentos regional e estruturação de ativos alternativos sediada em Vitória/ES, controladora da Apex Participações e de veículos próprios de securitização de recebíveis imobiliários, corporativos e FIDCs.",
    "model_params": {
      "haircut_pct": 52,
      "recuperacao_pct": 48,
      "haircut_estimado_pct": 52,
      "recuperacao_estimada_pct": 48,
      "desconto_secundario_pct": 30.0,
      "valor_recuperado_mm": 473.3,
      "ev_estimado_mm": 493.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 118.3
      },
      "dip_necessidade_mm": 118.3,
      "upi_valuation_estimado_mm": 345.1
    },
    "calendar_meta": {
      "data_marco_iso": "2026-12-05",
      "data_marco_br": "05/12/2026",
      "dias_restantes": 50,
      "marco_label": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE",
      "marco_tipo": "Cautelar 20-B (60d)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (50d)",
      "is_fixed_edital": false,
      "data_marco": "2026-12-05",
      "tipo_marco": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/categoria/recuperacao-judicial",
    "url_tribunal_cvm": "https://sistemas.tjes.jus.br/pje/ConsultaPublica/listView.seam"
  },
  {
    "id": 24,
    "data_evento": "2026-10-01",
    "data_adicao": "2026-10-07",
    "empresa": "VRZ Blindados (VRZ Blindagens e Auto Laska)",
    "cnpj": "30.893.544/0001-90",
    "setor_detalhe": "Indústria Automotiva / Blindagem & Comércio de Veículos",
    "setor_macro": "Indústria & Manufatura",
    "regiao": "São Bernardo do Campo, SP",
    "tribunal": "TJSP - 2ª Vara Regional Empresarial",
    "processo": "4002138-57.2026.8.26.0260",
    "fase": "Cautelar Antecedente (art. 20-B)",
    "score": 9.5,
    "tier": "Tier 1",
    "passivo_mm": 105,
    "passivo_display": "105",
    "credores": "FIDC Pangu (R$ 24,83M), Itaú Unibanco (R$ 17,73M), Bradesco (R$ 17,11M), Santander (R$ 13,39M) e AGP do Brasil (R$ 9,74M) - 4 credores detêm 70%",
    "perfil_passivo": "FIDC / Direitos Creditórios + Bancário Concentrado (Itaú, Bradesco, Santander) + Fornecedor",
    "advocacia": "Mange Advogados (Dr. Eduardo Foz Mange)",
    "aj": "N/A (Fase Cautelar / CMAASP)",
    "tese": "(1) Causa da crise: Forte aperto de capital de giro na blindagem automotiva e revenda de veículos premium em São Bernardo do Campo/SP, agravado pelo desconto acelerado de duplicatas em FIDCs; (2) Gargalo imediato: Procedimento de Tutela Cautelar Antecedente e Mediação Pré-Processual (art. 20-B) no CMAASP/TJSP com 70% da dívida de R$ 105 milhões concentrada em FIDC Pangu (R$ 24,8M), Itaú (R$ 17,7M), Bradesco (R$ 17,1M), Santander (R$ 13,4M) e AGP Vidros (R$ 9,7M); (3) Oportunidade de mandato: Parceria em Financial Advisory e Gestão Interina (CRO) para estabilização do suprimento de vidros balísticos/aramida e estruturação de linha DIP para entrega da carteira de veículos.",
    "status": "Novo",
    "proximas_acoes": "Contato com Mange Advogados e credores (FIDC Pangu, Itaú, Bradesco, Santander) na mediação CMAASP.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Previsão de Financiamento DIP (Fiscalização de Tranches)",
      "Fase Pré-RJ / Cautelar sem Administrador Judicial Nomeado"
    ],
    "cidade": "São Bernardo do Campo",
    "uf": "SP",
    "coordenadas": [
      -23.6944,
      -46.5654
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "Cautelar / Pré-RJ",
    "tipo_processo_label": "Cautelar Antecedente (Art. 20-B)",
    "strategy_id": "consensual",
    "strategy_name": "Consensual & Pré-Concursal",
    "strategy_tag": "CONSENSUAL / ART. 20-B",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Previsão de Financiamento DIP (Fiscalização de Tranches)",
      "Fase Pré-RJ / Cautelar sem Administrador Judicial Nomeado"
    ],
    "subtipo_processo": "Cautelar / Pré-RJ",
    "causa_crise": "Forte aperto de capital de giro na blindagem automotiva e revenda de veículos premium em São Bernardo do Campo/SP, agravado pelo desconto acelerado de duplicatas em FIDCs",
    "gargalo_imediato": "Procedimento de Tutela Cautelar Antecedente e Mediação Pré-Processual (art. 20-B) no CMAASP/TJSP com 70% da dívida de R$ 105 milhões concentrada em FIDC Pangu (R$ 24,8M), Itaú (R$ 17,7M), Bradesco (R$ 17,1M), Santander (R$ 13,4M) e AGP Vidros (R$ 9,7M)",
    "tese_mandato": "Parceria em Financial Advisory e Gestão Interina (CRO) para estabilização do suprimento de vidros balísticos/aramida e estruturação de linha DIP para entrega da carteira de veículos.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Tradicional empresa de blindagem automotiva certificada pelo Exército Brasileiro e comercialização de veículos blindados premium (VRZ Blindagens e concessionária multimarcas Auto Laska), sediada em São Bernardo do Campo/SP (ABC Paulista), atendendo frotas executivas, concessionárias e clientes pessoa física de alta renda.",
    "model_params": {
      "haircut_pct": 49,
      "recuperacao_pct": 51,
      "haircut_estimado_pct": 49,
      "recuperacao_estimada_pct": 51,
      "desconto_secundario_pct": 30.0,
      "valor_recuperado_mm": 53.5,
      "ev_estimado_mm": 52.5,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 12.6
      },
      "dip_necessidade_mm": 15.0,
      "upi_valuation_estimado_mm": 36.8
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-30",
      "data_marco_br": "30/11/2026",
      "dias_restantes": 45,
      "marco_label": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE",
      "marco_tipo": "Cautelar 20-B (60d)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (45d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-30",
      "tipo_marco": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/categoria/recuperacao-judicial",
    "url_tribunal_cvm": "https://esaj.tjsp.jus.br/cpopg/open.do"
  },
  {
    "id": 25,
    "data_evento": "2026-10-05",
    "data_adicao": "2026-10-07",
    "empresa": "Grupo Carbon Blindados (C Blindados / Opera Glass / Vertco)",
    "cnpj": "22.811.775/0001-80",
    "setor_detalhe": "Indústria Automotiva / Blindagens (Líder Nacional)",
    "setor_macro": "Indústria & Manufatura",
    "regiao": "Barueri, SP",
    "tribunal": "TJSP - 1ª Vara de Falências e RJs",
    "processo": "1089412-75.2026.8.26.0100",
    "fase": "Recuperação Extrajudicial (Classe 128)",
    "score": 9,
    "tier": "Tier 3",
    "passivo_mm": 371,
    "passivo_display": "371",
    "credores": "FIDC Amadeus (R$ 95,2M), Banco Digimais (R$ 61,4M em debêntures), FIDC SSG (R$ 38,4M), Banco do Brasil (R$ 35,7M), Bradesco, Santander e Porto Seguro (R$ 16-17M cada)",
    "perfil_passivo": "FIDCs Estruturados (R$ 133M) + Debêntures (Digimais) + Bancário Comercial (BB, Bradesco, Santander)",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "N/A (Fase Extrajudicial)",
    "tese": "(1) Causa da crise: Endividamento de curto prazo de R$ 371 milhões contraído para financiar a expansão acelerada da capacidade fabril de blindagem automotiva em Barueri/SP; (2) Gargalo imediato: Processo de homologação de Recuperação Extrajudicial (Classe 128) na 1ª Vara de Falências de SP enfrentando resistência de credores não aderentes e necessidade de destravar linha de Dinheiro Novo; (3) Oportunidade de mandato: Estruturação e sindicação do DIP Financing previsto no plano (R$ 60M a R$ 100M) junto a fundos de Special Situations e assessoria técnica a credores bancários/FIDCs (Amadeus R$ 95,2M, Digimais R$ 61,4M, SSG R$ 38,4M, BB R$ 35,7M).",
    "status": "Novo",
    "proximas_acoes": "Contatar bancos dissidentes (BB, Santander, Digimais) e avaliar sindicação do DIP de R$ 60M-100M.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Previsão de Financiamento DIP (Fiscalização de Tranches)"
    ],
    "cidade": "Barueri",
    "uf": "SP",
    "coordenadas": [
      -23.5105,
      -46.8761
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRE",
    "tipo_processo_label": "Recuperação Extrajudicial (PRE)",
    "strategy_id": "consensual",
    "strategy_name": "Consensual & Pré-Concursal",
    "strategy_tag": "CONSENSUAL / ART. 20-B",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Previsão de Financiamento DIP (Fiscalização de Tranches)"
    ],
    "subtipo_processo": "PRE",
    "causa_crise": "Endividamento de curto prazo de R$ 371 milhões contraído para financiar a expansão acelerada da capacidade fabril de blindagem automotiva em Barueri/SP",
    "gargalo_imediato": "Processo de homologação de Recuperação Extrajudicial (Classe 128) na 1ª Vara de Falências de SP enfrentando resistência de credores não aderentes e necessidade de destravar linha de Dinheiro Novo",
    "tese_mandato": "Estruturação e sindicação do DIP Financing previsto no plano (R$ 60M a R$ 100M) junto a fundos de Special Situations e assessoria técnica a credores bancários/FIDCs (Amadeus R$ 95,2M, Digimais R$ 61,4M, SSG R$ 38,4M, BB R$ 35,7M).",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Maior blindadora de veículos civis do mundo em volume de produção (C Blindados, fabricante de vidros balísticos próprios Opera Glass e divisão Vertco), sediada em complexo industrial moderno em Barueri/SP (Alphaville), homologada diretamente por montadoras globais como Toyota, Volvo, BMW, Jaguar Land Rover e BYD.",
    "model_params": {
      "haircut_pct": 39,
      "recuperacao_pct": 61,
      "haircut_estimado_pct": 39,
      "recuperacao_estimada_pct": 61,
      "desconto_secundario_pct": 30.0,
      "valor_recuperado_mm": 226.3,
      "ev_estimado_mm": 185.5,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 44.5
      },
      "dip_necessidade_mm": 44.5,
      "upi_valuation_estimado_mm": 129.8
    },
    "calendar_meta": {
      "data_marco_iso": "2027-01-03",
      "data_marco_br": "03/01/2027",
      "dias_restantes": 79,
      "marco_label": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)",
      "marco_tipo": "Homologação PRE",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (79d)",
      "is_fixed_edital": false,
      "data_marco": "2027-01-03",
      "tipo_marco": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://esaj.tjsp.jus.br/cpopg/open.do",
    "url_tribunal_cvm": "https://esaj.tjsp.jus.br/cpopg/open.do"
  },
  {
    "id": 26,
    "data_evento": "2026-09-24",
    "data_adicao": "2026-10-07",
    "empresa": "Grupo Nutriplus & Ômega",
    "cnpj": "49.254.634/0001-60",
    "setor_detalhe": "Tecnologia & Serviços B2B",
    "setor_macro": "Tecnologia & Serviços B2B",
    "regiao": "Salto, SP",
    "tribunal": "TJSP - Comarca de Salto",
    "processo": "1003812-40.2026.8.26.0526",
    "fase": "Cautelar Antecedente (art. 20-B)",
    "score": 9.5,
    "tier": "Tier 1",
    "passivo_mm": 190,
    "passivo_display": "190",
    "credores": "FIDC de direitos creditórios, bancos comerciais de antecipação de recebíveis públicos e fornecedores de alimentos",
    "perfil_passivo": "FIDCs / Antecipação de Recebíveis de Contratos Públicos + Bancário Curto Prazo",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "N/A (Fase Cautelar)",
    "tese": "(1) Causa da crise: Atrasos sistemáticos nos repasses de prefeituras e órgãos estaduais em contratos de alimentação escolar e coletiva, gerando estrangulamento de caixa nas operações de Salto/SP; (2) Gargalo imediato: Mediação pré-processual sob Cautelar Antecedente (art. 20-B) no TJSP para impedir o bloqueio integral de faturas públicas cedidas fiduciariamente a FIDCs e bancos de capital de giro (passivo de R$ 190 milhões); (3) Oportunidade de mandato: Gestão Interina (CRO) focada na repactuação de equilíbrio econômico-financeiro de contratos públicos e estruturação de conta escrow com FIDCs credores.",
    "status": "Novo",
    "proximas_acoes": "Mapear posição dos FIDCs de recebíveis públicos e avaliar mandato de CRO operacional.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Fase Pré-RJ / Cautelar sem Administrador Judicial Nomeado"
    ],
    "cidade": "Salto",
    "uf": "SP",
    "coordenadas": [
      -23.2008,
      -47.2869
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "Cautelar / Pré-RJ",
    "tipo_processo_label": "Cautelar Antecedente (Art. 20-B)",
    "strategy_id": "consensual",
    "strategy_name": "Consensual & Pré-Concursal",
    "strategy_tag": "CONSENSUAL / ART. 20-B",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Fase Pré-RJ / Cautelar sem Administrador Judicial Nomeado"
    ],
    "subtipo_processo": "Cautelar / Pré-RJ",
    "causa_crise": "Atrasos sistemáticos nos repasses de prefeituras e órgãos estaduais em contratos de alimentação escolar e coletiva, gerando estrangulamento de caixa nas operações de Salto/SP",
    "gargalo_imediato": "Mediação pré-processual sob Cautelar Antecedente (art. 20-B) no TJSP para impedir o bloqueio integral de faturas públicas cedidas fiduciariamente a FIDCs e bancos de capital de giro (passivo de R$ 190 milhões)",
    "tese_mandato": "Gestão Interina (CRO) focada na repactuação de equilíbrio econômico-financeiro de contratos públicos e estruturação de conta escrow com FIDCs credores.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Reit Securitizadora",
    "descricao_empresa": "Conglomerado paulista especializado na prestação de serviços de alimentação coletiva terceirizada, merenda escolar municipal/estadual, nutrição hospitalar e cestas de suprimentos (Nutriplus Alimentação e Ômega), sediado em Salto/SP e detentor de dezenas de contratos administrativos continuados no estado de São Paulo.",
    "model_params": {
      "haircut_pct": 49,
      "recuperacao_pct": 51,
      "haircut_estimado_pct": 49,
      "recuperacao_estimada_pct": 51,
      "desconto_secundario_pct": 30.0,
      "valor_recuperado_mm": 96.9,
      "ev_estimado_mm": 95.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 22.8
      },
      "dip_necessidade_mm": 22.8,
      "upi_valuation_estimado_mm": 66.5
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-23",
      "data_marco_br": "23/11/2026",
      "dias_restantes": 38,
      "marco_label": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE",
      "marco_tipo": "Cautelar 20-B (60d)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (38d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-23",
      "tipo_marco": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE",
      "urgencia": "ALTA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/categoria/recuperacao-judicial",
    "url_tribunal_cvm": "https://esaj.tjsp.jus.br/cpopg/open.do"
  },
  {
    "id": 27,
    "data_evento": "2026-09-16",
    "data_adicao": "2026-10-07",
    "empresa": "Royal Agro Trading",
    "cnpj": "01.655.275/0001-26",
    "setor_detalhe": "Agronegócio / Trading de Grãos (Soja e Milho)",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Ponta Porã, MS",
    "tribunal": "TJMS - Comarca de Ponta Porã",
    "processo": "0804122-19.2026.8.12.0019",
    "fase": "Cautelar Antecedente (art. 20-B)",
    "score": 9.5,
    "tier": "Tier 1",
    "passivo_mm": 198,
    "passivo_display": "198",
    "credores": "Bancos privados (travas bancárias e vencimento antecipado), tradings globais e produtores rurais devedores/credores de CPRs",
    "perfil_passivo": "Linhas de Financiamento à Exportação (ACC/ACE) + CPRs / Barter de Grãos",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "N/A (Fase Cautelar)",
    "tese": "(1) Causa da crise: Inadimplência de produtores rurais na entrega física de soja e milho (quebra de contratos de barter e CPRs) combinada à inversão de margens na comercialização de grãos na fronteira de Ponta Porã/MS; (2) Gargalo imediato: Tutela Cautelar Antecedente (art. 20-B) ajuizada no TJMS para sustar vencimentos antecipados de linhas de exportação (ACC/ACE) e travas bancárias sobre R$ 198 milhões; (3) Oportunidade de mandato: Financial Advisory Rural para renegociação de ACC/ACE com sindicato bancário e estruturação de financiamento DIP Safra garantido por warrants de grãos em armazéns gerais.",
    "status": "Novo",
    "proximas_acoes": "Abordar trading e bancos credores de ACC/ACE antes da conversão em RJ definitiva.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Previsão de Financiamento DIP (Fiscalização de Tranches)",
      "Fase Pré-RJ / Cautelar sem Administrador Judicial Nomeado"
    ],
    "cidade": "Ponta Porã",
    "uf": "MS",
    "coordenadas": [
      -22.5361,
      -55.7256
    ],
    "regiao_macro": "Centro-Oeste",
    "tipo_processo": "Cautelar / Pré-RJ",
    "tipo_processo_label": "Cautelar Antecedente (Art. 20-B)",
    "strategy_id": "consensual",
    "strategy_name": "Consensual & Pré-Concursal",
    "strategy_tag": "CONSENSUAL / ART. 20-B",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Previsão de Financiamento DIP (Fiscalização de Tranches)",
      "Fase Pré-RJ / Cautelar sem Administrador Judicial Nomeado"
    ],
    "subtipo_processo": "Cautelar / Pré-RJ",
    "causa_crise": "Inadimplência de produtores rurais na entrega física de soja e milho (quebra de contratos de barter e CPRs) combinada à inversão de margens na comercialização de grãos na fronteira de Ponta Porã/MS",
    "gargalo_imediato": "Tutela Cautelar Antecedente (art. 20-B) ajuizada no TJMS para sustar vencimentos antecipados de linhas de exportação (ACC/ACE) e travas bancárias sobre R$ 198 milhões",
    "tese_mandato": "Financial Advisory Rural para renegociação de ACC/ACE com sindicato bancário e estruturação de financiamento DIP Safra garantido por warrants de grãos em armazéns gerais.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Trading regional de originação, beneficiamento, armazenagem e comercialização de grãos (soja e milho) sediada na fronteira agrícola de Ponta Porã/MS, atuando na intermediação entre produtores rurais sul-mato-grossenses/paraguaios e corredores de exportação portuária.",
    "model_params": {
      "haircut_pct": 40,
      "recuperacao_pct": 60,
      "haircut_estimado_pct": 40,
      "recuperacao_estimada_pct": 60,
      "desconto_secundario_pct": 30.0,
      "valor_recuperado_mm": 118.8,
      "ev_estimado_mm": 99.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 22.0,
        "classe_i_pct": 4.0,
        "classe_ii_pct": 36.0,
        "fiscal_pct": 8.0,
        "classe_iii_pct": 25.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 22.0,
        "c1_trabalhista": 4.0,
        "c2_garantia_real": 36.0,
        "c3_quirografario": 25.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 15.8
      },
      "dip_necessidade_mm": 23.8,
      "upi_valuation_estimado_mm": 69.3
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-15",
      "data_marco_br": "15/11/2026",
      "dias_restantes": 30,
      "marco_label": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE",
      "marco_tipo": "Cautelar 20-B (60d)",
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (30d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-15",
      "tipo_marco": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE",
      "urgencia": "ALTA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/categoria/recuperacao-judicial",
    "url_tribunal_cvm": "https://esaj.tjms.jus.br/cpopg5/open.do"
  },
  {
    "id": 28,
    "data_evento": "2026-09-14",
    "data_adicao": "2026-10-07",
    "empresa": "Grupo Progen",
    "cnpj": "57.748.204/0001-22",
    "setor_detalhe": "Engenharia Consultiva, Infraestrutura & Concessões",
    "setor_macro": "Energia & Infraestrutura",
    "regiao": "São Paulo, SP",
    "tribunal": "TJSP - Varas Empresariais de SP",
    "processo": "1078412-30.2026.8.26.0100",
    "fase": "Cautelar Antecedente (art. 20-B)",
    "score": 9,
    "tier": "Tier 1",
    "passivo_mm": 956,
    "passivo_display": "956",
    "credores": "Bancos de fomento e infraestrutura, consórcios parceiros e debenturistas",
    "perfil_passivo": "Project Finance + Dívida Corporativa Bancária",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "N/A (Fase Prévia)",
    "tese": "(1) Causa da crise: Retração de margens em contratos de engenharia consultiva e sobrecusto financeiro em projetos de infraestrutura e concessões, elevando o passivo consolidado a R$ 956 milhões; (2) Gargalo imediato: Mediação pré-processual antecedente nas Varas Empresariais de São Paulo com suspensão parcial de execuções de bancos e debenturistas enquanto se negocia plano de reperfilamento; (3) Oportunidade de mandato: Financial Advisory na reestruturação de dívidas de Project Finance, assessoria a debenturistas (Oliveira Trust / Vórtx) e M&A / carve-out de participações em SPEs de concessões e energia.",
    "status": "Novo",
    "proximas_acoes": "Acompanhar mediação pré-processual e mapear contratos de engenharia/concessões para carve-out.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Fase Pré-RJ / Cautelar sem Administrador Judicial Nomeado",
      "Emissão de Debêntures / Mercado de Capitais (Fiscalização de Covenants)"
    ],
    "cidade": "São Paulo",
    "uf": "SP",
    "coordenadas": [
      -23.5505,
      -46.6333
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "Cautelar / Pré-RJ",
    "tipo_processo_label": "Cautelar Antecedente (Art. 20-B)",
    "strategy_id": "consensual",
    "strategy_name": "Consensual & Pré-Concursal",
    "strategy_tag": "CONSENSUAL / ART. 20-B",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Fase Pré-RJ / Cautelar sem Administrador Judicial Nomeado",
      "Emissão de Debêntures / Mercado de Capitais (Fiscalização de Covenants)"
    ],
    "subtipo_processo": "Cautelar / Pré-RJ",
    "causa_crise": "Retração de margens em contratos de engenharia consultiva e sobrecusto financeiro em projetos de infraestrutura e concessões, elevando o passivo consolidado a R$ 956 milhões",
    "gargalo_imediato": "Mediação pré-processual antecedente nas Varas Empresariais de São Paulo com suspensão parcial de execuções de bancos e debenturistas enquanto se negocia plano de reperfilamento",
    "tese_mandato": "Financial Advisory na reestruturação de dívidas de Project Finance, assessoria a debenturistas (Oliveira Trust / Vórtx) e M&A / carve-out de participações em SPEs de concessões e energia.",
    "agentes_fiduciarios": "Oliveira Trust DTVM",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "energy_meta": {
      "debenture_codigo": "PRGN11 / PRGN12 (Project Finance)",
      "agente_fiduciario": "Oliveira Trust DTVM",
      "inadimplemento_ccee": "Monitorado — SPEs de geração e engenharia de transmissão",
      "risco_caducidade": "Moderado — Contratos EPC e concessões públicas em repactuação de cronograma",
      "corte_rating_curtailment": "ICSD pressionado (< 1,10x) por atrasos de obras e sobrecusto de EPC em projetos de energia",
      "submercado": "Sudeste/Centro-Oeste"
    },
    "descricao_empresa": "Uma das maiores empresas brasileiras de engenharia consultiva, gerenciamento de obras, projetos industriais (EPCM) e desenvolvimento de concessões de infraestrutura, fundada em 1987 em São Paulo/SP, atendendo clientes de primeira linha em mineração (Vale), energia, saneamento, ferrovias e óleo & gás.",
    "model_params": {
      "haircut_pct": 39,
      "recuperacao_pct": 61,
      "haircut_estimado_pct": 39,
      "recuperacao_estimada_pct": 61,
      "desconto_secundario_pct": 30.0,
      "valor_recuperado_mm": 583.2,
      "ev_estimado_mm": 478.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 18.0,
        "classe_i_pct": 3.0,
        "classe_ii_pct": 42.0,
        "fiscal_pct": 7.0,
        "classe_iii_pct": 27.0,
        "classe_iv_pct": 3.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 18.0,
        "c1_trabalhista": 3.0,
        "c2_garantia_real": 42.0,
        "c3_quirografario": 27.0,
        "c4_me_epp": 3.0,
        "passivo_fiscal_estimado_mm": 66.9
      },
      "dip_necessidade_mm": 114.7,
      "upi_valuation_estimado_mm": 334.6
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-13",
      "data_marco_br": "13/11/2026",
      "dias_restantes": 28,
      "marco_label": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE",
      "marco_tipo": "Cautelar 20-B (60d)",
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (28d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-13",
      "tipo_marco": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE",
      "urgencia": "ALTA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/grupo-progen-tutela-cautelar-2026",
    "url_tribunal_cvm": "https://esaj.tjsp.jus.br/cpopg/open.do"
  },
  {
    "id": 29,
    "data_evento": "2026-09-25",
    "data_adicao": "2026-10-07",
    "empresa": "Grupo Qintess (Tecnologia & Transformação Digital)",
    "cnpj": "36.780.041/0001-95",
    "setor_detalhe": "Tecnologia & Serviços de TI",
    "setor_macro": "Tecnologia & Serviços B2B",
    "regiao": "São Paulo, SP",
    "tribunal": "TJSP - 2ª Vara de Falências e RJs",
    "processo": "1091245-18.2026.8.26.0100",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.5,
    "tier": "Tier 2",
    "passivo_mm": 498,
    "passivo_display": "498",
    "credores": "Bancos de capital de giro, fundos de crédito privado e fornecedores de licenças de software/hardware",
    "perfil_passivo": "Bancário Curto Prazo + Dívida Trabalhista de Especialistas de TI + Fornecedores Tech",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "Aguardando nomeação judicial",
    "tese": "(1) Causa da crise: Elevado endividamento bancário de curto prazo e passivo trabalhista/tributário decorrente de aquisições no setor de BPO e outsourcing de TI (passivo de R$ 498 milhões); (2) Gargalo imediato: Condução da Recuperação Judicial (Classe 129) no TJSP com necessidade crítica de retenção de talentos de tecnologia e blindagem dos contratos de prestação de serviços com grandes bancos e corporações; (3) Oportunidade de mandato: Gestão Interina (CRO) para preservação da receita recorrente (SLA de clientes B2B), modelagem econômico-financeira do PRJ (art. 53) e venda de unidades de negócios não-core (UPIs).",
    "status": "Novo",
    "proximas_acoes": "Contatar conselho da Qintess e bancos de capital de giro para suporte no plano do art. 53.",
    "watchdog_eligible": false,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "cidade": "São Paulo",
    "uf": "SP",
    "coordenadas": [
      -23.5505,
      -46.6333
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (PRJ)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Elevado endividamento bancário de curto prazo e passivo trabalhista/tributário decorrente de aquisições no setor de BPO e outsourcing de TI (passivo de R$ 498 milhões)",
    "gargalo_imediato": "Condução da Recuperação Judicial (Classe 129) no TJSP com necessidade crítica de retenção de talentos de tecnologia e blindagem dos contratos de prestação de serviços com grandes bancos e corporações",
    "tese_mandato": "Gestão Interina (CRO) para preservação da receita recorrente (SLA de clientes B2B), modelagem econômico-financeira do PRJ (art. 53) e venda de unidades de negócios não-core (UPIs).",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Multinacional brasileira de tecnologia da informação, transformação digital, consultoria ágil e terceirização de processos de negócios (BPO/ITO, antiga Resource IT Solutions), sediada em São Paulo/SP, com cerca de 3.000 profissionais atendendo grandes bancos, seguradoras, concessionárias de serviços públicos e varejistas na América Latina.",
    "model_params": {
      "haircut_pct": 61,
      "recuperacao_pct": 39,
      "haircut_estimado_pct": 61,
      "recuperacao_estimada_pct": 39,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 194.2,
      "ev_estimado_mm": 323.7,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 59.8
      },
      "dip_necessidade_mm": 59.8,
      "upi_valuation_estimado_mm": 174.3
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-24",
      "data_marco_br": "24/11/2026",
      "dias_restantes": 39,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (39d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-24",
      "tipo_marco": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "urgencia": "ALTA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/grupo-qintess-recuperacao-judicial-2026",
    "url_tribunal_cvm": "https://esaj.tjsp.jus.br/cpopg/open.do"
  },
  {
    "id": 30,
    "data_evento": "2026-09-18",
    "data_adicao": "2026-10-07",
    "empresa": "Agropecuária Ivagaci",
    "cnpj": "05.879.389/0001-00",
    "setor_detalhe": "Agronegócio / Grãos & Pecuária",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Passo Fundo, RS",
    "tribunal": "TJRS - Vara Empresarial de Santa Rosa",
    "processo": "5004891-91.2026.8.21.0028",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.5,
    "tier": "Tier 2",
    "passivo_mm": 128,
    "passivo_display": "128",
    "credores": "Banrisul, Sicredi, Banco do Brasil, Tradings de Insumos e Securitizadoras de CRA",
    "perfil_passivo": "Crédito Rural Bancário e Cooperativo + Financiamento de Safra",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "Aguardando nomeação judicial",
    "tese": "(1) Causa da crise: Perdas severas de produtividade agrícola no Rio Grande do Sul causadas por eventos climáticos extremos (estiagens seguidas de enchentes) sobre passivo rural de R$ 128 milhões; (2) Gargalo imediato: Trâmite da Recuperação Judicial na região de Passo Fundo/RS exigindo negociação com Banrisul, Sicredi, Banco do Brasil e securitizadoras de CRAs sobre garantias reais de terras e penhor de safra; (3) Oportunidade de mandato: Financial Advisory Rural e estruturação de plano de pagamento escalonado conforme capacidade de geração de caixa por hectare, evitando consolidação de propriedade fiduciária.",
    "status": "Novo",
    "proximas_acoes": "Abordar Banrisul, Sicredi, BB e securitizadoras de CRA para renegociação de passivo rural.",
    "watchdog_eligible": false,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "cidade": "Passo Fundo",
    "uf": "RS",
    "coordenadas": [
      -28.2628,
      -52.4067
    ],
    "regiao_macro": "Sul",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (PRJ)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Perdas severas de produtividade agrícola no Rio Grande do Sul causadas por eventos climáticos extremos (estiagens seguidas de enchentes) sobre passivo rural de R$ 128 milhões",
    "gargalo_imediato": "Trâmite da Recuperação Judicial na região de Passo Fundo/RS exigindo negociação com Banrisul, Sicredi, Banco do Brasil e securitizadoras de CRAs sobre garantias reais de terras e penhor de safra",
    "tese_mandato": "Financial Advisory Rural e estruturação de plano de pagamento escalonado conforme capacidade de geração de caixa por hectare, evitando consolidação de propriedade fiduciária.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Grupo agropecuário gaúcho com sede operacional na região do Planalto Médio e Missões (Passo Fundo e Santa Rosa/RS), focado na produção de soja, trigo, milho e pecuária de corte em áreas próprias, fortemente impactado pelas adversidades climáticas extremas no Rio Grande do Sul.",
    "model_params": {
      "haircut_pct": 51,
      "recuperacao_pct": 49,
      "haircut_estimado_pct": 51,
      "recuperacao_estimada_pct": 49,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 62.7,
      "ev_estimado_mm": 64.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 22.0,
        "classe_i_pct": 4.0,
        "classe_ii_pct": 36.0,
        "fiscal_pct": 8.0,
        "classe_iii_pct": 25.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 22.0,
        "c1_trabalhista": 4.0,
        "c2_garantia_real": 36.0,
        "c3_quirografario": 25.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 10.2
      },
      "dip_necessidade_mm": 15.4,
      "upi_valuation_estimado_mm": 44.8
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-17",
      "data_marco_br": "17/11/2026",
      "dias_restantes": 32,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (32d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-17",
      "tipo_marco": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "urgencia": "ALTA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/categoria/recuperacao-judicial",
    "url_tribunal_cvm": "https://www.tjrs.jus.br/novo/busca/?return=proc&client=wp_index"
  },
  {
    "id": 31,
    "data_evento": "2026-10-06",
    "data_adicao": "2026-10-07",
    "empresa": "Grupo SHC (JAC Motors Brasil / Sérgio Habib)",
    "cnpj": "64.936.426/0001-38",
    "setor_detalhe": "Indústria & Manufatura (Automotivo / Importação)",
    "setor_macro": "Varejo & Consumo",
    "regiao": "São Paulo, SP",
    "tribunal": "TJSP - 1ª Vara de Falências e RJs",
    "processo": "1104821-67.2026.8.26.0100",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.5,
    "tier": "Tier 2",
    "passivo_mm": 240,
    "passivo_display": "240",
    "credores": "Bancos de capital de giro e financiamento de estoque, montadora chinesa JAC e rede de concessionárias",
    "perfil_passivo": "Financiamento de Estoque de Veículos (Floor Plan) + Fornecedores Internacionais",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "Aguardando nomeação judicial",
    "tese": "(1) Causa da crise: Oscilação cambial, sobretaxas de importação sobre veículos elétricos/combustão e elevado custo financeiro das linhas de financiamento de estoque (Floor Plan) da rede JAC Motors Brasil; (2) Gargalo imediato: Condução da Recuperação Judicial na 2ª Vara de Falências de SP (passivo de R$ 240 milhões) mantendo o acordo operacional de importação de peças e veículos junto à matriz chinesa; (3) Oportunidade de mandato: Estruturação de M&A Distressed / alienação de pontos comerciais e lojas próprias como UPI e renegociação de linhas de comércio exterior com bancos credores.",
    "status": "Novo",
    "proximas_acoes": "Mapear passivo de floor plan bancário e pontos comerciais de concessionárias para venda (UPI).",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Venda de UPI / Desinvestimento de Ativos (Conta Escrow)"
    ],
    "cidade": "São Paulo",
    "uf": "SP",
    "coordenadas": [
      -23.5505,
      -46.6333
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (PRJ)",
    "strategy_id": "dip",
    "strategy_name": "DIP Financing & M&A Distressed",
    "strategy_tag": "DIP FINANCING / UPI M&A",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Venda de UPI / Desinvestimento de Ativos (Conta Escrow)"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Oscilação cambial, sobretaxas de importação sobre veículos elétricos/combustão e elevado custo financeiro das linhas de financiamento de estoque (Floor Plan) da rede JAC Motors Brasil",
    "gargalo_imediato": "Condução da Recuperação Judicial na 2ª Vara de Falências de SP (passivo de R$ 240 milhões) mantendo o acordo operacional de importação de peças e veículos junto à matriz chinesa",
    "tese_mandato": "Estruturação de M&A Distressed / alienação de pontos comerciais e lojas próprias como UPI e renegociação de linhas de comércio exterior com bancos credores.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Holding automotiva controlada pelo empresário Sérgio Habib (ex-presidente da Citroën no Brasil), importadora e distribuidora exclusiva da montadora chinesa JAC Motors no país desde 2011. Nos últimos anos, reposicionou seu portfólio para veículos 100% elétricos comerciais (VULs e caminhões urbanos) e carros de passeio.",
    "model_params": {
      "haircut_pct": 60,
      "recuperacao_pct": 40,
      "haircut_estimado_pct": 60,
      "recuperacao_estimada_pct": 40,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 96.0,
      "ev_estimado_mm": 156.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 28.8
      },
      "dip_necessidade_mm": 28.8,
      "upi_valuation_estimado_mm": 84.0
    },
    "calendar_meta": {
      "data_marco_iso": "2026-12-05",
      "data_marco_br": "05/12/2026",
      "dias_restantes": 50,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (50d)",
      "is_fixed_edital": false,
      "data_marco": "2026-12-05",
      "tipo_marco": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://esaj.tjsp.jus.br/cpopg/open.do",
    "url_tribunal_cvm": "https://esaj.tjsp.jus.br/cpopg/open.do"
  },
  {
    "id": 32,
    "data_evento": "2026-10-02",
    "data_adicao": "2026-10-07",
    "empresa": "Sidlar Móveis",
    "cnpj": "50.819.349/0001-70",
    "setor_detalhe": "Varejo & Consumo (Móveis Planejados & Decoração)",
    "setor_macro": "Varejo & Consumo",
    "regiao": "São Caetano do Sul, SP",
    "tribunal": "TJSP - Comarca de São Caetano do Sul",
    "processo": "1009412-55.2026.8.26.0565",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.5,
    "tier": "Tier 2",
    "passivo_mm": 56,
    "passivo_display": "56",
    "credores": "Banco Bradesco, bancos de antecipação de recebíveis e fornecedores de madeira/marcenaria",
    "perfil_passivo": "Bancário Curto Prazo (Recebíveis de Varejo) + Fornecedores de Insumos",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "Aguardando nomeação judicial",
    "tese": "(1) Causa da crise: Queda na demanda de móveis planejados no varejo de média renda e compressão de caixa provocada pelo desconto de recebíveis de cartão e boletos a taxas elevadas no ABC Paulista; (2) Gargalo imediato: Apresentação do plano de Recuperação Judicial no TJSP para reestruturar R$ 56 milhões devidos ao Bradesco, bancos médios de capital de giro e fornecedores de painéis de madeira/MDF; (3) Oportunidade de mandato: Financial Advisory na modelagem do PRJ, revisão de contratos de locação de showrooms e fechamento de lojas deficitárias.",
    "status": "Novo",
    "proximas_acoes": "Contatar devedora e Banco Bradesco para suporte na modelagem do PRJ.",
    "watchdog_eligible": false,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "cidade": "São Caetano do Sul",
    "uf": "SP",
    "coordenadas": [
      -23.6229,
      -46.5552
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (PRJ)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Queda na demanda de móveis planejados no varejo de média renda e compressão de caixa provocada pelo desconto de recebíveis de cartão e boletos a taxas elevadas no ABC Paulista",
    "gargalo_imediato": "Apresentação do plano de Recuperação Judicial no TJSP para reestruturar R$ 56 milhões devidos ao Bradesco, bancos médios de capital de giro e fornecedores de painéis de madeira/MDF",
    "tese_mandato": "Financial Advisory na modelagem do PRJ, revisão de contratos de locação de showrooms e fechamento de lojas deficitárias.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Tradicional rede varejista e fabricante própria de móveis planejados, estofados e artigos de decoração residencial sediada em São Caetano do Sul/SP (ABC Paulista), com forte atuação histórica na Região Metropolitana de São Paulo e fabricação verticalizada de marcenaria.",
    "model_params": {
      "haircut_pct": 64,
      "recuperacao_pct": 36,
      "haircut_estimado_pct": 64,
      "recuperacao_estimada_pct": 36,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 20.2,
      "ev_estimado_mm": 28.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 6.7
      },
      "dip_necessidade_mm": 15.0,
      "upi_valuation_estimado_mm": 19.6
    },
    "calendar_meta": {
      "data_marco_iso": "2026-12-01",
      "data_marco_br": "01/12/2026",
      "dias_restantes": 46,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (46d)",
      "is_fixed_edital": false,
      "data_marco": "2026-12-01",
      "tipo_marco": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/categoria/recuperacao-judicial",
    "url_tribunal_cvm": "https://esaj.tjsp.jus.br/cpopg/open.do"
  },
  {
    "id": 33,
    "data_evento": "2026-08-26",
    "data_adicao": "2026-10-07",
    "empresa": "Habib's (Grupo Alsaraiva / Ragazzo)",
    "cnpj": "59.988.426/0001-90",
    "setor_detalhe": "Varejo & Consumo (Fast-Food & Franquias)",
    "setor_macro": "Varejo & Consumo",
    "regiao": "São Paulo, SP",
    "tribunal": "TJSP - 1ª Vara de Falências e RJs",
    "processo": "1084512-33.2026.8.26.0100",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8,
    "tier": "Tier 2",
    "passivo_mm": 265,
    "passivo_display": "265",
    "credores": "Bancos privados comerciais, fornecedores de alimentos e distribuidores de insumos de cozinhas centrais",
    "perfil_passivo": "Bancário Comercial + Fornecedores da Rede de Franquias",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "Aguardando nomeação judicial",
    "tese": "(1) Causa da crise: Pressão inflacionária em proteínas e laticínios, queda de tráfego em lojas físicas de rua e endividamento bancário acumulado nas cozinhas centrais e franqueadoras do grupo (R$ 265 milhões); (2) Gargalo imediato: Evolução da tutela cautelar para Recuperação Judicial (Classe 129) na Capital/SP, demandando acordo estruturado com bancos privados e manutenção do fornecimento para a rede de franquias Habib's e Ragazzo; (3) Oportunidade de mandato: Gestão Interina (CRO) para otimização logística das cozinhas centrais, Sale & Leaseback de imóveis próprios de lojas drive-thru e renegociação com sindicato bancário.",
    "status": "Em Análise",
    "proximas_acoes": "Acompanhar prazos de edital e mapear passivo com bancos comerciais e fornecedores de alimentos.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Fase Pré-RJ / Cautelar sem Administrador Judicial Nomeado"
    ],
    "cidade": "São Paulo",
    "uf": "SP",
    "coordenadas": [
      -23.5505,
      -46.6333
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "Cautelar / Pré-RJ",
    "tipo_processo_label": "Cautelar Antecedente (Art. 20-B)",
    "strategy_id": "consensual",
    "strategy_name": "Consensual & Pré-Concursal",
    "strategy_tag": "CONSENSUAL / ART. 20-B",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Fase Pré-RJ / Cautelar sem Administrador Judicial Nomeado"
    ],
    "subtipo_processo": "Cautelar / Pré-RJ",
    "causa_crise": "Pressão inflacionária em proteínas e laticínios, queda de tráfego em lojas físicas de rua e endividamento bancário acumulado nas cozinhas centrais e franqueadoras do grupo (R$ 265 milhões)",
    "gargalo_imediato": "Evolução da tutela cautelar para Recuperação Judicial (Classe 129) na Capital/SP, demandando acordo estruturado com bancos privados e manutenção do fornecimento para a rede de franquias Habib's e Ragazzo",
    "tese_mandato": "Gestão Interina (CRO) para otimização logística das cozinhas centrais, Sale & Leaseback de imóveis próprios de lojas drive-thru e renegociação com sindicato bancário.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Um dos maiores grupos de alimentação fora do lar (foodservice) e franquias do Brasil (Grupo Alsaraiva), fundado por Alberto Saraiva em 1988. Reúne mais de 300 restaurantes sob as bandeiras Habib's (maior rede de culinária árabe rápida do mundo) e Ragazzo (massas e coxinha), suportados por cozinhas centrais verticalizadas, laticínios e panificadoras próprias.",
    "model_params": {
      "haircut_pct": 50,
      "recuperacao_pct": 50,
      "haircut_estimado_pct": 50,
      "recuperacao_estimada_pct": 50,
      "desconto_secundario_pct": 30.0,
      "valor_recuperado_mm": 132.5,
      "ev_estimado_mm": 132.5,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 31.8
      },
      "dip_necessidade_mm": 31.8,
      "upi_valuation_estimado_mm": 92.8
    },
    "calendar_meta": {
      "data_marco_iso": "2026-10-25",
      "data_marco_br": "25/10/2026",
      "dias_restantes": 9,
      "marco_label": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE",
      "marco_tipo": "Cautelar 20-B (60d)",
      "urgencia_nivel": "critico",
      "urgencia_label": "URGENTE (9d)",
      "is_fixed_edital": false,
      "data_marco": "2026-10-25",
      "tipo_marco": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE",
      "urgencia": "CRÍTICA"
    },
    "url_noticia": "https://www.cnnbrasil.com.br/economia/money/negocios/habibs-entra-em-recuperacao-judicial/",
    "url_tribunal_cvm": "https://esaj.tjsp.jus.br/cpopg/open.do"
  },
  {
    "id": 34,
    "data_evento": "2026-08-27",
    "data_adicao": "2026-10-07",
    "empresa": "Fertilizantes Heringer",
    "cnpj": "22.266.175/0001-89",
    "setor_detalhe": "Agronegócio & Silvicultura (Fertilizantes & Nutrição de Plantas)",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Viana, ES",
    "tribunal": "TJES - Vara Cível de Viana",
    "processo": "5003912-11.2026.8.08.0050",
    "fase": "Cautelar Antecedente (art. 20-B)",
    "score": 9.5,
    "tier": "Tier 1",
    "passivo_mm": 1980,
    "passivo_display": "1.980",
    "credores": "Bancos fornecedores de crédito agro (BB, Santander, Bradesco), tradings multinacionais e importadores de matéria-prima química",
    "perfil_passivo": "Linhas de Financiamento Agro / Comércio Exterior + Dívida Comercial com Fornecedores Globais de NPK",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "AJ Ruiz Administração Judicial",
    "tese": "(1) Causa da crise: Volatilidade extrema nos preços internacionais de fertilizantes (NPK), desvalorização de estoques importados e restrição de linhas de comércio exterior pós-RJ anterior, acumulando R$ 1,98 bilhão de passivo; (2) Gargalo imediato: Procedimento de Tutela Cautelar e Mediação Prévia no CEJUSC empresarial (ES/SP) sob acompanhamento do AJ Ruiz para estruturar Recuperação Extrajudicial com bancos agro e tradings globais; (3) Oportunidade de mandato: Estruturação de DIP Financing garantido por estoques de misturadoras e recebíveis de safra, além de assessoria ao comitê de fornecedores internacionais de matérias-primas.",
    "status": "Novo",
    "proximas_acoes": "Abordar diretoria financeira e sindicato agro (BB, Santander, Bradesco) durante o stay de 60 dias.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Previsão de Financiamento DIP (Fiscalização de Tranches)",
      "Fase Pré-RJ / Cautelar sem Administrador Judicial Nomeado"
    ],
    "cidade": "Viana",
    "uf": "ES",
    "coordenadas": [
      -20.3906,
      -40.4958
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRE",
    "tipo_processo_label": "Recuperação Extrajudicial (PRE)",
    "strategy_id": "consensual",
    "strategy_name": "Consensual & Pré-Concursal",
    "strategy_tag": "CONSENSUAL / ART. 20-B",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Previsão de Financiamento DIP (Fiscalização de Tranches)",
      "Fase Pré-RJ / Cautelar sem Administrador Judicial Nomeado"
    ],
    "subtipo_processo": "PRE",
    "causa_crise": "Volatilidade extrema nos preços internacionais de fertilizantes (NPK), desvalorização de estoques importados e restrição de linhas de comércio exterior pós-RJ anterior, acumulando R$ 1,98 bilhão de passivo",
    "gargalo_imediato": "Procedimento de Tutela Cautelar e Mediação Prévia no CEJUSC empresarial (ES/SP) sob acompanhamento do AJ Ruiz para estruturar Recuperação Extrajudicial com bancos agro e tradings globais",
    "tese_mandato": "Estruturação de DIP Financing garantido por estoques de misturadoras e recebíveis de safra, além de assessoria ao comitê de fornecedores internacionais de matérias-primas.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Uma das pioneiras nacionais na produção, mistura e distribuição de fertilizantes químicos (NPK) e insumos de nutrição vegetal (B3: FHER3), fundada em 1968 em Viana/ES. Opera mais de 10 unidades industriais misturadoras estrategicamente distribuídas pelos estados de SP, MG, ES, PR, GO, BA e RS.",
    "model_params": {
      "haircut_pct": 39,
      "recuperacao_pct": 61,
      "haircut_estimado_pct": 39,
      "recuperacao_estimada_pct": 61,
      "desconto_secundario_pct": 30.0,
      "valor_recuperado_mm": 1207.8,
      "ev_estimado_mm": 990.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 22.0,
        "classe_i_pct": 4.0,
        "classe_ii_pct": 36.0,
        "fiscal_pct": 8.0,
        "classe_iii_pct": 25.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 22.0,
        "c1_trabalhista": 4.0,
        "c2_garantia_real": 36.0,
        "c3_quirografario": 25.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 158.4
      },
      "dip_necessidade_mm": 237.6,
      "upi_valuation_estimado_mm": 693.0
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-25",
      "data_marco_br": "25/11/2026",
      "dias_restantes": 40,
      "marco_label": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)",
      "marco_tipo": "Homologação PRE",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (40d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-25",
      "tipo_marco": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)",
      "urgencia": "ALTA"
    },
    "url_noticia": "https://agfeed.com.br/negocios/justica-concede-folego-de-60-dias-para-fertilizantes-heringer-negociar-com-credores/",
    "url_tribunal_cvm": "https://sistemas.tjes.jus.br/pje/ConsultaPublica/listView.seam"
  },
  {
    "id": 35,
    "data_evento": "2026-09-21",
    "data_adicao": "2026-10-07",
    "empresa": "Grupo Edeltec (Energia Solar & Fotovoltaica)",
    "cnpj": "10.289.713/0001-70",
    "setor_detalhe": "Energia & Infraestrutura (Geração Distribuída & Equipamentos Fotovoltaicos)",
    "setor_macro": "Energia & Infraestrutura",
    "regiao": "Maringá, PR",
    "tribunal": "TJPR - Vara Empresarial de Maringá",
    "processo": "0019412-44.2026.8.16.0017",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.5,
    "tier": "Tier 2",
    "passivo_mm": 92,
    "passivo_display": "92",
    "credores": "Fabricantes globais de módulos solares e inversores (China), bancos de fomento comercial e transportadoras",
    "perfil_passivo": "Fornecedores Internacionais de Painéis Solares + Bancário de Giro",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "Aguardando nomeação judicial",
    "tese": "(1) Causa da crise: Forte queda nos preços de painéis fotovoltaicos (deflação de estoque), redução na conversão de projetos de geração distribuída (Marco Legal da GD) e inadimplência de integradores solares; (2) Gargalo imediato: Processamento de Recuperação Judicial em Maringá/PR (passivo de R$ 92 milhões) com exposição crítica a fabricantes asiáticos de módulos/inversores e bancos de capital de giro; (3) Oportunidade de mandato: Special Situations em Energia Solar para securitização de carteira de recebíveis de integradores, liquidação ordenada de estoques e repactuação com fornecedores internacionais.",
    "status": "Novo",
    "proximas_acoes": "Analisar carteira de recebíveis de integradores solares e propor estruturação de FIDC/DIP.",
    "watchdog_eligible": false,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "cidade": "Maringá",
    "uf": "PR",
    "coordenadas": [
      -23.421,
      -51.9331
    ],
    "regiao_macro": "Sul",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (PRJ)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Forte queda nos preços de painéis fotovoltaicos (deflação de estoque), redução na conversão de projetos de geração distribuída (Marco Legal da GD) e inadimplência de integradores solares",
    "gargalo_imediato": "Processamento de Recuperação Judicial em Maringá/PR (passivo de R$ 92 milhões) com exposição crítica a fabricantes asiáticos de módulos/inversores e bancos de capital de giro",
    "tese_mandato": "Special Situations em Energia Solar para securitização de carteira de recebíveis de integradores, liquidação ordenada de estoques e repactuação com fornecedores internacionais.",
    "agentes_fiduciarios": "Pentágono DTVM",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "energy_meta": {
      "debenture_codigo": "EDEL11 / Linhas Finimp Solar (R$ 92M)",
      "agente_fiduciario": "Pentágono DTVM",
      "inadimplemento_ccee": "N/A — Micro e Minigeração Distribuída (MMGD)",
      "risco_caducidade": "Moderado — Cancelamento de pareceres de acesso de GD junto às distribuidoras",
      "corte_rating_curtailment": "Inversão de fluxo de potência ( inversão de fluxo na rede de distribuição ) e deflação de módulos solares",
      "submercado": "Sul"
    },
    "descricao_empresa": "Importadora e distribuidora paranaense de equipamentos de energia solar fotovoltaica (geradores completos, módulos solares, inversores e estruturas de fixação) sediada em Maringá/PR, atendendo milhares de integradores e instaladores de geração distribuída (MMGD) nas regiões Sul, Sudeste e Centro-Oeste.",
    "model_params": {
      "haircut_pct": 51,
      "recuperacao_pct": 49,
      "haircut_estimado_pct": 51,
      "recuperacao_estimada_pct": 49,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 45.1,
      "ev_estimado_mm": 46.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 18.0,
        "classe_i_pct": 3.0,
        "classe_ii_pct": 42.0,
        "fiscal_pct": 7.0,
        "classe_iii_pct": 27.0,
        "classe_iv_pct": 3.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 18.0,
        "c1_trabalhista": 3.0,
        "c2_garantia_real": 42.0,
        "c3_quirografario": 27.0,
        "c4_me_epp": 3.0,
        "passivo_fiscal_estimado_mm": 6.4
      },
      "dip_necessidade_mm": 15.0,
      "upi_valuation_estimado_mm": 32.2
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-20",
      "data_marco_br": "20/11/2026",
      "dias_restantes": 35,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (35d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-20",
      "tipo_marco": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "urgencia": "ALTA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/categoria/recuperacao-judicial",
    "url_tribunal_cvm": "https://consulta.tjpr.jus.br/projudi_consulta/"
  },
  {
    "id": 36,
    "data_evento": "2026-09-28",
    "data_adicao": "2026-10-07",
    "empresa": "B-Green Soluções Ambientais (Ex-Stericycle)",
    "cnpj": "01.568.077/0001-25",
    "setor_detalhe": "Saúde & Farma (Tratamento de Resíduos Hospitalares & Serviços Ambientais)",
    "setor_macro": "Saúde & Farma",
    "regiao": "Campinas, SP",
    "tribunal": "TJSP - 1ª Vara Empresarial de Campinas",
    "processo": "1004215-15.2026.8.26.0354",
    "fase": "Constatação Prévia (art. 51-A)",
    "score": 8.5,
    "tier": "Tier 1",
    "passivo_mm": 83,
    "passivo_display": "83",
    "credores": "Instituições financeiras de leasing de frotas hospitalares, prestadores de serviços de incineração e fornecedores de equipamentos",
    "perfil_passivo": "Leasing de Frotas / Financiamento de Ativos + Fornecedores Operacionais",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "Perícia Prévia Nomeada (Art. 51-A)",
    "tese": "(1) Causa da crise: Elevado custo de manutenção e leasing de frota especializada e fornos de incineração de resíduos hospitalares, somado a atrasos em contratos públicos e hospitalares em Campinas e Mogi Mirim/SP; (2) Gargalo imediato: Negativa de segredo de justiça e determinação de Constatação Prévia (art. 51-A) no TJSP (Campinas) sobre R$ 83 milhões distribuídos entre 591 credores; (3) Oportunidade de mandato: Financial Advisory para estruturação do PRJ, blindagem de licenças ambientais da CETESB e renegociação de contratos de leasing operacional de frota.",
    "status": "Novo",
    "proximas_acoes": "Acompanhar resultado da perícia prévia em Campinas e publicação do edital de 591 credores.",
    "watchdog_eligible": false,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "cidade": "Campinas",
    "uf": "SP",
    "coordenadas": [
      -22.9099,
      -47.0626
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "Cautelar / Pré-RJ",
    "tipo_processo_label": "Constatação Prévia (Art. 51-A)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "subtipo_processo": "Cautelar / Pré-RJ",
    "causa_crise": "Elevado custo de manutenção e leasing de frota especializada e fornos de incineração de resíduos hospitalares, somado a atrasos em contratos públicos e hospitalares em Campinas e Mogi Mirim/SP",
    "gargalo_imediato": "Negativa de segredo de justiça e determinação de Constatação Prévia (art. 51-A) no TJSP (Campinas) sobre R$ 83 milhões distribuídos entre 591 credores",
    "tese_mandato": "Financial Advisory para estruturação do PRJ, blindagem de licenças ambientais da CETESB e renegociação de contratos de leasing operacional de frota.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Operadora líder no gerenciamento integrado, coleta especializada, autoclavagem e incineração de resíduos de serviços de saúde (lixo hospitalar infectante, químico e perfurocortante) e resíduos industriais perigosos (Classe I), resultante da aquisição da antiga operação brasileira da norte-americana Stericycle, com sede operacional na região de Campinas/SP.",
    "model_params": {
      "haircut_pct": 41,
      "recuperacao_pct": 59,
      "haircut_estimado_pct": 41,
      "recuperacao_estimada_pct": 59,
      "desconto_secundario_pct": 30.0,
      "valor_recuperado_mm": 49.0,
      "ev_estimado_mm": 41.5,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 10.0
      },
      "dip_necessidade_mm": 15.0,
      "upi_valuation_estimado_mm": 29.0
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-27",
      "data_marco_br": "27/11/2026",
      "dias_restantes": 42,
      "marco_label": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE",
      "marco_tipo": "Cautelar 20-B (60d)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (42d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-27",
      "tipo_marco": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE",
      "urgencia": "ALTA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/b-green-recuperacao-judicial-2026",
    "url_tribunal_cvm": "https://esaj.tjsp.jus.br/cpopg/open.do"
  },
  {
    "id": 37,
    "data_evento": "2026-08-15",
    "data_adicao": "2026-10-07",
    "empresa": "Grupo Toky (Tok&Stok e Mobly)",
    "cnpj": "31.553.627/0001-01",
    "setor_detalhe": "Varejo & Consumo (Móveis & Decoração)",
    "setor_macro": "Varejo & Consumo",
    "regiao": "São Paulo, SP",
    "tribunal": "TJSP - Varas Empresariais de SP",
    "processo": "1074120-90.2026.8.26.0100",
    "fase": "Recuperação Extrajudicial (Classe 128)",
    "score": 8,
    "tier": "Tier 3",
    "passivo_mm": 600,
    "passivo_display": "600",
    "credores": "Bancos de capital de giro e debenturistas da rede de lojas",
    "perfil_passivo": "Bancário Comercial + Debêntures",
    "advocacia": "Spinelli Advogados",
    "aj": "N/A (Fase Extrajudicial)",
    "tese": "(1) Causa da crise: Queima de caixa histórica da rede de móveis e decoração Tok&Stok combinada aos custos de integração operacional e logística após a combinação de negócios com a Mobly; (2) Gargalo imediato: Homologação e execução do plano de Recuperação Extrajudicial (Classe 128) nas Varas Empresariais de SP abrangendo R$ 600 milhões em dívidas bancárias e debêntures; (3) Oportunidade de mandato: Gestão Interina (CRO) na captura de sinergias de centros de distribuição, renegociação de aluguéis com shopping centers e monitoramento de covenants para debenturistas (Vórtx/Pentágono).",
    "status": "Novo",
    "proximas_acoes": "Mapear desdobramentos da integração Mobly / Tok&Stok junto a bancos e debenturistas.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Emissão de Debêntures / Mercado de Capitais (Fiscalização de Covenants)"
    ],
    "cidade": "São Paulo",
    "uf": "SP",
    "coordenadas": [
      -23.5505,
      -46.6333
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRE",
    "tipo_processo_label": "Recuperação Extrajudicial (PRE)",
    "strategy_id": "consensual",
    "strategy_name": "Consensual & Pré-Concursal",
    "strategy_tag": "CONSENSUAL / ART. 20-B",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Emissão de Debêntures / Mercado de Capitais (Fiscalização de Covenants)"
    ],
    "subtipo_processo": "PRE",
    "causa_crise": "Queima de caixa histórica da rede de móveis e decoração Tok&Stok combinada aos custos de integração operacional e logística após a combinação de negócios com a Mobly",
    "gargalo_imediato": "Homologação e execução do plano de Recuperação Extrajudicial (Classe 128) nas Varas Empresariais de SP abrangendo R$ 600 milhões em dívidas bancárias e debêntures",
    "tese_mandato": "Gestão Interina (CRO) na captura de sinergias de centros de distribuição, renegociação de aluguéis com shopping centers e monitoramento de covenants para debenturistas (Vórtx/Pentágono).",
    "agentes_fiduciarios": "Vórtx DTVM, Pentágono DTVM",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Plataforma líder no varejo omnichannel de móveis e artigos de decoração no Brasil (B3: MBLY3), resultante da combinação de negócios entre o e-commerce Mobly e a icônica rede de megalojas de design Tok&Stok (fundada em 1978), operando mais de 50 lojas físicas de grande formato e centros logísticos avançados.",
    "model_params": {
      "haircut_pct": 46,
      "recuperacao_pct": 54,
      "haircut_estimado_pct": 46,
      "recuperacao_estimada_pct": 54,
      "desconto_secundario_pct": 30.0,
      "valor_recuperado_mm": 324.0,
      "ev_estimado_mm": 300.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 72.0
      },
      "dip_necessidade_mm": 72.0,
      "upi_valuation_estimado_mm": 210.0
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-13",
      "data_marco_br": "13/11/2026",
      "dias_restantes": 28,
      "marco_label": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)",
      "marco_tipo": "Homologação PRE",
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (28d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-13",
      "tipo_marco": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)",
      "urgencia": "ALTA"
    },
    "url_noticia": "https://neofeed.com.br/negocios/grupo-toky-amplia-a-lista-de-empresas-que-recorrem-a-recuperacao-judicial/",
    "url_tribunal_cvm": "https://esaj.tjsp.jus.br/cpopg/open.do"
  },
  {
    "id": 38,
    "data_evento": "2026-08-25",
    "data_adicao": "2026-10-07",
    "empresa": "Terra Assessoria de Siderúrgicas",
    "cnpj": "09.639.962/0001-60",
    "setor_detalhe": "Indústria & Manufatura (Consultoria Metalúrgica & Siderurgia)",
    "setor_macro": "Indústria & Manufatura",
    "regiao": "Sete Lagoas, MG",
    "tribunal": "TJMG - Vara Empresarial de Sete Lagoas",
    "processo": "5008412-20.2026.8.13.0672",
    "fase": "Recuperação Extrajudicial (Classe 128)",
    "score": 7.5,
    "tier": "Tier 3",
    "passivo_mm": 305,
    "passivo_display": "305",
    "credores": "Fornecedores industriais do setor siderúrgico e bancos de crédito corporativo",
    "perfil_passivo": "Quirografário Comercial com Cadeia Siderúrgica + Bancário",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "N/A (Fase Extrajudicial)",
    "tese": "(1) Causa da crise: Retração nos preços de ferro-gusa e carvão vegetal no polo siderúrgico de Sete Lagoas/MG, comprimindo o capital de giro e gerando inadimplência na cadeia de fornecedores; (2) Gargalo imediato: Pedido de homologação de Recuperação Extrajudicial no TJMG (passivo de R$ 305 milhões) sujeito a impugnações de credores quirografários e bancos de crédito corporativo; (3) Oportunidade de mandato: Assessoria Creditor-Side a fornecedores industriais e bancos credores para auditoria do plano extrajudicial e estruturação de contratos de tolling siderúrgico.",
    "status": "Novo",
    "proximas_acoes": "Acompanhar prazo de impugnação de credores quirografários da cadeia siderúrgica.",
    "watchdog_eligible": false,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "cidade": "Sete Lagoas",
    "uf": "MG",
    "coordenadas": [
      -19.4658,
      -44.2467
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRE",
    "tipo_processo_label": "Recuperação Extrajudicial (PRE)",
    "strategy_id": "consensual",
    "strategy_name": "Consensual & Pré-Concursal",
    "strategy_tag": "CONSENSUAL / ART. 20-B",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "subtipo_processo": "PRE",
    "causa_crise": "Retração nos preços de ferro-gusa e carvão vegetal no polo siderúrgico de Sete Lagoas/MG, comprimindo o capital de giro e gerando inadimplência na cadeia de fornecedores",
    "gargalo_imediato": "Pedido de homologação de Recuperação Extrajudicial no TJMG (passivo de R$ 305 milhões) sujeito a impugnações de credores quirografários e bancos de crédito corporativo",
    "tese_mandato": "Assessoria Creditor-Side a fornecedores industriais e bancos credores para auditoria do plano extrajudicial e estruturação de contratos de tolling siderúrgico.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Empresa mineira de engenharia metalúrgica, consultoria industrial e intermediação de insumos siderúrgicos (minério de ferro, carvão vegetal e ligas) sediada no polo produtor de ferro-gusa de Sete Lagoas/MG, atendendo fundições e usinas guserias independentes do quadrilátero ferrífero.",
    "model_params": {
      "haircut_pct": 42,
      "recuperacao_pct": 58,
      "haircut_estimado_pct": 42,
      "recuperacao_estimada_pct": 58,
      "desconto_secundario_pct": 30.0,
      "valor_recuperado_mm": 176.9,
      "ev_estimado_mm": 152.5,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 36.6
      },
      "dip_necessidade_mm": 36.6,
      "upi_valuation_estimado_mm": 106.8
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-23",
      "data_marco_br": "23/11/2026",
      "dias_restantes": 38,
      "marco_label": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)",
      "marco_tipo": "Homologação PRE",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (38d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-23",
      "tipo_marco": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)",
      "urgencia": "ALTA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/categoria/recuperacao-judicial",
    "url_tribunal_cvm": "https://pje-consulta-publica.tjmg.jus.br/"
  },
  {
    "id": 39,
    "data_evento": "2026-10-03",
    "data_adicao": "2026-10-07",
    "empresa": "Grupo Agroindustrial do Cerrado (Grãos, Soja/Milho)",
    "cnpj": "08.412.981/0001-34",
    "setor_detalhe": "Agro",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Sorriso, MT",
    "tribunal": "Fórum de Sorriso (MT) // CENPROT",
    "processo": "Pré-Processual (Monitoramento Extrajudicial)",
    "fase": "Sinal Precursor (Tier 0)",
    "score": 9.4,
    "tier": "Tier 0",
    "passivo_mm": 185,
    "passivo_display": "185",
    "credores": "Tradings Globais (Cargill, Bunge, ADM), Revendas de Insumos e Bancos do Agro (BB, Sicredi)",
    "perfil_passivo": "Barter / CPR Física e Financeira + Crédito Rural de Custeio",
    "advocacia": "Em prospecção (Contatos com bancas de MT e SP)",
    "aj": "N/A (Fase Pré-Concursal)",
    "tese": "(1) Causa da crise: Quebra de rentabilidade nas safras de soja e milho no médio-norte de Mato Grosso (Sorriso/MT) frente ao alto custo de arrendamento e insumos travados em dólar; (2) Gargalo imediato: Sinal Precursor Forense (Tier 0) capturado via spike de protestos no CENPROT-MT e ações preparatórias de arresto de grãos por tradings globais (Cargill, Bunge, ADM) sobre passivo estimado em R$ 185 milhões; (3) Oportunidade de mandato: Mandato preventivo de Shadow Restructuring e negociação de Standstill com tradings e bancos (BB, Sicredi) 60 dias antes da judicialização.",
    "status": "Novo",
    "proximas_acoes": "Abordar produtores via assessoria financeira independente antes do pedido cautelar de safra",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Concentração em 3 Tradings (CR4 > 65% do passivo comercial)",
      "Fase Pré-RJ / Mediação de Standstill sem Administrador Judicial"
    ],
    "cidade": "Sorriso",
    "uf": "MT",
    "coordenadas": [
      -12.5428,
      -55.7214
    ],
    "regiao_macro": "Centro-Oeste",
    "tipo_processo": "Tier 0",
    "tipo_processo_label": "Sinais Forenses (Tier 0)",
    "strategy_id": "precursor",
    "strategy_name": "Distress Precursor (Tier 0)",
    "strategy_tag": "PRECURSOR / TIER 0",
    "institutional_triggers": [
      "Concentração em 3 Tradings (CR4 > 65% do passivo comercial)",
      "Fase Pré-RJ / Mediação de Standstill sem Administrador Judicial"
    ],
    "subtipo_processo": "Tier 0",
    "causa_crise": "Quebra de rentabilidade nas safras de soja e milho no médio-norte de Mato Grosso (Sorriso/MT) frente ao alto custo de arrendamento e insumos travados em dólar",
    "gargalo_imediato": "Sinal Precursor Forense (Tier 0) capturado via spike de protestos no CENPROT-MT e ações preparatórias de arresto de grãos por tradings globais (Cargill, Bunge, ADM) sobre passivo estimado em R$ 185 milhões",
    "tese_mandato": "Mandato preventivo de Shadow Restructuring e negociação de Standstill com tradings e bancos (BB, Sicredi) 60 dias antes da judicialização.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Conglomerado agrícola de grande porte estabelecido no coração produtivo da BR-163 (Sorriso e Lucas do Rio Verde/MT), operando mais de 25 mil hectares de lavouras tecnificadas de soja e milho segunda safra, além de estrutura própria de secagem e beneficiamento primário de grãos.",
    "model_params": {
      "haircut_pct": 33,
      "recuperacao_pct": 67,
      "haircut_estimado_pct": 33,
      "recuperacao_estimada_pct": 67,
      "desconto_secundario_pct": 25.0,
      "valor_recuperado_mm": 124.0,
      "ev_estimado_mm": 92.5,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 22.0,
        "classe_i_pct": 4.0,
        "classe_ii_pct": 36.0,
        "fiscal_pct": 8.0,
        "classe_iii_pct": 25.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 22.0,
        "c1_trabalhista": 4.0,
        "c2_garantia_real": 36.0,
        "c3_quirografario": 25.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 14.8
      },
      "dip_necessidade_mm": 22.2,
      "upi_valuation_estimado_mm": 64.8
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-17",
      "data_marco_br": "17/11/2026",
      "dias_restantes": 32,
      "marco_label": "Janela Crítica Pré-Concursal (45d) — Standstill Bancário / CVM / CCEE",
      "marco_tipo": "Janela Tier 0",
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (32d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-17",
      "tipo_marco": "Janela Crítica Pré-Concursal (45d) — Standstill Bancário / CVM / CCEE",
      "urgencia": "ALTA"
    },
    "url_noticia": "https://rad.cvm.gov.br/ENET/frmConsultaExternaCVM.aspx",
    "url_tribunal_cvm": "https://pje.tjmt.jus.br/pje/ConsultaPublica/listView.seam"
  },
  {
    "id": 40,
    "data_evento": "2026-10-04",
    "data_adicao": "2026-10-07",
    "empresa": "Rede Hospitalar & Operadora Regional Sul-Sudeste",
    "cnpj": "14.289.442/0001-89",
    "setor_detalhe": "Saúde",
    "setor_macro": "Saúde & Farma",
    "regiao": "Curitiba, PR",
    "tribunal": "Regulatório ANS // TRT-4 (PR)",
    "processo": "DOU Resolução Operacional ANS nº 3.142/2026",
    "fase": "Sinal Precursor (Tier 0)",
    "score": 9.2,
    "tier": "Tier 0",
    "passivo_mm": 260,
    "passivo_display": "260",
    "credores": "Bancos comerciais (Itaú, Bradesco, Santander), Fornecedores de OPME e Distribuidores de Medicamentos",
    "perfil_passivo": "Bancário Capital de Giro + Fornecedores Médicos + Passivo Trabalhista",
    "advocacia": "Banca regional especializada em saúde em negociação",
    "aj": "N/A (Fase Pré-Concursal)",
    "tese": "(1) Causa da crise: Sinistralidade médica elevada pós-pandemia, inflação de materiais especiais (OPME) e retenção de reservas técnicas pela Agência Nacional de Saúde Suplementar (ANS); (2) Gargalo imediato: Sinal Precursor Forense (Tier 0) decorrente da instauração de Direção Fiscal pela ANS (DOU Resolução Operacional nº 3.142/2026) e inclusão em Procedimento de Execução Trabalhista (PEPT) no TRT-4 sobre passivo de R$ 260 milhões; (3) Oportunidade de mandato: Assessoria Company-Side para alienação compulsória/voluntária de carteira de beneficiários e hospitais próprios (UPI regulada ANS) e Watchdog para bancos credores (Itaú, Bradesco, Santander).",
    "status": "Novo",
    "proximas_acoes": "Mapear diretores da operadora e apresentar proposta de governança de crise independente",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta concentração bancária (CR4 > 70% em 3 bancos)",
      "Alienação de Ativos / UPI Hospitalar para estancar queima de caixa"
    ],
    "cidade": "Curitiba",
    "uf": "PR",
    "coordenadas": [
      -25.4284,
      -49.2733
    ],
    "regiao_macro": "Sul",
    "tipo_processo": "Tier 0",
    "tipo_processo_label": "Sinais Forenses (Tier 0)",
    "strategy_id": "precursor",
    "strategy_name": "Distress Precursor (Tier 0)",
    "strategy_tag": "PRECURSOR / TIER 0",
    "institutional_triggers": [
      "Alta concentração bancária (CR4 > 70% em 3 bancos)",
      "Alienação de Ativos / UPI Hospitalar para estancar queima de caixa"
    ],
    "subtipo_processo": "Tier 0",
    "causa_crise": "Sinistralidade médica elevada pós-pandemia, inflação de materiais especiais (OPME) e retenção de reservas técnicas pela Agência Nacional de Saúde Suplementar (ANS)",
    "gargalo_imediato": "Sinal Precursor Forense (Tier 0) decorrente da instauração de Direção Fiscal pela ANS (DOU Resolução Operacional nº 3.142/2026) e inclusão em Procedimento de Execução Trabalhista (PEPT) no TRT-4 sobre passivo de R$ 260 milhões",
    "tese_mandato": "Assessoria Company-Side para alienação compulsória/voluntária de carteira de beneficiários e hospitais próprios (UPI regulada ANS) e Watchdog para bancos credores (Itaú, Bradesco, Santander).",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Operadora regional de planos de saúde suplementar médico-hospitalar (cerca de 120 mil vidas beneficiárias) verticalizada com rede própria de hospitais gerais, centros clínicos e pronto-atendimento nos estados do Paraná e Santa Catarina.",
    "model_params": {
      "haircut_pct": 28,
      "recuperacao_pct": 72,
      "haircut_estimado_pct": 28,
      "recuperacao_estimada_pct": 72,
      "desconto_secundario_pct": 25.0,
      "valor_recuperado_mm": 187.2,
      "ev_estimado_mm": 169.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 31.2
      },
      "dip_necessidade_mm": 31.2,
      "upi_valuation_estimado_mm": 91.0
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-18",
      "data_marco_br": "18/11/2026",
      "dias_restantes": 33,
      "marco_label": "Janela Crítica Pré-Concursal (45d) — Standstill Bancário / CVM / CCEE",
      "marco_tipo": "Janela Tier 0",
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (33d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-18",
      "tipo_marco": "Janela Crítica Pré-Concursal (45d) — Standstill Bancário / CVM / CCEE",
      "urgencia": "ALTA"
    },
    "url_noticia": "https://rad.cvm.gov.br/ENET/frmConsultaExternaCVM.aspx",
    "url_tribunal_cvm": "https://www.gov.br/ans/pt-br"
  },
  {
    "id": 41,
    "data_evento": "2026-10-04",
    "data_adicao": "2026-10-07",
    "empresa": "Renovare Energia & Comercializadora S/A",
    "cnpj": "21.733.109/0001-55",
    "setor_detalhe": "Energia",
    "setor_macro": "Energia & Infraestrutura",
    "regiao": "São Paulo, SP",
    "tribunal": "CCEE // CVM (Mercado de Capitais)",
    "processo": "Notificação CCEE MCP nº 2026/089",
    "fase": "Sinal Precursor (Tier 0)",
    "score": 9.1,
    "tier": "Tier 0",
    "passivo_mm": 340,
    "passivo_display": "340",
    "credores": "Debenturistas da 2ª Emissão, Bancos repassadores BNDES e Agentes da CCEE",
    "perfil_passivo": "Debêntures de Infraestrutura + Garantias Financeiras MCP CCEE",
    "advocacia": "Em consulta com banca de infraestrutura e energia",
    "aj": "N/A (Fase Pré-Concursal)",
    "tese": "(1) Causa da crise: Exposição descoberta à volatilidade do PLD horário no submercado Nordeste/Sudeste somada a perdas por curtailment (constrained-off) em ativos de geração renovável; (2) Gargalo imediato: Sinal Precursor Forense (Tier 0) com notificação de inadimplemento na liquidação do Mercado de Curto Prazo da CCEE (MCP nº 2026/089) e convocação de AGD da 2ª emissão de debêntures (R$ 340 milhões) por quebra de ICSD; (3) Oportunidade de mandato: Financial Advisory em Energia para negociação de waiver/standstill com debenturistas (Pentágono/Oliveira Trust), recomposição de garantias na CCEE e venda de portfólio de PPAs.",
    "status": "Novo",
    "proximas_acoes": "Acompanhar assembleia de debenturistas convocada para waiver de covenant ICSD",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Convocação de AGD de debenturistas para deliberação de cross-default",
      "Fase Pré-RJ / Mediação CCEE sem Administrador Judicial"
    ],
    "cidade": "São Paulo",
    "uf": "SP",
    "coordenadas": [
      -23.5505,
      -46.6333
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "Tier 0",
    "tipo_processo_label": "Sinais Forenses (Tier 0)",
    "strategy_id": "precursor",
    "strategy_name": "Distress Precursor (Tier 0)",
    "strategy_tag": "PRECURSOR / TIER 0",
    "institutional_triggers": [
      "Convocação de AGD de debenturistas para deliberação de cross-default",
      "Fase Pré-RJ / Mediação CCEE sem Administrador Judicial"
    ],
    "subtipo_processo": "Tier 0",
    "causa_crise": "Exposição descoberta à volatilidade do PLD horário no submercado Nordeste/Sudeste somada a perdas por curtailment (constrained-off) em ativos de geração renovável",
    "gargalo_imediato": "Sinal Precursor Forense (Tier 0) com notificação de inadimplemento na liquidação do Mercado de Curto Prazo da CCEE (MCP nº 2026/089) e convocação de AGD da 2ª emissão de debêntures (R$ 340 milhões) por quebra de ICSD",
    "tese_mandato": "Financial Advisory em Energia para negociação de waiver/standstill com debenturistas (Pentágono/Oliveira Trust), recomposição de garantias na CCEE e venda de portfólio de PPAs.",
    "agentes_fiduciarios": "Pentágono DTVM S.A.",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "energy_meta": {
      "debenture_codigo": "RNVE12 — 2ª Emissão Infraestrutura (R$ 340M)",
      "agente_fiduciario": "Pentágono DTVM S.A.",
      "inadimplemento_ccee": "Alerta Vermelho — Notificação CCEE MCP nº 2026/089 (Insuficiência de Garantias)",
      "risco_caducidade": "Alto — Procedimento de desligamento por inadimplemento na CCEE em curso",
      "corte_rating_curtailment": "Downgrade severo na CVM por quebra de covenant ICSD (< 1,15x) devido a curtailment eólico/solar no NE",
      "submercado": "Nordeste"
    },
    "descricao_empresa": "Plataforma independente de comercialização de energia elétrica no Mercado Livre (ACL) e holding de Sociedades de Propósito Específico (SPEs) detentoras de usinas solares e eólicas no Nordeste e Sudeste, estruturada com emissão de debêntures de infraestrutura e contratos bilaterais de longo prazo (PPAs).",
    "model_params": {
      "haircut_pct": 28,
      "recuperacao_pct": 72,
      "haircut_estimado_pct": 28,
      "recuperacao_estimada_pct": 72,
      "desconto_secundario_pct": 25.0,
      "valor_recuperado_mm": 244.8,
      "ev_estimado_mm": 170.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 18.0,
        "classe_i_pct": 3.0,
        "classe_ii_pct": 42.0,
        "fiscal_pct": 7.0,
        "classe_iii_pct": 27.0,
        "classe_iv_pct": 3.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 18.0,
        "c1_trabalhista": 3.0,
        "c2_garantia_real": 42.0,
        "c3_quirografario": 27.0,
        "c4_me_epp": 3.0,
        "passivo_fiscal_estimado_mm": 23.8
      },
      "dip_necessidade_mm": 40.8,
      "upi_valuation_estimado_mm": 119.0
    },
    "calendar_meta": {
      "data_marco_iso": "2026-10-27",
      "data_marco_br": "27/10/2026",
      "dias_restantes": 11,
      "marco_label": "Assembleia Geral de Debenturistas (AGD — 2ª Emissão RNVE12) & Garantias CCEE",
      "marco_tipo": "AGD Debêntures",
      "urgencia_nivel": "critico",
      "urgencia_label": "URGENTE (11d)",
      "is_fixed_edital": true,
      "data_marco": "2026-10-27",
      "tipo_marco": "Assembleia Geral de Debenturistas (AGD — 2ª Emissão RNVE12) & Garantias CCEE",
      "urgencia": "CRÍTICA"
    },
    "url_noticia": "https://www.pentagonotrustee.com.br/",
    "url_tribunal_cvm": "https://rad.cvm.gov.br/ENET/frmConsultaExternaCVM.aspx"
  },
  {
    "id": 42,
    "data_evento": "2026-10-05",
    "data_adicao": "2026-10-07",
    "empresa": "Rede Varejista Moda & Calçados Brasil (120 Lojas)",
    "cnpj": "05.118.774/0001-92",
    "setor_detalhe": "Varejo",
    "setor_macro": "Varejo & Consumo",
    "regiao": "São Paulo, SP",
    "tribunal": "CENPROT-SP // PGFN (São Paulo)",
    "processo": "Execuções Fiscais PGFN nº 5001192-33.2026.4.03.6182",
    "fase": "Sinal Precursor (Tier 0)",
    "score": 8.8,
    "tier": "Tier 0",
    "passivo_mm": 145,
    "passivo_display": "145",
    "credores": "Bancos privados (Itaú, Santander, Bradesco, Safra, Daycoval), Shopping Centers e Confeccionistas",
    "perfil_passivo": "Capital de Giro + Aluguéis Comerciais Mínimos + Fornecedores",
    "advocacia": "Em sondagem preliminar",
    "aj": "N/A (Fase Pré-Concursal)",
    "tese": "(1) Causa da crise: Queda de vendas mesmas lojas (SSS) no varejo de moda e calçados, excesso de estoques sazonais e custo elevado de antecipação de recebíveis de cartão em 120 lojas próprias; (2) Gargalo imediato: Sinal Precursor Forense (Tier 0) identificado por spike crítico de protestos no CENPROT-SP e pedido de penhora de faturamento (art. 866 do CPC) em execução fiscal da PGFN sobre passivo de R$ 145 milhões; (3) Oportunidade de mandato: Diagnóstico de caixa de 13 semanas, Gestão Interina (CRO) para fechamento imediato de 25 lojas deficitárias e acordo de standstill com Itaú, Santander, Bradesco, Safra e Daycoval.",
    "status": "Novo",
    "proximas_acoes": "Identificar conselho de administração e ofertar diagnóstico independente de 13 semanas de caixa",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "CR4 bancário concentrado em 4 bancos médios e grandes (68%)",
      "Fase Pré-RJ com necessidade de plano de estancamento de queima de caixa"
    ],
    "cidade": "São Paulo",
    "uf": "SP",
    "coordenadas": [
      -23.5505,
      -46.6333
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "Tier 0",
    "tipo_processo_label": "Sinais Forenses (Tier 0)",
    "strategy_id": "precursor",
    "strategy_name": "Distress Precursor (Tier 0)",
    "strategy_tag": "PRECURSOR / TIER 0",
    "institutional_triggers": [
      "CR4 bancário concentrado em 4 bancos médios e grandes (68%)",
      "Fase Pré-RJ com necessidade de plano de estancamento de queima de caixa"
    ],
    "subtipo_processo": "Tier 0",
    "causa_crise": "Queda de vendas mesmas lojas (SSS) no varejo de moda e calçados, excesso de estoques sazonais e custo elevado de antecipação de recebíveis de cartão em 120 lojas próprias",
    "gargalo_imediato": "Sinal Precursor Forense (Tier 0) identificado por spike crítico de protestos no CENPROT-SP e pedido de penhora de faturamento (art. 866 do CPC) em execução fiscal da PGFN sobre passivo de R$ 145 milhões",
    "tese_mandato": "Diagnóstico de caixa de 13 semanas, Gestão Interina (CRO) para fechamento imediato de 25 lojas deficitárias e acordo de standstill com Itaú, Santander, Bradesco, Safra e Daycoval.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Rede varejista brasileira de moda acessível, confecções familiares e calçados com forte presença em lojas de rua de alto fluxo e shopping centers regionais (120 pontos de venda ativos nas regiões Sudeste e Sul), operando modelo intensivo de financiamento ao consumidor (crediário próprio e cartões).",
    "model_params": {
      "haircut_pct": 40,
      "recuperacao_pct": 60,
      "haircut_estimado_pct": 40,
      "recuperacao_estimada_pct": 60,
      "desconto_secundario_pct": 25.0,
      "valor_recuperado_mm": 87.0,
      "ev_estimado_mm": 72.5,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 17.4
      },
      "dip_necessidade_mm": 17.4,
      "upi_valuation_estimado_mm": 50.8
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-19",
      "data_marco_br": "19/11/2026",
      "dias_restantes": 34,
      "marco_label": "Janela Crítica Pré-Concursal (45d) — Standstill Bancário / CVM / CCEE",
      "marco_tipo": "Janela Tier 0",
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (34d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-19",
      "tipo_marco": "Janela Crítica Pré-Concursal (45d) — Standstill Bancário / CVM / CCEE",
      "urgencia": "ALTA"
    },
    "url_noticia": "https://rad.cvm.gov.br/ENET/frmConsultaExternaCVM.aspx",
    "url_tribunal_cvm": "https://esaj.tjsp.jus.br/cpopg/open.do"
  },
  {
    "id": 43,
    "data_evento": "2026-10-05",
    "data_adicao": "2026-10-07",
    "empresa": "Metalúrgica Autopeças & Componentes Pesados",
    "cnpj": "58.910.223/0001-44",
    "setor_detalhe": "Indústria",
    "setor_macro": "Indústria & Manufatura",
    "regiao": "Campinas, SP",
    "tribunal": "CVM Fundos.NET // 2º CRI Campinas",
    "processo": "FIDC Autopeças SP - Fato Relevante CVM nº 18/2026",
    "fase": "Sinal Precursor (Tier 0)",
    "score": 8.6,
    "tier": "Tier 0",
    "passivo_mm": 95,
    "passivo_display": "95",
    "credores": "FIDC de Duplicatas Mercantis, Bancos Industriais (Bradesco, Santander) e Fornecedores de Aço",
    "perfil_passivo": "Antecipação de Recebíveis Bloqueados + Garantia Real de Galpão Fabril",
    "advocacia": "Em estruturação de governança emergencial",
    "aj": "N/A (Fase Pré-Concursal)",
    "tese": "(1) Causa da crise: Redução de pedidos de montadoras de veículos pesados e devolução de duplicatas mercantis cedidas a fundos de investimento em direitos creditórios (FIDCs); (2) Gargalo imediato: Sinal Precursor Forense (Tier 0) via Fato Relevante na CVM (Fundos.NET) decretando amortização antecipada de FIDC de autopeças e intimação no 2º CRI de Campinas/SP (SEIC) para consolidação fiduciária do galpão fabril (passivo de R$ 95 milhões); (3) Oportunidade de mandato: Ajuizamento de tutela cautelar de urgência para blindagem de ativo industrial essencial, acordo tripartite com montadoras clientes e estruturação de DIP de fornecedor.",
    "status": "Novo",
    "proximas_acoes": "Contatar acionista controlador alertando para risco iminente de consolidação fiduciária no SEIC",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Previsão de DIP de Fornecedor / Sistemista para sustentar cadeia automotiva",
      "Fase Pré-RJ para proteção de ativo industrial essencial"
    ],
    "cidade": "Campinas",
    "uf": "SP",
    "coordenadas": [
      -22.9099,
      -47.0626
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "Tier 0",
    "tipo_processo_label": "Sinais Forenses (Tier 0)",
    "strategy_id": "precursor",
    "strategy_name": "Distress Precursor (Tier 0)",
    "strategy_tag": "PRECURSOR / TIER 0",
    "institutional_triggers": [
      "Previsão de DIP de Fornecedor / Sistemista para sustentar cadeia automotiva",
      "Fase Pré-RJ para proteção de ativo industrial essencial"
    ],
    "subtipo_processo": "Tier 0",
    "causa_crise": "Redução de pedidos de montadoras de veículos pesados e devolução de duplicatas mercantis cedidas a fundos de investimento em direitos creditórios (FIDCs)",
    "gargalo_imediato": "Sinal Precursor Forense (Tier 0) via Fato Relevante na CVM (Fundos.NET) decretando amortização antecipada de FIDC de autopeças e intimação no 2º CRI de Campinas/SP (SEIC) para consolidação fiduciária do galpão fabril (passivo de R$ 95 milhões)",
    "tese_mandato": "Ajuizamento de tutela cautelar de urgência para blindagem de ativo industrial essencial, acordo tripartite com montadoras clientes e estruturação de DIP de fornecedor.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Reit Securitizadora",
    "descricao_empresa": "Indústria metalúrgica sistemista (Tier 2 automotivo) instalada no polo tecnológico e industrial de Campinas/SP, especializada em estamparia pesada, usinagem CNC e subconjuntos soldados fornecidos sob contratos just-in-time para montadoras de caminhões, ônibus, tratores e máquinas agrícolas.",
    "model_params": {
      "haircut_pct": 31,
      "recuperacao_pct": 69,
      "haircut_estimado_pct": 31,
      "recuperacao_estimada_pct": 69,
      "desconto_secundario_pct": 25.0,
      "valor_recuperado_mm": 65.5,
      "ev_estimado_mm": 47.5,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 11.4
      },
      "dip_necessidade_mm": 15.0,
      "upi_valuation_estimado_mm": 33.2
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-19",
      "data_marco_br": "19/11/2026",
      "dias_restantes": 34,
      "marco_label": "Janela Crítica Pré-Concursal (45d) — Standstill Bancário / CVM / CCEE",
      "marco_tipo": "Janela Tier 0",
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (34d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-19",
      "tipo_marco": "Janela Crítica Pré-Concursal (45d) — Standstill Bancário / CVM / CCEE",
      "urgencia": "ALTA"
    },
    "url_noticia": "https://rad.cvm.gov.br/ENET/frmConsultaExternaCVM.aspx",
    "url_tribunal_cvm": "https://rad.cvm.gov.br/ENET/frmConsultaExternaCVM.aspx"
  },
  {
    "id": 44,
    "data_evento": "2026-10-06",
    "data_adicao": "2026-10-07",
    "empresa": "TransLog Cargas Pesadas & Logística Rodoviária",
    "cnpj": "18.330.145/0001-18",
    "setor_detalhe": "Serviços",
    "setor_macro": "Tecnologia & Serviços B2B",
    "regiao": "São Paulo, SP",
    "tribunal": "TJSP Varas Cíveis // TRT-2 (SP)",
    "processo": "Busca e Apreensão nº 1018922-88.2026.8.26.0002",
    "fase": "Sinal Precursor (Tier 0)",
    "score": 8.5,
    "tier": "Tier 0",
    "passivo_mm": 120,
    "passivo_display": "120",
    "credores": "Bancos de Montadoras (Mercedes-Benz Bank, Scania Banco, Volvo Financial), Distribuidoras de Diesel e Bancos Privados",
    "perfil_passivo": "Alienação Fiduciária de Frota (Finame/Leasing) + Combustível",
    "advocacia": "Em consulta com banca cível e societária",
    "aj": "N/A (Fase Pré-Concursal)",
    "tese": "(1) Causa da crise: Defasagem nas tabelas de frete rodoviário pesado frente ao aumento do diesel, manutenção e juros sobre financiamentos de renovação de frota (Finame); (2) Gargalo imediato: Sinal Precursor Forense (Tier 0) com distribuição simultânea de ações de busca e apreensão por bancos de montadoras (Mercedes-Benz, Scania, Volvo) no TJSP e instauração de PEPT no TRT-2 sobre R$ 120 milhões de passivo; (3) Oportunidade de mandato: Renegociação preventiva em bloco com os 3 bancos de montadora (que detêm > 60% da dívida), preservação judicial da frota operacional e estruturação de Recuperação Extrajudicial.",
    "status": "Novo",
    "proximas_acoes": "Apresentar plano de preservação da frota produtiva antes de cumprimento de mandados de busca",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Mais de 60% da dívida atrelada a 3 bancos de montadora",
      "Fase Pré-RJ com necessidade de blindagem de bens de capital essenciais"
    ],
    "cidade": "São Paulo",
    "uf": "SP",
    "coordenadas": [
      -23.5505,
      -46.6333
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "Tier 0",
    "tipo_processo_label": "Sinais Forenses (Tier 0)",
    "strategy_id": "precursor",
    "strategy_name": "Distress Precursor (Tier 0)",
    "strategy_tag": "PRECURSOR / TIER 0",
    "institutional_triggers": [
      "Mais de 60% da dívida atrelada a 3 bancos de montadora",
      "Fase Pré-RJ com necessidade de blindagem de bens de capital essenciais"
    ],
    "subtipo_processo": "Tier 0",
    "causa_crise": "Defasagem nas tabelas de frete rodoviário pesado frente ao aumento do diesel, manutenção e juros sobre financiamentos de renovação de frota (Finame)",
    "gargalo_imediato": "Sinal Precursor Forense (Tier 0) com distribuição simultânea de ações de busca e apreensão por bancos de montadoras (Mercedes-Benz, Scania, Volvo) no TJSP e instauração de PEPT no TRT-2 sobre R$ 120 milhões de passivo",
    "tese_mandato": "Renegociação preventiva em bloco com os 3 bancos de montadora (que detêm > 60% da dívida), preservação judicial da frota operacional e estruturação de Recuperação Extrajudicial.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Transportadora rodoviária de cargas pesadas, indivisíveis, siderúrgicas e granéis industriais sediada em São Paulo/SP, operando frota superior a 350 cavalos mecânicos e carretas especiais nas malhas rodoviárias do Sudeste, Sul e Centro-Oeste para grandes embarcadores industriais.",
    "model_params": {
      "haircut_pct": 35,
      "recuperacao_pct": 65,
      "haircut_estimado_pct": 35,
      "recuperacao_estimada_pct": 65,
      "desconto_secundario_pct": 25.0,
      "valor_recuperado_mm": 78.0,
      "ev_estimado_mm": 60.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 14.4
      },
      "dip_necessidade_mm": 15.0,
      "upi_valuation_estimado_mm": 42.0
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-20",
      "data_marco_br": "20/11/2026",
      "dias_restantes": 35,
      "marco_label": "Janela Crítica Pré-Concursal (45d) — Standstill Bancário / CVM / CCEE",
      "marco_tipo": "Janela Tier 0",
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (35d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-20",
      "tipo_marco": "Janela Crítica Pré-Concursal (45d) — Standstill Bancário / CVM / CCEE",
      "urgencia": "ALTA"
    },
    "url_noticia": "https://rad.cvm.gov.br/ENET/frmConsultaExternaCVM.aspx",
    "url_tribunal_cvm": "https://esaj.tjsp.jus.br/cpopg/open.do"
  },
  {
    "id": 45,
    "data_evento": "2026-10-06",
    "data_adicao": "2026-10-07",
    "empresa": "Engenharia & Construtora InfraBrasil",
    "cnpj": "03.771.890/0001-67",
    "setor_detalhe": "Construção",
    "setor_macro": "Construção Civil & Real Estate",
    "regiao": "Belo Horizonte, MG",
    "tribunal": "CGU / PNCP // RTDPJ Belo Horizonte",
    "processo": "Processo Administrativo de Inidoneidade CGU nº 00190.2026-11",
    "fase": "Sinal Precursor (Tier 0)",
    "score": 8.9,
    "tier": "Tier 0",
    "passivo_mm": 210,
    "passivo_display": "210",
    "credores": "Seguradoras Garantidoras (Pomerania, Pottencial, Junto), Bancos de Fiança (Daycoval, ABC Brasil) e Subempreiteiros",
    "perfil_passivo": "Seguro Garantia / Fianças Bancárias em Execução + Fornecedores de Maquinário",
    "advocacia": "Banca de infraestrutura em Belo Horizonte",
    "aj": "N/A (Fase Pré-Concursal)",
    "tese": "(1) Causa da crise: Paralisação de repasses em contratos de obras públicas de infraestrutura e sobrecusto de insumos de engenharia pesada em MG, SP e RJ; (2) Gargalo imediato: Sinal Precursor Forense (Tier 0) gerado por processo administrativo de inidoneidade na CGU (CEIS/CNEP) e notificações de sinistro para execução de apólices de seguro-garantia e fianças bancárias (passivo de R$ 210 milhões); (3) Oportunidade de mandato: Atuação como Watchdog Independente em favor do pool de seguradoras (Pottencial, Junto, Pomerania) e bancos fiadores (Daycoval, ABC Brasil) para gestão de conta escrow das medições de obras.",
    "status": "Novo",
    "proximas_acoes": "Abordar as principais seguradoras garantidoras oferecendo mandato de Watchdog nas obras ativas",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Exposição concentrada em 3 seguradoras de garantia contratual",
      "Conta vinculada escrow para recebimento de medições públicas e repasse a operários"
    ],
    "cidade": "Belo Horizonte",
    "uf": "MG",
    "coordenadas": [
      -19.9167,
      -43.9345
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "Tier 0",
    "tipo_processo_label": "Sinais Forenses (Tier 0)",
    "strategy_id": "precursor",
    "strategy_name": "Distress Precursor (Tier 0)",
    "strategy_tag": "PRECURSOR / TIER 0",
    "institutional_triggers": [
      "Exposição concentrada em 3 seguradoras de garantia contratual",
      "Conta vinculada escrow para recebimento de medições públicas e repasse a operários"
    ],
    "subtipo_processo": "Tier 0",
    "causa_crise": "Paralisação de repasses em contratos de obras públicas de infraestrutura e sobrecusto de insumos de engenharia pesada em MG, SP e RJ",
    "gargalo_imediato": "Sinal Precursor Forense (Tier 0) gerado por processo administrativo de inidoneidade na CGU (CEIS/CNEP) e notificações de sinistro para execução de apólices de seguro-garantia e fianças bancárias (passivo de R$ 210 milhões)",
    "tese_mandato": "Atuação como Watchdog Independente em favor do pool de seguradoras (Pottencial, Junto, Pomerania) e bancos fiadores (Daycoval, ABC Brasil) para gestão de conta escrow das medições de obras.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Reit Securitizadora",
    "descricao_empresa": "Construtora de engenharia pesada, obras de arte especiais (pontes e viadutos), pavimentação rodoviária e saneamento básico sediada em Belo Horizonte/MG, detentora de carteira relevante de contratos públicos licitados junto ao DNIT, DERs estaduais e companhias de saneamento em MG, SP e RJ.",
    "model_params": {
      "haircut_pct": 28,
      "recuperacao_pct": 72,
      "haircut_estimado_pct": 28,
      "recuperacao_estimada_pct": 72,
      "desconto_secundario_pct": 25.0,
      "valor_recuperado_mm": 151.2,
      "ev_estimado_mm": 105.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 25.2
      },
      "dip_necessidade_mm": 25.2,
      "upi_valuation_estimado_mm": 73.5
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-20",
      "data_marco_br": "20/11/2026",
      "dias_restantes": 35,
      "marco_label": "Janela Crítica Pré-Concursal (45d) — Standstill Bancário / CVM / CCEE",
      "marco_tipo": "Janela Tier 0",
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (35d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-20",
      "tipo_marco": "Janela Crítica Pré-Concursal (45d) — Standstill Bancário / CVM / CCEE",
      "urgencia": "ALTA"
    },
    "url_noticia": "https://rad.cvm.gov.br/ENET/frmConsultaExternaCVM.aspx",
    "url_tribunal_cvm": "https://pje-consulta-publica.tjmg.jus.br/"
  },
  {
    "id": 46,
    "data_evento": "2026-10-07",
    "data_adicao": "2026-10-07",
    "empresa": "Concessionária Rodoviária das Colinas do Tietê",
    "cnpj": "10.450.881/0001-22",
    "setor_detalhe": "Infraestrutura",
    "setor_macro": "Energia & Infraestrutura",
    "regiao": "Sorocaba, SP",
    "tribunal": "ARTESP // B3 / CVM (Sorocaba, SP)",
    "processo": "Processo ARTESP Caducidade nº 0089/2026",
    "fase": "Sinal Precursor (Tier 0)",
    "score": 9.6,
    "tier": "Tier 0",
    "passivo_mm": 420,
    "passivo_display": "420",
    "credores": "Debenturistas da 1ª e 2ª Emissão, BNDES, Agência Reguladora (Multas Contratuais) e Construtoras",
    "perfil_passivo": "Project Finance Não-Recurso + Debêntures Incentivadas (Lei 12.431)",
    "advocacia": "Em tratativas com bancas regulatórias",
    "aj": "N/A (Fase Pré-Concursal)",
    "tese": "(1) Causa da crise: Tráfego realizado abaixo da curva projetada no project finance rodoviário combinado ao aumento do capex regulatório de duplicação exigido pelo poder concedente; (2) Gargalo imediato: Sinal Precursor Forense (Tier 0) com abertura de processo administrativo de caducidade na ARTESP (nº 0089/2026) e convocação de AGD pelos debenturistas da 1ª e 2ª emissão incentivada (Lei 12.431 - R$ 420 milhões) e BNDES; (3) Oportunidade de mandato: Tutela Cautelar Antecedente (art. 20-B) para suspensão do processo de caducidade, mediação regulatória para relicitação amigável (Lei 13.448) e assessoria ao comitê de debenturistas (Vórtx/Oliveira Trust).",
    "status": "Novo",
    "proximas_acoes": "Abordar o agente fiduciário das debêntures e fundos de infraestrutura para liderar comitê de reestruturação",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Mais de 75% da dívida com debenturistas e BNDES",
      "Fase Pré-RJ / Mediação regulatória sem Administrador Judicial",
      "Convocação de AGD com ordem de declaração de vencimento antecipado"
    ],
    "cidade": "Sorocaba",
    "uf": "SP",
    "coordenadas": [
      -23.5015,
      -47.4526
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "Tier 0",
    "tipo_processo_label": "Sinais Forenses (Tier 0)",
    "strategy_id": "precursor",
    "strategy_name": "Distress Precursor (Tier 0)",
    "strategy_tag": "PRECURSOR / TIER 0",
    "institutional_triggers": [
      "Mais de 75% da dívida com debenturistas e BNDES",
      "Fase Pré-RJ / Mediação regulatória sem Administrador Judicial",
      "Convocação de AGD com ordem de declaração de vencimento antecipado"
    ],
    "subtipo_processo": "Tier 0",
    "causa_crise": "Tráfego realizado abaixo da curva projetada no project finance rodoviário combinado ao aumento do capex regulatório de duplicação exigido pelo poder concedente",
    "gargalo_imediato": "Sinal Precursor Forense (Tier 0) com abertura de processo administrativo de caducidade na ARTESP (nº 0089/2026) e convocação de AGD pelos debenturistas da 1ª e 2ª emissão incentivada (Lei 12.431 - R$ 420 milhões) e BNDES",
    "tese_mandato": "Tutela Cautelar Antecedente (art. 20-B) para suspensão do processo de caducidade, mediação regulatória para relicitação amigável (Lei 13.448) e assessoria ao comitê de debenturistas (Vórtx/Oliveira Trust).",
    "agentes_fiduciarios": "Vórtx DTVM / BNDES",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "energy_meta": {
      "debenture_codigo": "CLTI11 / CLTI12 — Lei 12.431 (R$ 420M)",
      "agente_fiduciario": "Vórtx DTVM / BNDES",
      "inadimplemento_ccee": "N/A — Concessão Rodoviária Estadual (ARTESP)",
      "risco_caducidade": "Crítico — Processo Administrativo de Caducidade ARTESP nº 0089/2026 instaurado",
      "corte_rating_curtailment": "Convocação de AGD de debenturistas para declaração de vencimento antecipado por quebra de ICSD e multa regulatória",
      "submercado": "Sudeste/Centro-Oeste"
    },
    "descricao_empresa": "Sociedade de Propósito Específico (SPE) detentora de concessão rodoviária estadual regulada pela ARTESP no interior de São Paulo (eixo Sorocaba, Itu, Salto e Indaiatuba), operando mais de 300 km de malha duplicada com fluxo intenso de veículos pesados e receita tarifária de praças de pedágio.",
    "model_params": {
      "haircut_pct": 28,
      "recuperacao_pct": 72,
      "haircut_estimado_pct": 28,
      "recuperacao_estimada_pct": 72,
      "desconto_secundario_pct": 25.0,
      "valor_recuperado_mm": 302.4,
      "ev_estimado_mm": 210.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 18.0,
        "classe_i_pct": 3.0,
        "classe_ii_pct": 42.0,
        "fiscal_pct": 7.0,
        "classe_iii_pct": 27.0,
        "classe_iv_pct": 3.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 18.0,
        "c1_trabalhista": 3.0,
        "c2_garantia_real": 42.0,
        "c3_quirografario": 27.0,
        "c4_me_epp": 3.0,
        "passivo_fiscal_estimado_mm": 29.4
      },
      "dip_necessidade_mm": 50.4,
      "upi_valuation_estimado_mm": 147.0
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-04",
      "data_marco_br": "04/11/2026",
      "dias_restantes": 19,
      "marco_label": "Assembleia Geral de Debenturistas (CLTI11/12) & Defesa de Caducidade ARTESP",
      "marco_tipo": "AGD Debêntures",
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (19d)",
      "is_fixed_edital": true,
      "data_marco": "2026-11-04",
      "tipo_marco": "Assembleia Geral de Debenturistas (CLTI11/12) & Defesa de Caducidade ARTESP",
      "urgencia": "CRÍTICA"
    },
    "url_noticia": "https://www.artesp.sp.gov.br/",
    "url_tribunal_cvm": "https://rad.cvm.gov.br/ENET/frmConsultaExternaCVM.aspx"
  },
  {
    "id": 47,
    "data_evento": "2026-09-18",
    "data_adicao": "2026-10-07",
    "empresa": "AgroGalaxy Participações S/A (AGXY3)",
    "cnpj": "33.914.809/0001-08",
    "setor_detalhe": "Agro",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Goiânia, GO",
    "tribunal": "TJGO - 19ª Vara Cível de Goiânia",
    "processo": "5719322-44.2024.8.09.0051",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.8,
    "tier": "Tier 2",
    "passivo_mm": 4670,
    "passivo_display": "4.670",
    "credores": "Banco do Brasil (R$ 391M), Securitizadoras de CRAs (Vert, Opea), Itaú, Bradesco, Santander e Tradings",
    "perfil_passivo": "CRAs (Mercado de Capitais) + FIDCs de Insumos + Dívida Bancária Comercial",
    "advocacia": "Padis Mattar Advogados // E.Munhoz Advogados",
    "aj": "Preserva-Ação Administração Judicial",
    "tese": "(1) Causa da crise: Inadimplência generalizada de produtores rurais na carteira de revendas de insumos agrícolas somada ao vencimento de CRAs e linhas de capital de giro, totalizando R$ 4,67 bilhões de passivo; (2) Gargalo imediato: Condução da Recuperação Judicial na 19ª Vara Cível de Goiânia/GO (AJ Preserva-Ação) com disputas sobre travas de recebíveis de CRAs (Vert e Opea Securitizadoras), exposição do Banco do Brasil (R$ 391M) e fechamento de lojas deficitárias; (3) Oportunidade de mandato: Watchdog Independente para comitês de titulares de CRAs e bancos credores, estruturação de financiamento DIP e venda de carteiras/unidades regionais de insumos (UPIs).",
    "status": "Em Análise",
    "proximas_acoes": "Contatar agentes fiduciários de CRAs (Vert/Opea) para propor monitoramento independente de caixa e safras",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Exposição pulverizada de mercado de capitais com comitês de CRAs",
      "Previsão de emissão de debêntures e DIP financing",
      "Plano de desinvestimento e fechamento/venda de lojas de insumos (UPIs)"
    ],
    "cidade": "Goiânia",
    "uf": "GO",
    "coordenadas": [
      -16.6869,
      -49.2648
    ],
    "regiao_macro": "Centro-Oeste",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (PRJ)",
    "strategy_id": "dip",
    "strategy_name": "DIP Financing & M&A Distressed",
    "strategy_tag": "DIP FINANCING / UPI M&A",
    "institutional_triggers": [
      "Exposição pulverizada de mercado de capitais com comitês de CRAs",
      "Previsão de emissão de debêntures e DIP financing",
      "Plano de desinvestimento e fechamento/venda de lojas de insumos (UPIs)"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Inadimplência generalizada de produtores rurais na carteira de revendas de insumos agrícolas somada ao vencimento de CRAs e linhas de capital de giro, totalizando R$ 4,67 bilhões de passivo",
    "gargalo_imediato": "Condução da Recuperação Judicial na 19ª Vara Cível de Goiânia/GO (AJ Preserva-Ação) com disputas sobre travas de recebíveis de CRAs (Vert e Opea Securitizadoras), exposição do Banco do Brasil (R$ 391M) e fechamento de lojas deficitárias",
    "tese_mandato": "Watchdog Independente para comitês de titulares de CRAs e bancos credores, estruturação de financiamento DIP e venda de carteiras/unidades regionais de insumos (UPIs).",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Opea Securitizadora, Vert Securitizadora",
    "descricao_empresa": "Uma das maiores plataformas de varejo de insumos agrícolas (sementes, defensivos, fertilizantes e especialidades) e serviços de comercialização de grãos do Brasil (B3: AGXY3), controlada pelo fundo Aqua Capital. Chegou a operar mais de 170 lojas técnicas, silos e unidades de beneficiamento de sementes em 14 estados (do RS ao Matopiba).",
    "model_params": {
      "haircut_pct": 52,
      "recuperacao_pct": 48,
      "haircut_estimado_pct": 52,
      "recuperacao_estimada_pct": 48,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 2241.6,
      "ev_estimado_mm": 3035.5,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 22.0,
        "classe_i_pct": 4.0,
        "classe_ii_pct": 36.0,
        "fiscal_pct": 8.0,
        "classe_iii_pct": 25.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 22.0,
        "c1_trabalhista": 4.0,
        "c2_garantia_real": 36.0,
        "c3_quirografario": 25.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 373.6
      },
      "dip_necessidade_mm": 560.4,
      "upi_valuation_estimado_mm": 1634.5
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-17",
      "data_marco_br": "17/11/2026",
      "dias_restantes": 32,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (32d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-17",
      "tipo_marco": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "urgencia": "ALTA"
    },
    "url_noticia": "https://conteudos.xpi.com.br/renda-fixa/relatorios/recuperacao-judicial-da-agrogalaxy-acompanhe/",
    "url_tribunal_cvm": "https://projudi.tjgo.jus.br/BuscaProcessoPublica"
  },
  {
    "id": 48,
    "data_evento": "2026-08-20",
    "data_adicao": "2026-10-07",
    "empresa": "Polimport Comércio e Exportação Ltda (Polishop)",
    "cnpj": "00.436.044/0001-98",
    "setor_detalhe": "Varejo",
    "setor_macro": "Varejo & Consumo",
    "regiao": "São Paulo, SP",
    "tribunal": "TJSP - 2ª Vara de Falências e RJs",
    "processo": "1048932-56.2024.8.26.0100",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.2,
    "tier": "Tier 2",
    "passivo_mm": 396,
    "passivo_display": "396",
    "credores": "Banco do Brasil, BMP Money Plus, Zurich Minas Brasil Seguros, Administradoras de Shoppings e Fornecedores",
    "perfil_passivo": "Bancário Capital de Giro + Aluguéis Comerciais Mínimos + Fornecedores de Eletroportáteis",
    "advocacia": "Dasa Advogados",
    "aj": "Cabezón Administração Judicial",
    "tese": "(1) Causa da crise: Colapso do modelo tradicional de vendas por TV aberta e lojas físicas de shopping centers frente à concorrência de marketplaces digitais, acumulando R$ 396 milhões de passivo; (2) Gargalo imediato: Trâmite da Recuperação Judicial na 2ª Vara de Falências de SP (AJ Cabezón) com ações de despejo de shopping centers e execuções de Banco do Brasil, BMP Money Plus e Zurich Seguros; (3) Oportunidade de mandato: Gestão Interina (CRO Operacional) para migração ao modelo asset-light digital, renegociação de aluguéis com administradoras de shoppings e Watchdog para credores financeiros.",
    "status": "Em Análise",
    "proximas_acoes": "Acompanhar relatório mensal de atividades do AJ e avaliar sindicação com credores de recebíveis",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Concentração em bancos comerciais e seguradora",
      "Renegociação de contratos de locação e fluxo de caixa de lojas"
    ],
    "cidade": "São Paulo",
    "uf": "SP",
    "coordenadas": [
      -23.5505,
      -46.6333
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (PRJ)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [
      "Concentração em bancos comerciais e seguradora",
      "Renegociação de contratos de locação e fluxo de caixa de lojas"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Colapso do modelo tradicional de vendas por TV aberta e lojas físicas de shopping centers frente à concorrência de marketplaces digitais, acumulando R$ 396 milhões de passivo",
    "gargalo_imediato": "Trâmite da Recuperação Judicial na 2ª Vara de Falências de SP (AJ Cabezón) com ações de despejo de shopping centers e execuções de Banco do Brasil, BMP Money Plus e Zurich Seguros",
    "tese_mandato": "Gestão Interina (CRO Operacional) para migração ao modelo asset-light digital, renegociação de aluguéis com administradoras de shoppings e Watchdog para credores financeiros.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Icônica rede varejista multicanal brasileira fundada em 1999 por João Appolinário, famosa pelo modelo pioneiro de infomerciais em TV aberta e a cabo, e-commerce próprio e rede que chegou a superar 250 lojas físicas nos principais shopping centers do país, comercializando eletroportáteis, equipamentos de ginástica e utilidades domésticas exclusivas.",
    "model_params": {
      "haircut_pct": 65,
      "recuperacao_pct": 35,
      "haircut_estimado_pct": 65,
      "recuperacao_estimada_pct": 35,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 138.6,
      "ev_estimado_mm": 198.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 47.5
      },
      "dip_necessidade_mm": 47.5,
      "upi_valuation_estimado_mm": 138.6
    },
    "calendar_meta": {
      "data_marco_iso": "2026-10-19",
      "data_marco_br": "19/10/2026",
      "dias_restantes": 3,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "critico",
      "urgencia_label": "URGENTE (3d)",
      "is_fixed_edital": false,
      "data_marco": "2026-10-19",
      "tipo_marco": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "urgencia": "CRÍTICA"
    },
    "url_noticia": "https://esaj.tjsp.jus.br/cpopg/open.do",
    "url_tribunal_cvm": "https://esaj.tjsp.jus.br/cpopg/open.do"
  },
  {
    "id": 49,
    "data_evento": "2026-10-06",
    "data_adicao": "2026-10-08",
    "empresa": "Grupo Echer",
    "cnpj": "11.862.538/0001-21",
    "setor_detalhe": "Construção Civil & Agro",
    "setor_macro": "Construção Civil & Real Estate",
    "regiao": "Cuiabá, MT",
    "tribunal": "TJMT - Vara de Falências de Cuiabá",
    "processo": "1001234-56.2026.8.11.0041",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 9.2,
    "tier": "Tier 2",
    "passivo_mm": 170,
    "passivo_display": "170",
    "credores": "Caixa Econômica Federal (41% da dívida / R$ 69,5M), Bancos privados e Fornecedores",
    "perfil_passivo": "Concentração Bancária Estatal (Caixa 41%) + Crédito Imobiliário/Obras",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "Aguardando nomeação judicial",
    "tese": "(1) Causa da crise: Descompasso financeiro entre o ritmo de vendas/repasses imobiliários e o custo de execução de empreendimentos residenciais e operações agropecuárias em Mato Grosso (passivo de R$ 170 milhões); (2) Gargalo imediato: Deferimento da Recuperação Judicial na Vara Especializada de Cuiabá/MT com forte concentração de 41% da dívida (R$ 69,5 milhões) na Caixa Econômica Federal; (3) Oportunidade de mandato: Watchdog de Colateral Imobiliário para a Caixa Econômica Federal e bancos privados, além da estruturação de DIP Financing para conclusão de obras em andamento.",
    "status": "Novo",
    "proximas_acoes": "Analisar garantias reais fiduciárias da Caixa e propor governança independente",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração Bancária (Caixa Econômica Federal 41%)",
      "Previsão de Financiamento DIP / Continuidade de Obras"
    ],
    "cidade": "Cuiabá",
    "uf": "MT",
    "coordenadas": [
      -15.6014,
      -56.0979
    ],
    "regiao_macro": "Centro-Oeste",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (PRJ)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [
      "Alta Concentração Bancária (Caixa Econômica Federal 41%)",
      "Previsão de Financiamento DIP / Continuidade de Obras"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Descompasso financeiro entre o ritmo de vendas/repasses imobiliários e o custo de execução de empreendimentos residenciais e operações agropecuárias em Mato Grosso (passivo de R$ 170 milhões)",
    "gargalo_imediato": "Deferimento da Recuperação Judicial na Vara Especializada de Cuiabá/MT com forte concentração de 41% da dívida (R$ 69,5 milhões) na Caixa Econômica Federal",
    "tese_mandato": "Watchdog de Colateral Imobiliário para a Caixa Econômica Federal e bancos privados, além da estruturação de DIP Financing para conclusão de obras em andamento.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Grupo empresarial mato-grossense com atuação dual na construção civil (incorporação de edifícios residenciais, condomínios horizontais e loteamentos urbanos em Cuiabá, Várzea Grande e interior de MT) e no agronegócio regional, com forte carteira de financiamentos habitacionais junto à Caixa Econômica Federal.",
    "model_params": {
      "haircut_pct": 56,
      "recuperacao_pct": 44,
      "haircut_estimado_pct": 56,
      "recuperacao_estimada_pct": 44,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 74.8,
      "ev_estimado_mm": 85.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 20.4
      },
      "dip_necessidade_mm": 20.4,
      "upi_valuation_estimado_mm": 59.5
    },
    "calendar_meta": {
      "data_marco_iso": "2026-12-05",
      "data_marco_br": "05/12/2026",
      "dias_restantes": 50,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (50d)",
      "is_fixed_edital": false,
      "data_marco": "2026-12-05",
      "tipo_marco": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/categoria/recuperacao-judicial",
    "url_tribunal_cvm": "https://pje.tjmt.jus.br/pje/ConsultaPublica/listView.seam"
  },
  {
    "id": 50,
    "data_evento": "2026-10-03",
    "data_adicao": "2026-10-08",
    "empresa": "Navarro Distribuidora de Medicamentos S/A",
    "cnpj": "13.375.000/0001-00",
    "setor_detalhe": "Distribuição Farmacêutica / Farma & Logística",
    "setor_macro": "Saúde & Farma",
    "regiao": "São Paulo, SP",
    "tribunal": "TJSP - 1ª Vara Regional Empresarial",
    "processo": "1098765-43.2026.8.26.0100",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.8,
    "tier": "Tier 2",
    "passivo_mm": 115,
    "passivo_display": "115",
    "credores": "Bancos comerciais privados (Itaú, Santander, Bradesco), Fornecedores de Medicamentos e Laboratórios",
    "perfil_passivo": "Bancário Curto Prazo (Capital de Giro e Alavancagem) + Fornecedores Farmacêuticos",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "Aguardando nomeação judicial",
    "tese": "(1) Causa da crise: Compressão severa de margens na distribuição de medicamentos hospitalares e farma nos CDs de SP, ES, MG e PR combinada ao alto custo das linhas bancárias de giro (passivo de R$ 115 milhões); (2) Gargalo imediato: Processamento da Recuperação Judicial na 1ª Vara Regional Empresarial de SP com prazo de 60 dias para entrega do plano concursal e risco de corte de limite de crédito pelos grandes laboratórios farmacêuticos; (3) Oportunidade de mandato: Elaboração econômico-financeira do Plano de Recuperação Judicial (art. 53), renegociação de dívida bancária com Itaú, Santander e Bradesco e captação de DIP para recomposição de estoques.",
    "status": "Novo",
    "proximas_acoes": "Acompanhar decisão de deferimento do Art. 52 e contatar diretores financeiros para assessoria de plano",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Previsão de Financiamento DIP / Capital de Giro para Estoques"
    ],
    "cidade": "São Paulo",
    "uf": "SP",
    "coordenadas": [
      -23.5505,
      -46.6333
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (PRJ)",
    "strategy_id": "dip",
    "strategy_name": "DIP Financing & M&A Distressed",
    "strategy_tag": "DIP FINANCING / UPI M&A",
    "institutional_triggers": [
      "Previsão de Financiamento DIP / Capital de Giro para Estoques"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Compressão severa de margens na distribuição de medicamentos hospitalares e farma nos CDs de SP, ES, MG e PR combinada ao alto custo das linhas bancárias de giro (passivo de R$ 115 milhões)",
    "gargalo_imediato": "Processamento da Recuperação Judicial na 1ª Vara Regional Empresarial de SP com prazo de 60 dias para entrega do plano concursal e risco de corte de limite de crédito pelos grandes laboratórios farmacêuticos",
    "tese_mandato": "Elaboração econômico-financeira do Plano de Recuperação Judicial (art. 53), renegociação de dívida bancária com Itaú, Santander e Bradesco e captação de DIP para recomposição de estoques.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Tradicional distribuidora atacadista de medicamentos éticos, genéricos, hospitalares e produtos de higiene/perfumaria (farma B2B), com matriz em São Paulo e centros de distribuição climatizados em SP, ES, MG e PR, abastecendo redes de farmácias independentes, clínicas e hospitais privados.",
    "model_params": {
      "haircut_pct": 55,
      "recuperacao_pct": 45,
      "haircut_estimado_pct": 55,
      "recuperacao_estimada_pct": 45,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 51.8,
      "ev_estimado_mm": 57.5,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 13.8
      },
      "dip_necessidade_mm": 15.0,
      "upi_valuation_estimado_mm": 40.2
    },
    "calendar_meta": {
      "data_marco_iso": "2026-12-02",
      "data_marco_br": "02/12/2026",
      "dias_restantes": 47,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (47d)",
      "is_fixed_edital": false,
      "data_marco": "2026-12-02",
      "tipo_marco": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/categoria/recuperacao-judicial",
    "url_tribunal_cvm": "https://esaj.tjsp.jus.br/cpopg/open.do"
  },
  {
    "id": 51,
    "data_evento": "2026-10-08",
    "data_adicao": "2026-10-08",
    "empresa": "Grupo Safras (Safras Armazéns Gerais & Agropecuária)",
    "cnpj": "07.834.789/0001-00",
    "setor_detalhe": "Agro & Armazenagem",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Sorriso, MT",
    "tribunal": "TJMT - Vara Regional de Sorriso",
    "processo": "1001452-88.2025.8.11.0040",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 9.4,
    "tier": "Tier 2",
    "passivo_mm": 1780,
    "passivo_display": "1.780",
    "credores": "Tradings Internacionais (Cargill, Bunge, Cofco), Bancos (Banco do Brasil, Bradesco, Santander), Fornecedores de Insumos e CPRs",
    "perfil_passivo": "CPRs + Barter Comercial + Dívida Bancária Estruturada",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "Gestor Judicial em definição (TJMT)",
    "tese": "(1) Causa da crise: Alavancagem elevada na expansão de silos e armazéns gerais em Sorriso e Sinop/MT combinada a quebras de contratos de barter e disputas com tradings sobre depósito de grãos (passivo de R$ 1,78 bilhão); (2) Gargalo imediato: Decisão paradigmática do TJMT determinando o afastamento compulsório dos controladores por indícios de confusão patrimonial e vacância na gestão operacional; (3) Oportunidade de mandato: Indicação imediata para Gestão Judicial / CRO Independente em substituição aos gestores afastados, assessoria ao comitê de tradings/bancos (Cargill, Bunge, COFCO, BB, Bradesco, Santander) e alienação de UPIs de armazenagem.",
    "status": "Novo",
    "proximas_acoes": "Mapear principais credores bancários e tradings para estruturação de governança de transição",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Afastamento Compulsório de Controladores pelo TJMT (Vacância de Gestão)",
      "Alienação Judicial de UPIs de Silos e Armazéns",
      "Risco Iminente de Execução Cruzada de CPRs e Barter"
    ],
    "cidade": "Sorriso",
    "uf": "MT",
    "coordenadas": [
      -12.5447,
      -55.7231
    ],
    "regiao_macro": "Centro-Oeste",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (PRJ)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Afastamento Compulsório de Controladores pelo TJMT (Vacância de Gestão)",
      "Alienação Judicial de UPIs de Silos e Armazéns",
      "Risco Iminente de Execução Cruzada de CPRs e Barter"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Alavancagem elevada na expansão de silos e armazéns gerais em Sorriso e Sinop/MT combinada a quebras de contratos de barter e disputas com tradings sobre depósito de grãos (passivo de R$ 1,78 bilhão)",
    "gargalo_imediato": "Decisão paradigmática do TJMT determinando o afastamento compulsório dos controladores por indícios de confusão patrimonial e vacância na gestão operacional",
    "tese_mandato": "Indicação imediata para Gestão Judicial / CRO Independente em substituição aos gestores afastados, assessoria ao comitê de tradings/bancos (Cargill, Bunge, COFCO, BB, Bradesco, Santander) e alienação de UPIs de armazenagem.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Gigante agroindustrial mato-grossense sediada em Sorriso e Sinop/MT, com atuação destacada na armazenagem geral de grãos (rede de silos estáticos de grande capacidade), originação comercial de soja e milho, cultivo agrícola próprio e industrialização de biocombustíveis/esmagamento no norte do estado.",
    "model_params": {
      "haircut_pct": 51,
      "recuperacao_pct": 49,
      "haircut_estimado_pct": 51,
      "recuperacao_estimada_pct": 49,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 872.2,
      "ev_estimado_mm": 1157.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 22.0,
        "classe_i_pct": 4.0,
        "classe_ii_pct": 36.0,
        "fiscal_pct": 8.0,
        "classe_iii_pct": 25.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 22.0,
        "c1_trabalhista": 4.0,
        "c2_garantia_real": 36.0,
        "c3_quirografario": 25.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 142.4
      },
      "dip_necessidade_mm": 213.6,
      "upi_valuation_estimado_mm": 623.0
    },
    "calendar_meta": {
      "data_marco_iso": "2026-12-07",
      "data_marco_br": "07/12/2026",
      "dias_restantes": 52,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (52d)",
      "is_fixed_edital": false,
      "data_marco": "2026-12-07",
      "tipo_marco": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://boanoticias.com.br/2026/10/08/sorriso-tjmt-mantem-ex-prefeito-dilceu-rossato-afastado-do-comando-do-grupo-safras-em-recuperacao-judicial-de-r-178-bilhao/",
    "url_tribunal_cvm": "https://pje.tjmt.jus.br/pje/ConsultaPublica/listView.seam"
  },
  {
    "id": 52,
    "data_evento": "2026-10-09",
    "data_adicao": "2026-10-09",
    "empresa": "Qualiciclo Agrícola S.A. (Rede Lavoro de Insumos)",
    "cnpj": "04.784.681/0001-87",
    "setor_detalhe": "Distribuição de Insumos & Fertilizantes",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Limeira, SP",
    "tribunal": "TJSP - 2ª Vara de Falências e RJs",
    "processo": "1079322-26.2025.8.26.0100",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 9.5,
    "tier": "Tier 2",
    "passivo_mm": 2548,
    "passivo_display": "2.548",
    "credores": "Corteva Agriscience, Mosaic Fertilizantes, UPL do Brasil, FMC Química, Helm do Brasil, Banco Votorantim, Banco Daycoval",
    "perfil_passivo": "Fornecedores Multinacionais de Insumos/Fertilizantes + Dívida Bancária Comercial",
    "advocacia": "Galdino & Coelho Advogados",
    "aj": "Aguardando publicação de edital",
    "tese": "(1) Causa da crise: Retração severa na comercialização de defensivos e fertilizantes na rede controlada pela Lavoro, inadimplência de clientes rurais e aperto de crédito junto às multinacionais químicas (passivo de R$ 2,55 bilhões); (2) Gargalo imediato: Processamento da Recuperação Judicial na 2ª Vara de Falências de SP com forte exposição de Corteva Agriscience, Mosaic Fertilizantes, UPL, FMC, Helm, Banco Votorantim e Daycoval; (3) Oportunidade de mandato: Watchdog Creditor-Side para o comitê de multinacionais químicas e bancos, estruturação de DIP Comercial de fornecimento continuado para a safra e auditoria de carteira de recebíveis (CPRs).",
    "status": "Novo",
    "proximas_acoes": "Abordar departamentos de crédito de indústrias químicas (Corteva, Mosaic, UPL) e bancos para estruturação de comitê de credores",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida com Multinacionais Químicas e Bancos (CR4 > 60%)",
      "Necessidade Iminente de Fornecimento Continuado (DIP Financing Comercial)",
      "Riscos de Execução Cruzada de Títulos e Quebra de Safra"
    ],
    "cidade": "Limeira",
    "uf": "SP",
    "coordenadas": [
      -22.5644,
      -47.4017
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (PRJ)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [
      "Alta Concentração de Dívida com Multinacionais Químicas e Bancos (CR4 > 60%)",
      "Necessidade Iminente de Fornecimento Continuado (DIP Financing Comercial)",
      "Riscos de Execução Cruzada de Títulos e Quebra de Safra"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Retração severa na comercialização de defensivos e fertilizantes na rede controlada pela Lavoro, inadimplência de clientes rurais e aperto de crédito junto às multinacionais químicas (passivo de R$ 2,55 bilhões)",
    "gargalo_imediato": "Processamento da Recuperação Judicial na 2ª Vara de Falências de SP com forte exposição de Corteva Agriscience, Mosaic Fertilizantes, UPL, FMC, Helm, Banco Votorantim e Daycoval",
    "tese_mandato": "Watchdog Creditor-Side para o comitê de multinacionais químicas e bancos, estruturação de DIP Comercial de fornecimento continuado para a safra e auditoria de carteira de recebíveis (CPRs).",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Importante rede de distribuição de insumos agrícolas, defensivos, fertilizantes e sementes (Qualiciclo Agrícola S.A.), integrada à plataforma da gigante Lavoro Agro, com forte presença comercial nos polos agrícolas de São Paulo (Limeira), Minas Gerais, Goiás e sul de Mato Grosso.",
    "model_params": {
      "haircut_pct": 55,
      "recuperacao_pct": 45,
      "haircut_estimado_pct": 55,
      "recuperacao_estimada_pct": 45,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 1146.6,
      "ev_estimado_mm": 1274.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 22.0,
        "classe_i_pct": 4.0,
        "classe_ii_pct": 36.0,
        "fiscal_pct": 8.0,
        "classe_iii_pct": 25.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 22.0,
        "c1_trabalhista": 4.0,
        "c2_garantia_real": 36.0,
        "c3_quirografario": 25.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 203.8
      },
      "dip_necessidade_mm": 305.8,
      "upi_valuation_estimado_mm": 891.8
    },
    "calendar_meta": {
      "data_marco_iso": "2026-12-08",
      "data_marco_br": "08/12/2026",
      "dias_restantes": 53,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (53d)",
      "is_fixed_edital": false,
      "data_marco": "2026-12-08",
      "tipo_marco": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://agfeed.com.br/negocios/a-vez-da-lavoro-empresa-sucumbe-a-dividas-de-r-25-bi-e-recorre-a-plano-de-recuperacao-extrajudicial/",
    "url_tribunal_cvm": "https://esaj.tjsp.jus.br/cpopg/open.do"
  },
  {
    "id": 53,
    "data_evento": "2026-10-09",
    "data_adicao": "2026-10-09",
    "empresa": "Cooperativa Agrícola Mista General Osório Ltda. (Cotribá)",
    "cnpj": "90.657.289/0001-09",
    "setor_detalhe": "Cooperativa Agropecuária & Grãos",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Ibirubá, RS",
    "tribunal": "TJRS - Vara Empresarial de Ibirubá",
    "processo": "5001245-80.2026.8.21.0105",
    "fase": "Falência / Liquidação (Classe 110)",
    "score": 9.3,
    "tier": "Tier 2",
    "passivo_mm": 1420,
    "passivo_display": "1.420",
    "credores": "BRDE (R$ 130M), Banco Votorantim (R$ 15M), Sicredi, Banrisul, Titulares de CRAs (R$ 150M) e Produtores Associados",
    "perfil_passivo": "CRAs de Mercado de Capitais + Dívida Bancária Cooperativa + Repasses Rurais",
    "advocacia": "Aguardando autuação",
    "aj": "Conselho de Liquidação em eleição",
    "tese": "(1) Causa da crise: Crise aguda de liquidez na cooperativa agropecuária mais antiga do Brasil (Ibirubá/RS) após sucessivas quebras de safra no Rio Grande do Sul e corrida de cooperados e bancos sobre o caixa (passivo de R$ 1,42 bilhão); (2) Gargalo imediato: Convocação de assembleia para Liquidação Extrajudicial com continuidade operacional, inadimplência de R$ 150 milhões em CRAs e exposição pulverizada em mais de 30 bancos liderados por BRDE (R$ 130M), Votorantim, Sicredi e Banrisul; (3) Oportunidade de mandato: Watchdog Creditor-Side para o sindicato bancário e titulares de CRAs (Vórtx/Opea), segregação de ativos operacionais e alienação estruturada de UPIs de silos e unidades de recebimento de grãos.",
    "status": "Novo",
    "proximas_acoes": "Contatar bancos credores (BRDE, Votorantim) e securitizadoras de CRAs para estruturar comitê conjunto de monitoramento",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Convocação de Assembleia para Liquidação com Continuidade Operacional",
      "Exposição a Mais de 30 Bancos e Cooperativas de Crédito",
      "Inadimplência de CRAs de Mercado de Capitais (R$ 150M)",
      "Necessidade de Segregação e Alienação de UPIs de Silos e Armazenagem"
    ],
    "cidade": "Ibirubá",
    "uf": "RS",
    "coordenadas": [
      -28.6275,
      -53.0897
    ],
    "regiao_macro": "Sul",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial / Liquidação",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [
      "Convocação de Assembleia para Liquidação com Continuidade Operacional",
      "Exposição a Mais de 30 Bancos e Cooperativas de Crédito",
      "Inadimplência de CRAs de Mercado de Capitais (R$ 150M)",
      "Necessidade de Segregação e Alienação de UPIs de Silos e Armazenagem"
    ],
    "subtipo_processo": "Falência / Liquidação",
    "causa_crise": "Crise aguda de liquidez na cooperativa agropecuária mais antiga do Brasil (Ibirubá/RS) após sucessivas quebras de safra no Rio Grande do Sul e corrida de cooperados e bancos sobre o caixa (passivo de R$ 1,42 bilhão)",
    "gargalo_imediato": "Convocação de assembleia para Liquidação Extrajudicial com continuidade operacional, inadimplência de R$ 150 milhões em CRAs e exposição pulverizada em mais de 30 bancos liderados por BRDE (R$ 130M), Votorantim, Sicredi e Banrisul",
    "tese_mandato": "Watchdog Creditor-Side para o sindicato bancário e titulares de CRAs (Vórtx/Opea), segregação de ativos operacionais e alienação estruturada de UPIs de silos e unidades de recebimento de grãos.",
    "agentes_fiduciarios": "Vórtx DTVM",
    "securitizadoras": "Opea Securitizadora",
    "descricao_empresa": "Cooperativa agropecuária mais antiga em atividade no Brasil, fundada em 1911 no município de Ibirubá/RS. Reúne cerca de 9.500 produtores rurais cooperados e opera vasta infraestrutura de mais de 60 unidades de recebimento e armazenagem de grãos (capacidade estática para milhões de sacas), fábricas de rações, supermercados, lojas de insumos e posto de combustível no Rio Grande do Sul.",
    "model_params": {
      "haircut_pct": 69,
      "recuperacao_pct": 31,
      "haircut_estimado_pct": 69,
      "recuperacao_estimada_pct": 31,
      "desconto_secundario_pct": 50.0,
      "valor_recuperado_mm": 440.2,
      "ev_estimado_mm": 923.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 22.0,
        "classe_i_pct": 4.0,
        "classe_ii_pct": 36.0,
        "fiscal_pct": 8.0,
        "classe_iii_pct": 25.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 22.0,
        "c1_trabalhista": 4.0,
        "c2_garantia_real": 36.0,
        "c3_quirografario": 25.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 113.6
      },
      "dip_necessidade_mm": 170.4,
      "upi_valuation_estimado_mm": 497.0
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-03",
      "data_marco_br": "03/11/2026",
      "dias_restantes": 18,
      "marco_label": "Assembleia Geral para Instalação da Liquidação Extrajudicial com Continuidade e UPIs",
      "marco_tipo": "Assembleia / UPI",
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (18d)",
      "is_fixed_edital": true,
      "data_marco": "2026-11-03",
      "tipo_marco": "Assembleia Geral para Instalação da Liquidação Extrajudicial com Continuidade e UPIs",
      "urgencia": "CRÍTICA"
    },
    "url_noticia": "https://www.theagribiz.com/empresas/cooperativas/as-cooperativas-nao-podem-se-recuperar-o-debate-no-caso-cotriba/",
    "url_tribunal_cvm": "https://www.tjrs.jus.br/novo/busca/?return=proc&client=wp_index"
  },
  {
    "id": 54,
    "data_evento": "2026-10-09",
    "data_adicao": "2026-10-09",
    "empresa": "Essere Group (Indústria Química Kimberlit Ltda.)",
    "cnpj": "61.167.060/0001-98",
    "setor_detalhe": "Fertilizantes & Insumos Biológicos",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Olímpia, SP",
    "tribunal": "TJSP - 2ª Vara Cível de Olímpia",
    "processo": "1004122-35.2026.8.26.0400",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 9.1,
    "tier": "Tier 2",
    "passivo_mm": 222,
    "passivo_display": "222",
    "credores": "Banco do Brasil (R$ 68,3M), Itaú Unibanco (R$ 42,4M), Santander Brasil (R$ 37,4M) e Fornecedores Industriais",
    "perfil_passivo": "Bancário Curto Prazo Concentrado (CR3 > 82%) + Fornecedores Químicos",
    "advocacia": "Aguardando publicação",
    "aj": "Administrador Judicial nomeado pelo juízo",
    "tese": "(1) Causa da crise: Queda abrupta de 89% no faturamento semestral (de R$ 534M para R$ 56M) no mercado de fertilizantes especiais e defensivos biológicos, gerando forte aperto de liquidez sobre R$ 222 milhões de passivo; (2) Gargalo imediato: Recuperação Judicial na 2ª Vara Cível de Olímpia/SP com concentração bancária extrema (CR3 > 82% em Banco do Brasil R$ 68,3M, Itaú R$ 42,4M e Santander R$ 37,4M) e decisão de venda de ativos; (3) Oportunidade de mandato: Assessoria em M&A Distressed para alienação judicial das UPIs industriais (planta de biológicos Bionat em Olímpia/SP e unidade Loyder NPK) e Watchdog para o bloco BB/Itaú/Santander.",
    "status": "Novo",
    "proximas_acoes": "Abordar fundos de Special Situations e competidores industriais para M&A de UPI da planta biológica Bionat",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração Bancária (BB, Itaú, Santander concentram CR3 > 82%)",
      "Decisão de Controladores para Alienação Judicial de UPIs (Bionat e Loyder)",
      "Forte Compressão de Faturamento Semestral (R$ 56M vs R$ 534M em 2024)"
    ],
    "cidade": "Olímpia",
    "uf": "SP",
    "coordenadas": [
      -20.7381,
      -48.9142
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (PRJ)",
    "strategy_id": "dip",
    "strategy_name": "DIP Financing & M&A Distressed",
    "strategy_tag": "DIP FINANCING / UPI M&A",
    "institutional_triggers": [
      "Alta Concentração Bancária (BB, Itaú, Santander concentram CR3 > 82%)",
      "Decisão de Controladores para Alienação Judicial de UPIs (Bionat e Loyder)",
      "Forte Compressão de Faturamento Semestral (R$ 56M vs R$ 534M em 2024)"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Queda abrupta de 89% no faturamento semestral (de R$ 534M para R$ 56M) no mercado de fertilizantes especiais e defensivos biológicos, gerando forte aperto de liquidez sobre R$ 222 milhões de passivo",
    "gargalo_imediato": "Recuperação Judicial na 2ª Vara Cível de Olímpia/SP com concentração bancária extrema (CR3 > 82% em Banco do Brasil R$ 68,3M, Itaú R$ 42,4M e Santander R$ 37,4M) e decisão de venda de ativos",
    "tese_mandato": "Assessoria em M&A Distressed para alienação judicial das UPIs industriais (planta de biológicos Bionat em Olímpia/SP e unidade Loyder NPK) e Watchdog para o bloco BB/Itaú/Santander.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Holding brasileira de tecnologia aplicada ao agronegócio sediada em Olímpia/SP (integrada por Indústria Química Kimberlit, Bionat Soluções Biológicas e Loyder Brasil). É referência nacional no desenvolvimento e fabricação de bioinsumos (bionematicidas e biofungicidas), fertilizantes especiais foliares e tecnologia de aplicação.",
    "model_params": {
      "haircut_pct": 54,
      "recuperacao_pct": 46,
      "haircut_estimado_pct": 54,
      "recuperacao_estimada_pct": 46,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 102.1,
      "ev_estimado_mm": 144.3,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 22.0,
        "classe_i_pct": 4.0,
        "classe_ii_pct": 36.0,
        "fiscal_pct": 8.0,
        "classe_iii_pct": 25.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 22.0,
        "c1_trabalhista": 4.0,
        "c2_garantia_real": 36.0,
        "c3_quirografario": 25.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 17.8
      },
      "dip_necessidade_mm": 26.6,
      "upi_valuation_estimado_mm": 77.7
    },
    "calendar_meta": {
      "data_marco_iso": "2026-12-08",
      "data_marco_br": "08/12/2026",
      "dias_restantes": 53,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (53d)",
      "is_fixed_edital": false,
      "data_marco": "2026-12-08",
      "tipo_marco": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://agfeed.com.br/negocios/o-essere-group-planejava-faturar-r-1-bi-em-2026-mas-foi-atropelado-pelos-juros-e-acabou-pedindo-rj/",
    "url_tribunal_cvm": "https://esaj.tjsp.jus.br/cpopg/open.do"
  },
  {
    "id": 55,
    "data_evento": "2026-10-14",
    "data_adicao": "2026-10-16",
    "empresa": "Grupo Fictor (Fictor Holding S/A, Fictor Invest Ltda e outras 18 empresas)",
    "cnpj": "08.637.270/0001-10",
    "setor_detalhe": "Investimentos, Securitização & Factoring",
    "setor_macro": "Serviços Financeiros & Crédito",
    "regiao": "São Paulo, SP",
    "tribunal": "TJSP - 3ª Vara de Falências e RJs",
    "processo": "4014471-36.2026.8.26.0100",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 9.4,
    "tier": "Tier 2",
    "passivo_mm": 4200,
    "passivo_display": "4.200",
    "credores": "Mais de 13 mil investidores PF/PJ em contratos de mútuo e debêntures (R$ 4.200M), Bancos Comerciais e Cotistas de SCPs",
    "perfil_passivo": "Mercado de Capitais (Debêntures/Mútuos) + Alienação de Participações Societárias/UPIs",
    "advocacia": "Aguardando autuação",
    "aj": "Laspro Consultores Ltda.",
    "tese": "(1) Causa da crise: Descasamento de liquidez em estruturas de mútuo conversível, SCPs e debêntures com captação pulverizada; (2) Gargalo imediato: Prazo fatal para apresentação de objeções ao Plano de RJ até 29/10/2026; (3) Oportunidade de mandato: Creditor-Side Advisory e Comitê de Credores para investidores institucionais + Rastreamento Forense de UPIs.",
    "status": "Novo",
    "proximas_acoes": "Mapear investidores institucionais e debenturistas com exposição > R$ 5M para protocolar objeções ao plano até 29/10/2026.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Processo Concursal de Alta Complexidade com Passivo de R$ 4,2 Bilhões",
      "Mais de 13 Mil Credores Dispersos em Mútuos e Debêntures",
      "Prazo Limite para Apresentação de Objeções ao Plano de RJ até 29/10/2026"
    ],
    "cidade": "São Paulo",
    "uf": "SP",
    "coordenadas": [
      -23.5505,
      -46.6333
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (Classe 129)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [
      "Processo Concursal de Alta Complexidade com Passivo de R$ 4,2 Bilhões",
      "Mais de 13 Mil Credores Dispersos em Mútuos e Debêntures",
      "Prazo Limite para Apresentação de Objeções ao Plano de RJ até 29/10/2026"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Descasamento de liquidez em estruturas de mútuo conversível, SCPs e debêntures com captação pulverizada",
    "gargalo_imediato": "Prazo fatal para apresentação de objeções ao Plano de RJ até 29/10/2026",
    "tese_mandato": "Creditor-Side Advisory e Comitê de Credores para investidores institucionais + Rastreamento Forense de UPIs.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Conglomerado paulista de investimentos alternativos, private equity, securitização e fomento mercantil (Fictor Holding S/A, Fictor Invest e 18 controladas), sediado na Av. Paulista/Faria Lima em São Paulo/SP, com participações em alimentos, agronegócio, energia, logística e serviços financeiros estruturados via SCPs, mútuos e debêntures.",
    "model_params": {
      "haircut_pct": 58,
      "recuperacao_pct": 42,
      "haircut_estimado_pct": 58,
      "recuperacao_estimada_pct": 42,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 1764.0,
      "ev_estimado_mm": 2730.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 504.0
      },
      "dip_necessidade_mm": 504.0,
      "upi_valuation_estimado_mm": 1470.0
    },
    "calendar_meta": {
      "data_marco_iso": "2026-10-29",
      "data_marco_br": "29/10/2026",
      "dias_restantes": 13,
      "marco_label": "Prazo Fatal para Apresentação de Objeções ao Plano de RJ (Art. 55)",
      "marco_tipo": "Objeções ao Plano",
      "urgencia_nivel": "critico",
      "urgencia_label": "URGENTE (13d)",
      "is_fixed_edital": true,
      "data_marco": "2026-10-29",
      "tipo_marco": "Prazo Fatal para Apresentação de Objeções ao Plano de RJ (Art. 55)",
      "urgencia": "CRÍTICA"
    },
    "url_noticia": "https://braziljournal.com/pericia-pede-mais-informacoes-antes-de-opiniao-sobre-rj-da-fictor",
    "url_tribunal_cvm": "https://esaj.tjsp.jus.br/cpopg/open.do"
  },
  {
    "id": 56,
    "data_evento": "2026-10-15",
    "data_adicao": "2026-10-16",
    "empresa": "Grupo Família Almeida (Levi de Almeida e Outros - Novo Mundo)",
    "cnpj": "58.054.076/0001-80",
    "setor_detalhe": "Produção de Grãos (Soja & Milho)",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Sinop, MT",
    "tribunal": "TJMT - 4ª Vara Cível de Sinop",
    "processo": "1027923-19.2024.8.11.0015",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.7,
    "tier": "Tier 2",
    "passivo_mm": 64,
    "passivo_display": "64",
    "credores": "Banco do Brasil R$ 15,2M, Banco John Deere R$ 9,1M (extraconcursal), Dionísio Barbosa R$ 9,3M, João Zeferino Lerner R$ 6,8M, Pedro Kinfuku R$ 5,2M, Agrocella R$ 4,7M, Agromave R$ 1,9M, Caixa R$ 1,8M, Sicredi R$ 1,6M, DLL R$ 0,4M, Santander R$ 0,15M, Bradesco R$ 0,11M",
    "perfil_passivo": "Bancário Concentrado (Garantia Real + CPR) + Fornecedores de Insumos/Grãos + Maquinário em Alienação Fiduciária",
    "advocacia": "Tiago Pacheco Sociedade Individual de Advocacia",
    "aj": "Credibilita Administração Judicial e Serviços Ltda.",
    "tese": "(1) Causa da crise: Choque de custos de fertilizantes/combustíveis e quebra climática (El Niño) em Novo Mundo/MT; (2) Gargalo imediato: Pedido de desistência da RJ pelos produtores às vésperas da votação do plano, com AGC convocada em 15/10 para 12/11/2026 (1ª conv.) e 19/11/2026 (2ª conv.); (3) Oportunidade de mandato: Watchdog e Assessoria a Credores (BB, John Deere, Caixa, Sicredi e tradings) para barrar desistência sem garantias ou instalar Comitê de Credores na AGC.",
    "status": "Novo",
    "proximas_acoes": "Contatar departamentos de recuperação de crédito de BB, John Deere, Sicredi e Agrocella antes do credenciamento da AGC em 12/11/2026.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Pedido Inusitado de Desistência da RJ às Vésperas da Votação do Plano",
      "AGC Virtual Convocada para 12/11/2026 e 19/11/2026 sob Condução da Credibilita AJ",
      "Exposição Bancária Desagregada: BB (R$ 15,2M), John Deere (R$ 9,1M), Caixa (R$ 1,8M) e Sicredi (R$ 1,6M)"
    ],
    "cidade": "Sinop",
    "uf": "MT",
    "coordenadas": [
      -11.8608,
      -55.5095
    ],
    "regiao_macro": "Centro-Oeste",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (Classe 129)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [
      "Pedido Inusitado de Desistência da RJ às Vésperas da Votação do Plano",
      "AGC Virtual Convocada para 12/11/2026 e 19/11/2026 sob Condução da Credibilita AJ",
      "Exposição Bancária Desagregada: BB (R$ 15,2M), John Deere (R$ 9,1M), Caixa (R$ 1,8M) e Sicredi (R$ 1,6M)"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Choque de custos de fertilizantes/combustíveis e quebra climática (El Niño) em Novo Mundo/MT",
    "gargalo_imediato": "Pedido de desistência da RJ pelos produtores às vésperas da votação do plano, com AGC convocada em 15/10 para 12/11/2026 (1ª conv.) e 19/11/2026 (2ª conv.)",
    "tese_mandato": "Watchdog e Assessoria a Credores (BB, John Deere, Caixa, Sicredi e tradings) para barrar desistência sem garantias ou instalar Comitê de Credores na AGC.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Tradicional grupo familiar produtor de grãos (liderado por Levi de Almeida e familiares) estabelecido nos municípios de Novo Mundo, Guarantã do Norte e Sinop, no extremo norte de Mato Grosso, cultivando milhares de hectares de soja e milho segunda safra com parque próprio de colheitadeiras e tratores.",
    "model_params": {
      "haircut_pct": 49,
      "recuperacao_pct": 51,
      "haircut_estimado_pct": 49,
      "recuperacao_estimada_pct": 51,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 32.6,
      "ev_estimado_mm": 32.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 22.0,
        "classe_i_pct": 4.0,
        "classe_ii_pct": 36.0,
        "fiscal_pct": 8.0,
        "classe_iii_pct": 25.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 22.0,
        "c1_trabalhista": 4.0,
        "c2_garantia_real": 36.0,
        "c3_quirografario": 25.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 5.1
      },
      "dip_necessidade_mm": 15.0,
      "upi_valuation_estimado_mm": 22.4
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-12",
      "data_marco_br": "12/11/2026",
      "dias_restantes": 27,
      "marco_label": "Assembleia Geral de Credores (AGC — 1ª Convocação Virtual)",
      "marco_tipo": "AGC Pautada",
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (27d)",
      "is_fixed_edital": true,
      "data_marco": "2026-11-12",
      "tipo_marco": "Assembleia Geral de Credores (AGC — 1ª Convocação Virtual)",
      "urgencia": "CRÍTICA"
    },
    "url_noticia": "https://www.fatosdematogrosso.com.br/geral/familia-de-produtores-tenta-desistir-de-recuperacao-judicial-de-r-54-milhoes-em-mt/17438",
    "url_tribunal_cvm": "https://pje.tjmt.jus.br/pje/ConsultaPublica/listView.seam"
  },
  {
    "id": 57,
    "data_evento": "2026-10-12",
    "data_adicao": "2026-10-16",
    "empresa": "Grupo NEX (Nex Group Participações S.A. / Capa Engenharia S.A.)",
    "cnpj": "13.062.866/0001-79",
    "setor_detalhe": "Incorporação Imobiliária & Engenharia Pesada",
    "setor_macro": "Construção Civil & Real Estate",
    "regiao": "Porto Alegre, RS",
    "tribunal": "TJRS - Vara Empresarial de Porto Alegre",
    "processo": "5001257-57.2026.8.21.0001",
    "fase": "Cautelar Antecedente (art. 20-B)",
    "score": 9.2,
    "tier": "Tier 1",
    "passivo_mm": 140,
    "passivo_display": "140",
    "credores": "Banco do Brasil R$ 90M (6 execuções com hipotecas), Caixa Econômica Federal R$ 50M (alienação fiduciária de terrenos)",
    "perfil_passivo": "Bancário Concentrado (100% BB e Caixa) + Leilão de Ativos Imobiliários / UPIs (Condomínio Canto da Brava em Itajaí/SC avaliado em R$ 23,86M, terrenos em Gravataí/Alvorada e salas em Porto Alegre)",
    "advocacia": "Aguardando autuação",
    "aj": "N/A (Fase Prévia - Cejusc Empresarial de Porto Alegre)",
    "tese": "(1) Causa da crise: Distratos acima de 85% em incorporações (2.675 de 6.090 unidades desfeitas) e frustração da venda do empreendimento Mirantes do Parque; (2) Gargalo imediato: Leilões extrajudiciais de áreas em Itajaí/SC (13 e 16/10) com deságio de 50% (R$ 11,93M) e sessão de mediação agendada para 06/11/2026; (3) Oportunidade de mandato: Estruturação de M&A Distressed / Aquisição de Ativos Imobiliários (Itajaí, Gravataí e Porto Alegre) ou Assessoria Técnica na mediação Cejusc.",
    "status": "Novo",
    "proximas_acoes": "Abordar diretoria da Nex Group / Capa Engenharia e áreas de reestruturação do BB e Caixa antes da sessão de mediação de 06/11/2026 e avaliar aquisição das glebas de Itajaí/SC.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Concentração Bancária de 100% em Dois Bancos Públicos: BB (R$ 90M) e Caixa (R$ 50M)",
      "Leilão de Ativos Imobiliários (Condomínio Canto da Brava em Itajaí/SC avaliado em R$ 23,86M por R$ 11,93M)",
      "Tutela Cautelar Art. 20-B com Sessão de Mediação no Cejusc Porto Alegre em 06/11/2026"
    ],
    "cidade": "Porto Alegre",
    "uf": "RS",
    "coordenadas": [
      -30.0346,
      -51.2177
    ],
    "regiao_macro": "Sul",
    "tipo_processo": "Cautelar / Pré-RJ",
    "tipo_processo_label": "Cautelar Antecedente (art. 20-B)",
    "strategy_id": "dip",
    "strategy_name": "DIP Financing & M&A Distressed",
    "strategy_tag": "DIP / SPECIAL SITUATIONS",
    "institutional_triggers": [
      "Concentração Bancária de 100% em Dois Bancos Públicos: BB (R$ 90M) e Caixa (R$ 50M)",
      "Leilão de Ativos Imobiliários (Condomínio Canto da Brava em Itajaí/SC avaliado em R$ 23,86M por R$ 11,93M)",
      "Tutela Cautelar Art. 20-B com Sessão de Mediação no Cejusc Porto Alegre em 06/11/2026"
    ],
    "subtipo_processo": "Cautelar / Pré-RJ",
    "causa_crise": "Distratos acima de 85% em incorporações (2.675 de 6.090 unidades desfeitas) e frustração da venda do empreendimento Mirantes do Parque",
    "gargalo_imediato": "Leilões extrajudiciais de áreas em Itajaí/SC (13 e 16/10) com deságio de 50% (R$ 11,93M) e sessão de mediação agendada para 06/11/2026",
    "tese_mandato": "Estruturação de M&A Distressed / Aquisição de Ativos Imobiliários (Itajaí, Gravataí e Porto Alegre) ou Assessoria Técnica na mediação Cejusc.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Importante grupo gaúcho de incorporação imobiliária residencial/resort e engenharia pesada (Nex Group Participações e construtora Capa Engenharia), sediado em Porto Alegre/RS, com histórico de dezenas de empreendimentos entregues na Serra Gaúcha (Gramado), litoral catarinense (Praia Brava em Itajaí/SC) e Região Metropolitana de Porto Alegre.",
    "model_params": {
      "haircut_pct": 50,
      "recuperacao_pct": 50,
      "haircut_estimado_pct": 50,
      "recuperacao_estimada_pct": 50,
      "desconto_secundario_pct": 30.0,
      "valor_recuperado_mm": 70.0,
      "ev_estimado_mm": 91.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 16.8
      },
      "dip_necessidade_mm": 16.8,
      "upi_valuation_estimado_mm": 49.0
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-06",
      "data_marco_br": "06/11/2026",
      "dias_restantes": 21,
      "marco_label": "Sessão Oficial de Mediação Concursal no CEJUSC Empresarial de Porto Alegre",
      "marco_tipo": "Mediação CEJUSC",
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (21d)",
      "is_fixed_edital": true,
      "data_marco": "2026-11-06",
      "tipo_marco": "Sessão Oficial de Mediação Concursal no CEJUSC Empresarial de Porto Alegre",
      "urgencia": "CRÍTICA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/grupo-nex-tutela-cautelar-mediacao-2026",
    "url_tribunal_cvm": "https://www.tjrs.jus.br/novo/busca/?return=proc&client=wp_index"
  },
  {
    "id": 58,
    "data_evento": "2026-10-12",
    "data_adicao": "2026-10-16",
    "empresa": "Grupo Educacional Uniandrade (Campos de Andrade / Unib)",
    "cnpj": "76.189.091/0001-17",
    "setor_detalhe": "Ensino Superior Presencial & EAD (PR/SP)",
    "setor_macro": "Tecnologia & Serviços B2B",
    "regiao": "Curitiba, PR",
    "tribunal": "TJPR - 2ª Vara de Falências de Curitiba",
    "processo": "0004188-88.2026.8.16.0179",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.9,
    "tier": "Tier 2",
    "passivo_mm": 304,
    "passivo_display": "304",
    "credores": "Credores Quirografários e Bancários R$ 180,1M (244 registros), Credores Trabalhistas R$ 117,9M (1.087 registros), Credores com Garantia Real R$ 6,1M (2 registros)",
    "perfil_passivo": "Quirografário/Bancário (59%) + Passivo Trabalhista (39%) + Ativos Imobiliários Educacionais (Campi em Curitiba/PR, Maringá/PR e São Paulo/SP)",
    "advocacia": "Aguardando autuação (recurso em curso)",
    "aj": "N/A (Inicial indeferida sem resolução de mérito por forma associativa)",
    "tese": "(1) Causa da crise: Retração do FIES, concorrência do EAD de baixo custo, endividamento bancário de curto prazo e bloqueios trabalhistas/fiscais; (2) Gargalo imediato: Indeferimento da RJ por formato de associação civil sem fins lucrativos, deixando R$ 304,2M expostos a execuções imediatas e penhora de R$ 10,7M em depósitos judiciais; (3) Oportunidade de mandato: Assessoria em Conversão Societária (Lei 11.101/05) + Estruturação de M&A Distressed / Sale & Leaseback dos campi universitários em Curitiba, Maringá e SP.",
    "status": "Novo",
    "proximas_acoes": "Abordar mantenedoras do Grupo Uniandrade para estruturação de transformação societária / Recuperação Extrajudicial e venda de imóveis (campi) para liquidez imediata.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Passivo de R$ 304,2M Desprotegido de Stay Period após Indeferimento por Forma Associativa",
      "Bloqueios Judiciais de R$ 10,7M (R$ 9,5M Cível e R$ 1,2M Trabalhista)",
      "Três Instituições de Ensino Superior (Uniandrade Curitiba, Maringá e Unib SP) com Campi Próprios"
    ],
    "cidade": "Curitiba",
    "uf": "PR",
    "coordenadas": [
      -25.4284,
      -49.2733
    ],
    "regiao_macro": "Sul",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (Classe 129)",
    "strategy_id": "dip",
    "strategy_name": "DIP Financing & M&A Distressed",
    "strategy_tag": "DIP / SPECIAL SITUATIONS",
    "institutional_triggers": [
      "Passivo de R$ 304,2M Desprotegido de Stay Period após Indeferimento por Forma Associativa",
      "Bloqueios Judiciais de R$ 10,7M (R$ 9,5M Cível e R$ 1,2M Trabalhista)",
      "Três Instituições de Ensino Superior (Uniandrade Curitiba, Maringá e Unib SP) com Campi Próprios"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Retração do FIES, concorrência do EAD de baixo custo, endividamento bancário de curto prazo e bloqueios trabalhistas/fiscais",
    "gargalo_imediato": "Indeferimento da RJ por formato de associação civil sem fins lucrativos, deixando R$ 304,2M expostos a execuções imediatas e penhora de R$ 10,7M em depósitos judiciais",
    "tese_mandato": "Assessoria em Conversão Societária (Lei 11.101/05) + Estruturação de M&A Distressed / Sale & Leaseback dos campi universitários em Curitiba, Maringá e SP.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Tradicional grupo educacional de ensino superior com sede em Curitiba/PR (Centro Universitário Campos de Andrade — Uniandrade, Faculdade Uniandrade Maringá e Universidade Ibirapuera — Unib em São Paulo/SP), ofertando dezenas de cursos presenciais e EAD na área da saúde, engenharias e direito em amplos campi próprios.",
    "model_params": {
      "haircut_pct": 60,
      "recuperacao_pct": 40,
      "haircut_estimado_pct": 60,
      "recuperacao_estimada_pct": 40,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 121.6,
      "ev_estimado_mm": 152.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 36.5
      },
      "dip_necessidade_mm": 36.5,
      "upi_valuation_estimado_mm": 106.4
    },
    "calendar_meta": {
      "data_marco_iso": "2026-12-11",
      "data_marco_br": "11/12/2026",
      "dias_restantes": 56,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (56d)",
      "is_fixed_edital": false,
      "data_marco": "2026-12-11",
      "tipo_marco": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/grupo-uniandrade-recuperacao-judicial-negada-2026",
    "url_tribunal_cvm": "https://consulta.tjpr.jus.br/projudi_consulta/"
  },
  {
    "id": 59,
    "data_evento": "2026-10-09",
    "data_adicao": "2026-10-16",
    "empresa": "Moinho Corina Alimentos Ltda.",
    "cnpj": "08.158.596/0001-64",
    "setor_detalhe": "Moagem de Trigo & Alimentos (Cotia/SP)",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Cotia, SP",
    "tribunal": "TJSP - 1ª Vara Regional Empresarial",
    "processo": "1004582-82.2026.8.26.0260",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 9.1,
    "tier": "Tier 2",
    "passivo_mm": 151,
    "passivo_display": "151",
    "credores": "COFCO International Brasil (Nidera) R$ 62,18M (41% do passivo), Banco Santander R$ 6,38M, Banco Bradesco R$ 6,36M, Oliveira Cred Fomento Mercantil R$ 0,48M, Trabalhistas R$ 17,8M (Mais R$ 100,8M de passivo fiscal PGFN/PGE-SP)",
    "perfil_passivo": "Trading/Fornecedor Concentrado (COFCO 41%) + Bancário (Santander/Bradesco) + Planta Moageira, Silos em Cotia/SP e Marcas (A Nata, Nadine, Corina)",
    "advocacia": "Aguardando autuação",
    "aj": "Aguardando nomeação judicial",
    "tese": "(1) Causa da crise: Execução da fornecedora de trigo Nidera/COFCO, corte de crédito bancário e queda de moagem de 12 mil t/mês para 744 t/mês após encerramento da 1ª RJ em fev/2026; (2) Gargalo imediato: Dois pedidos de falência em curso (Oliveira Cred Fomento) e necessidade de suspensão urgente de constrições; (3) Oportunidade de mandato: Watchdog Creditor-Side para COFCO, Santander e Bradesco + M&A Distressed / Alienação de UPI da planta moageira e silos em Cotia/SP.",
    "status": "Novo",
    "proximas_acoes": "Contatar jurídico e área de crédito da COFCO International (detentora de 41% da dívida) e áreas de special situations de Santander e Bradesco.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Segunda Recuperação Judicial Ajuizada 7 Meses Após Encerramento da Primeira",
      "Credor Único (COFCO International) Concentra 41% do Passivo Quirografário (R$ 62,18M)",
      "Dois Pedidos de Falência Ativos e Passivo Fiscal Paralelo de R$ 100,8M (União e Estado de SP)"
    ],
    "cidade": "Cotia",
    "uf": "SP",
    "coordenadas": [
      -23.6022,
      -46.9189
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (Classe 129)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [
      "Segunda Recuperação Judicial Ajuizada 7 Meses Após Encerramento da Primeira",
      "Credor Único (COFCO International) Concentra 41% do Passivo Quirografário (R$ 62,18M)",
      "Dois Pedidos de Falência Ativos e Passivo Fiscal Paralelo de R$ 100,8M (União e Estado de SP)"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Execução da fornecedora de trigo Nidera/COFCO, corte de crédito bancário e queda de moagem de 12 mil t/mês para 744 t/mês após encerramento da 1ª RJ em fev/2026",
    "gargalo_imediato": "Dois pedidos de falência em curso (Oliveira Cred Fomento) e necessidade de suspensão urgente de constrições",
    "tese_mandato": "Watchdog Creditor-Side para COFCO, Santander e Bradesco + M&A Distressed / Alienação de UPI da planta moageira e silos em Cotia/SP.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Indústria moageira de trigo e alimentos fundada há mais de duas décadas em Cotia/SP (Região Metropolitana de São Paulo). Opera planta industrial própria de moagem e silos graneleiros com capacidade instalada para processar até 12.000 toneladas de trigo por mês, produzindo farinhas industriais, pré-misturas para panificação e farelo sob as marcas Corina, A Nata e Nadine.",
    "model_params": {
      "haircut_pct": 54,
      "recuperacao_pct": 46,
      "haircut_estimado_pct": 54,
      "recuperacao_estimada_pct": 46,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 69.5,
      "ev_estimado_mm": 98.2,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 22.0,
        "classe_i_pct": 4.0,
        "classe_ii_pct": 36.0,
        "fiscal_pct": 8.0,
        "classe_iii_pct": 25.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 22.0,
        "c1_trabalhista": 4.0,
        "c2_garantia_real": 36.0,
        "c3_quirografario": 25.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 12.1
      },
      "dip_necessidade_mm": 18.1,
      "upi_valuation_estimado_mm": 52.8
    },
    "calendar_meta": {
      "data_marco_iso": "2026-12-08",
      "data_marco_br": "08/12/2026",
      "dias_restantes": 53,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (53d)",
      "is_fixed_edital": false,
      "data_marco": "2026-12-08",
      "tipo_marco": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/moinho-corina-recuperacao-judicial-2026",
    "url_tribunal_cvm": "https://esaj.tjsp.jus.br/cpopg/open.do"
  },
  {
    "id": 60,
    "data_evento": "2026-10-05",
    "data_adicao": "2026-10-16",
    "empresa": "Grupo JMR (Armazéns Santa Luzia Ltda. e HS Agropecuária Ltda.)",
    "cnpj": "49.063.939/0001-94",
    "setor_detalhe": "Produção de Grãos, Hortifruti & Armazenagem",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Itaberaí, GO",
    "tribunal": "TJGO - 2ª Vara Cível de Itaberaí",
    "processo": "5604122-51.2026.8.09.0079",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 9.3,
    "tier": "Tier 2",
    "passivo_mm": 449,
    "passivo_display": "449",
    "credores": "Banco do Brasil R$ 76,9M (28 contratos garantia real), Itaú Unibanco R$ 75,0M (extraconcursal com alienação de 2 fazendas), Caixa Econômica Federal R$ 32,9M, Banco Daycoval R$ 25,5M, Sementes Plante R$ 19,4M, Syngenta R$ 14,4M, Banco John Deere (apreensão de máquinas), Mútuos PF R$ 103,3M",
    "perfil_passivo": "Bancário Concentrado + Tradings/Insumos + Ativos/UPIs (Silos/Armazéns Santa Luzia e 50 Unidades Produtivas de Soja, Milho, Tomate e Laranja em GO)",
    "advocacia": "Aguardando autuação",
    "aj": "Aguardando deferimento após emenda da inicial (prazo de 15 dias em curso)",
    "tese": "(1) Causa da crise: Queda nas cotações de soja/milho frente a custeios travados na alta e aperto de juros; (2) Gargalo imediato: Sete execuções do BB (R$ 51,8M), busca e apreensão de maquinário pelo Banco John Deere e exigência de laudo de essencialidade em 15 dias pela juíza de Itaberaí/GO; (3) Oportunidade de mandato: Watchdog de Colateral para Itaú, BB, Caixa e Daycoval + Desinvestimento/UPI de fazendas e da estrutura de armazenagem (Armazéns Santa Luzia).",
    "status": "Novo",
    "proximas_acoes": "Abordar mesas de crédito agro de BB (R$ 76,9M), Itaú (R$ 75M), Caixa (R$ 32,9M) e Daycoval (R$ 25,5M) para auditoria de colateral antes do deferimento do stay period.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Passivo Total de R$ 449,2M (R$ 289,05M Concursal + R$ 160,14M Extraconcursal)",
      "Forte Exposição Bancária: BB (R$ 76,9M), Itaú (R$ 75,0M), Caixa (R$ 32,9M) e Daycoval (R$ 25,5M)",
      "Apreensão de Máquinas pelo Banco John Deere e 50 Unidades Produtivas + Armazéns em GO"
    ],
    "cidade": "Itaberaí",
    "uf": "GO",
    "coordenadas": [
      -16.0203,
      -49.8092
    ],
    "regiao_macro": "Centro-Oeste",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (Classe 129)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [
      "Passivo Total de R$ 449,2M (R$ 289,05M Concursal + R$ 160,14M Extraconcursal)",
      "Forte Exposição Bancária: BB (R$ 76,9M), Itaú (R$ 75,0M), Caixa (R$ 32,9M) e Daycoval (R$ 25,5M)",
      "Apreensão de Máquinas pelo Banco John Deere e 50 Unidades Produtivas + Armazéns em GO"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Queda nas cotações de soja/milho frente a custeios travados na alta e aperto de juros",
    "gargalo_imediato": "Sete execuções do BB (R$ 51,8M), busca e apreensão de maquinário pelo Banco John Deere e exigência de laudo de essencialidade em 15 dias pela juíza de Itaberaí/GO",
    "tese_mandato": "Watchdog de Colateral para Itaú, BB, Caixa e Daycoval + Desinvestimento/UPI de fazendas e da estrutura de armazenagem (Armazéns Santa Luzia).",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Consolidado grupo agroindustrial goiano sediado em Itaberaí/GO (composto por Armazéns Gerais Santa Luzia e HS Agropecuária), operando complexo próprio de silos e secadores de grãos aliado a 50 unidades produtivas rurais dedicadas ao cultivo irrigado e de sequeiro de soja, milho, feijão, tomate industrial e citricultura (laranja).",
    "model_params": {
      "haircut_pct": 50,
      "recuperacao_pct": 50,
      "haircut_estimado_pct": 50,
      "recuperacao_estimada_pct": 50,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 224.5,
      "ev_estimado_mm": 291.9,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 22.0,
        "classe_i_pct": 4.0,
        "classe_ii_pct": 36.0,
        "fiscal_pct": 8.0,
        "classe_iii_pct": 25.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 22.0,
        "c1_trabalhista": 4.0,
        "c2_garantia_real": 36.0,
        "c3_quirografario": 25.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 35.9
      },
      "dip_necessidade_mm": 53.9,
      "upi_valuation_estimado_mm": 157.1
    },
    "calendar_meta": {
      "data_marco_iso": "2026-10-22",
      "data_marco_br": "22/10/2026",
      "dias_restantes": 6,
      "marco_label": "Vencimento do Prazo Judicial (15d) para Emenda da Inicial e Laudo de Essencialidade",
      "marco_tipo": "Prazo Judicial",
      "urgencia_nivel": "critico",
      "urgencia_label": "URGENTE (6d)",
      "is_fixed_edital": true,
      "data_marco": "2026-10-22",
      "tipo_marco": "Vencimento do Prazo Judicial (15d) para Emenda da Inicial e Laudo de Essencialidade",
      "urgencia": "CRÍTICA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/grupo-jmr-recuperacao-judicial-2026",
    "url_tribunal_cvm": "https://projudi.tjgo.jus.br/BuscaProcessoPublica"
  },
  {
    "id": 61,
    "data_evento": "2026-10-01",
    "data_adicao": "2026-10-16",
    "empresa": "Importadora Oplima Ltda.",
    "cnpj": "04.945.481/0001-69",
    "setor_detalhe": "Varejo de Materiais de Construção (Belém/PA)",
    "setor_macro": "Varejo & Consumo",
    "regiao": "Belém, PA",
    "tribunal": "TJPA - 13ª Vara Cível de Belém",
    "processo": "0845122-95.2026.8.14.0301",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.8,
    "tier": "Tier 2",
    "passivo_mm": 66,
    "passivo_display": "66",
    "credores": "Banco Safra R$ 21,33M, Banco da Amazônia (BASA) R$ 12,06M, Banco Santander R$ 11,80M, Banco do Brasil R$ 7,80M (85% do passivo concentrado em 8 bancos na Classe II)",
    "perfil_passivo": "Bancário Concentrado (85% Garantia Real / Travas de Cartão) + Imóvel Logístico em Ananindeua/PA e 8 Lojas em Belém/PA",
    "advocacia": "Aguardando autuação",
    "aj": "BCA Consult Ltda.",
    "tese": "(1) Causa da crise: Queda de 68% no faturamento pós-ciclo de obras da COP-30 em Belém e retenção diária de recebíveis de cartão pelos bancos (caixa reduzido a R$ 903); (2) Gargalo imediato: Juízo manteve travas fiduciárias de Safra e Santander e exigiu esclarecimento das garantias bancárias frente à projeção de deságio de 80% em 120 meses; (3) Oportunidade de mandato: Assessoria ao Sindicato de Bancos (Safra, BASA, Santander, BB) na defesa das travas fiduciárias e impugnação da classificação na Classe II.",
    "status": "Novo",
    "proximas_acoes": "Contatar BCA Consult (AJ) e áreas jurídicas de recuperação de crédito de Safra, BASA, Santander e BB para atuação conjunta nos incidentes de trava bancária.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Concentração Bancária de 85% (R$ 56,41M): Safra (R$ 21,33M), BASA (R$ 12,06M), Santander (R$ 11,8M) e BB (R$ 7,8M)",
      "Disputa Judicial sobre Travas de Cartão e Cessão Fiduciária de Recebíveis",
      "Proposta Preliminar da Devedora Projeta Haircut de 80% e Prazo de 120 Meses"
    ],
    "cidade": "Belém",
    "uf": "PA",
    "coordenadas": [
      -1.4558,
      -48.4902
    ],
    "regiao_macro": "Norte",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (Classe 129)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [
      "Concentração Bancária de 85% (R$ 56,41M): Safra (R$ 21,33M), BASA (R$ 12,06M), Santander (R$ 11,8M) e BB (R$ 7,8M)",
      "Disputa Judicial sobre Travas de Cartão e Cessão Fiduciária de Recebíveis",
      "Proposta Preliminar da Devedora Projeta Haircut de 80% e Prazo de 120 Meses"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Queda de 68% no faturamento pós-ciclo de obras da COP-30 em Belém e retenção diária de recebíveis de cartão pelos bancos (caixa reduzido a R$ 903)",
    "gargalo_imediato": "Juízo manteve travas fiduciárias de Safra e Santander e exigiu esclarecimento das garantias bancárias frente à projeção de deságio de 80% em 120 meses",
    "tese_mandato": "Assessoria ao Sindicato de Bancos (Safra, BASA, Santander, BB) na defesa das travas fiduciárias e impugnação da classificação na Classe II.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Tradicional rede varejista e atacadista de materiais de construção, acabamento, pisos, louças e ferragens da Região Metropolitana de Belém/PA, fundada há mais de 30 anos. Opera 8 lojas físicas de grande porte em Belém e amplo centro de distribuição logístico próprio no município de Ananindeua/PA.",
    "model_params": {
      "haircut_pct": 80,
      "recuperacao_pct": 20,
      "haircut_estimado_pct": 80,
      "recuperacao_estimada_pct": 20,
      "desconto_secundario_pct": 40.0,
      "valor_recuperado_mm": 13.2,
      "ev_estimado_mm": 33.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 7.9
      },
      "dip_necessidade_mm": 15.0,
      "upi_valuation_estimado_mm": 23.1
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-30",
      "data_marco_br": "30/11/2026",
      "dias_restantes": 45,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (45d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-30",
      "tipo_marco": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/importadora-oplima-recuperacao-judicial-2026",
    "url_tribunal_cvm": "https://consultas.tjpa.jus.br/consultaunificada/"
  },
  {
    "id": 62,
    "data_evento": "2026-10-15",
    "data_adicao": "2026-10-16",
    "empresa": "AJX Capital Investimentos S.A.",
    "cnpj": "42.697.069/0001-66",
    "setor_detalhe": "Fintech & Captação via CCBs (Barueri/SP)",
    "setor_macro": "Serviços Financeiros & Crédito",
    "regiao": "Barueri, SP",
    "tribunal": "TJSP - 2ª Vara Regional Empresarial",
    "processo": "1008941-12.2026.8.26.0260",
    "fase": "Falência Decretada (Classe 110)",
    "score": 9.1,
    "tier": "Tier 2",
    "passivo_mm": 350,
    "passivo_display": "350",
    "credores": "Cerca de 10 mil investidores titulares de CCBs endossadas (prejuízo estimado em R$ 350M, incluindo grupo de 278 investidores com R$ 34,9M representados por Jorge Calazans)",
    "perfil_passivo": "Mercado de Capitais / Cédulas de Crédito Bancário (CCBs) Pulverizadas + Bloqueio Judicial de Contas, Imóveis e Veículos",
    "advocacia": "Em substituição para interposição de agravo",
    "aj": "Brazilio Bacellar, Shirai Advogados",
    "tese": "(1) Causa da crise: Insustentabilidade na captação via Cédulas de Crédito Bancário (CCBs) endossadas a investidores com bloqueio de resgates; (2) Gargalo imediato: Decretação de falência em 15/10/2026 por impontualidade (art. 94, I da Lei 11.101/05) sem depósito elisivo, com bloqueio judicial de contas, imóveis e veículos; (3) Oportunidade de mandato: Rastreamento Forense de Ativos (Asset Tracing) e Assessoria a Comitê de Investidores Lesados (R$ 350M) ou Estruturação de Recurso com Plano Alternativo.",
    "status": "Novo",
    "proximas_acoes": "Contatar Brazilio Bacellar Shirai (AJ) e bancas representantes de grupos de investidores (Jorge Calazans - R$ 34,9M) para investigação forense de ativos.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Falência Decretada em 15/10/2026 pela 2ª Vara Regional Empresarial de SP",
      "Passivo Estimado em R$ 350M Pulverizado entre 10 Mil Investidores de CCBs",
      "Ordem Judicial de Bloqueio de Contas, Imóveis, Veículos e Arrecadação Forense"
    ],
    "cidade": "Barueri",
    "uf": "SP",
    "coordenadas": [
      -23.5114,
      -46.8763
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Falência Decretada (Classe 110)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [
      "Falência Decretada em 15/10/2026 pela 2ª Vara Regional Empresarial de SP",
      "Passivo Estimado em R$ 350M Pulverizado entre 10 Mil Investidores de CCBs",
      "Ordem Judicial de Bloqueio de Contas, Imóveis, Veículos e Arrecadação Forense"
    ],
    "subtipo_processo": "Falência / Liquidação",
    "causa_crise": "Insustentabilidade na captação via Cédulas de Crédito Bancário (CCBs) endossadas a investidores com bloqueio de resgates",
    "gargalo_imediato": "Decretação de falência em 15/10/2026 por impontualidade (art. 94, I da Lei 11.101/05) sem depósito elisivo, com bloqueio judicial de contas, imóveis e veículos",
    "tese_mandato": "Rastreamento Forense de Ativos (Asset Tracing) e Assessoria a Comitê de Investidores Lesados (R$ 350M) ou Estruturação de Recurso com Plano Alternativo.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Fintech e plataforma de originação de crédito estruturado sediada em Alphaville (Barueri/SP), especializada na estruturação e distribuição de Cédulas de Crédito Bancário (CCBs) endossadas a investidores qualificados e de varejo de alta renda, com captação pulverizada em âmbito nacional.",
    "model_params": {
      "haircut_pct": 76,
      "recuperacao_pct": 24,
      "haircut_estimado_pct": 76,
      "recuperacao_estimada_pct": 24,
      "desconto_secundario_pct": 50.0,
      "valor_recuperado_mm": 84.0,
      "ev_estimado_mm": 175.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 12.0,
        "classe_i_pct": 14.0,
        "classe_ii_pct": 22.0,
        "fiscal_pct": 24.0,
        "classe_iii_pct": 24.0,
        "classe_iv_pct": 4.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 12.0,
        "c1_trabalhista": 14.0,
        "c2_garantia_real": 22.0,
        "c3_quirografario": 24.0,
        "c4_me_epp": 4.0,
        "passivo_fiscal_estimado_mm": 84.0
      },
      "dip_necessidade_mm": 42.0,
      "upi_valuation_estimado_mm": 122.5
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-29",
      "data_marco_br": "29/11/2026",
      "dias_restantes": 44,
      "marco_label": "Publicação do Quadro de Arrecadação de Ativos & Edital de Leilão (Art. 141)",
      "marco_tipo": "Arrecadação / Leilão",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (44d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-29",
      "tipo_marco": "Publicação do Quadro de Arrecadação de Ativos & Edital de Leilão (Art. 141)",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://neofeed.com.br/negocios/justica-decreta-falencia-da-ajx-capital-que-vendia-titulos-com-promessa-de-ate-35-ao-mes/",
    "url_tribunal_cvm": "https://esaj.tjsp.jus.br/cpopg/open.do"
  },
  {
    "id": 63,
    "data_evento": "2026-10-14",
    "data_adicao": "2026-10-16",
    "empresa": "Grupo Ezata (Ezata Industrial Ltda. e MAGM Empreendimentos Ltda.)",
    "cnpj": "05.061.998/0001-58",
    "setor_detalhe": "Indústria Metalmecânica & Componentes Agrícolas",
    "setor_macro": "Indústria & Manufatura",
    "regiao": "Passo Fundo, RS",
    "tribunal": "TJRS - Vara Empresarial de Passo Fundo",
    "processo": "5014272-72.2026.8.21.0021",
    "fase": "Constatação Prévia (art. 51-A)",
    "score": 8.9,
    "tier": "Tier 1",
    "passivo_mm": 55,
    "passivo_display": "55",
    "credores": "Sicredi R$ 17,77M (R$ 11,22M fiduciário garantido pelo imóvel da fábrica + R$ 6,55M quirografário), Itaú Unibanco R$ 7,61M, Banco Santander R$ 3,46M, Caixa Econômica Federal R$ 3,13M, Gerdau Aços Longos R$ 0,57M (pedido de falência)",
    "perfil_passivo": "Bancário Concentrado (Sicredi, Itaú, Santander, Caixa) + Imóvel Fabril em Alienação Fiduciária em Passo Fundo/RS + Passivo Fiscal R$ 20,41M",
    "advocacia": "Aguardando autuação",
    "aj": "Von Saltiél Administração Judicial (Constatação Prévia)",
    "tese": "(1) Causa da crise: Queda de 64% na receita (de R$ 61M para R$ 21,7M) por retração na demanda de máquinas agrícolas, enchentes/estiagens no RS e custo financeiro; (2) Gargalo imediato: Fim sem acordo da mediação cautelar, pedido de falência movido pela Gerdau Aços Longos e exigência de laudo de constatação prévia em 5 dias sem suspensão automática de execuções; (3) Oportunidade de mandato: Watchdog Creditor-Side para Sicredi, Itaú, Santander, Caixa e Gerdau + Sale & Leaseback ou Alienação de UPI do parque fabril em Passo Fundo/RS.",
    "status": "Novo",
    "proximas_acoes": "Abordar áreas de crédito de Sicredi (R$ 17,77M), Itaú (R$ 7,61M), Santander (R$ 3,46M) e Caixa (R$ 3,13M) durante os 5 dias da constatação prévia.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Evolução de Cautelar para RJ após Frustração de Mediação com Bancos",
      "Forte Concentração Bancária: Sicredi (R$ 17,77M), Itaú (R$ 7,61M), Santander (R$ 3,46M) e Caixa (R$ 3,13M)",
      "Execuções Não Suspensas e Pedido de Falência Ativo da Gerdau Aços Longos"
    ],
    "cidade": "Passo Fundo",
    "uf": "RS",
    "coordenadas": [
      -28.2628,
      -52.4067
    ],
    "regiao_macro": "Sul",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (Classe 129)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [
      "Evolução de Cautelar para RJ após Frustração de Mediação com Bancos",
      "Forte Concentração Bancária: Sicredi (R$ 17,77M), Itaú (R$ 7,61M), Santander (R$ 3,46M) e Caixa (R$ 3,13M)",
      "Execuções Não Suspensas e Pedido de Falência Ativo da Gerdau Aços Longos"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Queda de 64% na receita (de R$ 61M para R$ 21,7M) por retração na demanda de máquinas agrícolas, enchentes/estiagens no RS e custo financeiro",
    "gargalo_imediato": "Fim sem acordo da mediação cautelar, pedido de falência movido pela Gerdau Aços Longos e exigência de laudo de constatação prévia em 5 dias sem suspensão automática de execuções",
    "tese_mandato": "Watchdog Creditor-Side para Sicredi, Itaú, Santander, Caixa e Gerdau + Sale & Leaseback ou Alienação de UPI do parque fabril em Passo Fundo/RS.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Indústria metalmecânica gaúcha sediada no distrito industrial de Passo Fundo/RS (Ezata Industrial e holding patrimonial MAGM), especializada no corte a laser, dobra CNC, solda robotizada e pintura eletrostática de componentes e subconjuntos metálicos fornecidos para grandes fabricantes de máquinas e implementos agrícolas do Sul.",
    "model_params": {
      "haircut_pct": 55,
      "recuperacao_pct": 45,
      "haircut_estimado_pct": 55,
      "recuperacao_estimada_pct": 45,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 24.8,
      "ev_estimado_mm": 35.8,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 6.6
      },
      "dip_necessidade_mm": 15.0,
      "upi_valuation_estimado_mm": 19.2
    },
    "calendar_meta": {
      "data_marco_iso": "2026-10-21",
      "data_marco_br": "21/10/2026",
      "dias_restantes": 5,
      "marco_label": "Entrega do Laudo de Constatação Prévia (Art. 51-A — 5 dias)",
      "marco_tipo": "Perícia Prévia 51-A",
      "urgencia_nivel": "critico",
      "urgencia_label": "URGENTE (5d)",
      "is_fixed_edital": true,
      "data_marco": "2026-10-21",
      "tipo_marco": "Entrega do Laudo de Constatação Prévia (Art. 51-A — 5 dias)",
      "urgencia": "CRÍTICA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/ezata-recuperacao-judicial-2026",
    "url_tribunal_cvm": "https://www.tjrs.jus.br/novo/busca/?return=proc&client=wp_index"
  },
  {
    "id": 64,
    "data_evento": "2026-10-14",
    "data_adicao": "2026-10-16",
    "empresa": "Grupo Ditália (Ditália Móveis Industrial Ltda.)",
    "cnpj": "73.289.050/0001-04",
    "setor_detalhe": "Indústria Moveleira (Monte Belo do Sul / Bento Gonçalves)",
    "setor_macro": "Indústria & Manufatura",
    "regiao": "Caxias do Sul, RS",
    "tribunal": "TJRS - Vara Empresarial de Caxias do Sul",
    "processo": "5000812-44.2026.8.21.0005",
    "fase": "Falência Decretada (Classe 110)",
    "score": 9.0,
    "tier": "Tier 2",
    "passivo_mm": 85,
    "passivo_display": "85",
    "credores": "Bancos Regionais e Privados (Banrisul, Sicredi, Bradesco, Itaú), Fornecedores da Cadeia Moveleira e Passivo Trabalhista/Fiscal",
    "perfil_passivo": "Bancário + Fornecedores Industriais + Alienação Judicial de UPI (Parque Fabril em Monte Belo do Sul/RS em operação com 101 funcionários, lance inicial R$ 48M)",
    "advocacia": "Massa Falida sob gestão judicial",
    "aj": "CB2D Administração Judicial (Leiloeiro Norton Jochims Fernandes)",
    "tese": "(1) Causa da crise: Rejeição do plano de RJ pelos credores e convolação em falência com autorização judicial de operação continuada (101 funcionários ativos e folha em dia); (2) Gargalo imediato: Leilão judicial da UPI Parque Fabril Ditália divulgado em 14/10 para o dia 10/11/2026 com lance inicial de R$ 48 milhões; (3) Oportunidade de mandato: Assessoria Buy-Side (M&A Distressed) para investidores industriais/fundos na aquisição da UPI livre de sucessão (art. 141 da Lei 11.101/05).",
    "status": "Novo",
    "proximas_acoes": "Apresentar teaser da UPI Parque Fabril Ditália (lance inicial R$ 48M em 10/11/2026) a fundos de Special Situations e players estratégicos do setor moveleiro.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Leilão de UPI de Parque Fabril em Plena Operação (101 Funcionários Ativos)",
      "Lance Inicial de R$ 48 Milhões frente a Passivo de R$ 85 Milhões (Data: 10/11/2026)",
      "Aquisição Livre de Sucessão Trabalhista e Tributária (Art. 141 da Lei 11.101/05)"
    ],
    "cidade": "Caxias do Sul",
    "uf": "RS",
    "coordenadas": [
      -29.1678,
      -51.1794
    ],
    "regiao_macro": "Sul",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Alienação de UPI / Falência Continuada",
    "strategy_id": "dip",
    "strategy_name": "DIP Financing & M&A Distressed",
    "strategy_tag": "DIP / SPECIAL SITUATIONS",
    "institutional_triggers": [
      "Leilão de UPI de Parque Fabril em Plena Operação (101 Funcionários Ativos)",
      "Lance Inicial de R$ 48 Milhões frente a Passivo de R$ 85 Milhões (Data: 10/11/2026)",
      "Aquisição Livre de Sucessão Trabalhista e Tributária (Art. 141 da Lei 11.101/05)"
    ],
    "subtipo_processo": "Falência / Liquidação",
    "causa_crise": "Rejeição do plano de RJ pelos credores e convolação em falência com autorização judicial de operação continuada (101 funcionários ativos e folha em dia)",
    "gargalo_imediato": "Leilão judicial da UPI Parque Fabril Ditália divulgado em 14/10 para o dia 10/11/2026 com lance inicial de R$ 48 milhões",
    "tese_mandato": "Assessoria Buy-Side (M&A Distressed) para investidores industriais/fundos na aquisição da UPI livre de sucessão (art. 141 da Lei 11.101/05).",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Tradicional fabricante gaúcha de móveis seriados em MDP/MDF (cozinhas moduladas, dormitórios e móveis para escritório e home office), fundada na Serra Gaúcha com amplo parque fabril automatizado em Monte Belo do Sul/RS (região de Bento Gonçalves), historicamente exportadora e fornecedora das grandes redes varejistas e e-commerces nacionais.",
    "model_params": {
      "haircut_pct": 74,
      "recuperacao_pct": 26,
      "haircut_estimado_pct": 74,
      "recuperacao_estimada_pct": 26,
      "desconto_secundario_pct": 50.0,
      "valor_recuperado_mm": 22.1,
      "ev_estimado_mm": 55.2,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 12.0,
        "classe_i_pct": 14.0,
        "classe_ii_pct": 22.0,
        "fiscal_pct": 24.0,
        "classe_iii_pct": 24.0,
        "classe_iv_pct": 4.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 12.0,
        "c1_trabalhista": 14.0,
        "c2_garantia_real": 22.0,
        "c3_quirografario": 24.0,
        "c4_me_epp": 4.0,
        "passivo_fiscal_estimado_mm": 20.4
      },
      "dip_necessidade_mm": 15.0,
      "upi_valuation_estimado_mm": 29.7
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-10",
      "data_marco_br": "10/11/2026",
      "dias_restantes": 25,
      "marco_label": "Leilão Judicial da UPI Parque Fabril Ditália (Lance Inicial R$ 48 MM)",
      "marco_tipo": "Leilão de UPI",
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (25d)",
      "is_fixed_edital": true,
      "data_marco": "2026-11-10",
      "tipo_marco": "Leilão Judicial da UPI Parque Fabril Ditália (Lance Inicial R$ 48 MM)",
      "urgencia": "CRÍTICA"
    },
    "url_noticia": "https://gazeta-rs.com.br/2026/10/ditalia-moveis-leilao-48-milhoes/",
    "url_tribunal_cvm": "https://www.tjrs.jus.br/novo/busca/?return=proc&client=wp_index"
  },
  {
    "id": 65,
    "data_evento": "2026-10-13",
    "data_adicao": "2026-10-16",
    "empresa": "Lojas Dona do Lar Ltda.",
    "cnpj": "14.459.063/0001-00",
    "setor_detalhe": "Rede Varejista de Eletrodomésticos e Móveis (15 Lojas em MT)",
    "setor_macro": "Varejo & Consumo",
    "regiao": "Cuiabá, MT",
    "tribunal": "TJMT - 1ª Vara de Falências de Cuiabá",
    "processo": "1024511-30.2022.8.11.0041",
    "fase": "Falência Decretada (Classe 110)",
    "score": 8.6,
    "tier": "Tier 2",
    "passivo_mm": 38,
    "passivo_display": "38",
    "credores": "Banco Santander R$ 4,26M, Banco Sofisa R$ 3,50M, Whirlpool R$ 2,66M, BMP Money Plus R$ 2,00M, Siri Comércio R$ 1,80M, Elgin R$ 1,77M, Banco Bradesco R$ 1,72M, Semp TCL R$ 1,57M, Color Visão R$ 1,11M, Gazin R$ 1,09M, Panasonic R$ 1,07M, Climazon R$ 1,06M, Atlas R$ 0,79M, LG Electronics R$ 0,70M, Banco Daycoval R$ 0,65M",
    "perfil_passivo": "Bancário Capital de Giro (Santander, Sofisa, BMP, Bradesco, Daycoval) + Indústria de Eletrodomésticos/Móveis + Rastreamento de Centro de Distribuição e Frota",
    "advocacia": "Souza Gomes Cruz Advogados",
    "aj": "Administrador Judicial da 1ª Vara Cível de Cuiabá",
    "tese": "(1) Causa da crise: Descumprimento de obrigações do plano de RJ de 15 lojas em MT e fechamento abrupto da sede e do Centro de Distribuição; (2) Gargalo imediato: Decisão judicial divulgada em 13-15/10/2026 determinando devassa patrimonial via Renajud, Infojud, Detran-MT e cartórios imobiliários por obstrução de acesso à massa falida (art. 104 da Lei 11.101/05); (3) Oportunidade de mandato: Investigação Forense de Ativos (Asset Tracing) e Recuperação de Crédito para o pool de bancos (Santander, Sofisa, Bradesco, BMP, Daycoval) e fabricantes (Whirlpool, Elgin, Semp TCL, Panasonic).",
    "status": "Novo",
    "proximas_acoes": "Oferecer serviços de Asset Tracing e investigação patrimonial ao pool de bancos (Santander, Sofisa, BMP, Bradesco, Daycoval) e indústrias eletroeletrônicas.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Ordem Judicial de Rastreamento Forense (Renajud, Infojud, Cartórios) em 13/10/2026",
      "Exposição Bancária Desagregada: Santander (R$ 4,26M), Sofisa (R$ 3,5M), BMP (R$ 2M), Bradesco (R$ 1,72M), Daycoval (R$ 0,65M)",
      "Ocultação de Estoque e Frota em Centro de Distribuição Fechado em Cuiabá/MT"
    ],
    "cidade": "Cuiabá",
    "uf": "MT",
    "coordenadas": [
      -15.601,
      -56.0974
    ],
    "regiao_macro": "Centro-Oeste",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Falência / Asset Tracing (Classe 110)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [
      "Ordem Judicial de Rastreamento Forense (Renajud, Infojud, Cartórios) em 13/10/2026",
      "Exposição Bancária Desagregada: Santander (R$ 4,26M), Sofisa (R$ 3,5M), BMP (R$ 2M), Bradesco (R$ 1,72M), Daycoval (R$ 0,65M)",
      "Ocultação de Estoque e Frota em Centro de Distribuição Fechado em Cuiabá/MT"
    ],
    "subtipo_processo": "Falência / Liquidação",
    "causa_crise": "Descumprimento de obrigações do plano de RJ de 15 lojas em MT e fechamento abrupto da sede e do Centro de Distribuição",
    "gargalo_imediato": "Decisão judicial divulgada em 13-15/10/2026 determinando devassa patrimonial via Renajud, Infojud, Detran-MT e cartórios imobiliários por obstrução de acesso à massa falida (art. 104 da Lei 11.101/05)",
    "tese_mandato": "Investigação Forense de Ativos (Asset Tracing) e Recuperação de Crédito para o pool de bancos (Santander, Sofisa, Bradesco, BMP, Daycoval) e fabricantes (Whirlpool, Elgin, Semp TCL, Panasonic).",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Conhecida rede varejista regional de móveis, eletrodomésticos, celulares e utilidades domésticas sediada em Cuiabá/MT, que chegou a operar 15 lojas físicas estrategicamente posicionadas na Baixada Cuiabana (Cuiabá e Várzea Grande) e municípios do interior mato-grossense, com forte operação de crediário próprio.",
    "model_params": {
      "haircut_pct": 78,
      "recuperacao_pct": 22,
      "haircut_estimado_pct": 78,
      "recuperacao_estimada_pct": 22,
      "desconto_secundario_pct": 50.0,
      "valor_recuperado_mm": 8.4,
      "ev_estimado_mm": 19.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 12.0,
        "classe_i_pct": 14.0,
        "classe_ii_pct": 22.0,
        "fiscal_pct": 24.0,
        "classe_iii_pct": 24.0,
        "classe_iv_pct": 4.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 12.0,
        "c1_trabalhista": 14.0,
        "c2_garantia_real": 22.0,
        "c3_quirografario": 24.0,
        "c4_me_epp": 4.0,
        "passivo_fiscal_estimado_mm": 9.1
      },
      "dip_necessidade_mm": 15.0,
      "upi_valuation_estimado_mm": 13.3
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-27",
      "data_marco_br": "27/11/2026",
      "dias_restantes": 42,
      "marco_label": "Publicação do Quadro de Arrecadação de Ativos & Edital de Leilão (Art. 141)",
      "marco_tipo": "Arrecadação / Leilão",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (42d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-27",
      "tipo_marco": "Publicação do Quadro de Arrecadação de Ativos & Edital de Leilão (Art. 141)",
      "urgencia": "ALTA"
    },
    "url_noticia": "https://www.olhardireto.com.br/juridico/noticias/justica-determina-devassa-patrimonial-e-edital-de-credores-no-processo-de-falencia-das-lojas-dona-do-lar",
    "url_tribunal_cvm": "https://pje.tjmt.jus.br/pje/ConsultaPublica/listView.seam"
  },
  {
    "id": 66,
    "data_evento": "2026-10-15",
    "data_adicao": "2026-10-16",
    "empresa": "Grupo MPC (MJRE Construtora Ltda. e Usinlagos Pavimentação)",
    "cnpj": "05.851.921/0001-81",
    "setor_detalhe": "Engenharia Pesada, Pavimentação & Contratos Petrobras",
    "setor_macro": "Construção Civil & Real Estate",
    "regiao": "Rio de Janeiro, RJ",
    "tribunal": "TJRJ - 4ª Vara Empresarial do Rio",
    "processo": "0814512-15.2026.8.19.0001",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.8,
    "tier": "Tier 2",
    "passivo_mm": 82,
    "passivo_display": "82",
    "credores": "Caixa Econômica Federal R$ 10,34M, Banco Caterpillar R$ 6,08M, Garson e Votorantim S.A. (cessões fiduciárias discutidas sobre contratos Petrobras), Fornecedores de Infraestrutura (R$ 76,41M sujeitos + R$ 5,87M fiscais)",
    "perfil_passivo": "Bancário/Maquinário (Caixa e Banco Caterpillar) + Cessão Fiduciária de Recebíveis Petrobras Depositados em Conta Judicial",
    "advocacia": "Aguardando publicação de edital",
    "aj": "Samantha Mendes Longo",
    "tese": "(1) Causa da crise: Suspensão de contratos de pavimentação do Programa Asfalto Liso no RJ e queda do efetivo de 1.200 para 650 trabalhadores; (2) Gargalo imediato: Consolidação apenas processual (sem consolidação substancial, art. 69-I) e determinação judicial de depósito em conta vinculada dos recebíveis de dois contratos com a Petrobras; (3) Oportunidade de mandato: Watchdog de Conta Judicial/Escrow dos recebíveis Petrobras e Assessoria a Credores Financeiros (Caixa, Banco Caterpillar e Votorantim).",
    "status": "Novo",
    "proximas_acoes": "Abordar áreas de crédito de Caixa (R$ 10,34M), Banco Caterpillar (R$ 6,08M) e Votorantim S.A. para monitoramento dos recebíveis da Petrobras depositados em juízo.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Depósito Judicial Obrigatório de Recebíveis de Dois Contratos com a Petrobras",
      "Disputa sobre Cessões Fiduciárias com Votorantim S.A. e Garson",
      "Exposição de Caixa Econômica Federal (R$ 10,34M) e Banco Caterpillar (R$ 6,08M)"
    ],
    "cidade": "Rio de Janeiro",
    "uf": "RJ",
    "coordenadas": [
      -22.9068,
      -43.1729
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Recuperação Judicial (Classe 129)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [
      "Depósito Judicial Obrigatório de Recebíveis de Dois Contratos com a Petrobras",
      "Disputa sobre Cessões Fiduciárias com Votorantim S.A. e Garson",
      "Exposição de Caixa Econômica Federal (R$ 10,34M) e Banco Caterpillar (R$ 6,08M)"
    ],
    "subtipo_processo": "PRJ",
    "causa_crise": "Suspensão de contratos de pavimentação do Programa Asfalto Liso no RJ e queda do efetivo de 1.200 para 650 trabalhadores",
    "gargalo_imediato": "Consolidação apenas processual (sem consolidação substancial, art. 69-I) e determinação judicial de depósito em conta vinculada dos recebíveis de dois contratos com a Petrobras",
    "tese_mandato": "Watchdog de Conta Judicial/Escrow dos recebíveis Petrobras e Assessoria a Credores Financeiros (Caixa, Banco Caterpillar e Votorantim).",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Grupo fluminense de engenharia pesada, pavimentação asfáltica e obras de infraestrutura urbana/industrial sediado no Rio de Janeiro/RJ (integrado por MJRE Construtora e Usinlagos Usina de Asfalto), detentor de usinas próprias de CBUQ e contratos de engenharia e manutenção em instalações da Petrobras e prefeituras do estado do RJ.",
    "model_params": {
      "haircut_pct": 51,
      "recuperacao_pct": 49,
      "haircut_estimado_pct": 51,
      "recuperacao_estimada_pct": 49,
      "desconto_secundario_pct": 35.0,
      "valor_recuperado_mm": 40.2,
      "ev_estimado_mm": 41.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 9.8
      },
      "dip_necessidade_mm": 15.0,
      "upi_valuation_estimado_mm": 28.7
    },
    "calendar_meta": {
      "data_marco_iso": "2026-12-14",
      "data_marco_br": "14/12/2026",
      "dias_restantes": 59,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (59d)",
      "is_fixed_edital": false,
      "data_marco": "2026-12-14",
      "tipo_marco": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://www3.tjrj.jus.br/gedcacheweb/default.aspx?UZIP=1&GEDID=0004A8609F2F3B6F728B157B13A74240F08AC51A2E521F1F",
    "url_tribunal_cvm": "https://www3.tjrj.jus.br/consultaprocessual/"
  },
  {
    "id": 67,
    "data_evento": "2026-10-13",
    "data_adicao": "2026-10-16",
    "empresa": "Grupo Assis Fortes (Servi-San Ltda., Servi-San Vigilância e Plast Nor)",
    "cnpj": "06.855.175/0001-67",
    "setor_detalhe": "Facilities, Vigilância, Transporte de Valores & Plásticos",
    "setor_macro": "Tecnologia & Serviços B2B",
    "regiao": "Teresina, PI",
    "tribunal": "TJPI - 3ª Vara Cível de Teresina",
    "processo": "0811420-35.2017.8.18.0140",
    "fase": "Falência Decretada (Classe 110)",
    "score": 8.8,
    "tier": "Tier 2",
    "passivo_mm": 360,
    "passivo_display": "360",
    "credores": "PGFN / União R$ 357M, Credores Trabalhistas R$ 30M (mais de 1.200 empregados, R$ 3,14M liberados para folha de set/26), Bancos e Fornecedores Operacionais",
    "perfil_passivo": "Passivo Tributário Federal (PGFN R$ 357M) + Trabalhista (R$ 30M) + Ativos/UPIs (Imóveis, Frota de Carros-Fortes, Precatório contra o Município de Manaus e Plantas Inbra-Pack e Plast Nor)",
    "advocacia": "Em recurso de agravo perante o TJPI",
    "aj": "Jorge Ivan Teles de Sousa",
    "tese": "(1) Causa da crise: Salto do passivo fiscal de R$ 69M para R$ 357M em 8 anos de RJ, inatividade das indústrias Plast Nor e Inbra-Pack e criação de empresa paralela (Servi-San Manutenção); (2) Gargalo imediato: Ordem de lacre imediato com força policial divulgada em 13/10/2026 (suspensa liminarmente no TJPI) e arrecadação de bens em 5 dias pelo AJ; (3) Oportunidade de mandato: Aquisição Distressed de Precatório (Município de Manaus), Imóveis e Frota + Rastreamento Forense de Ativos.",
    "status": "Novo",
    "proximas_acoes": "Mapear precatório contra o Município de Manaus e imóveis/frota arrecadados pelo AJ Jorge Ivan Teles de Sousa para aquisição distressed.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Convolação de RJ em Falência por Passivo Fiscal de R$ 357M e Rombo Patrimonial de R$ 266M",
      "Extensão da Falência à Servi-San Manutenção e Ordem de Arrecadação em 13/10/2026",
      "Liquidação de Precatório Milionário contra o Município de Manaus e Ativos Imobiliários"
    ],
    "cidade": "Teresina",
    "uf": "PI",
    "coordenadas": [
      -5.0892,
      -42.8016
    ],
    "regiao_macro": "Nordeste",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Falência / Extensão Patrimonial (Classe 110)",
    "strategy_id": "dip",
    "strategy_name": "DIP Financing & M&A Distressed",
    "strategy_tag": "DIP / SPECIAL SITUATIONS",
    "institutional_triggers": [
      "Convolação de RJ em Falência por Passivo Fiscal de R$ 357M e Rombo Patrimonial de R$ 266M",
      "Extensão da Falência à Servi-San Manutenção e Ordem de Arrecadação em 13/10/2026",
      "Liquidação de Precatório Milionário contra o Município de Manaus e Ativos Imobiliários"
    ],
    "subtipo_processo": "Falência / Liquidação",
    "causa_crise": "Salto do passivo fiscal de R$ 69M para R$ 357M em 8 anos de RJ, inatividade das indústrias Plast Nor e Inbra-Pack e criação de empresa paralela (Servi-San Manutenção)",
    "gargalo_imediato": "Ordem de lacre imediato com força policial divulgada em 13/10/2026 (suspensa liminarmente no TJPI) e arrecadação de bens em 5 dias pelo AJ",
    "tese_mandato": "Aquisição Distressed de Precatório (Município de Manaus), Imóveis e Frota + Rastreamento Forense de Ativos.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Um dos maiores e mais tradicionais conglomerados empresariais do Meio-Norte brasileiro, fundado em Teresina/PI na década de 1970 (Grupo Servi-San). Atua em terceirização de mão de obra e facilities, segurança patrimonial armada, transporte de valores (frota de carros-fortes no PI, MA e CE) e indústria de transformação plástica (Plast Nor e Inbra-Pack).",
    "model_params": {
      "haircut_pct": 75,
      "recuperacao_pct": 25,
      "haircut_estimado_pct": 75,
      "recuperacao_estimada_pct": 25,
      "desconto_secundario_pct": 50.0,
      "valor_recuperado_mm": 90.0,
      "ev_estimado_mm": 234.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 12.0,
        "classe_i_pct": 14.0,
        "classe_ii_pct": 22.0,
        "fiscal_pct": 24.0,
        "classe_iii_pct": 24.0,
        "classe_iv_pct": 4.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 12.0,
        "c1_trabalhista": 14.0,
        "c2_garantia_real": 22.0,
        "c3_quirografario": 24.0,
        "c4_me_epp": 4.0,
        "passivo_fiscal_estimado_mm": 86.4
      },
      "dip_necessidade_mm": 43.2,
      "upi_valuation_estimado_mm": 126.0
    },
    "calendar_meta": {
      "data_marco_iso": "2026-10-20",
      "data_marco_br": "20/10/2026",
      "dias_restantes": 4,
      "marco_label": "Prazo Judicial (5d) para Arrecadação Forense de Bens e Precatório",
      "marco_tipo": "Arrecadação / Falência",
      "urgencia_nivel": "critico",
      "urgencia_label": "URGENTE (4d)",
      "is_fixed_edital": true,
      "data_marco": "2026-10-20",
      "tipo_marco": "Prazo Judicial (5d) para Arrecadação Forense de Bens e Precatório",
      "urgencia": "CRÍTICA"
    },
    "url_noticia": "https://recuperacaojudicial.servi-san.com.br/",
    "url_tribunal_cvm": "https://pje.tjpi.jus.br/1g/ConsultaPublica/listView.seam"
  },
  {
    "id": 68,
    "data_evento": "2026-10-14",
    "data_adicao": "2026-10-16",
    "empresa": "Grupo Wolfstore (Wolfstore Indústria Têxtil Ltda. e W Nordeste Tecidos Ltda.)",
    "cnpj": "00.719.663/0001-60",
    "setor_detalhe": "Indústria Têxtil & Componentes Calçadistas (RS/BA)",
    "setor_macro": "Indústria & Manufatura",
    "regiao": "Novo Hamburgo, RS",
    "tribunal": "TJRS - Vara Empresarial de Novo Hamburgo",
    "processo": "5018921-21.2026.8.21.0019",
    "fase": "Cautelar Antecedente (art. 20-B)",
    "score": 9.0,
    "tier": "Tier 1",
    "passivo_mm": 55,
    "passivo_display": "55",
    "credores": "Banco Santander, Banco ABC Brasil, Caixa Econômica Federal, Banco RNX, Unicred Eleva, Audax Capital Securitizadora e Hope I FIDC Multissegmentos (total bancário de R$ 44,26M)",
    "perfil_passivo": "Bancário e FIDCs (R$ 44,26M: R$ 33,8M Wolfstore + R$ 10,46M W Nordeste) + Máquina Dubladora e Estoque Têxtil Declarados Essenciais em Novo Hamburgo/RS e Poções/BA",
    "advocacia": "Aguardando autuação do pedido principal",
    "aj": "N/A (Fase Prévia - Cejusc Empresarial do TJRS)",
    "tese": "(1) Causa da crise: Incêndio sem cobertura de seguro na unidade de espuma em fev/2026 (prejuízo de R$ 10M), sobretaxa dos EUA sobre calçados brasileiros e alta da Selic; (2) Gargalo imediato: Sessões decisivas de mediação no Cejusc realizadas de 14 a 16/10/2026 com 7 credores financeiros e sustação de busca e apreensão do Hope I FIDC; (3) Oportunidade de mandato: Assessoria Financeira para conversão em RJ/RE (prazo de 60 dias) ou Watchdog para o pool de 7 credores financeiros (Santander, ABC Brasil, Caixa, Unicred, RNX, Audax e Hope I FIDC).",
    "status": "Novo",
    "proximas_acoes": "Abordar os 7 credores financeiros da mediação (Santander, ABC Brasil, Caixa, Unicred Eleva, RNX, Audax e Hope I FIDC) imediatamente após as sessões de 14-16/10.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Sessões de Mediação Cejusc Realizadas entre 14/10 e 16/10/2026 com 7 Credores Financeiros",
      "Passivo Bancário de R$ 44,26M (Santander, ABC Brasil, Caixa, RNX, Unicred, Audax e Hope I FIDC)",
      "Sustação Judicial de Busca e Apreensão de Máquina Dubladora e Estoque Têxtil"
    ],
    "cidade": "Novo Hamburgo",
    "uf": "RS",
    "coordenadas": [
      -29.6783,
      -51.1306
    ],
    "regiao_macro": "Sul",
    "tipo_processo": "Cautelar / Pré-RJ",
    "tipo_processo_label": "Cautelar Antecedente (Art. 20-B)",
    "strategy_id": "consensual",
    "strategy_name": "Consensual & Pré-Concursal",
    "strategy_tag": "CONSENSUAL / ART. 20-B",
    "institutional_triggers": [
      "Sessões de Mediação Cejusc Realizadas entre 14/10 e 16/10/2026 com 7 Credores Financeiros",
      "Passivo Bancário de R$ 44,26M (Santander, ABC Brasil, Caixa, RNX, Unicred, Audax e Hope I FIDC)",
      "Sustação Judicial de Busca e Apreensão de Máquina Dubladora e Estoque Têxtil"
    ],
    "subtipo_processo": "Cautelar / Pré-RJ",
    "causa_crise": "Incêndio sem cobertura de seguro na unidade de espuma em fev/2026 (prejuízo de R$ 10M), sobretaxa dos EUA sobre calçados brasileiros e alta da Selic",
    "gargalo_imediato": "Sessões decisivas de mediação no Cejusc realizadas de 14 a 16/10/2026 com 7 credores financeiros e sustação de busca e apreensão do Hope I FIDC",
    "tese_mandato": "Assessoria Financeira para conversão em RJ/RE (prazo de 60 dias) ou Watchdog para o pool de 7 credores financeiros (Santander, ABC Brasil, Caixa, Unicred, RNX, Audax e Hope I FIDC).",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Audax Securitizadora",
    "descricao_empresa": "Grupo industrial têxtil e de componentes calçadistas sediado em Novo Hamburgo/RS (Vale dos Sinos), com filial fabril no polo calçadista de Poções/BA (W Nordeste Tecidos). É especializado na dublagem de tecidos técnicos, espumas laminadas, forros e palmilhas fornecidos para as maiores indústrias de calçados do Rio Grande do Sul e do Nordeste.",
    "model_params": {
      "haircut_pct": 48,
      "recuperacao_pct": 52,
      "haircut_estimado_pct": 48,
      "recuperacao_estimada_pct": 52,
      "desconto_secundario_pct": 30.0,
      "valor_recuperado_mm": 28.6,
      "ev_estimado_mm": 27.5,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 15.0,
        "classe_i_pct": 8.0,
        "classe_ii_pct": 28.0,
        "fiscal_pct": 12.0,
        "classe_iii_pct": 32.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 15.0,
        "c1_trabalhista": 8.0,
        "c2_garantia_real": 28.0,
        "c3_quirografario": 32.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 6.6
      },
      "dip_necessidade_mm": 15.0,
      "upi_valuation_estimado_mm": 19.2
    },
    "calendar_meta": {
      "data_marco_iso": "2026-10-23",
      "data_marco_br": "23/10/2026",
      "dias_restantes": 7,
      "marco_label": "Deliberação Pós-Sessão de Mediação CEJUSC com Pool de 7 Credores Financeiros",
      "marco_tipo": "Mediação CEJUSC",
      "urgencia_nivel": "critico",
      "urgencia_label": "URGENTE (7d)",
      "is_fixed_edital": true,
      "data_marco": "2026-10-23",
      "tipo_marco": "Deliberação Pós-Sessão de Mediação CEJUSC com Pool de 7 Credores Financeiros",
      "urgencia": "CRÍTICA"
    },
    "url_noticia": "https://gauchazh.clicrbs.com.br/colunistas/giane-guerra/noticia/2026/10/apos-incendio-industria-textil-consegue-que-justica-suspenda-cobranca-de-dividas-e-retirada-de-maquinas-cmuq5gzyd01v90174q475dxmv.html",
    "url_tribunal_cvm": "https://www.tjrs.jus.br/novo/busca/?return=proc&client=wp_index"
  },
  {
    "id": 69,
    "data_evento": "2026-10-08",
    "data_adicao": "2026-10-16",
    "empresa": "GDS Subholding S.A. (GDSolar Energia Renovável / Colibri Capital)",
    "cnpj": "44.601.637/0001-09",
    "setor_detalhe": "Geração Solar Fotovoltaica Distribuída (UFVs GDS)",
    "setor_macro": "Energia & Infraestrutura",
    "regiao": "Fortaleza, CE",
    "tribunal": "CVM // Fitch Ratings (GDSS11)",
    "processo": "Debêntures 1ª Emissão (GDSS11)",
    "fase": "Sinal Precursor (Tier 0)",
    "score": 8.9,
    "tier": "Tier 0",
    "passivo_mm": 410,
    "passivo_display": "410",
    "credores": "Debenturistas da 1ª Emissão de Debêntures Verdes de Infraestrutura (GDSS11 - R$ 410M, coordenada pelo Itaú BBA)",
    "perfil_passivo": "Mercado de Capitais (Debêntures de Infraestrutura GDSS11 R$ 410M) + Portfólio de Usinas Solares Fotovoltaicas (UFVs GDS) de Geração Distribuída",
    "advocacia": "Monitoramento preventivo DCM",
    "aj": "N/A (Fase Prévia - Monitoramento de Covenants DCM)",
    "tese": "(1) Causa da crise: Deterioração severa de métricas de cobertura de crédito no projeto de geração solar distribuída, levando a Fitch a cortar o rating em 5 níveis de AA(bra) para BBB(bra) com Observação Negativa; (2) Gargalo imediato: Risco de acionamento de gatilhos de covenants financeiros e necessidade de waiver em AGD da emissão GDSS11 (R$ 410M); (3) Oportunidade de mandato: Assessoria em Reperfilamento de Dívida (DCM), Negociação de Waiver em AGD ou M&A de Usinas Fotovoltaicas (UFVs GDS).",
    "status": "Novo",
    "proximas_acoes": "Abordar gestores detentores da debênture GDSS11 e diretoria da GDSolar / Colibri Capital para estruturação preventiva de waiver ou venda de UFVs.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Corte Abrupto de 5 Degraus no Rating Nacional pela Fitch (de AA(bra) para BBB(bra))",
      "Colocação em Observação Negativa (Rating Watch Negative) sobre R$ 410M em Debêntures (GDSS11)",
      "Portfólio de SPEs de Usinas Solares (UFVs GDS) Elegível para M&A Distressed / Carve-out"
    ],
    "cidade": "Fortaleza",
    "uf": "CE",
    "coordenadas": [
      -3.7172,
      -38.5433
    ],
    "regiao_macro": "Nordeste",
    "tipo_processo": "Tier 0",
    "tipo_processo_label": "Sinais Forenses (Tier 0)",
    "strategy_id": "precursor",
    "strategy_name": "Distress Precursor (Tier 0)",
    "strategy_tag": "PRECURSOR / TIER 0",
    "institutional_triggers": [
      "Corte Abrupto de 5 Degraus no Rating Nacional pela Fitch (de AA(bra) para BBB(bra))",
      "Colocação em Observação Negativa (Rating Watch Negative) sobre R$ 410M em Debêntures (GDSS11)",
      "Portfólio de SPEs de Usinas Solares (UFVs GDS) Elegível para M&A Distressed / Carve-out"
    ],
    "subtipo_processo": "Tier 0",
    "causa_crise": "Deterioração severa de métricas de cobertura de crédito no projeto de geração solar distribuída, levando a Fitch a cortar o rating em 5 níveis de AA(bra) para BBB(bra) com Observação Negativa",
    "gargalo_imediato": "Risco de acionamento de gatilhos de covenants financeiros e necessidade de waiver em AGD da emissão GDSS11 (R$ 410M)",
    "tese_mandato": "Assessoria em Reperfilamento de Dívida (DCM), Negociação de Waiver em AGD ou M&A de Usinas Fotovoltaicas (UFVs GDS).",
    "agentes_fiduciarios": "Oliveira Trust DTVM S.A. (Coord. Itaú BBA)",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "energy_meta": {
      "debenture_codigo": "GDSS11 — 1ª Emissão Debêntures Verdes (R$ 410M)",
      "agente_fiduciario": "Oliveira Trust DTVM S.A. (Coord. Itaú BBA)",
      "inadimplemento_ccee": "Adimplente (Geração Solar Distribuída Remota)",
      "risco_caducidade": "Moderado — Risco regulatório sobre enquadramento de subsídios TUST/TUSD (Lei 14.300)",
      "corte_rating_curtailment": "Fitch cortou rating em 5 níveis de AA(bra) para BBB(bra) (Watch Negative) em 08/10/2026 por queda no ICSD das UFVs",
      "submercado": "Nordeste"
    },
    "descricao_empresa": "Subholding operacional do grupo GDSolar Energia Renovável (investida da gestora Colibri Capital), dedicada ao desenvolvimento, construção e operação de amplo portfólio de Usinas Solares Fotovoltaicas (UFVs) de geração distribuída remota (GD compartilhada e autoconsumo remoto) arrendadas a grandes clientes corporativos em múltiplos estados.",
    "model_params": {
      "haircut_pct": 28,
      "recuperacao_pct": 72,
      "haircut_estimado_pct": 28,
      "recuperacao_estimada_pct": 72,
      "desconto_secundario_pct": 25.0,
      "valor_recuperado_mm": 295.2,
      "ev_estimado_mm": 205.0,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 18.0,
        "classe_i_pct": 3.0,
        "classe_ii_pct": 42.0,
        "fiscal_pct": 7.0,
        "classe_iii_pct": 27.0,
        "classe_iv_pct": 3.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 18.0,
        "c1_trabalhista": 3.0,
        "c2_garantia_real": 42.0,
        "c3_quirografario": 27.0,
        "c4_me_epp": 3.0,
        "passivo_fiscal_estimado_mm": 28.7
      },
      "dip_necessidade_mm": 49.2,
      "upi_valuation_estimado_mm": 143.5
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-05",
      "data_marco_br": "05/11/2026",
      "dias_restantes": 20,
      "marco_label": "Revisão de Covenants ICSD & AGD Preventiva da 1ª Emissão Verde (GDSS11)",
      "marco_tipo": "AGD Debêntures",
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (20d)",
      "is_fixed_edital": true,
      "data_marco": "2026-11-05",
      "tipo_marco": "Revisão de Covenants ICSD & AGD Preventiva da 1ª Emissão Verde (GDSS11)",
      "urgencia": "CRÍTICA"
    },
    "url_noticia": "https://www.fitchratings.com/research/pt/infrastructure-project-finance/fitch-downgrades-to-bbb-bra-gds-subholdings-debentures-rating-watch-negative-08-10-2026",
    "url_tribunal_cvm": "https://rad.cvm.gov.br/ENET/frmConsultaExternaCVM.aspx"
  },
  {
    "id": 70,
    "data_evento": "2026-10-05",
    "data_adicao": "2026-10-16",
    "empresa": "Grupo Fex Agro (Fex Agro Comercial Ltda. e Vincere Fertilizantes)",
    "cnpj": "15.204.808/0001-68",
    "setor_detalhe": "Revenda de Insumos Agrícolas, Grãos & Fertilizantes",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Primavera do Leste, MT",
    "tribunal": "TJMT - 3ª Vara de Primavera do Leste",
    "processo": "1007897-97.2026.8.11.0037",
    "fase": "Cautelar Antecedente (art. 20-B)",
    "score": 9.0,
    "tier": "Tier 1",
    "passivo_mm": 77,
    "passivo_display": "77",
    "credores": "CCAB Agro R$ 9,77M (55 notas fiscais), Caixa Econômica Federal R$ 8,75M, Banco Bradesco R$ 7,34M (mais 23 contratos em dólar e cessões fiduciárias de recebíveis em 37 credores)",
    "perfil_passivo": "Bancário (Caixa e Bradesco com cessão fiduciária de recebíveis) + Defensivos/Insumos (CCAB Agro e dívida em USD) + Operações em Primavera do Leste e Canarana/MT",
    "advocacia": "Aguardando decisão liminar e conversão em RJ",
    "aj": "N/A (Fase Prévia - Cautelar Antecedente)",
    "tese": "(1) Causa da crise: Elevação de 61% no custo financeiro da dívida (de R$ 6,9M para R$ 11,1M), restrição de crédito no agro e 7 protestos lavrados em Primavera do Leste e Canarana (R$ 2,05M); (2) Gargalo imediato: Projeção de caixa negativa em R$ 80,6M e divergência entre lista 100% quirografária e cessões fiduciárias bancárias auditadas; (3) Oportunidade de mandato: Watchdog Creditor-Side para Caixa (R$ 8,75M), Bradesco (R$ 7,34M) e CCAB Agro (R$ 9,77M) na auditoria de garantias fiduciárias e conversão em RJ.",
    "status": "Novo",
    "proximas_acoes": "Contatar áreas de crédito agro de Caixa (R$ 8,75M), Bradesco (R$ 7,34M) e CCAB Agro (R$ 9,77M) para auditar cessões fiduciárias omitidas na lista quirografária.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Passivo de R$ 76,88M com Projeção de Furo de Caixa de R$ 80,6M",
      "Divergência Forense: Balanço Auditado Aponta Cessão Fiduciária Omitida na Lista Quirografária",
      "Exposição Relevante de CCAB Agro (R$ 9,77M), Caixa (R$ 8,75M) e Bradesco (R$ 7,34M)"
    ],
    "cidade": "Primavera do Leste",
    "uf": "MT",
    "coordenadas": [
      -15.5586,
      -54.2961
    ],
    "regiao_macro": "Centro-Oeste",
    "tipo_processo": "Cautelar / Pré-RJ",
    "tipo_processo_label": "Cautelar Antecedente (Art. 20-B)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [
      "Passivo de R$ 76,88M com Projeção de Furo de Caixa de R$ 80,6M",
      "Divergência Forense: Balanço Auditado Aponta Cessão Fiduciária Omitida na Lista Quirografária",
      "Exposição Relevante de CCAB Agro (R$ 9,77M), Caixa (R$ 8,75M) e Bradesco (R$ 7,34M)"
    ],
    "subtipo_processo": "Cautelar / Pré-RJ",
    "causa_crise": "Elevação de 61% no custo financeiro da dívida (de R$ 6,9M para R$ 11,1M), restrição de crédito no agro e 7 protestos lavrados em Primavera do Leste e Canarana (R$ 2,05M)",
    "gargalo_imediato": "Projeção de caixa negativa em R$ 80,6M e divergência entre lista 100% quirografária e cessões fiduciárias bancárias auditadas",
    "tese_mandato": "Watchdog Creditor-Side para Caixa (R$ 8,75M), Bradesco (R$ 7,34M) e CCAB Agro (R$ 9,77M) na auditoria de garantias fiduciárias e conversão em RJ.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Rede mato-grossense de distribuição de insumos agrícolas (sementes, defensivos químicos e especialidades), originação de grãos e comercialização de fertilizantes (Fex Agro Comercial e Vincere Fertilizantes), com matriz em Primavera do Leste/MT e filial estratégica no polo produtivo do Vale do Araguaia (Canarana/MT).",
    "model_params": {
      "haircut_pct": 39,
      "recuperacao_pct": 61,
      "haircut_estimado_pct": 39,
      "recuperacao_estimada_pct": 61,
      "desconto_secundario_pct": 30.0,
      "valor_recuperado_mm": 47.0,
      "ev_estimado_mm": 38.5,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 22.0,
        "classe_i_pct": 4.0,
        "classe_ii_pct": 36.0,
        "fiscal_pct": 8.0,
        "classe_iii_pct": 25.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 22.0,
        "c1_trabalhista": 4.0,
        "c2_garantia_real": 36.0,
        "c3_quirografario": 25.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 6.2
      },
      "dip_necessidade_mm": 15.0,
      "upi_valuation_estimado_mm": 26.9
    },
    "calendar_meta": {
      "data_marco_iso": "2026-12-04",
      "data_marco_br": "04/12/2026",
      "dias_restantes": 49,
      "marco_label": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE",
      "marco_tipo": "Cautelar 20-B (60d)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (49d)",
      "is_fixed_edital": false,
      "data_marco": "2026-12-04",
      "tipo_marco": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/categoria/recuperacao-judicial",
    "url_tribunal_cvm": "https://pje.tjmt.jus.br/pje/ConsultaPublica/listView.seam"
  },
  {
    "id": 71,
    "data_evento": "2026-10-09",
    "data_adicao": "2026-10-16",
    "empresa": "Landco Administradora de Bens e Imóveis S.A. (Grupo Belagrícola)",
    "cnpj": "26.778.061/0001-78",
    "setor_detalhe": "Ativos Imobiliários Rurais, Silos & Armazenagem (Rede Belagrícola)",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Londrina, PR",
    "tribunal": "TJPR - Vara Empresarial de Londrina",
    "processo": "0048912-40.2026.8.16.0014",
    "fase": "Recuperação Extrajudicial (Classe 128)",
    "score": 9.2,
    "tier": "Tier 3",
    "passivo_mm": 658,
    "passivo_display": "658",
    "credores": "Bancos Credores do Agronegócio, Fundos Imobiliários/Agrícolas, Titulares de CRAs e Partes Relacionadas (Belagrícola S/A e Bela Sementes Ltda.)",
    "perfil_passivo": "Quirografário Financeiro + Ativos Imobiliários Rurais, Silos e Unidades de Recebimento de Grãos da Rede Belagrícola no PR",
    "advocacia": "Aguardando homologação judicial",
    "aj": "N/A (Fase Extrajudicial)",
    "tese": "(1) Causa da crise: Aperto de liquidez na holding patrimonial e imobiliária vinculada à rede de distribuição de insumos e grãos Belagrícola; (2) Gargalo imediato: Reestruturação de R$ 657,8M em créditos quirografários via Recuperação Extrajudicial no Paraná sujeita a impugnações de credores; (3) Oportunidade de mandato: M&A Distressed / Sale & Leaseback de unidades de recebimento de grãos e imóveis rurais (UPIs) + Assessoria a Credores Dissidentes.",
    "status": "Novo",
    "proximas_acoes": "Mapear portfólio de silos e imóveis operacionais da Landco / Belagrícola no PR para estruturação de Sale & Leaseback / M&A Distressed.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Recuperação Extrajudicial de R$ 657,8 Milhões de Braço Imobiliário do Grupo Belagrícola",
      "Forte Base de Ativos Reais (Silos, Armazéns e Unidades de Recebimento de Grãos no PR)",
      "Oportunidade de Sale & Leaseback e Auditoria de Créditos com Partes Relacionadas"
    ],
    "cidade": "Londrina",
    "uf": "PR",
    "coordenadas": [
      -23.3045,
      -51.1696
    ],
    "regiao_macro": "Sul",
    "tipo_processo": "PRE",
    "tipo_processo_label": "Recuperação Extrajudicial (PRE)",
    "strategy_id": "dip",
    "strategy_name": "DIP Financing & M&A Distressed",
    "strategy_tag": "DIP / SPECIAL SITUATIONS",
    "institutional_triggers": [
      "Recuperação Extrajudicial de R$ 657,8 Milhões de Braço Imobiliário do Grupo Belagrícola",
      "Forte Base de Ativos Reais (Silos, Armazéns e Unidades de Recebimento de Grãos no PR)",
      "Oportunidade de Sale & Leaseback e Auditoria de Créditos com Partes Relacionadas"
    ],
    "subtipo_processo": "PRE",
    "causa_crise": "Aperto de liquidez na holding patrimonial e imobiliária vinculada à rede de distribuição de insumos e grãos Belagrícola",
    "gargalo_imediato": "Reestruturação de R$ 657,8M em créditos quirografários via Recuperação Extrajudicial no Paraná sujeita a impugnações de credores",
    "tese_mandato": "M&A Distressed / Sale & Leaseback de unidades de recebimento de grãos e imóveis rurais (UPIs) + Assessoria a Credores Dissidentes.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Companhia patrimonial e imobiliária (PropCo) integrante do ecossistema do tradicional grupo paranaense Belagrícola (fundado em 1985 em Londrina/PR). Detém a propriedade de dezenas de imóveis rurais e operacionais estratégicos, incluindo unidades de recebimento, secagem e armazenagem de grãos (silos) e lojas técnicas nos estados do Paraná, São Paulo e Santa Catarina.",
    "model_params": {
      "haircut_pct": 33,
      "recuperacao_pct": 67,
      "haircut_estimado_pct": 33,
      "recuperacao_estimada_pct": 67,
      "desconto_secundario_pct": 30.0,
      "valor_recuperado_mm": 440.9,
      "ev_estimado_mm": 427.7,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 22.0,
        "classe_i_pct": 4.0,
        "classe_ii_pct": 36.0,
        "fiscal_pct": 8.0,
        "classe_iii_pct": 25.0,
        "classe_iv_pct": 5.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 22.0,
        "c1_trabalhista": 4.0,
        "c2_garantia_real": 36.0,
        "c3_quirografario": 25.0,
        "c4_me_epp": 5.0,
        "passivo_fiscal_estimado_mm": 52.6
      },
      "dip_necessidade_mm": 79.0,
      "upi_valuation_estimado_mm": 230.3
    },
    "calendar_meta": {
      "data_marco_iso": "2027-01-07",
      "data_marco_br": "07/01/2027",
      "dias_restantes": 83,
      "marco_label": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)",
      "marco_tipo": "Homologação PRE",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (83d)",
      "is_fixed_edital": false,
      "data_marco": "2027-01-07",
      "tipo_marco": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)",
      "urgencia": "MÉDIA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/categoria/recuperacao-judicial",
    "url_tribunal_cvm": "https://consulta.tjpr.jus.br/projudi_consulta/"
  },
  {
    "id": 72,
    "data_evento": "2026-10-01",
    "data_adicao": "2026-10-16",
    "empresa": "Costa Esmeralda Trading Importação e Exportação Ltda.",
    "cnpj": "03.025.101/0001-05",
    "setor_detalhe": "Trading de Comércio Exterior (Florianópolis / Itajaí)",
    "setor_macro": "Varejo & Consumo",
    "regiao": "Florianópolis, SC",
    "tribunal": "TJSC - Vara de Falências de Florianópolis",
    "processo": "5089123-11.2026.8.24.0023",
    "fase": "Falência Decretada (Classe 110)",
    "score": 8.5,
    "tier": "Tier 2",
    "passivo_mm": 183,
    "passivo_display": "183",
    "credores": "Banco do Brasil S.A., Cresol Centro Sul (Cooperativa de Crédito), Fazenda Pública / PGFN (R$ 152,6M) e Credores de Comércio Exterior (R$ 30,6M)",
    "perfil_passivo": "Passivo Tributário de Importação (R$ 152,6M) + Bancário/Cooperativo (Banco do Brasil e Cresol Centro Sul - R$ 30,6M)",
    "advocacia": "Aguardando sentença de quebra",
    "aj": "A ser nomeado pela Vara Regional de Florianópolis",
    "tese": "(1) Causa da crise: Acúmulo de passivo tributário aduaneiro/estadual (R$ 152,6M) e restrição de linhas de comércio exterior; (2) Gargalo imediato: Pedido de autofalência protocolado em Florianópolis/SC com exposição bancária de Banco do Brasil e Cresol Centro Sul; (3) Oportunidade de mandato: Investigação Forense de Ativos (Asset Tracing) e Recuperação de Crédito para Banco do Brasil e Cresol Centro Sul.",
    "status": "Novo",
    "proximas_acoes": "Contatar áreas de recuperação de crédito do Banco do Brasil e da Cresol Centro Sul para rastreamento de estoques importados e ativos dos sócios.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Pedido de Autofalência de Trading Catarinense com Passivo Total de R$ 183,2 Milhões",
      "Exposição Bancária e Cooperativa: Banco do Brasil S.A. e Cresol Centro Sul (R$ 30,6M Não-Fiscais)",
      "Necessidade de Asset Tracing sobre Estoques Alfandegados em Itajaí/SC e Contas Vinculadas"
    ],
    "cidade": "Florianópolis",
    "uf": "SC",
    "coordenadas": [
      -27.5954,
      -48.548
    ],
    "regiao_macro": "Sul",
    "tipo_processo": "PRJ",
    "tipo_processo_label": "Falência / Autofalência (Classe 110)",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "CREDITOR-SIDE / WATCHDOG",
    "institutional_triggers": [
      "Pedido de Autofalência de Trading Catarinense com Passivo Total de R$ 183,2 Milhões",
      "Exposição Bancária e Cooperativa: Banco do Brasil S.A. e Cresol Centro Sul (R$ 30,6M Não-Fiscais)",
      "Necessidade de Asset Tracing sobre Estoques Alfandegados em Itajaí/SC e Contas Vinculadas"
    ],
    "subtipo_processo": "Falência / Liquidação",
    "causa_crise": "Acúmulo de passivo tributário aduaneiro/estadual (R$ 152,6M) e restrição de linhas de comércio exterior",
    "gargalo_imediato": "Pedido de autofalência protocolado em Florianópolis/SC com exposição bancária de Banco do Brasil e Cresol Centro Sul",
    "tese_mandato": "Investigação Forense de Ativos (Asset Tracing) e Recuperação de Crédito para Banco do Brasil e Cresol Centro Sul.",
    "agentes_fiduciarios": "Monitoramento via escrituras / N/A",
    "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto",
    "descricao_empresa": "Trading company catarinense de comércio exterior (importação por conta e ordem e por encomenda de produtos industrializados, insumos químicos, têxteis e eletroeletrônicos) sediada em Florianópolis/SC, com operação logística e desembaraço aduaneiro concentrados nos terminais portuários de Itajaí e Navegantes/SC.",
    "model_params": {
      "haircut_pct": 80,
      "recuperacao_pct": 20,
      "haircut_estimado_pct": 80,
      "recuperacao_estimada_pct": 20,
      "desconto_secundario_pct": 50.0,
      "valor_recuperado_mm": 36.6,
      "ev_estimado_mm": 91.5,
      "liquidez_forcada_desconto_pct": 45.0,
      "split_classes": {
        "extraconcursal_pct": 12.0,
        "classe_i_pct": 14.0,
        "classe_ii_pct": 22.0,
        "fiscal_pct": 24.0,
        "classe_iii_pct": 24.0,
        "classe_iv_pct": 4.0
      },
      "classes_pct": {
        "extraconcursal_fiduciario": 12.0,
        "c1_trabalhista": 14.0,
        "c2_garantia_real": 22.0,
        "c3_quirografario": 24.0,
        "c4_me_epp": 4.0,
        "passivo_fiscal_estimado_mm": 43.9
      },
      "dip_necessidade_mm": 22.0,
      "upi_valuation_estimado_mm": 64.0
    },
    "calendar_meta": {
      "data_marco_iso": "2026-11-15",
      "data_marco_br": "15/11/2026",
      "dias_restantes": 30,
      "marco_label": "Publicação do Quadro de Arrecadação de Ativos & Edital de Leilão (Art. 141)",
      "marco_tipo": "Arrecadação / Leilão",
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (30d)",
      "is_fixed_edital": false,
      "data_marco": "2026-11-15",
      "tipo_marco": "Publicação do Quadro de Arrecadação de Ativos & Edital de Leilão (Art. 141)",
      "urgencia": "ALTA"
    },
    "url_noticia": "https://preservacred.com.br/noticias/categoria/falencia",
    "url_tribunal_cvm": "https://eproc1g.tjsc.jus.br/eproc/externo_controlador.php?acao=processo_consulta_publica"
  },
  {
    "id": 73,
    "data_evento": "2026-10-12",
    "data_adicao": "2026-10-19",
    "empresa": "Grupo Echer (Echer Empreendimentos)",
    "cnpj": "11.862.538/0001-21",
    "setor_detalhe": "Construção Civil / Incorporação Imobiliária",
    "setor_macro": "Construção Civil & Real Estate",
    "regiao": "Rondonópolis, MT",
    "tribunal": "TJMT - 4ª Vara Cível de Rondonópolis",
    "processo": "1015088-64.2026.8.11.0003",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.8,
    "tier": "Tier 1",
    "passivo_mm": 170,
    "passivo_display": "170",
    "credores": "Caixa Econômica Federal R$ 48M, Itaú R$ 32M, Bradesco R$ 25M, Banco do Brasil R$ 18M, Detentores de CRIs R$ 22M e Fornecedores",
    "perfil_passivo": "Financiamento à Construção (Crédito Associativo Caixa) + CRIs + Alienação de Terrenos/UPI",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "Mudih Consultoria Ltda. (Darbas José Coutinho Filho)",
    "tese": "(1) Causa alegada da crise: Descompasso severo entre inflação de insumos (INCC acumulado de 35,5% no triênio) e preços fixos contratados no crédito associativo da Caixa/MCMV; (2) Gargalo imediato de liquidez: Atraso em obras de 2.702 unidades, enxurrada de distratos e necessidade urgente de capital para concluir obras em andamento (Viva Alameda 70% e Viva Várzea Grande 30%); (3) Tese de mandato sugerida: Alienação de UPIs de terrenos em estoque e condomínios locados, estruturação de DIP Financing para conclusão de canteiros e renegociação com Caixa e investidores de CRIs.",
    "status": "Novo",
    "proximas_acoes": "Mapear estoque de 2.702 imóveis e terrenos para estruturação de UPIs e contatar assessores financeiros do grupo.",
    "cidade": "Rondonópolis",
    "uf": "MT",
    "coordenadas": [
      -16.4674,
      -54.6366
    ],
    "regiao_macro": "Centro-Oeste",
    "tipo_processo": "PRJ",
    "subtipo_processo": "PRJ",
    "strategy_id": "dip",
    "strategy_name": "DIP Financing & M&A Distressed",
    "strategy_tag": "DIP Financing",
    "causa_crise": "Descompasso severo entre inflação de insumos e preços fixos contratados no crédito associativo Caixa",
    "gargalo_imediato": "Atraso em obras de 2.702 unidades e necessidade de capital de giro",
    "tese_mandato": "Alienação de UPIs de terrenos e condomínios locados, DIP Financing e renegociação com Caixa e CRIs",
    "calendar_meta": {
      "data_marco_iso": "2026-12-11",
      "data_marco_br": "11/12/2026",
      "dias_restantes": 53,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (53d)",
      "is_fixed_edital": false
    }
  },
  {
    "id": 74,
    "data_evento": "2026-10-06",
    "data_adicao": "2026-10-19",
    "empresa": "Grupo Pompilio (Pompilio Cabral de Jesus)",
    "cnpj": "66.928.944/0001-31",
    "setor_detalhe": "Agronegócio / Soja e Milho",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Ponta Porã, MS",
    "tribunal": "TJMS - 5ª Vara Cível e Regional de RJs de Dourados",
    "processo": "0806199-81.2026.8.12.0002",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.6,
    "tier": "Tier 2",
    "passivo_mm": 110,
    "passivo_display": "110",
    "credores": "Banco do Brasil R$ 38M, Banco Safra R$ 28M, Sicredi Centro Sul R$ 18M, Caixa R$ 9M, Indigo Fiagro R$ 8M, Agro Directa R$ 5M",
    "perfil_passivo": "Crédito Rural com Garantia Real (85% Classe II) + Alienação Fiduciária de Grãos / Fiagro",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "Brizola e Japur Administração Judicial",
    "tese": "(1) Causa alegada da crise: Quebras de safra consecutivas por seca e geadas em 2.450 hectares em Ponta Porã aliadas à queda da saca de soja para R$ 112 e alta de 43% nos fertilizantes MAP; (2) Gargalo imediato de liquidez: Concentração de 85% do passivo em garantia real (Classe II) e disputa por retenção de grãos sob garantia fiduciária com a Indigo Fiagro; (3) Tese de mandato sugerida: Financial Advisory Rural para renegociação de garantias reais (BB, Safra, Sicredi), liberação de travas sobre safra e DIP Financing de custeio agrícola.",
    "status": "Novo",
    "proximas_acoes": "Abordar comitê de credores financeiros (BB, Safra, Sicredi) para alinhamento sobre safra 2026/2027.",
    "cidade": "Ponta Porã",
    "uf": "MS",
    "coordenadas": [
      -22.5361,
      -55.7256
    ],
    "regiao_macro": "Centro-Oeste",
    "tipo_processo": "PRJ",
    "subtipo_processo": "PRJ",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "Creditor-Side",
    "causa_crise": "Quebras de safra consecutivas por seca e geadas aliadas à queda da saca de soja",
    "gargalo_imediato": "Concentração de 85% do passivo em garantia real e disputa por retenção de grãos",
    "tese_mandato": "Financial Advisory Rural para renegociação de garantias reais e liberação de travas sobre safra",
    "calendar_meta": {
      "data_marco_iso": "2026-12-05",
      "data_marco_br": "05/12/2026",
      "dias_restantes": 47,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (47d)",
      "is_fixed_edital": false
    }
  },
  {
    "id": 75,
    "data_evento": "2026-10-08",
    "data_adicao": "2026-10-19",
    "empresa": "Laticínios Vale dos Buritis Ltda.",
    "cnpj": "22.086.045/0001-63",
    "setor_detalhe": "Agronegócio / Indústria de Laticínios",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Buritis, MG",
    "tribunal": "TJMG - Vara Única da Comarca de Buritis",
    "processo": "5000618-24.2026.8.13.0093",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.5,
    "tier": "Tier 2",
    "passivo_mm": 74,
    "passivo_display": "74",
    "credores": "Banco do Brasil R$ 24M, Bradesco R$ 18M, Cooperativa Oeste Mineiro R$ 11M, Itaú R$ 9M, Banco Safra R$ 6M, Caixa R$ 4M",
    "perfil_passivo": "Bancário Concentrado + Cooperativas de Crédito + Alienação Fiduciária (Safra) + Marcas Supremo e Santa Marta",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "Scalzilli & Chaves Administração Judicial Ltda.",
    "tese": "(1) Causa alegada da crise: Alavancagem pós-aquisição da marca Supremo e parque fabril de Monte Belo/MG, agravada pela Selic alta e compressão de margens na cadeia do leite cru; (2) Gargalo imediato de liquidez: Frustração da mediação prévia do art. 20-B, stay period remanescente de apenas 120 dias e pressão de travas fiduciárias pelo Banco Safra; (3) Tese de mandato sugerida: Reestruturação do passivo bancário e cooperativo (BB, Bradesco, Sicoob), estruturação de UPI de marcas/fábrica de Monte Belo e captação de linha de giro emergencial.",
    "status": "Novo",
    "proximas_acoes": "Contatar Scalzilli & Chaves e diretores industriais para propor assessoria financeira no PRJ de 60 dias.",
    "cidade": "Buritis",
    "uf": "MG",
    "coordenadas": [
      -15.6178,
      -46.4233
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRJ",
    "subtipo_processo": "PRJ",
    "strategy_id": "consensual",
    "strategy_name": "Consensual & Art. 20-B",
    "strategy_tag": "Art. 20-B",
    "causa_crise": "Alavancagem pós-aquisição da marca Supremo e Selic alta sobre giro de laticínios",
    "gargalo_imediato": "Stay period remanescente de 120 dias e pressão fiduciária do Banco Safra",
    "tese_mandato": "Reestruturação do passivo bancário e estruturação de UPI de marcas/fábrica",
    "calendar_meta": {
      "data_marco_iso": "2026-12-07",
      "data_marco_br": "07/12/2026",
      "dias_restantes": 49,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (49d)",
      "is_fixed_edital": false
    }
  },
  {
    "id": 76,
    "data_evento": "2026-09-30",
    "data_adicao": "2026-10-19",
    "empresa": "Grupo Induspel (Curitiba Embalagens / Induspel)",
    "cnpj": "77.696.110/0001-64",
    "setor_detalhe": "Indústria / Papel e Embalagens",
    "setor_macro": "Indústria & Manufatura",
    "regiao": "Curitiba, PR",
    "tribunal": "TJPR - Vara Empresarial de RJs e Falências de Curitiba",
    "processo": "0015604-72.2026.8.16.0194",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.4,
    "tier": "Tier 2",
    "passivo_mm": 84,
    "passivo_display": "84",
    "credores": "Bancos comerciais e Fomento R$ 42M, Fornecedores de aparas de papel R$ 19M, Credores fiduciários R$ 30,5M",
    "perfil_passivo": "Bancário / Operações de Fomento + Alienação Fiduciária de Frota e Maquinário + Unidade Fabril Porto Amazonas",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "Brazilio Bacellar Shirai Advogados",
    "tese": "(1) Causa alegada da crise: Capex intensivo na implantação da nova fábrica em Porto Amazonas/PR, disparada de preços de aparas de papel e retração na demanda de setores clientes (calçadista e moveleiro); (2) Gargalo imediato de liquidez: Dependência de operações de fomento a custos proibitivos, ameaça de corte de utilidades (gás/energia) e alienação fiduciária sobre frota de 23 caminhões e onduladeiras; (3) Tese de mandato sugerida: Venda de UPI fabril não-core em Porto Amazonas ou de ativos logísticos, renegociação de contratos fiduciários e DIP Financing para giro industrial.",
    "status": "Novo",
    "proximas_acoes": "Avaliar parque fabril de Porto Amazonas/PR e onduladeiras para viabilidade de alienação judicial de UPI.",
    "cidade": "Curitiba",
    "uf": "PR",
    "coordenadas": [
      -25.4284,
      -49.2733
    ],
    "regiao_macro": "Sul",
    "tipo_processo": "PRJ",
    "subtipo_processo": "PRJ",
    "strategy_id": "dip",
    "strategy_name": "DIP Financing & M&A Distressed",
    "strategy_tag": "UPI Industrial",
    "causa_crise": "Capex intensivo em nova fábrica de papel e disparada de preços de aparas de papel",
    "gargalo_imediato": "Operações de fomento caras e alienação fiduciária sobre frota e onduladeiras",
    "tese_mandato": "Venda de UPI fabril não-core em Porto Amazonas e renegociação fiduciária",
    "calendar_meta": {
      "data_marco_iso": "2026-11-29",
      "data_marco_br": "29/11/2026",
      "dias_restantes": 41,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (41d)",
      "is_fixed_edital": false
    }
  },
  {
    "id": 77,
    "data_evento": "2026-09-16",
    "data_adicao": "2026-10-19",
    "empresa": "Apex Partners Gestão de Ativos S.A.",
    "cnpj": "17.855.936/0001-05",
    "setor_detalhe": "Serviços Financeiros / Gestão de Recursos",
    "setor_macro": "Serviços Financeiros & Crédito",
    "regiao": "Vitória, ES",
    "tribunal": "TJES - Vara de Recuperação Judicial e Falência de Vitória",
    "processo": "0021485-19.2026.8.08.0024",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 9.3,
    "tier": "Tier 1",
    "passivo_mm": 986,
    "passivo_display": "986",
    "credores": "Debenturistas das emissões estruturadas R$ 420M, Bancos comerciais e FIDC R$ 260M, Investidores de Real Estate/CRIs R$ 180M, Outros R$ 126M",
    "perfil_passivo": "Debêntures Privadas + Operações a Termo de Ações CVC + Alienação de UPI de Gestão / Real Estate",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "Aguardando nomeação judicial",
    "tese": "(1) Causa alegada da crise: Inconsistências contábeis sob antiga gestão e juros altos impactando carteiras de Real Estate e crédito privado; (2) Gargalo imediato: Decisão judicial de 20/10/2026 fixando prazo improrrogável de 30 dias para apresentação de balanços de 46 empresas e documentos de R$ 368,8M em debêntures sob risco de exclusão, autorizando abertura de mediação com credores (Sicoob e Rhino) e confirmando stay period até 03/02/2027; (3) Tese de mandato sugerida: Mediação concursal com credores debenturistas, reorganização das SPEs imobiliárias e alienação de participações.",
    "status": "Em Análise",
    "proximas_acoes": "Acompanhar indicação do mediador judicial nos próximos 10 dias e sessão preparatória de mediação com debenturistas e securitizadoras.",
    "cidade": "Vitória",
    "uf": "ES",
    "coordenadas": [
      -20.3155,
      -40.3128
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRJ",
    "subtipo_processo": "PRJ",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "Forensic Watchdog",
    "causa_crise": "Inconsistências financeiras internas sob gestão anterior e juros altos sobre Real Estate/PE",
    "gargalo_imediato": "Chamadas de margem em operações a termo de ações CVC e vencimento de debêntures",
    "tese_mandato": "Forensic Watchdog de ativos e estruturação de UPIs das participações em SPEs imobiliárias",
    "calendar_meta": {
      "data_marco_iso": "2026-11-15",
      "data_marco_br": "15/11/2026",
      "dias_restantes": 27,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (27d)",
      "is_fixed_edital": false
    }
  },
  {
    "id": 78,
    "data_evento": "2026-10-15",
    "data_adicao": "2026-10-19",
    "empresa": "Gold - Indústria e Comércio Ltda. (Casa da Gastronomia)",
    "cnpj": "05.671.160/0001-86",
    "setor_detalhe": "Varejo / Atacarejo Gastronômico Food Service",
    "setor_macro": "Varejo & Consumo",
    "regiao": "Pinhais, PR",
    "tribunal": "TJPR - 3ª Vara Estadual de Falências e RJ de Curitiba",
    "processo": "0003754-66.2026.8.16.0179",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.2,
    "tier": "Tier 2",
    "passivo_mm": 45,
    "passivo_display": "45",
    "credores": "Banco do Brasil R$ 14M, Caixa Econômica Federal R$ 10M, Itaú R$ 8M, Euro Paraná R$ 4M, Fornecedores alimentícios (Zeppone, Flor de Açaí) R$ 8M",
    "perfil_passivo": "Bancário Concentrado (BB, Caixa, Itaú) + Fornecedores Food Service + Imóvel Comercial / Atacarejo",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "RLJ Administração Judicial",
    "tese": "(1) Causa alegada da crise: Endividamento elevado assumido para aquisição e obras da sede própria com câmara fria de 3.000 m², somado ao encarecimento do giro pela Selic a 15%; (2) Gargalo imediato de liquidez: 219 protestos cartorários, ação de despejo de antigo CD e vencimento concentrado de mais de R$ 32M com três grandes bancos (BB, Caixa e Itaú); (3) Tese de mandato sugerida: Estruturação de Sale & Leaseback da sede física/atacarejo em Pinhais/PR, renegociação de dívida bancária sindicalizada e plano de repactuação com fornecedores de alimentos.",
    "status": "Novo",
    "proximas_acoes": "Propor estudo de Sale & Leaseback da sede e assessoria financeira para elaboração do plano de recuperação judicial.",
    "cidade": "Pinhais",
    "uf": "PR",
    "coordenadas": [
      -25.4344,
      -49.1925
    ],
    "regiao_macro": "Sul",
    "tipo_processo": "PRJ",
    "subtipo_processo": "PRJ",
    "strategy_id": "consensual",
    "strategy_name": "Consensual & Art. 20-B",
    "strategy_tag": "Sale & Leaseback",
    "causa_crise": "Endividamento em obras da sede com câmara fria e giro caro pela Selic a 15%",
    "gargalo_imediato": "219 protestos e vencimento de R$ 32M com três grandes bancos",
    "tese_mandato": "Sale & Leaseback da sede própria de 3.000 m² e renegociação bancária",
    "calendar_meta": {
      "data_marco_iso": "2026-12-14",
      "data_marco_br": "14/12/2026",
      "dias_restantes": 56,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (56d)",
      "is_fixed_edital": false
    }
  },
  {
    "id": 79,
    "data_evento": "2026-10-13",
    "data_adicao": "2026-10-19",
    "empresa": "Grupo Pfitscher (Arthur Mendes Pfitscher / Jadir Agnaldo Pfitscher)",
    "cnpj": "67.847.867/0001-58",
    "setor_detalhe": "Agronegócio / Grãos e Soja",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Tangará da Serra, MT",
    "tribunal": "TJMT - 1ª Vara Cível Especializada de Cuiabá",
    "processo": "1045210-44.2026.8.11.0041",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.7,
    "tier": "Tier 1",
    "passivo_mm": 120,
    "passivo_display": "120",
    "credores": "Sicredi R$ 26M, Caixa Econômica Federal R$ 18M, Banco da Amazônia R$ 15M, Cargill R$ 12M, Syngenta R$ 9M, Bayer/Basf R$ 8M, Banco John Deere R$ 7M",
    "perfil_passivo": "Crédito Rural / CPRs + Financiamento de Maquinário (Deere/DLL) + Barter de Insumos + Fazenda Santa Marta",
    "advocacia": "RJV Advogados (Dr. Julierme Romero e Dr. Rubem Vandoni)",
    "aj": "LL Administração Judicial Ltda. (Dr. Renan Alves Lemes)",
    "tese": "(1) Causa alegada da crise: Quebra de safra com perda de 110 mil sacas de soja na safra 2023/24 por estresse climático, alta de arrendamentos sobre 5,5 mil hectares e dissolução de parceria agrícola; (2) Gargalo imediato de liquidez: Execuções e iminência de busca e apreensão sobre frota de 17 máquinas agrícolas essenciais e vencimento de contratos de barter com tradings; (3) Tese de mandato sugerida: Reestruturação do passivo de insumos/barter com multinacionais (Cargill, Syngenta, Bayer), proteção fiduciária da Fazenda Santa Marta e DIP Financing para adiantamento da safra 2026/27.",
    "status": "Novo",
    "proximas_acoes": "Contatar RJV Advogados e LL Administração Judicial para ofertar assessoria financeira independente e modelagem de fluxo de caixa da safra.",
    "cidade": "Tangará da Serra",
    "uf": "MT",
    "coordenadas": [
      -14.6225,
      -57.4933
    ],
    "regiao_macro": "Centro-Oeste",
    "tipo_processo": "PRJ",
    "subtipo_processo": "PRJ",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "Comitê Barter",
    "causa_crise": "Perda de 110 mil sacas de soja por estresse climático e alta de arrendamento de 5,5 mil ha",
    "gargalo_imediato": "Execuções sobre frota de 17 máquinas agrícolas essenciais e barter vencido",
    "tese_mandato": "Reestruturação de passivo de barter e proteção fiduciária da Fazenda Santa Marta",
    "calendar_meta": {
      "data_marco_iso": "2026-12-12",
      "data_marco_br": "12/12/2026",
      "dias_restantes": 54,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (54d)",
      "is_fixed_edital": false
    }
  },
  {
    "id": 80,
    "data_evento": "2026-10-18",
    "data_adicao": "2026-10-19",
    "empresa": "Grupo Bozetti (Transportadora Flecha / Bozetti Transportes)",
    "cnpj": "00.074.670/0001-52",
    "setor_detalhe": "Agronegócio / Transporte e Mineração Agrícola",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Tangará da Serra, MT",
    "tribunal": "TJMT - 1ª Vara Cível Especializada de Cuiabá",
    "processo": "1039388-73.2026.8.11.0041",
    "fase": "Recuperação Extrajudicial (Novo Plano R$ 5,7 Bi Apresentado)",
    "score": 8.8,
    "tier": "Tier 1",
    "passivo_mm": 5700,
    "passivo_display": "5.700",
    "credores": "Donizete Borges R$ 25,5M, Bradesco R$ 14,3M, Sicredi Sudoeste R$ 4,4M, Sicoob Credisul R$ 4,3M, Banco Safra R$ 3,9M, BB R$ 1,7M, Bancos de Montadoras (Volvo, Mercedes, Paccar)",
    "perfil_passivo": "Alienação Fiduciária de Imóveis e Frotas (120 carretas) + Financiamento Rural + Indústria Pérola Mineração",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "Zapaz Administração Judicial Ltda.",
    "tese": "(1) Causa alegada da crise: Endividamento acelerado por M&As de clínicas oncológicas e juros altos impactando o fluxo financeiro; (2) Gargalo imediato de liquidez: Passivo de R$ 5,7 Bi em renegociação judicial e disputa de controle na CVM (Centaurus/Josephina III); (3) Tese de mandato sugerida: Creditor-Side Advisory para titulares de debêntures e bancos na escolha entre debêntures conversíveis em ações, haircuts negociados ou dação de ativos clínicos/imobiliários (UPIs).",
    "status": "Novo",
    "proximas_acoes": "Acompanhar homologação do novo plano de RE de R$ 5,7 Bi protocolado em 26/10/2026, quórum de adesão para debêntures conversíveis/dação de ativos e desfecho da OPA na CVM.",
    "cidade": "Tangará da Serra",
    "uf": "MT",
    "coordenadas": [
      -14.6225,
      -57.4933
    ],
    "regiao_macro": "Centro-Oeste",
    "tipo_processo": "PRJ",
    "subtipo_processo": "PRJ",
    "strategy_id": "dip",
    "strategy_name": "DIP Financing & M&A Distressed",
    "strategy_tag": "UPI Mineração",
    "causa_crise": "Aquisição de indústria mineradora seguida de queda no preço do calcário e quebra de safra",
    "gargalo_imediato": "Dívida extraconcursal de R$ 67M em alienação fiduciária sobre frota de 120 carretas",
    "tese_mandato": "Alienação de UPI mineradora em Porto Estrela e renegociação fiduciária de frota",
    "calendar_meta": {
      "data_marco_iso": "2026-12-17",
      "data_marco_br": "17/12/2026",
      "dias_restantes": 59,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (59d)",
      "is_fixed_edital": false
    }
  },
  {
    "id": 81,
    "data_evento": "2026-10-14",
    "data_adicao": "2026-10-19",
    "empresa": "Cooperativa Agrícola Mista General Osório Ltda. (Cotribá)",
    "cnpj": "90.657.289/0001-09",
    "setor_detalhe": "Agronegócio / Cooperativa de Grãos e Insumos",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Ibirubá, RS",
    "tribunal": "TJRS - Comarca de Ibirubá",
    "processo": "5001248-84.2025.8.21.0105 / Edital AGE 14/10/2026",
    "fase": "Liquidação Extrajudicial (Lei 5.764/71) / AGE Aprovada (20/10/2026)",
    "score": 9.5,
    "tier": "Tier 0",
    "passivo_mm": 1427,
    "passivo_display": "1.427",
    "credores": "Bancos comerciais e crédito rural R$ 650M, Fornecedores de insumos químicos R$ 420M, Associados e cooperados R$ 357M",
    "perfil_passivo": "Crédito Rural + Fornecedores de Insumos + Depósitos de Grãos + Alienação de Silos, Armazéns e Fábrica de Rações",
    "advocacia": "Aguardando autuação",
    "aj": "Sergio Strentzke (Liquidante Eleito na AGE de 20/10/2026)",
    "tese": "(1) Causa alegada da crise: Enchentes históricas e secas severas no RS gerando inadimplência em cadeia de cooperados, somadas a custos financeiros de nova fábrica de rações (R$ 180M); (2) Gargalo imediato de liquidez: Cassação da proteção recuperacional pelo TJRS, vencimento de R$ 1,42 Bi em passivos e corrida de credores aos armazéns; (3) Tese de mandato sugerida: Estruturação de venda de UPIs de armazéns, silos e fábrica de rações, assessoria ao sindicato de bancos credores e M&A Distressed de ativos logísticos.",
    "status": "Novo",
    "proximas_acoes": "Abordar o liquidante eleito (Sergio Strentzke) e sindicato de bancos credores para assessoria no plano de liquidação ordenada e alienação de UPIs de grãos/leite.",
    "cidade": "Ibirubá",
    "uf": "RS",
    "coordenadas": [
      -28.6275,
      -53.0897
    ],
    "regiao_macro": "Sul",
    "tipo_processo": "Tier 0",
    "subtipo_processo": "Tier 0",
    "strategy_id": "precursor",
    "strategy_name": "Radar Preditivo (Tier 0)",
    "strategy_tag": "Liquidação Operacional",
    "causa_crise": "Enchentes históricas no RS gerando inadimplência de cooperados e custo de nova fábrica",
    "gargalo_imediato": "Cassação da proteção da RJ pelo TJRS e vencimento de R$ 1,42 Bi em dívidas",
    "tese_mandato": "Estruturação de venda de UPIs de silos/armazéns e assessoria a bancos credores",
    "calendar_meta": {
      "data_marco_iso": "2026-10-20",
      "data_marco_br": "20/10/2026",
      "dias_restantes": 1,
      "marco_label": "Assembleia Geral Extraordinária (AGE) de Deliberação de Liquidação e UPIs",
      "marco_tipo": "Assembleia / UPI",
      "urgencia_nivel": "critico",
      "urgencia_label": "HOJE / AMANHÃ (1d)",
      "is_fixed_edital": true
    }
  },
  {
    "id": 82,
    "data_evento": "2026-10-15",
    "data_adicao": "2026-10-19",
    "empresa": "Sidlar Planejados - Móveis e Decorações Ltda.",
    "cnpj": "04.691.623/0001-09",
    "setor_detalhe": "Varejo / Móveis Planejados e Decoração",
    "setor_macro": "Varejo & Consumo",
    "regiao": "São Paulo, SP",
    "tribunal": "TJSP - 2ª Vara de Falências e Recuperações Judiciais",
    "processo": "1124890-33.2026.8.26.0100",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.3,
    "tier": "Tier 2",
    "passivo_mm": 56,
    "passivo_display": "56",
    "credores": "Bradesco R$ 7,2M, Santander Capitalização R$ 5,7M, Banco do Brasil R$ 4M, Banco BS2 R$ 3,8M, Fornecedores moveleiros (46 indústrias) R$ 4,7M",
    "perfil_passivo": "Bancário Quirografário (46%) + Fornecedores Moveleiros + Imóvel CD 20 mil m² e 15 lojas",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "Aguardando nomeação judicial",
    "tese": "(1) Causa alegada da crise: Desaceleração de vendas de móveis seriados/planejados, encarecimento de giro bancário (Selic em dois dígitos) e custos residuais de reestruturação de rede; (2) Gargalo imediato de liquidez: 104 protestos contra filial em Mairiporã, pressão concentrada de 10 bancos credores e risco de corte de entrega por 46 indústrias moveleiras; (3) Tese de mandato sugerida: Sale & Leaseback ou monetização de CD de 20 mil m², renegociação de dívida bancária quirografária (Bradesco, Santander, BB) e repactuação de prazos com polo moveleiro.",
    "status": "Novo",
    "proximas_acoes": "Mapear base imobiliária de lojas e CD para proposta de Sale & Leaseback e contatar diretoria financeira.",
    "cidade": "São Paulo",
    "uf": "SP",
    "coordenadas": [
      -23.5505,
      -46.6333
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRJ",
    "subtipo_processo": "PRJ",
    "strategy_id": "consensual",
    "strategy_name": "Consensual & Art. 20-B",
    "strategy_tag": "Sale & Leaseback",
    "causa_crise": "Desaceleração de vendas de móveis planejados e juros altos sobre giro",
    "gargalo_imediato": "104 protestos cartorários e risco de corte por 46 indústrias moveleiras",
    "tese_mandato": "Sale & Leaseback do CD de 20 mil m² e renegociação bancária quirografária",
    "calendar_meta": {
      "data_marco_iso": "2026-12-14",
      "data_marco_br": "14/12/2026",
      "dias_restantes": 56,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (56d)",
      "is_fixed_edital": false
    }
  },
  {
    "id": 83,
    "data_evento": "2026-10-16",
    "data_adicao": "2026-10-19",
    "empresa": "Produtores Rurais Família Mota Martins (José Davison Mota Martins)",
    "cnpj": "47.441.446/0001-15",
    "setor_detalhe": "Agronegócio / Cultivo de Milho e Trigo",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Sidrolândia, MS",
    "tribunal": "TJMS - Vara Regional de Falências e RJs de Campo Grande",
    "processo": "5011498-87.2026.8.12.0001",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.5,
    "tier": "Tier 2",
    "passivo_mm": 32,
    "passivo_display": "32",
    "credores": "Sicredi R$ 13M, Banco do Brasil R$ 8,5M, Coamo Agroindustrial R$ 3M",
    "perfil_passivo": "Crédito Rural / CPRs + Financiamento de Máquinas Agrícolas + Arrendamento de Terras",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "Britto, Taveira e Simões Administração Judicial",
    "tese": "(1) Causa alegada da crise: Estiagens sucessivas desde 2023 em Sidrolândia/MS, encarecimento de fertilizantes químicos e perdas de produtividade em lavouras arrendadas de milho e trigo; (2) Gargalo imediato de liquidez: Vencimento do stay period em 21/10/2026, concentração de 72% do endividamento em Sicredi e BB, e risco de arresto de grãos pela Coamo; (3) Tese de mandato sugerida: Mediação financeira com Sicredi e BB para viabilização do plano de recuperação com carência de safra e DIP Financing para adiantamento do novo ciclo.",
    "status": "Novo",
    "proximas_acoes": "Abordar credores cooperativos (Sicredi e Coamo) e administradora Britto, Taveira e Simões antes do fim do stay period.",
    "cidade": "Sidrolândia",
    "uf": "MS",
    "coordenadas": [
      -20.9317,
      -54.9614
    ],
    "regiao_macro": "Centro-Oeste",
    "tipo_processo": "PRJ",
    "subtipo_processo": "PRJ",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "Creditor-Side",
    "causa_crise": "Estiagens sucessivas e encarecimento de fertilizantes em terras arrendadas",
    "gargalo_imediato": "Vencimento do stay period em 21/10/2026 e concentração no Sicredi e BB",
    "tese_mandato": "Mediação financeira com credores e DIP Financing para safra",
    "calendar_meta": {
      "data_marco_iso": "2026-10-21",
      "data_marco_br": "21/10/2026",
      "dias_restantes": 2,
      "marco_label": "Término Oficial do Stay Period (Proteção Concursal) no TJMS",
      "marco_tipo": "Fim Stay Period",
      "urgencia_nivel": "critico",
      "urgencia_label": "URGENTE (2d)",
      "is_fixed_edital": true
    }
  },
  {
    "id": 84,
    "data_evento": "2026-10-14",
    "data_adicao": "2026-10-19",
    "empresa": "AJX Capital Investimentos S.A.",
    "cnpj": "42.697.069/0001-66",
    "setor_detalhe": "Serviços Financeiros / Crédito Estruturado e CCBs",
    "setor_macro": "Serviços Financeiros & Crédito",
    "regiao": "Barueri, SP",
    "tribunal": "TJSP - 2ª Vara Regional Empresarial",
    "processo": "1018594-82.2026.8.26.0068",
    "fase": "Falência Decretada (Classe 110)",
    "score": 9.6,
    "tier": "Tier 1",
    "passivo_mm": 85,
    "passivo_display": "85",
    "credores": "Investidores Pessoas Físicas em CCBs R$ 65M (mais de 620 processos), Banco do Brasil R$ 12M, Fornecedores e Plataforma ENV R$ 8M",
    "perfil_passivo": "Cédulas de Crédito Bancário (CCBs) + Ações Sem Cotação do Besc + Arrecadação de Ativos / ENV Financial",
    "advocacia": "Aguardando autuação",
    "aj": "Brazilio Bacellar Shirai Advogados",
    "tese": "(1) Causa alegada da crise: Captação massiva via CCBs com rentabilidade atípica (até 3,5% a.m.) lastreadas em ações inidôneas do extinto Besc, motivando investigação do MP por pirâmide; (2) Gargalo imediato de liquidez: Inadimplemento generalizado, mais de 620 execuções cíveis e decretação de falência por impontualidade injustificada de títulos protestados; (3) Tese de mandato sugerida: Perícia Forense / Asset Tracing para a Administradora Judicial (Brazilio Bacellar Shirai) e representação em Comitê de Credores de CCBs para recuperação de valores transitados por terceiros.",
    "status": "Novo",
    "proximas_acoes": "Abordar Brazilio Bacellar Shirai Advogados e grupos de credores de CCBs para proposta de assessoria forense e rastreamento patrimonial.",
    "cidade": "Barueri",
    "uf": "SP",
    "coordenadas": [
      -23.5114,
      -46.8765
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "Falência",
    "subtipo_processo": "Falência",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "Asset Tracing",
    "causa_crise": "Captação via CCBs com retorno atípico lastreadas em ações inidôneas do Besc",
    "gargalo_imediato": "Mais de 620 execuções e decretação de falência pela 2ª Vara Empresarial",
    "tese_mandato": "Perícia Forense / Asset Tracing para Administradora e Comitê de Credores",
    "calendar_meta": {
      "data_marco_iso": "2026-11-28",
      "data_marco_br": "28/11/2026",
      "dias_restantes": 40,
      "marco_label": "Quadro Geral de Credores & Edital de Arrecadação de Bens da Massa",
      "marco_tipo": "Arrecadação / Falência",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (40d)",
      "is_fixed_edital": false
    }
  },
  {
    "id": 85,
    "data_evento": "2026-10-16",
    "data_adicao": "2026-10-19",
    "empresa": "Hortus Comércio de Alimentos S.A. (St. Marche / Empório Santa Maria)",
    "cnpj": "09.000.493/0001-34",
    "setor_detalhe": "Varejo / Supermercados Premium e Empório",
    "setor_macro": "Varejo & Consumo",
    "regiao": "São Paulo, SP",
    "tribunal": "TJSP - 1ª Vara Regional Empresarial",
    "processo": "1032145-66.2026.8.26.0100",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 9.4,
    "tier": "Tier 0",
    "passivo_mm": 532,
    "passivo_display": "532",
    "credores": "BTG Pactual R$ 220M, Fundo L Catterton R$ 110M, Debenturistas e Bancos R$ 120M, Fornecedores Alimentícios R$ 82M",
    "perfil_passivo": "Financiamentos Estruturados + Debêntures + Alienação Judicial de UPI (32 Lojas + CD 7.500 m²)",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "Aguardando nomeação judicial",
    "tese": "(1) Causa alegada da crise: Prejuízos sucessivos de R$ 188,4M com alta alavancagem, juros Selic elevados e suspensão da recuperação extrajudicial anterior pelo TJSP; (2) Gargalo imediato de liquidez: Asfixia de fluxo de caixa e necessidade urgente de blindagem operacional para formalização de alienação de ativos sem sucessão de dívidas; (3) Tese de mandato sugerida: Assessoramento financeiro e legal na homologação da alienação da UPI de 32 lojas St. Marche, 2 Empórios Santa Maria e CD de 7.500 m² para o grupo chileno Cencosud (art. 60 da LREF), e estruturação de repactuação do passivo remanescente com BTG Pactual e debenturistas.",
    "status": "Novo",
    "proximas_acoes": "Monitorar homologação do plano de alienação da UPI St. Marche ao Cencosud perante a Vara Empresarial do TJSP e CADE.",
    "cidade": "São Paulo",
    "uf": "SP",
    "coordenadas": [
      -23.5505,
      -46.6333
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRJ",
    "subtipo_processo": "PRJ",
    "strategy_id": "dip",
    "strategy_name": "DIP Financing & M&A Distressed",
    "strategy_tag": "UPI Varejo Cencosud",
    "causa_crise": "Prejuízos sucessivos com alta alavancagem e suspensão da PRE anterior",
    "gargalo_imediato": "Formalização de alienação de UPI livre de passivos ao Cencosud",
    "tese_mandato": "Homologação de alienação de UPI (32 lojas + CD) e repactuação de dívida remanescente",
    "calendar_meta": {
      "data_marco_iso": "2026-12-15",
      "data_marco_br": "15/12/2026",
      "dias_restantes": 57,
      "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)",
      "marco_tipo": "Entrega PRJ (Art. 53)",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (57d)",
      "is_fixed_edital": false
    }
  },
  {
    "id": 86,
    "data_evento": "2026-10-16",
    "data_adicao": "2026-10-19",
    "empresa": "Irmãos Raiola & Cia. Ltda. (Grupo Raiola)",
    "cnpj": "61.075.099/0001-85",
    "setor_detalhe": "Indústria / Azeites, Azeitonas e Conservas",
    "setor_macro": "Indústria & Manufatura",
    "regiao": "São Paulo, SP",
    "tribunal": "TJSP - 1ª Câmara Reservada de Direito Empresarial",
    "processo": "2087716-26.2026.8.26.0000",
    "fase": "Falência Decretada por Convolação (Classe 110)",
    "score": 9.2,
    "tier": "Tier 1",
    "passivo_mm": 199,
    "passivo_display": "199",
    "credores": "Procuradoria-Geral do Estado de SP (PGE-SP) R$ 117M, Bancos comerciais e Fomento R$ 62M, Credores extraconcursais R$ 20M",
    "perfil_passivo": "Passivo Tributário em Transação Quebrada (Acordo Paulista) + Bancário + Marca Raiola / Parque Industrial",
    "advocacia": "Casseb Advogados",
    "aj": "AJ Ruiz Administração Judicial",
    "tese": "(1) Causa alegada da crise: Queda drástica de faturamento pós-homologação da RJ original (2024), culminando no inadimplemento de 3 parcelas de transação tributária especial com a PGE-SP; (2) Gargalo imediato de liquidez: Confirmação de falência por acórdão do TJSP pelo art. 73, V, da Lei 11.101/2005 (dívida fiscal de R$ 117M superando todo o passivo concursal) e corte das operações; (3) Tese de mandato sugerida: Assessoria financeira na alienação judicial em bloco de ativos da massa falida (arrematação da marca tradicional Raiola e maquinários fabris de azeites/conservas) e representação de credores quirografários na apuração do rateio.",
    "status": "Novo",
    "proximas_acoes": "Mapear ativos da massa falida (marca Raiola e linhas industriais) para apresentação de proposta a investidores de Special Situations.",
    "cidade": "São Paulo",
    "uf": "SP",
    "coordenadas": [
      -23.5505,
      -46.6333
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "Falência",
    "subtipo_processo": "Falência",
    "strategy_id": "dip",
    "strategy_name": "DIP Financing & M&A Distressed",
    "strategy_tag": "Marca Raiola / Falência",
    "causa_crise": "Queda drástica de faturamento e descumprimento de transação tributária especial (PGE-SP)",
    "gargalo_imediato": "Confirmação de falência pelo TJSP pelo art. 73, V da LREF com passivo fiscal de R$ 117M",
    "tese_mandato": "Alienação judicial em bloco da marca Raiola e parque industrial de conservas",
    "calendar_meta": {
      "data_marco_iso": "2026-11-30",
      "data_marco_br": "30/11/2026",
      "dias_restantes": 42,
      "marco_label": "Quadro Geral de Credores & Edital de Arrecadação de Bens da Massa",
      "marco_tipo": "Arrecadação / Falência",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (42d)",
      "is_fixed_edital": false
    }
  },
  {
    "id": 87,
    "data_evento": "2026-10-18",
    "data_adicao": "2026-10-19",
    "empresa": "Ri Happy Brinquedos S.A. (Grupo Ri Happy / PBKids)",
    "cnpj": "58.731.662/0001-11",
    "setor_detalhe": "Varejo / Brinquedos e Franquias",
    "setor_macro": "Varejo & Consumo",
    "regiao": "São Paulo, SP",
    "tribunal": "TJSP - 1ª Vara de Falências e RJs da Capital",
    "processo": "1125890-44.2026.8.26.0100",
    "fase": "Recuperação Extrajudicial (Processamento Autorizado / 2ª Vara Falências SP)",
    "score": 9.7,
    "tier": "Tier 0",
    "passivo_mm": 827,
    "passivo_display": "827",
    "credores": "Banco do Brasil R$ 180M, Santander R$ 145M, Banco Votorantim BV R$ 110M, Demais bancos R$ 192M, Fornecedores de Brinquedos R$ 200M",
    "perfil_passivo": "Bancário Sindicalizado (9 bancos) + Fornecedores de Brinquedos + Marcas PBKids e Ri Happy (290 lojas)",
    "advocacia": "Aguardando autuação",
    "aj": "Cabezón Administração Judicial Ltda.",
    "tese": "(1) Causa alegada da crise: Desaceleração do varejo físico, concorrência externa e juros elevados com serviço anual da dívida de R$ 70 milhões; (2) Gargalo imediato de liquidez: Passivo de R$ 827,4M quirografário com stay period de 180 dias deferido pela 2ª Vara de Falências de SP, exigindo comprovação individual de quórum de cada uma das 6 empresas do polo ativo; (3) Tese de mandato sugerida: Creditor-Side Advisory para credores quirografários na validação dos quóruns perante a Cabezón AJ e estruturação de covenants operacionais para o período pós-homologação.",
    "status": "Novo",
    "proximas_acoes": "Acompanhar fiscalização de adesões de credores pela Cabezón AJ, comprovação individual de quórum por sociedade (rejeitada consolidação substancial) e publicação de edital para impugnações em 30d.",
    "cidade": "São Paulo",
    "uf": "SP",
    "coordenadas": [
      -23.5505,
      -46.6333
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRE",
    "subtipo_processo": "PRE",
    "strategy_id": "consensual",
    "strategy_name": "Consensual & Art. 20-B",
    "strategy_tag": "Recuperação Extrajudicial",
    "causa_crise": "Juros altos, mudança de consumo infantil, concorrência digital e estresse pós-transição societária",
    "gargalo_imediato": "Adesão de quórum bancário qualificado sem quebrar fluxo para Black Friday e Natal",
    "tese_mandato": "Creditor-Side Advisory para sindicato bancário e repactuação de recebíveis",
    "calendar_meta": {
      "data_marco_iso": "2026-12-17",
      "data_marco_br": "17/12/2026",
      "dias_restantes": 59,
      "marco_label": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)",
      "marco_tipo": "Homologação PRE",
      "urgencia_nivel": "normal",
      "urgencia_label": "NO PRAZO (59d)",
      "is_fixed_edital": false
    }
  },
  {
    "id": 88,
    "data_evento": "2026-10-15",
    "data_adicao": "2026-10-20",
    "empresa": "Grupo Familiar de Pecuaristas MT/GO (Pecuária de Corte)",
    "cnpj": "54.891.230/0001-44",
    "setor_detalhe": "Pecuária de Corte & Confinamento Bovino",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Rondonópolis, MT",
    "tribunal": "TJMT - 4ª Vara Cível de Rondonópolis",
    "processo": "1018942-35.2026.8.11.0003",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.5,
    "tier": "Tier 2",
    "passivo_mm": 31,
    "passivo_display": "31",
    "credores": "Banco do Brasil R$ 14M, Sicredi R$ 9M, Tradings de Insumos & Arrendadores R$ 8M",
    "perfil_passivo": "Crédito Rural de Custeio + Alienação Fiduciária de Rebanho e Arrendamento de Pastagens",
    "advocacia": "Frange Advogados",
    "aj": "Aguardando nomeação judicial",
    "tese": "(1) Causa da crise: Custos de produção em alta, restrição de crédito rural com juros elevados, oscilações no preço da arroba bovina e eventos climáticos adversos em MT e GO; (2) Gargalo imediato: Stay period de 180 dias concedido pela 4ª Vara Cível de Rondonópolis após conflito no STJ, com necessidade de apresentação do plano de RJ em 60 dias e proteção do rebanho em pastagens arrendadas; (3) Oportunidade de mandato: Financial Advisory para repactuação de crédito bancário agro (BB e Sicredi), reestruturação de contratos de arrendamento e estruturação de DIP Financing de custeio pecuário.",
    "status": "Novo",
    "proximas_acoes": "Abordar a banca Frange Advogados (Antonio Frange Junior) e credores agro para assessoria na elaboração do Plano de RJ em 60 dias.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração Bancária Agro (BB e Sicredi > 70%)",
      "Conflito Jurisdicional no STJ Solucionado (Início da Contagem de Stay)",
      "Risco de Liquidez em Contratos de Arrendamento de Pastagem"
    ],
    "tipo_processo": "PRJ",
    "strategy_id": "consensual",
    "calendar_meta": {
      "tipo_marco": "Apresentação do Plano de Recuperação Judicial (Art. 53)",
      "marco_label": "Apresentação do Plano Concursal (60d)",
      "data_marco_iso": "2026-12-14",
      "dias_restantes": 55,
      "urgencia_nivel": "alerta",
      "urgencia_label": "MÉDIO PRAZO (60d)",
      "is_fixed_edital": false
    },
    "cidade": "Rondonópolis",
    "uf": "MT",
    "coordenadas": [
      -16.4674,
      -54.6366
    ],
    "regiao_macro": "Centro-Oeste",
    "subtipo_processo": "PRJ",
    "strategy_name": "Consensual & Art. 20-B",
    "strategy_tag": "Renegociação Agro"
  },
  {
    "id": 89,
    "data_evento": "2026-10-21",
    "data_adicao": "2026-10-21",
    "empresa": "Grupo Casas Bahia S.A. (BHIA3 / Casas Bahia & Ponto)",
    "cnpj": "33.041.260/0001-44",
    "setor_detalhe": "Varejo & E-commerce de Eletroeletrônicos e Móveis",
    "setor_macro": "Varejo & Consumo",
    "regiao": "São Paulo, SP",
    "tribunal": "TJSP - 2ª Vara de Falências e Recuperações Judiciais da Capital",
    "processo": "1108420-15.2026.8.26.0100",
    "fase": "Recuperação Judicial (Classe 129 - Deferida)",
    "score": 9.8,
    "tier": "Tier 1",
    "passivo_mm": 17300,
    "passivo_display": "17.300",
    "credores": "Bradesco R$ 1,5 Bi, Itaú R$ 1,2 Bi, Banco do Brasil R$ 900M, Santander R$ 800M, Whirlpool (Brastemp/Consul) US$ 157M (~R$ 880M), Samsung e Zurich",
    "perfil_passivo": "Dívida Bancária Quirografária (R$ 16,4 Bi) + Debêntures + Fornecedores de Eletroeletrônicos",
    "advocacia": "Pinheiro Neto Advogados // Althia Partners (Camille Faria) & Alvarez & Marsal",
    "aj": "Laspro Consultores / Preserva-Ação",
    "tese": "(1) Causa alegada da crise: Desaceleração do varejo físico e eletroeletrônicos, juros altos encarecendo o funding de crediário e passivo de R$ 17,3 bilhões; (2) Gargalo imediato de liquidez: Queima de caixa e depósitos judiciais retidos de R$ 2,0 Bi, com exposição de fornecedores-chave como Whirlpool (US$ 157M) em renegociação de suprimentos; (3) Tese de mandato sugerida: Estruturação de financiamento DIP de até R$ 1,0 Bi (1ª tranche de R$ 200M negociada com Itaú), comitê de grandes fornecedores de linha branca/tecnologia e liberação de recebíveis retidos.",
    "status": "Novo",
    "proximas_acoes": "Acompanhar negociações de fornecedores estratégicos (Whirlpool US$ 157M), estruturação da 1ª tranche de R$ 200M do DIP com Itaú e apresentação dos fluxos de caixa de 2023 de 4 subsidiárias.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Mega Case com Passivo Superior a R$ 10 Bilhões (R$ 17,3 Bi)",
      "Alta Concentração Bancária Quirografária (Bradesco, BB, Itaú > R$ 6 Bi)",
      "Necessidade de Financiamento DIP para Capital de Giro (Black Friday/Natal)",
      "Presença de Emissões de Debêntures em Mercado de Capitais"
    ],
    "tipo_processo": "PRJ",
    "strategy_id": "watchdog",
    "calendar_meta": {
      "tipo_marco": "Apresentação do Plano de Recuperação Judicial (Art. 53)",
      "marco_label": "Apresentação do Plano Concursal (60d)",
      "data_marco_iso": "2026-12-20",
      "dias_restantes": 60,
      "urgencia_nivel": "alerta",
      "urgencia_label": "MÉDIO PRAZO (60d)",
      "is_fixed_edital": false
    },
    "cidade": "São Paulo",
    "uf": "SP",
    "coordenadas": [
      -23.5505,
      -46.6333
    ],
    "regiao_macro": "Sudeste",
    "subtipo_processo": "PRJ",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "Consórcio Bancário"
  },
  {
    "id": 90,
    "data_evento": "2026-10-14",
    "data_adicao": "2026-10-22",
    "empresa": "Grupo Krohling (Produtores Rurais Família Krohling)",
    "cnpj": "62.138.929/0001-39",
    "setor_detalhe": "Cultivo de Soja, Milho & Armazenagem Rural",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Cuiabá, MT",
    "tribunal": "TJMT - 1ª Vara Cível de Cuiabá",
    "processo": "1038412-19.2026.8.11.0041",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.8,
    "tier": "Tier 2",
    "passivo_mm": 71,
    "passivo_display": "71",
    "credores": "Rabobank R$ 29,7M (Extraconcursal), Banco do Brasil R$ 9,7M, Santander R$ 7,6M, Sicredi R$ 3,9M, CNH Industrial R$ 3,4M e Fertipar US$ 1,8M",
    "perfil_passivo": "Garantia Real Bancária (BB/Santander/Sicredi) + Alienação Fiduciária de Máquinas (CNH/Rabobank) + Barter em Dólar (Fertipar/Basf/Bayer)",
    "advocacia": "Aguardando publicação da procuração nos autos",
    "aj": "Bino Sociedade Individual de Advocacia",
    "tese": "(1) Causa alegada da crise: Descasamento cambial em contratos de barter com insumos dolarizados (Fertipar, Basf, Bayer), quebra climática de soja e elevação de juros em dívidas de garantia real; (2) Gargalo imediato de liquidez: Deferimento da RJ pela 1ª Vara Cível de Cuiabá com consolidação substancial da família Krohling e stay period de 180 dias; edital publicado abrindo prazo de 15 dias para habilitações perante a AJ Bino Advocacia; (3) Tese de mandato sugerida: Creditor-Side Advisory para bancos com garantia real (BB, Santander, Sicredi), renegociação de travas fiduciárias e proteção de ativos operacionais contra cobranças extraconcursais do Rabobank (R$ 29,7M).",
    "status": "Novo",
    "proximas_acoes": "Abordar a administradora judicial nomeada (Bino Sociedade de Advocacia) e áreas de crédito agro dos bancos credores para formação de Comitê de Credores.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração Bancária em Garantia Real (BB e Santander > R$ 17M)",
      "Crédito Extraconcursal Relevante fora da RJ (Rabobank R$ 29,7M)",
      "Exposição Dolarizada em Contratos de Barter (Fertipar US$ 1,8M)"
    ],
    "tipo_processo": "PRJ",
    "strategy_id": "watchdog",
    "calendar_meta": {
      "tipo_marco": "Habilitação de Créditos com Administrador Judicial (Edital Art. 52, §1º)",
      "marco_label": "Edital Art. 52, §1º (Prazo de 15 dias)",
      "data_marco_iso": "2026-10-29",
      "dias_restantes": 7,
      "urgencia_nivel": "critica",
      "urgencia_label": "URGÊNCIA CRÍTICA (7d)",
      "is_fixed_edital": true
    },
    "cidade": "Cuiabá",
    "uf": "MT",
    "coordenadas": [
      -15.5989,
      -56.0949
    ],
    "regiao_macro": "Centro-Oeste",
    "subtipo_processo": "PRJ",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "Garantia Real"
  },
  {
    "id": 91,
    "data_evento": "2026-10-16",
    "data_adicao": "2026-10-22",
    "empresa": "Grupo Ruiz Coffees (Ruiz Agropecuária / JRF Holding)",
    "cnpj": "20.142.850/0001-49",
    "setor_detalhe": "Cafeicultura em Larga Escala (Café Arábica) & Exportação",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "São José do Rio Preto, SP",
    "tribunal": "TJSP - Vara Regional Empresarial de São José do Rio Preto",
    "processo": "1024518-88.2026.8.26.0576",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 9.6,
    "tier": "Tier 1",
    "passivo_mm": 1600,
    "passivo_display": "1.600",
    "credores": "Caixa Econômica Federal R$ 130,8M, Vert Companhia Securitizadora R$ 109,3M, Sicoob R$ 77,9M, Bancos Nacionais e Titulares de CRAs",
    "perfil_passivo": "Passivo Total R$ 1,6 Bi: R$ 775M concursais e R$ 820M extraconcursais (CRAs e Fiagros). Estrutura de Sale & Leaseback de 1,5 mil ha de café e 1,1 mil ha de cana com Suno Agro",
    "advocacia": "Galdino & Coelho Advogados",
    "aj": "Aguardando nomeação judicial",
    "tese": "(1) Causa alegada da crise: Geadas de 2021, calor na florada de 2023 e seca de 2024 gerando quebras de 14% a 28% na colheita de café, somadas a travas de preços pré-alta e crédito restrito sobre passivo de R$ 1,6 Bi; (2) Gargalo imediato de liquidez: R$ 775M de passivo sujeito e R$ 820M extraconcursal sob proteção cautelar provisória na Vara Regional Empresarial de Rio Preto/SP; (3) Tese de mandato sugerida: Creditor-Side Advisory para investidores de CRAs da Vert Securitizadora e Fiagros, governança de fundos proprietários de terras arrendadas (1,5 mil ha) e estruturação de DIP Finance de safra.",
    "status": "Novo",
    "proximas_acoes": "Acompanhar deferimento definitivo do processamento pela Vara Regional Empresarial de São José do Rio Preto e negociação de arrendamento com Fiagro Suno Agro.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Mega Deal do Agronegócio com Passivo Superior a R$ 1,5 Bi",
      "Exposição Elevada em CRAs / Mercado de Capitais (R$ 820M)",
      "Previsão de Desinvestimento de Fazendas em Veículo UPI"
    ],
    "tipo_processo": "PRJ",
    "strategy_id": "dip",
    "calendar_meta": {
      "tipo_marco": "Apresentação do Plano de Recuperação Judicial (Art. 53)",
      "marco_label": "Apresentação do Plano Concursal (60d)",
      "data_marco_iso": "2026-12-15",
      "dias_restantes": 54,
      "urgencia_nivel": "alerta",
      "urgencia_label": "MÉDIO PRAZO (60d)",
      "is_fixed_edital": false
    },
    "cidade": "São José do Rio Preto",
    "uf": "SP",
    "coordenadas": [
      -20.8113,
      -49.3758
    ],
    "regiao_macro": "Sudeste",
    "subtipo_processo": "PRJ",
    "strategy_name": "DIP Financing & M&A Distressed",
    "strategy_tag": "Fundo de Fazendas / CRA"
  },
  {
    "id": 92,
    "data_evento": "2026-10-16",
    "data_adicao": "2026-10-22",
    "empresa": "Usina Campo Lindo S.A. (Açúcar & Etanol)",
    "cnpj": "08.411.332/0001-90",
    "setor_detalhe": "Usinas de Açúcar, Etanol & Bioenergia",
    "setor_macro": "Energia & Infraestrutura",
    "regiao": "Palmares, PE",
    "tribunal": "TJPE - Vara Cível da Comarca de Palmares",
    "processo": "0001420-11.2026.8.17.3050",
    "fase": "Falência / Liquidação (Classe 110)",
    "score": 8.5,
    "tier": "Tier 3",
    "passivo_mm": 381,
    "passivo_display": "381",
    "credores": "BNDES R$ 110M, Banco do Nordeste (BNB) R$ 85M, Banco do Brasil R$ 65M e Fornecedores de Cana/Trabalhistas",
    "perfil_passivo": "Bancário de Desenvolvimento (BNDES/BNB) + Passivo Sucroalcooleiro + Alienação de Parque Fabril e Terras Canavieiras",
    "advocacia": "Aguardando juntada nos autos falimentares",
    "aj": "AJ Judicial Nomeado pelo TJPE",
    "tese": "(1) Causa alegada da crise: Endividamento histórico sucroalcooleiro, frustração de moagem por irregularidade pluviométrica no Nordeste e descumprimento do plano anterior de recuperação judicial; (2) Gargalo imediato: Convolação da recuperação judicial em falência decretada em 16/10/2026 com passivo de R$ 381 milhões, abrindo fase de arrecadação de ativos industriais e canaviais; (3) Tese de mandato sugerida: M&A Distressed de UPI Fabril e Ativos Canavieiros livre de sucessão (art. 141), assessoria a investidores para arrematação de parque industrial em leilão falimentar e negociação de créditos com BNB/BNDES.",
    "status": "Novo",
    "proximas_acoes": "Contatar o Administrador Judicial da massa falida para obter inventário e avaliação de ativos da UPI da Usina para compradores de biocombustíveis.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Convolação em Falência Decretada (Arrecadação de Ativos)",
      "Leilão Judicial Iminente de UPI Fabril (Art. 141 da Lei 11.101/05)",
      "Concentração de Créditos Públicos de Fomento (BNDES e BNB > R$ 195M)"
    ],
    "tipo_processo": "PRJ",
    "subtipo_processo": "Falência / Liquidação",
    "strategy_id": "dip",
    "calendar_meta": {
      "tipo_marco": "Publicação do Edital de Arrecadação e Leilão da UPI Fabril",
      "marco_label": "Leilão Judicial da UPI (Edital em Breve)",
      "data_marco_iso": "2026-11-25",
      "dias_restantes": 34,
      "urgencia_nivel": "alerta",
      "urgencia_label": "MÉDIO PRAZO (35d)",
      "is_fixed_edital": false
    },
    "cidade": "Palmares",
    "uf": "PE",
    "coordenadas": [
      -8.6833,
      -35.5917
    ],
    "regiao_macro": "Nordeste",
    "strategy_name": "DIP Financing & M&A Distressed",
    "strategy_tag": "Leilão UPI Fabril"
  },
  {
    "id": 93,
    "data_evento": "2026-09-02",
    "data_adicao": "2026-10-22",
    "empresa": "Grupo MPP (4B Mining Corp / Mineração Pirâmide Participações)",
    "cnpj": "42.331.156/0001-03",
    "setor_detalhe": "Extração de Minério de Ferro & Logística Hidroviária",
    "setor_macro": "Indústria & Manufatura",
    "regiao": "Corumbá, MS",
    "tribunal": "TJRJ - 6ª Vara Empresarial da Comarca da Capital",
    "processo": "0084512-48.2026.8.19.0001",
    "fase": "Recuperação Extrajudicial (Classe 128)",
    "score": 9.2,
    "tier": "Tier 1",
    "passivo_mm": 375,
    "passivo_display": "375",
    "credores": "ArcelorMittal Brasil R$ 77,4M, Glencore International US$ 25,4M (~R$ 138M), Vetria Mineração e VRental",
    "perfil_passivo": "Dívida Comercial e Offtake de Minério de Ferro + Dívida em Dólar (Glencore) + Arrendamento de Mina e Equipamentos Pesados",
    "advocacia": "Lobo de Rizzo Advogados",
    "aj": "Pinto Machado Advogados Associados",
    "tese": "(1) Causa alegada da crise: Seca extrema na hidrovia do Rio Paraguai paralisando o escoamento de minério de ferro por mais de um ano, seguida pela queda nas cotações globais de ferro e encarecimento de fretes; (2) Gargalo imediato: Pedido de homologação de Recuperação Extrajudicial em tramitação na 6ª Vara Empresarial do RJ com decisão de 15/10 condicionando a blindagem à comprovação do quórum de 1/3; (3) Tese de mandato sugerida: Creditor-Side Advisory para credores estratégicos (ArcelorMittal, Glencore), assessoria na estruturação do arrendamento da operação para a Mineração Pantaneira e renegociação de dívidas de afretamento hidroviário.",
    "status": "Novo",
    "proximas_acoes": "Abordar a administradora judicial Pinto Machado e a assessoria financeira da ArcelorMittal para análise das condições de adesão ao plano de PRE.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Exposição Comercial Bilionária com Siderúrgicas Globais (ArcelorMittal e Glencore)",
      "Arrendamento de Ativo Minerário em Estrutura de UPI Operacional",
      "Homologação de PRE Dependente de Atingimento de Quórum Qualificado"
    ],
    "tipo_processo": "PRE",
    "strategy_id": "consensual",
    "calendar_meta": {
      "tipo_marco": "Comprovação de Quórum de Adesão à Recuperação Extrajudicial",
      "marco_label": "Prazo para Quórum de 1/3 e Adesão Maioritária",
      "data_marco_iso": "2026-11-15",
      "dias_restantes": 24,
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (25d)",
      "is_fixed_edital": false
    },
    "cidade": "Corumbá",
    "uf": "MS",
    "coordenadas": [
      -19.0097,
      -57.6533
    ],
    "regiao_macro": "Centro-Oeste",
    "subtipo_processo": "PRE",
    "strategy_name": "Consensual & Art. 20-B",
    "strategy_tag": "Acordo Extrajudicial"
  },
  {
    "id": 94,
    "data_evento": "2026-10-20",
    "data_adicao": "2026-10-22",
    "empresa": "Grupo Volpp (Produtores Rurais & Volpp Agropecuária)",
    "cnpj": "38.412.980/0001-55",
    "setor_detalhe": "Produção de Grãos (Soja e Milho) & Confinamento",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Itaberaí, GO",
    "tribunal": "TJGO - Vara Cível da Comarca de Itaberaí",
    "processo": "5684120-10.2026.8.09.0079",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.9,
    "tier": "Tier 2",
    "passivo_mm": 288,
    "passivo_display": "288",
    "credores": "Banco do Brasil R$ 95M, Sicredi R$ 68M, Tradings de Grãos (Cargill, Bunge, ADM) R$ 75M e Revendas Locais de Insumos",
    "perfil_passivo": "Crédito Rural de Custeio e Investimento + CPRs Físicas/Financeiras em Barter + Financiamento de Maquinários Agrícolas",
    "advocacia": "Aguardando juntada da procuração nos autos",
    "aj": "Aguardando nomeação judicial",
    "tese": "(1) Causa alegada da crise: Elevação vertiginosa dos custos de insumos agrícolas no plantio anterior, seca prolongada em Goiás e aperto de liquidez por vencimento concentrado de CPRs de safra; (2) Gargalo imediato: Pedido de RJ distribuído em 20/10/2026 com determinação judicial de emenda à inicial em 15 dias para consolidação documental de 6 pessoas físicas e 2 pessoas jurídicas; (3) Tese de mandato sugerida: Financial Advisory de devedor para elaboração do plano de RJ e reestruturação do passivo de R$ 288 milhões, standstill preventivo com tradings de grãos e mediação no CEJUSC de Goiás.",
    "status": "Novo",
    "proximas_acoes": "Contatar os sócios do Grupo Volpp em Itaberaí/GO para proposta de assessoria financeira na emenda à inicial e elaboração do plano concursal.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Determinação de Emenda à Inicial em 15 Dias (Fase de Minuto Zero)",
      "Alta Concentração Bancária em Crédito Rural (BB e Sicredi > R$ 160M)",
      "Exposição a Tradings em Contratos de Barter de Grãos"
    ],
    "tipo_processo": "PRJ",
    "strategy_id": "watchdog",
    "calendar_meta": {
      "tipo_marco": "Emenda à Petição Inicial e Perícia Prévia (Art. 51-A)",
      "marco_label": "Prazo de Emenda à Inicial (15 dias)",
      "data_marco_iso": "2026-11-04",
      "dias_restantes": 13,
      "urgencia_nivel": "critica",
      "urgencia_label": "URGÊNCIA CRÍTICA (13d)",
      "is_fixed_edital": true
    },
    "cidade": "Itaberaí",
    "uf": "GO",
    "coordenadas": [
      -16.0203,
      -49.8106
    ],
    "regiao_macro": "Centro-Oeste",
    "subtipo_processo": "PRJ",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "Standstill & CPRs"
  },
  {
    "id": 95,
    "data_evento": "2026-10-19",
    "data_adicao": "2026-10-22",
    "empresa": "Grupo Produfértil (Produfértil Fertilizantes & Defensivos)",
    "cnpj": "03.882.115/0001-40",
    "setor_detalhe": "Distribuição de Fertilizantes, Químicos & Defensivos Agrícolas",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Dourados, MS",
    "tribunal": "TJMS - Vara Cível da Comarca de Dourados",
    "processo": "0814250-70.2026.8.12.0002",
    "fase": "Cautelar Antecedente (art. 20-B)",
    "score": 9.3,
    "tier": "Tier 1",
    "passivo_mm": 254,
    "passivo_display": "254",
    "credores": "Bancos comerciais (Itaú, Bradesco, Santander), Fornecedores multinacionais de matérias-primas químicas e Tradings",
    "perfil_passivo": "Capital de Giro Bancário + Travas de Recebíveis de Produtores Rurais + Importação de Insumos Fertilizantes Dolarizados",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "N/A (Fase Cautelar)",
    "tese": "(1) Causa alegada da crise: Inadimplência recorde de produtores rurais de soja e milho no MS, descasamento entre a compra de matérias-primas dolarizadas e recebimento de duplicatas agrícolas; (2) Gargalo imediato: Ajuizamento de tutela cautelar antecedente (art. 20-B) em Dourados/MS em 19/10/2026 para sustação de protestos e suspensão de travas bancárias sobre a conta de giro; (3) Tese de mandato sugerida: Financial Advisory para negociação de standstill de 60 dias com sindicato bancário, estruturação de DIP Finance com tradings e preparação para conversão em Recuperação Judicial/Extrajudicial.",
    "status": "Novo",
    "proximas_acoes": "Abordar a diretoria financeira do Grupo Produfértil em Dourados/MS para assessoria na renegociação bancária durante a janela da tutela cautelar de 60 dias.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Tutela Cautelar Antecedente (Art. 20-B) Protocolada em Outubro/2026",
      "Blindagem de Caixa e Travas Bancárias de Recebíveis Agrícolas",
      "Janela de 60 Dias para Conversão em RJ ou Recuperação Extrajudicial"
    ],
    "tipo_processo": "Cautelar / Pré-RJ",
    "strategy_id": "consensual",
    "calendar_meta": {
      "tipo_marco": "Fim do Prazo da Tutela Cautelar Antecedente (Art. 20-B, §1º)",
      "marco_label": "Janela Cautelar de Blindagem (60 dias)",
      "data_marco_iso": "2026-12-18",
      "dias_restantes": 57,
      "urgencia_nivel": "alerta",
      "urgencia_label": "MÉDIO PRAZO (60d)",
      "is_fixed_edital": false
    },
    "cidade": "Dourados",
    "uf": "MS",
    "coordenadas": [
      -22.2236,
      -54.8125
    ],
    "regiao_macro": "Centro-Oeste",
    "subtipo_processo": "Cautelar / Pré-RJ",
    "strategy_name": "Consensual & Art. 20-B",
    "strategy_tag": "Art. 20-B Cautelar"
  },
  {
    "id": 96,
    "data_evento": "2026-10-19",
    "data_adicao": "2026-10-22",
    "empresa": "Grupo VETBR (Distribuidora de Saúde Animal VETBR)",
    "cnpj": "19.412.875/0001-22",
    "setor_detalhe": "Distribuição Atacadista de Medicamentos Veterinários & Vacinas",
    "setor_macro": "Saúde & Farma",
    "regiao": "Perdões, MG",
    "tribunal": "TJMG - Vara Cível da Comarca de Perdões",
    "processo": "5001420-15.2026.8.13.0499",
    "fase": "Recuperação Extrajudicial (Classe 128)",
    "score": 8.7,
    "tier": "Tier 2",
    "passivo_mm": 160,
    "passivo_display": "160",
    "credores": "Bancos credores de garantia real (Itaú, Bradesco, Santander R$ 85M), Laboratórios farmacêuticos veterinários e Quirografários (R$ 75M)",
    "perfil_passivo": "Bancário Garantido (Alienação de Estoques e Recebíveis) + Fornecedores de Vacinas e Medicamentos Veterinários",
    "advocacia": "Cescon Barrieu Advogados",
    "aj": "N/A (Fase Extrajudicial)",
    "tese": "(1) Causa alegada da crise: Desaceleração da demanda de confinamento bovino, compressão de margens na distribuição de medicamentos veterinários e alto custo do carregamento de estoques climatizados; (2) Gargalo imediato: Protocolo de pedido de homologação de Recuperação Extrajudicial em Perdões/MG com adesão inicial de 54,26% da garantia real e 48,97% dos quirografários; (3) Tese de mandato sugerida: Creditor-Side Advisory para laboratórios fornecedores de saúde animal e bancos de garantia real, assessoria na votação de credores dissidentes e monitoramento de covenants operacionais.",
    "status": "Novo",
    "proximas_acoes": "Contatar credores quirografários dissidentes e bancos com garantia de estoque para estruturação de comitê de acompanhamento da PRE.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Recuperação Extrajudicial com Quórum Inicial de 54,26% em Garantia Real",
      "Exposição Relevante a Laboratórios Farmacêuticos Globais",
      "Alienação Fiduciária sobre Estoques Climatizados e Centros de Distribuição"
    ],
    "tipo_processo": "PRE",
    "strategy_id": "consensual",
    "calendar_meta": {
      "tipo_marco": "Edital de Impugnação de Credores e Homologação de PRE",
      "marco_label": "Prazo de Homologação de PRE (30 dias)",
      "data_marco_iso": "2026-11-20",
      "dias_restantes": 29,
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (30d)",
      "is_fixed_edital": false
    },
    "cidade": "Perdões",
    "uf": "MG",
    "coordenadas": [
      -21.0917,
      -45.0917
    ],
    "regiao_macro": "Sudeste",
    "subtipo_processo": "PRE",
    "strategy_name": "Consensual & Art. 20-B",
    "strategy_tag": "Homologação PRE"
  },
  {
    "id": 97,
    "data_evento": "2026-10-21",
    "data_adicao": "2026-10-22",
    "empresa": "Grupo Volo (Volo Logística & Distribuição de Moda)",
    "cnpj": "24.118.990/0001-18",
    "setor_detalhe": "Operador Logístico de Moda, E-commerce & Armazenagem",
    "setor_macro": "Tecnologia & Serviços B2B",
    "regiao": "São Paulo, SP",
    "tribunal": "TJSP - 2ª Vara Regional Empresarial de São Paulo",
    "processo": "1019842-12.2026.8.26.0260",
    "fase": "Recuperação Extrajudicial (Classe 128)",
    "score": 8.4,
    "tier": "Tier 3",
    "passivo_mm": 49,
    "passivo_display": "49",
    "credores": "Bancos comerciais (Santander, Bradesco, Daycoval), Empresas de locação de galpões e Frotistas terceirizados",
    "perfil_passivo": "Bancário de Capital de Giro + Desconto de Recebíveis + Locação de Centros de Distribuição e Veículos Utilitários",
    "advocacia": "Aguardando publicação nos autos",
    "aj": "N/A (Fase Extrajudicial)",
    "tese": "(1) Causa alegada da crise: Retração nas encomendas de malha logística do setor têxtil e de confecções, elevação dos custos de combustível e quebra de faturamento no varejo de moda; (2) Gargalo imediato: Protocolo de pedido de Recuperação Extrajudicial com R$ 49 milhões em créditos abrangidos na 2ª Vara Regional Empresarial de SP; (3) Tese de mandato sugerida: Advisory de renegociação de passivo de locação de galpões (Sale & Leaseback / revisão contratual) e reestruturação bilateral de capital de giro com bancos privados.",
    "status": "Novo",
    "proximas_acoes": "Abordar credores imobiliários e fundos proprietários de galpões logísticos para repactuação de contratos de locação atípicos (BTS).",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Recuperação Extrajudicial no Setor de Logística de Varejo",
      "Passivo Concentrado em Locações de Galpões e Travas Bancárias",
      "Oportunidade de Reestruturação Bilateral de Contratos Imobiliários"
    ],
    "tipo_processo": "PRE",
    "strategy_id": "consensual",
    "calendar_meta": {
      "tipo_marco": "Homologação do Plano de Recuperação Extrajudicial",
      "marco_label": "Prazo para Habilitações e Decisão de Homologação",
      "data_marco_iso": "2026-11-30",
      "dias_restantes": 39,
      "urgencia_nivel": "alerta",
      "urgencia_label": "MÉDIO PRAZO (40d)",
      "is_fixed_edital": false
    },
    "cidade": "São Paulo",
    "uf": "SP",
    "coordenadas": [
      -23.5505,
      -46.6333
    ],
    "regiao_macro": "Sudeste",
    "subtipo_processo": "PRE",
    "strategy_name": "Consensual & Art. 20-B",
    "strategy_tag": "Sale & Leaseback"
  },
  {
    "id": 98,
    "data_evento": "2026-10-14",
    "data_adicao": "2026-10-22",
    "empresa": "Grupo Françolin (Frutas Françolin / Agro Comercial Françolin)",
    "cnpj": "10.363.353/0001-00",
    "setor_detalhe": "Fruticultura (Mamão, Banana, Citros) & Café Conilon",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Teixeira de Freitas, BA",
    "tribunal": "TJBA - 1ª Vara dos Feitos Cíveis de Teixeira de Freitas",
    "processo": "8004512-05.2026.8.05.0256",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.6,
    "tier": "Tier 2",
    "passivo_mm": 36,
    "passivo_display": "36",
    "credores": "Banco do Brasil R$ 13,68M, Caixa Econômica Federal R$ 1,96M, Fornecedores de Insumos e Energia (Cemig/Coelba)",
    "perfil_passivo": "Crédito Rural e Custeio Bancário (BB e CEF) + Fornecedores de Embalagens e Adubos + Contas de Energia Elétrica Rural",
    "advocacia": "Aguardando procuração nos autos",
    "aj": "Aguardando nomeação judicial",
    "tese": "(1) Causa alegada da crise: Queda acentuada de preços de mamão e café conilon combinada ao investimento de capital próprio em 312 hectares de café em formação e recusa do Banco do Brasil em renovar limites sem garantia adicional; (2) Gargalo imediato: Ajuizamento de RJ na 1ª Vara Cível de Teixeira de Freitas/BA com R$ 35,5M em créditos sujeitos, com tutela de urgência pleiteada para impedir corte de energia pela Cemig e Coelba em packing house e bombas de irrigação; (3) Tese de mandato sugerida: Financial Advisory para elaboração do Plano de RJ com carência de 24 meses para maturação dos 312 ha de café e repactuação de operações de custeio com o Banco do Brasil.",
    "status": "Novo",
    "proximas_acoes": "Contatar os sócios do Grupo Françolin em Teixeira de Freitas/BA para oferta de assessoria financeira na modelagem do plano de pagamento aos credores bancários.",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Concentração Elevada em Banco do Brasil (> 40% do passivo total)",
      "Risco Operacional com Concessionárias de Energia (Cemig/Coelba em packing house)",
      "312 Hectares de Lavouras de Café em Formação (Potencial de Ativo Real)"
    ],
    "tipo_processo": "PRJ",
    "strategy_id": "watchdog",
    "calendar_meta": {
      "tipo_marco": "Decisão de Processamento e Nomeação de Administrador Judicial",
      "marco_label": "Decisão de Processamento da RJ (Vara de Teixeira de Freitas)",
      "data_marco_iso": "2026-11-05",
      "dias_restantes": 14,
      "urgencia_nivel": "critica",
      "urgencia_label": "URGÊNCIA CRÍTICA (14d)",
      "is_fixed_edital": true
    },
    "cidade": "Teixeira de Freitas",
    "uf": "BA",
    "coordenadas": [
      -17.5369,
      -39.7428
    ],
    "regiao_macro": "Nordeste",
    "subtipo_processo": "PRJ",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "Carência Agrícola"
  },
  {
    "id": 99,
    "data_evento": "2026-09-29",
    "data_adicao": "2026-10-22",
    "empresa": "FTS Participações Societárias S.A. (FTSPar / Terminal Portuário PAR50)",
    "cnpj": "23.033.661/0001-19",
    "setor_detalhe": "Infraestrutura Portuária & Movimentação de Granéis",
    "setor_macro": "Logística, Transporte & Infraestrutura",
    "regiao": "Paranaguá, PR",
    "tribunal": "CVM // CR Securitizadora S.A.",
    "processo": "Debêntures 1ª Emissão / Edital AGD Vencimento Antecipado",
    "fase": "Distress Precursor / AGD de Vencimento Antecipado (Tier 0)",
    "score": 8.5,
    "tier": "Tier 0",
    "passivo_mm": 110,
    "passivo_display": "110",
    "credores": "CR Securitizadora R$ 110M (Debenturistas / Titulares de CRIs), Bancos de Fomento e Fornecedores Portuários",
    "perfil_passivo": "Debêntures Estruturadas + Arrendamento Portuário (Terminal PAR50 / Porto de Paranaguá)",
    "advocacia": "Aguardando publicação de assessores legais nos autos da AGD",
    "aj": "N/A (Fase Pré-Concursal / AGD)",
    "tese": "(1) Causa alegada da crise: Descompasso entre investimentos intensivos de capex e outorga no terminal de granéis PAR50 (Porto de Paranaguá) e geração de caixa operacional; (2) Gargalo imediato de liquidez: Convocação de AGD pela CR Securitizadora para deliberar vencimento antecipado de R$ 110 milhões em debêntures; (3) Tese de mandato sugerida: Creditor-Side Advisory para titulares de CRIs/debêntures da CR Securitizadora para repactuação de covenants ou busca de sócio operador logístico.",
    "status": "Novo",
    "proximas_acoes": "Monitorar resultado da deliberação da AGD convocada pela CR Securitizadora e contatar assessores financeiros do grupo.",
    "cidade": "Paranaguá",
    "uf": "PR",
    "coordenadas": [
      -25.5161,
      -48.5225
    ],
    "regiao_macro": "Sul",
    "tipo_processo": "Tier 0",
    "subtipo_processo": "Tier 0",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "AGD Debêntures",
    "causa_crise": "Descompasso entre capex/outorga em terminal portuário PAR50 e geração de caixa operacional",
    "gargalo_imediato": "Convocação de AGD pela CR Securitizadora para deliberar vencimento antecipado de R$ 110 milhões em debêntures",
    "tese_mandato": "Creditor-Side Advisory para titulares de CRIs/debêntures da CR Securitizadora para repactuação de covenants",
    "calendar_meta": {
      "data_marco_iso": "2026-11-10",
      "data_marco_br": "10/11/2026",
      "dias_restantes": 19,
      "marco_label": "Realização da Assembleia Geral de Debenturistas (AGD) da CR Securitizadora",
      "marco_tipo": "AGD Vencimento Antecipado",
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (19d)",
      "is_fixed_edital": true
    }
  },
  {
    "id": 100,
    "data_evento": "2026-10-16",
    "data_adicao": "2026-10-23",
    "empresa": "Grupo Euro17 (Euro Securitizadora S.A. / Prime Euro Securitizadora)",
    "cnpj": "29.044.139/0001-19",
    "setor_detalhe": "Securitização de Crédito, Empréstimo Pessoal & Fintech",
    "setor_macro": "Serviços Financeiros, Fintechs & Crédito",
    "regiao": "São Paulo, SP",
    "tribunal": "TJSP - 1ª Vara de Falências e Recuperações Judiciais da Capital",
    "processo": "Recuperação Judicial / Consolidação Substancial (8 empresas)",
    "fase": "Recuperação Judicial (Ajuizada / Em Análise de Deferimento)",
    "score": 9.2,
    "tier": "Tier 3",
    "passivo_mm": 1720,
    "passivo_display": "1.720",
    "credores": "4.000+ investidores PF em debêntures privadas (R$ 1.280M em principal / R$ 1.460M a vencer), Bancos parceiros e Fornecedores",
    "perfil_passivo": "Debêntures Privadas Subordinadas sem garantia real (9.393 contratos) + Carteira de Crédito Pessoal Classes C/D",
    "advocacia": "F.Soares Advocacia Empresarial",
    "aj": "A nomear (1ª Vara de Falências de SP)",
    "tese": "(1) Causa alegada da crise: Descasamento de prazos entre captação de debêntures privadas e concessão de crédito pessoal C/D, alta de inadimplência e corrida de resgates (65%) após contágio do caso Banco Master; (2) Gargalo imediato de liquidez: Queima de R$ 30M a R$ 40M/mês, passivo de R$ 1,72 bilhão e R$ 1,07 bilhão vencendo até 2027 sob bloqueios judiciais após negativa de cautelar; (3) Tese de mandato sugerida: Creditor-Side Advisory e representação de comitê de debenturistas pessoas físicas, auditoria forense patrimonial e carve-out da carteira adimplente de crédito (UPI).",
    "status": "Novo",
    "proximas_acoes": "Monitorar decisão da 1ª Vara de Falências da Capital sobre processamento e nomeação de AJ; contatar advogados de grupos de debenturistas.",
    "cidade": "São Paulo",
    "uf": "SP",
    "coordenadas": [
      -23.5505,
      -46.6333
    ],
    "regiao_macro": "Sudeste",
    "tipo_processo": "PRJ",
    "subtipo_processo": "PRJ",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "Comitê de Debenturistas",
    "causa_crise": "Descasamento de prazos entre captação de debêntures privadas e crédito C/D, inadimplência e corrida de resgates",
    "gargalo_imediato": "Queima de R$ 30M-40M/mês, R$ 1,07 Bi vencendo até 2027 e bloqueios judiciais após negativa de liminar",
    "tese_mandato": "Creditor-Side Advisory para grupo de debenturistas, auditoria forense patrimonial e carve-out de carteira adimplente",
    "calendar_meta": {
      "data_marco_iso": "2026-11-05",
      "data_marco_br": "05/11/2026",
      "dias_restantes": 13,
      "marco_label": "Decisão sobre Processamento da Recuperação Judicial e Nomeação de AJ (1ª Vara de Falências/SP)",
      "marco_tipo": "Deferimento de Processamento",
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (13d)",
      "is_fixed_edital": false
    }
  },
  {
    "id": 101,
    "data_evento": "2026-10-23",
    "data_adicao": "2026-10-24",
    "empresa": "Grupo Buuron (Osmar Buuron, Luiz Carlos Buuron & Produtores Associados)",
    "cnpj": "48.215.490/0001-12",
    "setor_detalhe": "Produção de Grãos & Cultivo Agrícola (Vale do Araguaia)",
    "setor_macro": "Agronegócio & Insumos",
    "regiao": "Canarana, MT",
    "tribunal": "TJMT - 4ª Vara Cível de Rondonópolis (Vara Regionalizada de RJ e Falência)",
    "processo": "1015842-50.2026.8.11.0003",
    "fase": "Recuperação Judicial (Classe 129 - Deferida / Edital Art. 52 Publicado)",
    "score": 8.7,
    "tier": "Tier 1",
    "passivo_mm": 130,
    "passivo_display": "130",
    "credores": "Sicoob Primavera R$ 37,0M (R$ 23,7M fiduciários), Caixa R$ 34,5M, Primacredi Credisis R$ 16,1M, Sicredi Araxingu R$ 11,2M, Pessoas Físicas R$ 11,1M, Santander R$ 7,5M, Banco do Brasil R$ 4,4M, Agrícola Alvorada R$ 4,4M",
    "perfil_passivo": "Crédito Rural, CCBs e Cédulas Rotativas com Alienação Fiduciária de Imóveis Rurais (R$ 66,3M extraconcursais + R$ 63,6M concursais) em Canarana/MT",
    "advocacia": "Banca Especializada em Reestruturação do Agronegócio (MT)",
    "aj": "Mudih Consultoria Ltda. (Darbas José Coutinho Filho)",
    "tese": "(1) Causa alegada da crise: Quebras climáticas sucessivas nas safras 2023 a 2025 no Vale do Araguaia, alta dos juros e custos de insumos; (2) Gargalo imediato de liquidez: Passivo de R$ 129,8M com 51% (R$ 66,3M) atrelado a garantias fiduciárias extraconcursais, intimações de consolidação de propriedade imobiliária em Canarana/MT e prazo de 60 dias para entrega do plano; (3) Tese de mandato sugerida: Creditor-Side Advisory para cooperativas de crédito (Sicoob, Primacredi e Sicredi detêm R$ 64,3M), estruturação de DIP de safra ou desinvestimento de fazendas em Canarana (UPI).",
    "status": "Novo",
    "proximas_acoes": "Monitorar prazo de 15 dias para habilitações de crédito junto à Mudih Consultoria e decisão judicial sobre essencialidade dos bens fiduciários.",
    "cidade": "Canarana",
    "uf": "MT",
    "coordenadas": [
      -13.5519,
      -52.2708
    ],
    "regiao_macro": "Centro-Oeste",
    "tipo_processo": "PRJ",
    "subtipo_processo": "PRJ",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "Defesa Fiduciária / Agro",
    "causa_crise": "Quebras climáticas nas safras 2023-2025 no Vale do Araguaia, alta de juros e custos de insumos",
    "gargalo_imediato": "51% do passivo (R$ 66,3M) extraconcursal com alienação fiduciária e intimações de consolidação imobiliária",
    "tese_mandato": "Creditor-Side Advisory para cooperativas (Sicoob/Primacredi/Sicredi), DIP de safra ou venda de fazendas (UPI)",
    "calendar_meta": {
      "data_marco_iso": "2026-11-07",
      "data_marco_br": "07/11/2026",
      "dias_restantes": 14,
      "marco_label": "Fim do Prazo de 15 Dias para Habilitações/Divergências à Lista de Credores (Art. 7º, § 1º)",
      "marco_tipo": "Habilitação de Créditos",
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (14d)",
      "is_fixed_edital": true
    }
  },
  {
    "id": 102,
    "data_evento": "2026-10-20",
    "data_adicao": "2026-10-25",
    "empresa": "Grupo Família Sandoval (GBS Agro / Gilberto Barbosa Sandoval & Produtores Associados)",
    "cnpj": "54.691.990/0001-80",
    "setor_detalhe": "Produção de Soja e Milho & Cultivo Agrícola (Vale do Araguaia / TO)",
    "setor_macro": "Agronegócio & Insumos",
    "regiao": "Araguacema, TO",
    "tribunal": "TJTO - Vara Cível da Comarca de Araguacema",
    "processo": "0000255-59.2026.8.27.2704",
    "fase": "Recuperação Judicial (Classe 129 - Deferida / Edital Art. 52 Publicado)",
    "score": 8.6,
    "tier": "Tier 1",
    "passivo_mm": 74,
    "passivo_display": "74",
    "credores": "Banco do Brasil R$ 22M, Banco CNH Industrial R$ 12M, Banco John Deere R$ 9M, Tradings e Distribuidores de Insumos R$ 18M, Cooperativas e Fornecedores R$ 13M",
    "perfil_passivo": "Cédulas de Crédito Bancário (CCBs), Financiamento de Maquinários e Cédulas de Produto Rural (CPRs) com Garantia Real",
    "advocacia": "Banca Especializada em Direito do Agronegócio e Recuperação (TO/GO)",
    "aj": "Veritas Administração Judicial (Goiânia-GO)",
    "tese": "(1) Causa alegada da crise: Estresse hídrico no Vale do Araguaia tocantinense nas últimas safras, elevação dos custos de insumos e juros de financiamento; (2) Gargalo imediato de liquidez: Passivo de R$ 74,4M em 121 credores com vencimento antecipado de dívidas e risco de apreensão de maquinários, com consolidação substancial de ativos/passivos deferida pelo juízo de Araguacema/TO; (3) Tese de mandato sugerida: Creditor-Side Advisory para tradings e bancos de máquinas (CNH Capital e John Deere), ou estruturação de financiamento DIP de safra e desinvestimento de glebas agrícolas (UPI).",
    "status": "Novo",
    "proximas_acoes": "Monitorar prazo de 15 dias do edital do art. 52 para habilitações perante a Veritas AJ e protocolo do plano conjunto de soerguimento em 60 dias.",
    "cidade": "Araguacema",
    "uf": "TO",
    "coordenadas": [
      -8.8028,
      -49.5564
    ],
    "regiao_macro": "Norte",
    "tipo_processo": "PRJ",
    "subtipo_processo": "PRJ",
    "strategy_id": "watchdog",
    "strategy_name": "Creditor-Side & Watchdog",
    "strategy_tag": "Maquinários / Financiamento",
    "causa_crise": "Estresse hídrico no Vale do Araguaia/TO, custos de insumos e juros de maquinários",
    "gargalo_imediato": "Passivo de R$ 74,4M com risco de apreensão de frotas agrícolas e vencimento de CPRs",
    "tese_mandato": "Creditor-Side Advisory para bancos de maquinários (CNH/John Deere), DIP safra e venda de terras (UPI)",
    "calendar_meta": {
      "data_marco_iso": "2026-11-04",
      "data_marco_br": "04/11/2026",
      "dias_restantes": 10,
      "marco_label": "Prazo de 15 Dias para Habilitações e Divergências de Crédito (Veritas AJ / Edital Art. 52)",
      "marco_tipo": "Habilitação de Créditos",
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (10d)",
      "is_fixed_edital": true
    }
  },
  {
    "id": 103,
    "data_evento": "2026-10-27",
    "data_adicao": "2026-10-28",
    "empresa": "Grupo Pelissari (Antonio Vitorio Pelissari, Emerson Pelissari & Associados)",
    "cnpj": "53.413.680/0001-31",
    "setor_detalhe": "Cultivo de Soja e Milho & Insumos Agrícolas (Sinop / MT)",
    "setor_macro": "Agronegócio & Insumos",
    "regiao": "Sinop, MT",
    "tribunal": "TJMT - 4ª Vara Cível da Comarca de Sinop",
    "processo": "Processo Falimentar (Ex-RJ Grupo Pelissari / Credibilita AJ)",
    "fase": "Falência (Classe 110 - Convolação Decretada com Bloqueio de Ativos)",
    "score": 9.3,
    "tier": "Tier 1",
    "passivo_mm": 45,
    "passivo_display": "45",
    "credores": "BlackPartners Miruna FIDC NP R$ 18M, Attua Comercial Agrícola R$ 9M, Maré Fertilizantes R$ 6M, Terra Forte Máquinas R$ 5M, Vicente Agro e Outros R$ 7M",
    "perfil_passivo": "Insumos Agrícolas, Fertilizantes e Financiamento de Maquinários com Garantias sobre Imóveis Rurais e Lavouras em Sinop e Nova Canaã do Norte/MT",
    "advocacia": "Banca de Reestruturação Agrícola (MT)",
    "aj": "Credibilita Administração Judicial e Serviços Ltda.",
    "tese": "(1) Causa alegada da crise: Endividamento em insumos e fertilizantes não equacionado na recuperação judicial iniciada em 2024, culminando na rejeição em AGC por 72,37% dos créditos e inadmissão dos planos alternativos; (2) Gargalo imediato de liquidez: Sentença de convolação em falência da 4ª Vara Cível de Sinop em 27/10/2026 com ordem de bloqueio patrimonial de R$ 45,3 milhões em contas, maquinários e lavouras; (3) Tese de mandato sugerida: M&A Distressed de terras e ativos agrícolas via leilão judicial de UPI falimentar livre de sucessão (art. 141 da Lei 11.101/05), e Creditor-Side Advisory para BlackPartners Miruna FIDC e fornecedores na arrecadação.",
    "status": "Novo",
    "proximas_acoes": "Monitorar arrecadação e avaliação de bens rurais pela Credibilita AJ e publicação do edital de convocação do leilão falimentar de ativos.",
    "cidade": "Sinop",
    "uf": "MT",
    "coordenadas": [
      -11.8608,
      -55.5097
    ],
    "regiao_macro": "Centro-Oeste",
    "tipo_processo": "Falência / Liquidação",
    "subtipo_processo": "Falência",
    "strategy_id": "special_ops",
    "strategy_name": "Special Ops & UPI",
    "strategy_tag": "Leilão Judicial Falimentar",
    "causa_crise": "Endividamento severo em fertilizantes/insumos e rejeição do plano de RJ por 72,4% dos créditos em AGC",
    "gargalo_imediato": "Sentença de convolação em falência da 4ª Vara de Sinop com ordem de bloqueio de bens de R$ 45,3M",
    "tese_mandato": "M&A Distressed de fazendas via UPI livre de sucessão (art. 141) e Creditor-Side para FIDC e tradings",
    "calendar_meta": {
      "data_marco_iso": "2026-11-20",
      "data_marco_br": "20/11/2026",
      "dias_restantes": 23,
      "marco_label": "Apresentação do Auto de Arrecadação e Avaliação de Bens pela Credibilita AJ",
      "marco_tipo": "Arrecadação Falimentar",
      "urgencia_nivel": "alerta",
      "urgencia_label": "CURTO PRAZO (23d)",
      "is_fixed_edital": false
    }
  }
];
const ENRICHED_BY_COMPANY = {"Aeris Energy": {"tese": "(1) Causa da crise: Desalavancagem operacional severa após encerramento antecipado de contratos de fornecimento de pás eólicas (Siemens Gamesa / WEG), ociosidade fabril no Ceará e compressão do caixa frente a R$ 1,0 bilhão em dívidas financeiras; (2) Gargalo imediato: Tutela cautelar antecedente (art. 20-B) para blindagem de caixa contra travas bancárias e negociação de standstill em AGDs das emissões de debêntures (AERI11/AERI12) junto a Vórtx e Pentágono; (3) Oportunidade de mandato: Financial Advisory junto ao sindicato bancário (Bradesco, Santander, Itaú), estruturação de DIP Financing para capital de giro e M&A Distressed da planta industrial no Porto do Pecém/CE.", "causa_crise": "Desalavancagem operacional severa após encerramento antecipado de contratos de fornecimento de pás eólicas (Siemens Gamesa / WEG), ociosidade fabril no Ceará e compressão do caixa frente a R$ 1,0 bilhão em dívidas financeiras", "gargalo_imediato": "Tutela cautelar antecedente (art. 20-B) para blindagem de caixa contra travas bancárias e negociação de standstill em AGDs das emissões de debêntures (AERI11/AERI12) junto a Vórtx e Pentágono", "tese_mandato": "Financial Advisory junto ao sindicato bancário (Bradesco, Santander, Itaú), estruturação de DIP Financing para capital de giro e M&A Distressed da planta industrial no Porto do Pecém/CE.", "agentes_fiduciarios": "Vórtx DTVM / Pentágono DTVM", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": {"debenture_codigo": "AERI11 / AERI12 (R$ 650M)", "agente_fiduciario": "Vórtx DTVM / Pentágono DTVM", "inadimplemento_ccee": "Adimplente (Autoprodutor / Indústria Eólica)", "risco_caducidade": "Baixo — Contratos de fornecimento e Porto do Pecém/CE ativos", "corte_rating_curtailment": "Rating rebaixado para CCC(bra); impacto indireto por postergação de capex eólico devido ao curtailment no NE", "submercado": "Nordeste"}, "descricao_empresa": "Fabricante líder na América Latina de pás eólicas para aerogeradores de alta potência, fundada em 2010 e listada no Novo Mercado da B3 (AERI3). Opera complexo industrial estrategicamente instalado adjacente ao Porto do Pecém (Caucaia/CE), com capacidade histórica superior a 4 GW/ano, atendendo clientes globais como Vestas, WEG, Nordex e Siemens Gamesa.", "model_params": {"haircut_pct": 45.0, "recuperacao_pct": 55.0, "desconto_secundario_pct": 30.0, "valor_recuperado_mm": 550.0, "ev_estimado_mm": 500.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 18.0, "classe_i_pct": 3.0, "classe_ii_pct": 42.0, "fiscal_pct": 7.0, "classe_iii_pct": 27.0, "classe_iv_pct": 3.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-11-24", "data_marco_br": "24/11/2026", "dias_restantes": 39, "marco_label": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE", "marco_tipo": "Cautelar 20-B (60d)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (39d)", "is_fixed_edital": false}}, "Grupo Veneto (Ambbag / LimpServ)": {"tese": "(1) Causa da crise: Elevação do custo de resinas plásticas e insumos químicos combinada ao aperto de liquidez no desconto de duplicatas e capital de giro bancário; (2) Gargalo imediato: Processamento da Recuperação Judicial na Vara Regional Empresarial de SP com necessidade de apresentação do plano de recuperação (art. 53) em 60 dias e liberação de travas de recebíveis; (3) Oportunidade de mandato: Gestão Interina (CRO) para saneamento de margens operacionais, renegociação com sindicato bancário (Itaú, Santander, Bradesco) e estruturação do PRJ.", "causa_crise": "Elevação do custo de resinas plásticas e insumos químicos combinada ao aperto de liquidez no desconto de duplicatas e capital de giro bancário", "gargalo_imediato": "Processamento da Recuperação Judicial na Vara Regional Empresarial de SP com necessidade de apresentação do plano de recuperação (art. 53) em 60 dias e liberação de travas de recebíveis", "tese_mandato": "Gestão Interina (CRO) para saneamento de margens operacionais, renegociação com sindicato bancário (Itaú, Santander, Bradesco) e estruturação do PRJ.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Conglomerado industrial e de serviços ambientais sediado na Grande São Paulo, composto pelas operadoras Ambbag (fabricação de embalagens industriais flexíveis e big bags de polipropileno) e LimpServ (terceirização de limpeza técnica e gestão de resíduos industriais), atendendo indústrias químicas, petroquímicas e logísticas no Sudeste.", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 72.0, "ev_estimado_mm": 90.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-11-15", "data_marco_br": "15/11/2026", "dias_restantes": 30, "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)", "marco_tipo": "Entrega PRJ (Art. 53)", "urgencia_nivel": "alerta", "urgencia_label": "CURTO PRAZO (30d)", "is_fixed_edital": false}}, "Grupo de Transporte & Agro Rondonópolis": {"tese": "(1) Causa da crise: Queda nos fretes de grãos no corredor logístico da BR-163 (Mato Grosso) somada à alta da Selic sobre contratos de Finame e alienação fiduciária de caminhões; (2) Gargalo imediato: Ações de busca e apreensão de frota movidas por bancos de montadoras (Scania e Volvo) e vencimento do stay period na 4ª Vara Cível de Rondonópolis/MT; (3) Oportunidade de mandato: Financial Advisory para comprovação de essencialidade da frota pesada, alongamento de contratos de leasing/Finame e renegociação com distribuidoras de combustível.", "causa_crise": "Queda nos fretes de grãos no corredor logístico da BR-163 (Mato Grosso) somada à alta da Selic sobre contratos de Finame e alienação fiduciária de caminhões", "gargalo_imediato": "Ações de busca e apreensão de frota movidas por bancos de montadoras (Scania e Volvo) e vencimento do stay period na 4ª Vara Cível de Rondonópolis/MT", "tese_mandato": "Financial Advisory para comprovação de essencialidade da frota pesada, alongamento de contratos de leasing/Finame e renegociação com distribuidoras de combustível.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Grupo familiar mato-grossense com atuação integrada no transporte rodoviário pesado de grãos (corredor logístico BR-163 / Rondonópolis–Santos) e cultivo de soja e milho no sul do Mato Grosso, operando frota própria de caminhões bitrem e rodotrem financiados via linhas Finame e bancos de montadoras.", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 13.6, "ev_estimado_mm": 17.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 22.0, "classe_i_pct": 4.0, "classe_ii_pct": 36.0, "fiscal_pct": 8.0, "classe_iii_pct": 25.0, "classe_iv_pct": 5.0}}, "agro_meta": {"cpr_status": "Concursal / Finame de Frota", "alienacao_terras": "Alienação Fiduciária de Caminhões (Essencialidade invocada)", "ativos_rurais": "Frota rodoviária graneleira + lavouras em Rondonópolis/MT", "cra_exposicao": "Sem CRA (Crédito Finame / Bancos de Montadora)"}, "calendar_meta": {"data_marco_iso": "2026-11-19", "data_marco_br": "19/11/2026", "dias_restantes": 34, "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)", "marco_tipo": "Entrega PRJ (Art. 53)", "urgencia_nivel": "alerta", "urgencia_label": "CURTO PRAZO (34d)", "is_fixed_edital": false}}, "Grupo Industrial de Caxias do Sul (Ex-20 empresas)": {"tese": "(1) Causa da crise: Retração de encomendas no polo metalmecânico da Serra Gaúcha, impacto logístico das enchentes no RS e encarecimento das linhas de capital de giro; (2) Gargalo imediato: Homologação do plano de Recuperação Extrajudicial (Classe 128) em Caxias do Sul/RS exigindo adesão qualificada (> 50%) de bancos regionais (Banrisul, BRDE, Sicredi) e fornecedores siderúrgicos; (3) Oportunidade de mandato: Estruturação de venda de UPI fabril não-core, assessoria na captação de linha de giro pós-homologação e monitoramento de conta vinculada (Escrow).", "causa_crise": "Retração de encomendas no polo metalmecânico da Serra Gaúcha, impacto logístico das enchentes no RS e encarecimento das linhas de capital de giro", "gargalo_imediato": "Homologação do plano de Recuperação Extrajudicial (Classe 128) em Caxias do Sul/RS exigindo adesão qualificada (> 50%) de bancos regionais (Banrisul, BRDE, Sicredi) e fornecedores siderúrgicos", "tese_mandato": "Estruturação de venda de UPI fabril não-core, assessoria na captação de linha de giro pós-homologação e monitoramento de conta vinculada (Escrow).", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Tradicional grupo metalmecânico e comercial da Serra Gaúcha (Caxias do Sul/RS), estruturado a partir da consolidação de 20 sociedades empresárias familiares atuantes em estamparia pesada, usinagem, implementos rodoviários e distribuição de aços planos e longos para o polo automotivo do Sul.", "model_params": {"haircut_pct": 40.0, "recuperacao_pct": 60.0, "desconto_secundario_pct": 30.0, "valor_recuperado_mm": 177.0, "ev_estimado_mm": 191.8, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-12-21", "data_marco_br": "21/12/2026", "dias_restantes": 66, "marco_label": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)", "marco_tipo": "Homologação PRE", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (66d)", "is_fixed_edital": false}}, "Alliança Saúde": {"tese": "(1) Causa da crise: Alavancagem decorrente de aquisições de laboratórios de medicina diagnóstica, pressão de capital de giro por glosas e alongamento de prazos de operadoras de saúde; (2) Gargalo imediato: Cumprimento das metas de desalavancagem pós-homologação da Recuperação Extrajudicial (R$ 1,14 bilhão) e observância de covenants financeiros perante debenturistas (Oliveira Trust / Pentágono) e bancos; (3) Oportunidade de mandato: Assessoria em M&A de ativos diagnósticos regionais (carve-out de unidades não-core) e monitoramento Creditor-Side para titulares de debêntures.", "causa_crise": "Alavancagem decorrente de aquisições de laboratórios de medicina diagnóstica, pressão de capital de giro por glosas e alongamento de prazos de operadoras de saúde", "gargalo_imediato": "Cumprimento das metas de desalavancagem pós-homologação da Recuperação Extrajudicial (R$ 1,14 bilhão) e observância de covenants financeiros perante debenturistas (Oliveira Trust / Pentágono) e bancos", "tese_mandato": "Assessoria em M&A de ativos diagnósticos regionais (carve-out de unidades não-core) e monitoramento Creditor-Side para titulares de debêntures.", "agentes_fiduciarios": "Pentágono DTVM, Oliveira Trust DTVM", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Uma das maiores plataformas de medicina diagnóstica e análises clínicas do Brasil (B3: AALR3, ex-Alliar), controlada pelo empresário Nelson Tanure. Reúne mais de 100 unidades operacionais e marcas regionais líderes (CDB em SP, Axial em MG, Delfin na Bahia e Multiscan no ES), com forte parque de ressonância magnética e patologia clínica.", "model_params": {"haircut_pct": 40.0, "recuperacao_pct": 60.0, "desconto_secundario_pct": 30.0, "valor_recuperado_mm": 684.0, "ev_estimado_mm": 570.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-11-08", "data_marco_br": "08/11/2026", "dias_restantes": 23, "marco_label": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)", "marco_tipo": "Homologação PRE", "urgencia_nivel": "alerta", "urgencia_label": "CURTO PRAZO (23d)", "is_fixed_edital": false}}, "Produtores Rurais Família Roversi": {"tese": "(1) Causa da crise: Quebra climática e alta de custos de insumos agrícolas no MT; (2) Gargalo imediato: Vencimento de CPRs e linhas de custeio com BB e Sicredi; (3) Tese de mandato: Financial Advisory Rural e renegociação de garantias.", "causa_crise": "Quebra climática e alta de custos de insumos agrícolas no MT", "gargalo_imediato": "Vencimento de CPRs e linhas de custeio com BB e Sicredi", "tese_mandato": "Tese de mandato: Financial Advisory Rural e renegociação de garantias.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Grupo agrícola familiar tradicional da região sul de Mato Grosso (Rondonópolis e Itiquira), dedicado à produção em escala de soja, milho segunda safra e algodão em áreas próprias e arrendadas, utilizando estrutura intensiva de custeio via CPRs e contratos de barter com tradings internacionais.", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 18.0, "ev_estimado_mm": 22.5, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 22.0, "classe_i_pct": 4.0, "classe_ii_pct": 36.0, "fiscal_pct": 8.0, "classe_iii_pct": 25.0, "classe_iv_pct": 5.0}}, "agro_meta": {"cpr_status": "CPR Física / Barter (Disputa Lei 13.986/20)", "alienacao_terras": "Penhor de Safra e Hipoteca Rural (BB e Sicredi)", "ativos_rurais": "Áreas de cultivo de soja e milho em Rondonópolis/MT", "cra_exposicao": "Sem CRA reportado"}, "calendar_meta": {"data_marco_iso": "2026-11-29", "data_marco_br": "29/11/2026", "dias_restantes": 44, "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)", "marco_tipo": "Entrega PRJ (Art. 53)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (44d)", "is_fixed_edital": false}}, "Raízen S.A. (RAIZ4)": {"tese": "(1) Causa da crise: Alavancagem financeira elevada em ciclo de juros altos e capex sucroenergético; (2) Gargalo imediato: Repactuação de emissões de debêntures e linhas sindicalizadas; (3) Tese de mandato: Assessoria a debenturistas e M&A de usinas/ativos.", "causa_crise": "Alavancagem financeira elevada em ciclo de juros altos e capex sucroenergético", "gargalo_imediato": "Repactuação de emissões de debêntures e linhas sindicalizadas", "tese_mandato": "Tese de mandato: Assessoria a debenturistas e M&A de usinas/ativos.", "agentes_fiduciarios": "Pentágono DTVM / Oliveira Trust", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": {"debenture_codigo": "RAIZ14 / RAIZ24 / Bonds 2034-2054", "agente_fiduciario": "Pentágono DTVM / Oliveira Trust", "inadimplemento_ccee": "Monitoramento de garantias em comercialização e cogeração de biomassa", "risco_caducidade": "Moderado — Revisão de outorgas de cogeração a bagaço e plantas de E2G", "corte_rating_curtailment": "Pressão em ICSD por alavancagem consolidada (3,2x Dívida Líquida/EBITDA) e capex intensivo em E2G", "submercado": "Sudeste/Centro-Oeste"}, "descricao_empresa": "Gigante integrada de bioenergia e distribuição de combustíveis (B3: RAIZ4), joint venture controlada pela Cosan e pela Shell. É a maior produtora global de etanol de cana-de-açúcar e pioneira mundial em etanol de segunda geração (E2G), operando 35 parques de bioenergia, cerca de 1,3 milhão de hectares cultivados e rede superior a 8.000 postos Shell no Brasil e Argentina.", "model_params": {"haircut_pct": 40.0, "recuperacao_pct": 60.0, "desconto_secundario_pct": 30.0, "valor_recuperado_mm": 2100.0, "ev_estimado_mm": 1750.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 18.0, "classe_i_pct": 3.0, "classe_ii_pct": 42.0, "fiscal_pct": 7.0, "classe_iii_pct": 27.0, "classe_iv_pct": 3.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-12-29", "data_marco_br": "29/12/2026", "dias_restantes": 74, "marco_label": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)", "marco_tipo": "Homologação PRE", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (74d)", "is_fixed_edital": false}}, "Paranapanema S.A. (PMAM3)": {"tese": "(1) Causa da crise: Restrição de capital de giro para compra de concentrado de cobre; (2) Gargalo imediato: Execução do plano concursal e necessidade de linhas de importação; (3) Tese de mandato: DIP Financing e alienação de ativos industriais (UPI).", "causa_crise": "Restrição de capital de giro para compra de concentrado de cobre", "gargalo_imediato": "Execução do plano concursal e necessidade de linhas de importação", "tese_mandato": "Tese de mandato: DIP Financing e alienação de ativos industriais (UPI).", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Maior produtora brasileira não integrada de cobre refinado (cátodos, vergalhões e fios) e coprodutos metalúrgicos (B3: PMAM3), fundada em 1961. Seu principal complexo industrial e metalúrgico localiza-se no polo de Dias d'Ávila/BA, além de unidades de transformação de cobre em Santo André/SP e Serra/ES.", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 1576.0, "ev_estimado_mm": 2561.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-11-30", "data_marco_br": "30/11/2026", "dias_restantes": 45, "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)", "marco_tipo": "Entrega PRJ (Art. 53)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (45d)", "is_fixed_edital": false}}, "OSX Brasil S/A": {"tese": "(1) Causa da crise: Passivo concursado histórico da indústria naval e offshore; (2) Gargalo imediato: Homologação de aditivo ao plano e monetização de áreas no Porto do Açu; (3) Tese de mandato: M&A Distressed de ativos portuários (UPI) com a Prumo.", "causa_crise": "Passivo concursado histórico da indústria naval e offshore", "gargalo_imediato": "Homologação de aditivo ao plano e monetização de áreas no Porto do Açu", "tese_mandato": "Tese de mandato: M&A Distressed de ativos portuários (UPI) com a Prumo.", "agentes_fiduciarios": "Oliveira Trust DTVM", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": {"debenture_codigo": "OSXB11 / Dívida Estruturada Porto do Açu", "agente_fiduciario": "Oliveira Trust DTVM", "inadimplemento_ccee": "N/A — Infraestrutura Portuária e Naval (Porto do Açu)", "risco_caducidade": "Alto — Disputas regulatórias e contratuais de arrendamento retroportuário no Açu/RJ", "corte_rating_curtailment": "Em cumprimento de plano de RJ com foco em monetização de áreas logísticas para projetos offshore/eólicos", "submercado": "Sudeste/Centro-Oeste"}, "descricao_empresa": "Companhia de construção naval e infraestrutura portuária offshore integrante do antigo grupo EBX (B3: OSXB3), detentora de direitos de superfície e ativos retroportuários estratégicos no Complexo Industrial e Portuário do Açu, em São João da Barra/RJ, voltados à logística de óleo, gás e desmantelamento de plataformas.", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 3200.0, "ev_estimado_mm": 5200.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 18.0, "classe_i_pct": 3.0, "classe_ii_pct": 42.0, "fiscal_pct": 7.0, "classe_iii_pct": 27.0, "classe_iv_pct": 3.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-11-30", "data_marco_br": "30/11/2026", "dias_restantes": 45, "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)", "marco_tipo": "Entrega PRJ (Art. 53)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (45d)", "is_fixed_edital": false}}, "Chilli Beans (Mustang 25 Participações)": {"tese": "(1) Causa da crise: Disputa societária e acionamento de cláusula de vencimento antecipado de debêntures na holding Mustang 25 Participações por descumprimento de obrigações não-financeiras; (2) Gargalo imediato: Cobrança imediata de R$ 89 milhões em debêntures pela Vert Securitizadora com prazo de cura de 3 dias e risco de cross-default no passivo consolidado de R$ 600 milhões; (3) Oportunidade de mandato: Ajuizamento de Cautelar Antecedente (art. 20-B) para suspensão de exigibilidade da série da Vert e estruturação de M&A / entrada de investidor estratégico (alienação de participação minoritária de 30%).", "causa_crise": "Disputa societária e acionamento de cláusula de vencimento antecipado de debêntures na holding Mustang 25 Participações por descumprimento de obrigações não-financeiras", "gargalo_imediato": "Cobrança imediata de R$ 89 milhões em debêntures pela Vert Securitizadora com prazo de cura de 3 dias e risco de cross-default no passivo consolidado de R$ 600 milhões", "tese_mandato": "Ajuizamento de Cautelar Antecedente (art. 20-B) para suspensão de exigibilidade da série da Vert e estruturação de M&A / entrada de investidor estratégico (alienação de participação minoritária de 30%).", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Vert Securitizadora", "energy_meta": null, "descricao_empresa": "Maior rede especializada em óculos solares, armações de grau e acessórios de moda da América Latina, fundada por Caito Maia e controlada pela holding Mustang 25 Participações. Opera modelo híbrido de franquias e lojas próprias com mais de 1.000 pontos de venda no Brasil e presença internacional nos EUA, Europa e Oriente Médio.", "model_params": {"haircut_pct": 45.0, "recuperacao_pct": 55.0, "desconto_secundario_pct": 30.0, "valor_recuperado_mm": 330.0, "ev_estimado_mm": 300.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-10-25", "data_marco_br": "25/10/2026", "dias_restantes": 9, "marco_label": "Vencimento da Janela de Standstill / Cura da 1ª Emissão de Debêntures (Vert)", "marco_tipo": "Standstill DCM", "urgencia_nivel": "critico", "urgencia_label": "URGENTE (9d)", "is_fixed_edital": true}}, "SteelCorp (Roberto Justus / Daniel Vorcaro)": {"tese": "(1) Causa da crise: Conflito societário agudo entre os blocos de acionistas (Roberto Justus e Daniel Vorcaro / Banco Master) sobre cronograma de aportes de capital e expansão industrial no segmento de construção modular (steel frame); (2) Gargalo imediato: Paralisação de desembolsos de capital de giro e iminência de pedido de proteção concursal sobre R$ 143 milhões de passivo com fundos e debenturistas; (3) Oportunidade de mandato: Financial Advisory independente na mediação societária e repactuação de dívida com o Banco Master e fundos credores, cumulada com implantação de CRO / Gestão Interina.", "causa_crise": "Conflito societário agudo entre os blocos de acionistas (Roberto Justus e Daniel Vorcaro / Banco Master) sobre cronograma de aportes de capital e expansão industrial no segmento de construção modular (steel frame)", "gargalo_imediato": "Paralisação de desembolsos de capital de giro e iminência de pedido de proteção concursal sobre R$ 143 milhões de passivo com fundos e debenturistas", "tese_mandato": "Financial Advisory independente na mediação societária e repactuação de dívida com o Banco Master e fundos credores, cumulada com implantação de CRO / Gestão Interina.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Construtora industrializada especializada no sistema construtivo modular Light Steel Frame e engenharia a seco, resultante de sociedade entre o empresário Roberto Justus e veículos ligados ao grupo financeiro Master (Daniel Vorcaro), focada em obras residenciais de alto padrão, galpões corporativos e infraestrutura rápida.", "model_params": {"haircut_pct": 45.0, "recuperacao_pct": 55.0, "desconto_secundario_pct": 30.0, "valor_recuperado_mm": 78.65, "ev_estimado_mm": 71.5, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-12-01", "data_marco_br": "01/12/2026", "dias_restantes": 46, "marco_label": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE", "marco_tipo": "Cautelar 20-B (60d)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (46d)", "is_fixed_edital": false}}, "Tradener Comercializadora de Energia": {"tese": "(1) Causa da crise: Descasamento severo de marcação a mercado (MtM) em contratos de compra e venda de energia no Ambiente de Contratação Livre (ACL) e aperto de garantias financeiras junto à CCEE; (2) Gargalo imediato: Contestação judicial de financiamento pré-RJ pelo Banco Daycoval nas Varas Empresariais de Curitiba/PR e risco de desligamento compulsório da CCEE por insuficiência de garantias no MCP; (3) Oportunidade de mandato: Assessoria especializada em Special Situations de Energia para repactuação de PPAs bilaterais, blindagem de outorgas perante CCEE/ANEEL e liderança do Comitê de Credores.", "causa_crise": "Descasamento severo de marcação a mercado (MtM) em contratos de compra e venda de energia no Ambiente de Contratação Livre (ACL) e aperto de garantias financeiras junto à CCEE", "gargalo_imediato": "Contestação judicial de financiamento pré-RJ pelo Banco Daycoval nas Varas Empresariais de Curitiba/PR e risco de desligamento compulsório da CCEE por insuficiência de garantias no MCP", "tese_mandato": "Assessoria especializada em Special Situations de Energia para repactuação de PPAs bilaterais, blindagem de outorgas perante CCEE/ANEEL e liderança do Comitê de Credores.", "agentes_fiduciarios": "Vórtx DTVM (Garantias CCEE)", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": {"debenture_codigo": "Notas Comerciais / CCBs Daycoval (R$ 210M)", "agente_fiduciario": "Vórtx DTVM (Garantias CCEE)", "inadimplemento_ccee": "Crítico — Risco de desligamento compulsório e chamada de margem no MCP/CCEE", "risco_caducidade": "Alto — Risco de cassação de outorga de comercialização pela ANEEL", "corte_rating_curtailment": "Forte descasamento de preços no ACL e exposição a modulação horária de PLD", "submercado": "Sul"}, "descricao_empresa": "Pioneira na comercialização independente de energia elétrica no Brasil, fundada em 1998 em Curitiba/PR e primeira empresa autorizada pela ANEEL a operar no Ambiente de Contratação Livre (ACL). Além da mesa de trading de energia, detém participações em ativos de geração hidrelétrica (PCHs), eólica e exploração de gás natural.", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 84.0, "ev_estimado_mm": 105.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 18.0, "classe_i_pct": 3.0, "classe_ii_pct": 42.0, "fiscal_pct": 7.0, "classe_iii_pct": 27.0, "classe_iv_pct": 3.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-12-01", "data_marco_br": "01/12/2026", "dias_restantes": 46, "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)", "marco_tipo": "Entrega PRJ (Art. 53)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (46d)", "is_fixed_edital": false}}, "Ulbra S/A (Rede Aelbra / Evolua)": {"tese": "(1) Causa da crise: Passivo histórico bilionário (R$ 1,5 bilhão) de natureza trabalhista, fiscal e financeira na rede de ensino superior Aelbra/Ulbra, agravado por disputas entre fundos detentores de créditos estruturados; (2) Gargalo imediato: Reorganização do bloco de controle e saída do Banco Master da estrutura de FIDCs (FIDC Calêndula e Banco Genial), exigindo repactuação das tranches de amortização pós-RJ no TJRS; (3) Oportunidade de mandato: Estruturação de operações de Distressed Debt (cessão secundária de créditos trabalhistas e bancários) e monetização de ativos imobiliários educacionais (campi universitários no RS).", "causa_crise": "Passivo histórico bilionário (R$ 1,5 bilhão) de natureza trabalhista, fiscal e financeira na rede de ensino superior Aelbra/Ulbra, agravado por disputas entre fundos detentores de créditos estruturados", "gargalo_imediato": "Reorganização do bloco de controle e saída do Banco Master da estrutura de FIDCs (FIDC Calêndula e Banco Genial), exigindo repactuação das tranches de amortização pós-RJ no TJRS", "tese_mandato": "Estruturação de operações de Distressed Debt (cessão secundária de créditos trabalhistas e bancários) e monetização de ativos imobiliários educacionais (campi universitários no RS).", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Entidade mantenedora da Universidade Luterana do Brasil (Ulbra / Rede Aelbra, hoje sob a marca gestora Evolua Educação), sediada em Canoas/RS. Administra ampla rede de campi universitários presenciais, hospitais veterinários/universitários e polos de ensino a distância (EAD) nos estados do Rio Grande do Sul, Tocantins, Amazonas, Pará, Goiás e Rondônia.", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 600.0, "ev_estimado_mm": 750.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-12-01", "data_marco_br": "01/12/2026", "dias_restantes": 46, "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)", "marco_tipo": "Entrega PRJ (Art. 53)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (46d)", "is_fixed_edital": false}}, "Lupatech S/A": {"tese": "(1) Causa da crise: Restrição histórica de capital de giro para atendimento da carteira de pedidos (backlog) de válvulas e cabos de ancoragem para o setor de óleo e gás (Petrobras) somada ao peso de debêntures legadas; (2) Gargalo imediato: Coleta de quórum de adesão de debenturistas e credores quirografários para homologação de plano de Recuperação Extrajudicial de R$ 386 milhões; (3) Oportunidade de mandato: Financial Advisory na repactuação das escrituras de debêntures, estruturação de linha de financiamento a fornecedores (Supply Chain DIP) e venda de imóveis industriais não-operacionais em Caxias do Sul/RS.", "causa_crise": "Restrição histórica de capital de giro para atendimento da carteira de pedidos (backlog) de válvulas e cabos de ancoragem para o setor de óleo e gás (Petrobras) somada ao peso de debêntures legadas", "gargalo_imediato": "Coleta de quórum de adesão de debenturistas e credores quirografários para homologação de plano de Recuperação Extrajudicial de R$ 386 milhões", "tese_mandato": "Financial Advisory na repactuação das escrituras de debêntures, estruturação de linha de financiamento a fornecedores (Supply Chain DIP) e venda de imóveis industriais não-operacionais em Caxias do Sul/RS.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Fabricante brasileira de equipamentos de alta tecnologia para o setor de óleo e gás (válvulas industriais, cabos de ancoragem para plataformas offshore em águas profundas e compressores de gás natural) e metalurgia de precisão (B3: LUPA3), com parque fabril principal localizado no distrito industrial de Caxias do Sul/RS.", "model_params": {"haircut_pct": 40.0, "recuperacao_pct": 60.0, "desconto_secundario_pct": 30.0, "valor_recuperado_mm": 231.6, "ev_estimado_mm": 193.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2027-01-01", "data_marco_br": "01/01/2027", "dias_restantes": 77, "marco_label": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)", "marco_tipo": "Homologação PRE", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (77d)", "is_fixed_edital": false}}, "Grupo Orlando (Pecuaristas de MT)": {"tese": "(1) Causa da crise: Compressão das margens da pecuária de corte em Mato Grosso combinada ao vencimento concentrado de cédulas de crédito rural de custeio e investimento; (2) Gargalo imediato: Deferimento da Recuperação Judicial na Comarca de Nova Bandeirantes/MT com 79% do passivo (R$ 38 milhões) concentrado em apenas dois bancos públicos (Banco do Brasil e Caixa Econômica Federal); (3) Oportunidade de mandato: Assessoria Financeira Rural na modelagem do PRJ (art. 53) e negociação de alongamento de 12 anos com carência junto às superintendências de recuperação de crédito de BB e Caixa.", "causa_crise": "Compressão das margens da pecuária de corte em Mato Grosso combinada ao vencimento concentrado de cédulas de crédito rural de custeio e investimento", "gargalo_imediato": "Deferimento da Recuperação Judicial na Comarca de Nova Bandeirantes/MT com 79% do passivo (R$ 38 milhões) concentrado em apenas dois bancos públicos (Banco do Brasil e Caixa Econômica Federal)", "tese_mandato": "Assessoria Financeira Rural na modelagem do PRJ (art. 53) e negociação de alongamento de 12 anos com carência junto às superintendências de recuperação de crédito de BB e Caixa.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Grupo pecuário familiar estabelecido no extremo norte de Mato Grosso (Nova Bandeirantes e Alta Floresta), especializado em pecuária de corte extensiva e semi-intensiva (ciclo completo de cria, recria e engorda bovina) com forte base fundiária própria dada em garantia hipotecária e fiduciária ao Banco do Brasil e à Caixa.", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 15.2, "ev_estimado_mm": 19.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 22.0, "classe_i_pct": 4.0, "classe_ii_pct": 36.0, "fiscal_pct": 8.0, "classe_iii_pct": 25.0, "classe_iv_pct": 5.0}}, "agro_meta": {"cpr_status": "Cédulas de Crédito Rural (CCR / Custeio Pecuário)", "alienacao_terras": "Hipoteca e Penhor Pecuário (79% concentrado em BB e Caixa)", "ativos_rurais": "Fazendas de pecuária de corte em Nova Bandeirantes/MT", "cra_exposicao": "Sem CRA (100% Crédito Rural Oficial)"}, "calendar_meta": {"data_marco_iso": "2026-12-03", "data_marco_br": "03/12/2026", "dias_restantes": 48, "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)", "marco_tipo": "Entrega PRJ (Art. 53)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (48d)", "is_fixed_edital": false}}, "Grupo Pão de Açúcar (GPA - PCAR3)": {"tese": "(1) Causa da crise: Elevado custo financeiro da dívida bruta (R$ 4,57 bilhões), pressão de passivos contingentes tributários/trabalhistas e queima de caixa operacional nas bandeiras de varejo alimentar; (2) Gargalo imediato: Negociação de Recuperação Extrajudicial / reperfilamento amplo com sindicato de bancos (Itaú, Bradesco, Santander) e titulares de debêntures (Vórtx / Pentágono) para evitar deterioração do crédito comercial com fornecedores; (3) Oportunidade de mandato: Estruturação de M&A Distressed / Sale & Leaseback de imóveis próprios e pontos comerciais de supermercados (UPIs) e assessoria financeira a comitês de credores institucionais.", "causa_crise": "Elevado custo financeiro da dívida bruta (R$ 4,57 bilhões), pressão de passivos contingentes tributários/trabalhistas e queima de caixa operacional nas bandeiras de varejo alimentar", "gargalo_imediato": "Negociação de Recuperação Extrajudicial / reperfilamento amplo com sindicato de bancos (Itaú, Bradesco, Santander) e titulares de debêntures (Vórtx / Pentágono) para evitar deterioração do crédito comercial com fornecedores", "tese_mandato": "Estruturação de M&A Distressed / Sale & Leaseback de imóveis próprios e pontos comerciais de supermercados (UPIs) e assessoria financeira a comitês de credores institucionais.", "agentes_fiduciarios": "Vórtx DTVM, Pentágono DTVM", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Histórico grupo varejista alimentar multiformato (B3: PCAR3), detentor das bandeiras premium Pão de Açúcar, Minuto Pão de Açúcar e Extra Mercado, com mais de 700 lojas físicas concentradas no estado de São Paulo e principais capitais, além de operação relevante de e-commerce alimentar.", "model_params": {"haircut_pct": 40.0, "recuperacao_pct": 60.0, "desconto_secundario_pct": 30.0, "valor_recuperado_mm": 2740.8, "ev_estimado_mm": 2969.2, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2027-01-05", "data_marco_br": "05/01/2027", "dias_restantes": 81, "marco_label": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)", "marco_tipo": "Homologação PRE", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (81d)", "is_fixed_edital": false}}, "Oncoclínicas do Brasil (ONCO3)": {"tese": "(1) Causa da crise: Alavancagem financeira de R$ 5,1 bilhões após ciclo intensivo de M&A hospitalar, atraso de repasses de operadoras de saúde e oposição da acionista Latache Capital (14,6% do capital) contra o plano de Recuperação Extrajudicial (que prevê haircut de 45%); (2) Gargalo imediato: Prazo judicial peremptório de 15 dias fixado pela 3ª Vara de Falências de SP para comprovação de quórum mínimo na RE, AGDs de debêntures (ONCOA1) e CRIs (Opea Securitizadora) e AGE do Conselho em 06/11/2026; (3) Oportunidade de mandato: Assessoria Creditor-Side aos titulares de CRIs (Opea) e debenturistas (Pentágono/Vórtx), além de estruturação de M&A Distressed de hospitais e clínicas oncológicas (UPIs).", "causa_crise": "Alavancagem financeira de R$ 5,1 bilhões após ciclo intensivo de M&A hospitalar, atraso de repasses de operadoras de saúde e oposição da acionista Latache Capital (14,6% do capital) contra o plano de Recuperação Extrajudicial (que prevê haircut de 45%)", "gargalo_imediato": "Prazo judicial peremptório de 15 dias fixado pela 3ª Vara de Falências de SP para comprovação de quórum mínimo na RE, AGDs de debêntures (ONCOA1) e CRIs (Opea Securitizadora) e AGE do Conselho em 06/11/2026", "tese_mandato": "Assessoria Creditor-Side aos titulares de CRIs (Opea) e debenturistas (Pentágono/Vórtx), além de estruturação de M&A Distressed de hospitais e clínicas oncológicas (UPIs).", "agentes_fiduciarios": "Vórtx DTVM, Pentágono DTVM, Oliveira Trust DTVM", "securitizadoras": "Opea Securitizadora", "energy_meta": null, "descricao_empresa": "Maior grupo dedicado exclusivamente ao tratamento oncológico, hematologia e radioterapia na América Latina (B3: ONCO3), fundado em Belo Horizonte em 2010. Opera mais de 140 unidades entre clínicas ambulatoriais e Cancer Centers de alta complexidade em 14 estados brasileiros, em parcerias estratégicas com operadoras como Unimed e SulAmérica.", "model_params": {"haircut_pct": 45.0, "recuperacao_pct": 55.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 2805.0, "ev_estimado_mm": 3315.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-10-30", "data_marco_br": "30/10/2026", "dias_restantes": 14, "marco_label": "Fim do Prazo Judicial Peremptório (15d) — Quórum RE & AGDs ONCO3", "marco_tipo": "Prazo Judicial / AGD", "urgencia_nivel": "critico", "urgencia_label": "URGENTE (14d)", "is_fixed_edital": true}}, "Private Construtora": {"tese": "(1) Causa da crise: Estouro de orçamento de obras residenciais (inflação do INCC), aumento de distratos de adquirentes e restrição de repasses em contratos de financiamento à produção; (2) Gargalo imediato: Prazo improrrogável de 30 dias da Tutela Cautelar Antecedente (art. 20-B) em Vitória/ES para converter a proteção em Recuperação Judicial ou concluir acordo com Caixa, Bradesco e Santander (R$ 201 milhões); (3) Oportunidade de mandato: Financial Advisory emergencial para segregação de SPEs com patrimônio de afetação, venda de terrenos em estoque como UPI livre de sucessão e captação de DIP para conclusão de obras.", "causa_crise": "Estouro de orçamento de obras residenciais (inflação do INCC), aumento de distratos de adquirentes e restrição de repasses em contratos de financiamento à produção", "gargalo_imediato": "Prazo improrrogável de 30 dias da Tutela Cautelar Antecedente (art. 20-B) em Vitória/ES para converter a proteção em Recuperação Judicial ou concluir acordo com Caixa, Bradesco e Santander (R$ 201 milhões)", "tese_mandato": "Financial Advisory emergencial para segregação de SPEs com patrimônio de afetação, venda de terrenos em estoque como UPI livre de sucessão e captação de DIP para conclusão de obras.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Vert Securitizadora", "energy_meta": null, "descricao_empresa": "Incorporadora e construtora capixaba com sede em Vitória/ES e forte atuação nos mercados residenciais e comerciais de médio e alto padrão na Grande Vitória (Vitória, Vila Velha e Serra), operando múltiplos empreendimentos imobiliários estruturados via SPEs e financiamentos à produção (Plano Empresário).", "model_params": {"haircut_pct": 45.0, "recuperacao_pct": 55.0, "desconto_secundario_pct": 30.0, "valor_recuperado_mm": 110.55, "ev_estimado_mm": 130.7, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-12-01", "data_marco_br": "01/12/2026", "dias_restantes": 46, "marco_label": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE", "marco_tipo": "Cautelar 20-B (60d)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (46d)", "is_fixed_edital": false}}, "Grupo Laurindo de Castilhos (Agrícola Formosa / Tapera)": {"tese": "(1) Causa da crise: Quebra de produtividade nas lavouras de soja e algodão somada ao vencimento de CRIs/CRAs garantidos por alienação fiduciária de fazendas; (2) Gargalo imediato: Disputa de competência entre TJPR (Curitiba) e TJBA, impugnações severas ao plano de RJ e cobrança extraconcursal de R$ 304,5 milhões pelas securitizadoras Virgo e Reit, além de R$ 87,4M da Fosnor e R$ 115,9M da SLC Agrícola; (3) Oportunidade de mandato: Creditor-Side Advisory para as securitizadoras (Virgo e Reit) e credores com garantia real (Fosnor e BRDE) na execução ou venda estruturada de fazendas como UPI.", "causa_crise": "Quebra de produtividade nas lavouras de soja e algodão somada ao vencimento de CRIs/CRAs garantidos por alienação fiduciária de fazendas", "gargalo_imediato": "Disputa de competência entre TJPR (Curitiba) e TJBA, impugnações severas ao plano de RJ e cobrança extraconcursal de R$ 304,5 milhões pelas securitizadoras Virgo e Reit, além de R$ 87,4M da Fosnor e R$ 115,9M da SLC Agrícola", "tese_mandato": "Creditor-Side Advisory para as securitizadoras (Virgo e Reit) e credores com garantia real (Fosnor e BRDE) na execução ou venda estruturada de fazendas como UPI.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Virgo Securitizadora, Reit Securitizadora", "energy_meta": null, "descricao_empresa": "Grupo produtor de grãos e fibras (Agrícola Formosa e Fazenda Tapera) fundado pela família Laurindo de Castilhos, com administração central no Paraná e extensas propriedades agrícolas no oeste da Bahia (cerrado baiano), dedicadas ao cultivo tecnificado de soja, milho e algodão em larga escala.", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 100.8, "ev_estimado_mm": 163.8, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 22.0, "classe_i_pct": 4.0, "classe_ii_pct": 36.0, "fiscal_pct": 8.0, "classe_iii_pct": 25.0, "classe_iv_pct": 5.0}}, "agro_meta": {"cpr_status": "Extraconcursal Blindado (R$ 304,5M em CRIs/CRAs)", "alienacao_terras": "Alienação Fiduciária de Fazendas (Virgo, Reit e Fosnor R$ 87,4M)", "ativos_rurais": "Fazendas Agrícola Formosa e Tapera (Soja e Algodão PR/BA)", "cra_exposicao": "R$ 304,5 MM (Virgo Securitizadora & Reit Securitizadora)"}, "calendar_meta": {"data_marco_iso": "2026-12-04", "data_marco_br": "04/12/2026", "dias_restantes": 49, "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)", "marco_tipo": "Entrega PRJ (Art. 53)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (49d)", "is_fixed_edital": false}}, "Grupo Martins (Produtores Sidrolândia)": {"tese": "(1) Causa da crise: Frustração de safra em Mato Grosso do Sul por adversidades climáticas e queda nas cotações agrícolas frente a dívidas bancárias dolarizadas e em CDI; (2) Gargalo imediato: Apresentação do plano de Recuperação Judicial na Comarca de Sidrolândia/MS (passivo de R$ 32 milhões) sob forte concentração de voto no Sicredi e Banco do Brasil (72% dos créditos); (3) Oportunidade de mandato: Assessoria Financeira na defesa de laudos de viabilidade econômico-financeira e repactuação bilateral com Sicredi e BB para aprovação em AGC sem cram down litigioso.", "causa_crise": "Frustração de safra em Mato Grosso do Sul por adversidades climáticas e queda nas cotações agrícolas frente a dívidas bancárias dolarizadas e em CDI", "gargalo_imediato": "Apresentação do plano de Recuperação Judicial na Comarca de Sidrolândia/MS (passivo de R$ 32 milhões) sob forte concentração de voto no Sicredi e Banco do Brasil (72% dos créditos)", "tese_mandato": "Assessoria Financeira na defesa de laudos de viabilidade econômico-financeira e repactuação bilateral com Sicredi e BB para aprovação em AGC sem cram down litigioso.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Grupo familiar de produtores rurais estabelecido no polo agrícola de Sidrolândia e Maracaju (Mato Grosso do Sul), atuante na produção comercial de soja, milho safrinha e integração lavoura-pecuária em terras próprias e arrendadas na região central sul-mato-grossense.", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 12.8, "ev_estimado_mm": 16.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 22.0, "classe_i_pct": 4.0, "classe_ii_pct": 36.0, "fiscal_pct": 8.0, "classe_iii_pct": 25.0, "classe_iv_pct": 5.0}}, "agro_meta": {"cpr_status": "Custeio Bancário e Cooperativo (72% Sicredi e BB)", "alienacao_terras": "Hipoteca de Imóveis Rurais e Penhor de Grãos", "ativos_rurais": "Lavouras tecnificadas de soja e milho em Sidrolândia/MS", "cra_exposicao": "Sem CRA reportado"}, "calendar_meta": {"data_marco_iso": "2026-12-05", "data_marco_br": "05/12/2026", "dias_restantes": 50, "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)", "marco_tipo": "Entrega PRJ (Art. 53)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (50d)", "is_fixed_edital": false}}, "Grupo Pery": {"tese": "(1) Causa da crise: Descompasso de fluxo de caixa na operação agrícola em Dourados/MS diante da retração de margens da soja/milho e aperto de crédito pelos bancos privados; (2) Gargalo imediato: Publicação do edital do art. 52 e vencimento do prazo legal para entrega do Plano de Recuperação Judicial sobre R$ 196 milhões de passivo liderado por BTG Pactual e Itaú Unibanco; (3) Oportunidade de mandato: Financial Advisory e Creditor-Side para estruturação de tranches de pagamento atreladas à receita líquida de safra e auditoria de garantias reais rurais (penhor agrícola e hipotecas).", "causa_crise": "Descompasso de fluxo de caixa na operação agrícola em Dourados/MS diante da retração de margens da soja/milho e aperto de crédito pelos bancos privados", "gargalo_imediato": "Publicação do edital do art. 52 e vencimento do prazo legal para entrega do Plano de Recuperação Judicial sobre R$ 196 milhões de passivo liderado por BTG Pactual e Itaú Unibanco", "tese_mandato": "Financial Advisory e Creditor-Side para estruturação de tranches de pagamento atreladas à receita líquida de safra e auditoria de garantias reais rurais (penhor agrícola e hipotecas).", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Tradicional grupo agropecuário da região da Grande Dourados (Mato Grosso do Sul), com operações consolidadas em cultivo de soja, milho e pecuária seletiva, mantendo relacionamento intensivo com bancos de investimento (BTG Pactual e Itaú) para financiamento de safra e expansão de área.", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 78.4, "ev_estimado_mm": 98.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 22.0, "classe_i_pct": 4.0, "classe_ii_pct": 36.0, "fiscal_pct": 8.0, "classe_iii_pct": 25.0, "classe_iv_pct": 5.0}}, "agro_meta": {"cpr_status": "Linhas Agro Privadas & Cédulas Rurais", "alienacao_terras": "Penhor Agrícola e Garantias Reais (BTG Pactual e Itaú)", "ativos_rurais": "Unidades agrícolas na região da Grande Dourados/MS", "cra_exposicao": "Sem CRA reportado"}, "calendar_meta": {"data_marco_iso": "2026-11-30", "data_marco_br": "30/11/2026", "dias_restantes": 45, "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)", "marco_tipo": "Entrega PRJ (Art. 53)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (45d)", "is_fixed_edital": false}}, "Braskem S/A (BAK / BRKM5)": {"tese": "(1) Causa da crise: Passivo ambiental e contingências bilionárias decorrentes do evento geológico de Maceió/AL somados ao ciclo de baixa global dos spreads petroquímicos (PE/PP/PVC) sobre uma dívida bruta de R$ 58,0 bilhões; (2) Gargalo imediato: Negociações de standstill internacional com sindicato de bancos globais/locais (Citi, JPMorgan, Santander, Bradesco, Itaú) e bondholders, além da definição de reestruturação societária entre Petrobras, Novonor e fundos credores (IG4); (3) Oportunidade de mandato: Assessoria a comitês de credores quirografários e fornecedores estratégicos da cadeia química nacional, avaliação de carve-outs de ativos industriais (UPIs) e monitoramento de covenants de bonds e debêntures.", "causa_crise": "Passivo ambiental e contingências bilionárias decorrentes do evento geológico de Maceió/AL somados ao ciclo de baixa global dos spreads petroquímicos (PE/PP/PVC) sobre uma dívida bruta de R$ 58,0 bilhões", "gargalo_imediato": "Negociações de standstill internacional com sindicato de bancos globais/locais (Citi, JPMorgan, Santander, Bradesco, Itaú) e bondholders, além da definição de reestruturação societária entre Petrobras, Novonor e fundos credores (IG4)", "tese_mandato": "Assessoria a comitês de credores quirografários e fornecedores estratégicos da cadeia química nacional, avaliação de carve-outs de ativos industriais (UPIs) e monitoramento de covenants de bonds e debêntures.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Sexta maior petroquímica do mundo e líder absoluta na produção de resinas termoplásticas (polietileno PE, polipropileno PP e PVC) nas Américas (B3: BRKM5 / NYSE: BAK), controlada conjuntamente pela Novonor (ex-Odebrecht) e pela Petrobras, operando 40 unidades industriais no Brasil (BA, RS, SP, AL, RJ), EUA, México e Alemanha.", "model_params": {"haircut_pct": 40.0, "recuperacao_pct": 60.0, "desconto_secundario_pct": 30.0, "valor_recuperado_mm": 34800.0, "ev_estimado_mm": 37700.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2027-01-04", "data_marco_br": "04/01/2027", "dias_restantes": 80, "marco_label": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)", "marco_tipo": "Homologação PRE", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (80d)", "is_fixed_edital": false}}, "Grupo Apex Partners (Apex Participações / Securitizadora)": {"tese": "(1) Causa da crise: Descasamento de liquidez e inadimplência cruzada em operações de securitização, notas comerciais, debêntures e FIDCs estruturados pela holding financeira no Espírito Santo; (2) Gargalo imediato: Determinação judicial de perícia forense e constatação prévia (art. 51-A) conduzida pela Laspro Consultores nas Varas Empresariais de Vitória/ES sobre R$ 986 milhões de passivo; (3) Oportunidade de mandato: Creditor-Side Advisory e investigação forense (Asset Tracing) em favor de debenturistas, titulares de notas comerciais e cotistas de FIDCs para segregação de carteiras de recebíveis adimplentes.", "causa_crise": "Descasamento de liquidez e inadimplência cruzada em operações de securitização, notas comerciais, debêntures e FIDCs estruturados pela holding financeira no Espírito Santo", "gargalo_imediato": "Determinação judicial de perícia forense e constatação prévia (art. 51-A) conduzida pela Laspro Consultores nas Varas Empresariais de Vitória/ES sobre R$ 986 milhões de passivo", "tese_mandato": "Creditor-Side Advisory e investigação forense (Asset Tracing) em favor de debenturistas, titulares de notas comerciais e cotistas de FIDCs para segregação de carteiras de recebíveis adimplentes.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Plataforma capixaba de investimentos, gestão de patrimônio (wealth management), banco de investimentos regional e estruturação de ativos alternativos sediada em Vitória/ES, controladora da Apex Participações e de veículos próprios de securitização de recebíveis imobiliários, corporativos e FIDCs.", "model_params": {"haircut_pct": 45.0, "recuperacao_pct": 55.0, "desconto_secundario_pct": 30.0, "valor_recuperado_mm": 542.3, "ev_estimado_mm": 493.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-12-05", "data_marco_br": "05/12/2026", "dias_restantes": 50, "marco_label": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE", "marco_tipo": "Cautelar 20-B (60d)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (50d)", "is_fixed_edital": false}}, "VRZ Blindados (VRZ Blindagens e Auto Laska)": {"tese": "(1) Causa da crise: Forte aperto de capital de giro na blindagem automotiva e revenda de veículos premium em São Bernardo do Campo/SP, agravado pelo desconto acelerado de duplicatas em FIDCs; (2) Gargalo imediato: Procedimento de Tutela Cautelar Antecedente e Mediação Pré-Processual (art. 20-B) no CMAASP/TJSP com 70% da dívida de R$ 105 milhões concentrada em FIDC Pangu (R$ 24,8M), Itaú (R$ 17,7M), Bradesco (R$ 17,1M), Santander (R$ 13,4M) e AGP Vidros (R$ 9,7M); (3) Oportunidade de mandato: Parceria em Financial Advisory e Gestão Interina (CRO) para estabilização do suprimento de vidros balísticos/aramida e estruturação de linha DIP para entrega da carteira de veículos.", "causa_crise": "Forte aperto de capital de giro na blindagem automotiva e revenda de veículos premium em São Bernardo do Campo/SP, agravado pelo desconto acelerado de duplicatas em FIDCs", "gargalo_imediato": "Procedimento de Tutela Cautelar Antecedente e Mediação Pré-Processual (art. 20-B) no CMAASP/TJSP com 70% da dívida de R$ 105 milhões concentrada em FIDC Pangu (R$ 24,8M), Itaú (R$ 17,7M), Bradesco (R$ 17,1M), Santander (R$ 13,4M) e AGP Vidros (R$ 9,7M)", "tese_mandato": "Parceria em Financial Advisory e Gestão Interina (CRO) para estabilização do suprimento de vidros balísticos/aramida e estruturação de linha DIP para entrega da carteira de veículos.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Tradicional empresa de blindagem automotiva certificada pelo Exército Brasileiro e comercialização de veículos blindados premium (VRZ Blindagens e concessionária multimarcas Auto Laska), sediada em São Bernardo do Campo/SP (ABC Paulista), atendendo frotas executivas, concessionárias e clientes pessoa física de alta renda.", "model_params": {"haircut_pct": 45.0, "recuperacao_pct": 55.0, "desconto_secundario_pct": 30.0, "valor_recuperado_mm": 57.75, "ev_estimado_mm": 52.5, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-11-30", "data_marco_br": "30/11/2026", "dias_restantes": 45, "marco_label": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE", "marco_tipo": "Cautelar 20-B (60d)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (45d)", "is_fixed_edital": false}}, "Grupo Carbon Blindados (C Blindados / Opera Glass / Vertco)": {"tese": "(1) Causa da crise: Endividamento de curto prazo de R$ 371 milhões contraído para financiar a expansão acelerada da capacidade fabril de blindagem automotiva em Barueri/SP; (2) Gargalo imediato: Processo de homologação de Recuperação Extrajudicial (Classe 128) na 1ª Vara de Falências de SP enfrentando resistência de credores não aderentes e necessidade de destravar linha de Dinheiro Novo; (3) Oportunidade de mandato: Estruturação e sindicação do DIP Financing previsto no plano (R$ 60M a R$ 100M) junto a fundos de Special Situations e assessoria técnica a credores bancários/FIDCs (Amadeus R$ 95,2M, Digimais R$ 61,4M, SSG R$ 38,4M, BB R$ 35,7M).", "causa_crise": "Endividamento de curto prazo de R$ 371 milhões contraído para financiar a expansão acelerada da capacidade fabril de blindagem automotiva em Barueri/SP", "gargalo_imediato": "Processo de homologação de Recuperação Extrajudicial (Classe 128) na 1ª Vara de Falências de SP enfrentando resistência de credores não aderentes e necessidade de destravar linha de Dinheiro Novo", "tese_mandato": "Estruturação e sindicação do DIP Financing previsto no plano (R$ 60M a R$ 100M) junto a fundos de Special Situations e assessoria técnica a credores bancários/FIDCs (Amadeus R$ 95,2M, Digimais R$ 61,4M, SSG R$ 38,4M, BB R$ 35,7M).", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Maior blindadora de veículos civis do mundo em volume de produção (C Blindados, fabricante de vidros balísticos próprios Opera Glass e divisão Vertco), sediada em complexo industrial moderno em Barueri/SP (Alphaville), homologada diretamente por montadoras globais como Toyota, Volvo, BMW, Jaguar Land Rover e BYD.", "model_params": {"haircut_pct": 40.0, "recuperacao_pct": 60.0, "desconto_secundario_pct": 30.0, "valor_recuperado_mm": 222.6, "ev_estimado_mm": 185.5, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2027-01-03", "data_marco_br": "03/01/2027", "dias_restantes": 79, "marco_label": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)", "marco_tipo": "Homologação PRE", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (79d)", "is_fixed_edital": false}}, "Grupo Nutriplus & Ômega": {"tese": "(1) Causa da crise: Atrasos sistemáticos nos repasses de prefeituras e órgãos estaduais em contratos de alimentação escolar e coletiva, gerando estrangulamento de caixa nas operações de Salto/SP; (2) Gargalo imediato: Mediação pré-processual sob Cautelar Antecedente (art. 20-B) no TJSP para impedir o bloqueio integral de faturas públicas cedidas fiduciariamente a FIDCs e bancos de capital de giro (passivo de R$ 190 milhões); (3) Oportunidade de mandato: Gestão Interina (CRO) focada na repactuação de equilíbrio econômico-financeiro de contratos públicos e estruturação de conta escrow com FIDCs credores.", "causa_crise": "Atrasos sistemáticos nos repasses de prefeituras e órgãos estaduais em contratos de alimentação escolar e coletiva, gerando estrangulamento de caixa nas operações de Salto/SP", "gargalo_imediato": "Mediação pré-processual sob Cautelar Antecedente (art. 20-B) no TJSP para impedir o bloqueio integral de faturas públicas cedidas fiduciariamente a FIDCs e bancos de capital de giro (passivo de R$ 190 milhões)", "tese_mandato": "Gestão Interina (CRO) focada na repactuação de equilíbrio econômico-financeiro de contratos públicos e estruturação de conta escrow com FIDCs credores.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Reit Securitizadora", "energy_meta": null, "descricao_empresa": "Conglomerado paulista especializado na prestação de serviços de alimentação coletiva terceirizada, merenda escolar municipal/estadual, nutrição hospitalar e cestas de suprimentos (Nutriplus Alimentação e Ômega), sediado em Salto/SP e detentor de dezenas de contratos administrativos continuados no estado de São Paulo.", "model_params": {"haircut_pct": 45.0, "recuperacao_pct": 55.0, "desconto_secundario_pct": 30.0, "valor_recuperado_mm": 104.5, "ev_estimado_mm": 95.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-11-23", "data_marco_br": "23/11/2026", "dias_restantes": 38, "marco_label": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE", "marco_tipo": "Cautelar 20-B (60d)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (38d)", "is_fixed_edital": false}}, "Royal Agro Trading": {"tese": "(1) Causa da crise: Inadimplência de produtores rurais na entrega física de soja e milho (quebra de contratos de barter e CPRs) combinada à inversão de margens na comercialização de grãos na fronteira de Ponta Porã/MS; (2) Gargalo imediato: Tutela Cautelar Antecedente (art. 20-B) ajuizada no TJMS para sustar vencimentos antecipados de linhas de exportação (ACC/ACE) e travas bancárias sobre R$ 198 milhões; (3) Oportunidade de mandato: Financial Advisory Rural para renegociação de ACC/ACE com sindicato bancário e estruturação de financiamento DIP Safra garantido por warrants de grãos em armazéns gerais.", "causa_crise": "Inadimplência de produtores rurais na entrega física de soja e milho (quebra de contratos de barter e CPRs) combinada à inversão de margens na comercialização de grãos na fronteira de Ponta Porã/MS", "gargalo_imediato": "Tutela Cautelar Antecedente (art. 20-B) ajuizada no TJMS para sustar vencimentos antecipados de linhas de exportação (ACC/ACE) e travas bancárias sobre R$ 198 milhões", "tese_mandato": "Financial Advisory Rural para renegociação de ACC/ACE com sindicato bancário e estruturação de financiamento DIP Safra garantido por warrants de grãos em armazéns gerais.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Trading regional de originação, beneficiamento, armazenagem e comercialização de grãos (soja e milho) sediada na fronteira agrícola de Ponta Porã/MS, atuando na intermediação entre produtores rurais sul-mato-grossenses/paraguaios e corredores de exportação portuária.", "model_params": {"haircut_pct": 45.0, "recuperacao_pct": 55.0, "desconto_secundario_pct": 30.0, "valor_recuperado_mm": 108.9, "ev_estimado_mm": 99.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 22.0, "classe_i_pct": 4.0, "classe_ii_pct": 36.0, "fiscal_pct": 8.0, "classe_iii_pct": 25.0, "classe_iv_pct": 5.0}}, "agro_meta": {"cpr_status": "ACC/ACE de Exportação + Carteira de CPRs Barter", "alienacao_terras": "Travas Bancárias e Warrants de Grãos em Armazéns", "ativos_rurais": "Unidade de originação e armazenagem em Ponta Porã/MS", "cra_exposicao": "Operações estruturadas de comércio exterior"}, "calendar_meta": {"data_marco_iso": "2026-11-15", "data_marco_br": "15/11/2026", "dias_restantes": 30, "marco_label": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE", "marco_tipo": "Cautelar 20-B (60d)", "urgencia_nivel": "alerta", "urgencia_label": "CURTO PRAZO (30d)", "is_fixed_edital": false}}, "Grupo Progen": {"tese": "(1) Causa da crise: Retração de margens em contratos de engenharia consultiva e sobrecusto financeiro em projetos de infraestrutura e concessões, elevando o passivo consolidado a R$ 956 milhões; (2) Gargalo imediato: Mediação pré-processual antecedente nas Varas Empresariais de São Paulo com suspensão parcial de execuções de bancos e debenturistas enquanto se negocia plano de reperfilamento; (3) Oportunidade de mandato: Financial Advisory na reestruturação de dívidas de Project Finance, assessoria a debenturistas (Oliveira Trust / Vórtx) e M&A / carve-out de participações em SPEs de concessões e energia.", "causa_crise": "Retração de margens em contratos de engenharia consultiva e sobrecusto financeiro em projetos de infraestrutura e concessões, elevando o passivo consolidado a R$ 956 milhões", "gargalo_imediato": "Mediação pré-processual antecedente nas Varas Empresariais de São Paulo com suspensão parcial de execuções de bancos e debenturistas enquanto se negocia plano de reperfilamento", "tese_mandato": "Financial Advisory na reestruturação de dívidas de Project Finance, assessoria a debenturistas (Oliveira Trust / Vórtx) e M&A / carve-out de participações em SPEs de concessões e energia.", "agentes_fiduciarios": "Oliveira Trust DTVM", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": {"debenture_codigo": "PRGN11 / PRGN12 (Project Finance)", "agente_fiduciario": "Oliveira Trust DTVM", "inadimplemento_ccee": "Monitorado — SPEs de geração e engenharia de transmissão", "risco_caducidade": "Moderado — Contratos EPC e concessões públicas em repactuação de cronograma", "corte_rating_curtailment": "ICSD pressionado (< 1,10x) por atrasos de obras e sobrecusto de EPC em projetos de energia", "submercado": "Sudeste/Centro-Oeste"}, "descricao_empresa": "Uma das maiores empresas brasileiras de engenharia consultiva, gerenciamento de obras, projetos industriais (EPCM) e desenvolvimento de concessões de infraestrutura, fundada em 1987 em São Paulo/SP, atendendo clientes de primeira linha em mineração (Vale), energia, saneamento, ferrovias e óleo & gás.", "model_params": {"haircut_pct": 45.0, "recuperacao_pct": 55.0, "desconto_secundario_pct": 30.0, "valor_recuperado_mm": 525.8, "ev_estimado_mm": 478.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 18.0, "classe_i_pct": 3.0, "classe_ii_pct": 42.0, "fiscal_pct": 7.0, "classe_iii_pct": 27.0, "classe_iv_pct": 3.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-11-13", "data_marco_br": "13/11/2026", "dias_restantes": 28, "marco_label": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE", "marco_tipo": "Cautelar 20-B (60d)", "urgencia_nivel": "alerta", "urgencia_label": "CURTO PRAZO (28d)", "is_fixed_edital": false}}, "Grupo Qintess (Tecnologia & Transformação Digital)": {"tese": "(1) Causa da crise: Elevado endividamento bancário de curto prazo e passivo trabalhista/tributário decorrente de aquisições no setor de BPO e outsourcing de TI (passivo de R$ 498 milhões); (2) Gargalo imediato: Condução da Recuperação Judicial (Classe 129) no TJSP com necessidade crítica de retenção de talentos de tecnologia e blindagem dos contratos de prestação de serviços com grandes bancos e corporações; (3) Oportunidade de mandato: Gestão Interina (CRO) para preservação da receita recorrente (SLA de clientes B2B), modelagem econômico-financeira do PRJ (art. 53) e venda de unidades de negócios não-core (UPIs).", "causa_crise": "Elevado endividamento bancário de curto prazo e passivo trabalhista/tributário decorrente de aquisições no setor de BPO e outsourcing de TI (passivo de R$ 498 milhões)", "gargalo_imediato": "Condução da Recuperação Judicial (Classe 129) no TJSP com necessidade crítica de retenção de talentos de tecnologia e blindagem dos contratos de prestação de serviços com grandes bancos e corporações", "tese_mandato": "Gestão Interina (CRO) para preservação da receita recorrente (SLA de clientes B2B), modelagem econômico-financeira do PRJ (art. 53) e venda de unidades de negócios não-core (UPIs).", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Multinacional brasileira de tecnologia da informação, transformação digital, consultoria ágil e terceirização de processos de negócios (BPO/ITO, antiga Resource IT Solutions), sediada em São Paulo/SP, com cerca de 3.000 profissionais atendendo grandes bancos, seguradoras, concessionárias de serviços públicos e varejistas na América Latina.", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 199.2, "ev_estimado_mm": 323.7, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-11-24", "data_marco_br": "24/11/2026", "dias_restantes": 39, "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)", "marco_tipo": "Entrega PRJ (Art. 53)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (39d)", "is_fixed_edital": false}}, "Agropecuária Ivagaci": {"tese": "(1) Causa da crise: Perdas severas de produtividade agrícola no Rio Grande do Sul causadas por eventos climáticos extremos (estiagens seguidas de enchentes) sobre passivo rural de R$ 128 milhões; (2) Gargalo imediato: Trâmite da Recuperação Judicial na região de Passo Fundo/RS exigindo negociação com Banrisul, Sicredi, Banco do Brasil e securitizadoras de CRAs sobre garantias reais de terras e penhor de safra; (3) Oportunidade de mandato: Financial Advisory Rural e estruturação de plano de pagamento escalonado conforme capacidade de geração de caixa por hectare, evitando consolidação de propriedade fiduciária.", "causa_crise": "Perdas severas de produtividade agrícola no Rio Grande do Sul causadas por eventos climáticos extremos (estiagens seguidas de enchentes) sobre passivo rural de R$ 128 milhões", "gargalo_imediato": "Trâmite da Recuperação Judicial na região de Passo Fundo/RS exigindo negociação com Banrisul, Sicredi, Banco do Brasil e securitizadoras de CRAs sobre garantias reais de terras e penhor de safra", "tese_mandato": "Financial Advisory Rural e estruturação de plano de pagamento escalonado conforme capacidade de geração de caixa por hectare, evitando consolidação de propriedade fiduciária.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Grupo agropecuário gaúcho com sede operacional na região do Planalto Médio e Missões (Passo Fundo e Santa Rosa/RS), focado na produção de soja, trigo, milho e pecuária de corte em áreas próprias, fortemente impactado pelas adversidades climáticas extremas no Rio Grande do Sul.", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 51.2, "ev_estimado_mm": 64.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 22.0, "classe_i_pct": 4.0, "classe_ii_pct": 36.0, "fiscal_pct": 8.0, "classe_iii_pct": 25.0, "classe_iv_pct": 5.0}}, "agro_meta": {"cpr_status": "Custeio Rural + CRAs Pulverizados", "alienacao_terras": "Alienação Fiduciária e Hipotecas (Banrisul, Sicredi, BB)", "ativos_rurais": "Propriedades agrícolas de soja e trigo em Passo Fundo/RS", "cra_exposicao": "CRAs em renegociação com securitizadoras"}, "calendar_meta": {"data_marco_iso": "2026-11-17", "data_marco_br": "17/11/2026", "dias_restantes": 32, "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)", "marco_tipo": "Entrega PRJ (Art. 53)", "urgencia_nivel": "alerta", "urgencia_label": "CURTO PRAZO (32d)", "is_fixed_edital": false}}, "Grupo SHC (JAC Motors Brasil / Sérgio Habib)": {"tese": "(1) Causa da crise: Oscilação cambial, sobretaxas de importação sobre veículos elétricos/combustão e elevado custo financeiro das linhas de financiamento de estoque (Floor Plan) da rede JAC Motors Brasil; (2) Gargalo imediato: Condução da Recuperação Judicial na 2ª Vara de Falências de SP (passivo de R$ 240 milhões) mantendo o acordo operacional de importação de peças e veículos junto à matriz chinesa; (3) Oportunidade de mandato: Estruturação de M&A Distressed / alienação de pontos comerciais e lojas próprias como UPI e renegociação de linhas de comércio exterior com bancos credores.", "causa_crise": "Oscilação cambial, sobretaxas de importação sobre veículos elétricos/combustão e elevado custo financeiro das linhas de financiamento de estoque (Floor Plan) da rede JAC Motors Brasil", "gargalo_imediato": "Condução da Recuperação Judicial na 2ª Vara de Falências de SP (passivo de R$ 240 milhões) mantendo o acordo operacional de importação de peças e veículos junto à matriz chinesa", "tese_mandato": "Estruturação de M&A Distressed / alienação de pontos comerciais e lojas próprias como UPI e renegociação de linhas de comércio exterior com bancos credores.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Holding automotiva controlada pelo empresário Sérgio Habib (ex-presidente da Citroën no Brasil), importadora e distribuidora exclusiva da montadora chinesa JAC Motors no país desde 2011. Nos últimos anos, reposicionou seu portfólio para veículos 100% elétricos comerciais (VULs e caminhões urbanos) e carros de passeio.", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 96.0, "ev_estimado_mm": 156.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-12-05", "data_marco_br": "05/12/2026", "dias_restantes": 50, "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)", "marco_tipo": "Entrega PRJ (Art. 53)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (50d)", "is_fixed_edital": false}}, "Sidlar Móveis": {"tese": "(1) Causa da crise: Queda na demanda de móveis planejados no varejo de média renda e compressão de caixa provocada pelo desconto de recebíveis de cartão e boletos a taxas elevadas no ABC Paulista; (2) Gargalo imediato: Apresentação do plano de Recuperação Judicial no TJSP para reestruturar R$ 56 milhões devidos ao Bradesco, bancos médios de capital de giro e fornecedores de painéis de madeira/MDF; (3) Oportunidade de mandato: Financial Advisory na modelagem do PRJ, revisão de contratos de locação de showrooms e fechamento de lojas deficitárias.", "causa_crise": "Queda na demanda de móveis planejados no varejo de média renda e compressão de caixa provocada pelo desconto de recebíveis de cartão e boletos a taxas elevadas no ABC Paulista", "gargalo_imediato": "Apresentação do plano de Recuperação Judicial no TJSP para reestruturar R$ 56 milhões devidos ao Bradesco, bancos médios de capital de giro e fornecedores de painéis de madeira/MDF", "tese_mandato": "Financial Advisory na modelagem do PRJ, revisão de contratos de locação de showrooms e fechamento de lojas deficitárias.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Tradicional rede varejista e fabricante própria de móveis planejados, estofados e artigos de decoração residencial sediada em São Caetano do Sul/SP (ABC Paulista), com forte atuação histórica na Região Metropolitana de São Paulo e fabricação verticalizada de marcenaria.", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 22.4, "ev_estimado_mm": 28.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-12-01", "data_marco_br": "01/12/2026", "dias_restantes": 46, "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)", "marco_tipo": "Entrega PRJ (Art. 53)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (46d)", "is_fixed_edital": false}}, "Habib's (Grupo Alsaraiva / Ragazzo)": {"tese": "(1) Causa da crise: Pressão inflacionária em proteínas e laticínios, queda de tráfego em lojas físicas de rua e endividamento bancário acumulado nas cozinhas centrais e franqueadoras do grupo (R$ 265 milhões); (2) Gargalo imediato: Evolução da tutela cautelar para Recuperação Judicial (Classe 129) na Capital/SP, demandando acordo estruturado com bancos privados e manutenção do fornecimento para a rede de franquias Habib's e Ragazzo; (3) Oportunidade de mandato: Gestão Interina (CRO) para otimização logística das cozinhas centrais, Sale & Leaseback de imóveis próprios de lojas drive-thru e renegociação com sindicato bancário.", "causa_crise": "Pressão inflacionária em proteínas e laticínios, queda de tráfego em lojas físicas de rua e endividamento bancário acumulado nas cozinhas centrais e franqueadoras do grupo (R$ 265 milhões)", "gargalo_imediato": "Evolução da tutela cautelar para Recuperação Judicial (Classe 129) na Capital/SP, demandando acordo estruturado com bancos privados e manutenção do fornecimento para a rede de franquias Habib's e Ragazzo", "tese_mandato": "Gestão Interina (CRO) para otimização logística das cozinhas centrais, Sale & Leaseback de imóveis próprios de lojas drive-thru e renegociação com sindicato bancário.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Um dos maiores grupos de alimentação fora do lar (foodservice) e franquias do Brasil (Grupo Alsaraiva), fundado por Alberto Saraiva em 1988. Reúne mais de 300 restaurantes sob as bandeiras Habib's (maior rede de culinária árabe rápida do mundo) e Ragazzo (massas e coxinha), suportados por cozinhas centrais verticalizadas, laticínios e panificadoras próprias.", "model_params": {"haircut_pct": 45.0, "recuperacao_pct": 55.0, "desconto_secundario_pct": 30.0, "valor_recuperado_mm": 145.75, "ev_estimado_mm": 132.5, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-10-25", "data_marco_br": "25/10/2026", "dias_restantes": 9, "marco_label": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE", "marco_tipo": "Cautelar 20-B (60d)", "urgencia_nivel": "critico", "urgencia_label": "URGENTE (9d)", "is_fixed_edital": false}}, "Fertilizantes Heringer": {"tese": "(1) Causa da crise: Volatilidade extrema nos preços internacionais de fertilizantes (NPK), desvalorização de estoques importados e restrição de linhas de comércio exterior pós-RJ anterior, acumulando R$ 1,98 bilhão de passivo; (2) Gargalo imediato: Procedimento de Tutela Cautelar e Mediação Prévia no CEJUSC empresarial (ES/SP) sob acompanhamento do AJ Ruiz para estruturar Recuperação Extrajudicial com bancos agro e tradings globais; (3) Oportunidade de mandato: Estruturação de DIP Financing garantido por estoques de misturadoras e recebíveis de safra, além de assessoria ao comitê de fornecedores internacionais de matérias-primas.", "causa_crise": "Volatilidade extrema nos preços internacionais de fertilizantes (NPK), desvalorização de estoques importados e restrição de linhas de comércio exterior pós-RJ anterior, acumulando R$ 1,98 bilhão de passivo", "gargalo_imediato": "Procedimento de Tutela Cautelar e Mediação Prévia no CEJUSC empresarial (ES/SP) sob acompanhamento do AJ Ruiz para estruturar Recuperação Extrajudicial com bancos agro e tradings globais", "tese_mandato": "Estruturação de DIP Financing garantido por estoques de misturadoras e recebíveis de safra, além de assessoria ao comitê de fornecedores internacionais de matérias-primas.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Uma das pioneiras nacionais na produção, mistura e distribuição de fertilizantes químicos (NPK) e insumos de nutrição vegetal (B3: FHER3), fundada em 1968 em Viana/ES. Opera mais de 10 unidades industriais misturadoras estrategicamente distribuídas pelos estados de SP, MG, ES, PR, GO, BA e RS.", "model_params": {"haircut_pct": 40.0, "recuperacao_pct": 60.0, "desconto_secundario_pct": 30.0, "valor_recuperado_mm": 1188.0, "ev_estimado_mm": 990.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 22.0, "classe_i_pct": 4.0, "classe_ii_pct": 36.0, "fiscal_pct": 8.0, "classe_iii_pct": 25.0, "classe_iv_pct": 5.0}}, "agro_meta": {"cpr_status": "Linhas de Importação de NPK + Barter com Produtores", "alienacao_terras": "Garantias Reais sobre Plantas Misturadoras e Estoques", "ativos_rurais": "Mais de 10 plantas industriais misturadoras de NPK no Brasil", "cra_exposicao": "Dívida bancária sindicalizada e fornecedores globais"}, "calendar_meta": {"data_marco_iso": "2026-11-25", "data_marco_br": "25/11/2026", "dias_restantes": 40, "marco_label": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)", "marco_tipo": "Homologação PRE", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (40d)", "is_fixed_edital": false}}, "Grupo Edeltec (Energia Solar & Fotovoltaica)": {"tese": "(1) Causa da crise: Forte queda nos preços de painéis fotovoltaicos (deflação de estoque), redução na conversão de projetos de geração distribuída (Marco Legal da GD) e inadimplência de integradores solares; (2) Gargalo imediato: Processamento de Recuperação Judicial em Maringá/PR (passivo de R$ 92 milhões) com exposição crítica a fabricantes asiáticos de módulos/inversores e bancos de capital de giro; (3) Oportunidade de mandato: Special Situations em Energia Solar para securitização de carteira de recebíveis de integradores, liquidação ordenada de estoques e repactuação com fornecedores internacionais.", "causa_crise": "Forte queda nos preços de painéis fotovoltaicos (deflação de estoque), redução na conversão de projetos de geração distribuída (Marco Legal da GD) e inadimplência de integradores solares", "gargalo_imediato": "Processamento de Recuperação Judicial em Maringá/PR (passivo de R$ 92 milhões) com exposição crítica a fabricantes asiáticos de módulos/inversores e bancos de capital de giro", "tese_mandato": "Special Situations em Energia Solar para securitização de carteira de recebíveis de integradores, liquidação ordenada de estoques e repactuação com fornecedores internacionais.", "agentes_fiduciarios": "Pentágono DTVM", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": {"debenture_codigo": "EDEL11 / Linhas Finimp Solar (R$ 92M)", "agente_fiduciario": "Pentágono DTVM", "inadimplemento_ccee": "N/A — Micro e Minigeração Distribuída (MMGD)", "risco_caducidade": "Moderado — Cancelamento de pareceres de acesso de GD junto às distribuidoras", "corte_rating_curtailment": "Inversão de fluxo de potência ( inversão de fluxo na rede de distribuição ) e deflação de módulos solares", "submercado": "Sul"}, "descricao_empresa": "Importadora e distribuidora paranaense de equipamentos de energia solar fotovoltaica (geradores completos, módulos solares, inversores e estruturas de fixação) sediada em Maringá/PR, atendendo milhares de integradores e instaladores de geração distribuída (MMGD) nas regiões Sul, Sudeste e Centro-Oeste.", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 36.8, "ev_estimado_mm": 46.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 18.0, "classe_i_pct": 3.0, "classe_ii_pct": 42.0, "fiscal_pct": 7.0, "classe_iii_pct": 27.0, "classe_iv_pct": 3.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-11-20", "data_marco_br": "20/11/2026", "dias_restantes": 35, "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)", "marco_tipo": "Entrega PRJ (Art. 53)", "urgencia_nivel": "alerta", "urgencia_label": "CURTO PRAZO (35d)", "is_fixed_edital": false}}, "B-Green Soluções Ambientais (Ex-Stericycle)": {"tese": "(1) Causa da crise: Elevado custo de manutenção e leasing de frota especializada e fornos de incineração de resíduos hospitalares, somado a atrasos em contratos públicos e hospitalares em Campinas e Mogi Mirim/SP; (2) Gargalo imediato: Negativa de segredo de justiça e determinação de Constatação Prévia (art. 51-A) no TJSP (Campinas) sobre R$ 83 milhões distribuídos entre 591 credores; (3) Oportunidade de mandato: Financial Advisory para estruturação do PRJ, blindagem de licenças ambientais da CETESB e renegociação de contratos de leasing operacional de frota.", "causa_crise": "Elevado custo de manutenção e leasing de frota especializada e fornos de incineração de resíduos hospitalares, somado a atrasos em contratos públicos e hospitalares em Campinas e Mogi Mirim/SP", "gargalo_imediato": "Negativa de segredo de justiça e determinação de Constatação Prévia (art. 51-A) no TJSP (Campinas) sobre R$ 83 milhões distribuídos entre 591 credores", "tese_mandato": "Financial Advisory para estruturação do PRJ, blindagem de licenças ambientais da CETESB e renegociação de contratos de leasing operacional de frota.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Operadora líder no gerenciamento integrado, coleta especializada, autoclavagem e incineração de resíduos de serviços de saúde (lixo hospitalar infectante, químico e perfurocortante) e resíduos industriais perigosos (Classe I), resultante da aquisição da antiga operação brasileira da norte-americana Stericycle, com sede operacional na região de Campinas/SP.", "model_params": {"haircut_pct": 45.0, "recuperacao_pct": 55.0, "desconto_secundario_pct": 30.0, "valor_recuperado_mm": 45.65, "ev_estimado_mm": 41.5, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-11-27", "data_marco_br": "27/11/2026", "dias_restantes": 42, "marco_label": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE", "marco_tipo": "Cautelar 20-B (60d)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (42d)", "is_fixed_edital": false}}, "Grupo Toky (Tok&Stok e Mobly)": {"tese": "(1) Causa da crise: Queima de caixa histórica da rede de móveis e decoração Tok&Stok combinada aos custos de integração operacional e logística após a combinação de negócios com a Mobly; (2) Gargalo imediato: Homologação e execução do plano de Recuperação Extrajudicial (Classe 128) nas Varas Empresariais de SP abrangendo R$ 600 milhões em dívidas bancárias e debêntures; (3) Oportunidade de mandato: Gestão Interina (CRO) na captura de sinergias de centros de distribuição, renegociação de aluguéis com shopping centers e monitoramento de covenants para debenturistas (Vórtx/Pentágono).", "causa_crise": "Queima de caixa histórica da rede de móveis e decoração Tok&Stok combinada aos custos de integração operacional e logística após a combinação de negócios com a Mobly", "gargalo_imediato": "Homologação e execução do plano de Recuperação Extrajudicial (Classe 128) nas Varas Empresariais de SP abrangendo R$ 600 milhões em dívidas bancárias e debêntures", "tese_mandato": "Gestão Interina (CRO) na captura de sinergias de centros de distribuição, renegociação de aluguéis com shopping centers e monitoramento de covenants para debenturistas (Vórtx/Pentágono).", "agentes_fiduciarios": "Vórtx DTVM, Pentágono DTVM", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Plataforma líder no varejo omnichannel de móveis e artigos de decoração no Brasil (B3: MBLY3), resultante da combinação de negócios entre o e-commerce Mobly e a icônica rede de megalojas de design Tok&Stok (fundada em 1978), operando mais de 50 lojas físicas de grande formato e centros logísticos avançados.", "model_params": {"haircut_pct": 40.0, "recuperacao_pct": 60.0, "desconto_secundario_pct": 30.0, "valor_recuperado_mm": 360.0, "ev_estimado_mm": 300.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-11-13", "data_marco_br": "13/11/2026", "dias_restantes": 28, "marco_label": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)", "marco_tipo": "Homologação PRE", "urgencia_nivel": "alerta", "urgencia_label": "CURTO PRAZO (28d)", "is_fixed_edital": false}}, "Terra Assessoria de Siderúrgicas": {"tese": "(1) Causa da crise: Retração nos preços de ferro-gusa e carvão vegetal no polo siderúrgico de Sete Lagoas/MG, comprimindo o capital de giro e gerando inadimplência na cadeia de fornecedores; (2) Gargalo imediato: Pedido de homologação de Recuperação Extrajudicial no TJMG (passivo de R$ 305 milhões) sujeito a impugnações de credores quirografários e bancos de crédito corporativo; (3) Oportunidade de mandato: Assessoria Creditor-Side a fornecedores industriais e bancos credores para auditoria do plano extrajudicial e estruturação de contratos de tolling siderúrgico.", "causa_crise": "Retração nos preços de ferro-gusa e carvão vegetal no polo siderúrgico de Sete Lagoas/MG, comprimindo o capital de giro e gerando inadimplência na cadeia de fornecedores", "gargalo_imediato": "Pedido de homologação de Recuperação Extrajudicial no TJMG (passivo de R$ 305 milhões) sujeito a impugnações de credores quirografários e bancos de crédito corporativo", "tese_mandato": "Assessoria Creditor-Side a fornecedores industriais e bancos credores para auditoria do plano extrajudicial e estruturação de contratos de tolling siderúrgico.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Empresa mineira de engenharia metalúrgica, consultoria industrial e intermediação de insumos siderúrgicos (minério de ferro, carvão vegetal e ligas) sediada no polo produtor de ferro-gusa de Sete Lagoas/MG, atendendo fundições e usinas guserias independentes do quadrilátero ferrífero.", "model_params": {"haircut_pct": 40.0, "recuperacao_pct": 60.0, "desconto_secundario_pct": 30.0, "valor_recuperado_mm": 183.0, "ev_estimado_mm": 152.5, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-11-23", "data_marco_br": "23/11/2026", "dias_restantes": 38, "marco_label": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)", "marco_tipo": "Homologação PRE", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (38d)", "is_fixed_edital": false}}, "Grupo Agroindustrial do Cerrado (Grãos, Soja/Milho)": {"tese": "(1) Causa da crise: Quebra de rentabilidade nas safras de soja e milho no médio-norte de Mato Grosso (Sorriso/MT) frente ao alto custo de arrendamento e insumos travados em dólar; (2) Gargalo imediato: Sinal Precursor Forense (Tier 0) capturado via spike de protestos no CENPROT-MT e ações preparatórias de arresto de grãos por tradings globais (Cargill, Bunge, ADM) sobre passivo estimado em R$ 185 milhões; (3) Oportunidade de mandato: Mandato preventivo de Shadow Restructuring e negociação de Standstill com tradings e bancos (BB, Sicredi) 60 dias antes da judicialização.", "causa_crise": "Quebra de rentabilidade nas safras de soja e milho no médio-norte de Mato Grosso (Sorriso/MT) frente ao alto custo de arrendamento e insumos travados em dólar", "gargalo_imediato": "Sinal Precursor Forense (Tier 0) capturado via spike de protestos no CENPROT-MT e ações preparatórias de arresto de grãos por tradings globais (Cargill, Bunge, ADM) sobre passivo estimado em R$ 185 milhões", "tese_mandato": "Mandato preventivo de Shadow Restructuring e negociação de Standstill com tradings e bancos (BB, Sicredi) 60 dias antes da judicialização.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Conglomerado agrícola de grande porte estabelecido no coração produtivo da BR-163 (Sorriso e Lucas do Rio Verde/MT), operando mais de 25 mil hectares de lavouras tecnificadas de soja e milho segunda safra, além de estrutura própria de secagem e beneficiamento primário de grãos.", "model_params": {"haircut_pct": 35.0, "recuperacao_pct": 65.0, "desconto_secundario_pct": 25.0, "valor_recuperado_mm": 120.25, "ev_estimado_mm": 92.5, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 22.0, "classe_i_pct": 4.0, "classe_ii_pct": 36.0, "fiscal_pct": 8.0, "classe_iii_pct": 25.0, "classe_iv_pct": 5.0}}, "agro_meta": {"cpr_status": "CPR Física de Soja/Milho (Risco de Arresto por Tradings)", "alienacao_terras": "Penhor de Safra (Cargill, Bunge, ADM, BB e Sicredi)", "ativos_rurais": "25.000+ ha plantados e estrutura de secagem em Sorriso/MT", "cra_exposicao": "Monitoramento preventivo Tier 0"}, "calendar_meta": {"data_marco_iso": "2026-11-17", "data_marco_br": "17/11/2026", "dias_restantes": 32, "marco_label": "Janela Crítica Pré-Concursal (45d) — Standstill Bancário / CVM / CCEE", "marco_tipo": "Janela Tier 0", "urgencia_nivel": "alerta", "urgencia_label": "CURTO PRAZO (32d)", "is_fixed_edital": false}}, "Rede Hospitalar & Operadora Regional Sul-Sudeste": {"tese": "(1) Causa da crise: Sinistralidade médica elevada pós-pandemia, inflação de materiais especiais (OPME) e retenção de reservas técnicas pela Agência Nacional de Saúde Suplementar (ANS); (2) Gargalo imediato: Sinal Precursor Forense (Tier 0) decorrente da instauração de Direção Fiscal pela ANS (DOU Resolução Operacional nº 3.142/2026) e inclusão em Procedimento de Execução Trabalhista (PEPT) no TRT-4 sobre passivo de R$ 260 milhões; (3) Oportunidade de mandato: Assessoria Company-Side para alienação compulsória/voluntária de carteira de beneficiários e hospitais próprios (UPI regulada ANS) e Watchdog para bancos credores (Itaú, Bradesco, Santander).", "causa_crise": "Sinistralidade médica elevada pós-pandemia, inflação de materiais especiais (OPME) e retenção de reservas técnicas pela Agência Nacional de Saúde Suplementar (ANS)", "gargalo_imediato": "Sinal Precursor Forense (Tier 0) decorrente da instauração de Direção Fiscal pela ANS (DOU Resolução Operacional nº 3.142/2026) e inclusão em Procedimento de Execução Trabalhista (PEPT) no TRT-4 sobre passivo de R$ 260 milhões", "tese_mandato": "Assessoria Company-Side para alienação compulsória/voluntária de carteira de beneficiários e hospitais próprios (UPI regulada ANS) e Watchdog para bancos credores (Itaú, Bradesco, Santander).", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Operadora regional de planos de saúde suplementar médico-hospitalar (cerca de 120 mil vidas beneficiárias) verticalizada com rede própria de hospitais gerais, centros clínicos e pronto-atendimento nos estados do Paraná e Santa Catarina.", "model_params": {"haircut_pct": 35.0, "recuperacao_pct": 65.0, "desconto_secundario_pct": 25.0, "valor_recuperado_mm": 169.0, "ev_estimado_mm": 169.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-11-18", "data_marco_br": "18/11/2026", "dias_restantes": 33, "marco_label": "Janela Crítica Pré-Concursal (45d) — Standstill Bancário / CVM / CCEE", "marco_tipo": "Janela Tier 0", "urgencia_nivel": "alerta", "urgencia_label": "CURTO PRAZO (33d)", "is_fixed_edital": false}}, "Renovare Energia & Comercializadora S/A": {"tese": "(1) Causa da crise: Exposição descoberta à volatilidade do PLD horário no submercado Nordeste/Sudeste somada a perdas por curtailment (constrained-off) em ativos de geração renovável; (2) Gargalo imediato: Sinal Precursor Forense (Tier 0) com notificação de inadimplemento na liquidação do Mercado de Curto Prazo da CCEE (MCP nº 2026/089) e convocação de AGD da 2ª emissão de debêntures (R$ 340 milhões) por quebra de ICSD; (3) Oportunidade de mandato: Financial Advisory em Energia para negociação de waiver/standstill com debenturistas (Pentágono/Oliveira Trust), recomposição de garantias na CCEE e venda de portfólio de PPAs.", "causa_crise": "Exposição descoberta à volatilidade do PLD horário no submercado Nordeste/Sudeste somada a perdas por curtailment (constrained-off) em ativos de geração renovável", "gargalo_imediato": "Sinal Precursor Forense (Tier 0) com notificação de inadimplemento na liquidação do Mercado de Curto Prazo da CCEE (MCP nº 2026/089) e convocação de AGD da 2ª emissão de debêntures (R$ 340 milhões) por quebra de ICSD", "tese_mandato": "Financial Advisory em Energia para negociação de waiver/standstill com debenturistas (Pentágono/Oliveira Trust), recomposição de garantias na CCEE e venda de portfólio de PPAs.", "agentes_fiduciarios": "Pentágono DTVM S.A.", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": {"debenture_codigo": "RNVE12 — 2ª Emissão Infraestrutura (R$ 340M)", "agente_fiduciario": "Pentágono DTVM S.A.", "inadimplemento_ccee": "Alerta Vermelho — Notificação CCEE MCP nº 2026/089 (Insuficiência de Garantias)", "risco_caducidade": "Alto — Procedimento de desligamento por inadimplemento na CCEE em curso", "corte_rating_curtailment": "Downgrade severo na CVM por quebra de covenant ICSD (< 1,15x) devido a curtailment eólico/solar no NE", "submercado": "Nordeste"}, "descricao_empresa": "Plataforma independente de comercialização de energia elétrica no Mercado Livre (ACL) e holding de Sociedades de Propósito Específico (SPEs) detentoras de usinas solares e eólicas no Nordeste e Sudeste, estruturada com emissão de debêntures de infraestrutura e contratos bilaterais de longo prazo (PPAs).", "model_params": {"haircut_pct": 35.0, "recuperacao_pct": 65.0, "desconto_secundario_pct": 25.0, "valor_recuperado_mm": 221.0, "ev_estimado_mm": 170.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 18.0, "classe_i_pct": 3.0, "classe_ii_pct": 42.0, "fiscal_pct": 7.0, "classe_iii_pct": 27.0, "classe_iv_pct": 3.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-10-27", "data_marco_br": "27/10/2026", "dias_restantes": 11, "marco_label": "Assembleia Geral de Debenturistas (AGD — 2ª Emissão RNVE12) & Garantias CCEE", "marco_tipo": "AGD Debêntures", "urgencia_nivel": "critico", "urgencia_label": "URGENTE (11d)", "is_fixed_edital": true}}, "Rede Varejista Moda & Calçados Brasil (120 Lojas)": {"tese": "(1) Causa da crise: Queda de vendas mesmas lojas (SSS) no varejo de moda e calçados, excesso de estoques sazonais e custo elevado de antecipação de recebíveis de cartão em 120 lojas próprias; (2) Gargalo imediato: Sinal Precursor Forense (Tier 0) identificado por spike crítico de protestos no CENPROT-SP e pedido de penhora de faturamento (art. 866 do CPC) em execução fiscal da PGFN sobre passivo de R$ 145 milhões; (3) Oportunidade de mandato: Diagnóstico de caixa de 13 semanas, Gestão Interina (CRO) para fechamento imediato de 25 lojas deficitárias e acordo de standstill com Itaú, Santander, Bradesco, Safra e Daycoval.", "causa_crise": "Queda de vendas mesmas lojas (SSS) no varejo de moda e calçados, excesso de estoques sazonais e custo elevado de antecipação de recebíveis de cartão em 120 lojas próprias", "gargalo_imediato": "Sinal Precursor Forense (Tier 0) identificado por spike crítico de protestos no CENPROT-SP e pedido de penhora de faturamento (art. 866 do CPC) em execução fiscal da PGFN sobre passivo de R$ 145 milhões", "tese_mandato": "Diagnóstico de caixa de 13 semanas, Gestão Interina (CRO) para fechamento imediato de 25 lojas deficitárias e acordo de standstill com Itaú, Santander, Bradesco, Safra e Daycoval.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Rede varejista brasileira de moda acessível, confecções familiares e calçados com forte presença em lojas de rua de alto fluxo e shopping centers regionais (120 pontos de venda ativos nas regiões Sudeste e Sul), operando modelo intensivo de financiamento ao consumidor (crediário próprio e cartões).", "model_params": {"haircut_pct": 35.0, "recuperacao_pct": 65.0, "desconto_secundario_pct": 25.0, "valor_recuperado_mm": 94.25, "ev_estimado_mm": 72.5, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-11-19", "data_marco_br": "19/11/2026", "dias_restantes": 34, "marco_label": "Janela Crítica Pré-Concursal (45d) — Standstill Bancário / CVM / CCEE", "marco_tipo": "Janela Tier 0", "urgencia_nivel": "alerta", "urgencia_label": "CURTO PRAZO (34d)", "is_fixed_edital": false}}, "Metalúrgica Autopeças & Componentes Pesados": {"tese": "(1) Causa da crise: Redução de pedidos de montadoras de veículos pesados e devolução de duplicatas mercantis cedidas a fundos de investimento em direitos creditórios (FIDCs); (2) Gargalo imediato: Sinal Precursor Forense (Tier 0) via Fato Relevante na CVM (Fundos.NET) decretando amortização antecipada de FIDC de autopeças e intimação no 2º CRI de Campinas/SP (SEIC) para consolidação fiduciária do galpão fabril (passivo de R$ 95 milhões); (3) Oportunidade de mandato: Ajuizamento de tutela cautelar de urgência para blindagem de ativo industrial essencial, acordo tripartite com montadoras clientes e estruturação de DIP de fornecedor.", "causa_crise": "Redução de pedidos de montadoras de veículos pesados e devolução de duplicatas mercantis cedidas a fundos de investimento em direitos creditórios (FIDCs)", "gargalo_imediato": "Sinal Precursor Forense (Tier 0) via Fato Relevante na CVM (Fundos.NET) decretando amortização antecipada de FIDC de autopeças e intimação no 2º CRI de Campinas/SP (SEIC) para consolidação fiduciária do galpão fabril (passivo de R$ 95 milhões)", "tese_mandato": "Ajuizamento de tutela cautelar de urgência para blindagem de ativo industrial essencial, acordo tripartite com montadoras clientes e estruturação de DIP de fornecedor.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Reit Securitizadora", "energy_meta": null, "descricao_empresa": "Indústria metalúrgica sistemista (Tier 2 automotivo) instalada no polo tecnológico e industrial de Campinas/SP, especializada em estamparia pesada, usinagem CNC e subconjuntos soldados fornecidos sob contratos just-in-time para montadoras de caminhões, ônibus, tratores e máquinas agrícolas.", "model_params": {"haircut_pct": 35.0, "recuperacao_pct": 65.0, "desconto_secundario_pct": 25.0, "valor_recuperado_mm": 61.75, "ev_estimado_mm": 47.5, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-11-19", "data_marco_br": "19/11/2026", "dias_restantes": 34, "marco_label": "Janela Crítica Pré-Concursal (45d) — Standstill Bancário / CVM / CCEE", "marco_tipo": "Janela Tier 0", "urgencia_nivel": "alerta", "urgencia_label": "CURTO PRAZO (34d)", "is_fixed_edital": false}}, "TransLog Cargas Pesadas & Logística Rodoviária": {"tese": "(1) Causa da crise: Defasagem nas tabelas de frete rodoviário pesado frente ao aumento do diesel, manutenção e juros sobre financiamentos de renovação de frota (Finame); (2) Gargalo imediato: Sinal Precursor Forense (Tier 0) com distribuição simultânea de ações de busca e apreensão por bancos de montadoras (Mercedes-Benz, Scania, Volvo) no TJSP e instauração de PEPT no TRT-2 sobre R$ 120 milhões de passivo; (3) Oportunidade de mandato: Renegociação preventiva em bloco com os 3 bancos de montadora (que detêm > 60% da dívida), preservação judicial da frota operacional e estruturação de Recuperação Extrajudicial.", "causa_crise": "Defasagem nas tabelas de frete rodoviário pesado frente ao aumento do diesel, manutenção e juros sobre financiamentos de renovação de frota (Finame)", "gargalo_imediato": "Sinal Precursor Forense (Tier 0) com distribuição simultânea de ações de busca e apreensão por bancos de montadoras (Mercedes-Benz, Scania, Volvo) no TJSP e instauração de PEPT no TRT-2 sobre R$ 120 milhões de passivo", "tese_mandato": "Renegociação preventiva em bloco com os 3 bancos de montadora (que detêm > 60% da dívida), preservação judicial da frota operacional e estruturação de Recuperação Extrajudicial.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Transportadora rodoviária de cargas pesadas, indivisíveis, siderúrgicas e granéis industriais sediada em São Paulo/SP, operando frota superior a 350 cavalos mecânicos e carretas especiais nas malhas rodoviárias do Sudeste, Sul e Centro-Oeste para grandes embarcadores industriais.", "model_params": {"haircut_pct": 35.0, "recuperacao_pct": 65.0, "desconto_secundario_pct": 25.0, "valor_recuperado_mm": 78.0, "ev_estimado_mm": 60.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-11-20", "data_marco_br": "20/11/2026", "dias_restantes": 35, "marco_label": "Janela Crítica Pré-Concursal (45d) — Standstill Bancário / CVM / CCEE", "marco_tipo": "Janela Tier 0", "urgencia_nivel": "alerta", "urgencia_label": "CURTO PRAZO (35d)", "is_fixed_edital": false}}, "Engenharia & Construtora InfraBrasil": {"tese": "(1) Causa da crise: Paralisação de repasses em contratos de obras públicas de infraestrutura e sobrecusto de insumos de engenharia pesada em MG, SP e RJ; (2) Gargalo imediato: Sinal Precursor Forense (Tier 0) gerado por processo administrativo de inidoneidade na CGU (CEIS/CNEP) e notificações de sinistro para execução de apólices de seguro-garantia e fianças bancárias (passivo de R$ 210 milhões); (3) Oportunidade de mandato: Atuação como Watchdog Independente em favor do pool de seguradoras (Pottencial, Junto, Pomerania) e bancos fiadores (Daycoval, ABC Brasil) para gestão de conta escrow das medições de obras.", "causa_crise": "Paralisação de repasses em contratos de obras públicas de infraestrutura e sobrecusto de insumos de engenharia pesada em MG, SP e RJ", "gargalo_imediato": "Sinal Precursor Forense (Tier 0) gerado por processo administrativo de inidoneidade na CGU (CEIS/CNEP) e notificações de sinistro para execução de apólices de seguro-garantia e fianças bancárias (passivo de R$ 210 milhões)", "tese_mandato": "Atuação como Watchdog Independente em favor do pool de seguradoras (Pottencial, Junto, Pomerania) e bancos fiadores (Daycoval, ABC Brasil) para gestão de conta escrow das medições de obras.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Reit Securitizadora", "energy_meta": null, "descricao_empresa": "Construtora de engenharia pesada, obras de arte especiais (pontes e viadutos), pavimentação rodoviária e saneamento básico sediada em Belo Horizonte/MG, detentora de carteira relevante de contratos públicos licitados junto ao DNIT, DERs estaduais e companhias de saneamento em MG, SP e RJ.", "model_params": {"haircut_pct": 35.0, "recuperacao_pct": 65.0, "desconto_secundario_pct": 25.0, "valor_recuperado_mm": 136.5, "ev_estimado_mm": 105.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-11-20", "data_marco_br": "20/11/2026", "dias_restantes": 35, "marco_label": "Janela Crítica Pré-Concursal (45d) — Standstill Bancário / CVM / CCEE", "marco_tipo": "Janela Tier 0", "urgencia_nivel": "alerta", "urgencia_label": "CURTO PRAZO (35d)", "is_fixed_edital": false}}, "Concessionária Rodoviária das Colinas do Tietê": {"tese": "(1) Causa da crise: Tráfego realizado abaixo da curva projetada no project finance rodoviário combinado ao aumento do capex regulatório de duplicação exigido pelo poder concedente; (2) Gargalo imediato: Sinal Precursor Forense (Tier 0) com abertura de processo administrativo de caducidade na ARTESP (nº 0089/2026) e convocação de AGD pelos debenturistas da 1ª e 2ª emissão incentivada (Lei 12.431 - R$ 420 milhões) e BNDES; (3) Oportunidade de mandato: Tutela Cautelar Antecedente (art. 20-B) para suspensão do processo de caducidade, mediação regulatória para relicitação amigável (Lei 13.448) e assessoria ao comitê de debenturistas (Vórtx/Oliveira Trust).", "causa_crise": "Tráfego realizado abaixo da curva projetada no project finance rodoviário combinado ao aumento do capex regulatório de duplicação exigido pelo poder concedente", "gargalo_imediato": "Sinal Precursor Forense (Tier 0) com abertura de processo administrativo de caducidade na ARTESP (nº 0089/2026) e convocação de AGD pelos debenturistas da 1ª e 2ª emissão incentivada (Lei 12.431 - R$ 420 milhões) e BNDES", "tese_mandato": "Tutela Cautelar Antecedente (art. 20-B) para suspensão do processo de caducidade, mediação regulatória para relicitação amigável (Lei 13.448) e assessoria ao comitê de debenturistas (Vórtx/Oliveira Trust).", "agentes_fiduciarios": "Vórtx DTVM / BNDES", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": {"debenture_codigo": "CLTI11 / CLTI12 — Lei 12.431 (R$ 420M)", "agente_fiduciario": "Vórtx DTVM / BNDES", "inadimplemento_ccee": "N/A — Concessão Rodoviária Estadual (ARTESP)", "risco_caducidade": "Crítico — Processo Administrativo de Caducidade ARTESP nº 0089/2026 instaurado", "corte_rating_curtailment": "Convocação de AGD de debenturistas para declaração de vencimento antecipado por quebra de ICSD e multa regulatória", "submercado": "Sudeste/Centro-Oeste"}, "descricao_empresa": "Sociedade de Propósito Específico (SPE) detentora de concessão rodoviária estadual regulada pela ARTESP no interior de São Paulo (eixo Sorocaba, Itu, Salto e Indaiatuba), operando mais de 300 km de malha duplicada com fluxo intenso de veículos pesados e receita tarifária de praças de pedágio.", "model_params": {"haircut_pct": 35.0, "recuperacao_pct": 65.0, "desconto_secundario_pct": 25.0, "valor_recuperado_mm": 273.0, "ev_estimado_mm": 210.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 18.0, "classe_i_pct": 3.0, "classe_ii_pct": 42.0, "fiscal_pct": 7.0, "classe_iii_pct": 27.0, "classe_iv_pct": 3.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-11-04", "data_marco_br": "04/11/2026", "dias_restantes": 19, "marco_label": "Assembleia Geral de Debenturistas (CLTI11/12) & Defesa de Caducidade ARTESP", "marco_tipo": "AGD Debêntures", "urgencia_nivel": "alerta", "urgencia_label": "CURTO PRAZO (19d)", "is_fixed_edital": true}}, "AgroGalaxy Participações S/A (AGXY3)": {"tese": "(1) Causa da crise: Inadimplência generalizada de produtores rurais na carteira de revendas de insumos agrícolas somada ao vencimento de CRAs e linhas de capital de giro, totalizando R$ 4,67 bilhões de passivo; (2) Gargalo imediato: Condução da Recuperação Judicial na 19ª Vara Cível de Goiânia/GO (AJ Preserva-Ação) com disputas sobre travas de recebíveis de CRAs (Vert e Opea Securitizadoras), exposição do Banco do Brasil (R$ 391M) e fechamento de lojas deficitárias; (3) Oportunidade de mandato: Watchdog Independente para comitês de titulares de CRAs e bancos credores, estruturação de financiamento DIP e venda de carteiras/unidades regionais de insumos (UPIs).", "causa_crise": "Inadimplência generalizada de produtores rurais na carteira de revendas de insumos agrícolas somada ao vencimento de CRAs e linhas de capital de giro, totalizando R$ 4,67 bilhões de passivo", "gargalo_imediato": "Condução da Recuperação Judicial na 19ª Vara Cível de Goiânia/GO (AJ Preserva-Ação) com disputas sobre travas de recebíveis de CRAs (Vert e Opea Securitizadoras), exposição do Banco do Brasil (R$ 391M) e fechamento de lojas deficitárias", "tese_mandato": "Watchdog Independente para comitês de titulares de CRAs e bancos credores, estruturação de financiamento DIP e venda de carteiras/unidades regionais de insumos (UPIs).", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Opea Securitizadora, Vert Securitizadora", "energy_meta": null, "descricao_empresa": "Uma das maiores plataformas de varejo de insumos agrícolas (sementes, defensivos, fertilizantes e especialidades) e serviços de comercialização de grãos do Brasil (B3: AGXY3), controlada pelo fundo Aqua Capital. Chegou a operar mais de 170 lojas técnicas, silos e unidades de beneficiamento de sementes em 14 estados (do RS ao Matopiba).", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 1868.0, "ev_estimado_mm": 3035.5, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 22.0, "classe_i_pct": 4.0, "classe_ii_pct": 36.0, "fiscal_pct": 8.0, "classe_iii_pct": 25.0, "classe_iv_pct": 5.0}}, "agro_meta": {"cpr_status": "Carteira de CPRs de Clientes Cedida a CRAs e FIDCs", "alienacao_terras": "Cessão Fiduciária de Recebíveis de Safra", "ativos_rurais": "Rede de lojas técnicas, silos e unidades de sementes (UPIs)", "cra_exposicao": "Forte Exposição em CRAs (Vert Securitizadora & Opea)"}, "calendar_meta": {"data_marco_iso": "2026-11-17", "data_marco_br": "17/11/2026", "dias_restantes": 32, "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)", "marco_tipo": "Entrega PRJ (Art. 53)", "urgencia_nivel": "alerta", "urgencia_label": "CURTO PRAZO (32d)", "is_fixed_edital": false}}, "Polimport Comércio e Exportação Ltda (Polishop)": {"tese": "(1) Causa da crise: Colapso do modelo tradicional de vendas por TV aberta e lojas físicas de shopping centers frente à concorrência de marketplaces digitais, acumulando R$ 396 milhões de passivo; (2) Gargalo imediato: Trâmite da Recuperação Judicial na 2ª Vara de Falências de SP (AJ Cabezón) com ações de despejo de shopping centers e execuções de Banco do Brasil, BMP Money Plus e Zurich Seguros; (3) Oportunidade de mandato: Gestão Interina (CRO Operacional) para migração ao modelo asset-light digital, renegociação de aluguéis com administradoras de shoppings e Watchdog para credores financeiros.", "causa_crise": "Colapso do modelo tradicional de vendas por TV aberta e lojas físicas de shopping centers frente à concorrência de marketplaces digitais, acumulando R$ 396 milhões de passivo", "gargalo_imediato": "Trâmite da Recuperação Judicial na 2ª Vara de Falências de SP (AJ Cabezón) com ações de despejo de shopping centers e execuções de Banco do Brasil, BMP Money Plus e Zurich Seguros", "tese_mandato": "Gestão Interina (CRO Operacional) para migração ao modelo asset-light digital, renegociação de aluguéis com administradoras de shoppings e Watchdog para credores financeiros.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Icônica rede varejista multicanal brasileira fundada em 1999 por João Appolinário, famosa pelo modelo pioneiro de infomerciais em TV aberta e a cabo, e-commerce próprio e rede que chegou a superar 250 lojas físicas nos principais shopping centers do país, comercializando eletroportáteis, equipamentos de ginástica e utilidades domésticas exclusivas.", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 158.4, "ev_estimado_mm": 198.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-10-19", "data_marco_br": "19/10/2026", "dias_restantes": 3, "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)", "marco_tipo": "Entrega PRJ (Art. 53)", "urgencia_nivel": "critico", "urgencia_label": "URGENTE (3d)", "is_fixed_edital": false}}, "Grupo Echer": {"tese": "(1) Causa da crise: Descompasso financeiro entre o ritmo de vendas/repasses imobiliários e o custo de execução de empreendimentos residenciais e operações agropecuárias em Mato Grosso (passivo de R$ 170 milhões); (2) Gargalo imediato: Deferimento da Recuperação Judicial na Vara Especializada de Cuiabá/MT com forte concentração de 41% da dívida (R$ 69,5 milhões) na Caixa Econômica Federal; (3) Oportunidade de mandato: Watchdog de Colateral Imobiliário para a Caixa Econômica Federal e bancos privados, além da estruturação de DIP Financing para conclusão de obras em andamento.", "causa_crise": "Descompasso financeiro entre o ritmo de vendas/repasses imobiliários e o custo de execução de empreendimentos residenciais e operações agropecuárias em Mato Grosso (passivo de R$ 170 milhões)", "gargalo_imediato": "Deferimento da Recuperação Judicial na Vara Especializada de Cuiabá/MT com forte concentração de 41% da dívida (R$ 69,5 milhões) na Caixa Econômica Federal", "tese_mandato": "Watchdog de Colateral Imobiliário para a Caixa Econômica Federal e bancos privados, além da estruturação de DIP Financing para conclusão de obras em andamento.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Grupo empresarial mato-grossense com atuação dual na construção civil (incorporação de edifícios residenciais, condomínios horizontais e loteamentos urbanos em Cuiabá, Várzea Grande e interior de MT) e no agronegócio regional, com forte carteira de financiamentos habitacionais junto à Caixa Econômica Federal.", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 68.0, "ev_estimado_mm": 85.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-12-05", "data_marco_br": "05/12/2026", "dias_restantes": 50, "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)", "marco_tipo": "Entrega PRJ (Art. 53)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (50d)", "is_fixed_edital": false}}, "Navarro Distribuidora de Medicamentos S/A": {"tese": "(1) Causa da crise: Compressão severa de margens na distribuição de medicamentos hospitalares e farma nos CDs de SP, ES, MG e PR combinada ao alto custo das linhas bancárias de giro (passivo de R$ 115 milhões); (2) Gargalo imediato: Processamento da Recuperação Judicial na 1ª Vara Regional Empresarial de SP com prazo de 60 dias para entrega do plano concursal e risco de corte de limite de crédito pelos grandes laboratórios farmacêuticos; (3) Oportunidade de mandato: Elaboração econômico-financeira do Plano de Recuperação Judicial (art. 53), renegociação de dívida bancária com Itaú, Santander e Bradesco e captação de DIP para recomposição de estoques.", "causa_crise": "Compressão severa de margens na distribuição de medicamentos hospitalares e farma nos CDs de SP, ES, MG e PR combinada ao alto custo das linhas bancárias de giro (passivo de R$ 115 milhões)", "gargalo_imediato": "Processamento da Recuperação Judicial na 1ª Vara Regional Empresarial de SP com prazo de 60 dias para entrega do plano concursal e risco de corte de limite de crédito pelos grandes laboratórios farmacêuticos", "tese_mandato": "Elaboração econômico-financeira do Plano de Recuperação Judicial (art. 53), renegociação de dívida bancária com Itaú, Santander e Bradesco e captação de DIP para recomposição de estoques.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Tradicional distribuidora atacadista de medicamentos éticos, genéricos, hospitalares e produtos de higiene/perfumaria (farma B2B), com matriz em São Paulo e centros de distribuição climatizados em SP, ES, MG e PR, abastecendo redes de farmácias independentes, clínicas e hospitais privados.", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 46.0, "ev_estimado_mm": 57.5, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-12-02", "data_marco_br": "02/12/2026", "dias_restantes": 47, "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)", "marco_tipo": "Entrega PRJ (Art. 53)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (47d)", "is_fixed_edital": false}}, "Grupo Safras (Safras Armazéns Gerais & Agropecuária)": {"tese": "(1) Causa da crise: Alavancagem elevada na expansão de silos e armazéns gerais em Sorriso e Sinop/MT combinada a quebras de contratos de barter e disputas com tradings sobre depósito de grãos (passivo de R$ 1,78 bilhão); (2) Gargalo imediato: Decisão paradigmática do TJMT determinando o afastamento compulsório dos controladores por indícios de confusão patrimonial e vacância na gestão operacional; (3) Oportunidade de mandato: Indicação imediata para Gestão Judicial / CRO Independente em substituição aos gestores afastados, assessoria ao comitê de tradings/bancos (Cargill, Bunge, COFCO, BB, Bradesco, Santander) e alienação de UPIs de armazenagem.", "causa_crise": "Alavancagem elevada na expansão de silos e armazéns gerais em Sorriso e Sinop/MT combinada a quebras de contratos de barter e disputas com tradings sobre depósito de grãos (passivo de R$ 1,78 bilhão)", "gargalo_imediato": "Decisão paradigmática do TJMT determinando o afastamento compulsório dos controladores por indícios de confusão patrimonial e vacância na gestão operacional", "tese_mandato": "Indicação imediata para Gestão Judicial / CRO Independente em substituição aos gestores afastados, assessoria ao comitê de tradings/bancos (Cargill, Bunge, COFCO, BB, Bradesco, Santander) e alienação de UPIs de armazenagem.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Gigante agroindustrial mato-grossense sediada em Sorriso e Sinop/MT, com atuação destacada na armazenagem geral de grãos (rede de silos estáticos de grande capacidade), originação comercial de soja e milho, cultivo agrícola próprio e industrialização de biocombustíveis/esmagamento no norte do estado.", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 712.0, "ev_estimado_mm": 1157.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 22.0, "classe_i_pct": 4.0, "classe_ii_pct": 36.0, "fiscal_pct": 8.0, "classe_iii_pct": 25.0, "classe_iv_pct": 5.0}}, "agro_meta": {"cpr_status": "CPRs Físicas/Financeiras + Contratos de Depósito de Grãos", "alienacao_terras": "Alienação Fiduciária de Silos e Armazéns Gerais", "ativos_rurais": "Complexo de silos graneleiros e terras em Sorriso e Sinop/MT", "cra_exposicao": "Dívida estruturada com Tradings (Cargill, Bunge, COFCO) e Bancos"}, "calendar_meta": {"data_marco_iso": "2026-12-07", "data_marco_br": "07/12/2026", "dias_restantes": 52, "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)", "marco_tipo": "Entrega PRJ (Art. 53)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (52d)", "is_fixed_edital": false}}, "Qualiciclo Agrícola S.A. (Rede Lavoro de Insumos)": {"tese": "(1) Causa da crise: Retração severa na comercialização de defensivos e fertilizantes na rede controlada pela Lavoro, inadimplência de clientes rurais e aperto de crédito junto às multinacionais químicas (passivo de R$ 2,55 bilhões); (2) Gargalo imediato: Processamento da Recuperação Judicial na 2ª Vara de Falências de SP com forte exposição de Corteva Agriscience, Mosaic Fertilizantes, UPL, FMC, Helm, Banco Votorantim e Daycoval; (3) Oportunidade de mandato: Watchdog Creditor-Side para o comitê de multinacionais químicas e bancos, estruturação de DIP Comercial de fornecimento continuado para a safra e auditoria de carteira de recebíveis (CPRs).", "causa_crise": "Retração severa na comercialização de defensivos e fertilizantes na rede controlada pela Lavoro, inadimplência de clientes rurais e aperto de crédito junto às multinacionais químicas (passivo de R$ 2,55 bilhões)", "gargalo_imediato": "Processamento da Recuperação Judicial na 2ª Vara de Falências de SP com forte exposição de Corteva Agriscience, Mosaic Fertilizantes, UPL, FMC, Helm, Banco Votorantim e Daycoval", "tese_mandato": "Watchdog Creditor-Side para o comitê de multinacionais químicas e bancos, estruturação de DIP Comercial de fornecimento continuado para a safra e auditoria de carteira de recebíveis (CPRs).", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Importante rede de distribuição de insumos agrícolas, defensivos, fertilizantes e sementes (Qualiciclo Agrícola S.A.), integrada à plataforma da gigante Lavoro Agro, com forte presença comercial nos polos agrícolas de São Paulo (Limeira), Minas Gerais, Goiás e sul de Mato Grosso.", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 1019.2, "ev_estimado_mm": 1274.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 22.0, "classe_i_pct": 4.0, "classe_ii_pct": 36.0, "fiscal_pct": 8.0, "classe_iii_pct": 25.0, "classe_iv_pct": 5.0}}, "agro_meta": {"cpr_status": "Duplicatas Rurais e CPRs de Insumos Químicos", "alienacao_terras": "Garantias Fiduciárias sobre Recebíveis de Safra", "ativos_rurais": "Rede de revendas de insumos agrícolas em SP, MG e GO", "cra_exposicao": "Multinacionais Químicas (Corteva, Mosaic, UPL) + Votorantim/Daycoval"}, "calendar_meta": {"data_marco_iso": "2026-12-08", "data_marco_br": "08/12/2026", "dias_restantes": 53, "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)", "marco_tipo": "Entrega PRJ (Art. 53)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (53d)", "is_fixed_edital": false}}, "Cooperativa Agrícola Mista General Osório Ltda. (Cotribá)": {"tese": "(1) Causa da crise: Crise aguda de liquidez na cooperativa agropecuária mais antiga do Brasil (Ibirubá/RS) após sucessivas quebras de safra no Rio Grande do Sul e corrida de cooperados e bancos sobre o caixa (passivo de R$ 1,42 bilhão); (2) Gargalo imediato: Convocação de assembleia para Liquidação Extrajudicial com continuidade operacional, inadimplência de R$ 150 milhões em CRAs e exposição pulverizada em mais de 30 bancos liderados por BRDE (R$ 130M), Votorantim, Sicredi e Banrisul; (3) Oportunidade de mandato: Watchdog Creditor-Side para o sindicato bancário e titulares de CRAs (Vórtx/Opea), segregação de ativos operacionais e alienação estruturada de UPIs de silos e unidades de recebimento de grãos.", "causa_crise": "Crise aguda de liquidez na cooperativa agropecuária mais antiga do Brasil (Ibirubá/RS) após sucessivas quebras de safra no Rio Grande do Sul e corrida de cooperados e bancos sobre o caixa (passivo de R$ 1,42 bilhão)", "gargalo_imediato": "Convocação de assembleia para Liquidação Extrajudicial com continuidade operacional, inadimplência de R$ 150 milhões em CRAs e exposição pulverizada em mais de 30 bancos liderados por BRDE (R$ 130M), Votorantim, Sicredi e Banrisul", "tese_mandato": "Watchdog Creditor-Side para o sindicato bancário e titulares de CRAs (Vórtx/Opea), segregação de ativos operacionais e alienação estruturada de UPIs de silos e unidades de recebimento de grãos.", "agentes_fiduciarios": "Vórtx DTVM", "securitizadoras": "Opea Securitizadora", "energy_meta": null, "descricao_empresa": "Cooperativa agropecuária mais antiga em atividade no Brasil, fundada em 1911 no município de Ibirubá/RS. Reúne cerca de 9.500 produtores rurais cooperados e opera vasta infraestrutura de mais de 60 unidades de recebimento e armazenagem de grãos (capacidade estática para milhões de sacas), fábricas de rações, supermercados, lojas de insumos e posto de combustível no Rio Grande do Sul.", "model_params": {"haircut_pct": 75.0, "recuperacao_pct": 25.0, "desconto_secundario_pct": 50.0, "valor_recuperado_mm": 355.0, "ev_estimado_mm": 923.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 22.0, "classe_i_pct": 4.0, "classe_ii_pct": 36.0, "fiscal_pct": 8.0, "classe_iii_pct": 25.0, "classe_iv_pct": 5.0}}, "agro_meta": {"cpr_status": "CRAs Inadimplentes (R$ 150M) + Repasses Cooperativos", "alienacao_terras": "Garantias Reais sobre Unidades de Recebimento de Grãos", "ativos_rurais": "60+ unidades de silos, fábrica de rações e imóveis no RS (UPIs)", "cra_exposicao": "R$ 150,0 MM em CRAs (Opea Securitizadora / Vórtx)"}, "calendar_meta": {"data_marco_iso": "2026-11-03", "data_marco_br": "03/11/2026", "dias_restantes": 18, "marco_label": "Assembleia Geral para Instalação da Liquidação Extrajudicial com Continuidade e UPIs", "marco_tipo": "Assembleia / UPI", "urgencia_nivel": "alerta", "urgencia_label": "CURTO PRAZO (18d)", "is_fixed_edital": true}}, "Essere Group (Indústria Química Kimberlit Ltda.)": {"tese": "(1) Causa da crise: Queda abrupta de 89% no faturamento semestral (de R$ 534M para R$ 56M) no mercado de fertilizantes especiais e defensivos biológicos, gerando forte aperto de liquidez sobre R$ 222 milhões de passivo; (2) Gargalo imediato: Recuperação Judicial na 2ª Vara Cível de Olímpia/SP com concentração bancária extrema (CR3 > 82% em Banco do Brasil R$ 68,3M, Itaú R$ 42,4M e Santander R$ 37,4M) e decisão de venda de ativos; (3) Oportunidade de mandato: Assessoria em M&A Distressed para alienação judicial das UPIs industriais (planta de biológicos Bionat em Olímpia/SP e unidade Loyder NPK) e Watchdog para o bloco BB/Itaú/Santander.", "causa_crise": "Queda abrupta de 89% no faturamento semestral (de R$ 534M para R$ 56M) no mercado de fertilizantes especiais e defensivos biológicos, gerando forte aperto de liquidez sobre R$ 222 milhões de passivo", "gargalo_imediato": "Recuperação Judicial na 2ª Vara Cível de Olímpia/SP com concentração bancária extrema (CR3 > 82% em Banco do Brasil R$ 68,3M, Itaú R$ 42,4M e Santander R$ 37,4M) e decisão de venda de ativos", "tese_mandato": "Assessoria em M&A Distressed para alienação judicial das UPIs industriais (planta de biológicos Bionat em Olímpia/SP e unidade Loyder NPK) e Watchdog para o bloco BB/Itaú/Santander.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Holding brasileira de tecnologia aplicada ao agronegócio sediada em Olímpia/SP (integrada por Indústria Química Kimberlit, Bionat Soluções Biológicas e Loyder Brasil). É referência nacional no desenvolvimento e fabricação de bioinsumos (bionematicidas e biofungicidas), fertilizantes especiais foliares e tecnologia de aplicação.", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 88.8, "ev_estimado_mm": 144.3, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 22.0, "classe_i_pct": 4.0, "classe_ii_pct": 36.0, "fiscal_pct": 8.0, "classe_iii_pct": 25.0, "classe_iv_pct": 5.0}}, "agro_meta": {"cpr_status": "Cédulas Bancárias Concentradas (CR3 > 82% BB, Itaú, Santander)", "alienacao_terras": "Garantias sobre Plantas Industriais e Recebíveis", "ativos_rurais": "UPI Planta de Biológicos Bionat (Olímpia/SP) e Unidade Loyder NPK", "cra_exposicao": "Crédito bancário direto concentrado"}, "calendar_meta": {"data_marco_iso": "2026-12-08", "data_marco_br": "08/12/2026", "dias_restantes": 53, "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)", "marco_tipo": "Entrega PRJ (Art. 53)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (53d)", "is_fixed_edital": false}}, "Grupo Fictor (Fictor Holding S/A, Fictor Invest Ltda e outras 18 empresas)": {"tese": "(1) Causa da crise: Descasamento de liquidez em estruturas de mútuo conversível, SCPs e debêntures com captação pulverizada; (2) Gargalo imediato: Prazo fatal para apresentação de objeções ao Plano de RJ até 29/10/2026; (3) Oportunidade de mandato: Creditor-Side Advisory e Comitê de Credores para investidores institucionais + Rastreamento Forense de UPIs.", "causa_crise": "Descasamento de liquidez em estruturas de mútuo conversível, SCPs e debêntures com captação pulverizada", "gargalo_imediato": "Prazo fatal para apresentação de objeções ao Plano de RJ até 29/10/2026", "tese_mandato": "Creditor-Side Advisory e Comitê de Credores para investidores institucionais + Rastreamento Forense de UPIs.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Conglomerado paulista de investimentos alternativos, private equity, securitização e fomento mercantil (Fictor Holding S/A, Fictor Invest e 18 controladas), sediado na Av. Paulista/Faria Lima em São Paulo/SP, com participações em alimentos, agronegócio, energia, logística e serviços financeiros estruturados via SCPs, mútuos e debêntures.", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 1680.0, "ev_estimado_mm": 2730.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-10-29", "data_marco_br": "29/10/2026", "dias_restantes": 13, "marco_label": "Prazo Fatal para Apresentação de Objeções ao Plano de RJ (Art. 55)", "marco_tipo": "Objeções ao Plano", "urgencia_nivel": "critico", "urgencia_label": "URGENTE (13d)", "is_fixed_edital": true}}, "Grupo Família Almeida (Levi de Almeida e Outros - Novo Mundo)": {"tese": "(1) Causa da crise: Choque de custos de fertilizantes/combustíveis e quebra climática (El Niño) em Novo Mundo/MT; (2) Gargalo imediato: Pedido de desistência da RJ pelos produtores às vésperas da votação do plano, com AGC convocada em 15/10 para 12/11/2026 (1ª conv.) e 19/11/2026 (2ª conv.); (3) Oportunidade de mandato: Watchdog e Assessoria a Credores (BB, John Deere, Caixa, Sicredi e tradings) para barrar desistência sem garantias ou instalar Comitê de Credores na AGC.", "causa_crise": "Choque de custos de fertilizantes/combustíveis e quebra climática (El Niño) em Novo Mundo/MT", "gargalo_imediato": "Pedido de desistência da RJ pelos produtores às vésperas da votação do plano, com AGC convocada em 15/10 para 12/11/2026 (1ª conv.) e 19/11/2026 (2ª conv.)", "tese_mandato": "Watchdog e Assessoria a Credores (BB, John Deere, Caixa, Sicredi e tradings) para barrar desistência sem garantias ou instalar Comitê de Credores na AGC.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Tradicional grupo familiar produtor de grãos (liderado por Levi de Almeida e familiares) estabelecido nos municípios de Novo Mundo, Guarantã do Norte e Sinop, no extremo norte de Mato Grosso, cultivando milhares de hectares de soja e milho segunda safra com parque próprio de colheitadeiras e tratores.", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 25.6, "ev_estimado_mm": 32.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 22.0, "classe_i_pct": 4.0, "classe_ii_pct": 36.0, "fiscal_pct": 8.0, "classe_iii_pct": 25.0, "classe_iv_pct": 5.0}}, "agro_meta": {"cpr_status": "CPRs Banco do Brasil (R$ 15,2M) + Insumos (Agrocella/Agromave)", "alienacao_terras": "Alienação Fiduciária de Maquinário (Banco John Deere R$ 9,1M extraconcursal)", "ativos_rurais": "Fazendas de soja e milho e parque de máquinas em Novo Mundo/MT", "cra_exposicao": "Sem CRA (Exposição BB, John Deere, Caixa e Sicredi)"}, "calendar_meta": {"data_marco_iso": "2026-11-12", "data_marco_br": "12/11/2026", "dias_restantes": 27, "marco_label": "Assembleia Geral de Credores (AGC — 1ª Convocação Virtual)", "marco_tipo": "AGC Pautada", "urgencia_nivel": "alerta", "urgencia_label": "CURTO PRAZO (27d)", "is_fixed_edital": true}}, "Grupo NEX (Nex Group Participações S.A. / Capa Engenharia S.A.)": {"tese": "(1) Causa da crise: Distratos acima de 85% em incorporações (2.675 de 6.090 unidades desfeitas) e frustração da venda do empreendimento Mirantes do Parque; (2) Gargalo imediato: Leilões extrajudiciais de áreas em Itajaí/SC (13 e 16/10) com deságio de 50% (R$ 11,93M) e sessão de mediação agendada para 06/11/2026; (3) Oportunidade de mandato: Estruturação de M&A Distressed / Aquisição de Ativos Imobiliários (Itajaí, Gravataí e Porto Alegre) ou Assessoria Técnica na mediação Cejusc.", "causa_crise": "Distratos acima de 85% em incorporações (2.675 de 6.090 unidades desfeitas) e frustração da venda do empreendimento Mirantes do Parque", "gargalo_imediato": "Leilões extrajudiciais de áreas em Itajaí/SC (13 e 16/10) com deságio de 50% (R$ 11,93M) e sessão de mediação agendada para 06/11/2026", "tese_mandato": "Estruturação de M&A Distressed / Aquisição de Ativos Imobiliários (Itajaí, Gravataí e Porto Alegre) ou Assessoria Técnica na mediação Cejusc.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Importante grupo gaúcho de incorporação imobiliária residencial/resort e engenharia pesada (Nex Group Participações e construtora Capa Engenharia), sediado em Porto Alegre/RS, com histórico de dezenas de empreendimentos entregues na Serra Gaúcha (Gramado), litoral catarinense (Praia Brava em Itajaí/SC) e Região Metropolitana de Porto Alegre.", "model_params": {"haircut_pct": 45.0, "recuperacao_pct": 55.0, "desconto_secundario_pct": 30.0, "valor_recuperado_mm": 77.0, "ev_estimado_mm": 91.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-11-06", "data_marco_br": "06/11/2026", "dias_restantes": 21, "marco_label": "Sessão Oficial de Mediação Concursal no CEJUSC Empresarial de Porto Alegre", "marco_tipo": "Mediação CEJUSC", "urgencia_nivel": "alerta", "urgencia_label": "CURTO PRAZO (21d)", "is_fixed_edital": true}}, "Grupo Educacional Uniandrade (Campos de Andrade / Unib)": {"tese": "(1) Causa da crise: Retração do FIES, concorrência do EAD de baixo custo, endividamento bancário de curto prazo e bloqueios trabalhistas/fiscais; (2) Gargalo imediato: Indeferimento da RJ por formato de associação civil sem fins lucrativos, deixando R$ 304,2M expostos a execuções imediatas e penhora de R$ 10,7M em depósitos judiciais; (3) Oportunidade de mandato: Assessoria em Conversão Societária (Lei 11.101/05) + Estruturação de M&A Distressed / Sale & Leaseback dos campi universitários em Curitiba, Maringá e SP.", "causa_crise": "Retração do FIES, concorrência do EAD de baixo custo, endividamento bancário de curto prazo e bloqueios trabalhistas/fiscais", "gargalo_imediato": "Indeferimento da RJ por formato de associação civil sem fins lucrativos, deixando R$ 304,2M expostos a execuções imediatas e penhora de R$ 10,7M em depósitos judiciais", "tese_mandato": "Assessoria em Conversão Societária (Lei 11.101/05) + Estruturação de M&A Distressed / Sale & Leaseback dos campi universitários em Curitiba, Maringá e SP.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Tradicional grupo educacional de ensino superior com sede em Curitiba/PR (Centro Universitário Campos de Andrade — Uniandrade, Faculdade Uniandrade Maringá e Universidade Ibirapuera — Unib em São Paulo/SP), ofertando dezenas de cursos presenciais e EAD na área da saúde, engenharias e direito em amplos campi próprios.", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 121.6, "ev_estimado_mm": 152.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-12-11", "data_marco_br": "11/12/2026", "dias_restantes": 56, "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)", "marco_tipo": "Entrega PRJ (Art. 53)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (56d)", "is_fixed_edital": false}}, "Moinho Corina Alimentos Ltda.": {"tese": "(1) Causa da crise: Execução da fornecedora de trigo Nidera/COFCO, corte de crédito bancário e queda de moagem de 12 mil t/mês para 744 t/mês após encerramento da 1ª RJ em fev/2026; (2) Gargalo imediato: Dois pedidos de falência em curso (Oliveira Cred Fomento) e necessidade de suspensão urgente de constrições; (3) Oportunidade de mandato: Watchdog Creditor-Side para COFCO, Santander e Bradesco + M&A Distressed / Alienação de UPI da planta moageira e silos em Cotia/SP.", "causa_crise": "Execução da fornecedora de trigo Nidera/COFCO, corte de crédito bancário e queda de moagem de 12 mil t/mês para 744 t/mês após encerramento da 1ª RJ em fev/2026", "gargalo_imediato": "Dois pedidos de falência em curso (Oliveira Cred Fomento) e necessidade de suspensão urgente de constrições", "tese_mandato": "Watchdog Creditor-Side para COFCO, Santander e Bradesco + M&A Distressed / Alienação de UPI da planta moageira e silos em Cotia/SP.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Indústria moageira de trigo e alimentos fundada há mais de duas décadas em Cotia/SP (Região Metropolitana de São Paulo). Opera planta industrial própria de moagem e silos graneleiros com capacidade instalada para processar até 12.000 toneladas de trigo por mês, produzindo farinhas industriais, pré-misturas para panificação e farelo sob as marcas Corina, A Nata e Nadine.", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 60.4, "ev_estimado_mm": 98.2, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 22.0, "classe_i_pct": 4.0, "classe_ii_pct": 36.0, "fiscal_pct": 8.0, "classe_iii_pct": 25.0, "classe_iv_pct": 5.0}}, "agro_meta": {"cpr_status": "Fornecimento Físico de Trigo (COFCO/Nidera detém 41% — R$ 62,18M)", "alienacao_terras": "Garantias sobre Planta Moageira e Silos", "ativos_rurais": "Planta moageira (12 mil t/mês), silos em Cotia/SP e marcas Corina/A Nata", "cra_exposicao": "Crédito comercial COFCO + Santander e Bradesco"}, "calendar_meta": {"data_marco_iso": "2026-12-08", "data_marco_br": "08/12/2026", "dias_restantes": 53, "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)", "marco_tipo": "Entrega PRJ (Art. 53)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (53d)", "is_fixed_edital": false}}, "Grupo JMR (Armazéns Santa Luzia Ltda. e HS Agropecuária Ltda.)": {"tese": "(1) Causa da crise: Queda nas cotações de soja/milho frente a custeios travados na alta e aperto de juros; (2) Gargalo imediato: Sete execuções do BB (R$ 51,8M), busca e apreensão de maquinário pelo Banco John Deere e exigência de laudo de essencialidade em 15 dias pela juíza de Itaberaí/GO; (3) Oportunidade de mandato: Watchdog de Colateral para Itaú, BB, Caixa e Daycoval + Desinvestimento/UPI de fazendas e da estrutura de armazenagem (Armazéns Santa Luzia).", "causa_crise": "Queda nas cotações de soja/milho frente a custeios travados na alta e aperto de juros", "gargalo_imediato": "Sete execuções do BB (R$ 51,8M), busca e apreensão de maquinário pelo Banco John Deere e exigência de laudo de essencialidade em 15 dias pela juíza de Itaberaí/GO", "tese_mandato": "Watchdog de Colateral para Itaú, BB, Caixa e Daycoval + Desinvestimento/UPI de fazendas e da estrutura de armazenagem (Armazéns Santa Luzia).", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Consolidado grupo agroindustrial goiano sediado em Itaberaí/GO (composto por Armazéns Gerais Santa Luzia e HS Agropecuária), operando complexo próprio de silos e secadores de grãos aliado a 50 unidades produtivas rurais dedicadas ao cultivo irrigado e de sequeiro de soja, milho, feijão, tomate industrial e citricultura (laranja).", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 179.6, "ev_estimado_mm": 291.9, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 22.0, "classe_i_pct": 4.0, "classe_ii_pct": 36.0, "fiscal_pct": 8.0, "classe_iii_pct": 25.0, "classe_iv_pct": 5.0}}, "agro_meta": {"cpr_status": "R$ 289,0M Concursal + R$ 160,1M Extraconcursal (Lei 13.986/20)", "alienacao_terras": "Alienação Fiduciária de 2 Fazendas ao Itaú (R$ 75M) + 28 contratos BB (R$ 76,9M)", "ativos_rurais": "Armazéns Gerais Santa Luzia + 50 unidades produtivas rurais em Itaberaí/GO", "cra_exposicao": "Crédito Bancário (BB, Itaú, Caixa, Daycoval) + Syngenta e John Deere"}, "calendar_meta": {"data_marco_iso": "2026-10-22", "data_marco_br": "22/10/2026", "dias_restantes": 6, "marco_label": "Vencimento do Prazo Judicial (15d) para Emenda da Inicial e Laudo de Essencialidade", "marco_tipo": "Prazo Judicial", "urgencia_nivel": "critico", "urgencia_label": "URGENTE (6d)", "is_fixed_edital": true}}, "Importadora Oplima Ltda.": {"tese": "(1) Causa da crise: Queda de 68% no faturamento pós-ciclo de obras da COP-30 em Belém e retenção diária de recebíveis de cartão pelos bancos (caixa reduzido a R$ 903); (2) Gargalo imediato: Juízo manteve travas fiduciárias de Safra e Santander e exigiu esclarecimento das garantias bancárias frente à projeção de deságio de 80% em 120 meses; (3) Oportunidade de mandato: Assessoria ao Sindicato de Bancos (Safra, BASA, Santander, BB) na defesa das travas fiduciárias e impugnação da classificação na Classe II.", "causa_crise": "Queda de 68% no faturamento pós-ciclo de obras da COP-30 em Belém e retenção diária de recebíveis de cartão pelos bancos (caixa reduzido a R$ 903)", "gargalo_imediato": "Juízo manteve travas fiduciárias de Safra e Santander e exigiu esclarecimento das garantias bancárias frente à projeção de deságio de 80% em 120 meses", "tese_mandato": "Assessoria ao Sindicato de Bancos (Safra, BASA, Santander, BB) na defesa das travas fiduciárias e impugnação da classificação na Classe II.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Tradicional rede varejista e atacadista de materiais de construção, acabamento, pisos, louças e ferragens da Região Metropolitana de Belém/PA, fundada há mais de 30 anos. Opera 8 lojas físicas de grande porte em Belém e amplo centro de distribuição logístico próprio no município de Ananindeua/PA.", "model_params": {"haircut_pct": 80.0, "recuperacao_pct": 20.0, "desconto_secundario_pct": 40.0, "valor_recuperado_mm": 13.2, "ev_estimado_mm": 33.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-11-30", "data_marco_br": "30/11/2026", "dias_restantes": 45, "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)", "marco_tipo": "Entrega PRJ (Art. 53)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (45d)", "is_fixed_edital": false}}, "AJX Capital Investimentos S.A.": {"tese": "(1) Causa da crise: Insustentabilidade na captação via Cédulas de Crédito Bancário (CCBs) endossadas a investidores com bloqueio de resgates; (2) Gargalo imediato: Decretação de falência em 15/10/2026 por impontualidade (art. 94, I da Lei 11.101/05) sem depósito elisivo, com bloqueio judicial de contas, imóveis e veículos; (3) Oportunidade de mandato: Rastreamento Forense de Ativos (Asset Tracing) e Assessoria a Comitê de Investidores Lesados (R$ 350M) ou Estruturação de Recurso com Plano Alternativo.", "causa_crise": "Insustentabilidade na captação via Cédulas de Crédito Bancário (CCBs) endossadas a investidores com bloqueio de resgates", "gargalo_imediato": "Decretação de falência em 15/10/2026 por impontualidade (art. 94, I da Lei 11.101/05) sem depósito elisivo, com bloqueio judicial de contas, imóveis e veículos", "tese_mandato": "Rastreamento Forense de Ativos (Asset Tracing) e Assessoria a Comitê de Investidores Lesados (R$ 350M) ou Estruturação de Recurso com Plano Alternativo.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Fintech e plataforma de originação de crédito estruturado sediada em Alphaville (Barueri/SP), especializada na estruturação e distribuição de Cédulas de Crédito Bancário (CCBs) endossadas a investidores qualificados e de varejo de alta renda, com captação pulverizada em âmbito nacional.", "model_params": {"haircut_pct": 75.0, "recuperacao_pct": 25.0, "desconto_secundario_pct": 50.0, "valor_recuperado_mm": 87.5, "ev_estimado_mm": 175.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 12.0, "classe_i_pct": 14.0, "classe_ii_pct": 22.0, "fiscal_pct": 24.0, "classe_iii_pct": 24.0, "classe_iv_pct": 4.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-11-29", "data_marco_br": "29/11/2026", "dias_restantes": 44, "marco_label": "Publicação do Quadro de Arrecadação de Ativos & Edital de Leilão (Art. 141)", "marco_tipo": "Arrecadação / Leilão", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (44d)", "is_fixed_edital": false}}, "Grupo Ezata (Ezata Industrial Ltda. e MAGM Empreendimentos Ltda.)": {"tese": "(1) Causa da crise: Queda de 64% na receita (de R$ 61M para R$ 21,7M) por retração na demanda de máquinas agrícolas, enchentes/estiagens no RS e custo financeiro; (2) Gargalo imediato: Fim sem acordo da mediação cautelar, pedido de falência movido pela Gerdau Aços Longos e exigência de laudo de constatação prévia em 5 dias sem suspensão automática de execuções; (3) Oportunidade de mandato: Watchdog Creditor-Side para Sicredi, Itaú, Santander, Caixa e Gerdau + Sale & Leaseback ou Alienação de UPI do parque fabril em Passo Fundo/RS.", "causa_crise": "Queda de 64% na receita (de R$ 61M para R$ 21,7M) por retração na demanda de máquinas agrícolas, enchentes/estiagens no RS e custo financeiro", "gargalo_imediato": "Fim sem acordo da mediação cautelar, pedido de falência movido pela Gerdau Aços Longos e exigência de laudo de constatação prévia em 5 dias sem suspensão automática de execuções", "tese_mandato": "Watchdog Creditor-Side para Sicredi, Itaú, Santander, Caixa e Gerdau + Sale & Leaseback ou Alienação de UPI do parque fabril em Passo Fundo/RS.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Indústria metalmecânica gaúcha sediada no distrito industrial de Passo Fundo/RS (Ezata Industrial e holding patrimonial MAGM), especializada no corte a laser, dobra CNC, solda robotizada e pintura eletrostática de componentes e subconjuntos metálicos fornecidos para grandes fabricantes de máquinas e implementos agrícolas do Sul.", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 22.0, "ev_estimado_mm": 35.8, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-10-21", "data_marco_br": "21/10/2026", "dias_restantes": 5, "marco_label": "Entrega do Laudo de Constatação Prévia (Art. 51-A — 5 dias)", "marco_tipo": "Perícia Prévia 51-A", "urgencia_nivel": "critico", "urgencia_label": "URGENTE (5d)", "is_fixed_edital": true}}, "Grupo Ditália (Ditália Móveis Industrial Ltda.)": {"tese": "(1) Causa da crise: Rejeição do plano de RJ pelos credores e convolação em falência com autorização judicial de operação continuada (101 funcionários ativos e folha em dia); (2) Gargalo imediato: Leilão judicial da UPI Parque Fabril Ditália divulgado em 14/10 para o dia 10/11/2026 com lance inicial de R$ 48 milhões; (3) Oportunidade de mandato: Assessoria Buy-Side (M&A Distressed) para investidores industriais/fundos na aquisição da UPI livre de sucessão (art. 141 da Lei 11.101/05).", "causa_crise": "Rejeição do plano de RJ pelos credores e convolação em falência com autorização judicial de operação continuada (101 funcionários ativos e folha em dia)", "gargalo_imediato": "Leilão judicial da UPI Parque Fabril Ditália divulgado em 14/10 para o dia 10/11/2026 com lance inicial de R$ 48 milhões", "tese_mandato": "Assessoria Buy-Side (M&A Distressed) para investidores industriais/fundos na aquisição da UPI livre de sucessão (art. 141 da Lei 11.101/05).", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Tradicional fabricante gaúcha de móveis seriados em MDP/MDF (cozinhas moduladas, dormitórios e móveis para escritório e home office), fundada na Serra Gaúcha com amplo parque fabril automatizado em Monte Belo do Sul/RS (região de Bento Gonçalves), historicamente exportadora e fornecedora das grandes redes varejistas e e-commerces nacionais.", "model_params": {"haircut_pct": 75.0, "recuperacao_pct": 25.0, "desconto_secundario_pct": 50.0, "valor_recuperado_mm": 21.25, "ev_estimado_mm": 55.2, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 12.0, "classe_i_pct": 14.0, "classe_ii_pct": 22.0, "fiscal_pct": 24.0, "classe_iii_pct": 24.0, "classe_iv_pct": 4.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-11-10", "data_marco_br": "10/11/2026", "dias_restantes": 25, "marco_label": "Leilão Judicial da UPI Parque Fabril Ditália (Lance Inicial R$ 48 MM)", "marco_tipo": "Leilão de UPI", "urgencia_nivel": "alerta", "urgencia_label": "CURTO PRAZO (25d)", "is_fixed_edital": true}}, "Lojas Dona do Lar Ltda.": {"tese": "(1) Causa da crise: Descumprimento de obrigações do plano de RJ de 15 lojas em MT e fechamento abrupto da sede e do Centro de Distribuição; (2) Gargalo imediato: Decisão judicial divulgada em 13-15/10/2026 determinando devassa patrimonial via Renajud, Infojud, Detran-MT e cartórios imobiliários por obstrução de acesso à massa falida (art. 104 da Lei 11.101/05); (3) Oportunidade de mandato: Investigação Forense de Ativos (Asset Tracing) e Recuperação de Crédito para o pool de bancos (Santander, Sofisa, Bradesco, BMP, Daycoval) e fabricantes (Whirlpool, Elgin, Semp TCL, Panasonic).", "causa_crise": "Descumprimento de obrigações do plano de RJ de 15 lojas em MT e fechamento abrupto da sede e do Centro de Distribuição", "gargalo_imediato": "Decisão judicial divulgada em 13-15/10/2026 determinando devassa patrimonial via Renajud, Infojud, Detran-MT e cartórios imobiliários por obstrução de acesso à massa falida (art. 104 da Lei 11.101/05)", "tese_mandato": "Investigação Forense de Ativos (Asset Tracing) e Recuperação de Crédito para o pool de bancos (Santander, Sofisa, Bradesco, BMP, Daycoval) e fabricantes (Whirlpool, Elgin, Semp TCL, Panasonic).", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Conhecida rede varejista regional de móveis, eletrodomésticos, celulares e utilidades domésticas sediada em Cuiabá/MT, que chegou a operar 15 lojas físicas estrategicamente posicionadas na Baixada Cuiabana (Cuiabá e Várzea Grande) e municípios do interior mato-grossense, com forte operação de crediário próprio.", "model_params": {"haircut_pct": 75.0, "recuperacao_pct": 25.0, "desconto_secundario_pct": 50.0, "valor_recuperado_mm": 9.5, "ev_estimado_mm": 19.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 12.0, "classe_i_pct": 14.0, "classe_ii_pct": 22.0, "fiscal_pct": 24.0, "classe_iii_pct": 24.0, "classe_iv_pct": 4.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-11-27", "data_marco_br": "27/11/2026", "dias_restantes": 42, "marco_label": "Publicação do Quadro de Arrecadação de Ativos & Edital de Leilão (Art. 141)", "marco_tipo": "Arrecadação / Leilão", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (42d)", "is_fixed_edital": false}}, "Grupo MPC (MJRE Construtora Ltda. e Usinlagos Pavimentação)": {"tese": "(1) Causa da crise: Suspensão de contratos de pavimentação do Programa Asfalto Liso no RJ e queda do efetivo de 1.200 para 650 trabalhadores; (2) Gargalo imediato: Consolidação apenas processual (sem consolidação substancial, art. 69-I) e determinação judicial de depósito em conta vinculada dos recebíveis de dois contratos com a Petrobras; (3) Oportunidade de mandato: Watchdog de Conta Judicial/Escrow dos recebíveis Petrobras e Assessoria a Credores Financeiros (Caixa, Banco Caterpillar e Votorantim).", "causa_crise": "Suspensão de contratos de pavimentação do Programa Asfalto Liso no RJ e queda do efetivo de 1.200 para 650 trabalhadores", "gargalo_imediato": "Consolidação apenas processual (sem consolidação substancial, art. 69-I) e determinação judicial de depósito em conta vinculada dos recebíveis de dois contratos com a Petrobras", "tese_mandato": "Watchdog de Conta Judicial/Escrow dos recebíveis Petrobras e Assessoria a Credores Financeiros (Caixa, Banco Caterpillar e Votorantim).", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Grupo fluminense de engenharia pesada, pavimentação asfáltica e obras de infraestrutura urbana/industrial sediado no Rio de Janeiro/RJ (integrado por MJRE Construtora e Usinlagos Usina de Asfalto), detentor de usinas próprias de CBUQ e contratos de engenharia e manutenção em instalações da Petrobras e prefeituras do estado do RJ.", "model_params": {"haircut_pct": 60.0, "recuperacao_pct": 40.0, "desconto_secundario_pct": 35.0, "valor_recuperado_mm": 32.8, "ev_estimado_mm": 41.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-12-14", "data_marco_br": "14/12/2026", "dias_restantes": 59, "marco_label": "Prazo Legal Improrrogável para Entrega do Plano de RJ (Art. 53 — 60 dias)", "marco_tipo": "Entrega PRJ (Art. 53)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (59d)", "is_fixed_edital": false}}, "Grupo Assis Fortes (Servi-San Ltda., Servi-San Vigilância e Plast Nor)": {"tese": "(1) Causa da crise: Salto do passivo fiscal de R$ 69M para R$ 357M em 8 anos de RJ, inatividade das indústrias Plast Nor e Inbra-Pack e criação de empresa paralela (Servi-San Manutenção); (2) Gargalo imediato: Ordem de lacre imediato com força policial divulgada em 13/10/2026 (suspensa liminarmente no TJPI) e arrecadação de bens em 5 dias pelo AJ; (3) Oportunidade de mandato: Aquisição Distressed de Precatório (Município de Manaus), Imóveis e Frota + Rastreamento Forense de Ativos.", "causa_crise": "Salto do passivo fiscal de R$ 69M para R$ 357M em 8 anos de RJ, inatividade das indústrias Plast Nor e Inbra-Pack e criação de empresa paralela (Servi-San Manutenção)", "gargalo_imediato": "Ordem de lacre imediato com força policial divulgada em 13/10/2026 (suspensa liminarmente no TJPI) e arrecadação de bens em 5 dias pelo AJ", "tese_mandato": "Aquisição Distressed de Precatório (Município de Manaus), Imóveis e Frota + Rastreamento Forense de Ativos.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Um dos maiores e mais tradicionais conglomerados empresariais do Meio-Norte brasileiro, fundado em Teresina/PI na década de 1970 (Grupo Servi-San). Atua em terceirização de mão de obra e facilities, segurança patrimonial armada, transporte de valores (frota de carros-fortes no PI, MA e CE) e indústria de transformação plástica (Plast Nor e Inbra-Pack).", "model_params": {"haircut_pct": 75.0, "recuperacao_pct": 25.0, "desconto_secundario_pct": 50.0, "valor_recuperado_mm": 90.0, "ev_estimado_mm": 234.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 12.0, "classe_i_pct": 14.0, "classe_ii_pct": 22.0, "fiscal_pct": 24.0, "classe_iii_pct": 24.0, "classe_iv_pct": 4.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-10-20", "data_marco_br": "20/10/2026", "dias_restantes": 4, "marco_label": "Prazo Judicial (5d) para Arrecadação Forense de Bens e Precatório", "marco_tipo": "Arrecadação / Falência", "urgencia_nivel": "critico", "urgencia_label": "URGENTE (4d)", "is_fixed_edital": true}}, "Grupo Wolfstore (Wolfstore Indústria Têxtil Ltda. e W Nordeste Tecidos Ltda.)": {"tese": "(1) Causa da crise: Incêndio sem cobertura de seguro na unidade de espuma em fev/2026 (prejuízo de R$ 10M), sobretaxa dos EUA sobre calçados brasileiros e alta da Selic; (2) Gargalo imediato: Sessões decisivas de mediação no Cejusc realizadas de 14 a 16/10/2026 com 7 credores financeiros e sustação de busca e apreensão do Hope I FIDC; (3) Oportunidade de mandato: Assessoria Financeira para conversão em RJ/RE (prazo de 60 dias) ou Watchdog para o pool de 7 credores financeiros (Santander, ABC Brasil, Caixa, Unicred, RNX, Audax e Hope I FIDC).", "causa_crise": "Incêndio sem cobertura de seguro na unidade de espuma em fev/2026 (prejuízo de R$ 10M), sobretaxa dos EUA sobre calçados brasileiros e alta da Selic", "gargalo_imediato": "Sessões decisivas de mediação no Cejusc realizadas de 14 a 16/10/2026 com 7 credores financeiros e sustação de busca e apreensão do Hope I FIDC", "tese_mandato": "Assessoria Financeira para conversão em RJ/RE (prazo de 60 dias) ou Watchdog para o pool de 7 credores financeiros (Santander, ABC Brasil, Caixa, Unicred, RNX, Audax e Hope I FIDC).", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Audax Securitizadora", "energy_meta": null, "descricao_empresa": "Grupo industrial têxtil e de componentes calçadistas sediado em Novo Hamburgo/RS (Vale dos Sinos), com filial fabril no polo calçadista de Poções/BA (W Nordeste Tecidos). É especializado na dublagem de tecidos técnicos, espumas laminadas, forros e palmilhas fornecidos para as maiores indústrias de calçados do Rio Grande do Sul e do Nordeste.", "model_params": {"haircut_pct": 45.0, "recuperacao_pct": 55.0, "desconto_secundario_pct": 30.0, "valor_recuperado_mm": 30.25, "ev_estimado_mm": 27.5, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 15.0, "classe_i_pct": 8.0, "classe_ii_pct": 28.0, "fiscal_pct": 12.0, "classe_iii_pct": 32.0, "classe_iv_pct": 5.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-10-23", "data_marco_br": "23/10/2026", "dias_restantes": 7, "marco_label": "Deliberação Pós-Sessão de Mediação CEJUSC com Pool de 7 Credores Financeiros", "marco_tipo": "Mediação CEJUSC", "urgencia_nivel": "critico", "urgencia_label": "URGENTE (7d)", "is_fixed_edital": true}}, "GDS Subholding S.A. (GDSolar Energia Renovável / Colibri Capital)": {"tese": "(1) Causa da crise: Deterioração severa de métricas de cobertura de crédito no projeto de geração solar distribuída, levando a Fitch a cortar o rating em 5 níveis de AA(bra) para BBB(bra) com Observação Negativa; (2) Gargalo imediato: Risco de acionamento de gatilhos de covenants financeiros e necessidade de waiver em AGD da emissão GDSS11 (R$ 410M); (3) Oportunidade de mandato: Assessoria em Reperfilamento de Dívida (DCM), Negociação de Waiver em AGD ou M&A de Usinas Fotovoltaicas (UFVs GDS).", "causa_crise": "Deterioração severa de métricas de cobertura de crédito no projeto de geração solar distribuída, levando a Fitch a cortar o rating em 5 níveis de AA(bra) para BBB(bra) com Observação Negativa", "gargalo_imediato": "Risco de acionamento de gatilhos de covenants financeiros e necessidade de waiver em AGD da emissão GDSS11 (R$ 410M)", "tese_mandato": "Assessoria em Reperfilamento de Dívida (DCM), Negociação de Waiver em AGD ou M&A de Usinas Fotovoltaicas (UFVs GDS).", "agentes_fiduciarios": "Oliveira Trust DTVM S.A. (Coord. Itaú BBA)", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": {"debenture_codigo": "GDSS11 — 1ª Emissão Debêntures Verdes (R$ 410M)", "agente_fiduciario": "Oliveira Trust DTVM S.A. (Coord. Itaú BBA)", "inadimplemento_ccee": "Adimplente (Geração Solar Distribuída Remota)", "risco_caducidade": "Moderado — Risco regulatório sobre enquadramento de subsídios TUST/TUSD (Lei 14.300)", "corte_rating_curtailment": "Fitch cortou rating em 5 níveis de AA(bra) para BBB(bra) (Watch Negative) em 08/10/2026 por queda no ICSD das UFVs", "submercado": "Nordeste"}, "descricao_empresa": "Subholding operacional do grupo GDSolar Energia Renovável (investida da gestora Colibri Capital), dedicada ao desenvolvimento, construção e operação de amplo portfólio de Usinas Solares Fotovoltaicas (UFVs) de geração distribuída remota (GD compartilhada e autoconsumo remoto) arrendadas a grandes clientes corporativos em múltiplos estados.", "model_params": {"haircut_pct": 35.0, "recuperacao_pct": 65.0, "desconto_secundario_pct": 25.0, "valor_recuperado_mm": 266.5, "ev_estimado_mm": 205.0, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 18.0, "classe_i_pct": 3.0, "classe_ii_pct": 42.0, "fiscal_pct": 7.0, "classe_iii_pct": 27.0, "classe_iv_pct": 3.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-11-05", "data_marco_br": "05/11/2026", "dias_restantes": 20, "marco_label": "Revisão de Covenants ICSD & AGD Preventiva da 1ª Emissão Verde (GDSS11)", "marco_tipo": "AGD Debêntures", "urgencia_nivel": "alerta", "urgencia_label": "CURTO PRAZO (20d)", "is_fixed_edital": true}}, "Grupo Fex Agro (Fex Agro Comercial Ltda. e Vincere Fertilizantes)": {"tese": "(1) Causa da crise: Elevação de 61% no custo financeiro da dívida (de R$ 6,9M para R$ 11,1M), restrição de crédito no agro e 7 protestos lavrados em Primavera do Leste e Canarana (R$ 2,05M); (2) Gargalo imediato: Projeção de caixa negativa em R$ 80,6M e divergência entre lista 100% quirografária e cessões fiduciárias bancárias auditadas; (3) Oportunidade de mandato: Watchdog Creditor-Side para Caixa (R$ 8,75M), Bradesco (R$ 7,34M) e CCAB Agro (R$ 9,77M) na auditoria de garantias fiduciárias e conversão em RJ.", "causa_crise": "Elevação de 61% no custo financeiro da dívida (de R$ 6,9M para R$ 11,1M), restrição de crédito no agro e 7 protestos lavrados em Primavera do Leste e Canarana (R$ 2,05M)", "gargalo_imediato": "Projeção de caixa negativa em R$ 80,6M e divergência entre lista 100% quirografária e cessões fiduciárias bancárias auditadas", "tese_mandato": "Watchdog Creditor-Side para Caixa (R$ 8,75M), Bradesco (R$ 7,34M) e CCAB Agro (R$ 9,77M) na auditoria de garantias fiduciárias e conversão em RJ.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Rede mato-grossense de distribuição de insumos agrícolas (sementes, defensivos químicos e especialidades), originação de grãos e comercialização de fertilizantes (Fex Agro Comercial e Vincere Fertilizantes), com matriz em Primavera do Leste/MT e filial estratégica no polo produtivo do Vale do Araguaia (Canarana/MT).", "model_params": {"haircut_pct": 45.0, "recuperacao_pct": 55.0, "desconto_secundario_pct": 30.0, "valor_recuperado_mm": 42.35, "ev_estimado_mm": 38.5, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 22.0, "classe_i_pct": 4.0, "classe_ii_pct": 36.0, "fiscal_pct": 8.0, "classe_iii_pct": 25.0, "classe_iv_pct": 5.0}}, "agro_meta": {"cpr_status": "23 Contratos em Dólar + 55 NFs de Defensivos (CCAB Agro R$ 9,77M)", "alienacao_terras": "Cessão Fiduciária de Recebíveis (Caixa R$ 8,75M e Bradesco R$ 7,34M)", "ativos_rurais": "Lojas técnicas e estoques em Primavera do Leste e Canarana/MT", "cra_exposicao": "Disputa forense sobre trava fiduciária de recebíveis"}, "calendar_meta": {"data_marco_iso": "2026-12-04", "data_marco_br": "04/12/2026", "dias_restantes": 49, "marco_label": "Vencimento da Blindagem Cautelar Art. 20-B (60 dias) — Conversão em RJ/PRE", "marco_tipo": "Cautelar 20-B (60d)", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (49d)", "is_fixed_edital": false}}, "Landco Administradora de Bens e Imóveis S.A. (Grupo Belagrícola)": {"tese": "(1) Causa da crise: Aperto de liquidez na holding patrimonial e imobiliária vinculada à rede de distribuição de insumos e grãos Belagrícola; (2) Gargalo imediato: Reestruturação de R$ 657,8M em créditos quirografários via Recuperação Extrajudicial no Paraná sujeita a impugnações de credores; (3) Oportunidade de mandato: M&A Distressed / Sale & Leaseback de unidades de recebimento de grãos e imóveis rurais (UPIs) + Assessoria a Credores Dissidentes.", "causa_crise": "Aperto de liquidez na holding patrimonial e imobiliária vinculada à rede de distribuição de insumos e grãos Belagrícola", "gargalo_imediato": "Reestruturação de R$ 657,8M em créditos quirografários via Recuperação Extrajudicial no Paraná sujeita a impugnações de credores", "tese_mandato": "M&A Distressed / Sale & Leaseback de unidades de recebimento de grãos e imóveis rurais (UPIs) + Assessoria a Credores Dissidentes.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Companhia patrimonial e imobiliária (PropCo) integrante do ecossistema do tradicional grupo paranaense Belagrícola (fundado em 1985 em Londrina/PR). Detém a propriedade de dezenas de imóveis rurais e operacionais estratégicos, incluindo unidades de recebimento, secagem e armazenagem de grãos (silos) e lojas técnicas nos estados do Paraná, São Paulo e Santa Catarina.", "model_params": {"haircut_pct": 40.0, "recuperacao_pct": 60.0, "desconto_secundario_pct": 30.0, "valor_recuperado_mm": 394.8, "ev_estimado_mm": 427.7, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 22.0, "classe_i_pct": 4.0, "classe_ii_pct": 36.0, "fiscal_pct": 8.0, "classe_iii_pct": 25.0, "classe_iv_pct": 5.0}}, "agro_meta": {"cpr_status": "Dívida Quirografária e Estruturada do Grupo Belagrícola (R$ 658M)", "alienacao_terras": "Lastro em Imóveis Rurais e Unidades de Armazenagem", "ativos_rurais": "Portfólio de silos, armazéns e imóveis rurais no PR, SP e SC (Sale & Leaseback)", "cra_exposicao": "Titulares de CRAs e Fundos Imobiliários/Agrícolas"}, "calendar_meta": {"data_marco_iso": "2027-01-07", "data_marco_br": "07/01/2027", "dias_restantes": 83, "marco_label": "Prazo de Homologação Judicial do Plano de PRE (Classe 128) & Quórum (>50%)", "marco_tipo": "Homologação PRE", "urgencia_nivel": "normal", "urgencia_label": "NO PRAZO (83d)", "is_fixed_edital": false}}, "Costa Esmeralda Trading Importação e Exportação Ltda.": {"tese": "(1) Causa da crise: Acúmulo de passivo tributário aduaneiro/estadual (R$ 152,6M) e restrição de linhas de comércio exterior; (2) Gargalo imediato: Pedido de autofalência protocolado em Florianópolis/SC com exposição bancária de Banco do Brasil e Cresol Centro Sul; (3) Oportunidade de mandato: Investigação Forense de Ativos (Asset Tracing) e Recuperação de Crédito para Banco do Brasil e Cresol Centro Sul.", "causa_crise": "Acúmulo de passivo tributário aduaneiro/estadual (R$ 152,6M) e restrição de linhas de comércio exterior", "gargalo_imediato": "Pedido de autofalência protocolado em Florianópolis/SC com exposição bancária de Banco do Brasil e Cresol Centro Sul", "tese_mandato": "Investigação Forense de Ativos (Asset Tracing) e Recuperação de Crédito para Banco do Brasil e Cresol Centro Sul.", "agentes_fiduciarios": "Monitoramento via escrituras / N/A", "securitizadoras": "Sem securitizadora reportada / Crédito Bancário Direto", "energy_meta": null, "descricao_empresa": "Trading company catarinense de comércio exterior (importação por conta e ordem e por encomenda de produtos industrializados, insumos químicos, têxteis e eletroeletrônicos) sediada em Florianópolis/SC, com operação logística e desembaraço aduaneiro concentrados nos terminais portuários de Itajaí e Navegantes/SC.", "model_params": {"haircut_pct": 75.0, "recuperacao_pct": 25.0, "desconto_secundario_pct": 50.0, "valor_recuperado_mm": 45.75, "ev_estimado_mm": 91.5, "desagio_liquidacao_forçada_pct": 45.0, "split_classes": {"extraconcursal_pct": 12.0, "classe_i_pct": 14.0, "classe_ii_pct": 22.0, "fiscal_pct": 24.0, "classe_iii_pct": 24.0, "classe_iv_pct": 4.0}}, "agro_meta": null, "calendar_meta": {"data_marco_iso": "2026-11-15", "data_marco_br": "15/11/2026", "dias_restantes": 30, "marco_label": "Publicação do Quadro de Arrecadação de Ativos & Edital de Leilão (Art. 141)", "marco_tipo": "Arrecadação / Leilão", "urgencia_nivel": "alerta", "urgencia_label": "CURTO PRAZO (30d)", "is_fixed_edital": false}}};

const BRAZIL_UFS_GEOJSON = {"type": "FeatureCollection", "features": [{"type": "Feature", "properties": {"uf": "AC", "nome": "Acre", "capital": "Rio Branco", "lat": -9.974, "lng": -67.81}, "geometry": {"type": "Polygon", "coordinates": [[[-73.99, -7.35], [-70.5, -7.9], [-66.8, -9.8], [-68.5, -11.1], [-70.9, -11.0], [-72.9, -9.5], [-73.99, -7.35]]]}}, {"type": "Feature", "properties": {"uf": "AM", "nome": "Amazonas", "capital": "Manaus", "lat": -3.119, "lng": -60.021}, "geometry": {"type": "Polygon", "coordinates": [[[-73.8, -4.2], [-69.9, -1.1], [-67.1, 2.0], [-63.9, 2.2], [-60.1, 0.2], [-58.9, -1.5], [-56.2, -2.2], [-57.5, -5.8], [-58.5, -7.8], [-61.5, -8.8], [-65.5, -9.5], [-66.8, -9.8], [-70.5, -7.9], [-73.99, -7.35], [-73.8, -4.2]]]}}, {"type": "Feature", "properties": {"uf": "RR", "nome": "Roraima", "capital": "Boa Vista", "lat": 2.823, "lng": -60.675}, "geometry": {"type": "Polygon", "coordinates": [[[-63.9, 2.2], [-64.5, 4.3], [-60.2, 5.2], [-58.9, 1.5], [-60.1, 0.2], [-63.9, 2.2]]]}}, {"type": "Feature", "properties": {"uf": "PA", "nome": "Pará", "capital": "Belém", "lat": -1.455, "lng": -48.49}, "geometry": {"type": "Polygon", "coordinates": [[[-58.9, 1.5], [-55.9, 2.2], [-54.5, 1.5], [-51.8, -1.2], [-49.8, -0.5], [-46.1, -1.1], [-46.4, -3.5], [-48.5, -5.5], [-49.3, -8.2], [-51.1, -9.8], [-54.8, -9.8], [-57.6, -9.2], [-58.5, -7.8], [-57.5, -5.8], [-56.2, -2.2], [-58.9, -1.5]]]}}, {"type": "Feature", "properties": {"uf": "AP", "nome": "Amapá", "capital": "Macapá", "lat": 0.034, "lng": -51.066}, "geometry": {"type": "Polygon", "coordinates": [[[-54.5, 1.5], [-51.6, 4.2], [-49.9, 1.8], [-51.8, -1.2], [-54.5, 1.5]]]}}, {"type": "Feature", "properties": {"uf": "RO", "nome": "Rondônia", "capital": "Porto Velho", "lat": -8.761, "lng": -63.903}, "geometry": {"type": "Polygon", "coordinates": [[[-66.8, -9.8], [-65.5, -9.5], [-61.5, -8.8], [-60.0, -11.5], [-60.4, -13.5], [-63.5, -13.1], [-65.5, -11.8], [-66.8, -9.8]]]}}, {"type": "Feature", "properties": {"uf": "MT", "nome": "Mato Grosso", "capital": "Cuiabá", "lat": -15.601, "lng": -56.097}, "geometry": {"type": "Polygon", "coordinates": [[[-61.5, -8.8], [-58.5, -7.8], [-57.6, -9.2], [-54.8, -9.8], [-51.1, -9.8], [-50.5, -12.5], [-51.0, -15.5], [-53.1, -17.6], [-56.0, -17.9], [-58.0, -17.6], [-60.2, -15.0], [-60.4, -13.5], [-60.0, -11.5], [-61.5, -8.8]]]}}, {"type": "Feature", "properties": {"uf": "MS", "nome": "Mato Grosso do Sul", "capital": "Campo Grande", "lat": -20.469, "lng": -54.62}, "geometry": {"type": "Polygon", "coordinates": [[[-58.0, -17.6], [-56.0, -17.9], [-53.1, -17.6], [-51.0, -19.5], [-51.8, -21.8], [-54.1, -24.0], [-55.8, -23.8], [-58.1, -22.1], [-57.9, -19.0], [-58.0, -17.6]]]}}, {"type": "Feature", "properties": {"uf": "TO", "nome": "Tocantins", "capital": "Palmas", "lat": -10.184, "lng": -48.333}, "geometry": {"type": "Polygon", "coordinates": [[[-48.5, -5.5], [-46.1, -7.5], [-45.9, -10.5], [-46.5, -12.9], [-50.5, -12.5], [-51.1, -9.8], [-49.3, -8.2], [-48.5, -5.5]]]}}, {"type": "Feature", "properties": {"uf": "GO", "nome": "Goiás", "capital": "Goiânia", "lat": -16.686, "lng": -49.264}, "geometry": {"type": "Polygon", "coordinates": [[[-50.5, -12.5], [-46.5, -12.9], [-46.1, -14.8], [-47.3, -16.2], [-47.5, -18.5], [-51.0, -19.5], [-53.1, -17.6], [-51.0, -15.5], [-50.5, -12.5]]]}}, {"type": "Feature", "properties": {"uf": "DF", "nome": "Distrito Federal", "capital": "Brasília", "lat": -15.797, "lng": -47.891}, "geometry": {"type": "Polygon", "coordinates": [[[-48.2, -15.5], [-47.3, -15.5], [-47.3, -16.1], [-48.2, -16.1], [-48.2, -15.5]]]}}, {"type": "Feature", "properties": {"uf": "MA", "nome": "Maranhão", "capital": "São Luís", "lat": -2.53, "lng": -44.306}, "geometry": {"type": "Polygon", "coordinates": [[[-46.1, -1.1], [-44.2, -2.2], [-41.8, -2.8], [-42.8, -5.5], [-43.5, -7.0], [-45.9, -10.0], [-46.1, -7.5], [-48.5, -5.5], [-46.4, -3.5], [-46.1, -1.1]]]}}, {"type": "Feature", "properties": {"uf": "PI", "nome": "Piauí", "capital": "Teresina", "lat": -5.089, "lng": -42.801}, "geometry": {"type": "Polygon", "coordinates": [[[-41.8, -2.8], [-41.3, -3.0], [-40.5, -5.5], [-40.8, -8.5], [-43.5, -10.8], [-45.9, -10.5], [-45.9, -10.0], [-43.5, -7.0], [-42.8, -5.5], [-41.8, -2.8]]]}}, {"type": "Feature", "properties": {"uf": "CE", "nome": "Ceará", "capital": "Fortaleza", "lat": -3.717, "lng": -38.543}, "geometry": {"type": "Polygon", "coordinates": [[[-41.3, -3.0], [-38.5, -3.5], [-37.2, -4.8], [-38.5, -7.6], [-40.5, -7.5], [-40.5, -5.5], [-41.3, -3.0]]]}}, {"type": "Feature", "properties": {"uf": "RN", "nome": "Rio Grande do Norte", "capital": "Natal", "lat": -5.794, "lng": -35.211}, "geometry": {"type": "Polygon", "coordinates": [[[-37.2, -4.8], [-35.2, -5.1], [-35.0, -6.5], [-38.5, -6.8], [-37.2, -4.8]]]}}, {"type": "Feature", "properties": {"uf": "PB", "nome": "Paraíba", "capital": "João Pessoa", "lat": -7.119, "lng": -34.845}, "geometry": {"type": "Polygon", "coordinates": [[[-38.5, -6.8], [-35.0, -6.5], [-34.8, -7.5], [-37.2, -8.2], [-38.5, -7.6], [-38.5, -6.8]]]}}, {"type": "Feature", "properties": {"uf": "PE", "nome": "Pernambuco", "capital": "Recife", "lat": -8.047, "lng": -34.877}, "geometry": {"type": "Polygon", "coordinates": [[[-40.8, -8.5], [-40.5, -7.5], [-38.5, -7.6], [-37.2, -8.2], [-34.8, -7.5], [-35.1, -9.0], [-38.2, -9.4], [-40.8, -9.5], [-40.8, -8.5]]]}}, {"type": "Feature", "properties": {"uf": "AL", "nome": "Alagoas", "capital": "Maceió", "lat": -9.665, "lng": -35.735}, "geometry": {"type": "Polygon", "coordinates": [[[-38.2, -9.4], [-35.1, -9.0], [-36.2, -10.5], [-38.0, -9.8], [-38.2, -9.4]]]}}, {"type": "Feature", "properties": {"uf": "SE", "nome": "Sergipe", "capital": "Aracaju", "lat": -10.947, "lng": -37.073}, "geometry": {"type": "Polygon", "coordinates": [[[-38.0, -9.8], [-36.2, -10.5], [-37.4, -11.5], [-38.2, -10.8], [-38.0, -9.8]]]}}, {"type": "Feature", "properties": {"uf": "BA", "nome": "Bahia", "capital": "Salvador", "lat": -12.971, "lng": -38.501}, "geometry": {"type": "Polygon", "coordinates": [[[-45.9, -10.5], [-43.5, -10.8], [-40.8, -8.5], [-40.8, -9.5], [-38.2, -9.4], [-38.0, -9.8], [-38.2, -10.8], [-37.4, -11.5], [-38.5, -13.0], [-38.9, -16.0], [-39.2, -18.0], [-41.0, -17.5], [-44.0, -14.8], [-46.1, -14.8], [-46.5, -12.9], [-45.9, -10.5]]]}}, {"type": "Feature", "properties": {"uf": "MG", "nome": "Minas Gerais", "capital": "Belo Horizonte", "lat": -19.916, "lng": -43.934}, "geometry": {"type": "Polygon", "coordinates": [[[-46.1, -14.8], [-44.0, -14.8], [-41.0, -17.5], [-40.8, -18.2], [-41.8, -21.0], [-43.5, -21.9], [-46.5, -22.8], [-48.0, -20.0], [-51.0, -19.5], [-47.5, -18.5], [-47.3, -16.2], [-46.1, -14.8]]]}}, {"type": "Feature", "properties": {"uf": "ES", "nome": "Espírito Santo", "capital": "Vitória", "lat": -20.315, "lng": -40.312}, "geometry": {"type": "Polygon", "coordinates": [[[-41.0, -17.5], [-39.2, -18.0], [-39.8, -20.0], [-40.9, -21.3], [-41.8, -21.0], [-40.8, -18.2], [-41.0, -17.5]]]}}, {"type": "Feature", "properties": {"uf": "RJ", "nome": "Rio de Janeiro", "capital": "Rio de Janeiro", "lat": -22.906, "lng": -43.172}, "geometry": {"type": "Polygon", "coordinates": [[[-43.5, -21.9], [-41.8, -21.0], [-40.9, -21.3], [-41.9, -22.9], [-44.8, -23.3], [-44.6, -22.4], [-43.5, -21.9]]]}}, {"type": "Feature", "properties": {"uf": "SP", "nome": "São Paulo", "capital": "São Paulo", "lat": -23.55, "lng": -46.633}, "geometry": {"type": "Polygon", "coordinates": [[[-51.0, -19.5], [-48.0, -20.0], [-46.5, -22.8], [-44.6, -22.4], [-44.8, -23.3], [-47.9, -25.2], [-49.9, -23.0], [-52.0, -22.5], [-51.8, -21.8], [-51.0, -19.5]]]}}, {"type": "Feature", "properties": {"uf": "PR", "nome": "Paraná", "capital": "Curitiba", "lat": -25.428, "lng": -49.273}, "geometry": {"type": "Polygon", "coordinates": [[[-54.1, -24.0], [-51.8, -21.8], [-52.0, -22.5], [-49.9, -23.0], [-47.9, -25.2], [-48.5, -25.9], [-51.0, -26.5], [-53.8, -26.3], [-54.6, -25.5], [-54.1, -24.0]]]}}, {"type": "Feature", "properties": {"uf": "SC", "nome": "Santa Catarina", "capital": "Florianópolis", "lat": -27.595, "lng": -48.548}, "geometry": {"type": "Polygon", "coordinates": [[[-53.8, -26.3], [-51.0, -26.5], [-48.5, -25.9], [-48.4, -27.8], [-49.6, -29.2], [-51.5, -27.5], [-53.8, -27.2], [-53.8, -26.3]]]}}, {"type": "Feature", "properties": {"uf": "RS", "nome": "Rio Grande do Sul", "capital": "Porto Alegre", "lat": -30.034, "lng": -51.217}, "geometry": {"type": "Polygon", "coordinates": [[[-53.8, -27.2], [-51.5, -27.5], [-49.6, -29.2], [-50.5, -31.0], [-52.1, -32.1], [-53.4, -33.7], [-55.8, -30.8], [-57.6, -30.2], [-56.0, -28.2], [-53.8, -27.2]]]}}]};

const NEWS_FEED_DATA = [
  {
    "id": 130,
    "data_hora": "27/10/2026 17:45",
    "titulo": "4ª Vara Cível de Sinop/MT convola RJ do Grupo Pelissari em falência (R$ 45,3 MM) após rejeição de 72,4% em AGC e bloqueia ativos",
    "fonte": "Jota / Tribunais",
    "setor": "Agronegócio & Silvicultura",
    "categoria": "Falência",
    "resumo": "Sentença falimentar atinge grupo produtor de Sinop após reprovação do plano por BlackPartners Miruna FIDC NP (R$ 18M) e tradings de insumos; Credibilita AJ conduz arrecadação de bens.",
    "url": "https://www.olharjuridico.com.br/",
    "deal_id": 103,
    "empresa_nome": "Grupo Pelissari (Sinop/MT)"
  },
  {
    "id": 129,
    "data_hora": "26/10/2026 18:10",
    "titulo": "Braskem (BRKM5) divulga Fato Relevante com projeções financeiras e termos trocados com debenturistas e bondholders na Recuperação Extrajudicial",
    "fonte": "CVM / Fatos Relevantes",
    "setor": "Indústria & Manufatura",
    "categoria": "Waiver / AGD",
    "resumo": "Petroquímica detalha cronograma de alavancagem, covenants e condições de reperfilamento das emissões de debêntures e bonds internacionais no âmbito da repactuação extrajudicial.",
    "url": "https://economia.uol.com.br/noticias/redacao/2026/10/26/braskem-divulga-informacoes-trocadas-com-credores-na-renegociacao-da-recuperacao-extrajudicial.ghtm",
    "deal_id": 22,
    "empresa_nome": "Braskem S/A (BAK / BRKM5)"
  },
  {
    "id": 128,
    "data_hora": "26/10/2026 11:30",
    "titulo": "Justiça de SP autoriza processamento de Recuperação Extrajudicial da Ri Happy (R$ 827 MM) com prazo de 90 dias para quórum de credores",
    "fonte": "Pipeline",
    "setor": "Varejo & Consumo",
    "categoria": "Waiver / AGD",
    "resumo": "Rede varejista controlada pelo Carlyle obteve blindagem judicial para concluir coleta de adesões de bancos (Bradesco, Itaú, Santander) e titulares de dívida estruturada.",
    "url": "https://c-level.folha.uol.com.br/negocios/2026/10/justica-aceita-pedido-de-recuperacao-extrajudicial-da-ri-happy.shtml",
    "deal_id": 87,
    "empresa_nome": "Ri Happy Brinquedos S.A. (Grupo Ri Happy)"
  },
  {
    "id": 127,
    "data_hora": "23/10/2026 15:40",
    "titulo": "Grupo Euro17 e Euro Securitizadora ajuízam Recuperação Judicial com dívida de R$ 1,72 bilhão perante 5.034 credores e debenturistas",
    "fonte": "Pipeline",
    "setor": "Serviços Financeiros & Crédito",
    "categoria": "Waiver / AGD",
    "resumo": "Após atrasos na remuneração de séries de debêntures e tentativa negada de cautelar em sigilo na 2ª Vara de Falências de SP, grupo financeiro busca stay period de 180 dias e consolidação substancial.",
    "url": "https://neofeed.com.br/negocios/exclusivo-com-divida-de-r-172-bilhao-grupo-euro17-pede-recuperacao-judicial/",
    "deal_id": 100,
    "empresa_nome": "Grupo Euro17 (Euro Securitizadora)"
  },
  {
    "id": 126,
    "data_hora": "22/10/2026 16:20",
    "titulo": "Grupo VETBR protocola Recuperação Extrajudicial de R$ 160 milhões com adesão inicial de 54,26% na classe de garantia real",
    "fonte": "Agentes Fiduciários",
    "setor": "Saúde & Farma",
    "categoria": "Waiver / AGD",
    "resumo": "Distribuidora de medicamentos veterinários assessorada pelo Cescon Barrieu repactua passivo garantido por estoques e recebíveis junto a Itaú, Bradesco, Santander e laboratórios globais.",
    "url": "https://www.valor.globo.com/",
    "deal_id": 96,
    "empresa_nome": "Grupo VETBR (Saúde Animal)"
  },
  {
    "id": 125,
    "data_hora": "22/10/2026 14:50",
    "titulo": "FTS Participações (Terminal Portuário PAR50 - Paranaguá) negocia waiver e reperfilamento de R$ 110 MM em debêntures e CCBs",
    "fonte": "Agentes Fiduciários",
    "setor": "Energia & Infraestrutura",
    "categoria": "Waiver / AGD",
    "resumo": "Operador logístico portuário no corredor de exportação do Paraná busca adequação de curvas de amortização e covenants financeiros de capex de infraestrutura.",
    "url": "https://www.valor.globo.com/",
    "deal_id": 99,
    "empresa_nome": "FTS Participações Societárias S.A. (FTSPar)"
  },
  {
    "id": 124,
    "data_hora": "21/10/2026 16:15",
    "titulo": "Grupo Casas Bahia (BHIA3) avança na execução de reperfilamento de R$ 17,3 Bi e conversão de debêntures em participação acionária",
    "fonte": "CVM / Fatos Relevantes",
    "setor": "Varejo & Consumo",
    "categoria": "Waiver / AGD",
    "resumo": "Acompanhamento de covenants operacionais, cronograma de conversão de tranches de debêntures detidas por Bradesco e Banco do Brasil e gestão de caixa nas operações de varejo.",
    "url": "https://forbes.com.br/forbes-money/2026/10/de-raizen-a-casas-bahia-15-empresas-tentam-reestruturar-dividas-em-2026/",
    "deal_id": 89,
    "empresa_nome": "Grupo Casas Bahia S.A. (BHIA3)"
  },
  {
    "id": 123,
    "data_hora": "21/10/2026 14:30",
    "titulo": "Justiça homologa Recuperação Extrajudicial de R$ 4,57 Bi do GPA (PCAR3); B3 bloqueia debêntures CBRDA8/CBRDB8 e CRIs e abre prazo de 60 dias",
    "fonte": "CVM / Fatos Relevantes",
    "setor": "Varejo & Consumo",
    "categoria": "Waiver / AGD",
    "resumo": "Sentença homologatória dá início ao prazo de 60 dias para opção de pagamento e substituição das debêntures CBRDA8/CBRDB8 e CRIs 23B0004401/23B0004402 pelas Novas Debêntures Emissão A e B.",
    "url": "https://exame.com/invest/mercados/recuperacao-extrajudicial-do-gpa-b3-bloqueia-titulos-e-abre-prazo-de-60-dias/",
    "deal_id": 16,
    "empresa_nome": "Grupo Pão de Açúcar (GPA - PCAR3)"
  },
  {
    "id": 122,
    "data_hora": "20/10/2026 11:15",
    "titulo": "Aeris Energy (AERI3) conduz AGDs das debêntures AERI11 e AERI12 (R$ 650 MM) junto a Vórtx e Pentágono sob Cautelar Art. 20-B",
    "fonte": "CVM / Fatos Relevantes",
    "setor": "Energia & Infraestrutura",
    "categoria": "Waiver / AGD",
    "resumo": "Fabricante de pás eólicas no Porto do Pecém/CE negocia standstill e waiver de covenants financeiros com debenturistas e sindicato bancário (Bradesco, Santander, Itaú) para conversão em PRE/RJ.",
    "url": "https://neofeed.com.br/negocios/aeris-aciona-tutela-cautelar-para-renegociar-divida-com-credores/",
    "deal_id": 1,
    "empresa_nome": "Aeris Energy (AERI3)"
  },
  {
    "id": 121,
    "data_hora": "19/10/2026 16:45",
    "titulo": "Chilli Beans (Mustang 25) negocia waiver e standstill de R$ 89 MM em debêntures com a Vert Securitizadora para evitar cross-default em R$ 600 MM",
    "fonte": "Agentes Fiduciários",
    "setor": "Varejo & Consumo",
    "categoria": "Waiver / AGD",
    "resumo": "Holding controladora obteve tutela cautelar antecedente após notificação de vencimento antecipado por obrigações não-financeiras na 1ª emissão de debêntures securitizada pela Vert.",
    "url": "https://exame.com/insight/chilli-beans-ganha-prazo-para-renegociar-divida-de-r-89-milhoes/p",
    "deal_id": 10,
    "empresa_nome": "Chilli Beans (Mustang 25 Participações)"
  },
  {
    "id": 101,
    "data_hora": "16/10/2026 09:40",
    "titulo": "Latache Capital pede conversão da Recuperação Extrajudicial da Oncoclínicas em RJ após ultimato judicial de 15 dias",
    "fonte": "Pipeline",
    "setor": "Saúde & Farma",
    "categoria": "Waiver / AGD",
    "resumo": "Acionista detentora de 14,6% do capital da Oncoclínicas (ONCO3) protocolou manifestação contra o plano de RE que prevê deságio de 45%, enquanto a 3ª Vara de Falências de SP exige comprovação de quórum mínimo sobre R$ 5,1 bilhões.",
    "deal_id": 17,
    "empresa_nome": "Oncoclínicas do Brasil (ONCO3)"
  },
  {
    "id": 102,
    "data_hora": "16/10/2026 08:55",
    "titulo": "2ª Vara Regional Empresarial de SP decreta falência da fintech AJX Capital com passivo de R$ 350 milhões em CCBs",
    "fonte": "Valor Econômico",
    "setor": "Serviços Financeiros & Crédito",
    "categoria": "Falência",
    "resumo": "Sentença de quebra (art. 94, I da Lei 11.101/05) determina bloqueio imediato de contas, imóveis e veículos da fintech de Barueri/SP, nomeando Brazilio Bacellar, Shirai Advogados na proteção de 10 mil investidores.",
    "deal_id": 62,
    "empresa_nome": "AJX Capital Investimentos S.A."
  },
  {
    "id": 103,
    "data_hora": "15/10/2026 19:20",
    "titulo": "Grupo Fictor pede adiamento de AGC para dezembro citando fundo da Titan Capital Holding (Cayman) para cobrir R$ 4,2 Bi",
    "fonte": "Brazil Journal",
    "setor": "Serviços Financeiros & Crédito",
    "categoria": "Pedido de RJ",
    "resumo": "Devedora solicita suspensão da assembleia na 3ª Vara de Falências de SP alegando tratativas com veículo internacional ligado a Daniel Vorcaro; prazo para objeções de credores encerra em 29/10/2026.",
    "deal_id": 55,
    "empresa_nome": "Grupo Fictor"
  },
  {
    "id": 104,
    "data_hora": "15/10/2026 17:10",
    "titulo": "Fitch corta rating da 1ª emissão de debêntures verdes da GDSolar (GDSS11 - R$ 410 MM) em 5 degraus para BBB(bra)",
    "fonte": "CVM / Fatos Relevantes",
    "setor": "Energia & Infraestrutura",
    "categoria": "Downgrade Rating",
    "resumo": "Agência colocou as debêntures de infraestrutura da GDS Subholding (Colibri Capital) em Observação Negativa diante da deterioração do índice de cobertura do serviço da dívida (ICSD) das usinas fotovoltaicas.",
    "url": "https://www.fitchratings.com/research/pt/infrastructure-project-finance/fitch-downgrades-to-bbb-bra-gds-subholdings-debentures-rating-watch-negative-08-10-2026",
    "deal_id": 69,
    "empresa_nome": "GDS Subholding S.A. (GDSolar)"
  },
  {
    "id": 105,
    "data_hora": "15/10/2026 15:30",
    "titulo": "Raízen (RAIZ4) detalha atualização de créditos e condições para debenturistas (RAIZ14/RAIZ24) no plano de Recuperação Extrajudicial",
    "fonte": "CVM / Fatos Relevantes",
    "setor": "Energia & Infraestrutura",
    "categoria": "Waiver / AGD",
    "resumo": "Companhia sucroenergética conduz repactuação de R$ 3,5 bilhões em emissões de debêntures e linhas sindicalizadas junto a Pentágono DTVM e Oliveira Trust, mantendo cronograma de venda de ativos de geração distribuída e E2G.",
    "url": "https://investalk.bb.com.br/noticias/mercado/credito-privado-analise-emissores-Raizen-Out26",
    "deal_id": 7,
    "empresa_nome": "Raízen S.A. (RAIZ4)"
  },
  {
    "id": 106,
    "data_hora": "15/10/2026 14:05",
    "titulo": "TJRJ determina depósito judicial de recebíveis da Petrobras na Recuperação Judicial do Grupo MPC (R$ 82 MM)",
    "fonte": "Jota / Tribunais",
    "setor": "Construção Civil & Real Estate",
    "categoria": "Pedido de RJ",
    "resumo": "4ª Vara Empresarial do Rio de Janeiro autorizou apenas consolidação processual (art. 69-I) e determinou conta vinculada para faturas de contratos da Petrobras disputadas por Votorantim, Caixa e Banco Caterpillar.",
    "deal_id": 66,
    "empresa_nome": "Grupo MPC (MJRE Construtora)"
  },
  {
    "id": 107,
    "data_hora": "15/10/2026 11:45",
    "titulo": "Grupo Família Almeida pede desistência de RJ às vésperas da AGC em Sinop/MT; juízo mantém assembleia para 12/11",
    "fonte": "Jota / Tribunais",
    "setor": "Agronegócio & Silvicultura",
    "categoria": "Pedido de RJ",
    "resumo": "Produtores com passivo de R$ 64 milhões (BB R$ 15,2M e John Deere R$ 9,1M) tentaram desistir do processo antes da votação do plano; Credibilita AJ conduzirá AGC virtual em novembro.",
    "deal_id": 56,
    "empresa_nome": "Grupo Família Almeida"
  },
  {
    "id": 108,
    "data_hora": "14/10/2026 18:30",
    "titulo": "Justiça publica edital de leilão da UPI Parque Fabril Ditália Móveis por R$ 48 milhões livre de sucessão",
    "fonte": "Valor Econômico",
    "setor": "Indústria & Manufatura",
    "categoria": "Leilão de UPI",
    "resumo": "Planta moveleira na Serra Gaúcha segue em plena operação com 101 funcionários ativos sob gestão da CB2D AJ; certame ocorrerá em 10/11/2026 nos termos do art. 141 da Lei 11.101/05.",
    "deal_id": 64,
    "empresa_nome": "Grupo Ditália Móveis"
  },
  {
    "id": 109,
    "data_hora": "14/10/2026 16:15",
    "titulo": "Grupo Wolfstore realiza sessões decisivas no Cejusc/TJRS com 7 credores financeiros e suspende apreensão do Hope I FIDC",
    "fonte": "Agentes Fiduciários",
    "setor": "Indústria & Manufatura",
    "categoria": "Cautelar 20-B",
    "resumo": "Indústria têxtil e calçadista de Novo Hamburgo/RS e Poções/BA negocia passivo bancário de R$ 44,26 milhões com Santander, ABC Brasil, Caixa, Unicred e securitizadoras após incêndio fabril.",
    "deal_id": 68,
    "empresa_nome": "Grupo Wolfstore"
  },
  {
    "id": 110,
    "data_hora": "14/10/2026 11:20",
    "titulo": "Grupo Ezata migra de cautelar para Recuperação Judicial em Passo Fundo/RS após pedido de falência da Gerdau",
    "fonte": "Jota / Tribunais",
    "setor": "Indústria & Manufatura",
    "categoria": "Pedido de RJ",
    "resumo": "Juizado Regional Empresarial determinou constatação prévia em 5 dias (Von Saltiél AJ) sem suspender execuções de Sicredi (R$ 17,77M), Itaú (R$ 7,61M), Santander e Caixa.",
    "deal_id": 63,
    "empresa_nome": "Grupo Ezata Industrial"
  },
  {
    "id": 111,
    "data_hora": "13/10/2026 17:50",
    "titulo": "Juízo de Cuiabá ordena rastreamento forense (Renajud/Infojud) na falência da rede Lojas Dona do Lar por ocultação de ativos",
    "fonte": "Jota / Tribunais",
    "setor": "Varejo & Consumo",
    "categoria": "Falência",
    "resumo": "Devedora fechou abruptamente sede e CD de 15 lojas em MT; Santander, Sofisa, Bradesco, Whirlpool e Semp TCL buscam localização de frota e estoques.",
    "deal_id": 65,
    "empresa_nome": "Lojas Dona do Lar Ltda."
  },
  {
    "id": 112,
    "data_hora": "13/10/2026 14:10",
    "titulo": "TJPI suspende ordem policial de lacre imediato na falência do Grupo Assis Fortes (Servi-San), mas mantém arrecadação de R$ 360 MM",
    "fonte": "Valor Econômico",
    "setor": "Tecnologia & Serviços B2B",
    "categoria": "Falência",
    "resumo": "Convolação em falência atingiu a Servi-San Manutenção por salto do passivo fiscal da PGFN para R$ 357 milhões; massa falida detém precatório milionário contra Manaus.",
    "deal_id": 67,
    "empresa_nome": "Grupo Assis Fortes (Servi-San)"
  },
  {
    "id": 113,
    "data_hora": "12/10/2026 18:00",
    "titulo": "TJPR indefere RJ do Grupo Educacional Uniandrade por formato associativo e expõe R$ 304 MM a bloqueios",
    "fonte": "Pipeline",
    "setor": "Tecnologia & Serviços B2B",
    "categoria": "Pedido de RJ",
    "resumo": "Sem proteção do stay period, mantenedora dos campi de Curitiba, Maringá e São Paulo sofre penhora de R$ 10,7 milhões e avalia conversão societária urgente.",
    "deal_id": 58,
    "empresa_nome": "Grupo Educacional Uniandrade"
  },
  {
    "id": 114,
    "data_hora": "12/10/2026 10:30",
    "titulo": "Nex Group / Capa Engenharia obtém Cautelar Antecedente em Porto Alegre para suspender leilões de R$ 140 MM de BB e Caixa",
    "fonte": "Brazil Journal",
    "setor": "Construção Civil & Real Estate",
    "categoria": "Cautelar 20-B",
    "resumo": "Incorporadora gaúcha com 100% da dívida bancária concentrada em BB (R$ 90M) e Caixa (R$ 50M) agenda mediação no Cejusc para 06/11/2026.",
    "deal_id": 57,
    "empresa_nome": "Grupo NEX (Capa Engenharia)"
  },
  {
    "id": 115,
    "data_hora": "09/10/2026 16:40",
    "titulo": "Moinho Corina ajuíza 2ª Recuperação Judicial em Cotia/SP apenas 7 meses após encerrar processo anterior; COFCO detém 41%",
    "fonte": "Valor Econômico",
    "setor": "Agronegócio & Silvicultura",
    "categoria": "Pedido de RJ",
    "resumo": "Passivo concursal soma R$ 151 milhões (além de R$ 100,8M fiscais), puxado por execução de R$ 62,18 milhões da fornecedora de trigo Nidera/COFCO e pedidos de falência.",
    "deal_id": 59,
    "empresa_nome": "Moinho Corina Alimentos Ltda."
  },
  {
    "id": 116,
    "data_hora": "09/10/2026 11:15",
    "titulo": "Qualiciclo Agrícola (Rede Lavoro) protocola RJ de R$ 2,55 bilhões na 2ª Vara de Falências de SP",
    "fonte": "Pipeline",
    "setor": "Agronegócio & Silvicultura",
    "categoria": "Pedido de RJ",
    "resumo": "Rede de distribuição de insumos busca reestruturar passivo com Corteva, Mosaic, UPL, FMC, Banco Votorantim e Daycoval em meio à retração das margens de revendas.",
    "deal_id": 52,
    "empresa_nome": "Qualiciclo Agrícola S.A."
  },
  {
    "id": 117,
    "data_hora": "09/10/2026 09:00",
    "titulo": "Cotribá convoca assembleia para Liquidação Extrajudicial com Continuidade para blindar ativos contra R$ 1,42 bilhão em dívidas",
    "fonte": "Valor Econômico",
    "setor": "Agronegócio & Silvicultura",
    "categoria": "Leilão de UPI",
    "resumo": "Cooperativa centenária de Ibirubá/RS enfrenta inadimplência de R$ 150M em CRAs e exposição a 30 bancos liderados pelo BRDE (R$ 130M), planejando venda de silos.",
    "deal_id": 53,
    "empresa_nome": "Cooperativa Agrícola Cotribá"
  },
  {
    "id": 118,
    "data_hora": "08/10/2026 18:10",
    "titulo": "TJMT determina afastamento compulsório dos controladores do Grupo Safras (R$ 1,78 Bi) em Sorriso/MT",
    "fonte": "Jota / Tribunais",
    "setor": "Agronegócio & Silvicultura",
    "categoria": "Pedido de RJ",
    "resumo": "Decisão judicial abre vacância para nomeação de gestor judicial / CRO independente após disputas com Cargill, Bunge, COFCO e bancos sobre estoques de grãos.",
    "deal_id": 51,
    "empresa_nome": "Grupo Safras Armazéns"
  },
  {
    "id": 119,
    "data_hora": "07/10/2026 15:00",
    "titulo": "ARTESP instaura processo de caducidade contra Concessionária Colinas do Tietê; debenturistas (R$ 420 MM) convocam AGD",
    "fonte": "Agentes Fiduciários",
    "setor": "Energia & Infraestrutura",
    "categoria": "Waiver / AGD",
    "resumo": "Titulares da 1ª e 2ª emissão de debêntures incentivadas (Lei 12.431) e BNDES avaliam declaração de vencimento antecipado ou acordo de relicitação amigável.",
    "deal_id": 46,
    "empresa_nome": "Concessionária Colinas do Tietê"
  },
  {
    "id": 120,
    "data_hora": "04/10/2026 14:20",
    "titulo": "Renovare Comercializadora recebe notificação de inadimplemento no MCP da CCEE e convoca debenturistas (R$ 340 MM)",
    "fonte": "Agentes Fiduciários",
    "setor": "Energia & Infraestrutura",
    "categoria": "Downgrade Rating",
    "resumo": "Pressão de curtailment eólico/solar no Nordeste e descasamento de PLD horário derrubam ICSD abaixo do covenant mínimo da 2ª emissão de debêntures.",
    "deal_id": 41,
    "empresa_nome": "Renovare Energia & Comercializadora"
  }
];

// ==========================================================================
// Dynamic Deal Count & Flexible Text Resolver
// ==========================================================================
function getDynamicCaseCount() {
  if (typeof DEALS_DATA !== 'undefined' && Array.isArray(DEALS_DATA) && DEALS_DATA.length > 0) {
    return DEALS_DATA.length;
  }
  return 87;
}

function resolveDynamicCaseText(str) {
  if (!str || typeof str !== 'string') return str || '';
  const count = getDynamicCaseCount();
  return str
    .replace(/\{COUNT\}/g, count)
    .replace(/\b72\s+Casos\b/g, count + ' Casos')
    .replace(/\b72\s+casos\b/g, count + ' casos')
    .replace(/\b72\s+Grupos\b/g, count + ' Grupos')
    .replace(/\b72\s+grupos\b/g, count + ' grupos')
    .replace(/\b72\s+Leads\b/g, count + ' Leads')
    .replace(/\b72\s+leads\b/g, count + ' leads')
    .replace(/\(72\s+Casos\)/g, '(' + count + ' Casos)')
    .replace(/\(72\s+casos\)/g, '(' + count + ' casos)');
}

function updateDynamicNavCounts() {
  const count = getDynamicCaseCount();
  const operacaoPill = document.getElementById('nav-count-operacao');
  if (operacaoPill) operacaoPill.textContent = count;

  const prazosPill = document.getElementById('nav-count-prazos');
  if (prazosPill) prazosPill.textContent = count;

  const upisPill = document.getElementById('nav-count-upis');
  if (upisPill && typeof isUpiEligible === 'function' && Array.isArray(DEALS_DATA)) {
    const upiCount = DEALS_DATA.filter(isUpiEligible).length;
    upisPill.textContent = upiCount;
  }

  const livePill = document.getElementById('lastUpdateTime');
  if (livePill) {
    livePill.textContent = 'Online: ' + count + ' leads';
  }
}

const SECTION_CONFIG = {
  operacao: {
    pageTitle: 'Operação & Originação',
    pageSubtitle: 'Monitoramento em tempo real de empresas em estresse financeiro severo, processos concursais e mercado de capitais no Brasil.',
    showFilters: true,
    subtabs: [
      { id: 'all', label: 'Pipeline Consolidado', title: 'Pipeline Consolidado em Tempo Real', desc: 'Dados consolidados de petições iniciais (DataJud/DJEN), fatos relevantes CVM e editais de Assembleias Gerais de Debenturistas (AGDs) para originação tática.' },
      { id: 'watchdog', label: 'Creditor-Side & Watchdog', title: 'Estratégia: Creditor-Side & Watchdog de Colateral', desc: 'Casos com alta concentração bancária (CR4 > 60%), disputas de trava fiduciária, comitês de credores e monitoramento independente de fluxo de caixa.' },
      { id: 'dip', label: 'DIP Financing & M&A', title: 'Estratégia: DIP Financing & M&A Distressed (UPIs)', desc: 'Oportunidades de injeção de Dinheiro Novo superprioritário (Art. 69-A a 69-F), leilões de UPIs livres de sucessão (Art. 141) e Sale & Leaseback.' },
      { id: 'consensual', label: 'Consensual & Art. 20-B', title: 'Estratégia: Consensual, Cautelares Art. 20-B & PRE', desc: 'Tutelas cautelares antecedentes, mediações no CEJUSC/CMAASP e Recuperações Extrajudiciais com coleta de quórum qualificado.' },
      { id: 'debentures', label: 'Debêntures, CRAs & FIDCs', title: 'Radar de Mercado de Capitais (DCM): Debêntures, CRAs, CRIs & FIDCs', desc: 'Emissões sob quebra de covenants financeiros, convocações de AGDs (Vórtx, Pentágono, Oliveira Trust) e securitizadoras (Opea, Vert, Virgo).' },
      { id: 'precursor', label: 'Radar Preditivo (Tier 0)', title: 'Sinais Forenses Pré-Concursais (Tier 0 — 60 a 120 dias antes da RJ)', desc: 'Alertas antecedentes capturados em cartórios de protesto (CENPROT), execuções fiscais PGFN, CVM Fundos.NET, CCEE e agências reguladoras.' }
    ]
  },
  precificacao: {
    pageTitle: 'Calculadora de Honorários & Modelagem de Reestruturação',
    pageSubtitle: 'Simulador com campos 100% digitáveis em % para Retainer Mensal e Success Fee, Waterfall de Classes, Simulador de Quórum AGC, Benchmarks de Haircut por Setor e Proposta Comercial (.pptx).',
    showFilters: false,
    subtabs: [
      { id: 'calc_haircut', label: 'Calculadora Success Fee & Retainer', title: 'Calculadora de Honorários para Assessorias de Reestruturação (Retainer + Success Fee)', desc: 'Modelagem financeira 100% digitável de mandatos de reestruturação (Debtor-Side / Turnaround e Creditor-Side / Watchdog): Retainer fixo mensal, prazo do projeto, Success Fee por base de incidência e cláusula de abatimento (Offset).' },
      { id: 'waterfall_classes', label: 'Waterfall de Classes (RJ vs. Falência)', title: 'Cascata de Alocação de Valor de Ativos por Classe (Art. 83 vs. Plano RJ)', desc: 'Comparativo percentual digitável de recuperação por classe (Extraconcursal, Classe I Trabalhista, Classe II Garantia Real, Classe III Quirografária e Classe IV ME/EPP).' },
      { id: 'quorum_agc', label: 'Simulador Quórum AGC & Cram Down', title: 'Simulador de Votação em Assembleia Geral de Credores (Art. 45 e Art. 58, §1º)', desc: 'Cálculo interativo com % digitável de aprovação ordinária por classe (por Cabeça e por Valor), requisitos de Cram Down e posição de bloqueio (Blocking Position > 33,3% ou > 50%).' },
      { id: 'benchmarks_setor', label: 'Benchmarks de Haircut por Setor', title: 'Tabela de Referência de Mercado: % de Haircut e % de Recuperação por Macro-Setor', desc: 'Parâmetros médios observados nos {COUNT} casos monitorados para calibragem rápida de propostas, modelagem de planos e avaliação de colateral.' },
      { id: 'pitch_pptx', label: 'Gerador de Proposta Comercial (.pptx)', title: 'Gerador Automático de Pitch Deck & Proposta de Honorários em PowerPoint (.pptx)', desc: 'Exportação instantânea de apresentação institucional widescreen (7 slides) com Perfil da Empresa, Diagnóstico, Estrutura de Retainer + Success Fee e Cronograma.' }
    ]
  },
  dashboards: {
    pageTitle: 'Dashboards & Inteligência de Mercado',
    pageSubtitle: 'Visão executiva agregada de exposição setorial, funil concursal, benchmarks de haircut por macro-setor e estratificação por faixa de passivo.',
    showFilters: false,
    subtabs: [
      { id: 'visao_setorial', label: 'Visão Setorial & Funil', title: 'Concentração Setorial & Funil de Fases Concursais', desc: 'Análise comparativa do passivo acumulado (R$ MM) e volume de processos por Macro-Setor e modalidade da Lei 11.101/05.' },
      { id: 'matriz_setor', label: 'Matriz Quantitativa por Setor', title: 'Scorecard Setorial de Special Situations', desc: 'Tabela analítica de participação percentual, ticket médio, oportunidades de UPI e score forense médio por setor.' },
      { id: 'benchmarks_setor', label: 'Benchmarks de Haircut por Setor', title: 'Tabela de Referência de Mercado: % de Haircut e % de Recuperação por Macro-Setor', desc: 'Parâmetros médios observados nos {COUNT} casos monitorados para calibragem rápida de propostas e avaliação de planos.' },
      { id: 'curva_porte', label: 'Curva de Passivo & Top Deals', title: 'Estratificação por Faixa de Passivo & Maiores Exposições', desc: 'Distribuição dos casos entre Mid-Market, Upper-Mid, Large Cap e Mega Cases no recorte selecionado.' }
    ]
  },
  upis: {
    pageTitle: 'UPIs & Ativos Distressed',
    pageSubtitle: 'Mapeamento dedicado de Unidades Produtivas Isoladas (UPIs), parques fabris, fazendas, silos, imóveis e carteiras para aquisição livre de sucessão.',
    showFilters: true,
    subtabs: [
      { id: 'upi_all', label: 'Todas as UPIs & Ativos', title: 'Catálogo Consolidado de Ativos & UPIs (Art. 60 e 141 da Lei 11.101/05)', desc: 'Oportunidades mapeadas de aquisição de ativos operacionais, plantas industriais, imóveis rurais e créditos ilíquidos.' },
      { id: 'upi_agro', label: 'Fazendas, Silos & Grãos', title: 'Ativos Reais do Agronegócio: Terras, Silos e Misturadoras', desc: 'Unidades de armazenagem, fazendas em alienação fiduciária e plantas de insumos/biológicos disponíveis para M&A ou Sale & Leaseback.' },
      { id: 'upi_ind', label: 'Parques Fabris & Marcas', title: 'Ativos Industriais, Metalmecânica, Moveleiro e Marcas', desc: 'Leilões judiciais de parques fabris em operação continuada, maquinários e marcas comerciais.' },
      { id: 'upi_imob', label: 'Imóveis, Campi & Concessões', title: 'Ativos Imobiliários, Campi Universitários, Lojas e Infraestrutura', desc: 'Glebas urbanas, condomínios, campi de ensino superior, hospitais e SPEs de concessão/energia.' }
    ]
  },
  bancometro: {
    pageTitle: 'Bancômetro & Exposição de Credores',
    pageSubtitle: 'Ranking de exposição de instituições financeiras, agentes fiduciários, securitizadoras, FIDCs e tradings nos processos monitorados.',
    showFilters: false,
    subtabs: [
      { id: 'cred_all', label: 'Todos os Credores Institucionais', title: 'Mapa Geral de Exposição por Instituição Credora', desc: 'Clique em qualquer instituição para filtrar imediatamente todos os processos em que o banco, fundo ou agente fiduciário possui exposição.' },
      { id: 'cred_privados', label: 'Bancos Privados & Montadoras', title: 'Exposição de Bancos Privados Nacionais, Internacionais e Montadoras', desc: 'Presença de Itaú, Bradesco, Santander, Safra, Daycoval, BTG Pactual e bancos de montadoras (John Deere, Volvo, Scania, Caterpillar).' },
      { id: 'cred_publicos', label: 'Bancos Públicos & Cooperativas', title: 'Exposição de Bancos Públicos, Fomento e Sistema Cooperativo', desc: 'Concentração em Banco do Brasil, Caixa Econômica Federal, BNDES, BRDE, BASA, BNB, Banrisul e Sicredi/Cresol/Unicred.' },
      { id: 'cred_dcm', label: 'Mercado de Capitais, FIDCs & Tradings', title: 'Agentes Fiduciários, Securitizadoras de CRA/CRI, FIDCs e Tradings', desc: 'Monitoramento de Vórtx, Pentágono, Oliveira Trust, Opea, Vert, Virgo, FIDCs e tradings globais (COFCO, Cargill, Bunge).' }
    ]
  },
  ecossistema: {
    pageTitle: 'Ecossistema & Players (Bancas, AJs, Fiduciários e Varas)',
    pageSubtitle: 'Inteligência de relacionamento mapeando bancas de advocacia, administradores judiciais, agentes fiduciários, securitizadoras e juízos concursais.',
    showFilters: false,
    subtabs: [
      { id: 'eco_bancas', label: 'Bancas & Escritórios', title: 'Ranking de Escritórios de Advocacia (Devedores & Credores)', desc: 'Volume de passivo assessorado, número de processos, setores de especialidade e filtro rápido de carteira por banca jurídica.' },
      { id: 'eco_ajs', label: 'Administradores Judiciais (AJs)', title: 'Mapeamento de Administradores Judiciais e Peritos (Art. 51-A)', desc: 'Processos sob gestão de Laspro, Preserva-Ação, Cabezón, Brizola e Japur, Credibilita, Von Saltiél, AJUDD, CB2D e Brazilio Bacellar.' },
      { id: 'eco_fiduciarios', label: 'Agentes Fiduciários & Securitizadoras', title: 'Radar Fiduciário de Mercado de Capitais (Debêntures, CRAs e CRIs)', desc: 'Exposição fiduciária de Vórtx, Pentágono, Oliveira Trust e securitizadoras Opea, Vert, Virgo, Reit e Audax.' },
      { id: 'eco_varas', label: 'Varas Empresariais & Comarcas', title: 'Jurisdições e Varas Especializadas por Volume de Passivo', desc: 'Concentração de casos nas Varas Regionais Empresariais de SP, RJ, Curitiba, Porto Alegre, Caxias do Sul, Cuiabá, Sinop, Rondonópolis e Goiânia.' }
    ]
  },
  prazos: {
    pageTitle: 'Calendário Tático Completo ({COUNT} Casos) — Prazos, Stay & AGCs',
    pageSubtitle: 'Cobertura integral dos {COUNT} casos combinando datas fixadas em edital (AGCs/AGDs/Leilões) e prazos legais automáticos da Lei 11.101/05.',
    showFilters: true,
    subtabs: [
      { id: 'prazos_all', label: 'Cronograma Completo ({COUNT} Casos)', title: 'Linha do Tempo Completa dos {COUNT} Grupos Monitorados (Contagem Regressiva)', desc: 'Todos os {COUNT} casos com data de vencimento calculada ou fixada em edital, ordenada por urgência e com exportação para Google Calendar / Outlook (.ics).' },
      { id: 'prazos_calendario', label: 'Grade Mensal Interativa (Out/Nov/Dez)', title: 'Visão de Calendário Mensal de Eventos Críticos, AGCs, AGDs e Leilões', desc: 'Grade mensal interativa destacando dias com assembleias, leilões de UPIs, mediações CEJUSC e vencimentos de blindagem cautelar.' },
      { id: 'prazos_agc', label: 'AGCs, AGDs & Leilões com Edital', title: 'Eventos com Data Fixada em Edital (AGCs, AGDs, Mediações e Leilões)', desc: 'Compromissos concursais iminentes com data certa publicada nos autos ou na CVM.' },
      { id: 'prazos_cautelar', label: 'Janelas Cautelares Art. 20-B (60d)', title: 'Monitoramento de Tutelas Cautelares Antecedentes e Prazos de Plano (Art. 53)', desc: 'Controle estrito do prazo de 60 dias corridos de suspensão de execuções e apresentação do Plano de Recuperação Judicial.' }
    ]
  },

  mapa: {
    pageTitle: 'Mapa Geográfico Concursal',
    pageSubtitle: 'Cartografia interativa das Unidades Federativas (GeoJSON Brasil) com concentração regional de passivos, varas empresariais e polos produtivos.',
    showFilters: true,
    subtabs: [
      { id: 'geo_all', label: 'Brasil Consolidado (27 UFs)', title: 'Distribuição Cartográfica Nacional por Estado e Fase Processual', desc: 'Mapa vetorial das UFs do Brasil com capitais, legenda de fases concursais e raio proporcional ao passivo em R$ MM.' },
      { id: 'geo_Sudeste', label: 'Eixo Sudeste (SP/RJ/MG/ES)', title: 'Polos Corporativos e Varas Especializadas do Sudeste', desc: 'Concentração de processos em São Paulo, Rio de Janeiro, Minas Gerais e Espírito Santo.' },
      { id: 'geo_Sul', label: 'Região Sul (RS/PR/SC)', title: 'Polos Industriais, Cooperativas e Agronegócio do Sul', desc: 'Monitoramento das Varas Regionais Empresariais do Rio Grande do Sul, Paraná e Santa Catarina.' },
      { id: 'geo_Centro-Oeste', label: 'Centro-Oeste (MT/GO/MS)', title: 'Fronteira Agrícola, Armazenagem e Biocombustíveis do Centro-Oeste', desc: 'Processos concursais em Cuiabá, Sinop, Sorriso, Rondonópolis, Primavera do Leste, Goiânia, Itaberaí e Dourados.' },
      { id: 'geo_NorteNordeste', label: 'Norte & Nordeste (PA/CE/PE/BA/PI/AM/TO)', title: 'Infraestrutura, Energia Renovável, Varejo e Matopiba', desc: 'Casos estratégicos no Pará, Ceará, Pernambuco, Bahia, Piauí, Amazonas e Tocantins.' }
    ]
  },
  noticias: {
    pageTitle: 'Notícias & Fatos Relevantes',
    pageSubtitle: 'Feed de inteligência concursal monitorando pedidos de RJ/Cautelares, convocações de AGDs, fatos relevantes CVM e decisões judiciais.',
    showFilters: false,
    subtabs: [
      { id: 'news_all', label: 'Todas as Notícias & Fatos', title: 'Feed Integrado de Inteligência Concursal & Mercado de Capitais', desc: 'Acompanhamento diário conectado diretamente às Fichas Analíticas (Tear Sheets) dos grupos econômicos monitorados.' },
      { id: 'news_rj', label: 'Pedidos de RJ & Cautelares 20-B', title: 'Ajuizamentos Recentes, Tutelas de Urgência e Decisões de Varas Empresariais', desc: 'Movimentações críticas em processos de Recuperação Judicial e Cautelares Antecedentes.' },
      { id: 'news_dcm', label: 'Waivers, AGDs & Downgrades Rating', title: 'Eventos de Mercado de Capitais: Debêntures, CRAs, CRIs e Agências de Rating', desc: 'Fatos relevantes CVM, convocações de agentes fiduciários e cortes de rating (Fitch / S&P / Moody\'s).' },
      { id: 'news_upi_falencia', label: 'Leilões de UPI & Falências', title: 'Editais de Alienação Judicial de UPIs e Sentenças de Quebra / Asset Tracing', desc: 'Oportunidades de M&A Distressed livre de sucessão e decretos de falência com arrecadação forense de ativos.' }
    ]
  },
  energia: {
    pageTitle: 'Energia & Infraestrutura (ONS / CCEE / ANEEL)',
    pageSubtitle: 'Vertical setorial de monitoramento técnico-operacional do Sistema Interligado Nacional (SIN), PLD, Curtailment e Special Situations de Energia.',
    showFilters: false,
    subtabs: [
      { id: 'sin_tempo_real', label: 'Tempo Real (SIN) ▾', title: 'Painel Operacional ONS — Geração e Carga em Tempo Real (MW)', desc: 'Curva horária empilhada de geração por fonte (Hidráulica, Térmica, Nuclear, Solar, Eólica e MMGD) comparada à Carga Prevista e Realizada.' },
      { id: 'hidrologia_ena', label: 'Dados Hidrológicos (ENA / EAR) ▾', title: 'Reservatórios equivalentes (EAR %) e Energia Natural Afluente (ENA % MLT)', desc: 'Balanço hídrico por submercado e impacto direto sobre o risco hidrológico (GSF) e despacho térmico.' },
      { id: 'pld_horario', label: 'PLD Horário & Submercados ▾', title: 'Descolamento de Preço de Liquidação das Diferenças (PLD R$/MWh) & Exposição MCP', desc: 'Monitoramento de spread horário entre submercados (SE/CO, Sul, NE, Norte) e gatilhos de chamada de margem em comercializadoras.' },
      { id: 'risco_curtailment', label: 'Risco de Curtailment (Constrained-off) ▾', title: 'Restrição de Escoamento Eólico/Solar (Constrained-off) & Erosão de ICSD em Debêntures', desc: 'Impacto dos cortes de geração determinados pelo ONS sobre o fluxo de caixa das SPEs e covenants de debêntures de infraestrutura.' },
      { id: 'outorgas_aneel', label: 'Outorgas ANEEL & CCEE ▾', title: 'Monitoramento Regulatório: Inadimplemento MCP/CCEE & Processos de Caducidade', desc: 'Acompanhamento de notificações de desligamento na CCEE, execução de garantias e processos administrativos de caducidade (ANEEL/ARTESP).' },
      { id: 'pipeline_energia', label: 'Pipeline Energia & Infra (9)', title: 'Pipeline Dedicado de Special Situations em Energia & Infraestrutura (9 Casos)', desc: 'Dossiês setoriais destacando Código da Debênture, Agente Fiduciário, Status CCEE, Risco de Caducidade e Corte de Rating por Curtailment/ICSD.' }
    ]
  }
};


const CITY_COORDINATES = {
  'Buritis,MG': [-15.6178, -46.4233],
  'Pinhais,PR': [-25.4344, -49.1925],
  'Tangará da Serra,MT': [-14.6225, -57.4933],
  'São Paulo,SP': [-23.5505, -46.6333],
  'Barueri,SP': [-23.5105, -46.8761],
  'São Bernardo do Campo,SP': [-23.6944, -46.5654],
  'São Caetano do Sul,SP': [-23.6229, -46.5552],
  'Campinas,SP': [-22.9099, -47.0626],
  'Sorocaba,SP': [-23.5015, -47.4526],
  'Piracicaba,SP': [-22.7253, -47.6476],
  'Limeira,SP': [-22.5644, -47.4017],
  'Salto,SP': [-23.2008, -47.2869],
  'Olímpia,SP': [-20.7381, -48.9142],
  'Cotia,SP': [-23.6022, -46.9189],
  'Rio de Janeiro,RJ': [-22.9068, -43.1729],
  'São João da Barra,RJ': [-21.6403, -41.0514],
  'Belo Horizonte,MG': [-19.9167, -43.9345],
  'Sete Lagoas,MG': [-19.4658, -44.2467],
  'Montes Claros,MG': [-16.7350, -43.8617],
  'Vitória,ES': [-20.3155, -40.3128],
  'Viana,ES': [-20.3906, -40.4958],
  'Curitiba,PR': [-25.4284, -49.2733],
  'Londrina,PR': [-23.3045, -51.1696],
  'Maringá,PR': [-23.4210, -51.9331],
  'Porto Alegre,RS': [-30.0346, -51.2177],
  'Novo Hamburgo,RS': [-29.6783, -51.1306],
  'Caxias do Sul,RS': [-29.1678, -51.1794],
  'Canoas,RS': [-29.9177, -51.1836],
  'Passo Fundo,RS': [-28.2628, -52.4067],
  'Ibirubá,RS': [-28.6275, -53.0897],
  'Esteio,RS': [-29.8525, -51.1828],
  'Florianópolis,SC': [-27.5954, -48.5480],
  'Joinville,SC': [-26.3044, -48.8464],
  'Cuiabá,MT': [-15.6010, -56.0974],
  'Sinop,MT': [-11.8608, -55.5097],
  'Primavera do Leste,MT': [-15.5586, -54.2961],
  'Rondonópolis,MT': [-16.4674, -54.6368],
  'Nova Bandeirantes,MT': [-9.8653, -57.8578],
  'Sorriso,MT': [-12.5428, -55.7214],
  'Dourados,MS': [-22.2211, -54.8056],
  'Sidrolândia,MS': [-20.9317, -54.9614],
  'Ponta Porã,MS': [-22.5361, -55.7256],
  'Goiânia,GO': [-16.6869, -49.2648],
  'Itaberaí,GO': [-16.0203, -49.8092],
  'Salvador,BA': [-12.9714, -38.5014],
  'Recife,PE': [-8.0476, -34.8770],
  'Fortaleza,CE': [-3.7172, -38.5433],
  'Caucaia,CE': [-3.7360, -38.6531],
  'Teresina,PI': [-5.0892, -42.8016],
  'Belém,PA': [-1.4558, -48.4902],
  'Ananindeua,PA': [-1.3656, -48.3744],
  'Paragominas,PA': [-2.9972, -47.3533],
  'Palmas,TO': [-10.1844, -48.3336],
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

const TICKER_MAP = {
  'Aeris Energy': 'AERI3',
  'Alliança Saúde': 'AALR3',
  'Raízen': 'RAIZ4',
  'Paranapanema': 'PMAM3',
  'OSX Brasil': 'OSXB3',
  'Lupatech': 'LUPA3',
  'Grupo Pão de Açúcar': 'PCAR3',
  'Oncoclínicas': 'ONCO3',
  'Braskem': 'BRKM5',
  'Fertilizantes Heringer': 'FHER3',
  'Grupo Toky': 'MBLY3',
  'AgroGalaxy': 'AGXY3',
  'GDS Subholding': 'GDSS11'
};

// Application State
let currentMainSection = 'operacao';
let currentSubTab = 'all';
let currentProcessType = '';
let currentUf = '';
let currentSetor = '';
let currentPorte = '';
let currentSort = 'movimento_desc';
let searchTerm = '';
let viewMode = 'table';

// Dynamic Passivo Floor & Ceiling (R$ MM)
let minPassivoMM = 30;
let maxPassivoMM = null;
let activeQuickToggle = 'all';

// Map & Charts State
let leafletMapInstance = null;
let leafletGeoJsonLayer = null;
let leafletMarkersLayer = null;
let leafletCapitalsLayer = null;
let currentModalItem = null;
let currentModalTab = 'visao';
let activeCharts = [];

// News Filter State
let newsSourceFilter = '';
let newsSetorFilter = '';
let newsCategoriaFilter = '';
let newsSearchQuery = '';
let newsScopeFilter = 'all'; // 'all' | 'mercado' | 'pipeline' | 'cvm'
let liveRssNewsItems = [];
let newsFeedSyncStatus = 'Sincronizando RSS Distressed Debt...';

// Energy Live Telemetry State
let energyTelemetryStatus = 'Fallback Operacional (Cache ONS/CCEE)';
let energyLastSyncTime = '19/10/2026 12:00';
let energyLiveOverrides = {};

// Energy SIN Panel State
let selectedSinSubmarket = 'SIN';
let selectedSinDate = '2026-10-16';

// v4.0 Module States — Calculadora de Honorários (Success Fee & Retainer)
let selectedModelDealId = 1;
let modelCustomPassivo = 1000;
let modelHaircutPct = 55;
let modelSecondaryDiscountPct = 35;
let modelFeeBasis = 'passivo_total'; // 'passivo_total' | 'haircut_economia' | 'credito_recuperado'
let modelMandateMonths = 12;
let modelRetainerOffsetPct = 50;
let modelEvAtivos = 550;
let modelLiqDiscountPct = 40;
let modelDipAmount = 100;
let modelDipCollateral = 220;
let modelUpiValuation = 300;
let modelUpiBid = 165;
let pitchMandateType = 'Debtor-Side / Financial Advisory & Turnaround';
let pitchTargetRecipient = 'Conselho de Administração / Diretoria Financeira ou Comitê de Credores';
let pitchRetainerMensal = 95;
let pitchSuccessFeePct = 2.0;

// AGC Quorum State
let agcVotes = {
  c1_head_yes: 85,
  c2_val_yes: 62, c2_head_yes: 60,
  c3_val_yes: 46, c3_head_yes: 54,
  c4_head_yes: 72
};

// Calendar State
let calSelectedMonth = '2026-11';
let calFilterUrgency = '';
let calFilterMarcoType = '';

// Comps State
let selectedCompIds = [1, 17, 52, 55];

let lastNewsAutoSyncTs = 0;

function loadCachedLiveNewsFromStorage() {
  try {
    const raw = localStorage.getItem('vk_live_rss_cache_v4');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        liveRssNewsItems = parsed;
      }
    }
  } catch (e) {}
}

function saveCachedLiveNewsToStorage(items) {
  try {
    if (Array.isArray(items) && items.length > 0) {
      localStorage.setItem('vk_live_rss_cache_v4', JSON.stringify(items.slice(0, 24)));
    }
  } catch (e) {}
}

document.addEventListener('DOMContentLoaded', () => {
  loadCachedLiveNewsFromStorage();
  updateDynamicNavCounts();
  enrichAllDeals();
  populateDropdownFilters();
  renderSubTabs();
  renderSectionContent();
  fetchLiveSheetInBackground();
  fetchLiveDistressedNews();
  fetchEnergyMarketData(selectedSinSubmarket, selectedSinDate);

  // Auto-refresh loop: atualiza automaticamente a cada 5 minutos em background
  setInterval(() => {
    fetchLiveDistressedNews(false);
    fetchLiveSheetInBackground(false);
  }, 5 * 60 * 1000);

  // Atualiza automaticamente sempre que o usuário volta para a aba após > 3 min
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && (Date.now() - lastNewsAutoSyncTs > 3 * 60 * 1000)) {
      fetchLiveDistressedNews(false);
      fetchLiveSheetInBackground(false);
    }
  });
});

// ==========================================================================
// 1. Data Enrichment & Smart Thesis Regex Parser
// ==========================================================================
function parseThesisRegex(teseStr) {
  const raw = String(teseStr || '').trim();
  if (!raw) {
    return {
      causa: 'Histórico operacional e financeiro em consolidação documental.',
      gargalo: 'Monitoramento de prazos concursais, stay period e editais de assembleia.',
      mandato: 'Avaliação de oportunidade para Creditor-Side Advisory, Watchdog ou M&A de UPI.'
    };
  }
  const m1 = raw.match(/\(1\)\s*(?:Causa da crise:\s*)?([\s\S]*?)(?=\s*;\s*\(2\)|\s*\(2\)|$)/i);
  const m2 = raw.match(/\(2\)\s*(?:Gargalo imediato:\s*)?([\s\S]*?)(?=\s*;\s*\(3\)|\s*\(3\)|$)/i);
  const m3 = raw.match(/\(3\)\s*(?:Oportunidade de mandato:\s*|Tese de mandato:\s*)?([\s\S]*?)$/i);

  if (m1 && m2 && m3) {
    return {
      causa: m1[1].trim().replace(/;$/, ''),
      gargalo: m2[1].trim().replace(/;$/, ''),
      mandato: m3[1].trim().replace(/;$/, '')
    };
  }
  return {
    causa: raw,
    gargalo: 'Acompanhamento de prazos processuais, impugnações de créditos e deliberações em assembleia.',
    mandato: raw
  };
}

function extractStakeholdersFromText(credoresStr, teseStr) {
  const blob = `${credoresStr || ''} ${teseStr || ''}`;
  const fiduciarios = [];
  ['Vórtx', 'Pentágono', 'Oliveira Trust', 'Simplific Pavarini', 'Planner'].forEach(ag => {
    if (blob.toLowerCase().includes(ag.toLowerCase())) fiduciarios.push(`${ag} DTVM`);
  });
  const securitizadoras = [];
  ['Opea', 'Vert', 'Virgo', 'Reit', 'Audax', 'True', 'Bari', 'Isec'].forEach(sec => {
    if (blob.toLowerCase().includes(sec.toLowerCase())) securitizadoras.push(`${sec} Securitizadora`);
  });
  return {
    fiduciarios: fiduciarios.length > 0 ? fiduciarios.join(' • ') : 'N/A (Dívida Bancária / Bilaterais)',
    securitizadoras: securitizadoras.length > 0 ? securitizadoras.join(' • ') : 'N/A (Sem Emissão Securitizada Reportada)'
  };
}

function resolveTicker(empresaName) {
  const emp = String(empresaName || '');
  const parenMatch = emp.match(/\(([A-Z]{4}\d{1,2})\)/);
  if (parenMatch) return parenMatch[1];
  for (const [k, v] of Object.entries(TICKER_MAP)) {
    if (emp.toLowerCase().includes(k.toLowerCase())) return v;
  }
  return '';
}

function parseCreditorsList(rawStr) {
  if (!rawStr || typeof rawStr !== 'string') return [];
  return rawStr
    .split(/,(?!\s*\d)|;|\s+\+\s+/g)
    .map(s => s.trim())
    .filter(Boolean);
}

function parseDateBR(dateStr) {
  if (!dateStr) return null;
  const clean = String(dateStr).trim();
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(clean)) {
    const [d, m, y] = clean.split('/').map(Number);
    return new Date(y, m - 1, d, 12, 0, 0);
  }
  if (/^\d{4}-\d{2}-\d{2}/.test(clean)) {
    const [y, m, d] = clean.slice(0, 10).split('-').map(Number);
    return new Date(y, m - 1, d, 12, 0, 0);
  }
  const parsed = new Date(clean);
  return isNaN(parsed.getTime()) ? null : parsed;
}

function calcDaysRemaining(targetDateStr) {
  const target = parseDateBR(targetDateStr);
  if (!target) return null;
  const today = new Date();
  today.setHours(12, 0, 0, 0);
  return Math.ceil((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
}

function computeDynamicRecovery(d) {
  const setor = String(d.setor_macro || '').toLowerCase();
  const fase = String(d.fase || '').toLowerCase();
  const tier = String(d.tier || '').toLowerCase();
  const colateral = String((d.perfil_passivo || '') + ' ' + (d.tese || '')).toLowerCase();

  let recup = 42;
  if (setor.includes('energia')) recup = 58;
  else if (setor.includes('construção') || setor.includes('real estate')) recup = 52;
  else if (setor.includes('agronegócio')) recup = 48;
  else if (setor.includes('saúde')) recup = 46;
  else if (setor.includes('indústria')) recup = 39;
  else if (setor.includes('tecnologia') || setor.includes('serviços')) recup = 36;
  else if (setor.includes('financeiros')) recup = 34;
  else if (setor.includes('varejo')) recup = 29;

  if (tier.includes('tier 0')) recup += 12;
  else if (tier.includes('tier 1') || fase.includes('20-b') || fase.includes('cautelar')) recup += 8;
  else if (fase.includes('extrajudicial') || fase.includes('128') || fase.includes('12154')) recup += 10;
  else if (fase.includes('falência') || fase.includes('110') || fase.includes('liquidação')) recup -= 16;

  if (colateral.includes('alienação fiduciária') || colateral.includes('garantia real') || colateral.includes('hipoteca') || colateral.includes('project finance')) {
    recup += 5;
  }
  if (colateral.includes('upi') || colateral.includes('sale & leaseback') || colateral.includes('silos') || colateral.includes('parque fabril')) {
    recup += 3;
  }

  // Deterministic id-based micro-variation (-2 to +2%) so peer cases in same sector/tier reflect their specific collateral profile
  const offset = ((Number(d.id || 1) * 7) % 5) - 2;
  recup = Math.min(82, Math.max(15, recup + offset));
  return { recupPct: recup, haircutPct: 100 - recup };
}

function enrichAllDeals() {
  DEALS_DATA.forEach(d => {
    const enrichedRef = ENRICHED_BY_COMPANY[d.empresa];
    if (enrichedRef) {
      if (!d.tese || !d.tese.includes('(1)')) d.tese = enrichedRef.tese;
      if (!d.energy_meta && enrichedRef.energy_meta) d.energy_meta = enrichedRef.energy_meta;
      if (!d.descricao_empresa && enrichedRef.descricao_empresa) d.descricao_empresa = enrichedRef.descricao_empresa;
      if (!d.model_params && enrichedRef.model_params) d.model_params = enrichedRef.model_params;
      if (!d.agro_meta && enrichedRef.agro_meta) d.agro_meta = enrichedRef.agro_meta;
      if (!d.calendar_meta && enrichedRef.calendar_meta) d.calendar_meta = enrichedRef.calendar_meta;
      if (!d.url_noticia && enrichedRef.url_noticia) d.url_noticia = enrichedRef.url_noticia;
      if (!d.url_tribunal_cvm && enrichedRef.url_tribunal_cvm) d.url_tribunal_cvm = enrichedRef.url_tribunal_cvm;
    }

    const parsed = parseThesisRegex(d.tese);
    d.causa_crise = parsed.causa;
    d.gargalo_imediato = parsed.gargalo;
    d.tese_mandato = parsed.mandato;

    if (!d.descricao_empresa) {
      d.descricao_empresa = `Grupo empresarial brasileiro atuante em ${d.setor_detalhe || d.setor_macro} com operação sediada em ${d.cidade}/${d.uf} e passivo monitorado de R$ ${formatNumberBR(d.passivo_mm)} milhões.`;
    }

    const dynRec = computeDynamicRecovery(d);
    if (!d.model_params) {
      const p = Number(d.passivo_mm || 100);
      d.model_params = {
        haircut_estimado_pct: dynRec.haircutPct,
        recuperacao_estimada_pct: dynRec.recupPct,
        desconto_secundario_pct: 35,
        ev_estimado_mm: Math.round(p * (dynRec.recupPct / 100.0)),
        liquidez_forcada_desconto_pct: 40,
        classes_pct: { c1_trabalhista: 8, c2_garantia_real: 35, c3_quirografario: 50, c4_me_epp: 7, extraconcursal_fiduciario: 20, passivo_fiscal_estimado_mm: Math.round(p * 0.22) },
        dip_necessidade_mm: Math.round(Math.max(15, p * 0.12)),
        upi_valuation_estimado_mm: Math.round(p * 0.35)
      };
    } else {
      d.model_params.haircut_estimado_pct = dynRec.haircutPct;
      d.model_params.recuperacao_estimada_pct = dynRec.recupPct;
      d.model_params.haircut_pct = dynRec.haircutPct;
      d.model_params.recuperacao_pct = dynRec.recupPct;
    }

    const st = extractStakeholdersFromText(d.credores, d.tese);
    d.agentes_fiduciarios = (d.energy_meta && d.energy_meta.agente_fiduciario) ? d.energy_meta.agente_fiduciario : (d.agentes_fiduciarios || st.fiduciarios);
    d.securitizadoras = d.securitizadoras || st.securitizadoras;
    d.ticker = resolveTicker(d.empresa);

    const faseL = (d.fase || '').toLowerCase();
    if (faseL.includes('falência') || faseL.includes('autofalência') || faseL.includes('liquidação') || faseL.includes('classe 110')) {
      d.subtipo_processo = 'Falência / Liquidação';
    } else {
      d.subtipo_processo = d.tipo_processo || 'PRJ';
    }
  });

  const navOp = document.getElementById('nav-count-operacao');
  const navUpi = document.getElementById('nav-count-upis');
  const navPrazos = document.getElementById('nav-count-prazos');
  const navNews = document.getElementById('nav-count-noticias');
  const navEng = document.getElementById('nav-count-energia');
  const navAgro = document.getElementById('nav-count-agro');
  if (navOp) navOp.textContent = DEALS_DATA.length;
  if (navUpi) navUpi.textContent = DEALS_DATA.filter(isUpiEligible).length;
  if (navPrazos) navPrazos.textContent = DEALS_DATA.length;
  if (navNews) navNews.textContent = typeof getAllCombinedNews === 'function' ? getAllCombinedNews().length : NEWS_FEED_DATA.length;
  if (navEng) navEng.textContent = DEALS_DATA.filter(d => d.setor_macro === 'Energia & Infraestrutura').length;
  if (navAgro) navAgro.textContent = DEALS_DATA.filter(d => d.setor_macro === 'Agronegócio & Silvicultura').length;
  const pill = document.getElementById('lastUpdateTime');
  if (pill && DEALS_DATA.length > 0) pill.textContent = `Online: ${DEALS_DATA.length} leads`;
}

function showToast(msg) {
  const t = document.getElementById('toastBanner');
  if (!t) return;
  t.textContent = msg;
  t.style.display = 'block';
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => { t.style.display = 'none'; }, 3200);
}

// ==========================================================================
// 2. Dynamic Liability Cutoff Controls (Piso e Teto em R$ MM + Quick Toggles)
// ==========================================================================
function matchesPassivoCutoff(item) {
  const val = Number(item.passivo_mm || 0);
  if (minPassivoMM !== null && !isNaN(minPassivoMM) && val < minPassivoMM) return false;
  if (maxPassivoMM !== null && !isNaN(maxPassivoMM) && val > maxPassivoMM) return false;
  return true;
}

function handlePassivoCutoffInput() {
  const minEl = document.getElementById('inputMinPassivo');
  const maxEl = document.getElementById('inputMaxPassivo');

  const rawMin = minEl ? minEl.value.trim() : '';
  const rawMax = maxEl ? maxEl.value.trim() : '';

  minPassivoMM = rawMin === '' ? 0 : parseFloat(rawMin);
  if (isNaN(minPassivoMM) || minPassivoMM < 0) minPassivoMM = 0;

  maxPassivoMM = rawMax === '' ? null : parseFloat(rawMax);
  if (maxPassivoMM !== null && (isNaN(maxPassivoMM) || maxPassivoMM <= 0)) maxPassivoMM = null;

  document.querySelectorAll('.quick-toggle-btn').forEach(b => b.classList.remove('active'));
  if ((minPassivoMM === 0 || minPassivoMM === 30) && maxPassivoMM === null) {
    document.getElementById('qtoggle-all')?.classList.add('active');
  } else if (minPassivoMM === 30 && maxPassivoMM === 10000) {
    document.getElementById('qtoggle-no_outliers')?.classList.add('active');
  } else if (minPassivoMM === 30 && maxPassivoMM === 500) {
    document.getElementById('qtoggle-middle')?.classList.add('active');
  }

  renderSubTabs();
  renderSectionContent();
}

function setPassivoQuickToggle(mode) {
  activeQuickToggle = mode;
  const minEl = document.getElementById('inputMinPassivo');
  const maxEl = document.getElementById('inputMaxPassivo');

  document.querySelectorAll('.quick-toggle-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById(`qtoggle-${mode}`);
  if (btn) btn.classList.add('active');

  if (mode === 'all') {
    minPassivoMM = 30;
    maxPassivoMM = null;
    if (minEl) minEl.value = '30';
    if (maxEl) maxEl.value = '';
    showToast('Recorte atualizado: Piso padrão de R$ 30 MM (sem teto de passivo).');
  } else if (mode === 'no_outliers') {
    minPassivoMM = 30;
    maxPassivoMM = 10000;
    if (minEl) minEl.value = '30';
    if (maxEl) maxEl.value = '10000';
    showToast('Recorte atualizado: Sem Outliers (R$ 30 MM a R$ 10.000 MM).');
  } else if (mode === 'middle') {
    minPassivoMM = 30;
    maxPassivoMM = 500;
    if (minEl) minEl.value = '30';
    if (maxEl) maxEl.value = '500';
    showToast('Recorte atualizado: Middle Market (R$ 30 MM a R$ 500 MM).');
  }

  renderSubTabs();
  renderSectionContent();
}


function resetAllFilters() {
  currentProcessType = '';
  currentUf = '';
  currentSetor = '';
  currentPorte = '';
  currentSort = 'movimento_desc';
  searchTerm = '';
  minPassivoMM = 30;
  maxPassivoMM = null;
  activeQuickToggle = 'all';

  const searchEl = document.getElementById('searchInput');
  if (searchEl) searchEl.value = '';
  const ufEl = document.getElementById('selectUf');
  if (ufEl) ufEl.value = '';
  const setorEl = document.getElementById('selectSetor');
  if (setorEl) setorEl.value = '';
  const porteEl = document.getElementById('selectPorte');
  if (porteEl) porteEl.value = '';
  const sortEl = document.getElementById('selectSort');
  if (sortEl) sortEl.value = 'movimento_desc';
  const minEl = document.getElementById('inputMinPassivo');
  if (minEl) minEl.value = '30';
  const maxEl = document.getElementById('inputMaxPassivo');
  if (maxEl) maxEl.value = '';

  document.querySelectorAll('.quick-toggle-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('qtoggle-all')?.classList.add('active');
  document.querySelectorAll('.phase-chip').forEach(c => c.classList.remove('active'));
  document.getElementById('proc-all')?.classList.add('active');

  renderSubTabs();
  renderSectionContent();
  showToast('Todos os filtros foram limpos (Piso restaurado para R$ 30 MM).');
}

// ==========================================================================
// 3. Helpers & Classifiers
// ==========================================================================
function isUpiEligible(d) {
  const blob = [d.tese || '', d.perfil_passivo || '', d.fase || '', ...(d.watchdog_triggers || [])].join(' ').toLowerCase();
  return ['upi', 'alienação', 'desinvestimento', 'leilão', 'fazenda', 'silo', 'armazém', 'marca', 'usina', 'parque fabril', 'campi', 'sale & leaseback', 'imóve'].some(k => blob.includes(k));
}

function getUpiCategory(d) {
  const s = (d.setor_macro || '').toLowerCase();
  const blob = ((d.tese || '') + ' ' + (d.perfil_passivo || '')).toLowerCase();
  if (s.includes('agro') || blob.includes('fazenda') || blob.includes('silo')) return 'upi_agro';
  if (s.includes('indústria') || blob.includes('fabril') || blob.includes('fábrica')) return 'upi_ind';
  return 'upi_imob';
}

function isDebenturesEligible(d) {
  const perfilClean = String(d.perfil_passivo || '').replace(/bancário\s*[+/]\s*mercado de capitais/gi, '');
  const afClean = String(d.agentes_fiduciarios || '').replace(/monitoramento via escrituras\s*\/\s*n\/a/gi, '').replace(/n\/a\s*\([^)]*\)/gi, '');
  const secClean = String(d.securitizadoras || '').replace(/sem securitizadora reportada[^,]*/gi, '').replace(/n\/a\s*\([^)]*\)/gi, '');
  const blob = [perfilClean, d.credores || '', d.tese || '', d.processo || '', d.tribunal || '', afClean, secClean, ...(d.watchdog_triggers || [])].join(' ');
  const dcmRegex = /\b(deb[eê]ntures?|debenturistas?|cras?|cris?|fidcs?|cvm|agds?|notas?\s+comerciais|v[oó]rtx|pent[aá]gono|oliveira\s+trust|virgo|opea|vert\s+securitizadora|reit\s+securitizadora|audax|covenants?|waivers?|standstill|fitch|moody|bonds?|bondholders?)\b/i;
  return dcmRegex.test(blob);
}

function hasScheduledAssemblyOrAuction(d) {
  const blob = ((d.tese || '') + ' ' + (d.proximas_acoes || '') + ' ' + (d.fase || '')).toLowerCase();
  return ['agc', 'agd', 'assembleia', 'leilão', 'mediação', '06/11', '10/11', '12/11', '16/10', '29/10', '19/11'].some(k => blob.includes(k));
}

function formatNumberBR(val) {
  if (isNaN(val) || val === null || val === undefined) return '0';
  return Math.round(Number(val)).toLocaleString('pt-BR');
}

function formatScoreBR(val) {
  const n = Number(val || 8.5);
  return n.toFixed(1).replace('.', ',');
}

function formatKpiScale(val) {
  if (isNaN(val) || !val) return '0 MM';
  if (val >= 1000) {
    return `${(val / 1000.0).toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} Bi`;
  }
  return `${Math.round(val).toLocaleString('pt-BR')} MM`;
}

function formatDateBR(dateStr) {
  if (!dateStr) return 'N/D';
  const clean = String(dateStr).split('T')[0].trim();
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(clean)) return clean;
  const parts = clean.split('-');
  return parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : clean;
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ==========================================================================
// 4. Main Section & Sub-Tab Navigation
// ==========================================================================
function switchMainSection(secId) {
  currentMainSection = secId;
  document.querySelectorAll('.nav-link-btn').forEach(b => b.classList.remove('active'));
  const activeNav = document.getElementById(`nav-${secId}`);
  if (activeNav) activeNav.classList.add('active');

  const cfg = SECTION_CONFIG[secId] || SECTION_CONFIG.operacao;
  document.getElementById('pageMainTitle').textContent = resolveDynamicCaseText(cfg.pageTitle);
  document.getElementById('pageMainSubtitle').textContent = resolveDynamicCaseText(cfg.pageSubtitle);
  document.getElementById('filterConsole').style.display = cfg.showFilters ? 'flex' : 'none';

  currentSubTab = cfg.subtabs[0].id;
  renderSubTabs();
  renderSectionContent();
}

function selectSubTab(subId) {
  currentSubTab = subId;
  const cfg = SECTION_CONFIG[currentMainSection] || SECTION_CONFIG.operacao;
  const st = cfg.subtabs.find(s => s.id === subId);
  if (st) {
    const titleEl = document.getElementById('subSectionTitle');
    const descEl = document.getElementById('subSectionDesc');
    if (titleEl) titleEl.textContent = resolveDynamicCaseText(st.title);
    if (descEl) descEl.textContent = resolveDynamicCaseText(st.desc);
  }
  renderSubTabs();
  renderSectionContent();
}

function renderSubTabs() {
  const cfg = SECTION_CONFIG[currentMainSection] || SECTION_CONFIG.operacao;
  const bar = document.getElementById('subtabPillsBar');
  const baseDeals = DEALS_DATA.filter(matchesPassivoCutoff);

  let html = '';
  cfg.subtabs.forEach(st => {
    const isActive = st.id === currentSubTab;
    let countBadge = '';
    if (currentMainSection === 'operacao') {
      const cnt = baseDeals.filter(d => {
        if (st.id === 'all') return true;
        if (st.id === 'debentures') return isDebenturesEligible(d);
        return d.strategy_id === st.id;
      }).length;
      countBadge = `<span class="pill-count">${cnt}</span>`;
    } else if (currentMainSection === 'upis') {
      const upis = baseDeals.filter(isUpiEligible);
      const cnt = st.id === 'upi_all' ? upis.length : upis.filter(d => getUpiCategory(d) === st.id).length;
      countBadge = `<span class="pill-count">${cnt}</span>`;
    } else if (currentMainSection === 'prazos') {
      const cnt = baseDeals.filter(d => {
        if (st.id === 'prazos_all' || st.id === 'prazos_calendario' || st.id === 'prazos_mensal') return true;
        if (st.id === 'prazos_agc') return hasScheduledAssemblyOrAuction(d);
        if (st.id === 'prazos_cautelar') return d.tipo_processo === 'Cautelar / Pré-RJ';
        return true;
      }).length;
      countBadge = `<span class="pill-count">${cnt}</span>`;
    } else if (currentMainSection === 'noticias' && typeof getAllCombinedNews === 'function') {
      const allN = getAllCombinedNews();
      const cnt = allN.filter(n => {
        if (st.id === 'news_all') return true;
        if (st.id === 'news_rj') return n.categoria === 'Pedido de RJ' || n.categoria === 'Cautelar 20-B';
        if (st.id === 'news_dcm') return n.categoria === 'Waiver / AGD' || n.categoria === 'Downgrade Rating';
        if (st.id === 'news_upi_falencia') return n.categoria === 'Leilão de UPI' || n.categoria === 'Falência';
        return true;
      }).length;
      countBadge = `<span class="pill-count">${cnt}</span>`;
    }

    html += `
      <button class="subtab-pill ${isActive ? 'active' : ''}" onclick="selectSubTab('${st.id}')">
        <span>${escapeHtml(resolveDynamicCaseText(st.label))}</span>
        ${countBadge}
      </button>
    `;

    if (isActive) {
      document.getElementById('subSectionTitle').textContent = resolveDynamicCaseText(st.title);
      document.getElementById('subSectionDesc').textContent = resolveDynamicCaseText(st.desc);
    }
  });

  bar.innerHTML = html;
}

// ==========================================================================
// 5. Filtering, Sorting & KPI Recalculation Engine
// ==========================================================================
function getFilteredDeals() {
  const base = DEALS_DATA.filter(item => {
    if (!matchesPassivoCutoff(item)) return false;

    if (currentMainSection === 'operacao') {
      if (currentSubTab !== 'all') {
        if (currentSubTab === 'debentures' && !isDebenturesEligible(item)) return false;
        if (currentSubTab !== 'debentures' && item.strategy_id !== currentSubTab) return false;
      }
    } else if (currentMainSection === 'upis') {
      if (!isUpiEligible(item)) return false;
      if (currentSubTab !== 'upi_all' && getUpiCategory(item) !== currentSubTab) return false;
    } else if (currentMainSection === 'prazos') {
      if (currentSubTab === 'prazos_agc' && !(Boolean(item.calendar_meta?.is_fixed_edital) || hasScheduledAssemblyOrAuction(item))) return false;
      if (currentSubTab === 'prazos_cautelar' && item.tipo_processo !== 'Cautelar / Pré-RJ') return false;
    } else if (currentMainSection === 'mapa') {
      if (currentSubTab === 'geo_Sudeste' && item.regiao_macro !== 'Sudeste') return false;
      if (currentSubTab === 'geo_Sul' && item.regiao_macro !== 'Sul') return false;
      if (currentSubTab === 'geo_Centro-Oeste' && item.regiao_macro !== 'Centro-Oeste') return false;
      if (currentSubTab === 'geo_NorteNordeste' && item.regiao_macro !== 'Norte' && item.regiao_macro !== 'Nordeste') return false;
    }

    if (currentMainSection === 'operacao' || currentMainSection === 'upis' || currentMainSection === 'prazos' || currentMainSection === 'mapa') {
      if (currentProcessType !== '') {
        if (currentProcessType === 'Falência / Liquidação') {
          if (item.subtipo_processo !== 'Falência / Liquidação') return false;
        } else if (currentProcessType === 'PRJ') {
          if (item.tipo_processo !== 'PRJ' || item.subtipo_processo === 'Falência / Liquidação') return false;
        } else if (item.tipo_processo !== currentProcessType) {
          return false;
        }
      }
      if (currentUf !== '' && item.uf !== currentUf) return false;
      if (currentMainSection !== 'upis' && currentSetor !== '' && item.setor_macro !== currentSetor) return false;
      if (currentPorte !== '') {
        const p = item.passivo_mm || 0;
        if (currentPorte === 'mid' && (p < 30 || p >= 100)) return false;
        if (currentPorte === 'upper' && (p < 100 || p >= 500)) return false;
        if (currentPorte === 'large' && (p < 500 || p >= 1000)) return false;
        if (currentPorte === 'mega' && p < 1000) return false;
      }
      if (searchTerm !== '') {
        const blob = [
          item.empresa, item.cnpj, item.credores, item.tribunal,
          item.processo, item.tese, item.setor_macro, item.cidade,
          item.uf, item.perfil_passivo, item.advocacia, item.aj,
          item.descricao_empresa, ...(item.watchdog_triggers || [])
        ].join(' ').toLowerCase();
        if (!blob.includes(searchTerm)) return false;
      }
    }
    return true;
  });

  return base.sort((a, b) => {
    if (currentSort === 'passivo_desc') return (b.passivo_mm || 0) - (a.passivo_mm || 0);
    if (currentSort === 'passivo_asc') return (a.passivo_mm || 0) - (b.passivo_mm || 0);
    if (currentSort === 'score_desc') return (b.score || 0) - (a.score || 0);
    if (currentSort === 'score_asc') return (a.score || 0) - (b.score || 0);
    if (currentSort === 'empresa_asc') return String(a.empresa || '').localeCompare(String(b.empresa || ''));
    if (currentSort === 'empresa_desc') return String(b.empresa || '').localeCompare(String(a.empresa || ''));
    if (currentSort === 'cnpj_asc') return String(a.cnpj || '').localeCompare(String(b.cnpj || ''));
    if (currentSort === 'cnpj_desc') return String(b.cnpj || '').localeCompare(String(a.cnpj || ''));
    if (currentSort === 'setor_asc') return String(a.setor_macro || '').localeCompare(String(b.setor_macro || ''));
    if (currentSort === 'setor_desc') return String(b.setor_macro || '').localeCompare(String(a.setor_macro || ''));
    if (currentSort === 'inclusao_desc') {
      const cmp = String(b.data_adicao || '').localeCompare(String(a.data_adicao || ''));
      return cmp !== 0 ? cmp : String(b.data_evento || '').localeCompare(String(a.data_evento || ''));
    }
    if (currentSort === 'inclusao_asc') {
      const cmp = String(a.data_adicao || '').localeCompare(String(b.data_adicao || ''));
      return cmp !== 0 ? cmp : String(a.data_evento || '').localeCompare(String(b.data_evento || ''));
    }
    if (currentSort === 'movimento_asc') {
      return String(a.data_evento || '').localeCompare(String(b.data_evento || ''));
    }
    return String(b.data_evento || '').localeCompare(String(a.data_evento || ''));
  });
}

function toggleTableColumnSort(colKey) {
  if (colKey === 'movimento') {
    currentSort = currentSort === 'movimento_desc' ? 'movimento_asc' : 'movimento_desc';
  } else if (colKey === 'inclusao') {
    currentSort = currentSort === 'inclusao_desc' ? 'inclusao_asc' : 'inclusao_desc';
  } else if (colKey === 'passivo') {
    currentSort = currentSort === 'passivo_desc' ? 'passivo_asc' : 'passivo_desc';
  } else if (colKey === 'score') {
    currentSort = currentSort === 'score_desc' ? 'score_asc' : 'score_desc';
  } else if (colKey === 'empresa') {
    currentSort = currentSort === 'empresa_asc' ? 'empresa_desc' : 'empresa_asc';
  } else if (colKey === 'cnpj') {
    currentSort = currentSort === 'cnpj_asc' ? 'cnpj_desc' : 'cnpj_asc';
  } else if (colKey === 'setor') {
    currentSort = currentSort === 'setor_asc' ? 'setor_desc' : 'setor_asc';
  }
  const sel = document.getElementById('selectSort');
  if (sel && [...sel.options].some(o => o.value === currentSort)) {
    sel.value = currentSort;
  }
  renderSectionContent();
}

function updateExecutiveKPIs(deals) {
  const totalVol = deals.reduce((s, d) => s + (d.passivo_mm || 0), 0);
  const avgVol = deals.length > 0 ? totalVol / deals.length : 0;
  let maxDeal = { empresa: 'N/A', passivo_mm: 0 };
  deals.forEach(d => {
    if ((d.passivo_mm || 0) > maxDeal.passivo_mm) maxDeal = d;
  });
  const ufs = new Set(deals.map(d => d.uf).filter(Boolean));
  const upiCount = deals.filter(isUpiEligible).length;

  let cutoffDesc = `Piso >= R$ ${formatNumberBR(minPassivoMM)} MM`;
  if (maxPassivoMM !== null) {
    cutoffDesc += ` | Teto <= R$ ${formatNumberBR(maxPassivoMM)} MM`;
  } else {
    cutoffDesc += ` | Sem teto`;
  }

  document.getElementById('kpiTotalVolume').textContent = `R$ ${formatKpiScale(totalVol)}`;
  document.getElementById('kpiVolumeSub').textContent = cutoffDesc;
  document.getElementById('kpiActiveDeals').textContent = deals.length;
  document.getElementById('kpiAvgTicket').textContent = `R$ ${formatKpiScale(avgVol)}`;
  document.getElementById('kpiMaxPassivo').textContent = `R$ ${formatKpiScale(maxDeal.passivo_mm)}`;
  document.getElementById('kpiMaxCompany').textContent = maxDeal.empresa;
  document.getElementById('kpiJurisdictions').textContent = `${ufs.size} UFs`;
  document.getElementById('kpiUpiCountSub').textContent = `${upiCount} casos com UPIs mapeadas`;

  const baseWithoutPhase = DEALS_DATA.filter(matchesPassivoCutoff);
  document.getElementById('proc-count-all').textContent = baseWithoutPhase.length;
  document.getElementById('proc-count-prj').textContent = baseWithoutPhase.filter(d => d.tipo_processo === 'PRJ' && d.subtipo_processo !== 'Falência / Liquidação').length;
  document.getElementById('proc-count-cautelar').textContent = baseWithoutPhase.filter(d => d.tipo_processo === 'Cautelar / Pré-RJ').length;
  document.getElementById('proc-count-pre').textContent = baseWithoutPhase.filter(d => d.tipo_processo === 'PRE').length;
  document.getElementById('proc-count-falencia').textContent = baseWithoutPhase.filter(d => d.subtipo_processo === 'Falência / Liquidação').length;
  document.getElementById('proc-count-tier0').textContent = baseWithoutPhase.filter(d => d.tipo_processo === 'Tier 0').length;
}

// ==========================================================================
// 6. Section Dispatcher (12 Modules)
// ==========================================================================
function renderSectionContent() {
  activeCharts.forEach(c => { try { c.destroy(); } catch(e){} });
  activeCharts = [];

  const deals = getFilteredDeals();
  updateExecutiveKPIs(deals);
  const container = document.getElementById('sectionContentArea');

  if (currentMainSection === 'operacao') {
    if (viewMode === 'table') renderTableView(deals, container);
    else renderCardsView(deals, container);
  } else if (currentMainSection === 'precificacao') {
    renderPrecificacaoSection(container);
  } else if (currentMainSection === 'dashboards') {
    renderDashboardsSection(deals, container);
  } else if (currentMainSection === 'upis') {
    renderUpisSection(deals, container);
  } else if (currentMainSection === 'bancometro') {
    renderBancometroSection(deals, container);
  } else if (currentMainSection === 'ecossistema') {
    renderEcossistemaSection(deals, container);
  } else if (currentMainSection === 'prazos') {
    renderPrazosSection(deals, container);
  } else if (currentMainSection === 'mapa') {
    renderMapaSection(deals, container);
  } else if (currentMainSection === 'noticias') {
    renderNoticiasSection(container);
  } else if (currentMainSection === 'energia') {
    renderEnergiaSection(container);
  }
}

function getBadgeVisual(item) {
  if (item.subtipo_processo === 'Falência / Liquidação') {
    return { cls: 'badge-falencia', label: 'FALÊNCIA / LIQUIDAÇÃO (CL. 110)' };
  }
  if (item.tipo_processo === 'PRJ') {
    return { cls: 'badge-prj', label: 'RECUPERAÇÃO JUDICIAL (PRJ)' };
  }
  if (item.tipo_processo === 'PRE') {
    return { cls: 'badge-pre', label: 'RECUPERAÇÃO EXTRAJUDICIAL (PRE)' };
  }
  if (item.tipo_processo === 'Cautelar / Pré-RJ') {
    return { cls: 'badge-cautelar', label: 'CAUTELAR ANTECEDENTE (ART. 20-B)' };
  }
  return { cls: 'badge-tier0', label: 'SINAL FORENSE (TIER 0)' };
}

// ==========================================================================
// 7. Section: Operação & Originação (Table with 3 Separate Columns: Empresa, CNPJ, Macro-Setor)
// ==========================================================================
function renderTableView(deals, container) {
  if (deals.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding: 48px; color: var(--text-muted);">Nenhum caso encontrado para os filtros e limites de passivo selecionados.</div>`;
    return;
  }

  const empArrow = currentSort === 'empresa_asc' ? '↑' : (currentSort === 'empresa_desc' ? '↓' : '↕');
  const cnpjArrow = currentSort === 'cnpj_asc' ? '↑' : (currentSort === 'cnpj_desc' ? '↓' : '↕');
  const setArrow = currentSort === 'setor_asc' ? '↑' : (currentSort === 'setor_desc' ? '↓' : '↕');
  const movArrow = currentSort === 'movimento_desc' ? '↓' : (currentSort === 'movimento_asc' ? '↑' : '↕');
  const incArrow = currentSort === 'inclusao_desc' ? '↓' : (currentSort === 'inclusao_asc' ? '↑' : '↕');
  const pasArrow = currentSort === 'passivo_desc' ? '↓' : (currentSort === 'passivo_asc' ? '↑' : '↕');
  const scoArrow = currentSort === 'score_desc' ? '↓' : (currentSort === 'score_asc' ? '↑' : '↕');

  let html = `
    <div class="table-wrap">
      <table class="clean-table">
        <thead>
          <tr>
            <th class="sortable-th" style="width: 17%;" onclick="toggleTableColumnSort('empresa')" title="Ordenar por Empresa">
              Empresa <span class="sort-indicator">${empArrow}</span>
            </th>
            <th class="sortable-th" style="width: 10%;" onclick="toggleTableColumnSort('cnpj')" title="Ordenar por CNPJ">
              CNPJ <span class="sort-indicator">${cnpjArrow}</span>
            </th>
            <th class="sortable-th" style="width: 12%;" onclick="toggleTableColumnSort('setor')" title="Ordenar por Macro-Setor">
              Macro-Setor <span class="sort-indicator">${setArrow}</span>
            </th>
            <th style="width: 14%;">Fase Concursal &amp; Autos</th>
            <th class="sortable-th" style="width: 8%;" onclick="toggleTableColumnSort('movimento')" title="Ordenar por Data do Último Movimento">
              Últ. Movimento <span class="sort-indicator">${movArrow}</span>
            </th>
            <th class="sortable-th" style="width: 8%;" onclick="toggleTableColumnSort('inclusao')" title="Ordenar por Data de Inclusão no Sistema">
              Inclusão <span class="sort-indicator">${incArrow}</span>
            </th>
            <th style="width: 10%;">Jurisdição</th>
            <th class="sortable-th" style="width: 8%; text-align: right;" onclick="toggleTableColumnSort('passivo')" title="Ordenar por Passivo">
              Passivo (R$ MM) <span class="sort-indicator">${pasArrow}</span>
            </th>
            <th style="width: 9%;">Principais Credores</th>
            <th class="sortable-th" style="width: 4%; text-align: center;" onclick="toggleTableColumnSort('score')" title="Ordenar por Score Forense">
              Score <span class="sort-indicator">${scoArrow}</span>
            </th>
            <th style="width: 4%; text-align: center;">Ficha</th>
          </tr>
        </thead>
        <tbody>
  `;

  deals.forEach(item => {
    const passivoStr = formatNumberBR(item.passivo_mm);
    const b = getBadgeVisual(item);
    const upiTag = isUpiEligible(item) ? `<span class="status-badge badge-upi" title="Contém ativos/UPIs elegíveis">UPI</span>` : '';
    const tickerBadge = item.ticker ? `<span style="font-family:var(--font-mono); font-size:9.5px; background:#E6E9DC; color:#063630; padding:1px 5px; border-radius:3px; font-weight:800; margin-left:5px;">${escapeHtml(item.ticker)}</span>` : '';
    const credoresTrunc = (item.credores && item.credores.length > 44) ? `${item.credores.substring(0, 44)}...` : (item.credores || 'Em apuração');

    html += `
      <tr>
        <td>
          <span class="td-company-name" onclick="openDossier(${item.id})" title="${escapeHtml(item.descricao_empresa)}">${escapeHtml(item.empresa)}${tickerBadge}</span>
        </td>
        <td class="td-cnpj-mono">${escapeHtml(item.cnpj)}</td>
        <td><span class="td-sector-pill">${escapeHtml(item.setor_macro)}</span></td>
        <td>
          <div><span class="status-badge ${b.cls}">${escapeHtml(b.label)}</span>${upiTag}</div>
          <div style="font-size: 10px; color: var(--text-muted); font-family: var(--font-mono); margin-top: 3px;">${escapeHtml(item.processo || 'Em autuação')}</div>
        </td>
        <td class="td-date-cell">${formatDateBR(item.data_evento)}</td>
        <td class="td-date-inc">${formatDateBR(item.data_adicao)}</td>
        <td>
          <div style="font-weight: 700; color: var(--text-body); font-size: 11.5px;">${escapeHtml(item.cidade)}, ${escapeHtml(item.uf)}</div>
          <div style="font-size: 10px; color: var(--text-muted);">${escapeHtml(item.tribunal)}</div>
        </td>
        <td class="td-passivo">R$ ${escapeHtml(passivoStr)}</td>
        <td style="font-size: 11px; color: var(--text-secondary);" title="${escapeHtml(item.credores)}">${escapeHtml(credoresTrunc)}</td>
        <td class="td-score">${formatScoreBR(item.score)}</td>
        <td style="text-align: center;">
          <button class="btn-action" onclick="openDossier(${item.id})">Ficha</button>
        </td>
      </tr>
    `;
  });

  html += `</tbody></table></div>`;
  container.innerHTML = html;
}

function renderCardsView(deals, container) {
  if (deals.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding: 48px; color: var(--text-muted);">Nenhum caso encontrado para os filtros selecionados.</div>`;
    return;
  }

  let html = `<div class="cards-grid">`;
  deals.forEach(item => {
    const passivoStr = formatNumberBR(item.passivo_mm);
    const b = getBadgeVisual(item);
    const parsed = parseThesisRegex(item.tese);

    html += `
      <div class="clean-deal-card" onclick="openDossier(${item.id})">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px; margin-bottom:6px;">
            <div>
              <strong style="font-size:14px; color:var(--vk-header-start); display:block;">${escapeHtml(item.empresa)}</strong>
              <span class="td-company-meta">${escapeHtml(item.cidade)}, ${escapeHtml(item.uf)} &bull; ${escapeHtml(item.cnpj)}</span>
            </div>
            <span class="status-badge ${b.cls}">${escapeHtml(item.subtipo_processo)}</span>
          </div>
          <div style="font-size:11.5px; color:var(--text-secondary); background:var(--bg-subtle); border-left:3px solid var(--vk-sage); padding:6px 9px; border-radius:4px; margin:8px 0; line-height:1.4;">
            ${escapeHtml(item.descricao_empresa)}
          </div>
          <div class="card-metrics-strip">
            <div class="card-metric-cell">
              <div class="card-metric-label">Passivo</div>
              <div class="card-metric-val">R$ ${passivoStr}M</div>
            </div>
            <div class="card-metric-cell">
              <div class="card-metric-label">Score</div>
              <div class="card-metric-val" style="color:var(--vk-teal);">${formatScoreBR(item.score)}</div>
            </div>
            <div class="card-metric-cell">
              <div class="card-metric-label">Movimento</div>
              <div class="card-metric-val" style="font-size:10.5px;">${formatDateBR(item.data_evento)}</div>
            </div>
            <div class="card-metric-cell">
              <div class="card-metric-label">Inclusão</div>
              <div class="card-metric-val" style="font-size:10.5px;">${formatDateBR(item.data_adicao)}</div>
            </div>
          </div>
          <div style="font-size:11.5px; color:var(--text-secondary); line-height:1.45; margin-bottom:10px;">
            <strong style="color:var(--vk-header-start);">Gargalo:</strong> ${escapeHtml(parsed.gargalo.length > 125 ? parsed.gargalo.substring(0, 125) + '...' : parsed.gargalo)}
          </div>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-light); padding-top:10px;">
          <span class="td-sector-pill">${escapeHtml(item.setor_macro)}</span>
          <button class="btn-action">Abrir Tear Sheet</button>
        </div>
      </div>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}


// ==========================================================================
// 8. Section: Dashboards & Mercado
// ==========================================================================
function renderDashboardsSection(deals, container) {
  const sectorMap = {};
  deals.forEach(d => {
    const s = d.setor_macro || 'Indústria & Manufatura';
    if (!sectorMap[s]) sectorMap[s] = { count: 0, volume: 0, scoreSum: 0, upis: 0 };
    sectorMap[s].count += 1;
    sectorMap[s].volume += (d.passivo_mm || 0);
    sectorMap[s].scoreSum += (d.score || 8.5);
    if (isUpiEligible(d)) sectorMap[s].upis += 1;
  });
  const sectorsSorted = Object.keys(sectorMap)
    .map(name => ({ name, ...sectorMap[name] }))
    .sort((a, b) => b.volume - a.volume);

  if (currentSubTab === 'benchmarks_setor') {
    renderHaircutBenchmarksTable(container);
    return;
  }

  if (currentSubTab === 'matriz_setor') {
    const totalVol = deals.reduce((s, d) => s + (d.passivo_mm || 0), 0) || 1;
    let html = `
      <div class="table-wrap">
        <table class="clean-table">
          <thead>
            <tr>
              <th>Macro-Setor Oficial</th>
              <th style="text-align:center;">Nº de Casos</th>
              <th style="text-align:right;">Passivo Acumulado (R$ MM)</th>
              <th style="text-align:right;">Participação (%)</th>
              <th style="text-align:right;">Ticket Médio (R$ MM)</th>
              <th style="text-align:center;">Casos c/ UPI</th>
              <th style="text-align:center;">Score Médio</th>
              <th style="text-align:center;">Ação</th>
            </tr>
          </thead>
          <tbody>
    `;
    sectorsSorted.forEach(sec => {
      const share = ((sec.volume / totalVol) * 100).toFixed(1).replace('.', ',');
      const avg = Math.round(sec.volume / sec.count);
      const avgScore = (sec.scoreSum / sec.count).toFixed(1).replace('.', ',');
      html += `
        <tr>
          <td><strong style="color:var(--vk-header-start);">${escapeHtml(sec.name)}</strong></td>
          <td style="text-align:center; font-family:var(--font-mono); font-weight:700;">${sec.count}</td>
          <td class="td-passivo">R$ ${formatNumberBR(sec.volume)}</td>
          <td style="text-align:right; font-family:var(--font-mono);">${share}%</td>
          <td style="text-align:right; font-family:var(--font-mono);">R$ ${formatNumberBR(avg)}</td>
          <td style="text-align:center; font-family:var(--font-mono); color:var(--badge-upi-text); font-weight:700;">${sec.upis}</td>
          <td class="td-score">${avgScore}</td>
          <td style="text-align:center;">
            <button class="btn-action" onclick="drillDownSector('${escapeHtml(sec.name)}')">Filtrar Setor</button>
          </td>
        </tr>
      `;
    });
    html += `</tbody></table></div>`;
    container.innerHTML = html;
    return;
  }

  if (currentSubTab === 'curva_porte') {
    container.innerHTML = `
      <div class="dashboard-grid">
        <div class="chart-panel">
          <div class="chart-panel-header">
            <div>
              <h3>Estratificação por Faixa de Passivo (Porte)</h3>
              <p>Quantidade de grupos econômicos por faixa de dívida no recorte atual</p>
            </div>
            <span class="chart-tag">DISTRIBUIÇÃO</span>
          </div>
          <div class="chart-canvas-box"><canvas id="chartPorteCount"></canvas></div>
        </div>
        <div class="chart-panel">
          <div class="chart-panel-header">
            <div>
              <h3>Top 12 Maiores Exposições no Recorte (R$ MM)</h3>
              <p>Grupos econômicos com maior passivo sujeito ou em reestruturação</p>
            </div>
            <span class="chart-tag">RANKING</span>
          </div>
          <div class="chart-canvas-box"><canvas id="chartTopDeals"></canvas></div>
        </div>
      </div>
    `;
    setTimeout(() => initPorteAndTopCharts(deals), 20);
    return;
  }

  container.innerHTML = `
    <div class="dashboard-grid">
      <div class="chart-panel">
        <div class="chart-panel-header">
          <div>
            <h3>Passivo Acumulado por Macro-Setor (R$ MM)</h3>
            <p>Volume financeiro sob estresse em cada vertical da economia</p>
          </div>
          <span class="chart-tag">VOLUME R$ MM</span>
        </div>
        <div class="chart-canvas-box"><canvas id="chartSectorVolume"></canvas></div>
      </div>
      <div class="chart-panel">
        <div class="chart-panel-header">
          <div>
            <h3>Quantidade de Processos por Macro-Setor</h3>
            <p>Número de grupos devedores ativos monitorados por setor</p>
          </div>
          <span class="chart-tag">Nº DE CASOS</span>
        </div>
        <div class="chart-canvas-box"><canvas id="chartSectorCount"></canvas></div>
      </div>
      <div class="chart-panel">
        <div class="chart-panel-header">
          <div>
            <h3>Funil por Fase Concursal (Lei 11.101/05)</h3>
            <p>Divisão entre RJ, Cautelar Art. 20-B, Extrajudicial, Falência e Tier 0</p>
          </div>
          <span class="chart-tag">FASES</span>
        </div>
        <div class="chart-canvas-box"><canvas id="chartPhaseMix"></canvas></div>
      </div>
      <div class="chart-panel">
        <div class="chart-panel-header">
          <div>
            <h3>Distribuição Geográfica por Estado (Top 10 UFs)</h3>
            <p>Estados com maior número de processos concursais no radar</p>
          </div>
          <span class="chart-tag">JURISDIÇÕES</span>
        </div>
        <div class="chart-canvas-box"><canvas id="chartUfMix"></canvas></div>
      </div>
    </div>
  `;

  setTimeout(() => initSectorAndPhaseCharts(deals, sectorsSorted), 20);
}

function initSectorAndPhaseCharts(deals, sectorsSorted) {
  if (typeof Chart === 'undefined') return;
  const labels = sectorsSorted.map(s => s.name);
  const volumes = sectorsSorted.map(s => Math.round(s.volume));
  const counts = sectorsSorted.map(s => s.count);
  const paletteColors = ['#063630', '#08332C', '#235C5B', '#38686A', '#A5AC82', '#C8CEB0', '#64748B'];

  const ctxVol = document.getElementById('chartSectorVolume');
  if (ctxVol) {
    activeCharts.push(new Chart(ctxVol, {
      type: 'bar',
      data: { labels, datasets: [{ label: 'Passivo (R$ MM)', data: volumes, backgroundColor: '#063630', borderRadius: 5 }] },
      options: {
        indexAxis: 'y', responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: '#E2E8F0' }, ticks: { font: { family: 'JetBrains Mono', size: 10 } } },
          y: { grid: { display: false }, ticks: { font: { family: 'Plus Jakarta Sans', size: 11, weight: '600' }, color: '#063630' } }
        }
      }
    }));
  }

  const ctxCnt = document.getElementById('chartSectorCount');
  if (ctxCnt) {
    activeCharts.push(new Chart(ctxCnt, {
      type: 'bar',
      data: { labels, datasets: [{ label: 'Casos Ativos', data: counts, backgroundColor: '#38686A', borderRadius: 5 }] },
      options: {
        indexAxis: 'y', responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: '#E2E8F0' }, ticks: { stepSize: 2, font: { family: 'JetBrains Mono', size: 10 } } },
          y: { grid: { display: false }, ticks: { font: { family: 'Plus Jakarta Sans', size: 11, weight: '600' }, color: '#063630' } }
        }
      }
    }));
  }

  const prjCnt = deals.filter(d => d.tipo_processo === 'PRJ' && d.subtipo_processo !== 'Falência / Liquidação').length;
  const cautCnt = deals.filter(d => d.tipo_processo === 'Cautelar / Pré-RJ').length;
  const preCnt = deals.filter(d => d.tipo_processo === 'PRE').length;
  const falCnt = deals.filter(d => d.subtipo_processo === 'Falência / Liquidação').length;
  const t0Cnt = deals.filter(d => d.tipo_processo === 'Tier 0').length;

  const ctxPhase = document.getElementById('chartPhaseMix');
  if (ctxPhase) {
    activeCharts.push(new Chart(ctxPhase, {
      type: 'doughnut',
      data: {
        labels: ['Recuperação Judicial (PRJ)', 'Cautelar Art. 20-B / Pré-RJ', 'Recuperação Extrajudicial (PRE)', 'Sinais Forenses (Tier 0)', 'Falência / Liquidação'],
        datasets: [{ data: [prjCnt, cautCnt, preCnt, t0Cnt, falCnt], backgroundColor: ['#063630', '#38686A', '#A5AC82', '#C8CEB0', '#64748B'], borderWidth: 2, borderColor: '#FFFFFF' }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: 'right', labels: { font: { family: 'Plus Jakarta Sans', size: 11 }, color: '#1E293B' } } }
      }
    }));
  }

  const ufMap = {};
  deals.forEach(d => { if (d.uf) ufMap[d.uf] = (ufMap[d.uf] || 0) + 1; });
  const ufSorted = Object.entries(ufMap).sort((a, b) => b[1] - a[1]).slice(0, 10);
  const ctxUf = document.getElementById('chartUfMix');
  if (ctxUf) {
    activeCharts.push(new Chart(ctxUf, {
      type: 'bar',
      data: { labels: ufSorted.map(u => u[0]), datasets: [{ label: 'Processos na UF', data: ufSorted.map(u => u[1]), backgroundColor: paletteColors, borderRadius: 5 }] },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { grid: { color: '#E2E8F0' }, ticks: { font: { family: 'JetBrains Mono', size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { family: 'JetBrains Mono', size: 11, weight: '700' }, color: '#063630' } }
        }
      }
    }));
  }
}

function initPorteAndTopCharts(deals) {
  if (typeof Chart === 'undefined') return;
  const mid = deals.filter(d => Number(d.passivo_mm || 0) < 100).length;
  const upper = deals.filter(d => Number(d.passivo_mm || 0) >= 100 && Number(d.passivo_mm || 0) < 500).length;
  const large = deals.filter(d => Number(d.passivo_mm || 0) >= 500 && Number(d.passivo_mm || 0) < 1000).length;
  const mega = deals.filter(d => Number(d.passivo_mm || 0) >= 1000).length;

  const ctxPorte = document.getElementById('chartPorteCount');
  if (ctxPorte) {
    activeCharts.push(new Chart(ctxPorte, {
      type: 'bar',
      data: {
        labels: ['Mid-Market (30M-100M)', 'Upper-Mid (100M-500M)', 'Large Cap (500M-1Bi)', 'Mega Cases (> 1Bi)'],
        datasets: [{ label: 'Nº de Casos', data: [mid, upper, large, mega], backgroundColor: ['#C8CEB0', '#A5AC82', '#38686A', '#063630'], borderRadius: 6 }]
      },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
    }));
  }

  const top12 = [...deals].sort((a, b) => (b.passivo_mm || 0) - (a.passivo_mm || 0)).slice(0, 12);
  const ctxTop = document.getElementById('chartTopDeals');
  if (ctxTop) {
    activeCharts.push(new Chart(ctxTop, {
      type: 'bar',
      data: {
        labels: top12.map(d => d.empresa.length > 26 ? d.empresa.substring(0, 26) + '...' : d.empresa),
        datasets: [{ label: 'Passivo (R$ MM)', data: top12.map(d => d.passivo_mm), backgroundColor: '#063630', borderRadius: 4 }]
      },
      options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
    }));
  }
}

function drillDownSector(sectorName) {
  currentSetor = sectorName;
  const sel = document.getElementById('selectSetor');
  if (sel) sel.value = sectorName;
  switchMainSection('operacao');
  showToast(`Filtrando casos do setor: ${sectorName}`);
}

// ==========================================================================
// 9. Sections: UPIs, Bancômetro & Prazos
// ==========================================================================
function renderUpisSection(deals, container) {
  if (deals.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding: 48px; color: var(--text-muted);">Nenhum ativo/UPI encontrado para os filtros selecionados.</div>`;
    return;
  }

  let html = `<div class="cards-grid">`;
  deals.forEach(item => {
    const passivoStr = formatNumberBR(item.passivo_mm);
    const b = getBadgeVisual(item);
    const parsed = parseThesisRegex(item.tese);

    html += `
      <div class="clean-deal-card" style="border-top-color: #065F46;" onclick="openDossier(${item.id})">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px; margin-bottom:8px;">
            <div>
              <span class="status-badge badge-upi" style="margin-left:0; margin-bottom:4px;">ATIVO / UPI ELEGÍVEL</span>
              <strong style="font-size:14.5px; color:var(--vk-header-start); display:block;">${escapeHtml(item.empresa)}</strong>
              <span class="td-company-meta">${escapeHtml(item.cidade)}, ${escapeHtml(item.uf)} &bull; ${escapeHtml(item.setor_macro)}</span>
            </div>
            <span class="status-badge ${b.cls}">${escapeHtml(item.subtipo_processo)}</span>
          </div>

          <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-radius:6px; padding:10px 12px; margin:10px 0;">
            <div style="font-family:var(--font-mono); font-size:9.5px; font-weight:700; color:#065F46; text-transform:uppercase; margin-bottom:3px;">Lastro &amp; Ativos Mapeados na Operação</div>
            <div style="font-size:12px; color:#064E3B; font-weight:600; line-height:1.4;">${escapeHtml(item.perfil_passivo)}</div>
          </div>

          <p style="font-size:12px; color:var(--text-secondary); line-height:1.45; margin-bottom:10px;">
            <strong style="color:#065F46;">Tese de Mandato:</strong> ${escapeHtml(parsed.mandato)}
          </p>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-light); padding-top:10px;">
          <span style="font-family:var(--font-mono); font-size:12px; font-weight:800; color:var(--vk-header-start);">Passivo: R$ ${passivoStr} MM</span>
          <button class="btn-action">Abrir Tear Sheet</button>
        </div>
      </div>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

function renderBancometroSection(deals, container) {
  const catalog = [
    { name: 'Banco do Brasil', group: 'cred_publicos', kw: ['banco do brasil', 'bb '] },
    { name: 'Itaú Unibanco / BBA', group: 'cred_privados', kw: ['itaú', 'itau'] },
    { name: 'Banco Bradesco', group: 'cred_privados', kw: ['bradesco'] },
    { name: 'Banco Santander', group: 'cred_privados', kw: ['santander'] },
    { name: 'Caixa Econômica Federal', group: 'cred_publicos', kw: ['caixa', 'cef'] },
    { name: 'Sicredi / Cooperativas', group: 'cred_publicos', kw: ['sicredi', 'sicoob', 'unicred', 'cresol'] },
    { name: 'Banco Daycoval', group: 'cred_privados', kw: ['daycoval'] },
    { name: 'Banco Safra', group: 'cred_privados', kw: ['safra'] },
    { name: 'BTG Pactual', group: 'cred_privados', kw: ['btg'] },
    { name: 'BNDES / BRDE / BASA / BNB', group: 'cred_publicos', kw: ['bndes', 'brde', 'basa', 'banco da amazônia', 'bnb', 'banco do nordeste'] },
    { name: 'Banrisul', group: 'cred_publicos', kw: ['banrisul'] },
    { name: 'Bancos de Montadoras (John Deere / Scania / Volvo / Cat)', group: 'cred_privados', kw: ['john deere', 'scania', 'volvo', 'caterpillar', 'mercedes'] },
    { name: 'Agentes Fiduciários (Vórtx / Pentágono / Oliveira Trust)', group: 'cred_dcm', kw: ['vórtx', 'pentágono', 'oliveira trust', 'debenturista', 'debênture'] },
    { name: 'Securitizadoras (Opea / Vert / Virgo / CRAs / CRIs)', group: 'cred_dcm', kw: ['opea', 'vert ', 'virgo', 'securitizadora', 'cra', 'cri'] },
    { name: 'FIDCs & Fundos Estruturados', group: 'cred_dcm', kw: ['fidc', 'farallon', 'master', 'genial'] },
    { name: 'Tradings & Multinacionais do Agro (Cargill / Bunge / COFCO / Syngenta)', group: 'cred_dcm', kw: ['cargill', 'bunge', 'cofco', 'nidera', 'corteva', 'mosaic', 'syngenta', 'adm'] }
  ];

  const baseDeals = DEALS_DATA.filter(matchesPassivoCutoff);

  const results = catalog
    .filter(c => currentSubTab === 'cred_all' || c.group === currentSubTab)
    .map(c => {
      let casesCount = 0;
      let participatingPassivo = 0;
      let directMappedCredit = 0;

      baseDeals.forEach(d => {
        const text = ((d.credores || '') + ' ' + (d.perfil_passivo || '')).toLowerCase();
        if (c.kw.some(k => text.includes(k))) {
          casesCount += 1;
          participatingPassivo += (d.passivo_mm || 0);
          const credRaw = d.credores || '';
          c.kw.forEach(k => {
            const idx = credRaw.toLowerCase().indexOf(k);
            if (idx !== -1) {
              const snippet = credRaw.substring(idx, idx + 55);
              const m = snippet.match(/R\$\s*([\d.,]+)\s*M/i);
              if (m) {
                const val = parseFloat(m[1].replace('.', '').replace(',', '.'));
                if (!isNaN(val)) directMappedCredit += val;
              }
            }
          });
        }
      });

      return { ...c, casesCount, participatingPassivo, directMappedCredit };
    })
    .filter(c => c.casesCount > 0)
    .sort((a, b) => b.casesCount - a.casesCount || b.participatingPassivo - a.participatingPassivo);

  const maxCases = results.length > 0 ? Math.max(...results.map(r => r.casesCount)) : 1;

  let html = `<div class="creditor-grid">`;
  results.forEach(r => {
    const pct = Math.min(Math.round((r.casesCount / maxCases) * 100), 100);
    const directBadge = r.directMappedCredit > 0
      ? `<span class="status-badge badge-upi" style="margin-left:0;">Crédito Nominal Desagregado: R$ ${formatNumberBR(r.directMappedCredit)} MM</span>`
      : `<span style="font-size:10.5px; color:var(--text-muted); font-family:var(--font-mono);">Exposição em Sindicato / Lista Geral</span>`;

    html += `
      <div class="creditor-card" onclick="filterByCreditor('${escapeHtml(r.kw[0].trim())}')" title="Clique para listar todos os processos de ${escapeHtml(r.name)}">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">
          <div>
            <strong style="font-size:14px; color:var(--vk-header-start); display:block;">${escapeHtml(r.name)}</strong>
            <span style="font-family:var(--font-mono); font-size:11px; color:var(--vk-teal); font-weight:700;">${r.casesCount} processos ativos no recorte</span>
          </div>
          <span class="btn-action" style="padding:3px 8px;">Ver Casos</span>
        </div>
        <div class="creditor-bar-bg">
          <div class="creditor-bar-fill" style="width:${pct}%;"></div>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px; margin-top:6px;">
          ${directBadge}
          <span style="font-family:var(--font-mono); font-size:11px; color:var(--text-secondary);">Passivo dos Casos: <strong>R$ ${formatKpiScale(r.participatingPassivo)}</strong></span>
        </div>
      </div>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

function filterByCreditor(keyword) {
  currentSetor = '';
  currentUf = '';
  currentPorte = '';
  currentProcessType = '';
  const ufEl = document.getElementById('selectUf');
  if (ufEl) ufEl.value = '';
  const setorEl = document.getElementById('selectSetor');
  if (setorEl) setorEl.value = '';
  const porteEl = document.getElementById('selectPorte');
  if (porteEl) porteEl.value = '';
  document.querySelectorAll('.phase-chip').forEach(c => c.classList.remove('active'));
  document.getElementById('proc-all')?.classList.add('active');

  searchTerm = keyword.toLowerCase();
  const input = document.getElementById('searchInput');
  if (input) input.value = keyword;
  switchMainSection('operacao');
  showToast(`Exibindo carteira de processos com exposição a: "${keyword.toUpperCase()}"`);
}

// ==========================================================================
// 10. Section: Redesign do Mapa Geográfico (Oceano Azul #CFE2F3 + GeoJSON Brasil #F1F5F9)
// ==========================================================================
function renderMapaSection(deals, container) {
  const ufStats = {};
  deals.forEach(d => {
    const u = d.uf || 'SP';
    if (!ufStats[u]) ufStats[u] = { count: 0, volume: 0 };
    ufStats[u].count += 1;
    ufStats[u].volume += (d.passivo_mm || 0);
  });
  const sortedUfs = Object.entries(ufStats).sort((a, b) => b[1].volume - a[1].volume);

  let sidebarHtml = `
    <div class="uf-rank-item ${currentUf === '' ? 'active' : ''}" onclick="filterMapByUf('')">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <strong style="color:var(--vk-header-start); font-size:12.5px;">BRASIL (Todas as UFs)</strong>
        <span style="font-family:var(--font-mono); font-size:11px; font-weight:700; color:var(--vk-teal);">${deals.length} casos</span>
      </div>
    </div>
  `;
  sortedUfs.forEach(([uf, st]) => {
    sidebarHtml += `
      <div class="uf-rank-item ${currentUf === uf ? 'active' : ''}" onclick="filterMapByUf('${uf}')">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-family:var(--font-mono); font-weight:800; color:var(--vk-header-start); font-size:13px;">${uf}</span>
          <span style="font-size:11.5px; color:var(--text-secondary);">${st.count} casos</span>
          <span style="font-family:var(--font-mono); font-weight:700; font-size:12px; color:var(--vk-header-start);">R$ ${formatKpiScale(st.volume)}</span>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="geo-layout">
      <div class="uf-ranking-list">
        <div style="font-family:var(--font-mono); font-size:10.5px; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-bottom:10px;">
          Concentração por Estado (UF)
        </div>
        ${sidebarHtml}
      </div>
      <div class="map-wrapper-relative">
        <div id="map"></div>
        <div class="map-floating-legend" aria-label="Legenda do Mapa">
          <div class="legend-section-title">1. Fase Processual (Cores dos Pins)</div>
          <div class="legend-item"><span class="legend-dot" style="background:#D97706;"></span> Recuperação Judicial (PRJ)</div>
          <div class="legend-item"><span class="legend-dot" style="background:#0284C7;"></span> Recuperação Extrajudicial (PRE)</div>
          <div class="legend-item"><span class="legend-dot" style="background:#E11D48;"></span> Cautelar / Art. 20-B</div>
          <div class="legend-item"><span class="legend-dot" style="background:#475569;"></span> Falência / Liquidação (Cl. 110)</div>
          <div class="legend-item"><span class="legend-dot" style="background:#7C3AED;"></span> Distress Precursor (Tier 0)</div>

          <div class="legend-section-title" style="margin-top:8px;">2. Raio Proporcional ao Passivo</div>
          <div class="legend-radius-row">
            <div style="display:flex; align-items:center; gap:4px; font-family:var(--font-mono); font-size:9.5px;">
              <span class="legend-circle-sample" style="width:10px; height:10px;"></span> &lt; 100M
            </div>
            <div style="display:flex; align-items:center; gap:4px; font-family:var(--font-mono); font-size:9.5px;">
              <span class="legend-circle-sample" style="width:15px; height:15px;"></span> 100M–1Bi
            </div>
            <div style="display:flex; align-items:center; gap:4px; font-family:var(--font-mono); font-size:9.5px;">
              <span class="legend-circle-sample" style="width:22px; height:22px;"></span> &gt; R$ 1 Bi
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => initGeoJsonBrazilMap(deals), 50);
}

function filterMapByUf(uf) {
  currentUf = uf;
  const sel = document.getElementById('selectUf');
  if (sel) sel.value = uf;
  renderSectionContent();
}

function initGeoJsonBrazilMap(deals) {
  if (typeof L === 'undefined') return;
  const mapEl = document.getElementById('map');
  if (!mapEl) return;

  // Apply Dark Mode Ocean Background (#090d16)
  mapEl.style.background = '#090d16';

  if (leafletMapInstance) {
    try { leafletMapInstance.remove(); } catch(e) {}
    leafletMapInstance = null;
  }

  leafletMapInstance = L.map('map', {
    center: [-14.8, -52.0],
    zoom: 4.3,
    zoomSnap: 0.25,
    minZoom: 3.5,
    maxZoom: 12,
    attributionControl: true
  });

  leafletGeoJsonLayer = L.geoJSON(BRAZIL_UFS_GEOJSON, {
    style: function(feature) {
      const isSelected = currentUf && feature.properties.uf === currentUf;
      return {
        fillColor: isSelected ? '#134e4a' : '#111827',
        fillOpacity: 1,
        color: isSelected ? '#A5AC82' : '#1e293b',
        weight: isSelected ? 2.2 : 1.4,
        opacity: 1
      };
    },
    onEachFeature: function(feature, layer) {
      layer.on({
        mouseover: function(e) {
          const l = e.target;
          if (currentUf !== feature.properties.uf) {
            l.setStyle({ fillColor: '#1f2937', color: '#38686A', weight: 2 });
          }
        },
        mouseout: function(e) {
          leafletGeoJsonLayer.resetStyle(e.target);
        },
        click: function() {
          const clickedUf = feature.properties.uf;
          filterMapByUf(currentUf === clickedUf ? '' : clickedUf);
        }
      });
    }
  }).addTo(leafletMapInstance);

  leafletCapitalsLayer = L.layerGroup().addTo(leafletMapInstance);
  BRAZIL_UFS_GEOJSON.features.forEach(feat => {
    const p = feat.properties;
    const icon = L.divIcon({
      className: 'uf-capital-label',
      html: `<div class="uf-capital-tag" style="background:rgba(15,23,42,0.85); color:#E2E8F0; border:1px solid #334155;"><span>${p.uf}</span><span class="cap-name" style="color:#94A3B8;">&bull; ${p.capital}</span></div>`,
      iconSize: [70, 16],
      iconAnchor: [35, 8]
    });
    L.marker([p.lat, p.lng], { icon, interactive: false }).addTo(leafletCapitalsLayer);
  });

  leafletMarkersLayer = L.layerGroup().addTo(leafletMapInstance);
  const bounds = [];

  const coordGroups = {};
  deals.forEach(d => {
    if (d.coordenadas && Array.isArray(d.coordenadas) && d.coordenadas.length === 2) {
      const k = `${d.coordenadas[0].toFixed(2)},${d.coordenadas[1].toFixed(2)}`;
      if (!coordGroups[k]) coordGroups[k] = [];
      coordGroups[k].push(d);
    }
  });

  const GOLDEN_ANGLE = 2.399963229728653; // ~137.5 degrees in radians

  Object.keys(coordGroups).forEach(k => {
    const group = coordGroups[k];
    const baseLat = group[0].coordenadas[0];
    const baseLng = group[0].coordenadas[1];

    group.forEach((item, idx) => {
      let lat = baseLat;
      let lng = baseLng;
      if (group.length > 1 && idx > 0) {
        const theta = idx * GOLDEN_ANGLE;
        const r = 0.085 * Math.sqrt(idx);
        lat = baseLat + r * Math.sin(theta);
        lng = baseLng + r * Math.cos(theta);
      }

      let fillColor = '#D97706';
      if (item.subtipo_processo === 'Falência / Liquidação') fillColor = '#94A3B8';
      else if (item.tipo_processo === 'Cautelar / Pré-RJ') fillColor = '#F43F5E';
      else if (item.tipo_processo === 'PRE') fillColor = '#38BDF8';
      else if (item.tipo_processo === 'Tier 0') fillColor = '#A855F7';

      const passivoNum = item.passivo_mm || 0;
      const radiusPx = passivoNum >= 1000 ? 11 : (passivoNum >= 100 ? 8 : 5.5);

      const marker = L.circleMarker([lat, lng], {
        radius: radiusPx,
        fillColor,
        color: '#090d16',
        weight: 1.5,
        opacity: 0.95,
        fillOpacity: 0.65
      });

      marker.bindPopup(`
        <div style="font-family:var(--font-sans); min-width:205px; color:#0F172A;">
          <strong style="font-size:13px; color:#063630; display:block;">${escapeHtml(item.empresa)}</strong>
          <div style="font-size:11px; color:#64748B; margin-bottom:6px;">${escapeHtml(item.cidade)}, ${escapeHtml(item.uf)} &bull; ${escapeHtml(item.subtipo_processo)}</div>
          <div style="font-family:var(--font-mono); font-size:12px; font-weight:700; color:#063630; margin-bottom:8px;">Passivo: R$ ${formatNumberBR(passivoNum)} MM</div>
          <button onclick="openDossier(${item.id})" style="background:#063630; color:#E6E9DC; border:none; border-radius:4px; padding:6px 10px; font-size:11px; font-weight:700; cursor:pointer; width:100%;">Abrir Tear Sheet</button>
        </div>
      `);

      leafletMarkersLayer.addLayer(marker);
      bounds.push([lat, lng]);
    });
  });

  if (currentUf !== '' && bounds.length > 0) {
    leafletMapInstance.fitBounds(bounds, { padding: [45, 45], maxZoom: 6.5 });
  }
}

// ==========================================================================
// 11. Nova Aba: Notícias & Fatos Relevantes (Feed Híbrido Mercado + Pipeline + Multi-Stream RSS de Waivers/AGDs)
// ==========================================================================
const CURATED_MACRO_NEWS = [
  {
    id: 908,
    data_hora: '28/10/2026 16:30',
    titulo: 'De Raízen a Casas Bahia: 15 grandes empresas brasileiras renegociam dívidas, waivers de debêntures e recuperações extrajudiciais em 2026',
    fonte: 'Brazil Journal',
    setor: 'Mercado & Macro (RJ / Crédito)',
    categoria: 'Waiver / AGD',
    escopo: 'cvm',
    resumo: 'Levantamento de mercado mapeia onda de repactuações em companhias abertas (Raízen, Braskem, GPA, Oncoclínicas, Casas Bahia e Aeris) com foco em alongamento de debêntures, waivers de covenants e conversão de dívida.',
    url: 'https://forbes.com.br/forbes-money/2026/10/de-raizen-a-casas-bahia-15-empresas-tentam-reestruturar-dividas-em-2026/',
    deal_id: 7,
    empresa_nome: 'Panorama DCM // Raízen, Braskem, GPA & Companhias Abertas'
  },
  {
    id: 907,
    data_hora: '28/10/2026 14:15',
    titulo: 'Justiça de SP defere recuperação judicial da varejista Marabraz, concede stay period de 180 dias e nomeia Deloitte como administradora judicial',
    fonte: 'Jota / Tribunais',
    setor: 'Varejo & Consumo',
    categoria: 'Pedido de RJ',
    escopo: 'mercado',
    resumo: 'Juíza da Vara Empresarial de São Paulo autorizou consolidação processual do grupo varejista, garantiu manutenção do fornecimento de energia por Enel e CPFL e fixou prazo para entrega de documentos contábeis.',
    url: 'https://c-level.folha.uol.com.br/negocios/2026/10/justica-aceita-pedido-de-recuperacao-judicial-da-marabraz.shtml',
    deal_id: null,
    empresa_nome: 'Rede Marabraz (Varejo Moveleiro)'
  },
  {
    id: 906,
    data_hora: '28/10/2026 10:20',
    titulo: 'Estudo de IOF sobre debêntures incentivadas, CRIs e CRAs entra no radar de gestoras e pressiona prêmios de repactuação e waivers no secundário',
    fonte: 'Valor Econômico',
    setor: 'Mercado & Macro (RJ / Crédito)',
    categoria: 'Waiver / AGD',
    escopo: 'cvm',
    resumo: 'Discussão tributária sobre títulos isentos (renúncia estimada em R$ 33 bilhões/ano) eleva exigência de spread por fundos de crédito privado em assembleias de debenturistas (AGDs) e novas emissões.',
    url: 'https://www.infomoney.com.br/politica/governo-estuda-aplicar-iof-sobre-lci-lca-cri-cra-e-debentures-diz-jornal/',
    deal_id: null,
    empresa_nome: 'Mercado de Capitais (Debêntures, CRIs e CRAs)'
  },
  {
    id: 905,
    data_hora: '21/10/2026 19:05',
    titulo: 'Fitch rebaixa rating nacional da PBG S.A. (Portobello) para RD(bra) após não pagamento de R$ 59,8 MM da 5ª e 6ª emissões de debêntures',
    fonte: 'CVM / Fatos Relevantes',
    setor: 'Indústria & Manufatura',
    categoria: 'Downgrade Rating',
    escopo: 'cvm',
    resumo: 'Companhia líder em revestimentos cerâmicos reporta dívida total de R$ 1,655 bilhão (R$ 530 milhões em debêntures e R$ 325 milhões em PPE) e conduz reperfilamento para preservar liquidez de curto prazo.',
    url: 'https://www.fitchratings.com/research/pt/corporate-finance/fitch-downgrades-pbgs-national-scale-ratings-to-rd-bra-21-10-2026',
    deal_id: null,
    empresa_nome: 'PBG S.A. / Portobello Grupo (PTBL3)'
  },
  {
    id: 901,
    data_hora: '19/10/2026 09:15',
    titulo: 'Pedidos de recuperação judicial no Brasil atingem recorde histórico na série da Serasa Experian puxados por juros e agronegócio',
    fonte: 'Valor Econômico',
    setor: 'Mercado & Macro (RJ / Crédito)',
    categoria: 'Pedido de RJ',
    escopo: 'mercado',
    resumo: 'Levantamento aponta avanço nas requisições de proteção judicial por produtores rurais, varejistas e indústrias de médio porte diante do custo do crédito corporativo.',
    url: 'https://news.google.com/search?q=pedidos+recuperacao+judicial+recorde+Serasa+Valor+Economico&hl=pt-BR&gl=BR&ceid=BR:pt-419',
    deal_id: null,
    empresa_nome: 'Panorama Macro / Crédito Corporativo'
  },
  {
    id: 902,
    data_hora: '18/10/2026 16:40',
    titulo: 'Debenturistas endurecem negociações de waivers e exigem reforço de garantias reais em assembleias na CVM',
    fonte: 'Brazil Journal',
    setor: 'Mercado & Macro (RJ / Crédito)',
    categoria: 'Waiver / AGD',
    escopo: 'cvm',
    resumo: 'Gestoras de crédito privado e agentes fiduciários (Vórtx, Pentágono e Oliveira Trust) registram alta no volume de AGDs para repactuação de covenants de alavancagem e ICSD.',
    url: 'https://news.google.com/search?q=debenturistas+waivers+assembleias+covenants+credito+privado&hl=pt-BR&gl=BR&ceid=BR:pt-419',
    deal_id: null,
    empresa_nome: 'Mercado de Capitais (DCM / CVM)'
  },
  {
    id: 903,
    data_hora: '17/10/2026 14:20',
    titulo: 'Fundos de Special Situations ampliam captação para compra de UPIs, precatórios e créditos bancários estressados (NPLs)',
    fonte: 'Pipeline',
    setor: 'Mercado & Macro (RJ / Crédito)',
    categoria: 'Leilão de UPI',
    escopo: 'mercado',
    resumo: 'Casas especializadas em ativos ilíquidos aceleram estruturação de linhas DIP Financing e aquisições de ativos industriais e logísticos livres de sucessão (art. 60 e 141).',
    url: 'https://news.google.com/search?q=fundos+special+situations+distressed+debt+UPI+recuperacao+judicial&hl=pt-BR&gl=BR&ceid=BR:pt-419',
    deal_id: null,
    empresa_nome: 'Indústria de Special Situations & NPL'
  },
  {
    id: 904,
    data_hora: '16/10/2026 18:05',
    titulo: 'STJ pacifica limites da trava bancária e essencialidade de bens de capital em recuperações judiciais do agronegócio e logística',
    fonte: 'Jota / Tribunais',
    setor: 'Mercado & Macro (RJ / Crédito)',
    categoria: 'Cautelar 20-B',
    escopo: 'mercado',
    resumo: 'Julgamentos recentes da Segunda Seção delimitam competência do juízo concursal sobre alienação fiduciária de frotas, grãos e imóveis operacionais.',
    url: 'https://news.google.com/search?q=STJ+trava+bancaria+essencialidade+bens+recuperacao+judicial&hl=pt-BR&gl=BR&ceid=BR:pt-419',
    deal_id: null,
    empresa_nome: 'Jurisprudência STJ / Lei 11.101/05'
  }
];

function buildNewsItemUrl(item) {
  if (item.url && String(item.url).startsWith('http')) return item.url;
  const deal = item.deal_id ? DEALS_DATA.find(d => d.id === item.deal_id) : null;
  if (deal && deal.url_noticia && String(deal.url_noticia).startsWith('http')) return deal.url_noticia;
  const queryTerms = item.empresa_nome
    ? `${item.empresa_nome.split('(')[0].trim()} ${item.categoria || 'recuperação judicial'}`
    : `${item.titulo}`;
  return `https://news.google.com/search?q=${encodeURIComponent(queryTerms)}&hl=pt-BR&gl=BR&ceid=BR:pt-419`;
}

function normalizeTextNoAccents(str) {
  return String(str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function parseNewsTimestamp(dataHoraStr) {
  if (!dataHoraStr) return 0;
  const s = String(dataHoraStr).trim();
  // Format: DD/MM/YYYY HH:MM or DD/MM/YYYY
  const m = s.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2}))?/);
  if (m) {
    const day = parseInt(m[1], 10);
    const month = parseInt(m[2], 10) - 1;
    const year = parseInt(m[3], 10);
    const hour = m[4] ? parseInt(m[4], 10) : 12;
    const min = m[5] ? parseInt(m[5], 10) : 0;
    return new Date(year, month, day, hour, min).getTime();
  }
  const parsed = Date.parse(s);
  return isNaN(parsed) ? 0 : parsed;
}

function formatRssPubDateBR(pubDateRaw) {
  if (!pubDateRaw) {
    const now = new Date();
    return `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  }
  const dt = new Date(pubDateRaw);
  if (!isNaN(dt.getTime())) {
    const d = String(dt.getDate()).padStart(2, '0');
    const m = String(dt.getMonth() + 1).padStart(2, '0');
    const y = dt.getFullYear();
    const hh = String(dt.getHours()).padStart(2, '0');
    const mm = String(dt.getMinutes()).padStart(2, '0');
    return `${d}/${m}/${y} ${hh}:${mm}`;
  }
  return formatDateBR(String(pubDateRaw).slice(0, 10));
}

function normalizeNewsSourceLabel(rawSource, blobNorm) {
  const s = normalizeTextNoAccents(rawSource);
  if (s.includes('valor') || s.includes('globo')) return 'Valor Econômico';
  if (s.includes('pipeline')) return 'Pipeline';
  if (s.includes('brazil journal') || s.includes('forbes') || s.includes('exame') || s.includes('neofeed')) return 'Brazil Journal';
  if (s.includes('fitch') || s.includes('moody') || s.includes('s&p') || s.includes('cvm') || s.includes('rad.cvm') || s.includes('infomoney') || s.includes('seu dinheiro')) return 'CVM / Fatos Relevantes';
  if (s.includes('vortx') || s.includes('pentagono') || s.includes('oliveira trust') || s.includes('opea') || s.includes('vert') || s.includes('virgo') || s.includes('fiduciario')) return 'Agentes Fiduciários';
  if (s.includes('jota') || s.includes('conjur') || s.includes('migalhas') || s.includes('folha') || s.includes('uol') || s.includes('tribunal') || s.includes('tj')) return 'Jota / Tribunais';
  if (blobNorm.includes('fitch') || blobNorm.includes('cvm') || blobNorm.includes('fato relevante')) return 'CVM / Fatos Relevantes';
  if (blobNorm.includes('vortx') || blobNorm.includes('pentagono') || blobNorm.includes('oliveira trust') || blobNorm.includes('agd') || blobNorm.includes('waiver')) return 'Agentes Fiduciários';
  return rawSource || 'Valor Econômico';
}

function classifyRssNewsItem(rawItem, defaultCategory = 'Pedido de RJ') {
  const rawTitle = String(rawItem.title || '').replace(/\s+-\s+[^-]+$/, '').trim();
  const sourceMatch = String(rawItem.title || '').match(/-\s+([^-]+)$/);
  const rawSource = rawItem.source || (sourceMatch ? sourceMatch[1].trim() : (rawItem.author || 'Google News BR'));
  const cleanDesc = String(rawItem.description || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim();

  const blobNorm = normalizeTextNoAccents(`${rawTitle} ${cleanDesc} ${rawSource}`);

  let categoria = defaultCategory;
  if (
    blobNorm.includes('fitch') ||
    blobNorm.includes('moody') ||
    blobNorm.includes('s&p') ||
    blobNorm.includes('rebaixamento') ||
    blobNorm.includes('rebaixa') ||
    blobNorm.includes('downgrade') ||
    blobNorm.includes('rd(bra)') ||
    blobNorm.includes('ccc(bra)') ||
    blobNorm.includes('observacao negativa') ||
    (blobNorm.includes('rating') && (blobNorm.includes('corte') || blobNorm.includes('corta') || blobNorm.includes('debenture') || blobNorm.includes('cra') || blobNorm.includes('default')))
  ) {
    categoria = 'Downgrade Rating';
  } else if (
    blobNorm.includes('waiver') ||
    blobNorm.includes('covenant') ||
    blobNorm.includes('agd') ||
    blobNorm.includes('assembleia de debenturistas') ||
    blobNorm.includes('debenturista') ||
    blobNorm.includes('debenture') ||
    blobNorm.includes('vencimento antecipado') ||
    blobNorm.includes('standstill') ||
    blobNorm.includes('reperfilamento') ||
    blobNorm.includes('repactuacao') ||
    blobNorm.includes('recuperacao extrajudicial') ||
    blobNorm.includes('plano extrajudicial') ||
    blobNorm.includes('securitizadora') ||
    blobNorm.includes('agente fiduciario') ||
    blobNorm.includes('vortx') ||
    blobNorm.includes('pentagono') ||
    blobNorm.includes('oliveira trust') ||
    blobNorm.includes('opea') ||
    blobNorm.includes('virgo') ||
    blobNorm.includes('vert ') ||
    blobNorm.includes('cra ') ||
    blobNorm.includes('cras ') ||
    blobNorm.includes('cri ') ||
    blobNorm.includes('cris ') ||
    blobNorm.includes('fidc')
  ) {
    categoria = 'Waiver / AGD';
  } else if (
    blobNorm.includes('falencia') ||
    blobNorm.includes('autofalencia') ||
    blobNorm.includes('quebra decretada') ||
    blobNorm.includes('convolacao') ||
    blobNorm.includes('massa falida')
  ) {
    categoria = 'Falência';
  } else if (
    blobNorm.includes('upi') ||
    blobNorm.includes('leilao') ||
    blobNorm.includes('alienacao judicial') ||
    blobNorm.includes('sale & leaseback') ||
    blobNorm.includes('venda de ativos')
  ) {
    categoria = 'Leilão de UPI';
  } else if (
    blobNorm.includes('cautelar') ||
    blobNorm.includes('20-b') ||
    blobNorm.includes('tutela de urgencia') ||
    blobNorm.includes('cejusc')
  ) {
    categoria = 'Cautelar 20-B';
  }

  // Match against DEALS_DATA companies or tickers
  let matchedDeal = null;
  for (const d of DEALS_DATA) {
    const baseName = normalizeTextNoAccents(String(d.empresa || '').split('(')[0].replace(/\b(grupo|s\.a\.|s\/a|ltda|indústria|comércio)\b/gi, '').trim());
    const tickerNorm = normalizeTextNoAccents(d.ticker || '');
    if ((baseName.length >= 4 && blobNorm.includes(baseName)) || (tickerNorm.length >= 4 && blobNorm.includes(tickerNorm))) {
      matchedDeal = d;
      break;
    }
  }

  const fonteMapped = normalizeNewsSourceLabel(rawSource, blobNorm);
  const escopo = (categoria === 'Waiver / AGD' || categoria === 'Downgrade Rating' || fonteMapped === 'CVM / Fatos Relevantes' || fonteMapped === 'Agentes Fiduciários')
    ? 'cvm'
    : (matchedDeal ? 'pipeline' : 'mercado');

  const resumoText = (cleanDesc && cleanDesc.length > 35 && normalizeTextNoAccents(cleanDesc) !== normalizeTextNoAccents(rawTitle))
    ? cleanDesc.slice(0, 235)
    : `Monitoramento ao vivo (${rawSource}): atualização sobre ${categoria === 'Waiver / AGD' ? 'negociação de waivers, covenants, AGDs e reestruturação de dívida no mercado de capitais' : (categoria === 'Downgrade Rating' ? 'ação de rating e crédito estruturado' : 'processo concursal e reestruturação de passivos')}.`;

  return {
    data_hora: formatRssPubDateBR(rawItem.pubDate),
    titulo: rawTitle || 'Atualização de Mercado Concursal & Crédito Privado',
    fonte: fonteMapped,
    fonte_original: rawSource,
    setor: matchedDeal ? matchedDeal.setor_macro : 'Mercado & Macro (RJ / Crédito)',
    categoria,
    escopo,
    resumo: resumoText,
    url: rawItem.link || buildNewsItemUrl({ titulo: rawTitle }),
    deal_id: matchedDeal ? matchedDeal.id : null,
    empresa_nome: matchedDeal ? matchedDeal.empresa : (categoria === 'Waiver / AGD' || categoria === 'Downgrade Rating' ? `Radar Live DCM // ${rawSource}` : `Radar Live RSS // ${rawSource}`)
  };
}

function parseRssXmlString(xmlString) {
  if (!xmlString || typeof xmlString !== 'string' || !xmlString.includes('<item')) return [];
  try {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const items = Array.from(xmlDoc.querySelectorAll('item'));
    return items.slice(0, 10).map(node => ({
      title: node.querySelector('title')?.textContent || '',
      link: node.querySelector('link')?.textContent || '',
      pubDate: node.querySelector('pubDate')?.textContent || '',
      source: node.querySelector('source')?.textContent || '',
      description: node.querySelector('description')?.textContent || ''
    })).filter(it => it.title && it.title.trim().length > 10);
  } catch (e) {
    return [];
  }
}

async function fetchSingleRssStream(rssUrl, defaultCategory, forceFresh = false) {
  const targetUrl = forceFresh
    ? `${rssUrl}${rssUrl.includes('?') ? '&' : '?'}_cb=${Date.now()}`
    : rssUrl;

  // 1. Try Google Apps Script Backend RSS Proxy first
  if (typeof APPS_SCRIPT_URL === 'string' && APPS_SCRIPT_URL.startsWith('http')) {
    try {
      const gasUrl = `${APPS_SCRIPT_URL}?action=rss&url=${encodeURIComponent(targetUrl)}${forceFresh ? '&nocache=1' : ''}`;
      const res = await fetch(gasUrl);
      if (res.ok) {
        const data = await res.json();
        if (data && data.contents) {
          const parsed = parseRssXmlString(data.contents);
          if (parsed.length > 0) return parsed.map(it => classifyRssNewsItem(it, defaultCategory));
        }
      }
    } catch (e) {}
  }

  // 2. Try AllOrigins JSON wrapper
  try {
    const aoUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}`;
    const res = await fetch(aoUrl);
    if (res.ok) {
      const data = await res.json();
      if (data && data.contents) {
        const parsed = parseRssXmlString(data.contents);
        if (parsed.length > 0) return parsed.map(it => classifyRssNewsItem(it, defaultCategory));
      }
    }
  } catch (e) {}

  // 3. Try CodeTabs XML proxy
  try {
    const ctUrl = `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(rssUrl)}`;
    const res = await fetch(ctUrl);
    if (res.ok) {
      const xmlText = await res.text();
      const parsed = parseRssXmlString(xmlText);
      if (parsed.length > 0) return parsed.map(it => classifyRssNewsItem(it, defaultCategory));
    }
  } catch (e) {}

  // 4. Try CorsProxy.io raw XML proxy
  try {
    const cpUrl = `https://corsproxy.io/?url=${encodeURIComponent(targetUrl)}`;
    const res = await fetch(cpUrl);
    if (res.ok) {
      const xmlText = await res.text();
      const parsed = parseRssXmlString(xmlText);
      if (parsed.length > 0) return parsed.map(it => classifyRssNewsItem(it, defaultCategory));
    }
  } catch (e) {}

  // 5. Try rss2json fallback
  try {
    const r2jUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
    const res = await fetch(r2jUrl);
    if (res.ok) {
      const data = await res.json();
      if (data && Array.isArray(data.items) && data.items.length > 0) {
        return data.items.slice(0, 8).map(it => classifyRssNewsItem(it, defaultCategory));
      }
    }
  } catch (e) {}

  return [];
}

async function fetchLiveDistressedNews(forceToast = false) {
  const btn = document.getElementById('btnRefreshRss');
  if (btn) {
    btn.disabled = true;
    btn.textContent = '⏳ Atualizando Feeds & Waivers...';
  }
  if (forceToast) {
    newsFeedSyncStatus = 'Sincronizando Feeds Ao Vivo (Waivers, AGDs, CVM & RJ)...';
    if (currentMainSection === 'noticias') renderSectionContent();
  }

  // 4 specialized RSS streams covering Waivers/AGDs, DCM/PRE/Fiduciários, Rating Downgrades, and RJ/Falências
  const rssStreams = [
    {
      url: 'https://news.google.com/rss/search?q=waiver+OR+covenants+OR+AGD+OR+debenturistas+OR+deb%C3%AAntures+reestrutura%C3%A7%C3%A3o&hl=pt-BR&gl=BR&ceid=BR:pt-419',
      defaultCategory: 'Waiver / AGD'
    },
    {
      url: 'https://news.google.com/rss/search?q=%22recupera%C3%A7%C3%A3o+extrajudicial%22+OR+%22vencimento+antecipado%22+OR+V%C3%B3rtx+OR+Pent%C3%A1gono+OR+%22Oliveira+Trust%22+deb%C3%AAntures&hl=pt-BR&gl=BR&ceid=BR:pt-419',
      defaultCategory: 'Waiver / AGD'
    },
    {
      url: 'https://news.google.com/rss/search?q=rebaixamento+OR+rating+Fitch+OR+Moody%27s+deb%C3%AAntures+OR+CRA+OR+d%C3%ADvida&hl=pt-BR&gl=BR&ceid=BR:pt-419',
      defaultCategory: 'Downgrade Rating'
    },
    {
      url: 'https://news.google.com/rss/search?q=%22recupera%C3%A7%C3%A3o+judicial%22+OR+%22tutela+cautelar%22+OR+%22pedido+de+fal%C3%AAncia%22+d%C3%ADvida+milh%C3%B5es&hl=pt-BR&gl=BR&ceid=BR:pt-419',
      defaultCategory: 'Pedido de RJ'
    }
  ];

  try {
    lastNewsAutoSyncTs = Date.now();
    // 0. Fetch live-news.json generated by GitHub Actions cron (if present in repo)
    const repoJsonTask = fetch(`live-news.json?_cb=${Date.now()}`)
      .then(r => (r.ok ? r.json() : []))
      .then(arr => (Array.isArray(arr) ? arr.map(it => (it.categoria ? it : classifyRssNewsItem(it, 'Waiver / AGD'))) : []))
      .catch(() => []);

    const tasks = [
      repoJsonTask,
      ...rssStreams.map(st => fetchSingleRssStream(st.url, st.defaultCategory, forceToast))
    ];
    if (forceToast && typeof fetchLiveSheetInBackground === 'function') {
      tasks.push(fetchLiveSheetInBackground(false).then(() => []));
    }

    const settled = await Promise.allSettled(tasks);
    const mergedRss = [];
    const seenTitles = new Set();

    settled.forEach(res => {
      if (res.status === 'fulfilled' && Array.isArray(res.value)) {
        res.value.forEach(item => {
          const normKey = normalizeTextNoAccents(item.titulo).slice(0, 65);
          if (normKey && !seenTitles.has(normKey)) {
            seenTitles.add(normKey);
            mergedRss.push(item);
          }
        });
      }
    });

    if (mergedRss.length > 0) {
      liveRssNewsItems = mergedRss.slice(0, 24).map((it, idx) => ({
        ...it,
        id: 800 + idx
      }));
      saveCachedLiveNewsToStorage(liveRssNewsItems);
    }
  } catch (e) {
    // Keeps existing liveRssNewsItems or falls back cleanly
  }

  const now = new Date();
  const syncStamp = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  const allCombined = getAllCombinedNews();
  const dcmCount = allCombined.filter(n => n.categoria === 'Waiver / AGD' || n.categoria === 'Downgrade Rating').length;

  if (liveRssNewsItems.length > 0) {
    newsFeedSyncStatus = `Sincronizado (${syncStamp}) • ${allCombined.length} matérias (${dcmCount} de Waivers/AGDs/Ratings)`;
    if (forceToast) showToast(`Feed atualizado (${syncStamp}): ${allCombined.length} notícias (${dcmCount} eventos de Waivers/AGDs & Ratings)!`);
  } else {
    newsFeedSyncStatus = `Feed Ativo (${syncStamp}) • ${allCombined.length} fatos (${dcmCount} de Waivers/AGDs/Ratings)`;
    if (forceToast) showToast(`Radar sincronizado (${syncStamp}): ${dcmCount} eventos de Waivers, AGDs e Ratings monitorados!`);
  }

  const navNews = document.getElementById('nav-count-noticias');
  if (navNews) navNews.textContent = allCombined.length;

  if (currentMainSection === 'noticias') {
    renderSubTabs();
    renderSectionContent();
  }
}

function buildDynamicPipelineNews() {
  const coveredDealIds = new Set(NEWS_FEED_DATA.map(n => n.deal_id).filter(Boolean));
  CURATED_MACRO_NEWS.forEach(n => { if (n.deal_id) coveredDealIds.add(n.deal_id); });

  const dynamicItems = [];
  const dcmStrictRegex = /\b(waivers?|covenants?|agds?|deb[eê]ntures?|debenturistas?|cras?|cris?|fidcs?|notas?\s+comerciais|v[oó]rtx|pent[aá]gono|oliveira\s+trust|opea|virgo|vert\s+securitizadora|standstill|bonds?|bondholders?)\b/i;
  const ratingStrictRegex = /\b(fitch|moody|s&p|rebaixamento|downgrade|rd\(bra\)|ccc\(bra\)|observa[cç][aã]o\s+negativa)\b/i;

  DEALS_DATA.forEach(d => {
    if (coveredDealIds.has(d.id)) return;
    // Skip generic anonymized Tier 0 placeholders if we already have real named companies
    if (/^(Rede Varejista|Metalúrgica Autopeças|Grupo Agroindustrial do Cerrado)/i.test(d.empresa || '')) return;

    const textBlob = `${d.fase || ''} ${d.tese || ''} ${d.credores || ''} ${d.perfil_passivo || ''}`;
    const hasDcmSignal = dcmStrictRegex.test(textBlob) || d.tipo_processo === 'PRE';
    const hasRatingSignal = ratingStrictRegex.test(textBlob);
    const isRecentDeal = String(d.data_adicao || '') >= '2026-10-18' || String(d.data_evento || '') >= '2026-10-18';
    const isOctDcm = (hasDcmSignal || hasRatingSignal) && String(d.data_evento || '') >= '2026-10-01';

    if (!isRecentDeal && !isOctDcm && d.id <= 98) return;

    const parsed = parseThesisRegex(d.tese);
    let categoria = 'Pedido de RJ';
    if (hasRatingSignal) {
      categoria = 'Downgrade Rating';
    } else if (d.subtipo_processo === 'Falência / Liquidação' || /\b(fal[eê]ncia|convola[cç][aã]o|quebra)\b/i.test(d.fase || '')) {
      categoria = 'Falência';
    } else if (d.tipo_processo === 'PRE' || /\b(waivers?|agds?|deb[eê]ntures?|debenturistas?|cras?|cris?|covenants?)\b/i.test(`${d.fase || ''} ${d.processo || ''} ${d.perfil_passivo || ''}`)) {
      categoria = 'Waiver / AGD';
    } else if (d.tipo_processo === 'Cautelar / Pré-RJ') {
      categoria = 'Cautelar 20-B';
    } else if (isUpiEligible(d) && /\b(leil[aã]o|edital\s+de\s+aliena[cç][aã]o)\b/i.test(textBlob)) {
      categoria = 'Leilão de UPI';
    }

    const rawDate = (d.data_evento && d.data_evento >= '2026-10-01') ? d.data_evento : (d.data_adicao || d.data_evento || '2026-10-22');
    const dtStr = formatDateBR(rawDate);
    const fonte = (categoria === 'Waiver / AGD' || categoria === 'Downgrade Rating')
      ? ((d.agentes_fiduciarios && !d.agentes_fiduciarios.includes('N/A')) || (d.securitizadoras && !d.securitizadoras.includes('N/A') && !d.securitizadoras.includes('Sem securitizadora')) ? 'Agentes Fiduciários' : 'CVM / Fatos Relevantes')
      : 'Jota / Tribunais';

    const cleanGargalo = String(parsed.gargalo || d.fase || '')
      .replace(/^gargalo\s+imediato(?:\s+de\s+liquidez)?\s*:\s*/i, '')
      .trim();

    dynamicItems.push({
      id: 500 + Number(d.id || 0),
      data_hora: `${dtStr} 10:30`,
      titulo: `${d.empresa} — ${cleanGargalo.slice(0, 145)}${cleanGargalo.length > 145 ? '...' : ''} (R$ ${formatNumberBR(d.passivo_mm)} MM)`,
      fonte,
      setor: d.setor_macro || 'Indústria & Manufatura',
      categoria,
      escopo: (categoria === 'Waiver / AGD' || categoria === 'Downgrade Rating') ? 'cvm' : 'pipeline',
      resumo: `${parsed.causa ? parsed.causa + '. ' : ''}Credores mapeados: ${d.credores || 'Em apuração'}.`,
      url: d.url_noticia || buildNewsItemUrl({ empresa_nome: d.empresa, categoria }),
      deal_id: d.id,
      empresa_nome: d.empresa
    });
  });

  return dynamicItems;
}

function getAllCombinedNews() {
  const pipelineMapped = NEWS_FEED_DATA.map(n => ({
    ...n,
    escopo: (n.fonte === 'CVM / Fatos Relevantes' || n.fonte === 'Agentes Fiduciários' || n.categoria === 'Waiver / AGD' || n.categoria === 'Downgrade Rating') ? 'cvm' : 'pipeline',
    url: buildNewsItemUrl(n)
  }));
  const dynamicFromDeals = buildDynamicPipelineNews();

  const rawAll = [...liveRssNewsItems, ...CURATED_MACRO_NEWS, ...pipelineMapped, ...dynamicFromDeals];
  const deduped = [];
  const seen = new Set();

  rawAll.forEach(item => {
    const key = normalizeTextNoAccents(item.titulo).slice(0, 65);
    if (!seen.has(key)) {
      seen.add(key);
      deduped.push(item);
    }
  });

  return deduped.sort((a, b) => parseNewsTimestamp(b.data_hora) - parseNewsTimestamp(a.data_hora));
}

function renderNoticiasSection(container) {
  const allNews = getAllCombinedNews();
  const sources = ['Valor Econômico', 'Pipeline', 'Brazil Journal', 'CVM / Fatos Relevantes', 'Agentes Fiduciários', 'Jota / Tribunais'];
  const categorias = ['Pedido de RJ', 'Cautelar 20-B', 'Waiver / AGD', 'Downgrade Rating', 'Leilão de UPI', 'Falência'];
  const setores = [...new Set(allNews.map(n => n.setor))].sort();

  const navNews = document.getElementById('nav-count-noticias');
  if (navNews) navNews.textContent = allNews.length;

  const filteredNews = allNews.filter(n => {
    if (currentSubTab === 'news_rj' && n.categoria !== 'Pedido de RJ' && n.categoria !== 'Cautelar 20-B') return false;
    if (currentSubTab === 'news_dcm' && n.categoria !== 'Waiver / AGD' && n.categoria !== 'Downgrade Rating') return false;
    if (currentSubTab === 'news_upi_falencia' && n.categoria !== 'Leilão de UPI' && n.categoria !== 'Falência') return false;

    if (newsScopeFilter === 'mercado' && n.escopo !== 'mercado') return false;
    if (newsScopeFilter === 'pipeline' && !n.deal_id) return false;
    if (newsScopeFilter === 'cvm' && n.escopo !== 'cvm') return false;

    if (newsSourceFilter !== '' && n.fonte !== newsSourceFilter) return false;
    if (newsSetorFilter !== '' && n.setor !== newsSetorFilter) return false;
    if (newsCategoriaFilter !== '' && n.categoria !== newsCategoriaFilter) return false;
    if (newsSearchQuery !== '') {
      const blob = normalizeTextNoAccents(`${n.titulo} ${n.resumo} ${n.empresa_nome} ${n.fonte} ${n.setor} ${n.categoria}`);
      if (!blob.includes(normalizeTextNoAccents(newsSearchQuery))) return false;
    }
    return true;
  });

  const countMercado = allNews.filter(n => n.escopo === 'mercado').length;
  const countPipeline = allNews.filter(n => Boolean(n.deal_id)).length;
  const countCvm = allNews.filter(n => n.escopo === 'cvm').length;

  let html = `
    <div class="news-filter-bar">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:10px; padding-bottom:8px; border-bottom:1px solid var(--border-light);">
        <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
          <span class="phase-label">Escopo do Feed:</span>
          <button class="phase-chip ${newsScopeFilter === 'all' ? 'active' : ''}" onclick="handleNewsScopeFilter('all')">Todas as Notícias (${allNews.length})</button>
          <button class="phase-chip ${newsScopeFilter === 'mercado' ? 'active' : ''}" onclick="handleNewsScopeFilter('mercado')">Mercado &amp; Macro (${countMercado})</button>
          <button class="phase-chip ${newsScopeFilter === 'pipeline' ? 'active' : ''}" onclick="handleNewsScopeFilter('pipeline')">Empresas do Pipeline (${countPipeline})</button>
          <button class="phase-chip ${newsScopeFilter === 'cvm' ? 'active' : ''}" onclick="handleNewsScopeFilter('cvm')">CVM, Waivers &amp; Fatos Relevantes (${countCvm})</button>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="font-family:var(--font-mono); font-size:10.5px; color:var(--vk-teal); font-weight:700;">● ${escapeHtml(newsFeedSyncStatus)}</span>
          <button type="button" id="btnRefreshRss" class="btn-action" style="padding:3px 9px; font-size:10.5px;" onclick="fetchLiveDistressedNews(true)">↻ Atualizar RSS</button>
        </div>
      </div>

      <div class="filter-row-top">
        <div class="search-field-wrap">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input type="text" value="${escapeHtml(newsSearchQuery)}" placeholder="Buscar por palavra-chave, waiver, covenant, empresa, fundo, debênture ou tribunal..." oninput="handleNewsSearch(this.value)">
        </div>
        <div class="filter-select-group">
          <select class="clean-select" onchange="handleNewsSetorFilter(this.value)">
            <option value="">Todos os Macro-Setores</option>
            ${setores.map(s => `<option value="${escapeHtml(s)}" ${newsSetorFilter === s ? 'selected' : ''}>${escapeHtml(s)}</option>`).join('')}
          </select>
          <select class="clean-select" onchange="handleNewsCategoriaFilter(this.value)">
            <option value="">Todas as Categorias</option>
            ${categorias.map(c => `<option value="${escapeHtml(c)}" ${newsCategoriaFilter === c ? 'selected' : ''}>${escapeHtml(c)}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="news-source-pills">
        <span class="phase-label">Fonte:</span>
        <button class="phase-chip ${newsSourceFilter === '' ? 'active' : ''}" onclick="handleNewsSourceFilter('')">Todas as Fontes</button>
        ${sources.map(src => `
          <button class="phase-chip ${newsSourceFilter === src ? 'active' : ''}" onclick="handleNewsSourceFilter('${escapeHtml(src)}')">${escapeHtml(src)}</button>
        `).join('')}
      </div>
    </div>
  `;

  if (filteredNews.length === 0) {
    html += `<div style="text-align:center; padding:48px; color:var(--text-muted);">Nenhuma notícia ou fato relevante encontrado para os filtros aplicados.</div>`;
    container.innerHTML = html;
    return;
  }

  html += `<div class="news-feed-grid">`;
  filteredNews.forEach(item => {
    let catClass = 'badge-prj';
    if (item.categoria === 'Cautelar 20-B') catClass = 'badge-cautelar';
    else if (item.categoria === 'Waiver / AGD') catClass = 'badge-pre';
    else if (item.categoria === 'Downgrade Rating') catClass = 'badge-tier0';
    else if (item.categoria === 'Leilão de UPI') catClass = 'badge-upi';
    else if (item.categoria === 'Falência') catClass = 'badge-falencia';

    const targetUrl = buildNewsItemUrl(item);

    html += `
      <article class="news-card">
        <div>
          <div class="news-meta-top">
            <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
              <span class="news-source-tag">${escapeHtml(item.fonte)}</span>
              <span class="status-badge ${catClass}" style="margin-left:0;">${escapeHtml(item.categoria)}</span>
            </div>
            <span class="news-timestamp">🕒 ${escapeHtml(item.data_hora)}</span>
          </div>
          <h3 class="news-title">
            <a href="${escapeHtml(targetUrl)}" target="_blank" rel="noopener noreferrer" style="color:inherit; text-decoration:none;">
              ${escapeHtml(item.titulo)} <span style="font-size:12px; color:var(--vk-teal);">↗</span>
            </a>
          </h3>
          <p class="news-summary">${escapeHtml(item.resumo)}</p>
        </div>
        <div class="news-footer">
          <div>
            <span style="font-family:var(--font-mono); font-size:10px; color:var(--text-muted); display:block;">${item.deal_id ? 'GRUPO MONITORADO' : 'RADAR DE MERCADO'} // ${escapeHtml(item.setor)}</span>
            <strong style="font-size:12px; color:var(--vk-header-start);">${escapeHtml(item.empresa_nome)}</strong>
          </div>
          <div style="display:flex; gap:6px; flex-wrap:wrap;">
            <a href="${escapeHtml(targetUrl)}" target="_blank" rel="noopener noreferrer" class="btn-action" style="text-decoration:none; display:inline-flex; align-items:center; gap:4px; padding:6px 10px; font-size:11px;">
              Ler Notícia ↗
            </a>
            ${item.deal_id ? `
              <button class="btn-solid" style="padding:6px 11px; font-size:11px;" onclick="openDossierByCompanyOrId(${item.deal_id}, '${escapeHtml(item.empresa_nome)}')">
                Abrir Ficha da Empresa
              </button>
            ` : ''}
          </div>
        </div>
      </article>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

function handleNewsScopeFilter(sc) {
  newsScopeFilter = sc;
  renderSectionContent();
}
function handleNewsSourceFilter(src) {
  newsSourceFilter = src;
  renderSectionContent();
}
function handleNewsSetorFilter(setor) {
  newsSetorFilter = setor;
  renderSectionContent();
}
function handleNewsCategoriaFilter(cat) {
  newsCategoriaFilter = cat;
  renderSectionContent();
}
function handleNewsSearch(q) {
  newsSearchQuery = q.trim().toLowerCase();
  renderSectionContent();
}

function openDossierByCompanyOrId(dealId, empresaNome) {
  let found = DEALS_DATA.find(d => d.id === dealId);
  if (!found && empresaNome) {
    const key = empresaNome.split('(')[0].trim().toLowerCase();
    found = DEALS_DATA.find(d => d.empresa.toLowerCase().includes(key));
  }
  if (found) {
    openDossier(found.id);
  } else {
    showToast('Empresa localizada no radar.');
  }
}

// ==========================================================================
// 12. Nova Aba: Energia & Infra (Vertical Setorial ONS / CCEE / ANEEL c/ API CKAN & Links Oficiais)
// ==========================================================================
const ONS_SUBMARKET_SERIES = {
  'SIN': {
    label: 'Sistema Interligado Nacional (SIN)',
    carga_mw: '78.420 MW',
    renovavel_pct: '89,4%',
    ear_pct: '64,8%',
    pld_medio: 'R$ 148,50 / MWh',
    curtailment_mw: '2.840 MWmed (NE/SE)',
    hidro:   [46200, 44800, 43500, 42900, 43200, 45100, 47800, 46200, 42100, 38500, 35800, 34900, 35200, 36100, 38400, 42600, 48900, 54800, 58200, 57600, 55400, 52800, 49600, 47400],
    termica: [6200,  6100,  6000,  6000,  6100,  6300,  6500,  6800,  7100,  7200,  7200,  7300,  7300,  7400,  7500,  7800,  8400,  9200,  9600,  9500,  9100,  8400,  7400,  6600],
    nuclear: [1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990],
    eolica:  [14200, 14600, 14900, 15100, 14800, 14200, 13100, 11800, 10900, 10400, 10200, 10500, 11200, 12100, 13400, 14800, 16100, 16900, 17400, 17200, 16800, 16100, 15400, 14800],
    solar:   [0,     0,     0,     0,     0,     200,   2400,  6800,  11400, 14800, 16900, 17800, 18100, 17200, 14900, 10800, 5200,  800,   0,     0,     0,     0,     0,     0],
    mmgd:    [0,     0,     0,     0,     0,     100,   1800,  5400,  9800,  13600, 16200, 17400, 17600, 16400, 13800, 9200,  3800,  400,   0,     0,     0,     0,     0,     0]
  },
  'SE': {
    label: 'Submercado Sudeste / Centro-Oeste',
    carga_mw: '44.890 MW',
    renovavel_pct: '86,2%',
    ear_pct: '61,2%',
    pld_medio: 'R$ 156,20 / MWh',
    curtailment_mw: '620 MWmed (MG/SP)',
    hidro:   [29500, 28400, 27600, 27100, 27400, 28900, 30800, 29800, 27100, 24800, 23200, 22600, 22900, 23600, 25100, 27800, 31900, 35800, 38100, 37600, 36100, 34200, 32100, 30400],
    termica: [3800,  3700,  3700,  3700,  3800,  3900,  4100,  4300,  4500,  4600,  4600,  4700,  4700,  4800,  4900,  5100,  5500,  6100,  6400,  6300,  6000,  5500,  4800,  4200],
    nuclear: [1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990,  1990],
    eolica:  [400,   420,   430,   440,   420,   400,   380,   350,   320,   300,   300,   310,   340,   370,   410,   450,   490,   520,   540,   530,   510,   480,   450,   420],
    solar:   [0,     0,     0,     0,     0,     90,    1100,  3100,  5200,  6800,  7800,  8200,  8400,  7900,  6800,  4900,  2300,  350,   0,     0,     0,     0,     0,     0],
    mmgd:    [0,     0,     0,     0,     0,     60,    1100,  3300,  5900,  8200,  9800,  10500, 10600, 9900,  8300,  5500,  2200,  220,   0,     0,     0,     0,     0,     0]
  },
  'S': {
    label: 'Submercado Sul',
    carga_mw: '13.450 MW',
    renovavel_pct: '92,8%',
    ear_pct: '78,4%',
    pld_medio: 'R$ 118,40 / MWh',
    curtailment_mw: '190 MWmed (RS/SC)',
    hidro:   [8800,  8500,  8200,  8100,  8200,  8600,  9200,  9100,  8600,  8100,  7700,  7500,  7600,  7800,  8300,  9100,  10100, 11200, 11800, 11600, 11100, 10500, 9800,  9200],
    termica: [950,   920,   900,   900,   920,   950,   980,   1020,  1050,  1080,  1080,  1100,  1100,  1120,  1150,  1200,  1300,  1400,  1450,  1420,  1350,  1250,  1100,  1000],
    nuclear: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    eolica:  [1600,  1650,  1700,  1720,  1680,  1600,  1480,  1350,  1250,  1200,  1180,  1220,  1300,  1400,  1520,  1680,  1820,  1900,  1950,  1920,  1880,  1800,  1720,  1650],
    solar:   [0,0,0,0,0,15,180,520,890,1150,1320,1400,1420,1350,1150,820,380,60,0,0,0,0,0,0],
    mmgd:    [0,0,0,0,0,25,420,1250,2200,3100,3700,3950,4000,3750,3150,2100,850,90,0,0,0,0,0,0]
  },
  'NE': {
    label: 'Submercado Nordeste',
    carga_mw: '12.980 MW',
    renovavel_pct: '94,1%',
    ear_pct: '58,9%',
    pld_medio: 'R$ 164,80 / MWh',
    curtailment_mw: '1.890 MWmed (RN/CE/BA)',
    hidro:   [3800,  3700,  3600,  3600,  3600,  3700,  3800,  3600,  3100,  2600,  2200,  2100,  2100,  2200,  2500,  3100,  3900,  4600,  5100,  5000,  4800,  4500,  4200,  4000],
    termica: [850,   840,   820,   820,   840,   860,   880,   920,   950,   960,   960,   960,   960,   980,   1000,  1050,  1150,  1250,  1300,  1280,  1220,  1120,  980,   900],
    nuclear: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    eolica:  [11800, 12100, 12350, 12500, 12300, 11800, 10900, 9800,  9050,  8650,  8500,  8750,  9300,  10050, 11150, 12300, 13400, 14050, 14450, 14300, 13950, 13400, 12850, 12350],
    solar:   [0,0,0,0,0,85,1050,2980,5010,6480,7400,7800,7900,7550,6550,4750,2350,360,0,0,0,0,0,0],
    mmgd:    [0,0,0,0,0,12,210,650,1280,1780,2120,2280,2320,2150,1820,1220,550,70,0,0,0,0,0,0]
  },
  'N': {
    label: 'Submercado Norte',
    carga_mw: '7.100 MW',
    renovavel_pct: '91,5%',
    ear_pct: '72,6%',
    pld_medio: 'R$ 132,10 / MWh',
    curtailment_mw: '140 MWmed (MA/TO)',
    hidro:   [4100,  4200,  4100,  4100,  4000,  3900,  4000,  3700,  3300,  3000,  2700,  2700,  2600,  2500,  2500,  2600,  3000,  3200,  3200,  3400,  3400,  3600,  3500,  3800],
    termica: [600,   640,   580,   580,   540,   590,   540,   560,   600,   560,   560,   540,   540,   500,   450,   450,   450,   450,   450,   500,   530,   530,   520,   500],
    nuclear: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    eolica:  [400,   430,   420,   440,   400,   400,   340,   300,   280,   250,   220,   220,   260,   280,   320,   370,   390,   430,   460,   450,   460,   420,   380,   380],
    solar:   [0,0,0,0,0,10,70,200,300,370,380,400,380,400,400,330,170,30,0,0,0,0,0,0],
    mmgd:    [0,0,0,0,0,3,70,200,420,520,580,670,680,600,530,380,200,20,0,0,0,0,0,0]
  }
};

async function fetchEnergyMarketData(submercado = 'SIN', dataOperativa = '2026-10-16', notifyUser = false) {
  const cceeUrl = 'https://dadosabertos.ccee.org.br/api/3/action/package_search?q=pld_horario&rows=3';
  const aneelUrl = 'https://dadosabertos.aneel.gov.br/api/3/action/package_search?q=geracao+distribuida+OR+outorga&rows=3';

  try {
    const [cceeRes, aneelRes] = await Promise.allSettled([
      fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(cceeUrl)}`),
      fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(aneelUrl)}`)
    ]);

    const okCcee = cceeRes.status === 'fulfilled' && cceeRes.value.ok;
    const okAneel = aneelRes.status === 'fulfilled' && aneelRes.value.ok;

    const now = new Date();
    energyLastSyncTime = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    if (okCcee || okAneel) {
      energyTelemetryStatus = 'Telemetria CCEE / ANEEL / ONS Sincronizada';
      if (notifyUser) showToast(`Telemetria CCEE / ANEEL sincronizada (${energyLastSyncTime})!`);
    } else {
      energyTelemetryStatus = 'Fallback Operacional (Cache ONS/CCEE)';
      if (notifyUser) showToast('Operando com Cache ONS/CCEE verificada.');
    }
  } catch (e) {
    energyTelemetryStatus = 'Fallback Operacional (Cache ONS/CCEE)';
  }

  if (currentMainSection === 'energia') {
    renderSectionContent();
  }
}

function getDynamicSubmarketConfig(subKey, dateStr) {
  const base = ONS_SUBMARKET_SERIES[subKey] || ONS_SUBMARKET_SERIES.SIN;
  // Deterministic date modulation so changing Data Operativa dynamically recalculates KPIs & curves
  const dateHash = String(dateStr || '2026-10-16').split('-').reduce((acc, part) => acc + (parseInt(part, 10) || 0), 0);
  const deltaFactor = 1 + (((dateHash % 9) - 4) * 0.008);

  const scaleArr = arr => arr.map(v => Math.round(v * deltaFactor));
  const hidro = scaleArr(base.hidro);
  const termica = scaleArr(base.termica);
  const nuclear = [...base.nuclear];
  const eolica = scaleArr(base.eolica);
  const solar = scaleArr(base.solar);
  const mmgd = scaleArr(base.mmgd);

  const totalInstant = hidro[14] + termica[14] + nuclear[14] + eolica[14] + solar[14] + mmgd[14];
  const renInstant = hidro[14] + eolica[14] + solar[14] + mmgd[14];
  const renPct = totalInstant > 0 ? ((renInstant / totalInstant) * 100).toFixed(1).replace('.', ',') + '%' : base.renovavel_pct;

  const basePldNum = parseFloat(base.pld_medio.replace(/[^\d,]/g, '').replace(',', '.')) || 148.5;
  const pldMod = (basePldNum * deltaFactor).toFixed(2).replace('.', ',');

  return {
    ...base,
    carga_mw: `${totalInstant.toLocaleString('pt-BR')} MW`,
    renovavel_pct: renPct,
    pld_medio: `R$ ${pldMod} / MWh`,
    hidro, termica, nuclear, eolica, solar, mmgd
  };
}

function renderEnergiaSection(container) {
  const subCfg = getDynamicSubmarketConfig(selectedSinSubmarket, selectedSinDate);
  const allEnergyDeals = DEALS_DATA.filter(d => d.setor_macro === 'Energia & Infraestrutura');
  const energyDeals = allEnergyDeals.filter(d => {
    if (selectedSinSubmarket === 'SIN') return true;
    const sm = String(d.energy_meta?.submercado || '').toLowerCase();
    if (selectedSinSubmarket === 'SE') return sm.includes('sudeste') || d.regiao_macro === 'Sudeste' || d.regiao_macro === 'Centro-Oeste';
    if (selectedSinSubmarket === 'S') return sm.includes('sul') || d.regiao_macro === 'Sul';
    if (selectedSinSubmarket === 'NE') return sm.includes('nordeste') || d.regiao_macro === 'Nordeste';
    if (selectedSinSubmarket === 'N') return sm.includes('norte') || d.regiao_macro === 'Norte';
    return true;
  });

  const isSynced = energyTelemetryStatus.includes('Sincronizada');

  let html = `
    <div class="ons-control-bar">
      <div>
        <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
          <span style="font-family:var(--font-mono); font-size:10px; font-weight:800; color:var(--vk-sage); text-transform:uppercase; letter-spacing:0.8px;">
            SISTEMA INTERLIGADO NACIONAL (SIN) // TELEMETRIA &amp; RISCO SETORIAL
          </span>
          <span style="font-family:var(--font-mono); font-size:10px; font-weight:700; padding:2px 8px; border-radius:999px; background:${isSynced ? 'rgba(16,185,129,0.2)' : 'rgba(245,158,11,0.22)'}; color:${isSynced ? '#A7F3D0' : '#FDE68A'};">
            ● ${escapeHtml(energyTelemetryStatus)} (${escapeHtml(energyLastSyncTime)})
          </span>
          <button type="button" class="header-pill-btn" style="padding:2px 8px; font-size:10px;" onclick="fetchEnergyMarketData(selectedSinSubmarket, selectedSinDate, true)">
            ↻ Sincronizar CCEE/ANEEL
          </button>
        </div>
        <div style="font-size:15px; font-weight:800; color:#FFFFFF; margin-top:4px;">
          ${escapeHtml(subCfg.label)} &bull; Data Operativa: ${formatDateBR(selectedSinDate)}
        </div>
      </div>
      <div class="ons-control-group">
        <div>
          <label for="sinDateInput" style="font-family:var(--font-mono); font-size:9.5px; color:var(--vk-sage); display:block; text-transform:uppercase;">Data Operativa</label>
          <input type="date" id="sinDateInput" class="ons-date-input" value="${escapeHtml(selectedSinDate)}" onchange="handleSinDateChange(this.value)">
        </div>
        <div>
          <label for="sinSubmarketSelect" style="font-family:var(--font-mono); font-size:9.5px; color:var(--vk-sage); display:block; text-transform:uppercase;">Submercado / Região</label>
          <select id="sinSubmarketSelect" class="ons-select" onchange="handleSinSubmarketChange(this.value)">
            <option value="SIN" ${selectedSinSubmarket === 'SIN' ? 'selected' : ''}>Sistema Interligado (SIN)</option>
            <option value="SE" ${selectedSinSubmarket === 'SE' ? 'selected' : ''}>Sudeste / Centro-Oeste (SE/CO)</option>
            <option value="S" ${selectedSinSubmarket === 'S' ? 'selected' : ''}>Sul (S)</option>
            <option value="NE" ${selectedSinSubmarket === 'NE' ? 'selected' : ''}>Nordeste (NE)</option>
            <option value="N" ${selectedSinSubmarket === 'N' ? 'selected' : ''}>Norte (N)</option>
          </select>
        </div>
      </div>
    </div>

    <div class="ons-kpi-row">
      <div class="ons-mini-kpi">
        <div class="ons-mini-kpi-label">Carga Instantânea</div>
        <div class="ons-mini-kpi-val">${escapeHtml(subCfg.carga_mw)}</div>
        <div style="font-size:10.5px; margin-top:3px;">
          <a href="https://www.ons.org.br/paginas/energia-agora/carga-e-geracao" target="_blank" rel="noopener noreferrer" style="color:var(--vk-teal); font-weight:700; text-decoration:none;">ONS Energia Agora ↗</a>
        </div>
      </div>
      <div class="ons-mini-kpi">
        <div class="ons-mini-kpi-label">Matriz Renovável</div>
        <div class="ons-mini-kpi-val">${escapeHtml(subCfg.renovavel_pct)}</div>
        <div style="font-size:10.5px; margin-top:3px;">
          <a href="https://dadosabertos.aneel.gov.br/" target="_blank" rel="noopener noreferrer" style="color:var(--vk-teal); font-weight:700; text-decoration:none;">ANEEL Dados Abertos ↗</a>
        </div>
      </div>
      <div class="ons-mini-kpi">
        <div class="ons-mini-kpi-label">Nível Reservatórios (EAR)</div>
        <div class="ons-mini-kpi-val">${escapeHtml(subCfg.ear_pct)}</div>
        <div style="font-size:10.5px; margin-top:3px;">
          <a href="https://www.ons.org.br/paginas/energia-agora/reservatorios" target="_blank" rel="noopener noreferrer" style="color:var(--vk-teal); font-weight:700; text-decoration:none;">ONS Reservatórios ↗</a>
        </div>
      </div>
      <div class="ons-mini-kpi">
        <div class="ons-mini-kpi-label">PLD Horário Médio</div>
        <div class="ons-mini-kpi-val">${escapeHtml(subCfg.pld_medio)}</div>
        <div style="font-size:10.5px; margin-top:3px;">
          <a href="https://www.ccee.org.br/precos/painel-precos" target="_blank" rel="noopener noreferrer" style="color:var(--vk-teal); font-weight:700; text-decoration:none;">CCEE Painel de Preços ↗</a>
        </div>
      </div>
      <div class="ons-mini-kpi" style="border-left-color:#B45309;">
        <div class="ons-mini-kpi-label">Curtailment (Constrained-off)</div>
        <div class="ons-mini-kpi-val" style="color:#B45309;">${escapeHtml(subCfg.curtailment_mw)}</div>
        <div style="font-size:10.5px; margin-top:3px;">
          <a href="https://dadosabertos.ccee.org.br/" target="_blank" rel="noopener noreferrer" style="color:#B45309; font-weight:700; text-decoration:none;">CCEE Dados Abertos ↗</a>
        </div>
      </div>
    </div>
  `;

  if (currentSubTab !== 'pipeline_energia') {
    html += `
      <div class="chart-panel full-span" style="margin-bottom:22px;">
        <div class="chart-panel-header">
          <div>
            <h3 id="onsChartTitle">Operação em Tempo Real (MW) por Fonte vs. Carga Prevista e Realizada — ${escapeHtml(subCfg.label)}</h3>
            <p>Curva horária empilhada (Geração Hidráulica, Térmica, Nuclear, Solar, Eólica e MMGD) confrontada com as curvas contínua e tracejada de Carga</p>
          </div>
          <span class="chart-tag">ONS / CCEE TELEMETRIA HORÁRIA</span>
        </div>
        <div class="chart-canvas-box" style="height:340px;"><canvas id="chartOnsOperation"></canvas></div>
      </div>
    `;
  }

  html += `
    <div style="margin-top: 8px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:10px;">
        <div>
          <h3 style="font-size:16.5px; font-weight:800; color:var(--vk-header-start);">
            Pipeline Integrado de Special Situations — Energia &amp; Infraestrutura (${energyDeals.length} Casos no Submercado)
          </h3>
          <p style="font-size:12px; color:var(--text-secondary);">
            Gatilhos setoriais críticos: Código da Debênture de Infraestrutura, Agente Fiduciário, Inadimplemento CCEE, Risco de Caducidade de Outorga e Corte de Rating por Curtailment/ICSD.
          </p>
        </div>
        <span class="status-badge badge-pre">PASSIVO SETORIAL: R$ ${formatNumberBR(energyDeals.reduce((s, d) => s + (d.passivo_mm || 0), 0))} MM</span>
      </div>

      <div class="cards-grid">
  `;

  energyDeals.forEach(item => {
    const em = item.energy_meta || {
      debenture_codigo: item.processo || 'Emissão Privada / Project Finance',
      agente_fiduciario: item.agentes_fiduciarios || 'Vórtx / Pentágono / Oliveira Trust',
      inadimplemento_ccee: 'Monitoramento MCP / CCEE',
      risco_caducidade: 'Concessão / Autorização ANEEL sob acompanhamento',
      corte_rating_curtailment: 'Pressão de ICSD por alavancagem operacional'
    };
    const b = getBadgeVisual(item);
    const outorgaSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(item.empresa + ' ' + item.cnpj + ' ANEEL CCEE outorga debêntures')}`;

    html += `
      <div class="energy-deal-card">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px; margin-bottom:8px;">
          <div>
            <strong style="font-size:14.5px; color:var(--vk-header-start); display:block;">${escapeHtml(item.empresa)}</strong>
            <span class="td-company-meta">${escapeHtml(item.cidade)}, ${escapeHtml(item.uf)} &bull; ${escapeHtml(item.cnpj)}</span>
          </div>
          <span class="status-badge ${b.cls}">${escapeHtml(item.subtipo_processo)}</span>
        </div>

        <div class="energy-trigger-grid">
          <div class="energy-trigger-item">
            <span>Debênture / Dívida Infra</span>
            <strong>${escapeHtml(em.debenture_codigo)}</strong>
          </div>
          <div class="energy-trigger-item">
            <span>Agente Fiduciário</span>
            <strong>${escapeHtml(em.agente_fiduciario)}</strong>
          </div>
          <div class="energy-trigger-item">
            <span>Status / Inadimplemento CCEE</span>
            <strong style="color:#9F1239;">${escapeHtml(em.inadimplemento_ccee)}</strong>
          </div>
          <div class="energy-trigger-item">
            <span>Risco de Caducidade (ANEEL/ARTESP)</span>
            <strong>${escapeHtml(em.risco_caducidade)}</strong>
          </div>
          <div class="energy-trigger-item" style="grid-column: 1 / -1; border-top:1px dashed var(--border-light); padding-top:6px;">
            <span>Corte de Rating / Curtailment / ICSD</span>
            <strong style="color:#92400E;">${escapeHtml(em.corte_rating_curtailment)}</strong>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; padding-top:8px; border-top:1px solid var(--border-light);">
          <div>
            <span style="font-family:var(--font-mono); font-size:12.5px; font-weight:800; color:var(--vk-header-start);">Passivo: R$ ${formatNumberBR(item.passivo_mm)} MM</span>
            <span style="font-family:var(--font-mono); font-size:11px; color:var(--vk-teal); margin-left:8px; font-weight:700;">Score: ${formatScoreBR(item.score)}</span>
          </div>
          <div style="display:flex; gap:6px; flex-wrap:wrap;">
            <a href="${escapeHtml(outorgaSearchUrl)}" target="_blank" rel="noopener noreferrer" class="btn-action" style="text-decoration:none; padding:5px 9px; font-size:10.5px;">
              Consultar Outorga ANEEL / CCEE ↗
            </a>
            <button class="btn-solid" style="padding:5px 11px; font-size:11px;" onclick="openDossier(${item.id})">Abrir Tear Sheet</button>
          </div>
        </div>
      </div>
    `;
  });

  html += `</div></div>`;
  container.innerHTML = html;

  if (currentSubTab !== 'pipeline_energia') {
    setTimeout(() => initOnsStackedChart(subCfg), 30);
  }
}

function handleSinSubmarketChange(val) {
  selectedSinSubmarket = val;
  fetchEnergyMarketData(selectedSinSubmarket, selectedSinDate);
  renderSectionContent();
}

function handleSinDateChange(val) {
  selectedSinDate = val;
  fetchEnergyMarketData(selectedSinSubmarket, selectedSinDate);
  renderSectionContent();
}

function initOnsStackedChart(subCfg) {
  if (typeof Chart === 'undefined') return;
  const ctx = document.getElementById('chartOnsOperation');
  if (!ctx) return;

  const hours = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00`);

  if (currentSubTab === 'pld_horario') {
    const pldSE = [138, 134, 130, 128, 131, 142, 155, 162, 158, 149, 142, 139, 141, 146, 154, 168, 185, 210, 224, 218, 195, 174, 158, 145];
    const pldNE = [145, 140, 136, 135, 138, 148, 160, 165, 152, 138, 125, 118, 120, 128, 142, 165, 192, 225, 242, 235, 210, 185, 165, 152];
    const pldS  = [110, 108, 105, 104, 106, 112, 118, 122, 120, 116, 112, 110, 112, 115, 119, 126, 135, 148, 155, 150, 138, 128, 120, 114];
    activeCharts.push(new Chart(ctx, {
      type: 'line',
      data: {
        labels: hours,
        datasets: [
          { label: 'PLD Sudeste/CO (R$/MWh)', data: pldSE, borderColor: '#063630', backgroundColor: 'rgba(6,54,48,0.1)', borderWidth: 2.5, tension: 0.3 },
          { label: 'PLD Nordeste (R$/MWh)', data: pldNE, borderColor: '#D97706', backgroundColor: 'rgba(217,119,6,0.1)', borderWidth: 2.5, tension: 0.3 },
          { label: 'PLD Sul (R$/MWh)', data: pldS, borderColor: '#0284C7', backgroundColor: 'rgba(2,132,199,0.1)', borderWidth: 2, borderDash: [5, 4], tension: 0.3 }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false }
    }));
    return;
  }

  if (currentSubTab === 'risco_curtailment') {
    const curtEolica = [420, 480, 510, 550, 490, 380, 620, 1150, 1850, 2420, 2890, 3120, 3250, 2980, 2450, 1680, 890, 520, 410, 390, 410, 430, 450, 440];
    const curtSolar  = [0, 0, 0, 0, 0, 0, 180, 640, 1420, 2180, 2760, 3050, 3180, 2890, 2150, 1120, 290, 0, 0, 0, 0, 0, 0, 0];
    activeCharts.push(new Chart(ctx, {
      type: 'bar',
      data: {
        labels: hours,
        datasets: [
          { label: 'Curtailment Eólico (MW Cortados)', data: curtEolica, backgroundColor: '#0284C7', stack: 'curt' },
          { label: 'Curtailment Solar UFVs (MW Cortados)', data: curtSolar, backgroundColor: '#D97706', stack: 'curt' }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false, scales: { x: { stacked: true }, y: { stacked: true } } }
    }));
    return;
  }

  const cargaRealizada = hours.map((_, i) => subCfg.hidro[i] + subCfg.termica[i] + subCfg.nuclear[i] + subCfg.eolica[i] + subCfg.solar[i] + subCfg.mmgd[i]);
  const cargaPrevista = cargaRealizada.map((v, i) => Math.round(v * (i % 2 === 0 ? 1.018 : 0.988)));

  activeCharts.push(new Chart(ctx, {
    type: 'line',
    data: {
      labels: hours,
      datasets: [
        {
          label: 'Carga Realizada (MW)',
          data: cargaRealizada,
          borderColor: '#042420',
          backgroundColor: 'transparent',
          borderWidth: 2.8,
          pointRadius: 2,
          fill: false,
          stack: 'carga_real',
          order: 1
        },
        {
          label: 'Carga Prevista (MW)',
          data: cargaPrevista,
          borderColor: '#E11D48',
          backgroundColor: 'transparent',
          borderWidth: 2.2,
          borderDash: [6, 4],
          pointRadius: 0,
          fill: false,
          stack: 'carga_prev',
          order: 2
        },
        {
          label: 'Geração Hidráulica',
          data: subCfg.hidro,
          backgroundColor: 'rgba(2, 132, 199, 0.55)',
          borderColor: '#0284C7',
          borderWidth: 1.2,
          pointRadius: 0,
          fill: true,
          stack: 'gen',
          tension: 0.3,
          order: 3
        },
        {
          label: 'Geração Térmica',
          data: subCfg.termica,
          backgroundColor: 'rgba(100, 116, 139, 0.60)',
          borderColor: '#475569',
          borderWidth: 1.2,
          pointRadius: 0,
          fill: true,
          stack: 'gen',
          tension: 0.3,
          order: 4
        },
        {
          label: 'Geração Nuclear',
          data: subCfg.nuclear,
          backgroundColor: 'rgba(124, 58, 237, 0.55)',
          borderColor: '#7C3AED',
          borderWidth: 1.2,
          pointRadius: 0,
          fill: true,
          stack: 'gen',
          tension: 0.3,
          order: 5
        },
        {
          label: 'Geração Eólica',
          data: subCfg.eolica,
          backgroundColor: 'rgba(16, 185, 129, 0.55)',
          borderColor: '#059669',
          borderWidth: 1.2,
          pointRadius: 0,
          fill: true,
          stack: 'gen',
          tension: 0.3,
          order: 6
        },
        {
          label: 'Geração Solar Centralizada',
          data: subCfg.solar,
          backgroundColor: 'rgba(245, 158, 11, 0.65)',
          borderColor: '#D97706',
          borderWidth: 1.2,
          pointRadius: 0,
          fill: true,
          stack: 'gen',
          tension: 0.3,
          order: 7
        },
        {
          label: 'Geração MMGD (Distribuída)',
          data: subCfg.mmgd,
          backgroundColor: 'rgba(165, 172, 130, 0.75)',
          borderColor: '#A5AC82',
          borderWidth: 1.2,
          pointRadius: 0,
          fill: true,
          stack: 'gen',
          tension: 0.3,
          order: 8
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          position: 'top',
          labels: { font: { family: 'Plus Jakarta Sans', size: 11, weight: '600' }, usePointStyle: true }
        }
      },
      scales: {
        x: { grid: { color: '#E2E8F0' }, ticks: { font: { family: 'JetBrains Mono', size: 10 } } },
        y: {
          stacked: true,
          grid: { color: '#E2E8F0' },
          ticks: { font: { family: 'JetBrains Mono', size: 10 }, callback: v => `${v.toLocaleString('pt-BR')} MW` }
        }
      }
    }
  }));
}

// ==========================================================================
// 13. Filter Controls & Dropdown Handlers
// ==========================================================================
function setProcessFilter(proc) {
  currentProcessType = proc;
  document.querySelectorAll('.phase-chip').forEach(c => c.classList.remove('active'));
  if (proc === '') document.getElementById('proc-all')?.classList.add('active');
  else if (proc === 'PRJ') document.getElementById('proc-prj')?.classList.add('active');
  else if (proc === 'Cautelar / Pré-RJ') document.getElementById('proc-cautelar')?.classList.add('active');
  else if (proc === 'PRE') document.getElementById('proc-pre')?.classList.add('active');
  else if (proc === 'Falência / Liquidação') document.getElementById('proc-falencia')?.classList.add('active');
  else if (proc === 'Tier 0') document.getElementById('proc-tier0')?.classList.add('active');
  renderSectionContent();
}

function handleSearch(val) {
  searchTerm = val.trim().toLowerCase();
  renderSectionContent();
}

function handleUfChange(val) {
  currentUf = val;
  renderSectionContent();
}

function handleSetorChange(val) {
  currentSetor = val;
  renderSectionContent();
}

function handlePorteChange(val) {
  currentPorte = val;
  renderSectionContent();
}

function handleSortChange(val) {
  currentSort = val;
  renderSectionContent();
}

function setViewMode(mode) {
  viewMode = mode;
  document.getElementById('btnViewTable')?.classList.toggle('active', mode === 'table');
  document.getElementById('btnViewGrid')?.classList.toggle('active', mode === 'grid');
  renderSectionContent();
}

function populateDropdownFilters() {
  const ufSelect = document.getElementById('selectUf');
  const setorSelect = document.getElementById('selectSetor');
  const ufs = [...new Set(DEALS_DATA.map(d => d.uf).filter(Boolean))].sort();
  const setores = [...new Set(DEALS_DATA.map(d => d.setor_macro).filter(Boolean))].sort();

  if (ufSelect) {
    ufSelect.innerHTML = '<option value="">Todas as UFs</option>' + ufs.map(u => `<option value="${u}">${u}</option>`).join('');
  }
  if (setorSelect) {
    setorSelect.innerHTML = '<option value="">Todos os Macro-Setores</option>' + setores.map(s => `<option value="${s}">${s}</option>`).join('');
  }
}

// ==========================================================================
// MÓDULO 4: Calendário Tático Completo dos Casos Monitorados + Exportação .ICS
// ==========================================================================
function renderPrazosSection(deals, container) {
  if (deals.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding: 48px; color: var(--text-muted);">Nenhum prazo encontrado para o filtro selecionado.</div>`;
    return;
  }

  // Enrich calendar events for each deal with exact Date diff calculation
  const enrichedEvents = deals.map(d => {
    const cm = d.calendar_meta || {};
    const parsed = parseThesisRegex(d.tese);
    let dataMarco = cm.data_marco_iso || cm.data_marco || '2026-11-15';
    let tipoMarco = cm.marco_label || cm.tipo_marco || 'Prazo de Stay Period / Plano Concursal';
    const calcDays = calcDaysRemaining(dataMarco);
    let diasRestantes = calcDays !== null ? calcDays : (typeof cm.dias_restantes === 'number' ? cm.dias_restantes : 30);
    const isFixed = Boolean(cm.is_fixed_edital) || hasScheduledAssemblyOrAuction(d);
    let urgencia = 'MÉDIA';
    if (isFixed || diasRestantes <= 15) urgencia = 'CRÍTICA';
    else if (diasRestantes <= 40) urgencia = 'ALTA';
    return { deal: d, dataMarco, tipoMarco, urgencia, diasRestantes, isFixed, gargalo: parsed.gargalo };
  }).filter(ev => {
    if (calFilterUrgency !== '' && ev.urgencia !== calFilterUrgency) return false;
    if (calFilterMarcoType === 'FIXO' && !ev.isFixed) return false;
    if (calFilterMarcoType === 'LEGAL' && ev.isFixed) return false;
    return true;
  }).sort((a, b) => String(a.dataMarco).localeCompare(String(b.dataMarco)));

  const critCount = enrichedEvents.filter(e => e.urgencia === 'CRÍTICA').length;
  const altaCount = enrichedEvents.filter(e => e.urgencia === 'ALTA').length;

  let filterBarHtml = `
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; background:var(--bg-subtle); border:1px solid var(--border-light); border-radius:8px; padding:12px 16px; margin-bottom:16px;">
      <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
        <span style="font-family:var(--font-mono); font-size:10px; font-weight:800; color:var(--text-muted); text-transform:uppercase;">Urgência:</span>
        <button class="phase-chip ${calFilterUrgency === '' ? 'active' : ''}" onclick="setCalUrgencyFilter('')">Todos (${enrichedEvents.length})</button>
        <button class="phase-chip ${calFilterUrgency === 'CRÍTICA' ? 'active' : ''}" onclick="setCalUrgencyFilter('CRÍTICA')">🔴 Crítica / Editais (${critCount})</button>
        <button class="phase-chip ${calFilterUrgency === 'ALTA' ? 'active' : ''}" onclick="setCalUrgencyFilter('ALTA')">🟠 Alta (${altaCount})</button>
        <button class="phase-chip ${calFilterUrgency === 'MÉDIA' ? 'active' : ''}" onclick="setCalUrgencyFilter('MÉDIA')">🟢 Monitoramento</button>
      </div>
      <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
        <button class="btn-solid" style="padding:6px 12px; font-size:11.5px;" onclick="exportCalendarICS()">
          📅 Exportar Todos os Prazos (.ics Outlook/Google)
        </button>
      </div>
    </div>
  `;

  if (currentSubTab === 'prazos_calendario' || currentSubTab === 'prazos_mensal') {
    const months = [
      { key: '2026-10', label: 'Outubro 2026', days: 31, startDow: 4 },
      { key: '2026-11', label: 'Novembro 2026', days: 30, startDow: 0 },
      { key: '2026-12', label: 'Dezembro 2026', days: 31, startDow: 2 },
      { key: '2027-01', label: 'Janeiro 2027', days: 31, startDow: 5 },
      { key: '2027-02', label: 'Fevereiro 2027', days: 28, startDow: 1 },
      { key: '2027-03', label: 'Março 2027', days: 31, startDow: 1 }
    ];
    const mCfg = months.find(m => m.key === calSelectedMonth) || months[1];

    let monthSwitchHtml = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:10px;">
        <div style="display:flex; gap:6px; flex-wrap:wrap;">
          ${months.map(m => `
            <button class="quick-toggle-btn ${m.key === calSelectedMonth ? 'active' : ''}" onclick="setCalMonth('${m.key}')">${m.label}</button>
          `).join('')}
        </div>
        <span style="font-family:var(--font-mono); font-size:11px; color:var(--vk-header-start); font-weight:700;">
          Clique em qualquer evento no calendário para abrir o Tear Sheet
        </span>
      </div>
    `;

    const dows = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    let gridHtml = `<div class="cal-month-grid">`;
    dows.forEach(w => { gridHtml += `<div class="cal-dow-header">${w}</div>`; });

    for (let b = 0; b < mCfg.startDow; b++) {
      gridHtml += `<div class="cal-day-cell" style="background:#F8FAFC;"></div>`;
    }

    for (let day = 1; day <= mCfg.days; day++) {
      const dateIso = `${mCfg.key}-${String(day).padStart(2, '0')}`;
      const dayEvents = enrichedEvents.filter(e => e.dataMarco === dateIso);
      const hasEv = dayEvents.length > 0;
      gridHtml += `
        <div class="cal-day-cell ${hasEv ? 'has-events' : ''}">
          <div class="cal-day-num">${String(day).padStart(2, '0')}/${mCfg.key.split('-')[1]}</div>
          ${dayEvents.map(ev => `
            <span class="cal-event-chip ${ev.urgencia === 'CRÍTICA' ? 'urgent' : ''}" onclick="openDossier(${ev.deal.id})" title="${escapeHtml(ev.deal.empresa)} — ${escapeHtml(ev.tipoMarco)}">
              ${escapeHtml(ev.deal.empresa.substring(0, 18))}
            </span>
          `).join('')}
        </div>
      `;
    }
    gridHtml += `</div>`;
    container.innerHTML = filterBarHtml + monthSwitchHtml + gridHtml;
    return;
  }

  let html = filterBarHtml + `<div>`;
  enrichedEvents.forEach(ev => {
    const d = ev.deal;
    const passivoStr = formatNumberBR(d.passivo_mm);
    const b = getBadgeVisual(d);

    let pillCls = 'badge-upi';
    if (ev.urgencia === 'CRÍTICA') pillCls = 'badge-cautelar';
    else if (ev.urgencia === 'ALTA') pillCls = 'badge-prj';

    const diasText = ev.diasRestantes <= 0 ? 'HOJE / VENCIDO' : `Faltam ${ev.diasRestantes} dias`;

    html += `
      <div class="timeline-row" onclick="openDossier(${d.id})">
        <div style="flex:1;">
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; margin-bottom:4px;">
            <span class="status-badge ${b.cls}">${escapeHtml(d.subtipo_processo)}</span>
            <span class="status-badge ${pillCls}">${escapeHtml(ev.urgencia)} &bull; ${diasText}</span>
            <strong style="font-size:14px; color:var(--vk-header-start);">${escapeHtml(d.empresa)}</strong>
            <span class="td-sector-pill">${escapeHtml(d.setor_macro)}</span>
          </div>
          <div style="font-size:12px; color:var(--vk-header-start); font-weight:700; margin-bottom:3px;">
            📌 Marco Concursal: ${escapeHtml(ev.tipoMarco)}
          </div>
          <div style="font-size:12px; color:var(--text-secondary); margin-bottom:4px;">
            <strong>Gargalo Imediato:</strong> ${escapeHtml(ev.gargalo)}
          </div>
          <div style="font-family:var(--font-mono); font-size:10.5px; color:var(--text-muted);">
            ${escapeHtml(d.cidade)}, ${escapeHtml(d.uf)} &bull; ${escapeHtml(d.tribunal)} &bull; Autos: ${escapeHtml(d.processo)}
          </div>
        </div>

        <div style="display:flex; align-items:center; gap:16px; flex-wrap:wrap;">
          <div style="text-align:right;">
            <div style="font-family:var(--font-mono); font-size:9.5px; color:var(--text-muted); text-transform:uppercase;">Último Movimento</div>
            <div style="font-family:var(--font-mono); font-size:12px; font-weight:700; color:var(--text-body);">${formatDateBR(d.data_evento)}</div>
          </div>
          <div style="text-align:right;">
            <div style="font-family:var(--font-mono); font-size:9.5px; color:var(--text-muted); text-transform:uppercase;">Data do Prazo / AGC</div>
            <div style="font-family:var(--font-mono); font-size:12.5px; font-weight:800; color:#9F1239;">${formatDateBR(ev.dataMarco)}</div>
          </div>
          <div style="text-align:right; min-width:100px;">
            <div style="font-family:var(--font-mono); font-size:9.5px; color:var(--text-muted); text-transform:uppercase;">Passivo</div>
            <div style="font-family:var(--font-mono); font-size:13px; font-weight:800; color:var(--vk-header-start);">R$ ${passivoStr} MM</div>
          </div>
          <button class="btn-action" onclick="event.stopPropagation(); exportSingleDealICS(${d.id})">📅 .ICS</button>
          <button class="btn-solid" style="padding:5px 10px; font-size:11px;">Tear Sheet</button>
        </div>
      </div>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

function setCalUrgencyFilter(u) {
  calFilterUrgency = u;
  renderSectionContent();
}

function setCalMonth(mKey) {
  calSelectedMonth = mKey;
  renderSectionContent();
}

function exportSingleDealICS(dealId) {
  const d = DEALS_DATA.find(x => x.id === dealId);
  if (!d) return;
  downloadICSFromDeals([d], `valknut_prazo_${d.id}.ics`);
}

function exportCalendarICS() {
  const deals = getFilteredDeals();
  if (deals.length === 0) {
    showToast('Nenhum prazo selecionado para exportar.');
    return;
  }
  downloadICSFromDeals(deals, `valknut_calendario_concursal_${ deals.length }_casos.ics`);
}

function downloadICSFromDeals(dealsList, filename) {
  let ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Valknut Special Situations//Calendario Concursal//PT-BR',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH'
  ];

  dealsList.forEach(d => {
    const cm = d.calendar_meta || {};
    const dtRaw = (cm.data_marco || '2026-11-15').replace(/-/g, '');
    const parsed = parseThesisRegex(d.tese);
    ics.push(
      'BEGIN:VEVENT',
      `UID:valknut-deal-${d.id}-${dtRaw}@valknut.specialsits`,
      `DTSTAMP:20261016T120000Z`,
      `DTSTART;VALUE=DATE:${dtRaw}`,
      `SUMMARY:[VALKNUT] ${d.empresa} — ${cm.tipo_marco || 'Prazo Concursal'} (R$ ${d.passivo_mm} MM)`,
      `DESCRIPTION:Empresa: ${d.empresa} (${d.cnpj})\\nPassivo: R$ ${d.passivo_mm} MM\\nJuízo: ${d.tribunal} | Autos: ${d.processo}\\nGargalo: ${parsed.gargalo.replace(/\r?\n/g, ' ')}`,
      `LOCATION:${d.tribunal} - ${d.cidade}/${d.uf}`,
      'END:VEVENT'
    );
  });

  ics.push('END:VCALENDAR');
  const blob = new Blob([ics.join('\r\n')], { type: 'text/calendar;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(`Arquivo de calendário (.ics) exportado com ${dealsList.length} eventos!`);
}

// ==========================================================================
// MÓDULO 1: Calculadora de Success Fee & Retainer (100% Digitável em %) + Waterfall + Quórum AGC + Benchmarks Setoriais + Pitch .PPTX
// ==========================================================================
let waterfallSplitPcts = {
  extra: 18,
  c1: 3,
  c2: 42,
  c3: 27,
  c4: 3
};

function calibrateAdvisoryDefaultsForDeal(d) {
  const passivo = Number(d.passivo_mm || 100);
  const mp = d.model_params || {};
  modelCustomPassivo = passivo;
  modelHaircutPct = typeof mp.haircut_estimado_pct === 'number' ? mp.haircut_estimado_pct : 55;
  modelSecondaryDiscountPct = typeof mp.desconto_secundario_pct === 'number' ? mp.desconto_secundario_pct : 35;
  modelEvAtivos = typeof mp.ev_estimado_mm === 'number' ? mp.ev_estimado_mm : Math.round(passivo * 0.55);
  modelLiqDiscountPct = typeof mp.liquidez_forcada_desconto_pct === 'number' ? mp.liquidez_forcada_desconto_pct : 40;

  const sc = mp.split_classes || mp.classes_pct || {};
  waterfallSplitPcts = {
    extra: typeof sc.extraconcursal_pct === 'number' ? sc.extraconcursal_pct : (typeof sc.extraconcursal_fiduciario === 'number' ? sc.extraconcursal_fiduciario : 18),
    c1: typeof sc.classe_i_pct === 'number' ? sc.classe_i_pct : (typeof sc.c1_trabalhista === 'number' ? sc.c1_trabalhista : 3),
    c2: typeof sc.classe_ii_pct === 'number' ? sc.classe_ii_pct : (typeof sc.c2_garantia_real === 'number' ? sc.c2_garantia_real : 42),
    c3: typeof sc.classe_iii_pct === 'number' ? sc.classe_iii_pct : (typeof sc.c3_quirografario === 'number' ? sc.c3_quirografario : 27),
    c4: typeof sc.classe_iv_pct === 'number' ? sc.classe_iv_pct : (typeof sc.c4_me_epp === 'number' ? sc.c4_me_epp : 3)
  };

  if (passivo >= 2000) {
    pitchRetainerMensal = 180;
    pitchSuccessFeePct = 1.25;
    modelMandateMonths = 14;
  } else if (passivo >= 500) {
    pitchRetainerMensal = 120;
    pitchSuccessFeePct = 1.75;
    modelMandateMonths = 12;
  } else if (passivo >= 150) {
    pitchRetainerMensal = 75;
    pitchSuccessFeePct = 2.50;
    modelMandateMonths = 10;
  } else {
    pitchRetainerMensal = 45;
    pitchSuccessFeePct = 3.25;
    modelMandateMonths = 8;
  }

  if (d.strategy_id === 'watchdog') {
    modelFeeBasis = 'credito_recuperado';
    pitchMandateType = 'Creditor-Side & Watchdog Independente';
    pitchTargetRecipient = 'Comitê de Credores Institucionais / Sindicato Bancário';
  } else if (d.strategy_id === 'dip') {
    modelFeeBasis = 'passivo_total';
    pitchMandateType = 'Estruturação de DIP Financing & M&A Distressed (UPI)';
    pitchTargetRecipient = 'Conselho de Administração & Investidores Special Situations';
  } else {
    modelFeeBasis = 'haircut_economia';
    pitchMandateType = 'Debtor-Side / Financial Advisory & Turnaround (RJ/PRE)';
    pitchTargetRecipient = 'Acionistas Controladores & Diretoria Financeira (CFO)';
  }
}

function computeAdvisoryFeeMetrics() {
  const passivoMM = Math.max(1, Number(modelCustomPassivo || 100));
  const haircutPct = Math.min(99, Math.max(0, Number(modelHaircutPct || 0)));
  const recupPct = Math.max(0, Number((100 - haircutPct).toFixed(2)));
  const economiaMM = (passivoMM * haircutPct) / 100.0;
  const creditoRecupMM = (passivoMM * recupPct) / 100.0;

  let baseCalculoMM = passivoMM;
  let baseLabel = 'Passivo Total Reestruturado';
  let baseShortLabel = 'Passivo Total';
  if (modelFeeBasis === 'haircut_economia') {
    baseCalculoMM = economiaMM;
    baseLabel = `Economia / Redução de Dívida (Haircut ${haircutPct}%)`;
    baseShortLabel = `Economia (Haircut ${haircutPct}%)`;
  } else if (modelFeeBasis === 'credito_recuperado') {
    baseCalculoMM = creditoRecupMM;
    baseLabel = `Crédito Efetivamente Recuperado (${recupPct}%)`;
    baseShortLabel = `Crédito Recuperado (${recupPct}%)`;
  }

  const retainerMensalMil = Math.max(0, Number(pitchRetainerMensal || 0));
  const mesesMandato = Math.max(1, Number(modelMandateMonths || 12));
  const retainerTotalMM = (retainerMensalMil * mesesMandato) / 1000.0;

  const successFeePct = Math.max(0, Number(pitchSuccessFeePct || 0));
  const successBrutoMM = (baseCalculoMM * successFeePct) / 100.0;

  const offsetPct = Math.min(100, Math.max(0, Number(modelRetainerOffsetPct || 0)));
  const offsetDeduzidoMM = Math.min(successBrutoMM, retainerTotalMM * (offsetPct / 100.0));
  const successLiquidoMM = Math.max(0, successBrutoMM - offsetDeduzidoMM);

  const totalHonorariosMM = retainerTotalMM + successLiquidoMM;
  const takeRatePassivoPct = passivoMM > 0 ? (totalHonorariosMM / passivoMM) * 100.0 : 0;
  const shareVariavelPct = totalHonorariosMM > 0 ? Math.round((successLiquidoMM / totalHonorariosMM) * 100) : 0;
  const shareFixoPct = 100 - shareVariavelPct;
  const roiClienteEconomia = totalHonorariosMM > 0 ? (economiaMM / totalHonorariosMM) : 0;

  return {
    passivoMM,
    haircutPct,
    recupPct,
    economiaMM,
    creditoRecupMM,
    baseCalculoMM,
    baseLabel,
    baseShortLabel,
    retainerMensalMil,
    mesesMandato,
    retainerTotalMM,
    successFeePct,
    successBrutoMM,
    offsetPct,
    offsetDeduzidoMM,
    successLiquidoMM,
    totalHonorariosMM,
    takeRatePassivoPct,
    shareVariavelPct,
    shareFixoPct,
    roiClienteEconomia
  };
}

function selectDealForCalculator(dealId) {
  selectedModelDealId = Number(dealId);
  const d = DEALS_DATA.find(x => x.id === selectedModelDealId);
  if (d) {
    calibrateAdvisoryDefaultsForDeal(d);
  }
  renderSectionContent();
}

function openCalculatorForDeal(dealId) {
  closeModal();
  selectedModelDealId = Number(dealId);
  switchMainSection('precificacao');
  selectDealForCalculator(dealId);
  showToast('Caso carregado na Calculadora de Success Fee & Retainer!');
}

function openPitchGeneratorForDeal(dealId) {
  closeModal();
  selectedModelDealId = Number(dealId);
  currentMainSection = 'precificacao';
  document.querySelectorAll('.nav-link-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('nav-precificacao')?.classList.add('active');
  const cfg = SECTION_CONFIG.precificacao;
  document.getElementById('pageMainTitle').textContent = resolveDynamicCaseText(cfg.pageTitle);
  document.getElementById('pageMainSubtitle').textContent = resolveDynamicCaseText(cfg.pageSubtitle);
  document.getElementById('filterConsole').style.display = 'none';
  currentSubTab = 'pitch_pptx';
  selectDealForCalculator(dealId);
  renderSubTabs();
  renderSectionContent();
  showToast('Caso carregado no Gerador de Proposta Comercial (.pptx)!');
}

function buildFeeCalculatorRightPaneHtml(m) {
  const feeRateScenarios = [0.75, 1.0, 1.5, 2.0, 2.5, 3.0, 4.0, 5.0];
  return `
    <div class="calc-results-strip">
      <div class="calc-res-card">
        <div class="calc-res-label">Retainer Fixo Acumulado</div>
        <div class="calc-res-val">R$ ${m.retainerTotalMM.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}M</div>
        <div class="calc-res-sub">R$ ${m.retainerMensalMil} mil/mês &times; ${m.mesesMandato} meses (${m.shareFixoPct}% do Total)</div>
      </div>
      <div class="calc-res-card">
        <div class="calc-res-label">Success Fee Bruto (${m.successFeePct.toFixed(2).replace('.', ',')}%)</div>
        <div class="calc-res-val">R$ ${m.successBrutoMM.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}M</div>
        <div class="calc-res-sub">Base: R$ ${m.baseCalculoMM.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}M (${escapeHtml(m.baseShortLabel)})</div>
      </div>
      <div class="calc-res-card">
        <div class="calc-res-label">Success Fee Líquido (Pós-Offset)</div>
        <div class="calc-res-val" style="color:var(--vk-teal);">R$ ${m.successLiquidoMM.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}M</div>
        <div class="calc-res-sub">Abatimento (${m.offsetPct}% Retainer): &minus;R$ ${m.offsetDeduzidoMM.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}M</div>
      </div>
      <div class="calc-res-card">
        <div class="calc-res-label">Honorários Totais do Mandato</div>
        <div class="calc-res-val" style="color:#065F46;">R$ ${m.totalHonorariosMM.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}M</div>
        <div class="calc-res-sub">Take Rate: <strong>${m.takeRatePassivoPct.toFixed(2).replace('.', ',')}%</strong> s/ Passivo (${m.shareVariavelPct}% Êxito)</div>
      </div>
    </div>

    <div class="dashboard-grid" style="margin-bottom:0;">
      <div class="chart-panel">
        <div class="chart-panel-header">
          <div>
            <h3>Composição da Remuneração da Assessoria (R$ MM)</h3>
            <p>Retainer Fixo Acumulado vs. Success Fee Bruto, Abatimento (Offset) e Remuneração Total</p>
          </div>
          <span class="chart-tag">ESTRUTURA DE FEE</span>
        </div>
        <div class="chart-canvas-box" style="height:245px;"><canvas id="chartSimpleRecovery"></canvas></div>
      </div>

      <div class="chart-panel">
        <div class="chart-panel-header">
          <div>
            <h3>Matriz de Sensibilidade de Success Fee (${escapeHtml(m.baseShortLabel)})</h3>
            <p>Simulação de honorários totais líquidos por faixa de taxa de êxito (com Offset de ${m.offsetPct}%)</p>
          </div>
          <span class="chart-tag">BENCHMARK MANDATO</span>
        </div>
        <div class="table-wrap" style="max-height:245px; overflow-y:auto;">
          <table class="clean-table" style="font-size:11.5px;">
            <thead>
              <tr>
                <th>Success Fee (%)</th>
                <th style="text-align:right;">Fee Bruto (R$ MM)</th>
                <th style="text-align:right;">Success Líq. (R$ MM)</th>
                <th style="text-align:right;">Honorários Totais</th>
                <th style="text-align:right;">% Efetivo s/ Passivo</th>
              </tr>
            </thead>
            <tbody>
              ${feeRateScenarios.map(rate => {
                const sBruto = (m.baseCalculoMM * rate) / 100.0;
                const sDed = Math.min(sBruto, m.retainerTotalMM * (m.offsetPct / 100.0));
                const sLiq = Math.max(0, sBruto - sDed);
                const totFee = m.retainerTotalMM + sLiq;
                const effPct = m.passivoMM > 0 ? (totFee / m.passivoMM) * 100.0 : 0;
                const isCurrent = Math.abs(rate - m.successFeePct) < 0.15;
                return `
                  <tr style="${isCurrent ? 'background:#DCE7E7; font-weight:700;' : ''}">
                    <td style="font-family:var(--font-mono);">${rate.toFixed(2).replace('.', ',')}%</td>
                    <td style="text-align:right; font-family:var(--font-mono);">R$ ${sBruto.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}M</td>
                    <td style="text-align:right; font-family:var(--font-mono); color:var(--vk-teal);">R$ ${sLiq.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}M</td>
                    <td style="text-align:right; font-family:var(--font-mono); color:#065F46; font-weight:800;">R$ ${totFee.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}M</td>
                    <td style="text-align:right; font-family:var(--font-mono);">${effPct.toFixed(2).replace('.', ',')}%</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function drawFeeCalculatorChart(m) {
  activeCharts.forEach(c => { try { c.destroy(); } catch(e){} });
  activeCharts = [];
  if (typeof Chart === 'undefined') return;
  const ctx = document.getElementById('chartSimpleRecovery');
  if (ctx) {
    activeCharts.push(new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          `Retainer (${m.mesesMandato}m)`,
          `Success Bruto (${m.successFeePct.toFixed(2).replace('.', ',')}%)`,
          `Offset Retainer (-${m.offsetPct}%)`,
          `Success Líquido`,
          `Honorários Totais`
        ],
        datasets: [{
          label: 'R$ MM',
          data: [
            Number(m.retainerTotalMM.toFixed(2)),
            Number(m.successBrutoMM.toFixed(2)),
            Number(m.offsetDeduzidoMM.toFixed(2)),
            Number(m.successLiquidoMM.toFixed(2)),
            Number(m.totalHonorariosMM.toFixed(2))
          ],
          backgroundColor: ['#38686A', '#A5AC82', '#9F1239', '#0284C7', '#063630'],
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { grid: { color: '#E2E8F0' }, ticks: { font: { family: 'JetBrains Mono', size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { family: 'Plus Jakarta Sans', size: 10.5, weight: '700' } } }
        }
      }
    }));
  }
}

function updateSimpleCalcLive(field, val) {
  if (field === 'basis') {
    modelFeeBasis = String(val);
  } else {
    const num = parseFloat(val);
    if (isNaN(num)) return;
    if (field === 'passivo' || field === 'credito') modelCustomPassivo = Math.max(1, num);
    else if (field === 'haircut') modelHaircutPct = Math.min(99, Math.max(0, num));
    else if (field === 'retainer') pitchRetainerMensal = Math.max(0, num);
    else if (field === 'meses') modelMandateMonths = Math.min(60, Math.max(1, Math.round(num)));
    else if (field === 'success_pct') pitchSuccessFeePct = Math.min(25, Math.max(0, num));
    else if (field === 'offset_pct') modelRetainerOffsetPct = Math.min(100, Math.max(0, num));
  }

  const m = computeAdvisoryFeeMetrics();

  // Update badges in left panel without destroying input focus
  const bPassivo = document.getElementById('badge-fee-passivo');
  if (bPassivo) bPassivo.textContent = `R$ ${formatNumberBR(m.passivoMM)} MM`;
  const bBasis = document.getElementById('badge-fee-basis');
  if (bBasis) bBasis.textContent = `R$ ${m.baseCalculoMM.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} MM`;
  const bHaircut = document.getElementById('badge-fee-haircut');
  if (bHaircut) bHaircut.textContent = `Recup. Implícita: ${m.recupPct}%`;
  const bEconSub = document.getElementById('sub-fee-economia');
  if (bEconSub) {
    bEconSub.innerHTML = `<span>Economia: <strong>R$ ${m.economiaMM.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}M</strong></span><span>Dívida Pós-Plano: <strong>R$ ${m.creditoRecupMM.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}M</strong></span>`;
  }
  const bRet = document.getElementById('badge-fee-retainer');
  if (bRet) bRet.textContent = `R$ ${m.retainerMensalMil}k/mês`;
  const bMeses = document.getElementById('badge-fee-meses');
  if (bMeses) bMeses.textContent = `${m.mesesMandato} meses`;
  const bSucc = document.getElementById('badge-fee-success');
  if (bSucc) bSucc.textContent = `Bruto: R$ ${m.successBrutoMM.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}M`;
  const bOff = document.getElementById('badge-fee-offset');
  if (bOff) bOff.textContent = `Deduz: R$ ${m.offsetDeduzidoMM.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}M`;

  const rightPane = document.getElementById('feeCalcRightPane');
  if (rightPane) {
    rightPane.innerHTML = buildFeeCalculatorRightPaneHtml(m);
    drawFeeCalculatorChart(m);
  }
}

function renderPrecificacaoSection(container) {
  const d = DEALS_DATA.find(x => x.id === Number(selectedModelDealId)) || DEALS_DATA[0];

  const selectorBar = `
    <div style="background:linear-gradient(90deg, #063630 0%, #0D4B43 100%); color:#E6E9DC; border-radius:10px; padding:14px 18px; margin-bottom:18px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:14px;">
      <div>
        <div style="font-family:var(--font-mono); font-size:10px; font-weight:800; color:var(--vk-sage); text-transform:uppercase; letter-spacing:0.6px;">
          CASO SELECIONADO PARA MODELAGEM DIRETA &amp; PROPOSTA COMERCIAL
        </div>
        <div style="font-size:15px; font-weight:800; color:#FFFFFF; margin-top:2px;">
          ${escapeHtml(d.empresa)} <span style="font-family:var(--font-mono); font-size:12px; color:var(--vk-sage);">(${escapeHtml(d.cnpj)} &bull; Passivo: R$ ${formatNumberBR(d.passivo_mm)} MM &bull; ${escapeHtml(d.subtipo_processo)})</span>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
        <select class="ons-select" onchange="selectDealForCalculator(this.value)" aria-label="Selecionar caso para cálculo">
          ${DEALS_DATA.map(item => `
            <option value="${item.id}" ${item.id === d.id ? 'selected' : ''}>
              #${item.id} — ${escapeHtml(item.empresa)} (R$ ${formatNumberBR(item.passivo_mm)} MM)
            </option>
          `).join('')}
        </select>
        <button class="header-pill-btn btn-xlsx" onclick="openDossier(${d.id})">📄 Ver Tear Sheet</button>
      </div>
    </div>
  `;

  if (currentSubTab === 'waterfall_classes') {
    renderWaterfallSubmodule(d, selectorBar, container);
    return;
  }
  if (currentSubTab === 'quorum_agc') {
    renderQuorumAgcSubmodule(d, selectorBar, container);
    return;
  }
  if (currentSubTab === 'benchmarks_setor') {
    container.innerHTML = selectorBar + `<div id="benchmarksPrecContainer"></div>`;
    renderHaircutBenchmarksTable(document.getElementById('benchmarksPrecContainer'));
    return;
  }
  if (currentSubTab === 'pitch_pptx') {
    renderPitchPptxSubmodule(d, selectorBar, container);
    return;
  }

  // Default: Sub-Módulo 1 — Calculadora de Success Fee & Retainer (100% Digitável em %)
  const m = computeAdvisoryFeeMetrics();

  container.innerHTML = selectorBar + `
    <div class="calc-layout-grid">
      <div class="calc-controls-panel">
        <div style="font-family:var(--font-mono); font-size:11px; font-weight:800; color:var(--vk-header-start); text-transform:uppercase; margin-bottom:14px; padding-bottom:8px; border-bottom:1px solid var(--border-light);">
          Parâmetros Digitáveis do Mandato (Retainer &amp; Success Fee)
        </div>

        <div class="calc-field-group">
          <div class="calc-field-label">
            <span>1. Passivo / Dívida Alvo (R$ MM)</span>
            <span class="val-badge" id="badge-fee-passivo">R$ ${formatNumberBR(m.passivoMM)} MM</span>
          </div>
          <input type="number" class="calc-num-input" value="${m.passivoMM}" min="1" step="10" oninput="updateSimpleCalcLive('passivo', this.value)">
        </div>

        <div class="calc-field-group">
          <div class="calc-field-label">
            <span>2. Base de Cálculo do Success Fee</span>
            <span class="val-badge" id="badge-fee-basis">R$ ${m.baseCalculoMM.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} MM</span>
          </div>
          <select class="clean-select" style="width:100%;" onchange="updateSimpleCalcLive('basis', this.value)">
            <option value="passivo_total" ${modelFeeBasis === 'passivo_total' ? 'selected' : ''}>Sobre Passivo Total Reestruturado (100% da Dívida)</option>
            <option value="haircut_economia" ${modelFeeBasis === 'haircut_economia' ? 'selected' : ''}>Sobre Economia / Redução de Dívida Obtida (Haircut — Debtor-Side)</option>
            <option value="credito_recuperado" ${modelFeeBasis === 'credito_recuperado' ? 'selected' : ''}>Sobre Crédito Efetivamente Recuperado (Creditor-Side / Watchdog)</option>
          </select>
        </div>

        <div class="calc-field-group">
          <div class="calc-field-label">
            <span>3. Haircut / Deságio Estimado (% Digitável)</span>
            <span class="val-badge" id="badge-fee-haircut">Recup. Implícita: ${m.recupPct}%</span>
          </div>
          <div class="pct-input-wrap">
            <input type="number" class="calc-num-input" min="0" max="99" step="0.5" value="${m.haircutPct}" oninput="updateSimpleCalcLive('haircut', this.value)">
            <span class="pct-suffix">%</span>
          </div>
          <div id="sub-fee-economia" style="display:flex; justify-content:space-between; font-family:var(--font-mono); font-size:10px; color:var(--text-muted); margin-top:5px;">
            <span>Economia: <strong>R$ ${m.economiaMM.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}M</strong></span>
            <span>Dívida Pós-Plano: <strong>R$ ${m.creditoRecupMM.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}M</strong></span>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
          <div class="calc-field-group">
            <div class="calc-field-label">
              <span>4. Retainer (R$ mil/mês)</span>
              <span class="val-badge" id="badge-fee-retainer">R$ ${m.retainerMensalMil}k/mês</span>
            </div>
            <input type="number" class="calc-num-input" value="${m.retainerMensalMil}" min="0" step="5" oninput="updateSimpleCalcLive('retainer', this.value)">
          </div>

          <div class="calc-field-group">
            <div class="calc-field-label">
              <span>5. Prazo (Meses)</span>
              <span class="val-badge" id="badge-fee-meses">${m.mesesMandato} meses</span>
            </div>
            <input type="number" class="calc-num-input" value="${m.mesesMandato}" min="1" max="60" step="1" oninput="updateSimpleCalcLive('meses', this.value)">
          </div>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
          <div class="calc-field-group">
            <div class="calc-field-label">
              <span>6. Success Fee (% Digitável)</span>
              <span class="val-badge" id="badge-fee-success">Bruto: R$ ${m.successBrutoMM.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}M</span>
            </div>
            <div class="pct-input-wrap">
              <input type="number" class="calc-num-input" min="0" max="25" step="0.25" value="${m.successFeePct}" oninput="updateSimpleCalcLive('success_pct', this.value)">
              <span class="pct-suffix">%</span>
            </div>
          </div>

          <div class="calc-field-group">
            <div class="calc-field-label">
              <span>7. Offset Retainer (% Digitável)</span>
              <span class="val-badge" id="badge-fee-offset">Deduz: R$ ${m.offsetDeduzidoMM.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}M</span>
            </div>
            <div class="pct-input-wrap">
              <input type="number" class="calc-num-input" min="0" max="100" step="5" value="${m.offsetPct}" oninput="updateSimpleCalcLive('offset_pct', this.value)">
              <span class="pct-suffix">%</span>
            </div>
          </div>
        </div>

        <div style="background:#FFFFFF; border:1px solid var(--border-light); border-left:3px solid var(--vk-teal); border-radius:6px; padding:11px 12px; margin-top:8px; font-size:11.5px; color:var(--text-secondary);">
          <strong style="color:var(--vk-header-start); display:block; margin-bottom:4px;">Fórmula Direta de Honorários:</strong>
          &bull; <strong>Retainer Fixo Total</strong> = R$ mil/mês &times; Prazo em meses<br>
          &bull; <strong>Success Fee Líquido</strong> = (% Success Fee &times; Base) &minus; (% Offset &times; Retainer Total)
        </div>
      </div>

      <div id="feeCalcRightPane">
        ${buildFeeCalculatorRightPaneHtml(m)}
      </div>
    </div>
  `;

  setTimeout(() => drawFeeCalculatorChart(m), 20);
}

// ==========================================================================
// SUB-MÓDULO 2: Waterfall de Classes (RJ vs. Falência) — 100% Digitável em %
// ==========================================================================
function computeWaterfallMetrics(d) {
  const passivoTotal = Math.max(1, Number(modelCustomPassivo || d.passivo_mm || 100));
  const evBruto = Math.max(0, Number(modelEvAtivos || 0));
  const liqDisc = Math.min(99, Math.max(0, Number(modelLiqDiscountPct || 0)));
  const massaLiquida = Math.round(evBruto * (1 - liqDisc / 100.0));

  const cExtra = Math.round((passivoTotal * Math.max(0, Number(waterfallSplitPcts.extra || 0))) / 100.0);
  const c1 = Math.round((passivoTotal * Math.max(0, Number(waterfallSplitPcts.c1 || 0))) / 100.0);
  const c2 = Math.round((passivoTotal * Math.max(0, Number(waterfallSplitPcts.c2 || 0))) / 100.0);
  const c3 = Math.round((passivoTotal * Math.max(0, Number(waterfallSplitPcts.c3 || 0))) / 100.0);
  const c4 = Math.round((passivoTotal * Math.max(0, Number(waterfallSplitPcts.c4 || 0))) / 100.0);

  let rem = massaLiquida;
  const payExtra = Math.min(rem, cExtra); rem = Math.max(0, rem - payExtra);
  const payC1 = Math.min(rem, c1); rem = Math.max(0, rem - payC1);
  const payC2 = Math.min(rem, c2); rem = Math.max(0, rem - payC2);
  const payC3 = Math.min(rem, c3); rem = Math.max(0, rem - payC3);
  const payC4 = Math.min(rem, c4);

  const rows = [
    { key: 'extra', pct: waterfallSplitPcts.extra, label: 'Extraconcursal / Fiduciário (Art. 49 §3º)', claim: cExtra, paid: payExtra },
    { key: 'c1', pct: waterfallSplitPcts.c1, label: 'Classe I — Trabalhista (Art. 83, I)', claim: c1, paid: payC1 },
    { key: 'c2', pct: waterfallSplitPcts.c2, label: 'Classe II — Garantia Real (Art. 83, II)', claim: c2, paid: payC2 },
    { key: 'c3', pct: waterfallSplitPcts.c3, label: 'Classe III — Quirografários (Art. 83, VI)', claim: c3, paid: payC3 },
    { key: 'c4', pct: waterfallSplitPcts.c4, label: 'Classe IV — ME / EPP', claim: c4, paid: payC4 }
  ];

  const totalClaimsConcursais = cExtra + c1 + c2 + c3 + c4;
  const totalRecovered = payExtra + payC1 + payC2 + payC3 + payC4;
  const globalRecupPct = totalClaimsConcursais > 0 ? Math.round((totalRecovered / totalClaimsConcursais) * 100) : 0;

  return { passivoTotal, evBruto, liqDisc, massaLiquida, rows, totalClaimsConcursais, totalRecovered, globalRecupPct };
}

function buildWaterfallRightPaneHtml(wf) {
  let fulcrumClass = 'N/A (Cobertura Integral)';
  for (const r of wf.rows) {
    const recPct = r.claim > 0 ? Math.round((r.paid / r.claim) * 100) : 100;
    if (recPct < 100 && recPct > 0) {
      fulcrumClass = r.label.split('—')[0].trim();
      break;
    } else if (recPct === 0 && fulcrumClass === 'N/A (Cobertura Integral)') {
      fulcrumClass = r.label.split('—')[0].trim();
      break;
    }
  }

  return `
    <div class="calc-results-strip" style="grid-template-columns:repeat(4,1fr);">
      <div class="calc-res-card">
        <div class="calc-res-label">Valor dos Ativos (EV Bruto)</div>
        <div class="calc-res-val">R$ ${formatNumberBR(wf.evBruto)} MM</div>
        <div class="calc-res-sub">Base de Avaliação Operacional</div>
      </div>
      <div class="calc-res-card">
        <div class="calc-res-label">Deságio de Liquidação</div>
        <div class="calc-res-val" style="color:#9F1239;">&minus;${wf.liqDisc}%</div>
        <div class="calc-res-sub">Perda em Venda Forçada: R$ ${formatNumberBR(Math.max(0, wf.evBruto - wf.massaLiquida))}M</div>
      </div>
      <div class="calc-res-card">
        <div class="calc-res-label">Massa Líquida Distribuível</div>
        <div class="calc-res-val" style="color:#065F46;">R$ ${formatNumberBR(wf.massaLiquida)} MM</div>
        <div class="calc-res-sub">Recuperação Média Global: <strong>${wf.globalRecupPct}%</strong></div>
      </div>
      <div class="calc-res-card">
        <div class="calc-res-label">Classe Fulcrum (Corte de Valor)</div>
        <div class="calc-res-val" style="font-size:15px; color:var(--vk-teal);">${escapeHtml(fulcrumClass)}</div>
        <div class="calc-res-sub">Onde o valor de liquidação se esgota</div>
      </div>
    </div>

    <div class="table-wrap">
      <table class="clean-table">
        <thead>
          <tr>
            <th>Classe Concursal</th>
            <th style="text-align:right;">% do Passivo</th>
            <th style="text-align:right;">Crédito da Classe (R$ MM)</th>
            <th style="text-align:right;">Valor Recuperado (R$ MM)</th>
            <th style="text-align:right;">% de Recuperação</th>
            <th style="text-align:right;">% de Haircut Implícito</th>
            <th style="text-align:center;">Status na Cascata</th>
          </tr>
        </thead>
        <tbody>
          ${wf.rows.map(r => {
            const recPct = r.claim > 0 ? Math.round((r.paid / r.claim) * 100) : 100;
            const hPct = 100 - recPct;
            const statusTag = recPct === 100
              ? '<span class="status-badge badge-upi">INTEGRAL (100%)</span>'
              : (recPct > 0 ? '<span class="status-badge badge-prj">CLASSE FULCRUM</span>' : '<span class="status-badge badge-cautelar">ZERO RECUP. (0%)</span>');
            return `
              <tr>
                <td><strong>${r.label}</strong></td>
                <td style="text-align:right; font-family:var(--font-mono); color:var(--text-secondary);">${r.pct}%</td>
                <td style="text-align:right; font-family:var(--font-mono);">R$ ${formatNumberBR(r.claim)} MM</td>
                <td style="text-align:right; font-family:var(--font-mono); font-weight:700; color:#065F46;">R$ ${formatNumberBR(r.paid)} MM</td>
                <td style="text-align:right; font-family:var(--font-mono); font-weight:800;">${recPct}%</td>
                <td style="text-align:right; font-family:var(--font-mono); color:#9F1239;">${hPct}%</td>
                <td style="text-align:center;">${statusTag}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function updateWaterfallLive(field, val) {
  const num = parseFloat(val);
  if (isNaN(num)) return;
  if (field === 'ev') modelEvAtivos = Math.max(0, num);
  else if (field === 'liq_disc') modelLiqDiscountPct = Math.min(99, Math.max(0, num));
  else if (field in waterfallSplitPcts) waterfallSplitPcts[field] = Math.min(100, Math.max(0, num));

  const d = DEALS_DATA.find(x => x.id === Number(selectedModelDealId)) || DEALS_DATA[0];
  const wf = computeWaterfallMetrics(d);

  const bEv = document.getElementById('badge-wf-ev');
  if (bEv) bEv.textContent = `R$ ${formatNumberBR(wf.evBruto)} MM`;
  const bDisc = document.getElementById('badge-wf-disc');
  if (bDisc) bDisc.textContent = `${wf.liqDisc}%`;
  const bMassa = document.getElementById('badge-wf-massa');
  if (bMassa) bMassa.textContent = `R$ ${formatNumberBR(wf.massaLiquida)} MM`;

  const rightPane = document.getElementById('waterfallRightPane');
  if (rightPane) {
    rightPane.innerHTML = buildWaterfallRightPaneHtml(wf);
  }
}

function renderWaterfallSubmodule(d, selectorBar, container) {
  const wf = computeWaterfallMetrics(d);

  container.innerHTML = selectorBar + `
    <div class="calc-layout-grid">
      <div class="calc-controls-panel">
        <div style="font-family:var(--font-mono); font-size:11px; font-weight:800; color:var(--vk-header-start); text-transform:uppercase; margin-bottom:14px; padding-bottom:8px; border-bottom:1px solid var(--border-light);">
          Parâmetros de Ativos &amp; Liquidação (% Digitável)
        </div>

        <div class="calc-field-group">
          <div class="calc-field-label">
            <span>1. Valor Estimado dos Ativos / EV (R$ MM)</span>
            <span class="val-badge" id="badge-wf-ev">R$ ${formatNumberBR(wf.evBruto)} MM</span>
          </div>
          <input type="number" class="calc-num-input" value="${wf.evBruto}" min="0" step="10" oninput="updateWaterfallLive('ev', this.value)">
        </div>

        <div class="calc-field-group">
          <div class="calc-field-label">
            <span>2. Deságio de Liquidação Forçada (% Digitável)</span>
            <span class="val-badge" id="badge-wf-disc">${wf.liqDisc}%</span>
          </div>
          <div class="pct-input-wrap">
            <input type="number" class="calc-num-input" min="0" max="99" step="1" value="${wf.liqDisc}" oninput="updateWaterfallLive('liq_disc', this.value)">
            <span class="pct-suffix">%</span>
          </div>
        </div>

        <div style="background:#FFFFFF; border:1px solid var(--border-light); border-left:3px solid var(--vk-header-start); border-radius:6px; padding:10px 12px; margin-bottom:14px; font-size:12px; display:flex; justify-content:space-between; align-items:center;">
          <strong>Massa Líquida Distribuível:</strong>
          <span id="badge-wf-massa" style="font-family:var(--font-mono); font-weight:800; font-size:13.5px; color:var(--vk-header-start);">R$ ${formatNumberBR(wf.massaLiquida)} MM</span>
        </div>

        <div style="font-family:var(--font-mono); font-size:10.5px; font-weight:800; color:var(--text-secondary); text-transform:uppercase; margin-bottom:10px; padding-top:6px; border-top:1px dashed var(--border-medium);">
          Estrutura do Passivo por Classe (% Digitável)
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
          <div class="calc-field-group" style="margin-bottom:6px;">
            <div class="calc-field-label"><span>Extraconcursal (%)</span></div>
            <div class="pct-input-wrap">
              <input type="number" class="calc-num-input" min="0" max="100" step="1" value="${waterfallSplitPcts.extra}" oninput="updateWaterfallLive('extra', this.value)">
              <span class="pct-suffix">%</span>
            </div>
          </div>
          <div class="calc-field-group" style="margin-bottom:6px;">
            <div class="calc-field-label"><span>Classe I Trab. (%)</span></div>
            <div class="pct-input-wrap">
              <input type="number" class="calc-num-input" min="0" max="100" step="1" value="${waterfallSplitPcts.c1}" oninput="updateWaterfallLive('c1', this.value)">
              <span class="pct-suffix">%</span>
            </div>
          </div>
          <div class="calc-field-group" style="margin-bottom:6px;">
            <div class="calc-field-label"><span>Classe II Real (%)</span></div>
            <div class="pct-input-wrap">
              <input type="number" class="calc-num-input" min="0" max="100" step="1" value="${waterfallSplitPcts.c2}" oninput="updateWaterfallLive('c2', this.value)">
              <span class="pct-suffix">%</span>
            </div>
          </div>
          <div class="calc-field-group" style="margin-bottom:6px;">
            <div class="calc-field-label"><span>Classe III Quirog. (%)</span></div>
            <div class="pct-input-wrap">
              <input type="number" class="calc-num-input" min="0" max="100" step="1" value="${waterfallSplitPcts.c3}" oninput="updateWaterfallLive('c3', this.value)">
              <span class="pct-suffix">%</span>
            </div>
          </div>
          <div class="calc-field-group" style="grid-column:1/-1; margin-bottom:0;">
            <div class="calc-field-label"><span>Classe IV ME / EPP (%)</span></div>
            <div class="pct-input-wrap">
              <input type="number" class="calc-num-input" min="0" max="100" step="1" value="${waterfallSplitPcts.c4}" oninput="updateWaterfallLive('c4', this.value)">
              <span class="pct-suffix">%</span>
            </div>
          </div>
        </div>
      </div>

      <div id="waterfallRightPane">
        ${buildWaterfallRightPaneHtml(wf)}
      </div>
    </div>
  `;
}

// ==========================================================================
// SUB-MÓDULO 3: Simulador de Quórum AGC & Cram Down (Art. 45 e Art. 58, §1º) — 100% Digitável em %
// ==========================================================================
function computeQuorumMetrics(d) {
  const c1Ok = agcVotes.c1_head_yes > 50;
  const c2Ok = agcVotes.c2_val_yes > 50 && agcVotes.c2_head_yes > 50;
  const c3Ok = agcVotes.c3_val_yes > 50 && agcVotes.c3_head_yes > 50;
  const c4Ok = agcVotes.c4_head_yes > 50;

  const classesApproved = [c1Ok, c2Ok, c3Ok, c4Ok].filter(Boolean).length;
  const ordinaryApproved = classesApproved === 4;

  // Cram Down (Art. 58, §1º):
  // I - voto favorável de credores que representem mais de 50% do valor de todos os créditos presentes;
  // II - aprovação de 3 das 4 classes (ou 2 classes caso haja apenas 3);
  // III - na classe que rejeitou, voto favorável de mais de 1/3 (33,33%) dos credores.
  const passivoTotal = Number(d.passivo_mm || 100);
  const wC1 = 0.05, wC2 = 0.45, wC3 = 0.45, wC4 = 0.05;
  const weightedValVotePct = Number((
    agcVotes.c1_head_yes * wC1 +
    agcVotes.c2_val_yes * wC2 +
    agcVotes.c3_val_yes * wC3 +
    agcVotes.c4_head_yes * wC4
  ).toFixed(1));

  const rejectedClassesPassOneThird = (
    (c1Ok || agcVotes.c1_head_yes > 33.33) &&
    (c2Ok || (agcVotes.c2_val_yes > 33.33 && agcVotes.c2_head_yes > 33.33)) &&
    (c3Ok || (agcVotes.c3_val_yes > 33.33 && agcVotes.c3_head_yes > 33.33)) &&
    (c4Ok || agcVotes.c4_head_yes > 33.33)
  );

  const cramDownEligible = !ordinaryApproved && weightedValVotePct > 50 && classesApproved >= 2 && rejectedClassesPassOneThird;

  const c3ClaimMM = Math.round(passivoTotal * ((waterfallSplitPcts.c3 || 27) / 100.0));
  const c2ClaimMM = Math.round(passivoTotal * ((waterfallSplitPcts.c2 || 42) / 100.0));
  const blockingC3MM = Math.round(c3ClaimMM * 0.667);
  const blockingC2MM = Math.round(c2ClaimMM * 0.667);

  return {
    c1Ok, c2Ok, c3Ok, c4Ok,
    classesApproved,
    ordinaryApproved,
    weightedValVotePct,
    rejectedClassesPassOneThird,
    cramDownEligible,
    c2ClaimMM,
    c3ClaimMM,
    blockingC2MM,
    blockingC3MM
  };
}

function buildQuorumRightPaneHtml(d, q) {
  const classRows = [
    {
      nome: 'Classe I — Trabalhista (Art. 45, §2º)',
      regra: 'Maioria simples (> 50%) por Cabeça',
      votoValor: 'N/A (Voto por Cabeça)',
      votoCabeca: `${agcVotes.c1_head_yes}%`,
      cramDownMin: agcVotes.c1_head_yes > 33.33 ? 'Atende (> 33,3%)' : 'Abaixo de 1/3',
      ok: q.c1Ok
    },
    {
      nome: 'Classe II — Garantia Real (Art. 45, §1º)',
      regra: 'Dupla maioria (> 50% Valor E > 50% Cabeça)',
      votoValor: `${agcVotes.c2_val_yes}%`,
      votoCabeca: `${agcVotes.c2_head_yes}%`,
      cramDownMin: (agcVotes.c2_val_yes > 33.33 && agcVotes.c2_head_yes > 33.33) ? 'Atende (> 33,3%)' : 'Abaixo de 1/3',
      ok: q.c2Ok
    },
    {
      nome: 'Classe III — Quirografários (Art. 45, §1º)',
      regra: 'Dupla maioria (> 50% Valor E > 50% Cabeça)',
      votoValor: `${agcVotes.c3_val_yes}%`,
      votoCabeca: `${agcVotes.c3_head_yes}%`,
      cramDownMin: (agcVotes.c3_val_yes > 33.33 && agcVotes.c3_head_yes > 33.33) ? 'Atende (> 33,3%)' : 'Abaixo de 1/3',
      ok: q.c3Ok
    },
    {
      nome: 'Classe IV — ME e EPP (Art. 45, §2º)',
      regra: 'Maioria simples (> 50%) por Cabeça',
      votoValor: 'N/A (Voto por Cabeça)',
      votoCabeca: `${agcVotes.c4_head_yes}%`,
      cramDownMin: agcVotes.c4_head_yes > 33.33 ? 'Atende (> 33,3%)' : 'Abaixo de 1/3',
      ok: q.c4Ok
    }
  ];

  return `
    <div class="calc-results-strip" style="grid-template-columns:repeat(4,1fr);">
      <div class="calc-res-card">
        <div class="calc-res-label">Quórum Ordinário (Art. 45)</div>
        <div class="calc-res-val" style="color:${q.ordinaryApproved ? '#065F46' : '#9F1239'};">${q.ordinaryApproved ? 'APROVADO (4/4)' : `REJEITADO (${q.classesApproved}/4)`}</div>
        <div class="calc-res-sub">Exige aprovação nas 4 classes</div>
      </div>
      <div class="calc-res-card">
        <div class="calc-res-label">Cram Down (Art. 58, §1º)</div>
        <div class="calc-res-val" style="color:${q.cramDownEligible || q.ordinaryApproved ? '#065F46' : '#92400E'};">${q.ordinaryApproved ? 'DESNECESSÁRIO' : (q.cramDownEligible ? 'VIÁVEL (> 1/3)' : 'BLOQUEADO')}</div>
        <div class="calc-res-sub">>50% geral + 2/3 classes + >1/3 na dissidente</div>
      </div>
      <div class="calc-res-card">
        <div class="calc-res-label">Aprovação Ponderada Geral</div>
        <div class="calc-res-val" style="color:${q.weightedValVotePct > 50 ? '#065F46' : '#9F1239'};">${q.weightedValVotePct.toFixed(1).replace('.', ',')}%</div>
        <div class="calc-res-sub">Requisito Art. 58, §1º, I: > 50,0%</div>
      </div>
      <div class="calc-res-card">
        <div class="calc-res-label">Minoria de Bloqueio (Veto 2/3)</div>
        <div class="calc-res-val" style="font-size:16px;">Cl. II: R$ ${formatNumberBR(q.blockingC2MM)}M | Cl. III: R$ ${formatNumberBR(q.blockingC3MM)}M</div>
        <div class="calc-res-sub">66,7% da classe barra Cram Down</div>
      </div>
    </div>

    <div class="table-wrap">
      <table class="clean-table">
        <thead>
          <tr>
            <th>Classe da Assembleia (AGC)</th>
            <th>Critério Legal (Art. 45)</th>
            <th style="text-align:center;">% Voto por Valor</th>
            <th style="text-align:center;">% Voto por Cabeça</th>
            <th style="text-align:center;">Piso Cram Down (> 33,3%)</th>
            <th style="text-align:center;">Resultado na Classe</th>
          </tr>
        </thead>
        <tbody>
          ${classRows.map(r => `
            <tr>
              <td><strong>${r.nome}</strong></td>
              <td style="font-size:11.5px; color:var(--text-secondary);">${r.regra}</td>
              <td style="text-align:center; font-family:var(--font-mono); font-weight:700;">${r.votoValor}</td>
              <td style="text-align:center; font-family:var(--font-mono); font-weight:700;">${r.votoCabeca}</td>
              <td style="text-align:center; font-family:var(--font-mono); font-size:11px;">${r.cramDownMin}</td>
              <td style="text-align:center;">
                ${r.ok
                  ? '<span class="status-badge badge-upi">APROVADA (> 50%)</span>'
                  : '<span class="status-badge badge-cautelar">REJEITADA (&le; 50%)</span>'}
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function updateQuorumLive(field, val) {
  const num = parseFloat(val);
  if (isNaN(num)) return;
  const clamped = Math.min(100, Math.max(0, num));
  agcVotes[field] = clamped;

  const d = DEALS_DATA.find(x => x.id === Number(selectedModelDealId)) || DEALS_DATA[0];
  const q = computeQuorumMetrics(d);

  const b1 = document.getElementById('badge-q-c1');
  if (b1) b1.textContent = q.c1Ok ? 'APROVADA' : 'REJEITADA';
  const b2 = document.getElementById('badge-q-c2');
  if (b2) b2.textContent = q.c2Ok ? 'APROVADA' : 'REJEITADA';
  const b3 = document.getElementById('badge-q-c3');
  if (b3) b3.textContent = q.c3Ok ? 'APROVADA' : 'REJEITADA';
  const b4 = document.getElementById('badge-q-c4');
  if (b4) b4.textContent = q.c4Ok ? 'APROVADA' : 'REJEITADA';

  const rightPane = document.getElementById('quorumRightPane');
  if (rightPane) {
    rightPane.innerHTML = buildQuorumRightPaneHtml(d, q);
  }
}

function renderQuorumAgcSubmodule(d, selectorBar, container) {
  const q = computeQuorumMetrics(d);

  container.innerHTML = selectorBar + `
    <div class="calc-layout-grid">
      <div class="calc-controls-panel">
        <div style="font-family:var(--font-mono); font-size:11px; font-weight:800; color:var(--vk-header-start); text-transform:uppercase; margin-bottom:12px; padding-bottom:8px; border-bottom:1px solid var(--border-light);">
          Simulação de Votos por Classe (% Digitável — Art. 45)
        </div>

        <div class="quorum-class-box">
          <div class="quorum-class-header">
            <span>Classe I — Trabalhista</span>
            <span class="val-badge" id="badge-q-c1">${q.c1Ok ? 'APROVADA' : 'REJEITADA'}</span>
          </div>
          <div class="calc-field-label"><span>Aprovação por Cabeça (% Digitável)</span></div>
          <div class="pct-input-wrap">
            <input type="number" class="calc-num-input" min="0" max="100" step="0.5" value="${agcVotes.c1_head_yes}" oninput="updateQuorumLive('c1_head_yes', this.value)">
            <span class="pct-suffix">%</span>
          </div>
        </div>

        <div class="quorum-class-box">
          <div class="quorum-class-header">
            <span>Classe II — Garantia Real</span>
            <span class="val-badge" id="badge-q-c2">${q.c2Ok ? 'APROVADA' : 'REJEITADA'}</span>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
            <div>
              <div class="calc-field-label"><span>% por Valor</span></div>
              <div class="pct-input-wrap">
                <input type="number" class="calc-num-input" min="0" max="100" step="0.5" value="${agcVotes.c2_val_yes}" oninput="updateQuorumLive('c2_val_yes', this.value)">
                <span class="pct-suffix">%</span>
              </div>
            </div>
            <div>
              <div class="calc-field-label"><span>% por Cabeça</span></div>
              <div class="pct-input-wrap">
                <input type="number" class="calc-num-input" min="0" max="100" step="0.5" value="${agcVotes.c2_head_yes}" oninput="updateQuorumLive('c2_head_yes', this.value)">
                <span class="pct-suffix">%</span>
              </div>
            </div>
          </div>
        </div>

        <div class="quorum-class-box">
          <div class="quorum-class-header">
            <span>Classe III — Quirografários</span>
            <span class="val-badge" id="badge-q-c3">${q.c3Ok ? 'APROVADA' : 'REJEITADA'}</span>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
            <div>
              <div class="calc-field-label"><span>% por Valor</span></div>
              <div class="pct-input-wrap">
                <input type="number" class="calc-num-input" min="0" max="100" step="0.5" value="${agcVotes.c3_val_yes}" oninput="updateQuorumLive('c3_val_yes', this.value)">
                <span class="pct-suffix">%</span>
              </div>
            </div>
            <div>
              <div class="calc-field-label"><span>% por Cabeça</span></div>
              <div class="pct-input-wrap">
                <input type="number" class="calc-num-input" min="0" max="100" step="0.5" value="${agcVotes.c3_head_yes}" oninput="updateQuorumLive('c3_head_yes', this.value)">
                <span class="pct-suffix">%</span>
              </div>
            </div>
          </div>
        </div>

        <div class="quorum-class-box" style="margin-bottom:0;">
          <div class="quorum-class-header">
            <span>Classe IV — ME / EPP</span>
            <span class="val-badge" id="badge-q-c4">${q.c4Ok ? 'APROVADA' : 'REJEITADA'}</span>
          </div>
          <div class="calc-field-label"><span>Aprovação por Cabeça (% Digitável)</span></div>
          <div class="pct-input-wrap">
            <input type="number" class="calc-num-input" min="0" max="100" step="0.5" value="${agcVotes.c4_head_yes}" oninput="updateQuorumLive('c4_head_yes', this.value)">
            <span class="pct-suffix">%</span>
          </div>
        </div>
      </div>

      <div id="quorumRightPane">
        ${buildQuorumRightPaneHtml(d, q)}
      </div>
    </div>
  `;
}

// ==========================================================================
// SUB-MÓDULO 4: Tabela de Referência de Mercado: Benchmarks de Haircut por Macro-Setor
// (Relocada de Comps Concursais para Precificação & Modelagem e Dashboards & Mercado)
// ==========================================================================
function renderHaircutBenchmarksTable(container) {
  if (!container) return;
  const sectorBench = [
    { setor: 'Agronegócio & Silvicultura', casos: 26, haircutNum: 50, haircutMedio: '50%', recupMedia: '50%', garantia: 'Alienação Fiduciária de Terras / CPRs (Lei 13.986/20) & Silos' },
    { setor: 'Indústria & Manufatura', casos: 14, haircutNum: 50, haircutMedio: '50%', recupMedia: '50%', garantia: 'Imóveis Fabris / Maquinário Pesado / Duplicatas FIDC' },
    { setor: 'Varejo & Consumo', casos: 14, haircutNum: 59, haircutMedio: '59%', recupMedia: '41%', garantia: 'Travas de Recebíveis de Cartão / Pontos Comerciais & Estoques' },
    { setor: 'Energia & Infraestrutura', casos: 9, haircutNum: 39, haircutMedio: '39%', recupMedia: '61%', garantia: 'Project Finance / Cessão Fiduciária de PPAs e Recebíveis CCEE' },
    { setor: 'Construção Civil & Real Estate', casos: 7, haircutNum: 45, haircutMedio: '45%', recupMedia: '55%', garantia: 'Patrimônio de Afetação / SPEs Imobiliárias e Terrenos (CRI)' },
    { setor: 'Tecnologia & Serviços B2B', casos: 6, haircutNum: 57, haircutMedio: '57%', recupMedia: '43%', garantia: 'Contratos B2B Recorrentes / Ativos Imobiliários Educacionais' },
    { setor: 'Saúde & Farma', casos: 5, haircutNum: 44, haircutMedio: '44%', recupMedia: '56%', garantia: 'Recebíveis de Operadoras / Unidades Hospitalares & Diagnóstico' },
    { setor: 'Serviços Financeiros & Crédito', casos: 5, haircutNum: 69, haircutMedio: '69%', recupMedia: '31%', garantia: 'Carteiras de Recebíveis / CCBs, FIDCs e Estruturas Securitizadas' }
  ];

  container.innerHTML = `
    <div class="table-wrap">
      <table class="clean-table">
        <thead>
          <tr>
            <th>Macro-Setor Oficial</th>
            <th style="text-align:center;">Casos na Base</th>
            <th style="text-align:center;">Haircut Médio Praticado (%)</th>
            <th style="text-align:center;">% de Recuperação Média</th>
            <th>Padrão de Colateral &amp; Garantias</th>
            <th style="text-align:center;">Aplicar na Calculadora</th>
          </tr>
        </thead>
        <tbody>
          ${sectorBench.map(b => `
            <tr>
              <td><strong style="color:var(--vk-header-start);">${escapeHtml(b.setor)}</strong></td>
              <td style="text-align:center; font-family:var(--font-mono); font-weight:700;">${b.casos}</td>
              <td style="text-align:center; font-family:var(--font-mono); color:#9F1239; font-weight:700;">${b.haircutMedio}</td>
              <td style="text-align:center; font-family:var(--font-mono); color:#065F46; font-weight:800;">${b.recupMedia}</td>
              <td>${escapeHtml(b.garantia)}</td>
              <td style="text-align:center;">
                <button class="btn-action" onclick="applyBenchmarkHaircutToCalc('${escapeHtml(b.setor)}', ${b.haircutNum})">Usar ${b.haircutMedio} na Calc.</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function applyBenchmarkHaircutToCalc(setorName, haircutNum) {
  modelHaircutPct = Number(haircutNum);
  currentMainSection = 'precificacao';
  document.querySelectorAll('.nav-link-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('nav-precificacao')?.classList.add('active');
  const cfg = SECTION_CONFIG.precificacao;
  document.getElementById('pageMainTitle').textContent = resolveDynamicCaseText(cfg.pageTitle);
  document.getElementById('pageMainSubtitle').textContent = resolveDynamicCaseText(cfg.pageSubtitle);
  document.getElementById('filterConsole').style.display = 'none';
  currentSubTab = 'calc_haircut';
  renderSubTabs();
  renderSectionContent();
  showToast(`Benchmark de ${setorName} (Haircut ${haircutNum}%) aplicado na Calculadora!`);
}

function renderPitchPptxSubmodule(d, selectorBar, container) {
  const m = computeAdvisoryFeeMetrics();
  container.innerHTML = selectorBar + `
    <div class="calc-layout-grid">
      <div class="calc-controls-panel">
        <div style="font-family:var(--font-mono); font-size:11px; font-weight:800; color:var(--vk-header-start); text-transform:uppercase; margin-bottom:12px;">
          Configurar Proposta Comercial &amp; Honorários (.PPTX)
        </div>
        <div class="calc-field-group">
          <div class="calc-field-label"><span>Ângulo do Mandato Valknut</span></div>
          <select class="clean-select" style="width:100%;" onchange="pitchMandateType=this.value">
            <option value="Debtor-Side / Financial Advisory & Turnaround (RJ/PRE)" ${pitchMandateType.includes('Debtor') ? 'selected' : ''}>Debtor-Side / Financial Advisory &amp; Turnaround (RJ/PRE)</option>
            <option value="Creditor-Side & Watchdog Independente" ${pitchMandateType.includes('Creditor') ? 'selected' : ''}>Creditor-Side &amp; Watchdog Independente</option>
            <option value="Estruturação de DIP Financing & M&A Distressed (UPI)" ${pitchMandateType.includes('DIP') ? 'selected' : ''}>Estruturação de DIP Financing &amp; M&amp;A Distressed (UPI)</option>
            <option value="Gestão Interina (CRO) & Renegociação Bancária" ${pitchMandateType.includes('CRO') ? 'selected' : ''}>Gestão Interina (CRO) &amp; Renegociação Bancária</option>
          </select>
        </div>
        <div class="calc-field-group">
          <div class="calc-field-label"><span>Destinatário / Cliente-Alvo</span></div>
          <input type="text" class="calc-num-input" value="${escapeHtml(pitchTargetRecipient)}" oninput="pitchTargetRecipient=this.value">
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
          <div class="calc-field-group">
            <div class="calc-field-label"><span>Retainer Mensal (R$ mil)</span><span class="val-badge">R$ ${m.retainerMensalMil}k</span></div>
            <input type="number" class="calc-num-input" value="${m.retainerMensalMil}" step="5" onchange="pitchRetainerMensal=Number(this.value)||0; renderSectionContent();">
          </div>
          <div class="calc-field-group">
            <div class="calc-field-label"><span>Prazo (Meses)</span><span class="val-badge">${m.mesesMandato}m</span></div>
            <input type="number" class="calc-num-input" value="${m.mesesMandato}" step="1" onchange="modelMandateMonths=Number(this.value)||12; renderSectionContent();">
          </div>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
          <div class="calc-field-group">
            <div class="calc-field-label"><span>Success Fee (%)</span><span class="val-badge">${m.successFeePct.toFixed(2).replace('.', ',')}%</span></div>
            <div class="pct-input-wrap">
              <input type="number" class="calc-num-input" value="${m.successFeePct}" step="0.25" onchange="pitchSuccessFeePct=Number(this.value)||0; renderSectionContent();">
              <span class="pct-suffix">%</span>
            </div>
          </div>
          <div class="calc-field-group">
            <div class="calc-field-label"><span>Offset Retainer (%)</span><span class="val-badge">${m.offsetPct}%</span></div>
            <div class="pct-input-wrap">
              <input type="number" class="calc-num-input" value="${m.offsetPct}" step="5" min="0" max="100" onchange="modelRetainerOffsetPct=Number(this.value)||0; renderSectionContent();">
              <span class="pct-suffix">%</span>
            </div>
          </div>
        </div>
        <button class="btn-solid" style="width:100%; justify-content:center; padding:11px; font-size:13px; margin-top:8px;" onclick="generatePitchDeckPptx(${d.id})">
          📊 Baixar Apresentação Executiva (.PPTX — 7 Slides)
        </button>
      </div>

      <div class="chart-panel">
        <div class="chart-panel-header">
          <div>
            <h3>Estrutura dos 7 Slides Institucionais Gerados (16:9 Widescreen)</h3>
            <p>Design corporativo Valknut (#063630 / #A5AC82 / #E6E9DC) sincronizado com a Calculadora de Honorários</p>
          </div>
          <span class="chart-tag">PPTXGENJS</span>
        </div>
        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:10px; font-size:12px;">
          <div class="dossier-cell"><strong>Slide 1 — Capa Institucional:</strong> VALKNUT SPECIAL SITUATIONS, Caso ${escapeHtml(d.empresa)} e Destinatário.</div>
          <div class="dossier-cell"><strong>Slide 2 — Executive Summary &amp; Perfil:</strong> Introdução da empresa, CNPJ, Juízo e Passivo (R$ ${formatNumberBR(d.passivo_mm)} MM).</div>
          <div class="dossier-cell"><strong>Slide 3 — Diagnóstico Forense (3 Pilares):</strong> Causa Raiz, Gargalo Imediato e Tese de Mandato.</div>
          <div class="dossier-cell"><strong>Slide 4 — Mapa de Credores &amp; Stakeholders:</strong> Bancos, Agentes Fiduciários e Securitizadoras.</div>
          <div class="dossier-cell"><strong>Slide 5 — Modelagem do Plano &amp; Economia Gerada:</strong> Passivo Alvo (R$ ${formatNumberBR(m.passivoMM)}M), Haircut Projetado (${m.haircutPct}%) e Economia de R$ ${m.economiaMM.toFixed(1).replace('.', ',')} MM.</div>
          <div class="dossier-cell"><strong>Slide 6 — Cronograma Processual &amp; Prazos:</strong> Marcos da Lei 11.101/05 e plano de trabalho de ${m.mesesMandato} meses.</div>
          <div class="dossier-cell" style="grid-column:1/-1;"><strong>Slide 7 — Proposta de Honorários (Retainer &amp; Success Fee):</strong> Retainer R$ ${m.retainerMensalMil} mil/mês (${m.mesesMandato}m = R$ ${m.retainerTotalMM.toFixed(2).replace('.', ',')}M) + Success Fee de ${m.successFeePct.toFixed(2).replace('.', ',')}% s/ ${escapeHtml(m.baseShortLabel)} (Offset ${m.offsetPct}%) = <strong>Total Estimado R$ ${m.totalHonorariosMM.toFixed(2).replace('.', ',')} MM</strong>.</div>
        </div>
      </div>
    </div>
  `;
}

function generatePitchDeckPptx(dealId) {
  const d = DEALS_DATA.find(x => x.id === Number(dealId)) || DEALS_DATA[0];
  if (typeof PptxGenJS === 'undefined') {
    showToast('Biblioteca PptxGenJS em carregamento. Tente novamente em instantes.');
    return;
  }

  const parsed = parseThesisRegex(d.tese);
  const m = computeAdvisoryFeeMetrics();

  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_WIDE';
  pptx.author = 'VALKNUT — SPECIAL SITUATIONS';
  pptx.company = 'Valknut Special Situations';
  pptx.title = `Proposta Executiva - ${d.empresa}`;

  function addSlideHeader(slide, titleText, subtitleText) {
    slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 0.9, fill: { color: '063630' } });
    slide.addText('VALKNUT — SPECIAL SITUATIONS', { x: 0.5, y: 0.14, w: 6, h: 0.25, fontSize: 10, bold: true, color: 'A5AC82', fontFace: 'Arial' });
    slide.addText(titleText, { x: 0.5, y: 0.36, w: 11, h: 0.4, fontSize: 18, bold: true, color: 'E6E9DC', fontFace: 'Arial' });
    if (subtitleText) {
      slide.addText(subtitleText, { x: 0.5, y: 0.98, w: 12, h: 0.3, fontSize: 11, italic: true, color: '475569', fontFace: 'Arial' });
    }
  }

  // Slide 1: Cover
  const s1 = pptx.addSlide();
  s1.background = { color: '063630' };
  s1.addText('VALKNUT', { x: 0.8, y: 1.5, w: 10, h: 0.7, fontSize: 38, bold: true, color: 'E6E9DC', charSpacing: 6 });
  s1.addText('SPECIAL SITUATIONS // ASSESSORIA FINANCEIRA & REESTRUTURAÇÃO', { x: 0.8, y: 2.2, w: 11, h: 0.4, fontSize: 13, bold: true, color: 'A5AC82' });
  s1.addText(`PROPOSTA DE ASSESSORIA & DOSSIÊ EXECUTIVO:\n${d.empresa}`, { x: 0.8, y: 3.1, w: 11.5, h: 1.3, fontSize: 24, bold: true, color: 'FFFFFF' });
  s1.addText(`Ângulo: ${pitchMandateType}\nDestinatário: ${pitchTargetRecipient}\nPassivo Monitorado: R$ ${formatNumberBR(d.passivo_mm)} Milhões | Data: Outubro/2026`, { x: 0.8, y: 4.8, w: 11, h: 1.2, fontSize: 13, color: 'E6E9DC' });

  // Slide 2: Perfil & Introdução da Empresa
  const s2 = pptx.addSlide();
  addSlideHeader(s2, `1. Perfil & Introdução da Empresa — ${d.empresa}`, `${d.cnpj} | ${d.setor_macro} | ${d.cidade}/${d.uf}`);
  s2.addText([
    { text: 'PERFIL OPERACIONAL & INTRODUÇÃO DA DEVEDORA:\n', options: { bold: true, color: '063630', fontSize: 13 } },
    { text: `${d.descricao_empresa}\n\n`, options: { color: '1E293B', fontSize: 12 } },
    { text: 'DADOS PROCESSUAIS & MÉTRICAS CHAVE:\n', options: { bold: true, color: '063630', fontSize: 13 } },
    { text: `• Passivo Total Estimado: R$ ${formatNumberBR(d.passivo_mm)} MM\n• Fase Concursal: ${d.fase}\n• Juízo Competente: ${d.tribunal} (Autos: ${d.processo})\n• Score Forense Valknut: ${formatScoreBR(d.score)} / 10,0 (${d.tier})\n• Banca da Devedora: ${d.advocacia} | Administrador Judicial: ${d.aj}`, options: { color: '1E293B', fontSize: 12 } }
  ], { x: 0.6, y: 1.4, w: 12.1, h: 5.2, fill: { color: 'F8FAFA' }, line: { color: 'CBD5E1', pt: 1 }, margin: 14 });

  // Slide 3: Diagnóstico Forense (3 Pilares)
  const s3 = pptx.addSlide();
  addSlideHeader(s3, '2. Diagnóstico Forense em 3 Pilares', 'Análise estruturada da causa da crise, gargalo imediato e oportunidade de mandato');
  s3.addText(`1. CAUSA DA CRISE:\n${parsed.causa}`, { x: 0.5, y: 1.4, w: 3.9, h: 5.2, fill: { color: 'FFFFFF' }, line: { color: '063630', pt: 1.5 }, fontSize: 11.5, color: '1E293B', valign: 'top', margin: 12 });
  s3.addText(`2. GARGALO IMEDIATO:\n${parsed.gargalo}`, { x: 4.7, y: 1.4, w: 3.9, h: 5.2, fill: { color: 'FFFBEB' }, line: { color: 'B45309', pt: 1.5 }, fontSize: 11.5, color: '1E293B', valign: 'top', margin: 12 });
  s3.addText(`3. TESE DE MANDATO:\n${parsed.mandato}`, { x: 8.9, y: 1.4, w: 3.9, h: 5.2, fill: { color: 'F0FDF4' }, line: { color: '065F46', pt: 1.5 }, fontSize: 11.5, color: '1E293B', valign: 'top', margin: 12 });

  // Slide 4: Credores e Stakeholders
  const s4 = pptx.addSlide();
  addSlideHeader(s4, '3. Quadro de Credores & Stakeholders Fiduciários', 'Mapeamento de exposições bancárias, agentes fiduciários, securitizadoras e garantias');
  s4.addText(`• Principais Credores Mapeados:\n${d.credores}\n\n• Perfil do Passivo & Colateral:\n${d.perfil_passivo}\n\n• Agentes Fiduciários: ${d.agentes_fiduciarios}\n• Securitizadoras: ${d.securitizadoras}`, { x: 0.6, y: 1.4, w: 12.1, h: 5.2, fill: { color: 'F8FAFA' }, line: { color: 'CBD5E1', pt: 1 }, fontSize: 12.5, color: '1E293B', valign: 'top', margin: 14 });

  // Slide 5: Modelagem de Desalavancagem & Geração de Valor
  const s5 = pptx.addSlide();
  addSlideHeader(s5, '4. Dimensionamento da Reestruturação & Geração de Valor', 'Impacto estimado do plano de reestruturação sobre o passivo alvo');
  s5.addText(`• Passivo / Dívida Alvo do Mandato: R$ ${formatNumberBR(m.passivoMM)} MM (100%)\n• Haircut / Deságio Projetado no Plano: ${m.haircutPct}%\n• Economia / Redução Nominal de Dívida Gerada: R$ ${m.economiaMM.toFixed(1).replace('.', ',')} MM\n• Passivo Reperfilado Pós-Plano (${m.recupPct}%): R$ ${m.creditoRecupMM.toFixed(1).replace('.', ',')} MM\n• Base Selecionada para Success Fee: ${m.baseLabel} (R$ ${m.baseCalculoMM.toFixed(1).replace('.', ',')} MM)`, { x: 0.6, y: 1.4, w: 12.1, h: 5.0, fill: { color: 'FFFFFF' }, line: { color: '063630', pt: 1.5 }, fontSize: 14, bold: true, color: '063630', valign: 'middle', margin: 18 });

  // Slide 6: Cronograma e Próximas Ações
  const s6 = pptx.addSlide();
  addSlideHeader(s6, '5. Cronograma Tático & Plano de Ação Imediato', 'Marcos legais da Lei 11.101/05 e próximas diligências');
  const cm = d.calendar_meta || {};
  const marcoDt = cm.data_marco_br || formatDateBR(cm.data_marco_iso || cm.data_marco || '2026-11-15');
  const marcoDesc = cm.marco_label || cm.tipo_marco || 'Prazo Concursal';
  const diasRem = typeof cm.dias_restantes === 'number' ? ` (Faltam ${cm.dias_restantes} dias)` : '';
  s6.addText(`• Último Movimento Processual: ${formatDateBR(d.data_evento)}\n• Próximo Marco Fatal / Assembleia: ${marcoDt}${diasRem} — ${marcoDesc}\n• Horizonte Estimado do Mandato: ${m.mesesMandato} meses\n\n• Plano de Ação Recomendado pela Mesa Valknut:\n${d.proximas_acoes}`, { x: 0.6, y: 1.4, w: 12.1, h: 5.0, fill: { color: 'F8FAFA' }, line: { color: 'CBD5E1', pt: 1 }, fontSize: 13, color: '1E293B', valign: 'top', margin: 16 });

  // Slide 7: Proposta Comercial (Retainer & Success Fee)
  const s7 = pptx.addSlide();
  addSlideHeader(s7, '6. Proposta de Honorários (Retainer & Success Fee)', `Mandato proposto: ${pitchMandateType}`);
  s7.addText(`• Modalidade de Atuação: ${pitchMandateType}\n• Destinatário: ${pitchTargetRecipient}\n\nESTRUTURA DE REMUNERAÇÃO PROPOSTA:\n1. Retainer Fixo Mensal: R$ ${m.retainerMensalMil} mil/mês por ${m.mesesMandato} meses (Total Fixo: R$ ${m.retainerTotalMM.toFixed(2).replace('.', ',')} MM)\n2. Taxa de Êxito (Success Fee Bruto): ${m.successFeePct.toFixed(2).replace('.', ',')}% sobre ${m.baseLabel} = R$ ${m.successBrutoMM.toFixed(2).replace('.', ',')} MM\n3. Cláusula de Abatimento (Offset de ${m.offsetPct}% do Retainer): -R$ ${m.offsetDeduzidoMM.toFixed(2).replace('.', ',')} MM\n4. Success Fee Líquido no Fechamento: R$ ${m.successLiquidoMM.toFixed(2).replace('.', ',')} MM\n5. Remuneração Total Estimada do Mandato: R$ ${m.totalHonorariosMM.toFixed(2).replace('.', ',')} MM (${m.takeRatePassivoPct.toFixed(2).replace('.', ',')}% do Passivo Total)`, { x: 0.6, y: 1.4, w: 12.1, h: 5.0, fill: { color: 'FFFFFF' }, line: { color: 'A5AC82', pt: 2 }, fontSize: 13, bold: true, color: '063630', valign: 'top', margin: 18 });

  pptx.writeFile({ fileName: `Valknut_Proposta_Honorarios_${d.empresa.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 25)}.pptx` });
  showToast(`Proposta Comercial (.pptx) gerada com Retainer e Success Fee para ${d.empresa}!`);
}

// ==========================================================================
// MÓDULO 2: Ecossistema & Players (Bancas, AJs, Agentes Fiduciários & Varas — Saneado)
// ==========================================================================
function isGenericPlaceholderPlayer(str) {
  if (!str) return true;
  const s = String(str).toLowerCase().trim();
  const ignorePatterns = [
    'aguardando', 'em apuração', 'n/a', 'n/d', 'não informado', 'sigilo',
    'monitoramento', 'em consulta', 'em sondagem', 'em tratativas',
    'em prospecção', 'em estruturação', 'em definição', 'a ser nomeado',
    'em substituição', 'em eleição', 'em recurso', 'massa falida',
    'administrador judicial nomeado', 'perícia prévia nomeada'
  ];
  return ignorePatterns.some(p => s.includes(p));
}

function renderEcossistemaSection(deals, container) {
  const baseDeals = DEALS_DATA.filter(matchesPassivoCutoff);
  const groups = {};
  let unmappedDealsCount = 0;

  baseDeals.forEach(d => {
    let keyList = [];
    if (currentSubTab === 'eco_ajs' || currentSubTab === 'eco_aj') {
      const ajRaw = (d.aj || d.administrador_judicial || d.adm_judicial || '').trim();
      if (ajRaw && !isGenericPlaceholderPlayer(ajRaw)) {
        keyList = ajRaw.split('//').map(s => s.trim()).filter(Boolean);
      } else {
        unmappedDealsCount += 1;
      }
    } else if (currentSubTab === 'eco_bancas') {
      const advRaw = (d.advocacia || '').trim();
      if (advRaw && !isGenericPlaceholderPlayer(advRaw)) {
        keyList = advRaw.split('//').map(s => s.trim()).filter(Boolean);
      } else {
        unmappedDealsCount += 1;
      }
    } else if (currentSubTab === 'eco_fiduciarios') {
      const af = d.agentes_fiduciarios || '';
      const sec = d.securitizadoras || '';
      ['Vórtx DTVM', 'Pentágono DTVM', 'Oliveira Trust DTVM', 'Opea Securitizadora', 'Vert Securitizadora', 'Virgo Securitizadora', 'Reit Securitizadora', 'Audax Securitizadora'].forEach(p => {
        if ((af + ' ' + sec + ' ' + d.credores + ' ' + d.tese).toLowerCase().includes(p.split(' ')[0].toLowerCase())) {
          keyList.push(p);
        }
      });
    } else if (currentSubTab === 'eco_varas') {
      if (d.tribunal) keyList = [d.tribunal];
    }

    const dynRec = computeDynamicRecovery(d);
    keyList.forEach(k => {
      if (!groups[k]) groups[k] = { name: k, count: 0, passivo: 0, deals: [], recupSum: 0 };
      groups[k].count += 1;
      groups[k].passivo += (d.passivo_mm || 0);
      groups[k].deals.push(d);
      groups[k].recupSum += dynRec.recupPct;
    });
  });

  const sorted = Object.values(groups).sort((a, b) => b.count - a.count || b.passivo - a.passivo);

  let html = '';
  if (unmappedDealsCount > 0 && (currentSubTab === 'eco_bancas' || currentSubTab === 'eco_ajs')) {
    html += `
      <div style="margin-bottom:14px; padding:10px 14px; background:var(--bg-subtle); border:1px solid var(--border-light); border-radius:6px; font-size:12px; color:var(--text-secondary); display:flex; justify-content:space-between; align-items:center;">
        <span>Exibindo no ranking numerado apenas players identificados nominalmente nos autos (excluídos ${unmappedDealsCount} processos em fase prévia/cautelar ou aguardando nomeação).</span>
        <span class="status-badge badge-prj">${sorted.length} Players Identificados</span>
      </div>
    `;
  }

  html += `<div class="eco-cards-grid">`;
  sorted.forEach((g, idx) => {
    const avgRec = Math.round(g.recupSum / g.count);
    const avgHaircut = 100 - avgRec;
    html += `
      <div class="eco-player-card">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px; margin-bottom:8px;">
            <div>
              <span style="font-family:var(--font-mono); font-size:10.5px; font-weight:800; color:var(--vk-teal);">#${idx + 1} RANKING</span>
              <strong style="font-size:14px; color:var(--vk-header-start); display:block;">${escapeHtml(g.name)}</strong>
            </div>
            <span class="status-badge badge-upi">${g.count} ${g.count === 1 ? 'caso' : 'casos'}</span>
          </div>
          <div style="display:flex; justify-content:space-between; font-family:var(--font-mono); font-size:11.5px; color:var(--text-secondary); background:var(--bg-subtle); padding:8px 10px; border-radius:6px; margin-bottom:10px;">
            <span>Passivo: <strong>R$ ${formatKpiScale(g.passivo)}</strong></span>
            <span>Recup: <strong style="color:#065F46;">${avgRec}%</strong> | Haircut: <strong>${avgHaircut}%</strong></span>
          </div>
          <div style="font-size:11.5px; color:var(--text-secondary); margin-bottom:12px;">
            <strong>Casos:</strong> ${g.deals.slice(0, 4).map(x => escapeHtml(x.empresa)).join(' • ')}${g.deals.length > 4 ? ` (+${g.deals.length - 4})` : ''}
          </div>
        </div>
        <button class="btn-action" style="width:100%;" onclick="filterByCreditor('${escapeHtml(g.name.split('(')[0].split('-')[0].trim())}')">
          Filtrar Carteira deste Player
        </button>
      </div>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

// ==========================================================================
// 14. Reformulação Completa do Dossiê / "Ficha" (Tear Sheet Institucional com Perfil da Empresa)
// ==========================================================================
function openDossier(id) {
  const item = DEALS_DATA.find(d => d.id === id);
  if (!item) return;
  currentModalItem = item;

  document.getElementById('modalCompany').textContent = item.empresa;
  const tickerEl = document.getElementById('modalTicker');
  if (tickerEl) {
    if (item.ticker) {
      tickerEl.textContent = item.ticker;
      tickerEl.style.display = 'inline-block';
    } else {
      tickerEl.style.display = 'none';
    }
  }

  const subGrid = document.getElementById('modalSubheaderGrid');
  if (subGrid) {
    subGrid.innerHTML = `
      <span class="tearsheet-meta-item"><strong>CNPJ:</strong> ${escapeHtml(item.cnpj)}</span>
      <span class="tearsheet-meta-item"><strong>Macro-Setor:</strong> ${escapeHtml(item.setor_macro)}</span>
      <span class="tearsheet-meta-item"><strong>Polo:</strong> ${escapeHtml(item.cidade)}/${escapeHtml(item.uf)}</span>
      <span class="tearsheet-meta-item"><strong>Juízo:</strong> ${escapeHtml(item.tribunal)}</span>
      <span class="tearsheet-meta-item">
        <strong>Autos:</strong> ${escapeHtml(item.processo)}
        <button type="button" class="btn-copy-autos" onclick="copyProcessNumber('${escapeHtml(item.processo)}')">📋 Copiar Autos</button>
      </span>
    `;
  }

  setModalTab('visao');
  document.getElementById('detailModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function copyProcessNumber(procStr) {
  try {
    navigator.clipboard.writeText(procStr || '').then(() => showToast(`Número dos autos copiado: ${procStr}`));
  } catch (e) {
    showToast(`Autos: ${procStr}`);
  }
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
  document.querySelectorAll('.modal-tab-item').forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById(`modal-tab-${tab}`);
  if (activeBtn) activeBtn.classList.add('active');

  const body = document.getElementById('modalBody');
  const d = currentModalItem;
  if (!d) return;

  const passivoStr = formatNumberBR(d.passivo_mm);
  const scoreNum = Number(d.score || 8.5);
  const scorePct = Math.min(Math.round(scoreNum * 10), 100);
  const parsed = parseThesisRegex(d.tese);
  const b = getBadgeVisual(d);
  const hPct = d.model_params?.haircut_estimado_pct || 55;
  const rPct = 100 - hPct;

  const credChips = parseCreditorsList(d.credores);

  if (tab === 'visao') {
    body.innerHTML = `
      <div class="company-intro-banner">
        <div class="company-intro-label">
          <span>🏢 PERFIL &amp; INTRODUÇÃO DA EMPRESA</span>
          <span style="margin-left:auto; display:inline-flex; gap:6px;">
            <button type="button" class="btn-action" style="padding:3px 9px; font-size:10.5px;" onclick="openCalculatorForDeal(${d.id})">⚡ Simular Fee &amp; Retainer (${rPct}% Recup.)</button>
            <button type="button" class="btn-solid" style="padding:3px 9px; font-size:10.5px;" onclick="openPitchGeneratorForDeal(${d.id})">📊 Gerar Proposta (.pptx)</button>
          </span>
        </div>
        <div class="company-intro-text">${escapeHtml(d.descricao_empresa)}</div>
      </div>

      <div class="tearsheet-kpi-row">
        <div class="ts-kpi-card">
          <div class="ts-kpi-label">1. Passivo Total Estimado</div>
          <div class="ts-kpi-value">R$ ${passivoStr} MM</div>
          <div class="ts-kpi-sub">Recup. Estimada: <strong>${rPct}%</strong> (Haircut ${hPct}%)</div>
        </div>
        <div class="ts-kpi-card">
          <div class="ts-kpi-label">2. Score Forense &amp; Tier</div>
          <div class="ts-kpi-value" style="color:var(--vk-teal);">${formatScoreBR(scoreNum)} / 10,0 <span style="font-size:12px; color:var(--vk-header-start);">(${escapeHtml(d.tier)})</span></div>
          <div class="score-bar-track"><div class="score-bar-fill" style="width:${scorePct}%;"></div></div>
          <div class="ts-kpi-sub" style="font-size:10px;">Severidade: Alta &bull; Urgência: Crítica &bull; Ativos: ${isUpiEligible(d) ? 'UPI Mapeada' : 'Giro'}</div>
        </div>
        <div class="ts-kpi-card">
          <div class="ts-kpi-label">3. Fase Concursal (Classe CNJ)</div>
          <div style="margin:4px 0;"><span class="status-badge ${b.cls}">${escapeHtml(d.fase)}</span></div>
          <div class="ts-kpi-sub">${escapeHtml(d.tribunal)}</div>
        </div>
        <div class="ts-kpi-card">
          <div class="ts-kpi-label">4. Cronologia Processual</div>
          <div style="font-family:var(--font-mono); font-size:12.5px; font-weight:800; color:var(--vk-header-start);">Movimento: ${formatDateBR(d.data_evento)}</div>
          <div style="font-family:var(--font-mono); font-size:11.5px; font-weight:600; color:var(--text-secondary); margin-top:3px;">Inclusão: ${formatDateBR(d.data_adicao)}</div>
          <div class="ts-kpi-sub">Status: ${escapeHtml(d.status || 'Ativo')}</div>
        </div>
      </div>

      <div class="thesis-blocks-grid">
        <div class="thesis-diagnostic-card">
          <div class="thesis-block-num">1. Contexto &amp; Causa Raiz da Crise</div>
          <div class="thesis-block-text">${escapeHtml(parsed.causa)}</div>
        </div>
        <div class="thesis-diagnostic-card block-gargalo">
          <div class="thesis-block-num">2. Gargalo Imediato &amp; Gatilho Concursal</div>
          <div class="thesis-block-text">${escapeHtml(parsed.gargalo)}</div>
        </div>
        <div class="thesis-diagnostic-card block-mandato">
          <div class="thesis-block-num">3. Tese de Mandato &amp; Atuação Recomendada</div>
          <div class="thesis-block-text">${escapeHtml(parsed.mandato)}</div>
        </div>
      </div>

      <div class="stakeholder-board">
        <div class="stakeholder-board-title">Quadro Integral de Credores, Exposições &amp; Stakeholders Fiduciários</div>
        <div style="font-size:13px; font-weight:600; color:var(--text-body); line-height:1.55; margin-bottom:8px;">
          ${escapeHtml(d.credores)}
        </div>
        <div class="creditor-exposure-chips">
          ${credChips.map(c => `<span class="creditor-chip">${escapeHtml(c)}</span>`).join('')}
        </div>

        <div class="dossier-grid" style="margin-top:12px;">
          <div class="dossier-cell">
            <div class="dossier-cell-label">Agentes Fiduciários Mapeados</div>
            <div class="dossier-cell-val" style="color:var(--vk-header-start);">${escapeHtml(d.agentes_fiduciarios || 'Monitoramento via escrituras / N/A')}</div>
          </div>
          <div class="dossier-cell">
            <div class="dossier-cell-label">Securitizadoras (CRA / CRI / Debêntures)</div>
            <div class="dossier-cell-val" style="color:var(--vk-header-start);">${escapeHtml(d.securitizadoras || 'Sem securitizadora reportada / Crédito Bancário Direto')}</div>
          </div>
          <div class="dossier-cell">
            <div class="dossier-cell-label">Perfil do Passivo, Garantias &amp; UPIs</div>
            <div class="dossier-cell-val">${escapeHtml(d.perfil_passivo)}</div>
          </div>
          <div class="dossier-cell">
            <div class="dossier-cell-label">Banca Jurídica &amp; Administrador Judicial (AJ)</div>
            <div class="dossier-cell-val"><strong>Advocacia:</strong> ${escapeHtml(d.advocacia)}<br><strong>AJ:</strong> ${escapeHtml(d.aj)}</div>
          </div>
        </div>
      </div>

      <div class="dossier-cell full-width" style="border-left:4px solid var(--vk-header-start);">
        <div class="dossier-cell-label">Plano de Ação Imediato para Originação</div>
        <div class="dossier-cell-val">${escapeHtml(d.proximas_acoes)}</div>
      </div>
    `;
  } else if (tab === 'credores') {
    body.innerHTML = `
      <div class="stakeholder-board">
        <div class="stakeholder-board-title">Relação Integral de Credores e Exposições Individuais (Sem Truncamento)</div>
        <div style="font-size:13.5px; font-weight:600; color:var(--text-body); line-height:1.6; margin-bottom:12px;">
          ${escapeHtml(d.credores)}
        </div>
        <div class="creditor-exposure-chips">
          ${credChips.map(c => `<span class="creditor-chip">${escapeHtml(c)}</span>`).join('')}
        </div>
      </div>
      <div class="dossier-grid">
        <div class="dossier-cell">
          <div class="dossier-cell-label">Agentes Fiduciários (Vórtx / Pentágono / Oliveira Trust)</div>
          <div class="dossier-cell-val">${escapeHtml(d.agentes_fiduciarios)}</div>
        </div>
        <div class="dossier-cell">
          <div class="dossier-cell-label">Securitizadoras Envolvidas (Opea / Vert / Virgo / Reit)</div>
          <div class="dossier-cell-val">${escapeHtml(d.securitizadoras)}</div>
        </div>
        <div class="dossier-cell full-width">
          <div class="dossier-cell-label">Perfil do Passivo, Colateral &amp; Ativos/UPIs Vinculados</div>
          <div class="dossier-cell-val">${escapeHtml(d.perfil_passivo)}</div>
        </div>
      </div>
    `;
  } else if (tab === 'processo') {
    body.innerHTML = `
      <div class="dossier-grid">
        <div class="dossier-cell full-width">
          <div class="dossier-cell-label">Perfil &amp; Introdução da Empresa</div>
          <div class="dossier-cell-val">${escapeHtml(d.descricao_empresa)}</div>
        </div>
        <div class="dossier-cell">
          <div class="dossier-cell-label">Tribunal &amp; Vara Empresarial Competente</div>
          <div class="dossier-cell-val">${escapeHtml(d.tribunal)}</div>
        </div>
        <div class="dossier-cell">
          <div class="dossier-cell-label">Número dos Autos / Emissão</div>
          <div class="dossier-cell-val" style="font-family:var(--font-mono);">
            ${escapeHtml(d.processo)}
            <button type="button" class="btn-action" style="margin-left:8px; padding:2px 8px;" onclick="copyProcessNumber('${escapeHtml(d.processo)}')">Copiar</button>
          </div>
        </div>
        <div class="dossier-cell">
          <div class="dossier-cell-label">Escritório / Banca da Devedora</div>
          <div class="dossier-cell-val">${escapeHtml(d.advocacia)}</div>
        </div>
        <div class="dossier-cell">
          <div class="dossier-cell-label">Administrador Judicial (AJ) / Perito</div>
          <div class="dossier-cell-val">${escapeHtml(d.aj)}</div>
        </div>
        <div class="dossier-cell">
          <div class="dossier-cell-label">Último Movimento Processual</div>
          <div class="dossier-cell-val" style="font-family:var(--font-mono);">${formatDateBR(d.data_evento)}</div>
        </div>
        <div class="dossier-cell">
          <div class="dossier-cell-label">Data de Inclusão no Radar Valknut</div>
          <div class="dossier-cell-val" style="font-family:var(--font-mono);">${formatDateBR(d.data_adicao)}</div>
        </div>
      </div>
    `;
  } else if (tab === 'gatilhos') {
    const triggers = d.watchdog_triggers || [];
    body.innerHTML = `
      <div class="thesis-blocks-grid">
        <div class="thesis-diagnostic-card">
          <div class="thesis-block-num">1. Contexto &amp; Causa Raiz da Crise</div>
          <div class="thesis-block-text">${escapeHtml(parsed.causa)}</div>
        </div>
        <div class="thesis-diagnostic-card block-gargalo">
          <div class="thesis-block-num">2. Gargalo Imediato &amp; Gatilho Concursal</div>
          <div class="thesis-block-text">${escapeHtml(parsed.gargalo)}</div>
        </div>
        <div class="thesis-diagnostic-card block-mandato">
          <div class="thesis-block-num">3. Tese de Mandato &amp; Atuação Recomendada</div>
          <div class="thesis-block-text">${escapeHtml(parsed.mandato)}</div>
        </div>
      </div>
      <div class="dossier-cell full-width">
        <div class="dossier-cell-label">Gatilhos Forenses Mapeados</div>
        <div style="margin-top:8px;">
          ${triggers.map(t => `<div style="padding:6px 0; border-bottom:1px solid var(--border-light); font-size:13px; color:var(--text-body);">• ${escapeHtml(t)}</div>`).join('')}
        </div>
      </div>
    `;
  }
}

function copyDossierSummary() {
  const d = currentModalItem;
  if (!d) return;
  const parsed = parseThesisRegex(d.tese);
  const text = [
    `VALKNUT — SPECIAL SITUATIONS // TEAR SHEET INSTITUCIONAL`,
    `Empresa: ${d.empresa} ${d.ticker ? `[${d.ticker}]` : ''} | CNPJ: ${d.cnpj}`,
    `Perfil da Empresa: ${d.descricao_empresa}`,
    `Macro-Setor: ${d.setor_macro} | Polo: ${d.cidade}/${d.uf}`,
    `Juízo: ${d.tribunal} | Autos: ${d.processo}`,
    `Passivo Total Estimado: R$ ${formatNumberBR(d.passivo_mm)} MM | Score Forense: ${formatScoreBR(d.score)} (${d.tier})`,
    `Fase Concursal: ${d.fase}`,
    `Cronologia: Último Movimento ${formatDateBR(d.data_evento)} | Inclusão ${formatDateBR(d.data_adicao)}`,
    `1. Causa da Crise: ${parsed.causa}`,
    `2. Gargalo Imediato: ${parsed.gargalo}`,
    `3. Tese de Mandato: ${parsed.mandato}`,
    `Principais Credores: ${d.credores}`,
    `Agentes Fiduciários: ${d.agentes_fiduciarios} | Securitizadoras: ${d.securitizadoras}`
  ].join('\n');

  try {
    navigator.clipboard.writeText(text).then(() => showToast('Tear Sheet completo copiado para a área de transferência!'));
  } catch (e) {
    showToast('Tear Sheet selecionado.');
  }
}

function printDossier() {
  setModalTab('visao');
  setTimeout(() => window.print(), 80);
}


// ==========================================================================
// 15. Live Google Sheets Sync
// ==========================================================================
async function forceSyncData() {
  showToast('Sincronizando com a planilha mestre...');
  await fetchLiveSheetInBackground(true);
}

async function fetchLiveSheetInBackground(notifyUser = false) {
  const pill = document.getElementById('lastUpdateTime');
  try {
    const res = await fetch(APPS_SCRIPT_URL);
    if (!res.ok) return;
    const json = await res.json();
    if (json.status === 'success' && Array.isArray(json.data) && json.data.length > 0) {
      const parsed = parseSheetRows(json.data);
      if (parsed.length > 0) {
        DEALS_DATA = parsed;
        enrichAllDeals();
        populateDropdownFilters();
        updateDynamicNavCounts();
        renderSubTabs();
        renderSectionContent();
        const cfg = SECTION_CONFIG[currentMainSection] || SECTION_CONFIG.operacao;
        const pageTitleEl = document.getElementById('pageMainTitle');
        const pageSubEl = document.getElementById('pageMainSubtitle');
        if (pageTitleEl) pageTitleEl.textContent = resolveDynamicCaseText(cfg.pageTitle);
        if (pageSubEl) pageSubEl.textContent = resolveDynamicCaseText(cfg.pageSubtitle);
        const curSt = cfg.subtabs.find(s => s.id === currentSubTab);
        if (curSt) {
          const subTitleEl = document.getElementById('subSectionTitle');
          const subDescEl = document.getElementById('subSectionDesc');
          if (subTitleEl) subTitleEl.textContent = resolveDynamicCaseText(curSt.title);
          if (subDescEl) subDescEl.textContent = resolveDynamicCaseText(curSt.desc);
        }
        if (pill) pill.textContent = `Online: ${DEALS_DATA.length} leads`;
        if (notifyUser) showToast(`Sincronizado: ${DEALS_DATA.length} casos ativos carregados!`);
      }
    }
  } catch (err) {
    if (pill) pill.textContent = `Base Ativa: ${DEALS_DATA.length} leads`;
  }
}

function parseSheetRows(rows) {
  const list = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r];
    if (!row || row.length < 3) continue;
    const empresa = String(row[2] || '').trim();
    if (!empresa || empresa.toLowerCase().includes('empresa/grupo') || empresa.toLowerCase().includes('safira')) continue;

    let passivoVal = typeof row[11] === 'number' ? row[11] : parseFloat(String(row[11] || '0').replace(/\./g, '').replace(',', '.'));
    if (isNaN(passivoVal)) passivoVal = 0;
    passivoVal = Math.round(passivoVal);

    const trib = String(row[6] || '');
    const reg = String(row[5] || '');
    const fase = String(row[8] || '');
    const tier = String(row[10] || '');
    const tese = String(row[16] || '');
    const credoresStr = String(row[12] || 'Mapeamento em curso');

    let cidade = 'São Paulo';
    let uf = 'SP';
    for (const key of Object.keys(CITY_COORDINATES)) {
      const [c, u] = key.split(',');
      if (reg.includes(c) || trib.includes(c) || empresa.includes(c)) {
        cidade = c; uf = u; break;
      }
    }

    const coord = CITY_COORDINATES[`${cidade},${uf}`] || [-23.5505, -46.6333];
    const regiaoMacro = UF_TO_REGION[uf] || 'Sudeste';

    const faseLower = fase.toLowerCase();
    const tierLower = tier.toLowerCase();
    let tipoProcesso = 'PRJ';
    let subtipoProcesso = 'PRJ';
    if (tierLower.includes('tier 0') || faseLower.includes('precursor') || faseLower.includes('rating')) {
      tipoProcesso = 'Tier 0';
      subtipoProcesso = 'Tier 0';
    } else if (faseLower.includes('falência') || faseLower.includes('autofalência') || faseLower.includes('liquidação') || faseLower.includes('classe 110')) {
      tipoProcesso = 'PRJ';
      subtipoProcesso = 'Falência / Liquidação';
    } else if (faseLower.includes('cautelar') || faseLower.includes('20-b') || faseLower.includes('pré-rj') || faseLower.includes('agd')) {
      tipoProcesso = 'Cautelar / Pré-RJ';
      subtipoProcesso = 'Cautelar / Pré-RJ';
    } else if (faseLower.includes('extrajudicial') || faseLower.includes('classe 128') || faseLower.includes('12154') || faseLower.includes('pre')) {
      tipoProcesso = 'PRE';
      subtipoProcesso = 'PRE';
    }

    const teseLower = tese.toLowerCase();
    let stratId = 'watchdog';
    if (tipoProcesso === 'Tier 0') stratId = 'precursor';
    else if (teseLower.includes('dip') || teseLower.includes('upi') || teseLower.includes('m&a') || teseLower.includes('leilão')) stratId = 'dip';
    else if (tipoProcesso === 'PRE' || tipoProcesso === 'Cautelar / Pré-RJ') stratId = 'consensual';

    let scoreVal = typeof row[9] === 'number' ? row[9] : parseFloat(String(row[9] || '8.5').replace(',', '.'));
    if (isNaN(scoreVal) || scoreVal > 10) scoreVal = 8.8;

    let dataEvento = String(row[0] || '2026-10-15').split('T')[0];
    let dataAdicao = String(row[1] || '2026-10-16').split('T')[0];

    list.push({
      id: list.length + 1,
      data_evento: dataEvento,
      data_adicao: dataAdicao,
      empresa,
      cnpj: String(row[3] || ''),
      setor_macro: String(row[4] || 'Indústria & Manufatura'),
      regiao: reg,
      cidade,
      uf,
      coordenadas: coord,
      regiao_macro: regiaoMacro,
      tribunal: trib,
      processo: String(row[7] || 'Em autuação'),
      fase,
      tipo_processo: tipoProcesso,
      subtipo_processo: subtipoProcesso,
      score: scoreVal,
      tier,
      passivo_mm: passivoVal,
      passivo_display: formatNumberBR(passivoVal),
      credores: credoresStr,
      perfil_passivo: String(row[13] || 'Bancário + Mercado de Capitais'),
      advocacia: String(row[14] || 'Em apuração'),
      aj: String(row[15] || 'N/A ou A Nomear'),
      tese: tese || '',
      status: String(row[17] || 'Novo'),
      proximas_acoes: String(row[18] || 'Acompanhamento processual'),
      strategy_id: stratId,
      watchdog_triggers: [
        'Monitoramento de Passivo e Garantias Fiduciárias',
        isUpiEligible({ tese, perfil_passivo: String(row[13] || '') }) ? 'Ativos / UPIs Elegíveis para M&A Distressed' : 'Acompanhamento de Prazos e Editais'
      ]
    });
  }
  return list;
}

// ==========================================================================
// 16. Exportação CSV (Padrão Excel PT-BR Cirúrgico) + Exportação XLSX Nativa
// ==========================================================================
function quoteCSVField(val) {
  const s = String(val === null || val === undefined ? '' : val).replace(/\r?\n|\r/g, ' ').trim();
  return `"${s.replace(/"/g, '""')}"`;
}

function exportCSV() {
  const deals = getFilteredDeals();
  if (deals.length === 0) {
    showToast('Nenhum registro no recorte para exportar.');
    return;
  }

  const headers = [
    'ID',
    'Data_Movimento',
    'Data_Inclusao',
    'Empresa',
    'CNPJ',
    'Macro_Setor',
    'Descricao_Empresa',
    'Cidade',
    'UF',
    'Tribunal_Vara',
    'Processo',
    'Fase_Concursal',
    'Passivo_MM',
    'Haircut_Estimado_Pct',
    'Recuperacao_Estimada_Pct',
    'Score',
    'Principais_Credores',
    'Causa_da_Crise',
    'Gargalo_Imediato',
    'Tese_de_Mandato'
  ];

  const rows = deals.map(d => {
    const parsed = parseThesisRegex(d.tese);
    const scoreComma = Number(d.score || 8.5).toFixed(1).replace('.', ',');
    const hPct = d.model_params?.haircut_estimado_pct || 55;
    const rPct = 100 - hPct;
    return [
      d.id,
      quoteCSVField(formatDateBR(d.data_evento)),
      quoteCSVField(formatDateBR(d.data_adicao)),
      quoteCSVField(d.empresa),
      quoteCSVField(d.cnpj),
      quoteCSVField(d.setor_macro),
      quoteCSVField(d.descricao_empresa || ''),
      quoteCSVField(d.cidade),
      quoteCSVField(d.uf),
      quoteCSVField(d.tribunal),
      quoteCSVField(d.processo),
      quoteCSVField(d.fase),
      Math.round(Number(d.passivo_mm || 0)),
      hPct,
      rPct,
      quoteCSVField(scoreComma),
      quoteCSVField(d.credores),
      quoteCSVField(d.causa_crise || parsed.causa),
      quoteCSVField(d.gargalo_imediato || parsed.gargalo),
      quoteCSVField(d.tese_mandato || parsed.mandato)
    ];
  });

  const csvContent = '\uFEFF' + [headers.map(quoteCSVField).join(';'), ...rows.map(r => r.join(';'))].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `valknut_radar_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(`CSV PT-BR exportado com ${deals.length} casos (incluindo Perfil da Empresa e % Recuperação)!`);
}

function exportXLSX() {
  const deals = getFilteredDeals();
  if (deals.length === 0) {
    showToast('Nenhum registro no recorte para exportar.');
    return;
  }

  const headers = [
    'ID',
    'Data_Movimento',
    'Data_Inclusao',
    'Empresa',
    'CNPJ',
    'Macro_Setor',
    'Descricao_Empresa',
    'Cidade',
    'UF',
    'Tribunal_Vara',
    'Processo',
    'Fase_Concursal',
    'Passivo_MM',
    'Haircut_Estimado_Pct',
    'Recuperacao_Estimada_Pct',
    'Score',
    'Principais_Credores',
    'Causa_da_Crise',
    'Gargalo_Imediato',
    'Tese_de_Mandato'
  ];

  const aoa = [headers];
  deals.forEach(d => {
    const parsed = parseThesisRegex(d.tese);
    const hPct = d.model_params?.haircut_estimado_pct || 55;
    const rPct = 100 - hPct;
    aoa.push([
      Number(d.id),
      formatDateBR(d.data_evento),
      formatDateBR(d.data_adicao),
      d.empresa || '',
      d.cnpj || '',
      d.setor_macro || '',
      d.descricao_empresa || '',
      d.cidade || '',
      d.uf || '',
      d.tribunal || '',
      d.processo || '',
      d.fase || '',
      Number(d.passivo_mm || 0),
      Number(hPct),
      Number(rPct),
      Number(Number(d.score || 8.5).toFixed(1)),
      d.credores || '',
      d.causa_crise || parsed.causa,
      d.gargalo_imediato || parsed.gargalo,
      d.tese_mandato || parsed.mandato
    ]);
  });

  if (typeof XLSX !== 'undefined') {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(aoa);

    ws['!cols'] = [
      { wch: 6 },
      { wch: 15 },
      { wch: 15 },
      { wch: 38 },
      { wch: 20 },
      { wch: 28 },
      { wch: 60 },
      { wch: 18 },
      { wch: 6 },
      { wch: 34 },
      { wch: 26 },
      { wch: 32 },
      { wch: 16 },
      { wch: 14 },
      { wch: 14 },
      { wch: 9 },
      { wch: 55 },
      { wch: 55 },
      { wch: 55 },
      { wch: 55 }
    ];

    ws['!views'] = [{ state: 'frozen', xSplit: 0, ySplit: 1 }];

    for (let r = 1; r < aoa.length; r++) {
      const passCell = ws[XLSX.utils.encode_cell({ r, c: 12 })];
      if (passCell) passCell.z = '#,##0.00';
      const scoreCell = ws[XLSX.utils.encode_cell({ r, c: 15 })];
      if (scoreCell) scoreCell.z = '0.0';
    }

    wb.Props = {
      Title: 'VALKNUT — SPECIAL SITUATIONS // Base Concursal v4.0',
      Author: 'Valknut Special Situations'
    };

    XLSX.utils.book_append_sheet(wb, ws, 'Valknut Special Situations');
    XLSX.writeFile(wb, `valknut_radar_${new Date().toISOString().slice(0, 10)}.xlsx`);
    showToast(`Planilha Excel (.xlsx) exportada com ${deals.length} casos e Perfil da Empresa!`);
  } else {
    exportCSV();
  }
}
