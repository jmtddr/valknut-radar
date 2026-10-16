/**
 * ==========================================================================
 * VALKNUT ANALYTICS // Special Situations & Distressed Debt Platform
 * Clean Institutional Edition (#0D3C3E + Multi-Section Architecture)
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
    "regiao": "Eixo SP/Nacional",
    "tribunal": "Varas Empresariais",
    "processo": "0204512-11.2026.8.06.0064",
    "fase": "Cautelar Antecedente (art. 20-B)",
    "score": 9.5,
    "tier": "Tier 1 (Máxima Conversão - Mandato Aberto)",
    "passivo_mm": 1000,
    "passivo_display": "1.000",
    "credores": "Bradesco, Santander, Itaú e Debenturistas (Vórtx/Pentágono)",
    "perfil_passivo": "Bancário Concentrado + Debêntures",
    "advocacia": "TBD",
    "aj": "TBD",
    "tese": "Financial Advisory (Renegociação com sindicato bancário) + DIP Financing",
    "status": "Em Análise",
    "proximas_acoes": "TBD",
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
    "subtipo_processo": "Cautelar / Pré-RJ"
  },
  {
    "id": 2,
    "data_evento": "2026-09-16",
    "data_adicao": "2026-10-02",
    "empresa": "Grupo Veneto / LimpServ",
    "cnpj": "14.880.035/0001-77",
    "setor_detalhe": "Serviços & Embalagens",
    "setor_macro": "Indústria & Manufatura",
    "regiao": "São Paulo / SP",
    "tribunal": "TJSP - Vara Regional de Falências",
    "processo": "1008421-15.2026.8.26.0260",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.5,
    "tier": "Tier 2 (Alta Probabilidade - Plano a Elaborar)",
    "passivo_mm": 180,
    "passivo_display": "180",
    "credores": "Bancos comerciais privados (Itaú, Santander, Bradesco) e Fornecedores químicos",
    "perfil_passivo": "Bancário (Capital de Giro e Recebíveis)",
    "advocacia": "TBD",
    "aj": "TBD",
    "tese": "Gestão Interina (CRO) + PRJ",
    "status": "Novo",
    "proximas_acoes": "TBD",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 3,
    "data_evento": "2026-09-20",
    "data_adicao": "2026-10-02",
    "empresa": "Grupo de Transporte & Agro Rondonópolis",
    "cnpj": "17.452.890/0001-41",
    "setor_detalhe": "Agronegócio & Logística",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Centro-Oeste (MT)",
    "tribunal": "TJMT - Rondonópolis / 4ª Vara Cível",
    "processo": "1014251-88.2026.8.11.0003",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.5,
    "tier": "Tier 2 (Alta Probabilidade - Plano a Elaborar)",
    "passivo_mm": 34,
    "passivo_display": "34",
    "credores": "Bancos de Montadoras (Scania, Volvo), Bancos privados e Postos de Combustível",
    "perfil_passivo": "Finame / Alienação Fiduciária de Frotas",
    "advocacia": "TBD",
    "aj": "TBD",
    "tese": "Financial Advisory + Refinanciamento de Maquinário",
    "status": "Em Análise",
    "proximas_acoes": "TBD",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 4,
    "data_evento": "2026-09-22",
    "data_adicao": "2026-10-02",
    "empresa": "Grupo Industrial de Caxias do Sul (Ex-20 empresas)",
    "cnpj": "88.612.450/0001-19",
    "setor_detalhe": "Indústria / Comércio",
    "setor_macro": "Indústria & Manufatura",
    "regiao": "Sul (RS)",
    "tribunal": "TJRS - Caxias do Sul",
    "processo": "5014822-10.2026.8.21.0010",
    "fase": "Recuperação Extrajudicial (Classe 128)",
    "score": 6.5,
    "tier": "Tier 3 (PRE Avançada - Foco em Credores)",
    "passivo_mm": 295,
    "passivo_display": "295",
    "credores": "Bancos regionais (Banrisul, BRDE, Sicredi), Itaú e Fornecedores de aço",
    "perfil_passivo": "Bancário Regional + Fornecedores",
    "advocacia": "TBD",
    "aj": "TBD",
    "tese": "Venda de UPI Fabril + PRE",
    "status": "Novo",
    "proximas_acoes": "TBD",
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
    "subtipo_processo": "PRE"
  },
  {
    "id": 5,
    "data_evento": "2026-08-10",
    "data_adicao": "2026-10-02",
    "empresa": "Alliança Saúde",
    "cnpj": "42.771.949/0001-35",
    "setor_detalhe": "Saúde / Diagnósticos",
    "setor_macro": "Saúde & Farma",
    "regiao": "Eixo SP/RJ",
    "tribunal": "Varas Empresariais",
    "processo": "1084120-55.2026.8.26.0100",
    "fase": "Homologação de Recuperação Extrajudicial (Classe 12154)",
    "score": 6.5,
    "tier": "Tier 3 (PRE Avançada - Foco em Credores)",
    "passivo_mm": 1140,
    "passivo_display": "1.140",
    "credores": "Debenturistas (emissões públicas e privadas) e Bancos credores",
    "perfil_passivo": "Mercado de Capitais + Financiamentos Estruturados",
    "advocacia": "TBD",
    "aj": "TBD",
    "tese": "M&A / Venda de Ativos Não-Core + Creditor-side",
    "status": "Em Análise",
    "proximas_acoes": "TBD",
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
    "subtipo_processo": "PRE"
  },
  {
    "id": 6,
    "data_evento": "2026-09-30",
    "data_adicao": "2026-10-02",
    "empresa": "Produtores Rurais Família Roversi",
    "cnpj": "29.418.720/0001-05",
    "setor_detalhe": "Agro",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "MT",
    "tribunal": "TJMT - Rondonópolis",
    "processo": "1021450-12.2026.8.11.0003",
    "fase": "Liminar deferida",
    "score": 8.5,
    "tier": "Tier 2 (Alta Probabilidade - Plano a Elaborar)",
    "passivo_mm": 45,
    "passivo_display": "45",
    "credores": "Tradings agrícolas, Revendas locais de insumos e Bancos de fomento (BB, Sicredi)",
    "perfil_passivo": "Tradings (Barter) + Financiamento de Máquinas",
    "advocacia": "TBD",
    "aj": "TBD",
    "tese": "TBD",
    "status": "Novo",
    "proximas_acoes": "TBD",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 7,
    "data_evento": "2026-09-30",
    "data_adicao": "2026-10-02",
    "empresa": "Raízen",
    "cnpj": "33.453.598/0001-23",
    "setor_detalhe": "Energia & Infraestrutura",
    "setor_macro": "Energia & Infraestrutura",
    "regiao": "São Paulo / SP (Nacional)",
    "tribunal": "TBD",
    "processo": "Recuperação Extrajudicial (RAIZ4)",
    "fase": "Recuperação Extrajudicial (Homologação / AGE Aprovada)",
    "score": 6.5,
    "tier": "Tier 3 (PRE Avançada - Foco em Credores)",
    "passivo_mm": 3500,
    "passivo_display": "3.500",
    "credores": "Debenturistas institucionais (múltiplas emissões), Sindicato de bancos nacionais e globais",
    "perfil_passivo": "Mercado de Capitais (Debêntures) + Sindicato Bancário",
    "advocacia": "TBD",
    "aj": "TBD",
    "tese": "TBD",
    "status": "Novo",
    "proximas_acoes": "TBD",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Emissão de Debêntures / Mercado de Capitais (Fiscalização de Covenants)"
    ],
    "cidade": "São Paulo",
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
    "subtipo_processo": "PRE"
  },
  {
    "id": 8,
    "data_evento": "2026-10-01",
    "data_adicao": "2026-10-02",
    "empresa": "Paranapanema",
    "cnpj": "60.398.369/0001-26",
    "setor_detalhe": "Indústria & Manufatura",
    "setor_macro": "Indústria & Manufatura",
    "regiao": "São Paulo / SP (Nacional)",
    "tribunal": "TBD",
    "processo": "1001920-44.2023.8.26.0260",
    "fase": "TBD",
    "score": 5.5,
    "tier": "Tier 3 (Pós-Plano - Ângulo Restrito a UPI/DIP)",
    "passivo_mm": 3940,
    "passivo_display": "3.940",
    "credores": "Bancos privados (Santander, Bradesco, Itaú, BB) e Credores comerciais de concentrado de cobre (Glencore, Trafigura)",
    "perfil_passivo": "Sindicato Bancário + Tradings Internacionais",
    "advocacia": "TBD",
    "aj": "TBD",
    "tese": "TBD",
    "status": "Novo",
    "proximas_acoes": "TBD",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 9,
    "data_evento": "2026-10-01",
    "data_adicao": "2026-10-02",
    "empresa": "OSX Brasil S/A",
    "cnpj": "09.112.685/0001-32",
    "setor_detalhe": "Energia & Infraestrutura",
    "setor_macro": "Energia & Infraestrutura",
    "regiao": "RJ",
    "tribunal": "TJRJ",
    "processo": "0392144-80.2020.8.19.0001",
    "fase": "Homologação de plano",
    "score": 5.5,
    "tier": "Tier 3 (Pós-Plano - Ângulo Restrito a UPI/DIP)",
    "passivo_mm": 8000,
    "passivo_display": "8.000",
    "credores": "Prumo Logística (Porto do Açu), Debenturistas e Fornecedores marítimos",
    "perfil_passivo": "Créditos Estruturados + Passivo Operacional",
    "advocacia": "TBD",
    "aj": "TBD",
    "tese": "TBD",
    "status": "Novo",
    "proximas_acoes": "TBD",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Emissão de Debêntures / Mercado de Capitais (Fiscalização de Covenants)"
    ],
    "cidade": "Rio de Janeiro",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 10,
    "data_evento": "2026-10-01",
    "data_adicao": "2026-10-04",
    "empresa": "Chilli Beans (Mustang 25 Participações)",
    "cnpj": "20.755.790/0001-22",
    "setor_detalhe": "Varejo & Consumo / Franquias",
    "setor_macro": "Varejo & Consumo",
    "regiao": "São Paulo / SP (Nacional)",
    "tribunal": "Varas Empresariais SP",
    "processo": "Debêntures 1ª Emissão (Vert)",
    "fase": "Pré-RJ / Vencimento Antecipado de Debênture (Vert)",
    "score": 9.5,
    "tier": "Tier 1 (Máxima Conversão - Mandato Aberto)",
    "passivo_mm": 600,
    "passivo_display": "600",
    "credores": "Securitizadora Vert (R$ 89M de debêntures vencidas), Bancos de Capital de Giro",
    "perfil_passivo": "Mercado de Capitais (Debêntures exigíveis em 3 dias) + Bancário",
    "advocacia": "TBD",
    "aj": "N/A (Fase Prévia)",
    "tese": "Cautelar Antecedente (Art. 20-B para suspender cobrança da Vert) + M&A / Entrada de Investidor (venda de 30%)",
    "status": "Novo",
    "proximas_acoes": "Avaliar abordagem à devedora para protocolo urgente de tutela de proteção",
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
    "subtipo_processo": "Cautelar / Pré-RJ"
  },
  {
    "id": 11,
    "data_evento": "2026-10-02",
    "data_adicao": "2026-10-04",
    "empresa": "SteelCorp (Roberto Justus / Daniel Vorcaro)",
    "cnpj": "51.354.194/0001-64",
    "setor_detalhe": "Construção Civil / Steel Frame",
    "setor_macro": "Construção Civil & Real Estate",
    "regiao": "São Paulo / SP",
    "tribunal": "Varas Cíveis/Empresariais SP",
    "processo": "Mediação Societária e Pré-RJ",
    "fase": "Pré-RJ / Disputa Societária & Estudo de RJ",
    "score": 9.5,
    "tier": "Tier 1 (Máxima Conversão - Mandato Aberto)",
    "passivo_mm": 143,
    "passivo_display": "143",
    "credores": "Banco Master, Fundos de Investimento e Debenturistas",
    "perfil_passivo": "Conflito Societário + Dívida com Fundo/Banco",
    "advocacia": "TBD",
    "aj": "N/A (Fase Prévia)",
    "tese": "Financial Advisory (Mediação de dívida e repactuação de aporte) + CRO / Gestão Interina",
    "status": "Novo",
    "proximas_acoes": "Contato imediato com acionistas para assessoria preventiva",
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
    "subtipo_processo": "Cautelar / Pré-RJ"
  },
  {
    "id": 12,
    "data_evento": "2026-10-02",
    "data_adicao": "2026-10-04",
    "empresa": "Tradener Comercializadora de Energia",
    "cnpj": "02.691.745/0001-70",
    "setor_detalhe": "Energia / Comercialização Elétrica",
    "setor_macro": "Energia & Infraestrutura",
    "regiao": "Sul (PR)",
    "tribunal": "TJPR - Curitiba / Varas Empresariais",
    "processo": "0014820-12.2026.8.16.0001",
    "fase": "Recuperação Judicial (Contestação de Financiamento Pré-RJ)",
    "score": 8.5,
    "tier": "Tier 2 (Alta Probabilidade - Plano a Elaborar)",
    "passivo_mm": 210,
    "passivo_display": "210",
    "credores": "Banco Daycoval, CCEE e Contrapartes do Mercado Livre de Energia",
    "perfil_passivo": "Financiamento Estruturado + Garantias de Energia",
    "advocacia": "TBD",
    "aj": "TBD",
    "tese": "Special Sits em Energia (CCEE / repactuação de contratos) + Comitê de Credores",
    "status": "Novo",
    "proximas_acoes": "Analisar garantias do Daycoval e fit com histórico de energia da Sentinela AI",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 13,
    "data_evento": "2026-10-02",
    "data_adicao": "2026-10-04",
    "empresa": "Ulbra S/A (Rede Aelbra / Evolua)",
    "cnpj": "88.332.580/0001-65",
    "setor_detalhe": "Tecnologia & Serviços B2B",
    "setor_macro": "Tecnologia & Serviços B2B",
    "regiao": "Sul (RS)",
    "tribunal": "TJRS - Canoas/Porto Alegre",
    "processo": "5001822-11.2019.8.21.0008",
    "fase": "Reorganização de Passivo Pós-RJ com Fundos",
    "score": 6,
    "tier": "Tier 3 (Pós-Plano - Ângulo Restrito a UPI/DIP)",
    "passivo_mm": 1500,
    "passivo_display": "1.500",
    "credores": "Banco Master, Banco Genial, FIDC Calêndula e Credores Trabalhistas",
    "perfil_passivo": "Fundos Estruturados (FIDCs) + Passivo Trabalhista",
    "advocacia": "TBD",
    "aj": "Administrador Judicial nomeado pelo TJRS",
    "tese": "Distressed Debt / Cessão de Créditos e Monetização de Ativos Imobiliários",
    "status": "Em Análise",
    "proximas_acoes": "Acompanhar movimentação de saída do Master e carteira de créditos",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 14,
    "data_evento": "2026-10-03",
    "data_adicao": "2026-10-04",
    "empresa": "Lupatech S/A",
    "cnpj": "89.468.960/0001-15",
    "setor_detalhe": "Petróleo & Gás / Indústria Metalmecânica",
    "setor_macro": "Indústria & Manufatura",
    "regiao": "Sul (RS/SP)",
    "tribunal": "Varas Empresariais",
    "processo": "Em estruturação",
    "fase": "Recuperação Extrajudicial (Coleta de Adesões de Debêntures)",
    "score": 8.5,
    "tier": "Tier 1 (Máxima Conversão - Mandato Aberto)",
    "passivo_mm": 386,
    "passivo_display": "386",
    "credores": "Debenturistas de emissões privadas e bancos comerciais",
    "perfil_passivo": "Mercado de Capitais (Debêntures) + Quirografários",
    "advocacia": "TBD",
    "aj": "N/A (Fase Prévia)",
    "tese": "Financial Advisory para repactuação de debêntures e venda de ativos não-core",
    "status": "Novo",
    "proximas_acoes": "Avaliar termos da proposta de renegociação de debêntures",
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
    "subtipo_processo": "PRE"
  },
  {
    "id": 15,
    "data_evento": "2026-10-04",
    "data_adicao": "2026-10-04",
    "empresa": "Grupo Orlando (Pecuaristas de MT)",
    "cnpj": "23.514.890/0001-12",
    "setor_detalhe": "Agronegócio / Pecuária de Corte",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Centro-Oeste (MT)",
    "tribunal": "TJMT - Comarca de Nova Bandeirantes / Alta Floresta",
    "processo": "1001842-11.2026.8.11.0102",
    "fase": "Recuperação Judicial (Classe 129 protocolada)",
    "score": 8.5,
    "tier": "Tier 2 (Alta Probabilidade - Plano a Elaborar)",
    "passivo_mm": 38,
    "passivo_display": "38",
    "credores": "Banco do Brasil e Caixa Econômica Federal (concentram 79% da dívida), fornecedores de insumos/nutrição",
    "perfil_passivo": "Bancário Público Concentrado (BB e Caixa) + Crédito Rural",
    "advocacia": "TBD",
    "aj": "TBD",
    "tese": "Financial Advisory Rural (Alongamento de dívidas de custeio/investimento com BB e Caixa) + Modelagem do PRJ",
    "status": "Novo",
    "proximas_acoes": "Mapear garantias reais (hipotecas/penhores de gado) com BB e Caixa",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 16,
    "data_evento": "2026-10-03",
    "data_adicao": "2026-10-05",
    "empresa": "Grupo Pão de Açúcar (GPA - PCAR3)",
    "cnpj": "47.508.411/0001-56",
    "setor_detalhe": "Varejo Alimentar & Consumo",
    "setor_macro": "Varejo & Consumo",
    "regiao": "São Paulo / SP (Nacional)",
    "tribunal": "Varas Empresariais SP",
    "processo": "Em homologação",
    "fase": "Recuperação Extrajudicial (Classe 128 / PRE)",
    "score": 8.5,
    "tier": "Tier 2 (Alta Probabilidade - Plano a Elaborar)",
    "passivo_mm": 4568,
    "passivo_display": "4.568",
    "credores": "Sindicato de bancos privados (Itaú, Bradesco, Santander), Debenturistas institucionais e Fundos Imobiliários (locadores)",
    "perfil_passivo": "Bancário Comercial + Mercado de Capitais (Debêntures) + Aluguéis Comerciais",
    "advocacia": "TBD",
    "aj": "TBD",
    "tese": "M&A Distressed / Venda de Imóveis e Hipermercados (Sale & Leaseback / UPI) + Assessoria a Credores Bancários",
    "status": "Novo",
    "proximas_acoes": "Mapear ativos imobiliários disponíveis para monetização e desinvestimento",
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
    "subtipo_processo": "PRE"
  },
  {
    "id": 17,
    "data_evento": "2026-10-15",
    "data_adicao": "2026-10-05",
    "empresa": "Oncoclínicas do Brasil (ONCO3)",
    "cnpj": "12.104.241/0001-09",
    "setor_detalhe": "Saúde & Medicina Oncológica",
    "setor_macro": "Saúde & Farma",
    "regiao": "Eixo SP/RJ (Nacional)",
    "tribunal": "Varas Empresariais SP",
    "processo": "Processo de PRE",
    "fase": "Recuperação Extrajudicial (Assembleia de Debenturistas e CRIs)",
    "score": 8,
    "tier": "Tier 2 (Alta Probabilidade - Plano a Elaborar)",
    "passivo_mm": 5100,
    "passivo_display": "5.100",
    "credores": "Distribuidora Oncoprod R$ 1.200M (acordo s/ deságio + linha de R$ 600M), Titulares de CRIs Opea Securitizadora (assessorados por Mattos Filho e Journey Capital), Debenturistas (ONCOA1) e Bancos",
    "perfil_passivo": "Mercado de Capitais (Debêntures e CRIs) + Bancário de Saúde",
    "advocacia": "TBD",
    "aj": "N/A (Fase Extrajudicial)",
    "tese": "(1) Causa da crise: Alavancagem de R$ 5,1B a R$ 5,7B e oposição da acionista Latache Capital (14,6% do capital) em 15/10/2026 contra a RE (que prevê haircut de 45%), defendendo conversão em RJ; (2) Gargalo imediato: Ultimato judicial de 15 dias (14/10 na 3ª Vara de Falências de SP) para comprovar quórum mínimo na RE e AGE de recomposição do Conselho em 06/11/2026; (3) Oportunidade de mandato: Assessoria a Debenturistas/Titulares de CRIs e M&A Distressed de hospitais/clínicas (UPIs).",
    "status": "Novo",
    "proximas_acoes": "Acompanhar deliberações das AGDs convocadas pelos agentes fiduciários",
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
    "subtipo_processo": "PRE"
  },
  {
    "id": 18,
    "data_evento": "2026-10-02",
    "data_adicao": "2026-10-05",
    "empresa": "Private Construtora",
    "cnpj": "10.616.350/0001-30",
    "setor_detalhe": "Construção Civil & Real Estate",
    "setor_macro": "Construção Civil & Real Estate",
    "regiao": "Sudeste (ES/Nacional)",
    "tribunal": "Varas Cíveis/Empresariais",
    "processo": "0015243-88.2026.8.08.0024",
    "fase": "Cautelar Antecedente (art. 20-B)",
    "score": 9.5,
    "tier": "Tier 1 (Máxima Conversão - Mandato Aberto)",
    "passivo_mm": 201,
    "passivo_display": "201",
    "credores": "Bancos financiadores à produção (Caixa, Bradesco, Santander), adquirentes de imóveis e fornecedores de materiais (cimento/aço)",
    "perfil_passivo": "Financiamento à Produção (Plano Empresário) + Fornecedores",
    "advocacia": "TBD",
    "aj": "N/A (Fase Cautelar)",
    "tese": "Financial Advisory urgente no prazo de 30 dias da cautelar + Venda de SPEs/Terrenos como UPI limpa + DIP para término de obras",
    "status": "Novo",
    "proximas_acoes": "Abordar devedora para suporte na modelagem do PRJ antes de vencer os 30 dias de blindagem",
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
    "subtipo_processo": "Cautelar / Pré-RJ"
  },
  {
    "id": 19,
    "data_evento": "2026-10-05",
    "data_adicao": "2026-10-05",
    "empresa": "Grupo Laurindo de Castilhos (Agrícola Formosa / Tapera)",
    "cnpj": "18.235.934/0001-78",
    "setor_detalhe": "Agronegócio / Grãos & Algodão",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Sul / Centro-Norte (TJPR Curitiba e TJBA)",
    "tribunal": "TJPR - 1ª Vara Estadual de Falências e RJ de Curitiba",
    "processo": "0008410-10.2026.8.16.0179",
    "fase": "Recuperação Judicial (Disputa de Competência e Impugnação ao Plano)",
    "score": 8.5,
    "tier": "Tier 2 (Alta Probabilidade - Plano a Elaborar)",
    "passivo_mm": 252,
    "passivo_display": "252",
    "credores": "Fosnor (R$ 87,4M garantia real), SLC Agrícola (R$ 115,9M), Securitizadoras Virgo e Reit (R$ 304,5M extraconcursais) e BRDE",
    "perfil_passivo": "Alienação Fiduciária de Terras (Securitizadoras/CRI) + Fornecedores de Insumos (Fosnor) + BRDE",
    "advocacia": "TBD",
    "aj": "AJUDD",
    "tese": "Creditor-side Advisory (Representação de credores com garantia real e securitizadoras) + Venda de Fazenda como UPI",
    "status": "Novo",
    "proximas_acoes": "Mapear posição da Virgo/Reit e Fosnor para estruturar assessoria ao comitê de credores",
    "watchdog_eligible": true,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)",
      "Venda de UPI / Desinvestimento de Ativos (Conta Escrow)"
    ],
    "cidade": "Formosa do Rio Preto",
    "uf": "BA",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 20,
    "data_evento": "2026-10-06",
    "data_adicao": "2026-10-06",
    "empresa": "Grupo Martins (Produtores Sidrolândia)",
    "cnpj": "31.840.120/0001-88",
    "setor_detalhe": "Agro",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Centro-Oeste",
    "tribunal": "TJMS - Sidrolândia",
    "processo": "0801422-11.2026.8.12.0045",
    "fase": "Recuperação Judicial (Plano recebido)",
    "score": 8.5,
    "tier": "Tier 2 (Alta Probabilidade - Plano a Elaborar)",
    "passivo_mm": 32,
    "passivo_display": "32",
    "credores": "Sicredi e BB (72% da dívida)",
    "perfil_passivo": "Bancário / Cooperativa",
    "advocacia": "TBD",
    "aj": "TBD",
    "tese": "Financial Advisory",
    "status": "Novo",
    "proximas_acoes": "TBD",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 21,
    "data_evento": "2026-10-01",
    "data_adicao": "2026-10-06",
    "empresa": "Grupo Pery",
    "cnpj": "27.910.440/0001-54",
    "setor_detalhe": "Agronegócio & Silvicultura",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Centro-Oeste (MS)",
    "tribunal": "TBD",
    "processo": "0809122-45.2026.8.12.0002",
    "fase": "Recuperação Judicial (Edital art. 52)",
    "score": 8.5,
    "tier": "Tier 2 (Alta Probabilidade - Plano a Elaborar)",
    "passivo_mm": 196,
    "passivo_display": "196",
    "credores": "BTG Pactual e Itaú",
    "perfil_passivo": "Bancário Privado",
    "advocacia": "TBD",
    "aj": "TBD",
    "tese": "Financial Advisory",
    "status": "Novo",
    "proximas_acoes": "Prazo de entrega do plano vence em 16/10/2026",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 22,
    "data_evento": "2026-10-06",
    "data_adicao": "2026-10-07",
    "empresa": "Braskem S/A (BAK / BRKM5)",
    "cnpj": "42.150.391/0001-70",
    "setor_detalhe": "Petroquímica / Indústria & Materiais Básicos",
    "setor_macro": "Indústria & Manufatura",
    "regiao": "São Paulo / SP (Nacional / Global)",
    "tribunal": "Varas Empresariais SP",
    "processo": "Negociação Privada / PRE",
    "fase": "Recuperação Extrajudicial (Standstill Internacional & Contraproposta de Aporte)",
    "score": 9,
    "tier": "Tier 1 (Máxima Conversão - Mandato Aberto)",
    "passivo_mm": 58000,
    "passivo_display": "58.000",
    "credores": "Sindicato internacional de bancos (Citi, JPMorgan, Santander, Bradesco, Itaú), titulares de bonds no exterior e Petrobras",
    "perfil_passivo": "Mercado Internacional (Bonds / Dívida Externa) + Sindicato Bancário Local e Global",
    "advocacia": "TBD",
    "aj": "N/A (Fase Extrajudicial)",
    "tese": "Creditor-side Advisory (Representação de credores locais e comitês de fornecedores da cadeia química) + Venda de UPI de ativos industriais",
    "status": "Novo",
    "proximas_acoes": "Acompanhar apresentação da contraproposta dos controladores (Petrobras e IG4) aos credores",
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
    "subtipo_processo": "PRE"
  },
  {
    "id": 23,
    "data_evento": "2026-10-06",
    "data_adicao": "2026-10-07",
    "empresa": "Grupo Apex Partners (Apex Participações / Securitizadora)",
    "cnpj": "24.184.238/0001-80",
    "setor_detalhe": "Serviços Financeiros & Crédito",
    "setor_macro": "Serviços Financeiros & Crédito",
    "regiao": "Sudeste (ES / SP)",
    "tribunal": "Varas Cíveis/Empresariais de Vitória",
    "processo": "501XXXX-XX.2026.8.08.0024",
    "fase": "Recuperação Judicial (Perícia Forense e Constatação do Art. 51-A)",
    "score": 8.5,
    "tier": "Tier 2 (Alta Probabilidade - Plano a Elaborar)",
    "passivo_mm": 986,
    "passivo_display": "986",
    "credores": "Titulares de Debêntures e Notas Comerciais, Cotistas de FIDCs, Investidores de Wealth Management e Securitizadoras",
    "perfil_passivo": "Mercado de Capitais (Debêntures e Notas Comerciais) + Fundos Estruturados (FIDCs) + Dívida Intercompany",
    "advocacia": "TBD",
    "aj": "Perícia contábil independente / Laspro Consultores",
    "tese": "Creditor-side Advisory (Representação de debenturistas e fundos lesados) + Distressed Debt / Cessão de Recebíveis Sadios + CRO de Saneamento",
    "status": "Novo",
    "proximas_acoes": "Mapear lista de investidores e debenturistas da securitizadora para estruturar comitê de credores",
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
    "subtipo_processo": "Cautelar / Pré-RJ"
  },
  {
    "id": 24,
    "data_evento": "2026-10-01",
    "data_adicao": "2026-10-07",
    "empresa": "VRZ Blindados (VRZ Blindagens e Auto Laska)",
    "cnpj": "30.893.544/0001-90",
    "setor_detalhe": "Indústria Automotiva / Blindagem & Comércio de Veículos",
    "setor_macro": "Indústria & Manufatura",
    "regiao": "São Paulo / SP (São Bernardo do Campo)",
    "tribunal": "TJSP - 2ª Vara Reg. Empresarial (1ª, 7ª e 9ª RAJs)",
    "processo": "4002138-57.2026.8.26.0260",
    "fase": "Cautelar Antecedente / Mediação Pré-Processual (Art. 20-B no CMAASP)",
    "score": 9.5,
    "tier": "Tier 1 (Máxima Conversão - Mandato Aberto)",
    "passivo_mm": 104,
    "passivo_display": "104",
    "credores": "FIDC Pangu (R$ 24,83M), Itaú Unibanco (R$ 17,73M), Bradesco (R$ 17,11M), Santander (R$ 13,39M) e AGP do Brasil (R$ 9,74M) - 4 credores detêm 70%",
    "perfil_passivo": "FIDC / Direitos Creditórios + Bancário Concentrado (Itaú, Bradesco, Santander) + Fornecedor",
    "advocacia": "Mange Advogados (Dr. Eduardo Foz Mange - OAB/SP 222.278)",
    "aj": "N/A (Fase Cautelar / CMAASP)",
    "tese": "Financial Advisory na mediação do CMAASP e modelagem de PRJ/PRE + Gestão Interina / CRO para estabilização de caixa e suprimento de vidros/aço + DIP",
    "status": "Novo",
    "proximas_acoes": "Contato de alto nível com Dr. Eduardo Foz Mange para parceria em Financial Advisory / PRJ e mediação perante o CMAASP",
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
    "subtipo_processo": "Cautelar / Pré-RJ"
  },
  {
    "id": 25,
    "data_evento": "2026-10-05",
    "data_adicao": "2026-10-07",
    "empresa": "Grupo Carbon Blindados (C Blindados / Opera Glass / Vertco)",
    "cnpj": "22.811.775/0001-80",
    "setor_detalhe": "Indústria Automotiva / Blindagens (Líder Nacional)",
    "setor_macro": "Indústria & Manufatura",
    "regiao": "São Paulo / SP (Barueri)",
    "tribunal": "TJSP - 1ª Vara de Falências e RJs da Capital",
    "processo": "XXXXX-75.2026.8.26.0100",
    "fase": "Recuperação Extrajudicial (Classe 128 / PRE com Dinheiro Novo/DIP)",
    "score": 9,
    "tier": "Tier 1 (Máxima Conversão - Mandato Aberto)",
    "passivo_mm": 371,
    "passivo_display": "371",
    "credores": "FIDC Amadeus (R$ 95,2M), Banco Digimais (R$ 61,4M em debêntures), FIDC SSG (R$ 38,4M), Banco do Brasil (R$ 35,7M), Bradesco, Santander e Porto Seguro (R$ 16-17M cada)",
    "perfil_passivo": "FIDCs Estruturados (R$ 133M) + Debêntures (Digimais) + Bancário Comercial (BB, Bradesco, Santander)",
    "advocacia": "TBD",
    "aj": "N/A (Fase de Homologação)",
    "tese": "Estruturação de Dinheiro Novo / DIP Financing de R$ 60M a R$ 100M previsto no plano + Assessoria a credores não aderentes (BB, Santander, Digimais)",
    "status": "Novo",
    "proximas_acoes": "Contatar bancos dissidentes e avaliar sindicação do DIP com fundos parceiros da Sentinela AI",
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
    "subtipo_processo": "PRE"
  },
  {
    "id": 26,
    "data_evento": "2026-09-24",
    "data_adicao": "2026-10-07",
    "empresa": "Grupo Nutriplus & Ômega",
    "cnpj": "49.254.634/0001-60",
    "setor_detalhe": "Tecnologia & Serviços B2B",
    "setor_macro": "Tecnologia & Serviços B2B",
    "regiao": "São Paulo / SP",
    "tribunal": "TJSP - Varas Cíveis/Empresariais",
    "processo": "1004120-88.2026.8.26.0526",
    "fase": "Cautelar Antecedente / Mediação Pré-Processual (Art. 20-B)",
    "score": 9.5,
    "tier": "Tier 1 (Máxima Conversão - Mandato Aberto)",
    "passivo_mm": 190,
    "passivo_display": "190",
    "credores": "FIDC de direitos creditórios, bancos comerciais de antecipação de recebíveis públicos e fornecedores de alimentos",
    "perfil_passivo": "FIDCs / Antecipação de Recebíveis de Contratos Públicos + Bancário Curto Prazo",
    "advocacia": "TBD",
    "aj": "N/A (Fase Cautelar)",
    "tese": "Financial Advisory na mediação prévia e estruturação de PRJ + Gestão Interina / CRO de contratos públicos",
    "status": "Novo",
    "proximas_acoes": "Mapear posição dos FIDCs e avaliar necessidade de CRO operacional",
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
    "subtipo_processo": "Cautelar / Pré-RJ"
  },
  {
    "id": 27,
    "data_evento": "2026-09-16",
    "data_adicao": "2026-10-07",
    "empresa": "Royal Agro Trading",
    "cnpj": "01.655.275/0001-26",
    "setor_detalhe": "Agronegócio / Trading de Grãos (Soja e Milho)",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Centro-Oeste (Ponta Porã / MS)",
    "tribunal": "TJMS - Comarca de Ponta Porã",
    "processo": "0804512-77.2026.8.12.0019",
    "fase": "Cautelar Antecedente (Art. 20-B para suspensão de execuções e travas)",
    "score": 9.5,
    "tier": "Tier 1 (Máxima Conversão - Mandato Aberto)",
    "passivo_mm": 198,
    "passivo_display": "198",
    "credores": "Bancos privados (travas bancárias e vencimento antecipado), tradings globais e produtores rurais devedores/credores de CPRs",
    "perfil_passivo": "Linhas de Financiamento à Exportação (ACC/ACE) + CPRs / Barter de Grãos",
    "advocacia": "TBD",
    "aj": "N/A (Fase Cautelar)",
    "tese": "Financial Advisory Rural (renegociação de ACC/ACE com bancos) + DIP Safra / Barter para destravamento de armazéns",
    "status": "Novo",
    "proximas_acoes": "Abordagem urgente à trading antes da conversão em RJ definitiva",
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
    "subtipo_processo": "Cautelar / Pré-RJ"
  },
  {
    "id": 28,
    "data_evento": "2026-09-14",
    "data_adicao": "2026-10-07",
    "empresa": "Grupo Progen",
    "cnpj": "57.748.204/0001-22",
    "setor_detalhe": "Engenharia Consultiva, Infraestrutura & Concessões",
    "setor_macro": "Energia & Infraestrutura",
    "regiao": "São Paulo / SP (Nacional)",
    "tribunal": "Varas Empresariais SP",
    "processo": "1094120-33.2026.8.26.0100",
    "fase": "Cautelar Antecedente / Mediação Prévia (Suspensão Parcial de Execuções)",
    "score": 9,
    "tier": "Tier 1 (Máxima Conversão - Mandato Aberto)",
    "passivo_mm": 956,
    "passivo_display": "956",
    "credores": "Bancos de fomento e infraestrutura, consórcios parceiros e debenturistas",
    "perfil_passivo": "Project Finance + Dívida Corporativa Bancária",
    "advocacia": "TBD",
    "aj": "N/A (Fase Prévia)",
    "tese": "Financial Advisory para reestruturação de passivo de concessões + M&A / Venda de Ativos de Infraestrutura",
    "status": "Novo",
    "proximas_acoes": "Acompanhar andamento da mediação e avaliar concessões elegíveis para carve-out",
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
    "subtipo_processo": "Cautelar / Pré-RJ"
  },
  {
    "id": 29,
    "data_evento": "2026-09-25",
    "data_adicao": "2026-10-07",
    "empresa": "Grupo Qintess (Tecnologia & Transformação Digital)",
    "cnpj": "36.780.041/0001-95",
    "setor_detalhe": "Tecnologia & Serviços de TI",
    "setor_macro": "Tecnologia & Serviços B2B",
    "regiao": "São Paulo / SP",
    "tribunal": "TJSP - Varas de Falências e RJs",
    "processo": "1098412-55.2026.8.26.0100",
    "fase": "Recuperação Judicial (Classe 129 protocolada)",
    "score": 8.5,
    "tier": "Tier 2 (Alta Probabilidade - Plano a Elaborar)",
    "passivo_mm": 498,
    "passivo_display": "498",
    "credores": "Bancos de capital de giro, fundos de crédito privado e fornecedores de licenças de software/hardware",
    "perfil_passivo": "Bancário Curto Prazo + Dívida Trabalhista de Especialistas de TI + Fornecedores Tech",
    "advocacia": "TBD",
    "aj": "TBD",
    "tese": "Financial Advisory para elaboração do PRJ + Gestão Interina / CRO de reestruturação de contratos de clientes corporativos",
    "status": "Novo",
    "proximas_acoes": "Contatar conselho e acionistas da Qintess para suporte no plano do art. 53",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 30,
    "data_evento": "2026-09-18",
    "data_adicao": "2026-10-07",
    "empresa": "Agropecuária Ivagaci",
    "cnpj": "05.879.389/0001-00",
    "setor_detalhe": "Agronegócio / Grãos & Pecuária",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Sul (Rio Grande do Sul)",
    "tribunal": "TJRS - Varas Cíveis/Agrícolas",
    "processo": "5004891-91.2026.8.21.0028",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.5,
    "tier": "Tier 2 (Alta Probabilidade - Plano a Elaborar)",
    "passivo_mm": 128,
    "passivo_display": "128",
    "credores": "Banrisul, Sicredi, Banco do Brasil, Tradings de Insumos e Securitizadoras de CRA",
    "perfil_passivo": "Crédito Rural Bancário e Cooperativo + Financiamento de Safra",
    "advocacia": "TBD",
    "aj": "TBD",
    "tese": "Financial Advisory Rural + Alongamento de CRAs e CPRs com bancos gaúchos",
    "status": "Novo",
    "proximas_acoes": "Analisar impacto das enchentes/clima nas lavouras e propor renegociação coordenada",
    "watchdog_eligible": false,
    "watchdog_triggers": [
      "Alta Concentração de Dívida Institucional (CR4 > 60%)"
    ],
    "cidade": "Santa Rosa",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 31,
    "data_evento": "2026-10-06",
    "data_adicao": "2026-10-07",
    "empresa": "Grupo SHC (JAC Motors Brasil / Sérgio Habib)",
    "cnpj": "64.936.426/0001-38",
    "setor_detalhe": "Indústria & Manufatura (Automotivo / Importação)",
    "setor_macro": "Varejo & Consumo",
    "regiao": "São Paulo / SP (Nacional)",
    "tribunal": "TJSP - 2ª Vara de Falências e RJs da Capital",
    "processo": "1104821-67.2026.8.26.0100",
    "fase": "Recuperação Judicial (Classe 129 protocolada)",
    "score": 8.5,
    "tier": "Tier 2 (Alta Probabilidade - Plano a Elaborar)",
    "passivo_mm": 240,
    "passivo_display": "240",
    "credores": "Bancos de capital de giro e financiamento de estoque, montadora chinesa JAC e rede de concessionárias",
    "perfil_passivo": "Financiamento de Estoque de Veículos (Floor Plan) + Fornecedores Internacionais",
    "advocacia": "TBD",
    "aj": "TBD",
    "tese": "M&A / Venda de Rede de Concessionárias como UPI + Reestruturação de Contratos Comerciais",
    "status": "Novo",
    "proximas_acoes": "Mapear passivo bancário e imóveis próprios de concessionárias para desinvestimento",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 32,
    "data_evento": "2026-10-02",
    "data_adicao": "2026-10-07",
    "empresa": "Sidlar Móveis",
    "cnpj": "50.819.349/0001-70",
    "setor_detalhe": "Varejo & Consumo (Móveis Planejados & Decoração)",
    "setor_macro": "Varejo & Consumo",
    "regiao": "São Paulo / SP",
    "tribunal": "TJSP - Varas de Falências e RJs",
    "processo": "Processo de RJ",
    "fase": "Recuperação Judicial (Classe 129 protocolada)",
    "score": 8.5,
    "tier": "Tier 2 (Alta Probabilidade - Plano a Elaborar)",
    "passivo_mm": 56,
    "passivo_display": "56",
    "credores": "Banco Bradesco, bancos de antecipação de recebíveis e fornecedores de madeira/marcenaria",
    "perfil_passivo": "Bancário Curto Prazo (Recebíveis de Varejo) + Fornecedores de Insumos",
    "advocacia": "TBD",
    "aj": "TBD",
    "tese": "Financial Advisory para modelagem do PRJ + Readequação de contratos de locação de lojas",
    "status": "Novo",
    "proximas_acoes": "Contatar devedora para suporte na elaboração do plano do art. 53",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 33,
    "data_evento": "2026-08-26",
    "data_adicao": "2026-10-07",
    "empresa": "Habib's (Grupo Alsaraiva / Ragazzo)",
    "cnpj": "59.988.426/0001-90",
    "setor_detalhe": "Varejo & Consumo (Fast-Food & Franquias)",
    "setor_macro": "Varejo & Consumo",
    "regiao": "São Paulo / SP (Nacional)",
    "tribunal": "TJSP - Varas de Falências e RJs da Capital",
    "processo": "108XXXX-XX.2026.8.26.0100",
    "fase": "Recuperação Judicial (Classe 129 deferida pós-cautelar)",
    "score": 8,
    "tier": "Tier 2 (Alta Probabilidade - Plano a Elaborar)",
    "passivo_mm": 265,
    "passivo_display": "265",
    "credores": "Bancos privados comerciais, fornecedores de alimentos e distribuidores de insumos de cozinhas centrais",
    "perfil_passivo": "Bancário Comercial + Fornecedores da Rede de Franquias",
    "advocacia": "TBD",
    "aj": "TBD",
    "tese": "Gestão Interina / CRO de Franquias e Cozinhas Centrais + Reestruturação de Passivo com Fornecedores",
    "status": "Em Análise",
    "proximas_acoes": "Acompanhar prazos de assembleia e mapear relação com franqueados",
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
    "subtipo_processo": "Cautelar / Pré-RJ"
  },
  {
    "id": 34,
    "data_evento": "2026-08-27",
    "data_adicao": "2026-10-07",
    "empresa": "Fertilizantes Heringer",
    "cnpj": "22.266.175/0001-89",
    "setor_detalhe": "Agronegócio & Silvicultura (Fertilizantes & Nutrição de Plantas)",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Sudeste (ES / SP)",
    "tribunal": "Varas Cíveis/Empresariais",
    "processo": "Tutela Cautelar Antecedente",
    "fase": "Recuperação Extrajudicial (Mediação Prévia no CEJUSC para PRE)",
    "score": 9.5,
    "tier": "Tier 1 (Máxima Conversão - Mandato Aberto)",
    "passivo_mm": 1980,
    "passivo_display": "1.980",
    "credores": "Bancos fornecedores de crédito agro (BB, Santander, Bradesco), tradings multinacionais e importadores de matéria-prima química",
    "perfil_passivo": "Linhas de Financiamento Agro / Comércio Exterior + Dívida Comercial com Fornecedores Globais de NPK",
    "advocacia": "TBD",
    "aj": "Perícia prévia / AJ Ruiz",
    "tese": "Financial Advisory na mediação prévia com bancos agro + Estruturação de DIP Financing para capital de giro de importação",
    "status": "Novo",
    "proximas_acoes": "Abordar a diretoria financeira durante o período de stay period de 60 dias",
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
    "subtipo_processo": "PRE"
  },
  {
    "id": 35,
    "data_evento": "2026-09-21",
    "data_adicao": "2026-10-07",
    "empresa": "Grupo Edeltec (Energia Solar & Fotovoltaica)",
    "cnpj": "10.289.713/0001-70",
    "setor_detalhe": "Energia & Infraestrutura (Geração Distribuída & Equipamentos Fotovoltaicos)",
    "setor_macro": "Energia & Infraestrutura",
    "regiao": "Sul / Sudeste",
    "tribunal": "Varas Cíveis/Empresariais",
    "processo": "0024150-88.2026.8.16.0017",
    "fase": "Recuperação Judicial (Classe 129 protocolada)",
    "score": 8.5,
    "tier": "Tier 2 (Alta Probabilidade - Plano a Elaborar)",
    "passivo_mm": 92,
    "passivo_display": "92",
    "credores": "Fabricantes globais de módulos solares e inversores (China), bancos de fomento comercial e transportadoras",
    "perfil_passivo": "Fornecedores Internacionais de Painéis Solares + Bancário de Giro",
    "advocacia": "TBD",
    "aj": "TBD",
    "tese": "Special Situations em Energia + Repactuação com fabricantes e securitização de recebíveis de integradores",
    "status": "Novo",
    "proximas_acoes": "Analisar carteira de integradores solares e propor reestruturação de recebíveis",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 36,
    "data_evento": "2026-09-28",
    "data_adicao": "2026-10-07",
    "empresa": "B-Green Soluções Ambientais (Ex-Stericycle)",
    "cnpj": "01.568.077/0001-25",
    "setor_detalhe": "Saúde & Farma (Tratamento de Resíduos Hospitalares & Serviços Ambientais)",
    "setor_macro": "Saúde & Farma",
    "regiao": "São Paulo / SP (Campinas e Mogi Mirim)",
    "tribunal": "TJSP - Comarca de Campinas",
    "processo": "1004215-15.2026.8.26.0354",
    "fase": "Recuperação Judicial (Classe 129 - Segredo de Justiça Negado)",
    "score": 8.5,
    "tier": "Tier 2 (Alta Probabilidade - Plano a Elaborar)",
    "passivo_mm": 83,
    "passivo_display": "83",
    "credores": "Instituições financeiras de leasing de frotas hospitalares, prestadores de serviços de incineração e fornecedores de equipamentos",
    "perfil_passivo": "Leasing de Frotas / Financiamento de Ativos + Fornecedores Operacionais",
    "advocacia": "TBD",
    "aj": "TBD",
    "tese": "Financial Advisory na elaboração do PRJ + Renegociação de contratos de concessão hospitalar e gestão de frotas",
    "status": "Novo",
    "proximas_acoes": "Acompanhar publicação do primeiro edital de credores em Campinas",
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
    "subtipo_processo": "Cautelar / Pré-RJ"
  },
  {
    "id": 37,
    "data_evento": "2026-08-15",
    "data_adicao": "2026-10-07",
    "empresa": "Grupo Toky (Tok&Stok e Mobly)",
    "cnpj": "31.553.627/0001-01",
    "setor_detalhe": "Varejo & Consumo (Móveis & Decoração)",
    "setor_macro": "Varejo & Consumo",
    "regiao": "São Paulo / SP (Nacional)",
    "tribunal": "Varas Empresariais SP",
    "processo": "1081230-44.2026.8.26.0100",
    "fase": "Recuperação Extrajudicial (Classe 128 / Acordo de Fusão)",
    "score": 8,
    "tier": "Tier 2 (Alta Probabilidade - Plano a Elaborar)",
    "passivo_mm": 600,
    "passivo_display": "600",
    "credores": "Bancos de capital de giro e debenturistas da rede de lojas",
    "perfil_passivo": "Bancário Comercial + Debêntures",
    "advocacia": "TBD",
    "aj": "N/A (Fase Extrajudicial)",
    "tese": "Gestão Interina / CRO de Integração de Lojas e Centros de Distribuição + Venda de Pontos Comerciais",
    "status": "Novo",
    "proximas_acoes": "Mapear desdobramentos da integração operacional Mobly / Tok&Stok",
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
    "subtipo_processo": "PRE"
  },
  {
    "id": 38,
    "data_evento": "2026-08-25",
    "data_adicao": "2026-10-07",
    "empresa": "Terra Assessoria de Siderúrgicas",
    "cnpj": "09.639.962/0001-60",
    "setor_detalhe": "Indústria & Manufatura (Consultoria Metalúrgica & Siderurgia)",
    "setor_macro": "Indústria & Manufatura",
    "regiao": "Minas Gerais (Sete Lagoas / MG)",
    "tribunal": "TJMG - Sete Lagoas",
    "processo": "5008912-11.2026.8.13.0672",
    "fase": "Recuperação Extrajudicial (Classe 128 protocolada)",
    "score": 7.5,
    "tier": "Tier 2 (Alta Probabilidade - Plano a Elaborar)",
    "passivo_mm": 305,
    "passivo_display": "305",
    "credores": "Fornecedores industriais do setor siderúrgico e bancos de crédito corporativo",
    "perfil_passivo": "Quirografário Comercial com Cadeia Siderúrgica + Bancário",
    "advocacia": "TBD",
    "aj": "N/A (Fase Extrajudicial)",
    "tese": "Assessoria a Credores Quirografários / Repactuação de Fornecimento com Usinas de Gusa",
    "status": "Novo",
    "proximas_acoes": "Acompanhar prazo de impugnação de credores quirografários",
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
    "subtipo_processo": "PRE"
  },
  {
    "id": 39,
    "data_evento": "2026-10-03",
    "data_adicao": "2026-10-07",
    "empresa": "Grupo Agroindustrial do Cerrado (Grãos, Soja/Milho)",
    "cnpj": "08.412.981/0001-34",
    "setor_detalhe": "Agro",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Centro-Oeste",
    "tribunal": "Fórum de Sorriso (MT) // CENPROT",
    "processo": "Pré-Processual (Monitoramento Extrajudicial)",
    "fase": "Sinal Precursor — Spike de Protestos & Arresto de Safra",
    "score": 9.4,
    "tier": "Tier 0 (Radar Preditivo - Sinais Pré-Concursais 60-120d)",
    "passivo_mm": 185,
    "passivo_display": "185",
    "credores": "Tradings Globais (Cargill, Bunge, ADM), Revendas de Insumos e Bancos do Agro (BB, Sicredi)",
    "perfil_passivo": "Barter / CPR Física e Financeira + Crédito Rural de Custeio",
    "advocacia": "Em prospecção (Contatos com bancas de MT e SP)",
    "aj": "N/A (Fase Pré-Concursal)",
    "tese": "Shadow Restructuring, Standstill com Tradings e Assessoria Financeira para Reestruturação de CPRs",
    "status": "Novo — Alerta Preditivo",
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
    "subtipo_processo": "Tier 0"
  },
  {
    "id": 40,
    "data_evento": "2026-10-04",
    "data_adicao": "2026-10-07",
    "empresa": "Rede Hospitalar & Operadora Regional Sul-Sudeste",
    "cnpj": "14.289.442/0001-89",
    "setor_detalhe": "Saúde",
    "setor_macro": "Saúde & Farma",
    "regiao": "Sul / Sudeste",
    "tribunal": "Regulatório ANS // TRT-4 // TJPR",
    "processo": "DOU Resolução Operacional ANS nº 3.142/2026",
    "fase": "Sinal Precursor — Direção Fiscal ANS & PEPT TRT",
    "score": 9.2,
    "tier": "Tier 0 (Radar Preditivo - Sinais Pré-Concursais 60-120d)",
    "passivo_mm": 260,
    "passivo_display": "260",
    "credores": "Bancos comerciais (Itaú, Bradesco, Santander), Fornecedores de OPME e Distribuidores Farma",
    "perfil_passivo": "Bancário Capital de Giro + Fornecedores Médicos + Passivo Trabalhista",
    "advocacia": "Banca regional especializada em saúde em negociação",
    "aj": "N/A (Fase Pré-Concursal)",
    "tese": "Company-side Advisory para Alienação de Carteira (UPI regulada ANS) e Watchdog de Caixa para Bancos Credores",
    "status": "Novo — Alerta Preditivo",
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
    "subtipo_processo": "Tier 0"
  },
  {
    "id": 41,
    "data_evento": "2026-10-04",
    "data_adicao": "2026-10-07",
    "empresa": "Renovare Energia & Comercializadora S/A",
    "cnpj": "21.733.109/0001-55",
    "setor_detalhe": "Energia",
    "setor_macro": "Energia & Infraestrutura",
    "regiao": "Sudeste / Nordeste",
    "tribunal": "Câmara de Comercialização (CCEE) // CVM",
    "processo": "Notificação CCEE MCP nº 2026/089",
    "fase": "Sinal Precursor — Inadimplemento CCEE & Downgrade CVM",
    "score": 9.1,
    "tier": "Tier 0 (Radar Preditivo - Sinais Pré-Concursais 60-120d)",
    "passivo_mm": 340,
    "passivo_display": "340",
    "credores": "Debenturistas da 2ª Emissão, Bancos repassadores BNDES e Agentes da CCEE",
    "perfil_passivo": "Debêntures de Infraestrutura + Garantias Financeiras MCP CCEE",
    "advocacia": "Em consulta com banca de infraestrutura e energia",
    "aj": "N/A (Fase Pré-Concursal)",
    "tese": "Financial Advisory para Standstill com Debenturistas, Reestruturação de Contratos Bilaterais e Standstill na CCEE",
    "status": "Novo — Alerta Preditivo",
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
    "subtipo_processo": "Tier 0"
  },
  {
    "id": 42,
    "data_evento": "2026-10-05",
    "data_adicao": "2026-10-07",
    "empresa": "Rede Varejista Moda & Calçados Brasil (120 Lojas)",
    "cnpj": "05.118.774/0001-92",
    "setor_detalhe": "Varejo",
    "setor_macro": "Varejo & Consumo",
    "regiao": "Sudeste / Sul",
    "tribunal": "CENPROT-SP // TJSP Varas Cíveis // PGFN",
    "processo": "Execuções Fiscais PGFN nº 5001192-33.2026.4.03.6182",
    "fase": "Sinal Precursor — Spike Crítico de Protestos & Penhora CPC 866",
    "score": 8.8,
    "tier": "Tier 0 (Radar Preditivo - Sinais Pré-Concursais 60-120d)",
    "passivo_mm": 145,
    "passivo_display": "145",
    "credores": "Bancos privados (Itaú, Santander, Bradesco, Safra, Daycoval), Shopping Centers e Confeccionistas",
    "perfil_passivo": "Capital de Giro + Aluguéis Comerciais Mínimos + Fornecedores",
    "advocacia": "Em sondagem preliminar",
    "aj": "N/A (Fase Pré-Concursal)",
    "tese": "Gestão Interina (CRO), Fechamento Estratégico de Lojas Deficitárias e Renegociação Bilateral Bancária",
    "status": "Novo — Alerta Preditivo",
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
    "subtipo_processo": "Tier 0"
  },
  {
    "id": 43,
    "data_evento": "2026-10-05",
    "data_adicao": "2026-10-07",
    "empresa": "Metalúrgica Autopeças & Componentes Pesados",
    "cnpj": "58.910.223/0001-44",
    "setor_detalhe": "Indústria",
    "setor_macro": "Indústria & Manufatura",
    "regiao": "SP",
    "tribunal": "CVM Fundos.NET // 2º CRI Campinas // SEIC",
    "processo": "FIDC Autopeças SP - Fato Relevante CVM nº 18/2026",
    "fase": "Sinal Precursor — FIDC em Amortização Antecipada & Intimação SEIC",
    "score": 8.6,
    "tier": "Tier 0 (Radar Preditivo - Sinais Pré-Concursais 60-120d)",
    "passivo_mm": 95,
    "passivo_display": "95",
    "credores": "FIDC de Duplicatas Mercantis, Bancos Industriais (Bradesco, Santander) e Fornecedores de Aço",
    "perfil_passivo": "Antecipação de Recebíveis Bloqueados + Garantia Real de Galpão Fabril",
    "advocacia": "Em estruturação de governança emergencial",
    "aj": "N/A (Fase Pré-Concursal)",
    "tese": "Financial Advisory (Blindagem de Parque Fabril via Cautelar), Acordo Tripartite com Montadoras e DIP Finance",
    "status": "Novo — Alerta Preditivo",
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
    "subtipo_processo": "Tier 0"
  },
  {
    "id": 44,
    "data_evento": "2026-10-06",
    "data_adicao": "2026-10-07",
    "empresa": "TransLog Cargas Pesadas & Logística Rodoviária",
    "cnpj": "18.330.145/0001-18",
    "setor_detalhe": "Serviços",
    "setor_macro": "Tecnologia & Serviços B2B",
    "regiao": "Sudeste / Centro-Oeste",
    "tribunal": "TJSP Varas Cíveis // TRT-2 // Finame",
    "processo": "Busca e Apreensão nº 1018922-88.2026.8.26.0002",
    "fase": "Sinal Precursor — Execuções de Frota & PEPT Trabalhista",
    "score": 8.5,
    "tier": "Tier 0 (Radar Preditivo - Sinais Pré-Concursais 60-120d)",
    "passivo_mm": 120,
    "passivo_display": "120",
    "credores": "Bancos de Montadoras (Mercedes-Benz Bank, Scania Banco, Volvo Financial), Distribuidoras de Diesel e Bancos Privados",
    "perfil_passivo": "Alienação Fiduciária de Frota (Finame/Leasing) + Combustível",
    "advocacia": "Em consulta com banca cível e societária",
    "aj": "N/A (Fase Pré-Concursal)",
    "tese": "Renegociação Preventiva com Bancos de Montadoras (Standstill de parcelas) e Estruturação de PRE",
    "status": "Novo — Alerta Preditivo",
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
    "subtipo_processo": "Tier 0"
  },
  {
    "id": 45,
    "data_evento": "2026-10-06",
    "data_adicao": "2026-10-07",
    "empresa": "Engenharia & Construtora InfraBrasil",
    "cnpj": "03.771.890/0001-67",
    "setor_detalhe": "Construção",
    "setor_macro": "Construção Civil & Real Estate",
    "regiao": "Nacional (MG/SP/RJ)",
    "tribunal": "CGU / PNCP // RTDPJ Belo Horizonte",
    "processo": "Processo Administrativo de Inidoneidade CGU nº 00190.2026-11",
    "fase": "Sinal Precursor — Sanção CEIS/CNEP & Execução de Fianças",
    "score": 8.9,
    "tier": "Tier 0 (Radar Preditivo - Sinais Pré-Concursais 60-120d)",
    "passivo_mm": 210,
    "passivo_display": "210",
    "credores": "Seguradoras Garantidoras (Pomerania, Pottencial, Junto), Bancos de Fiança (Daycoval, ABC Brasil) e Subempreiteiros",
    "perfil_passivo": "Seguro Garantia / Fianças Bancárias em Execução + Fornecedores de Maquinário",
    "advocacia": "Banca de infraestrutura em Belo Horizonte",
    "aj": "N/A (Fase Pré-Concursal)",
    "tese": "Watchdog Independente para Seguradoras e Bancos de Fiança (Supervisão de Medições e Conta Escrow de Contratos)",
    "status": "Novo — Alerta Preditivo",
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
    "subtipo_processo": "Tier 0"
  },
  {
    "id": 46,
    "data_evento": "2026-10-07",
    "data_adicao": "2026-10-07",
    "empresa": "Concessionária Rodoviária das Colinas do Tietê",
    "cnpj": "10.450.881/0001-22",
    "setor_detalhe": "Infraestrutura",
    "setor_macro": "Energia & Infraestrutura",
    "regiao": "SP",
    "tribunal": "ARTESP // B3 / CVM // 1ª Vara da Fazenda Pública SP",
    "processo": "Processo ARTESP Caducidade nº 0089/2026",
    "fase": "Sinal Precursor — Processo de Caducidade ARTESP & AGD Debêntures",
    "score": 9.6,
    "tier": "Tier 0 (Radar Preditivo - Sinais Pré-Concursais 60-120d)",
    "passivo_mm": 420,
    "passivo_display": "420",
    "credores": "Debenturistas da 1ª e 2ª Emissão, BNDES, Agência Reguladora (Multas Contratuais) e Construtoras",
    "perfil_passivo": "Project Finance Não-Recurso + Debêntures Incentivadas (Lei 12.431)",
    "advocacia": "Em tratativas com bancas regulatórias",
    "aj": "N/A (Fase Pré-Concursal)",
    "tese": "Tutela Cautelar Antecedente (Art. 20-B) para suspensão de Caducidade, Mediação no TCU/CCMA e Relicitação Amigável (Lei 13.448)",
    "status": "Novo — Alerta Preditivo",
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
    "subtipo_processo": "Tier 0"
  },
  {
    "id": 47,
    "data_evento": "2026-09-18",
    "data_adicao": "2026-10-07",
    "empresa": "AgroGalaxy Participações S/A (AGXY3)",
    "cnpj": "33.914.809/0001-08",
    "setor_detalhe": "Agro",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Centro-Oeste / SP",
    "tribunal": "TJGO - 19ª Vara Cível e Empresarial de Goiânia",
    "processo": "5719322-44.2024.8.09.0051",
    "fase": "Recuperação Judicial (Classe 129) — Emissão de DIP & Debêntures",
    "score": 8.8,
    "tier": "Tier 2 (Alta Probabilidade - Plano a Elaborar)",
    "passivo_mm": 4670,
    "passivo_display": "4.670",
    "credores": "Banco do Brasil (R$ 391M), Securitizadoras de CRAs (Vert, Opea), Itaú, Bradesco, Santander e Tradings",
    "perfil_passivo": "CRAs (Mercado de Capitais) + FIDCs de Insumos + Dívida Bancária Comercial",
    "advocacia": "Padis Mattar Advogados // E.Munhoz Advogados",
    "aj": "Preserva-Ação Administração Judicial",
    "tese": "Watchdog Independente para Credores de CRAs, Estruturação de Financiamento DIP e Venda de UPIs de Lojas",
    "status": "Novo — Triagem Ativa",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 48,
    "data_evento": "2026-05-20",
    "data_adicao": "2026-10-07",
    "empresa": "Polimport Comércio e Exportação Ltda (Polishop)",
    "cnpj": "00.436.044/0001-98",
    "setor_detalhe": "Varejo",
    "setor_macro": "Varejo & Consumo",
    "regiao": "SP (Nacional)",
    "tribunal": "TJSP - 2ª Vara de Falências e Recuperações Judiciais do Foro Central",
    "processo": "1048932-56.2024.8.26.0100",
    "fase": "Recuperação Judicial (Classe 129) — Reestruturação de Passivo e Lojas",
    "score": 8.2,
    "tier": "Tier 2 (Alta Probabilidade - Plano a Elaborar)",
    "passivo_mm": 396,
    "passivo_display": "396",
    "credores": "Banco do Brasil, BMP Money Plus, Zurich Minas Brasil Seguros, Administradoras de Shoppings e Fornecedores",
    "perfil_passivo": "Bancário Capital de Giro + Aluguéis Comerciais Mínimos + Fornecedores de Eletroportáteis",
    "advocacia": "Dasa Advogados",
    "aj": "Cabezón Administração Judicial",
    "tese": "Gestão Interina (CRO Operacional), Negociação com Shopping Centers e Watchdog para Credores Bancários",
    "status": "Novo — Triagem Ativa",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 49,
    "data_evento": "2026-10-06",
    "data_adicao": "2026-10-08",
    "empresa": "Grupo Echer",
    "cnpj": "11.862.538/0001-21",
    "setor_detalhe": "Construção Civil & Agro",
    "setor_macro": "Construção Civil & Real Estate",
    "regiao": "Centro-Oeste (MT)",
    "tribunal": "TJMT - Vara Especializada de Falências de Cuiabá",
    "processo": "1001234-56.2026.8.11.0041",
    "fase": "Recuperação Judicial (Classe 129 deferida)",
    "score": 9.2,
    "tier": "Tier 1 (Máxima Conversão - Mandato Aberto)",
    "passivo_mm": 170,
    "passivo_display": "170",
    "credores": "Caixa Econômica Federal (41% da dívida / R$ 69,5M), Bancos privados e Fornecedores",
    "perfil_passivo": "Concentração Bancária Estatal (Caixa 41%) + Crédito Imobiliário e Fornecedores",
    "advocacia": "TBD",
    "aj": "A ser nomeado",
    "tese": "Watchdog de Colateral Bancário (Caixa concentra 41%) + DIP Financing para conclusão de empreendimentos",
    "status": "Novo",
    "proximas_acoes": "Analisar garantias reais fiduciárias da Caixa e propor governança independente de obra",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 50,
    "data_evento": "2026-10-03",
    "data_adicao": "2026-10-08",
    "empresa": "Navarro Distribuidora de Medicamentos S/A",
    "cnpj": "13.375.000/0001-00",
    "setor_detalhe": "Distribuição Farmacêutica / Farma & Logística",
    "setor_macro": "Saúde & Farma",
    "regiao": "São Paulo (CDs em SP, ES, MG, PR)",
    "tribunal": "TJSP - 1ª Vara Regional Empresarial de São Paulo",
    "processo": "1098765-43.2026.8.26.0100",
    "fase": "Recuperação Judicial (Classe 129 protocolada)",
    "score": 8.8,
    "tier": "Tier 2 (Alta Probabilidade - Plano a Elaborar)",
    "passivo_mm": 115,
    "passivo_display": "115",
    "credores": "Bancos comerciais privados (Itaú, Santander, Bradesco), Laboratórios Farmacêuticos e Fornecedores",
    "perfil_passivo": "Bancário Curto Prazo (Capital de Giro e Alavancagem) + Fornecedores Industriais",
    "advocacia": "TBD",
    "aj": "A ser nomeado",
    "tese": "Elaboração de Plano Concursal em 60 dias, Reestruturação de Dívida Bancária de Curto Prazo e DIP de Giro",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 51,
    "data_evento": "2026-10-08",
    "data_adicao": "2026-10-08",
    "empresa": "Grupo Safras (Safras Armazéns Gerais & Agropecuária)",
    "cnpj": "07.834.789/0001-00",
    "setor_detalhe": "Agro & Armazenagem",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Centro-Oeste",
    "tribunal": "TJMT - Vara Regional de Sorriso / Sinop",
    "processo": "1001452-88.2025.8.11.0040",
    "fase": "Recuperação Judicial (Afastamento Compulsório de Gestores pelo TJMT)",
    "score": 9.4,
    "tier": "Tier 1 (Máxima Conversão - Vacância de Gestão)",
    "passivo_mm": 1780,
    "passivo_display": "1.780",
    "credores": "Tradings Internacionais (Cargill, Bunge, Cofco), Bancos (Banco do Brasil, Bradesco, Santander), Fornecedores de Insumos e CPRs",
    "perfil_passivo": "CPRs + Barter Comercial + Dívida Bancária Estruturada",
    "advocacia": "TBD",
    "aj": "Em definição pelo TJMT",
    "tese": "Gestão Interina / CRO (substituição de controlador afastado pelo TJMT em 08/10/2026), Comitê de Credores (Creditor-Side) e Alienação de UPI de Silos",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 52,
    "data_evento": "2026-10-09",
    "data_adicao": "2026-10-09",
    "empresa": "Qualiciclo Agrícola S.A. (Rede Lavoro de Insumos)",
    "cnpj": "04.784.681/0001-87",
    "setor_detalhe": "Distribuição de Insumos & Fertilizantes",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Sudeste (SP)",
    "tribunal": "TJSP - 2ª Vara de Falências e Recuperações Judiciais",
    "processo": "1079322-26.2025.8.26.0100",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 9.5,
    "tier": "Tier 1 (Máxima Conversão - Mandato Aberto)",
    "passivo_mm": 2548,
    "passivo_display": "2.548",
    "credores": "Corteva Agriscience, Mosaic Fertilizantes, UPL do Brasil, FMC Química, Helm do Brasil, Banco Votorantim, Banco Daycoval",
    "perfil_passivo": "Fornecedores Multinacionais de Insumos/Fertilizantes + Dívida Bancária Comercial",
    "advocacia": "Galdino & Coelho Advogados",
    "aj": "Aguardando publicação de edital",
    "tese": "Watchdog Creditor-Side para multinacionais químicas e bancos, estruturação de DIP Financing de fornecedores e renegociação de prazos de barter",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 53,
    "data_evento": "2026-10-09",
    "data_adicao": "2026-10-09",
    "empresa": "Cooperativa Agrícola Mista General Osório Ltda. (Cotribá)",
    "cnpj": "90.657.289/0001-09",
    "setor_detalhe": "Cooperativa Agropecuária & Grãos",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Sul (RS)",
    "tribunal": "TJRS - Vara Regional Empresarial / Comarca de Ibirubá",
    "processo": "5001245-80.2026.8.21.0105",
    "fase": "Liquidação Extrajudicial com Continuidade (Assembleia Convocada)",
    "score": 9.3,
    "tier": "Tier 1 (Máxima Conversão - Mandato Aberto)",
    "passivo_mm": 1420,
    "passivo_display": "1.420",
    "credores": "BRDE (R$ 130M), Banco Votorantim (R$ 15M), Sicredi, Banrisul, Titulares de CRAs (R$ 150M) e Produtores Associados",
    "perfil_passivo": "CRAs de Mercado de Capitais + Dívida Bancária Cooperativa + Repasses Rurais",
    "advocacia": "Aguardando autuação",
    "aj": "Conselho de Liquidação em eleição",
    "tese": "Watchdog Creditor-Side para sindicato bancário e detentores de CRAs, segregação de ativos e alienação de UPIs de armazenagem",
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
    "subtipo_processo": "Falência / Liquidação"
  },
  {
    "id": 54,
    "data_evento": "2026-10-09",
    "data_adicao": "2026-10-09",
    "empresa": "Essere Group (Indústria Química Kimberlit Ltda.)",
    "cnpj": "61.167.060/0001-98",
    "setor_detalhe": "Fertilizantes & Insumos Biológicos",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Sudeste (SP)",
    "tribunal": "TJSP - 2ª Vara Cível de Olímpia",
    "processo": "1004122-35.2026.8.26.0400",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 9.1,
    "tier": "Tier 1 (Máxima Conversão - Mandato Aberto)",
    "passivo_mm": 222,
    "passivo_display": "222",
    "credores": "Banco do Brasil (R$ 68,3M), Itaú Unibanco (R$ 42,4M), Santander Brasil (R$ 37,4M) e Fornecedores Industriais",
    "perfil_passivo": "Bancário Curto Prazo Concentrado (CR3 > 82%) + Fornecedores Químicos",
    "advocacia": "Aguardando publicação",
    "aj": "Administrador Judicial nomeado pelo juízo",
    "tese": "M&A Distressed / Alienação Judicial de UPIs (Unidade Bionat de Biológicos em Olímpia e Loyder NPK) e Watchdog Bancário",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 55,
    "data_evento": "2026-10-14",
    "data_adicao": "2026-10-13",
    "empresa": "Grupo Fictor (Fictor Holding S/A, Fictor Invest Ltda e outras 18 empresas)",
    "cnpj": "08.637.270/0001-10",
    "setor_detalhe": "Investimentos, Securitização & Factoring",
    "setor_macro": "Serviços Financeiros & Crédito",
    "regiao": "Sudeste (SP)",
    "tribunal": "TJSP - 3ª Vara de Falências e Recuperações Judiciais",
    "processo": "4014471-36.2026.8.26.0100",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 9.4,
    "tier": "Tier 2 (Alta Probabilidade - Plano a Elaborar)",
    "passivo_mm": 4200,
    "passivo_display": "4.200",
    "credores": "Mais de 13 mil investidores pessoas físicas e jurídicas (mútuos e debêntures), bancos e cotistas",
    "perfil_passivo": "Mercado de Capitais (Debêntures/Mútuos) + Alienação de Participações Societárias/UPIs",
    "advocacia": "Aguardando autuação",
    "aj": "Laspro Consultores Ltda.",
    "tese": "(1) Causa da crise: Descasamento de liquidez em mútuos, SCPs e debêntures pulverizadas entre 13 mil investidores; (2) Gargalo imediato: Pedido em 14/10/2026 para adiar AGC para dezembro citando fundo ligado à Titan Capital Holding (Ilhas Cayman / Vorcaro) como fonte de recursos, além de prazo de objeções ao plano até 29/10/2026; (3) Oportunidade de mandato: Creditor-Side Advisory e Comitê de Credores para contestar suspensão sem garantias firmes + Rastreamento Forense de Ativos.",
    "status": "Novo",
    "proximas_acoes": "Mapear base de debenturistas e investidores com créditos > R$ 5M para formação de comitê de credores e protocolo de objeções conjuntas antes de 29/10",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 56,
    "data_evento": "2026-10-15",
    "data_adicao": "2026-10-16",
    "empresa": "Grupo Família Almeida (Levi de Almeida e Outros - Novo Mundo)",
    "cnpj": "58.054.076/0001-80",
    "setor_detalhe": "Produção de Grãos (Soja & Milho)",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Centro-Oeste (MT)",
    "tribunal": "TJMT - 4ª Vara Cível de Sinop",
    "processo": "1027923-19.2024.8.11.0015",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.7,
    "tier": "Tier 1 (Máxima Conversão - Mandato Aberto)",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 57,
    "data_evento": "2026-10-12",
    "data_adicao": "2026-10-16",
    "empresa": "Grupo NEX (Nex Group Participações S.A. / Capa Engenharia S.A.)",
    "cnpj": "13.062.866/0001-79",
    "setor_detalhe": "Incorporação Imobiliária & Engenharia Pesada",
    "setor_macro": "Construção Civil & Real Estate",
    "regiao": "Sul (RS)",
    "tribunal": "TJRS - 2º Juízo da Vara Regional Empresarial de Porto Alegre",
    "processo": "5001257-57.2026.8.21.0001",
    "fase": "Cautelar Antecedente (art. 20-B)",
    "score": 9.2,
    "tier": "Tier 1 (Máxima Conversão - Mandato Aberto)",
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
    "subtipo_processo": "Cautelar / Pré-RJ"
  },
  {
    "id": 58,
    "data_evento": "2026-10-12",
    "data_adicao": "2026-10-16",
    "empresa": "Grupo Educacional Uniandrade (Campos de Andrade / Unib)",
    "cnpj": "76.189.091/0001-17",
    "setor_detalhe": "Ensino Superior Presencial & EAD (PR/SP)",
    "setor_macro": "Tecnologia & Serviços B2B",
    "regiao": "Sul (PR / SP)",
    "tribunal": "TJPR - 2ª Vara Estadual de Falências e Recuperação Judicial de Curitiba",
    "processo": "0004188-88.2026.8.16.0179",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.9,
    "tier": "Tier 1 (Máxima Conversão - Mandato Aberto)",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 59,
    "data_evento": "2026-10-09",
    "data_adicao": "2026-10-16",
    "empresa": "Moinho Corina Alimentos Ltda.",
    "cnpj": "08.158.596/0001-64",
    "setor_detalhe": "Moagem de Trigo & Alimentos (Cotia/SP)",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Sudeste (SP)",
    "tribunal": "TJSP - 1ª Vara Regional Empresarial das 1ª, 7ª e 9ª RAJs",
    "processo": "1004582-82.2026.8.26.0260",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 9.1,
    "tier": "Tier 1 (Máxima Conversão - Mandato Aberto)",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 60,
    "data_evento": "2026-10-05",
    "data_adicao": "2026-10-16",
    "empresa": "Grupo JMR (Armazéns Santa Luzia Ltda. e HS Agropecuária Ltda.)",
    "cnpj": "49.063.939/0001-94",
    "setor_detalhe": "Produção de Grãos, Hortifruti & Armazenagem",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Centro-Oeste (GO)",
    "tribunal": "TJGO - 2ª Vara Cível da Comarca de Itaberaí",
    "processo": "5604122-51.2026.8.09.0079",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 9.3,
    "tier": "Tier 1 (Máxima Conversão - Mandato Aberto)",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 61,
    "data_evento": "2026-10-01",
    "data_adicao": "2026-10-16",
    "empresa": "Importadora Oplima Ltda.",
    "cnpj": "04.945.481/0001-69",
    "setor_detalhe": "Varejo de Materiais de Construção (Belém/PA)",
    "setor_macro": "Varejo & Consumo",
    "regiao": "Norte (PA)",
    "tribunal": "TJPA - 13ª Vara Cível e Empresarial de Belém",
    "processo": "0845122-95.2026.8.14.0301",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.8,
    "tier": "Tier 1 (Máxima Conversão - Mandato Aberto)",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 62,
    "data_evento": "2026-10-15",
    "data_adicao": "2026-10-16",
    "empresa": "AJX Capital Investimentos S.A.",
    "cnpj": "42.697.069/0001-66",
    "setor_detalhe": "Fintech & Captação via CCBs (Barueri/SP)",
    "setor_macro": "Serviços Financeiros & Crédito",
    "regiao": "Sudeste (SP / DF)",
    "tribunal": "TJSP - 2ª Vara Regional de Competência Empresarial e de Conflitos Relacionados à Arbitragem",
    "processo": "1008941-12.2026.8.26.0260",
    "fase": "Falência Decretada (Classe 110)",
    "score": 9.1,
    "tier": "Tier 1 (Máxima Conversão - Mandato Aberto)",
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
    "subtipo_processo": "Falência / Liquidação"
  },
  {
    "id": 63,
    "data_evento": "2026-10-14",
    "data_adicao": "2026-10-16",
    "empresa": "Grupo Ezata (Ezata Industrial Ltda. e MAGM Empreendimentos Ltda.)",
    "cnpj": "05.061.998/0001-58",
    "setor_detalhe": "Indústria Metalmecânica & Componentes Agrícolas",
    "setor_macro": "Indústria & Manufatura",
    "regiao": "Sul (RS)",
    "tribunal": "TJRS - Juizado Regional Empresarial da Comarca de Passo Fundo",
    "processo": "5014272-72.2026.8.21.0021",
    "fase": "Constatação Prévia (art. 51-A) / Recuperação Judicial (Classe 129)",
    "score": 8.9,
    "tier": "Tier 1 (Máxima Conversão - Mandato Aberto)",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 64,
    "data_evento": "2026-10-14",
    "data_adicao": "2026-10-16",
    "empresa": "Grupo Ditália (Ditália Móveis Industrial Ltda.)",
    "cnpj": "73.289.050/0001-04",
    "setor_detalhe": "Indústria Moveleira (Monte Belo do Sul / Bento Gonçalves)",
    "setor_macro": "Indústria & Manufatura",
    "regiao": "Sul (RS)",
    "tribunal": "TJRS - Vara Regional Empresarial de Caxias do Sul / Bento Gonçalves",
    "processo": "5000812-44.2026.8.21.0005",
    "fase": "Falência com Continuidade / Leilão de UPI (Classe 110)",
    "score": 9.0,
    "tier": "Tier 3 (Pós-Plano - Foco em UPI/DIP)",
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
    "subtipo_processo": "Falência / Liquidação"
  },
  {
    "id": 65,
    "data_evento": "2026-10-13",
    "data_adicao": "2026-10-16",
    "empresa": "Lojas Dona do Lar Ltda.",
    "cnpj": "14.459.063/0001-00",
    "setor_detalhe": "Rede Varejista de Eletrodomésticos e Móveis (15 Lojas em MT)",
    "setor_macro": "Varejo & Consumo",
    "regiao": "Centro-Oeste (MT)",
    "tribunal": "TJMT - 1ª Vara Cível Especializada em Falência e RJ de Cuiabá",
    "processo": "1024511-30.2022.8.11.0041",
    "fase": "Falência Decretada / Rastreamento Forense de Ativos (Classe 110)",
    "score": 8.6,
    "tier": "Tier 3 (Pós-Plano - Foco em UPI/DIP)",
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
    "subtipo_processo": "Falência / Liquidação"
  },
  {
    "id": 66,
    "data_evento": "2026-10-15",
    "data_adicao": "2026-10-16",
    "empresa": "Grupo MPC (MJRE Construtora Ltda. e Usinlagos Pavimentação)",
    "cnpj": "05.851.921/0001-81",
    "setor_detalhe": "Engenharia Pesada, Pavimentação & Contratos Petrobras",
    "setor_macro": "Construção Civil & Real Estate",
    "regiao": "Sudeste (RJ)",
    "tribunal": "TJRJ - 4ª Vara Empresarial da Comarca da Capital",
    "processo": "0814512-15.2026.8.19.0001",
    "fase": "Recuperação Judicial (Classe 129)",
    "score": 8.8,
    "tier": "Tier 1 (Máxima Conversão - Mandato Aberto)",
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
    "subtipo_processo": "PRJ"
  },
  {
    "id": 67,
    "data_evento": "2026-10-13",
    "data_adicao": "2026-10-16",
    "empresa": "Grupo Assis Fortes (Servi-San Ltda., Servi-San Vigilância e Plast Nor)",
    "cnpj": "06.855.175/0001-67",
    "setor_detalhe": "Facilities, Vigilância, Transporte de Valores & Plásticos",
    "setor_macro": "Tecnologia & Serviços B2B",
    "regiao": "Nordeste (PI / MA / CE)",
    "tribunal": "TJPI - 3ª Vara Cível da Comarca de Teresina",
    "processo": "0811420-35.2017.8.18.0140",
    "fase": "Falência Decretada / Extensão Patrimonial (Classe 110)",
    "score": 8.8,
    "tier": "Tier 3 (Pós-Plano - Foco em UPI/DIP)",
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
    "subtipo_processo": "Falência / Liquidação"
  },
  {
    "id": 68,
    "data_evento": "2026-10-14",
    "data_adicao": "2026-10-16",
    "empresa": "Grupo Wolfstore (Wolfstore Indústria Têxtil Ltda. e W Nordeste Tecidos Ltda.)",
    "cnpj": "00.719.663/0001-60",
    "setor_detalhe": "Indústria Têxtil & Componentes Calçadistas (RS/BA)",
    "setor_macro": "Indústria & Manufatura",
    "regiao": "Sul / Nordeste (RS / BA)",
    "tribunal": "TJRS - Vara Regional Empresarial da Comarca de Novo Hamburgo",
    "processo": "5018921-21.2026.8.21.0019",
    "fase": "Cautelar Antecedente (art. 20-B)",
    "score": 9.0,
    "tier": "Tier 1 (Máxima Conversão - Mandato Aberto)",
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
    "subtipo_processo": "Cautelar / Pré-RJ"
  },
  {
    "id": 69,
    "data_evento": "2026-10-08",
    "data_adicao": "2026-10-16",
    "empresa": "GDS Subholding S.A. (GDSolar Energia Renovável / Colibri Capital)",
    "cnpj": "44.601.637/0001-09",
    "setor_detalhe": "Geração Solar Fotovoltaica Distribuída (UFVs GDS)",
    "setor_macro": "Energia & Infraestrutura",
    "regiao": "Nordeste / Nacional (CE / SP)",
    "tribunal": "CVM // Fitch Ratings (Debêntures 1ª Emissão GDSS11)",
    "processo": "Debêntures 1ª Emissão (GDSS11)",
    "fase": "Sinal Precursor — Rebaixamento Severo de Rating (AA para BBB / Watch Negative)",
    "score": 8.9,
    "tier": "Tier 0 (Radar Preditivo - Sinais Pré-Concursais 60-120d)",
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
    "subtipo_processo": "Tier 0"
  },
  {
    "id": 70,
    "data_evento": "2026-10-05",
    "data_adicao": "2026-10-16",
    "empresa": "Grupo Fex Agro (Fex Agro Comercial Ltda. e Vincere Fertilizantes)",
    "cnpj": "15.204.808/0001-68",
    "setor_detalhe": "Revenda de Insumos Agrícolas, Grãos & Fertilizantes",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Centro-Oeste (MT)",
    "tribunal": "TJMT - 3ª Vara Cível da Comarca de Primavera do Leste",
    "processo": "1007897-97.2026.8.11.0037",
    "fase": "Cautelar Antecedente (art. 20-B)",
    "score": 9.0,
    "tier": "Tier 1 (Máxima Conversão - Mandato Aberto)",
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
    "subtipo_processo": "Cautelar / Pré-RJ"
  },
  {
    "id": 71,
    "data_evento": "2026-10-09",
    "data_adicao": "2026-10-16",
    "empresa": "Landco Administradora de Bens e Imóveis S.A. (Grupo Belagrícola)",
    "cnpj": "26.778.061/0001-78",
    "setor_detalhe": "Ativos Imobiliários Rurais, Silos & Armazenagem (Rede Belagrícola)",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Sul (PR)",
    "tribunal": "TJPR - Vara Cível e Empresarial de Londrina",
    "processo": "0048912-40.2026.8.16.0014",
    "fase": "Recuperação Extrajudicial (Classe 128)",
    "score": 9.2,
    "tier": "Tier 2 (Alta Probabilidade - Plano a Elaborar)",
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
    "subtipo_processo": "PRE"
  },
  {
    "id": 72,
    "data_evento": "2026-10-01",
    "data_adicao": "2026-10-16",
    "empresa": "Costa Esmeralda Trading Importação e Exportação Ltda.",
    "cnpj": "03.025.101/0001-05",
    "setor_detalhe": "Trading de Comércio Exterior (Florianópolis / Itajaí)",
    "setor_macro": "Varejo & Consumo",
    "regiao": "Sul (SC)",
    "tribunal": "TJSC - Vara Regional de Recuperações Judiciais e Falências de Florianópolis",
    "processo": "5089123-11.2026.8.24.0023",
    "fase": "Falência / Autofalência (Classe 110)",
    "score": 8.5,
    "tier": "Tier 3 (Pós-Plano - Foco em UPI/DIP)",
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
    "subtipo_processo": "Falência / Liquidação"
  }
];

// Main Sections & Contextual Sub-Tabs Metadata
const SECTION_CONFIG = {
  operacao: {
    pageTitle: 'Operação & Originação',
    pageSubtitle: 'Mesa de originação e acompanhamento em tempo real de empresas em estresse financeiro severo no Brasil.',
    showFilters: true,
    subtabs: [
      { id: 'all', label: 'Tempo Real (Consolidado)', title: 'Operação em Tempo Real // Pipeline Consolidado', desc: 'Monitoramento unificado de petições iniciais (DataJud/DJEN), fatos relevantes CVM e procedimentos preparatórios de reestruturação no Brasil.' },
      { id: 'watchdog', label: 'Creditor-Side & Watchdog', title: 'Estratégia: Creditor-Side & Watchdog de Colateral', desc: 'Casos com alta concentração bancária (CR4 > 60%), disputas de travas fiduciárias, covenants sob estresse e risco de blindagem patrimonial.' },
      { id: 'dip', label: 'DIP Financing & M&A', title: 'Estratégia: DIP Financing & M&A Distressed', desc: 'Oportunidades para injeção de Dinheiro Novo superprioritário (Art. 69-A), compra de Unidades Produtivas Isoladas (UPIs) e desinvestimentos.' },
      { id: 'consensual', label: 'Consensual & Art. 20-B', title: 'Estratégia: Consensual, Mediação & Pré-RJ', desc: 'Tutelas cautelares antecedentes (Art. 20-B), mediações em CEJUSCs empresariais e Recuperações Extrajudiciais (Classe 128).' },
      { id: 'precursor', label: 'Distress Precursor (Tier 0)', title: 'Estratégia: Sinais Forenses Pré-Concursais (Tier 0)', desc: 'Alertas capturados 60 a 120 dias antes do ajuizamento: spikes de protestos, rebaixamentos de rating, CCEE, ANS e execuções fiscais.' },
      { id: 'debentures', label: 'Debêntures & CVM', title: 'Estratégia: Mercado de Capitais, Debêntures, CRAs & CRIs', desc: 'Emissões de mercado de capitais com convocação de AGDs (Vórtx, Pentágono, Oliveira Trust), waivers de covenants e vencimento antecipado.' }
    ]
  },
  dashboards: {
    pageTitle: 'Dashboards & Inteligência de Mercado',
    pageSubtitle: 'Análise quantitativa de volume de passivos, distribuição setorial, fases concursais e concentração geográfica.',
    showFilters: false,
    subtabs: [
      { id: 'visao_setorial', label: 'Visão Setorial & Fases', title: 'Panorama Setorial e Funil Concursal', desc: 'Distribuição do passivo monitorado e quantidade de processos pelos 8 macro-setores oficiais e pelas fases da Lei 11.101/2005.' },
      { id: 'curva_porte', label: 'Curva de Passivo & Top Casos', title: 'Concentração por Porte e Maiores Exposições', desc: 'Estratificação da carteira entre Mid-Market, Upper-Mid, Large Cap e Mega Cases, além do ranking dos 15 maiores passivos.' },
      { id: 'matriz_setor', label: 'Matriz Analítica por Setor', title: 'Tabela de Indicadores Consolidados por Macro-Setor', desc: 'Comparativo de volume acumulado, ticket médio, score forense médio e participação percentual de cada setor no radar.' }
    ]
  },
  upis: {
    pageTitle: 'Radar de UPIs & Ativos (M&A Distressed)',
    pageSubtitle: 'Mapeamento de ativos reais, parques fabris, imóveis, fazendas, silos e marcas disponíveis para alienação livre de sucessão.',
    showFilters: true,
    subtabs: [
      { id: 'upi_all', label: 'Todos os Ativos Elegíveis', title: 'Catálogo Consolidado de UPIs & Ativos em Desinvestimento', desc: 'Oportunidades de aquisição de ativos sem sucessão trabalhista ou tributária (Art. 60, Art. 66-A e Art. 141 da Lei 11.101/2005).' },
      { id: 'upi_agro', label: 'Terras, Silos & Agro', title: 'Ativos Rurais: Fazendas, Silos, Armazéns e Plantas de Insumos', desc: 'Unidades de armazenagem de grãos, fazendas em alienação fiduciária e plantas de fertilizantes/biológicos em processos do agronegócio.' },
      { id: 'upi_ind', label: 'Parques Fabris & Indústria', title: 'Ativos Industriais: Plantas Fabris, Maquinário e Marcas', desc: 'Parques industriais em operação continuada, leilões judiciais de fábricas e marcas comerciais em reestruturação.' },
      { id: 'upi_imob', label: 'Imóveis, Lojas & Energia', title: 'Ativos Imobiliários, Pontos Comerciais e SPEs de Energia', desc: 'Terrenos de incorporadoras, campi universitários, centros de distribuição e usinas fotovoltaicas/hidrelétricas.' }
    ]
  },
  bancometro: {
    pageTitle: 'Bancômetro & Matriz de Credores',
    pageSubtitle: 'Exposição mapeada por instituição financeira, agentes fiduciários de mercado de capitais, securitizadoras e tradings.',
    showFilters: false,
    subtabs: [
      { id: 'cred_all', label: 'Ranking Geral de Credores', title: 'Matriz Consolidada de Exposição por Instituição', desc: 'Clique em qualquer instituição para filtrar imediatamente todos os processos em que ela figura como credora.' },
      { id: 'cred_privados', label: 'Bancos Privados & Montadoras', title: 'Exposição de Bancos Comerciais Privados e Bancos de Montadoras', desc: 'Presença nos autos de Itaú, Bradesco, Santander, BTG Pactual, Safra, Daycoval, ABC Brasil, Votorantim e John Deere/Scania/Volvo.' },
      { id: 'cred_publicos', label: 'Bancos Públicos & Cooperativas', title: 'Exposição de Bancos Públicos, Fomento Regional e Cooperativas', desc: 'Presença de Banco do Brasil, Caixa Econômica Federal, BNDES, BRDE, BASA, BNB, Banrisul, Sicredi e Cresol.' },
      { id: 'cred_dcm', label: 'Debêntures, FIDCs & Tradings', title: 'Agentes Fiduciários, Securitizadoras (CRAs/CRIs), FIDCs e Tradings', desc: 'Monitoramento de Vórtx, Pentágono, Oliveira Trust, Opea, Vert, Virgo e gigantes de commodities (Cargill, Bunge, COFCO).' }
    ]
  },
  prazos: {
    pageTitle: 'Prazos Fatais, Stay Period & AGCs',
    pageSubtitle: 'Monitoramento de janelas de blindagem (60d / 180d), datas de Assembleias Gerais de Credores (AGCs), AGDs e leilões.',
    showFilters: true,
    subtabs: [
      { id: 'prazos_all', label: 'Cronograma Completo', title: 'Linha do Tempo de Prazos Concursais e Marcos Processuais', desc: 'Controle de vencimento do Stay Period legal e eventos críticos mapeados nas petições e editais.' },
      { id: 'prazos_agc', label: 'Assembleias & Leilões Marcados', title: 'Calendário de AGCs, AGDs, Mediações e Leilões de UPIs', desc: 'Casos com datas de assembleia, mediação CEJUSC, leilão judicial ou prazo fatal de objeção expressamente fixados.' },
      { id: 'prazos_cautelar', label: 'Blindagem Art. 20-B (60 dias)', title: 'Tutelas Cautelares Antecedentes e Mediações em Curso', desc: 'Janelas curtas de 30 a 60 dias de suspensão de execuções para negociação preventiva ou conversão em RJ.' }
    ]
  },
  mapa: {
    pageTitle: 'Mapa Geográfico de Risco Corporativo',
    pageSubtitle: 'Distribuição espacial dos processos concursais, varas empresariais e concentração de passivo por Unidade da Federação.',
    showFilters: false,
    subtabs: [
      { id: 'geo_ALL', label: 'Brasil Completo', title: 'Distribuição Cartográfica Nacional por Comarca e UF', desc: 'Clique em um estado na barra lateral ou nos marcadores do mapa para inspecionar os casos de cada polo regional.' },
      { id: 'geo_Sudeste', label: 'Região Sudeste (SP, RJ, MG, ES)', title: 'Polos do Sudeste // Varas Empresariais e Mercado de Capitais', desc: 'Concentração de processos nas varas especializadas de São Paulo, Rio de Janeiro, Belo Horizonte e Vitória.' },
      { id: 'geo_Sul', label: 'Região Sul (RS, PR, SC)', title: 'Polos do Sul // Indústria, Cooperativas e Agronegócio', desc: 'Processos distribuídos nas comarcas de Porto Alegre, Caxias do Sul, Passo Fundo, Curitiba, Londrina e Florianópolis.' },
      { id: 'geo_Centro-Oeste', label: 'Centro-Oeste (MT, GO, MS)', title: 'Polos do Centro-Oeste // Corredor da Soja, Milho e Insumos', desc: 'Casos concentrados em Cuiabá, Sinop, Sorriso, Rondonópolis, Primavera do Leste, Goiânia, Itaberaí e Dourados.' },
      { id: 'geo_NorteNordeste', label: 'Norte & Nordeste (BA, CE, PE, PA, PI, AM, TO)', title: 'Polos do Norte e Nordeste // Matopiba, Energia e Varejo', desc: 'Processos em Fortaleza, Caucaia, Recife, Salvador, Teresina, Belém, Manaus e Palmas.' }
    ]
  }
};

const CITY_COORDINATES = {
  'São Paulo,SP': [-23.5505, -46.6333],
  'Campinas,SP': [-22.9099, -47.0626],
  'Limeira,SP': [-22.5644, -47.4017],
  'Olímpia,SP': [-20.7381, -48.9142],
  'Cotia,SP': [-23.6022, -46.9189],
  'Ribeirão Preto,SP': [-21.1775, -47.8103],
  'São José dos Campos,SP': [-23.1896, -45.8841],
  'Santos,SP': [-23.9608, -46.3336],
  'Sorocaba,SP': [-23.5015, -47.4526],
  'Barueri,SP': [-23.5105, -46.8761],
  'São Bernardo do Campo,SP': [-23.6944, -46.5654],
  'Santo André,SP': [-23.6639, -46.5383],
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
  'Londrina,PR': [-23.3045, -51.1696],
  'Maringá,PR': [-23.4210, -51.9331],
  'Porto Alegre,RS': [-30.0346, -51.2177],
  'Novo Hamburgo,RS': [-29.6783, -51.1306],
  'Caxias do Sul,RS': [-29.1678, -51.1794],
  'Canoas,RS': [-29.9177, -51.1836],
  'Passo Fundo,RS': [-28.2628, -52.4067],
  'Ibirubá,RS': [-28.6275, -53.0897],
  'Santa Rosa,RS': [-27.8708, -54.4811],
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
  'Formosa do Rio Preto,BA': [-11.0458, -45.1931],
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

// Application State
let currentMainSection = 'operacao';
let currentSubTab = 'all';
let currentProcessType = '';
let currentUf = '';
let currentSetor = '';
let currentPorte = '';
let currentSort = 'data_desc';
let searchTerm = '';
let viewMode = 'table';
let excludeMegaOutliers = false; // Excludes > R$ 10 Bi (e.g. Braskem) when active
let leafletMapInstance = null;
let leafletMarkersLayer = null;
let currentModalItem = null;
let currentModalTab = 'visao';
let activeCharts = [];

document.addEventListener('DOMContentLoaded', () => {
  enrichAllDeals();
  populateDropdownFilters();
  renderSubTabs();
  renderSectionContent();
  // Non-blocking background sync with Google Sheets
  fetchLiveSheetInBackground();
});

function enrichAllDeals() {
  DEALS_DATA.forEach(d => {
    const faseL = (d.fase || '').toLowerCase();
    if (faseL.includes('falência') || faseL.includes('autofalência') || faseL.includes('liquidação') || faseL.includes('classe 110')) {
      d.subtipo_processo = 'Falência / Liquidação';
    } else {
      d.subtipo_processo = d.tipo_processo || 'PRJ';
    }
  });
  const navOp = document.getElementById('nav-count-operacao');
  const navUpi = document.getElementById('nav-count-upis');
  if (navOp) navOp.textContent = DEALS_DATA.length;
  if (navUpi) navUpi.textContent = DEALS_DATA.filter(isUpiEligible).length;
}

function showToast(msg) {
  const t = document.getElementById('toastBanner');
  if (!t) return;
  t.textContent = msg;
  t.style.display = 'block';
  setTimeout(() => { t.style.display = 'none'; }, 3200);
}

function toggleOutliers() {
  excludeMegaOutliers = !excludeMegaOutliers;
  const btn = document.getElementById('btnOutlierToggle');
  if (btn) {
    btn.classList.toggle('active-toggle', excludeMegaOutliers);
    btn.innerHTML = `<span>⚖️ Excluir &gt; R$ 10 Bi: <strong>${excludeMegaOutliers ? 'ON' : 'OFF'}</strong></span>`;
  }
  showToast(excludeMegaOutliers
    ? 'Filtro ativado: Outliers > R$ 10 Bi (ex: Braskem) ocultados para análise de médias.'
    : 'Filtro desativado: Exibindo 100% dos casos incluindo Mega Cases > R$ 10 Bi.');
  renderSubTabs();
  renderSectionContent();
}

// ==========================================================================
// Helpers & Classifiers
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
  const blob = [d.perfil_passivo || '', d.credores || '', d.tese || '', d.processo || '', d.tribunal || '', ...(d.watchdog_triggers || [])].join(' ').toLowerCase();
  return ['debênture', 'debenturista', 'cra', 'cri', 'fidc', 'mercado de capitais', 'vórtx', 'pentágono', 'oliveira trust', 'securitizadora', 'covenant', 'agd', 'ccbs', 'fitch'].some(k => blob.includes(k));
}

function hasScheduledAssemblyOrAuction(d) {
  const blob = ((d.tese || '') + ' ' + (d.proximas_acoes || '') + ' ' + (d.fase || '')).toLowerCase();
  return ['agc', 'agd', 'assembleia', 'leilão', 'mediação', '06/11', '10/11', '12/11', '16/10', '29/10', '19/11'].some(k => blob.includes(k));
}

function formatNumberBR(val) {
  if (isNaN(val) || val === null || val === undefined) return '0';
  return Math.round(Number(val)).toLocaleString('pt-BR');
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
// Main Section & Sub-Tab Navigation
// ==========================================================================
function switchMainSection(secId) {
  currentMainSection = secId;
  document.querySelectorAll('.nav-link-btn').forEach(b => b.classList.remove('active'));
  const activeNav = document.getElementById(`nav-${secId}`);
  if (activeNav) activeNav.classList.add('active');

  const cfg = SECTION_CONFIG[secId] || SECTION_CONFIG.operacao;
  document.getElementById('pageMainTitle').textContent = cfg.pageTitle;
  document.getElementById('pageMainSubtitle').textContent = cfg.pageSubtitle;
  document.getElementById('filterConsole').style.display = cfg.showFilters ? 'flex' : 'none';

  // Set default first subtab for the selected section
  currentSubTab = cfg.subtabs[0].id;
  renderSubTabs();
  renderSectionContent();
}

function selectSubTab(subId) {
  currentSubTab = subId;
  renderSubTabs();
  renderSectionContent();
}

function renderSubTabs() {
  const cfg = SECTION_CONFIG[currentMainSection] || SECTION_CONFIG.operacao;
  const bar = document.getElementById('subtabPillsBar');
  const baseDeals = DEALS_DATA.filter(d => !excludeMegaOutliers || (d.passivo_mm || 0) <= 10000);

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
        if (st.id === 'prazos_all') return true;
        if (st.id === 'prazos_agc') return hasScheduledAssemblyOrAuction(d);
        if (st.id === 'prazos_cautelar') return d.tipo_processo === 'Cautelar / Pré-RJ';
        return true;
      }).length;
      countBadge = `<span class="pill-count">${cnt}</span>`;
    }

    html += `
      <button class="subtab-pill ${isActive ? 'active' : ''}" onclick="selectSubTab('${st.id}')">
        <span>${escapeHtml(st.label)}</span>
        ${countBadge}
      </button>
    `;

    if (isActive) {
      document.getElementById('subSectionTitle').textContent = st.title;
      document.getElementById('subSectionDesc').textContent = st.desc;
    }
  });

  bar.innerHTML = html;
}

// ==========================================================================
// Filtering & Sorting Engine
// ==========================================================================
function getFilteredDeals() {
  const base = DEALS_DATA.filter(item => {
    if (excludeMegaOutliers && (item.passivo_mm || 0) > 10000) return false;

    // Section-specific subtab filter
    if (currentMainSection === 'operacao') {
      if (currentSubTab !== 'all') {
        if (currentSubTab === 'debentures' && !isDebenturesEligible(item)) return false;
        if (currentSubTab !== 'debentures' && item.strategy_id !== currentSubTab) return false;
      }
    } else if (currentMainSection === 'upis') {
      if (!isUpiEligible(item)) return false;
      if (currentSubTab !== 'upi_all' && getUpiCategory(item) !== currentSubTab) return false;
    } else if (currentMainSection === 'prazos') {
      if (currentSubTab === 'prazos_agc' && !hasScheduledAssemblyOrAuction(item)) return false;
      if (currentSubTab === 'prazos_cautelar' && item.tipo_processo !== 'Cautelar / Pré-RJ') return false;
    } else if (currentMainSection === 'mapa') {
      if (currentSubTab === 'geo_Sudeste' && item.regiao_macro !== 'Sudeste') return false;
      if (currentSubTab === 'geo_Sul' && item.regiao_macro !== 'Sul') return false;
      if (currentSubTab === 'geo_Centro-Oeste' && item.regiao_macro !== 'Centro-Oeste') return false;
      if (currentSubTab === 'geo_NorteNordeste' && item.regiao_macro !== 'Norte' && item.regiao_macro !== 'Nordeste') return false;
    }

    // Standard Filters (when in filterable sections)
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
      if (currentSetor !== '' && item.setor_macro !== currentSetor) return false;
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
          item.uf, item.perfil_passivo, ...(item.watchdog_triggers || [])
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
    if (currentSort === 'empresa_asc') return String(a.empresa || '').localeCompare(String(b.empresa || ''));
    return String(b.data_evento || '').localeCompare(String(a.data_evento || ''));
  });
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

  document.getElementById('kpiTotalVolume').textContent = `R$ ${formatKpiScale(totalVol)}`;
  document.getElementById('kpiVolumeSub').textContent = excludeMegaOutliers ? 'Excluindo outliers > R$ 10 Bi' : 'Passivo acumulado no recorte';
  document.getElementById('kpiActiveDeals').textContent = deals.length;
  document.getElementById('kpiAvgTicket').textContent = `R$ ${formatKpiScale(avgVol)}`;
  document.getElementById('kpiMaxPassivo').textContent = `R$ ${formatKpiScale(maxDeal.passivo_mm)}`;
  document.getElementById('kpiMaxCompany').textContent = maxDeal.empresa;
  document.getElementById('kpiJurisdictions').textContent = `${ufs.size} UFs`;
  document.getElementById('kpiUpiCountSub').textContent = `${upiCount} casos com UPIs mapeadas`;

  // Dynamic phase counts based on current base
  const baseWithoutPhase = DEALS_DATA.filter(d => !excludeMegaOutliers || (d.passivo_mm || 0) <= 10000);
  document.getElementById('proc-count-all').textContent = baseWithoutPhase.length;
  document.getElementById('proc-count-prj').textContent = baseWithoutPhase.filter(d => d.tipo_processo === 'PRJ' && d.subtipo_processo !== 'Falência / Liquidação').length;
  document.getElementById('proc-count-cautelar').textContent = baseWithoutPhase.filter(d => d.tipo_processo === 'Cautelar / Pré-RJ').length;
  document.getElementById('proc-count-pre').textContent = baseWithoutPhase.filter(d => d.tipo_processo === 'PRE').length;
  document.getElementById('proc-count-falencia').textContent = baseWithoutPhase.filter(d => d.subtipo_processo === 'Falência / Liquidação').length;
  document.getElementById('proc-count-tier0').textContent = baseWithoutPhase.filter(d => d.tipo_processo === 'Tier 0').length;
}

// ==========================================================================
// Section Dispatcher
// ==========================================================================
function renderSectionContent() {
  // Destroy previous Chart.js instances before re-rendering
  activeCharts.forEach(c => { try { c.destroy(); } catch(e){} });
  activeCharts = [];

  const deals = getFilteredDeals();
  updateExecutiveKPIs(deals);
  const container = document.getElementById('sectionContentArea');

  if (currentMainSection === 'operacao') {
    if (viewMode === 'table') renderTableView(deals, container);
    else renderCardsView(deals, container);
  } else if (currentMainSection === 'dashboards') {
    renderDashboardsSection(deals, container);
  } else if (currentMainSection === 'upis') {
    renderUpisSection(deals, container);
  } else if (currentMainSection === 'bancometro') {
    renderBancometroSection(deals, container);
  } else if (currentMainSection === 'prazos') {
    renderPrazosSection(deals, container);
  } else if (currentMainSection === 'mapa') {
    renderMapaSection(deals, container);
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
// 1. Section: Operação & Originação (Table & Cards)
// ==========================================================================
function renderTableView(deals, container) {
  if (deals.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding: 48px; color: var(--text-muted);">Nenhum caso encontrado para os filtros selecionados.</div>`;
    return;
  }

  let html = `
    <div class="table-wrap">
      <table class="clean-table">
        <thead>
          <tr>
            <th style="width: 25%;">Empresa / Setor &amp; CNPJ</th>
            <th style="width: 17%;">Fase Concursal &amp; Autos</th>
            <th style="width: 10%;">Movimento</th>
            <th style="width: 13%;">Jurisdição</th>
            <th style="width: 11%; text-align: right;">Passivo (R$ MM)</th>
            <th style="width: 14%;">Principais Credores</th>
            <th style="width: 5%; text-align: center;">Score</th>
            <th style="width: 5%; text-align: center;">Dossiê</th>
          </tr>
        </thead>
        <tbody>
  `;

  deals.forEach(item => {
    const passivoStr = formatNumberBR(item.passivo_mm);
    const b = getBadgeVisual(item);
    const upiTag = isUpiEligible(item) ? `<span class="status-badge badge-upi" title="Contém ativos/UPIs elegíveis">UPI</span>` : '';
    const credoresTrunc = (item.credores && item.credores.length > 58) ? `${item.credores.substring(0, 58)}...` : (item.credores || 'Em apuração');

    html += `
      <tr>
        <td>
          <span class="td-company-name" onclick="openDossier(${item.id})">${escapeHtml(item.empresa)}</span>
          <span class="td-company-meta">${escapeHtml(item.cnpj)} &bull; ${escapeHtml(item.setor_macro)}</span>
        </td>
        <td>
          <div><span class="status-badge ${b.cls}">${escapeHtml(b.label)}</span>${upiTag}</div>
          <div style="font-size: 10.5px; color: var(--text-muted); font-family: var(--font-mono); margin-top: 3px;">${escapeHtml(item.processo || 'Em autuação')}</div>
        </td>
        <td>
          <div style="font-family: var(--font-mono); font-size: 11.5px; font-weight: 700; color: var(--brand-darkest);">${formatDateBR(item.data_evento)}</div>
          <div style="font-family: var(--font-mono); font-size: 10px; color: var(--text-muted);">Inc: ${formatDateBR(item.data_adicao)}</div>
        </td>
        <td>
          <div style="font-weight: 700; color: var(--text-body);">${escapeHtml(item.cidade)}, ${escapeHtml(item.uf)}</div>
          <div style="font-size: 10.5px; color: var(--text-muted);">${escapeHtml(item.tribunal)}</div>
        </td>
        <td class="td-passivo">R$ ${escapeHtml(passivoStr)}</td>
        <td style="font-size: 11.5px; color: var(--text-secondary);">${escapeHtml(credoresTrunc)}</td>
        <td class="td-score">${Number(item.score || 8.5).toFixed(1)}</td>
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
    const teseShort = (item.tese && item.tese.length > 140) ? `${item.tese.substring(0, 140)}...` : (item.tese || '');

    html += `
      <div class="clean-deal-card" onclick="openDossier(${item.id})">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px; margin-bottom:8px;">
            <div>
              <strong style="font-size:14px; color:var(--brand-darkest); display:block;">${escapeHtml(item.empresa)}</strong>
              <span class="td-company-meta">${escapeHtml(item.cidade)}, ${escapeHtml(item.uf)} &bull; ${escapeHtml(item.cnpj)}</span>
            </div>
            <span class="status-badge ${b.cls}">${escapeHtml(item.subtipo_processo)}</span>
          </div>
          <div class="card-metrics-strip">
            <div class="card-metric-cell">
              <div class="card-metric-label">Passivo</div>
              <div class="card-metric-val">R$ ${passivoStr}M</div>
            </div>
            <div class="card-metric-cell">
              <div class="card-metric-label">Score</div>
              <div class="card-metric-val" style="color:var(--brand-teal);">${Number(item.score || 8.5).toFixed(1)}</div>
            </div>
            <div class="card-metric-cell">
              <div class="card-metric-label">Evento</div>
              <div class="card-metric-val" style="font-size:11px;">${formatDateBR(item.data_evento)}</div>
            </div>
          </div>
          <p style="font-size:12px; color:var(--text-secondary); line-height:1.45; margin-bottom:10px;">${escapeHtml(teseShort)}</p>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-light); padding-top:10px;">
          <span style="font-family:var(--font-mono); font-size:10.5px; color:var(--text-muted);">${escapeHtml(item.setor_macro)}</span>
          <button class="btn-action">Abrir Dossiê</button>
        </div>
      </div>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

// ==========================================================================
// 2. Section: Dashboards & Inteligência de Mercado (Chart.js + Matrices)
// ==========================================================================
function renderDashboardsSection(deals, container) {
  // Aggregate by Macro-Sector
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
      const share = ((sec.volume / totalVol) * 100).toFixed(1);
      const avg = Math.round(sec.volume / sec.count);
      const avgScore = (sec.scoreSum / sec.count).toFixed(1);
      html += `
        <tr>
          <td><strong style="color:var(--brand-darkest);">${escapeHtml(sec.name)}</strong></td>
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
              <p>Quantidade de grupos econômicos por faixa de dívida</p>
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

  // Default subtab: visao_setorial
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
  const paletteColors = ['#003334', '#0D3C3E', '#235C5B', '#3B7A78', '#A3AA83', '#B1B591', '#BFC3A5', '#94A3B8'];

  const ctxVol = document.getElementById('chartSectorVolume');
  if (ctxVol) {
    activeCharts.push(new Chart(ctxVol, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Passivo (R$ MM)',
          data: volumes,
          backgroundColor: '#0D3C3E',
          borderRadius: 5
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: '#E2E8F0' }, ticks: { font: { family: 'JetBrains Mono', size: 10 } } },
          y: { grid: { display: false }, ticks: { font: { family: 'Plus Jakarta Sans', size: 11, weight: '600' }, color: '#003334' } }
        }
      }
    }));
  }

  const ctxCnt = document.getElementById('chartSectorCount');
  if (ctxCnt) {
    activeCharts.push(new Chart(ctxCnt, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Casos Ativos',
          data: counts,
          backgroundColor: '#235C5B',
          borderRadius: 5
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: '#E2E8F0' }, ticks: { stepSize: 2, font: { family: 'JetBrains Mono', size: 10 } } },
          y: { grid: { display: false }, ticks: { font: { family: 'Plus Jakarta Sans', size: 11, weight: '600' }, color: '#003334' } }
        }
      }
    }));
  }

  // Phase Mix
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
        datasets: [{
          data: [prjCnt, cautCnt, preCnt, t0Cnt, falCnt],
          backgroundColor: ['#0D3C3E', '#235C5B', '#A3AA83', '#BFC3A5', '#64748B'],
          borderWidth: 2,
          borderColor: '#FFFFFF'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'right', labels: { font: { family: 'Plus Jakarta Sans', size: 11 }, color: '#1E293B' } }
        }
      }
    }));
  }

  // UF Mix
  const ufMap = {};
  deals.forEach(d => { if (d.uf) ufMap[d.uf] = (ufMap[d.uf] || 0) + 1; });
  const ufSorted = Object.entries(ufMap).sort((a, b) => b[1] - a[1]).slice(0, 10);
  const ctxUf = document.getElementById('chartUfMix');
  if (ctxUf) {
    activeCharts.push(new Chart(ctxUf, {
      type: 'bar',
      data: {
        labels: ufSorted.map(u => u[0]),
        datasets: [{
          label: 'Processos na UF',
          data: ufSorted.map(u => u[1]),
          backgroundColor: paletteColors,
          borderRadius: 5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { grid: { color: '#E2E8F0' }, ticks: { font: { family: 'JetBrains Mono', size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { family: 'JetBrains Mono', size: 11, weight: '700' }, color: '#003334' } }
        }
      }
    }));
  }
}

function initPorteAndTopCharts(deals) {
  if (typeof Chart === 'undefined') return;
  const mid = deals.filter(d => d.passivo_mm >= 30 && d.passivo_mm < 100).length;
  const upper = deals.filter(d => d.passivo_mm >= 100 && d.passivo_mm < 500).length;
  const large = deals.filter(d => d.passivo_mm >= 500 && d.passivo_mm < 1000).length;
  const mega = deals.filter(d => d.passivo_mm >= 1000).length;

  const ctxPorte = document.getElementById('chartPorteCount');
  if (ctxPorte) {
    activeCharts.push(new Chart(ctxPorte, {
      type: 'bar',
      data: {
        labels: ['Mid-Market (30M-100M)', 'Upper-Mid (100M-500M)', 'Large Cap (500M-1Bi)', 'Mega Cases (> 1Bi)'],
        datasets: [{
          label: 'Nº de Casos',
          data: [mid, upper, large, mega],
          backgroundColor: ['#BFC3A5', '#A3AA83', '#235C5B', '#0D3C3E'],
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { grid: { color: '#E2E8F0' } },
          x: { grid: { display: false } }
        }
      }
    }));
  }

  const top12 = [...deals].sort((a, b) => (b.passivo_mm || 0) - (a.passivo_mm || 0)).slice(0, 12);
  const ctxTop = document.getElementById('chartTopDeals');
  if (ctxTop) {
    activeCharts.push(new Chart(ctxTop, {
      type: 'bar',
      data: {
        labels: top12.map(d => d.empresa.length > 26 ? d.empresa.substring(0, 26) + '...' : d.empresa),
        datasets: [{
          label: 'Passivo (R$ MM)',
          data: top12.map(d => d.passivo_mm),
          backgroundColor: '#0D3C3E',
          borderRadius: 4
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: '#E2E8F0' } },
          y: { grid: { display: false }, ticks: { font: { size: 10.5, weight: '600' }, color: '#003334' } }
        }
      }
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
// 3. Section: Radar de UPIs & Ativos (M&A Distressed)
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

    html += `
      <div class="clean-deal-card" style="border-top-color: #065F46;" onclick="openDossier(${item.id})">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px; margin-bottom:8px;">
            <div>
              <span class="status-badge badge-upi" style="margin-left:0; margin-bottom:4px;">ATIVO / UPI ELEGÍVEL</span>
              <strong style="font-size:14.5px; color:var(--brand-darkest); display:block;">${escapeHtml(item.empresa)}</strong>
              <span class="td-company-meta">${escapeHtml(item.cidade)}, ${escapeHtml(item.uf)} &bull; ${escapeHtml(item.setor_macro)}</span>
            </div>
            <span class="status-badge ${b.cls}">${escapeHtml(item.subtipo_processo)}</span>
          </div>

          <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-radius:6px; padding:10px 12px; margin:10px 0;">
            <div style="font-family:var(--font-mono); font-size:9.5px; font-weight:700; color:#065F46; text-transform:uppercase; margin-bottom:3px;">Lastro &amp; Ativos Mapeados na Operação</div>
            <div style="font-size:12px; color:#064E3B; font-weight:600; line-height:1.4;">${escapeHtml(item.perfil_passivo)}</div>
          </div>

          <p style="font-size:12px; color:var(--text-secondary); line-height:1.45; margin-bottom:10px;">
            ${escapeHtml((item.tese && item.tese.length > 165) ? `${item.tese.substring(0, 165)}...` : item.tese)}
          </p>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-light); padding-top:10px;">
          <span style="font-family:var(--font-mono); font-size:12px; font-weight:800; color:var(--brand-darkest);">Passivo: R$ ${passivoStr} MM</span>
          <button class="btn-action">Ver Dossiê de M&amp;A</button>
        </div>
      </div>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

// ==========================================================================
// 4. Section: Bancômetro & Matriz de Credores (Disaggregated Parser)
// ==========================================================================
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

  const baseDeals = DEALS_DATA.filter(d => !excludeMegaOutliers || (d.passivo_mm || 0) <= 10000);

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
          // Try extracting specific R$ XM near keyword in d.credores
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
            <strong style="font-size:14px; color:var(--brand-darkest); display:block;">${escapeHtml(r.name)}</strong>
            <span style="font-family:var(--font-mono); font-size:11px; color:var(--brand-teal); font-weight:700;">${r.casesCount} processos ativos na carteira</span>
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
  searchTerm = keyword.toLowerCase();
  const input = document.getElementById('searchInput');
  if (input) input.value = keyword;
  switchMainSection('operacao');
  showToast(`Exibindo carteira de processos com exposição a: "${keyword.toUpperCase()}"`);
}

// ==========================================================================
// 5. Section: Prazos Fatais, Stay Period & AGCs
// ==========================================================================
function renderPrazosSection(deals, container) {
  if (deals.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding: 48px; color: var(--text-muted);">Nenhum prazo encontrado para o filtro selecionado.</div>`;
    return;
  }

  let html = `<div>`;
  deals.forEach(d => {
    const passivoStr = formatNumberBR(d.passivo_mm);
    const b = getBadgeVisual(d);

    let stayDias = 180;
    let labelMarco = 'Fim do Stay Period (180d)';
    if (d.tipo_processo === 'Cautelar / Pré-RJ') {
      stayDias = 60;
      labelMarco = 'Fim da Blindagem Art. 20-B (60d)';
    } else if (d.tipo_processo === 'PRE') {
      stayDias = 90;
      labelMarco = 'Janela de Homologação PRE (90d)';
    } else if (d.tipo_processo === 'Tier 0') {
      stayDias = 60;
      labelMarco = 'Janela Preditiva Pré-Crise (60d)';
    }

    let dtLimiteStr = 'Em apuração';
    let pillCls = 'badge-upi';
    let pillText = 'DENTRO DO PRAZO';

    if (d.data_evento && d.data_evento.length >= 10) {
      const dt = new Date(d.data_evento + 'T12:00:00');
      if (!isNaN(dt.getTime())) {
        dt.setDate(dt.getDate() + stayDias);
        dtLimiteStr = dt.toLocaleDateString('pt-BR');
      }
    }

    if (hasScheduledAssemblyOrAuction(d)) {
      pillCls = 'badge-cautelar';
      pillText = '📅 ASSEMBLEIA / LEILÃO PAUTADO';
    }

    html += `
      <div class="timeline-row" onclick="openDossier(${d.id})">
        <div style="flex:1;">
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; margin-bottom:4px;">
            <span class="status-badge ${b.cls}">${escapeHtml(d.subtipo_processo)}</span>
            <span class="status-badge ${pillCls}">${pillText}</span>
            <strong style="font-size:14px; color:var(--brand-darkest);">${escapeHtml(d.empresa)}</strong>
          </div>
          <div style="font-size:11.5px; color:var(--text-secondary); margin-bottom:4px;">
            ${escapeHtml(d.proximas_acoes || d.tese)}
          </div>
          <div style="font-family:var(--font-mono); font-size:10.5px; color:var(--text-muted);">
            ${escapeHtml(d.cidade)}, ${escapeHtml(d.uf)} &bull; ${escapeHtml(d.tribunal)} &bull; Autos: ${escapeHtml(d.processo)}
          </div>
        </div>

        <div style="display:flex; align-items:center; gap:20px; flex-wrap:wrap;">
          <div style="text-align:right;">
            <div style="font-family:var(--font-mono); font-size:9.5px; color:var(--text-muted); text-transform:uppercase;">Data do Fato</div>
            <div style="font-family:var(--font-mono); font-size:12px; font-weight:700; color:var(--text-body);">${formatDateBR(d.data_evento)}</div>
          </div>
          <div style="text-align:right;">
            <div style="font-family:var(--font-mono); font-size:9.5px; color:var(--text-muted); text-transform:uppercase;">${labelMarco}</div>
            <div style="font-family:var(--font-mono); font-size:12px; font-weight:700; color:var(--brand-teal);">${dtLimiteStr}</div>
          </div>
          <div style="text-align:right; min-width:105px;">
            <div style="font-family:var(--font-mono); font-size:9.5px; color:var(--text-muted); text-transform:uppercase;">Passivo</div>
            <div style="font-family:var(--font-mono); font-size:13px; font-weight:800; color:var(--brand-darkest);">R$ ${passivoStr} MM</div>
          </div>
          <button class="btn-action">Ficha</button>
        </div>
      </div>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

// ==========================================================================
// 6. Section: Mapa Geográfico (Light-Mode Tiles - No API Key Error!)
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
        <strong style="color:var(--brand-darkest); font-size:12.5px;">BRASIL (Todas as UFs)</strong>
        <span style="font-family:var(--font-mono); font-size:11px; font-weight:700; color:var(--brand-teal);">${deals.length} casos</span>
      </div>
    </div>
  `;
  sortedUfs.forEach(([uf, st]) => {
    sidebarHtml += `
      <div class="uf-rank-item ${currentUf === uf ? 'active' : ''}" onclick="filterMapByUf('${uf}')">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-family:var(--font-mono); font-weight:800; color:var(--brand-header); font-size:13px;">${uf}</span>
          <span style="font-size:11.5px; color:var(--text-secondary);">${st.count} casos</span>
          <span style="font-family:var(--font-mono); font-weight:700; font-size:12px; color:var(--brand-darkest);">R$ ${formatKpiScale(st.volume)}</span>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="geo-layout">
      <div class="uf-ranking-list">
        <div style="font-family:var(--font-mono); font-size:10.5px; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-bottom:10px;">
          Distribuição por Estado (UF)
        </div>
        ${sidebarHtml}
      </div>
      <div>
        <div id="map"></div>
      </div>
    </div>
  `;

  setTimeout(() => initLightLeafletMap(deals), 50);
}

function filterMapByUf(uf) {
  currentUf = uf;
  const sel = document.getElementById('selectUf');
  if (sel) sel.value = uf;
  renderSectionContent();
}

function initLightLeafletMap(deals) {
  if (typeof L === 'undefined') return;
  const mapEl = document.getElementById('map');
  if (!mapEl) return;

  if (leafletMapInstance) {
    try { leafletMapInstance.remove(); } catch(e) {}
    leafletMapInstance = null;
  }

  leafletMapInstance = L.map('map', {
    center: [-15.2, -51.5],
    zoom: 4,
    minZoom: 3.5,
    maxZoom: 13
  });

  // Free OpenStreetMap / Esri World Light Gray Base (Zero API Key watermark!)
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &bull; OpenStreetMap',
    maxZoom: 16
  }).addTo(leafletMapInstance);

  leafletMarkersLayer = L.layerGroup().addTo(leafletMapInstance);
  const bounds = [];

  const coordGroups = {};
  deals.forEach(d => {
    if (d.coordenadas && Array.isArray(d.coordenadas) && d.coordenadas.length === 2) {
      const k = `${d.coordenadas[0].toFixed(3)},${d.coordenadas[1].toFixed(3)}`;
      if (!coordGroups[k]) coordGroups[k] = [];
      coordGroups[k].push(d);
    }
  });

  Object.keys(coordGroups).forEach(k => {
    const group = coordGroups[k];
    const baseLat = group[0].coordenadas[0];
    const baseLng = group[0].coordenadas[1];

    group.forEach((item, idx) => {
      let lat = baseLat;
      let lng = baseLng;
      if (group.length > 1) {
        const angle = (idx / group.length) * 2 * Math.PI;
        const radius = 0.04 + (idx % 3) * 0.025;
        lat = baseLat + radius * Math.sin(angle);
        lng = baseLng + radius * Math.cos(angle);
      }

      let fillColor = '#0D3C3E';
      if (item.tipo_processo === 'Cautelar / Pré-RJ') fillColor = '#E11D48';
      else if (item.tipo_processo === 'PRE') fillColor = '#0284C7';
      else if (item.tipo_processo === 'Tier 0') fillColor = '#7C3AED';
      else if (item.subtipo_processo === 'Falência / Liquidação') fillColor = '#475569';

      const passivoNum = item.passivo_mm || 0;
      const radiusPx = passivoNum >= 1000 ? 11 : (passivoNum >= 300 ? 8.5 : 6.5);

      const marker = L.circleMarker([lat, lng], {
        radius: radiusPx,
        fillColor,
        color: '#FFFFFF',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.88
      });

      marker.bindPopup(`
        <div style="font-family:var(--font-sans); min-width:190px; color:#0F172A;">
          <strong style="font-size:13px; color:#003334; display:block;">${escapeHtml(item.empresa)}</strong>
          <div style="font-size:11px; color:#64748B; margin-bottom:6px;">${escapeHtml(item.cidade)}, ${escapeHtml(item.uf)} &bull; ${escapeHtml(item.subtipo_processo)}</div>
          <div style="font-family:var(--font-mono); font-size:12px; font-weight:700; color:#0D3C3E; margin-bottom:8px;">Passivo: R$ ${formatNumberBR(passivoNum)} MM</div>
          <button onclick="openDossier(${item.id})" style="background:#0D3C3E; color:#FFF; border:none; border-radius:4px; padding:5px 10px; font-size:11px; font-weight:600; cursor:pointer; width:100%;">Abrir Dossiê</button>
        </div>
      `);

      leafletMarkersLayer.addLayer(marker);
      bounds.push([lat, lng]);
    });
  });

  if (bounds.length > 0) {
    leafletMapInstance.fitBounds(bounds, { padding: [35, 35], maxZoom: 6.5 });
  }
}

// ==========================================================================
// Filter Controls & Modal Handlers
// ==========================================================================
function setProcessFilter(proc) {
  currentProcessType = proc;
  document.querySelectorAll('.phase-chip').forEach(c => c.classList.remove('active'));
  if (proc === '') document.getElementById('proc-all').classList.add('active');
  else if (proc === 'PRJ') document.getElementById('proc-prj').classList.add('active');
  else if (proc === 'Cautelar / Pré-RJ') document.getElementById('proc-cautelar').classList.add('active');
  else if (proc === 'PRE') document.getElementById('proc-pre').classList.add('active');
  else if (proc === 'Falência / Liquidação') document.getElementById('proc-falencia').classList.add('active');
  else if (proc === 'Tier 0') document.getElementById('proc-tier0').classList.add('active');
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
  document.getElementById('btnViewTable').classList.toggle('active', mode === 'table');
  document.getElementById('btnViewGrid').classList.toggle('active', mode === 'grid');
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
// Dossier Modal
// ==========================================================================
function openDossier(id) {
  const item = DEALS_DATA.find(d => d.id === id);
  if (!item) return;
  currentModalItem = item;
  document.getElementById('modalCompany').textContent = item.empresa;
  document.getElementById('modalSubheader').textContent = `${item.cnpj} // ${item.cidade}, ${item.uf} // ${item.tribunal} // Autos: ${item.processo}`;
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
  document.querySelectorAll('.modal-tab-item').forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById(`modal-tab-${tab}`);
  if (activeBtn) activeBtn.classList.add('active');

  const body = document.getElementById('modalBody');
  const d = currentModalItem;
  if (!d) return;
  const passivoStr = formatNumberBR(d.passivo_mm);

  if (tab === 'visao') {
    body.innerHTML = `
      <div class="dossier-grid">
        <div class="dossier-cell">
          <div class="dossier-cell-label">Passivo Total Estimado</div>
          <div class="dossier-cell-val" style="font-family:var(--font-mono); font-size:20px; font-weight:800; color:var(--brand-darkest);">R$ ${passivoStr} MM</div>
        </div>
        <div class="dossier-cell">
          <div class="dossier-cell-label">Score Forense &amp; Tier</div>
          <div class="dossier-cell-val" style="font-family:var(--font-mono); font-size:18px; color:var(--brand-teal);">${Number(d.score || 8.5).toFixed(1)} / 10 &bull; <span style="font-size:12px;">${escapeHtml(d.tier)}</span></div>
        </div>
        <div class="dossier-cell">
          <div class="dossier-cell-label">Fase Concursal</div>
          <div class="dossier-cell-val">${escapeHtml(d.fase)}</div>
        </div>
        <div class="dossier-cell">
          <div class="dossier-cell-label">Macro-Setor Oficial</div>
          <div class="dossier-cell-val">${escapeHtml(d.setor_macro)}</div>
        </div>
        <div class="dossier-cell full-width" style="border-left:4px solid var(--brand-header); background:var(--brand-tint-cool);">
          <div class="dossier-cell-label" style="color:var(--brand-darkest);">Síntese da Petição &amp; Tese de Mandato (Doc AI)</div>
          <div class="dossier-cell-val" style="font-size:13.5px; color:var(--brand-darkest);">${escapeHtml(d.tese)}</div>
        </div>
        <div class="dossier-cell full-width">
          <div class="dossier-cell-label">Próximas Ações Táticas de Originação</div>
          <div class="dossier-cell-val" style="color:var(--text-secondary);">${escapeHtml(d.proximas_acoes)}</div>
        </div>
      </div>
    `;
  } else if (tab === 'credores') {
    body.innerHTML = `
      <div class="dossier-grid">
        <div class="dossier-cell full-width">
          <div class="dossier-cell-label">Principais Credores e Exposições Mapeadas nos Autos</div>
          <div class="dossier-cell-val">${escapeHtml(d.credores)}</div>
        </div>
        <div class="dossier-cell full-width">
          <div class="dossier-cell-label">Perfil do Passivo &amp; Ativos/UPIs Vinculados</div>
          <div class="dossier-cell-val">${escapeHtml(d.perfil_passivo)}</div>
        </div>
      </div>
    `;
  } else if (tab === 'processo') {
    body.innerHTML = `
      <div class="dossier-grid">
        <div class="dossier-cell">
          <div class="dossier-cell-label">Tribunal &amp; Vara Competente</div>
          <div class="dossier-cell-val">${escapeHtml(d.tribunal)}</div>
        </div>
        <div class="dossier-cell">
          <div class="dossier-cell-label">Número do Processo / Emissão</div>
          <div class="dossier-cell-val" style="font-family:var(--font-mono);">${escapeHtml(d.processo)}</div>
        </div>
        <div class="dossier-cell">
          <div class="dossier-cell-label">Escritório / Advocacia da Devedora</div>
          <div class="dossier-cell-val">${escapeHtml(d.advocacia)}</div>
        </div>
        <div class="dossier-cell">
          <div class="dossier-cell-label">Administrador Judicial (AJ)</div>
          <div class="dossier-cell-val">${escapeHtml(d.aj)}</div>
        </div>
      </div>
    `;
  } else if (tab === 'gatilhos') {
    const triggers = d.watchdog_triggers || [];
    body.innerHTML = `
      <div class="dossier-grid">
        <div class="dossier-cell full-width">
          <div class="dossier-cell-label">Gatilhos Forenses &amp; Oportunidades de Atuação</div>
          <div style="margin-top:8px;">
            ${triggers.map(t => `<div style="padding:6px 0; border-bottom:1px solid var(--border-light); font-size:13px; color:var(--text-body);">• ${escapeHtml(t)}</div>`).join('')}
          </div>
        </div>
      </div>
    `;
  }
}

function copyDossierSummary() {
  const d = currentModalItem;
  if (!d) return;
  const text = `VALKNUT ANALYTICS // DOSSIÊ DE ORIGINAÇÃO\nEmpresa: ${d.empresa} (${d.cnpj})\nPassivo: R$ ${formatNumberBR(d.passivo_mm)} MM\nFase: ${d.fase}\nJurisdição: ${d.cidade}, ${d.uf} - ${d.tribunal} (${d.processo})\nCredores: ${d.credores}\nTese: ${d.tese}`;
  try {
    navigator.clipboard.writeText(text).then(() => showToast('Resumo copiado para a área de transferência!'));
  } catch (e) {
    showToast('Resumo selecionado.');
  }
}

function printDossier() {
  window.print();
}

// ==========================================================================
// Live Google Sheets Sync (Improved Parser)
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
        renderSubTabs();
        renderSectionContent();
        if (pill) pill.textContent = `Online: ${DEALS_DATA.length} leads`;
        if (notifyUser) showToast(`Sincronizado: ${DEALS_DATA.length} casos ativos carregados da planilha!`);
      }
    }
  } catch (err) {
    if (pill) pill.textContent = `Base Local: ${DEALS_DATA.length} leads`;
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

    let dataEvento = String(row[0] || '2026-10-15');
    if (dataEvento.includes('T')) dataEvento = dataEvento.split('T')[0];

    list.push({
      id: list.length + 1,
      data_evento: dataEvento,
      data_adicao: String(row[1] || '2026-10-16').split('T')[0],
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
      tese: tese || 'Tese em estruturação.',
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

function exportCSV() {
  const deals = getFilteredDeals();
  if (deals.length === 0) {
    showToast('Nenhum registro para exportar.');
    return;
  }
  const headers = ['ID', 'Data Evento', 'Empresa', 'CNPJ', 'Macro-Setor', 'Cidade', 'UF', 'Tribunal', 'Processo', 'Fase', 'Passivo (R$ MM)', 'Score', 'Credores', 'Tese'];
  const rows = deals.map(d => [
    d.id,
    `"${d.data_evento || ''}"`,
    `"${(d.empresa || '').replace(/"/g, '""')}"`,
    `"${d.cnpj || ''}"`,
    `"${d.setor_macro || ''}"`,
    `"${d.cidade || ''}"`,
    `"${d.uf || ''}"`,
    `"${(d.tribunal || '').replace(/"/g, '""')}"`,
    `"${d.processo || ''}"`,
    `"${(d.fase || '').replace(/"/g, '""')}"`,
    d.passivo_mm || 0,
    d.score || 8.5,
    `"${(d.credores || '').replace(/"/g, '""')}"`,
    `"${(d.tese || '').replace(/"/g, '""')}"`
  ]);
  const csv = [headers.join(';'), ...rows.map(r => r.join(';'))].join('\r\n');
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `valknut_radar_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToast(`Exportado CSV com ${deals.length} casos!`);
}
