/**
 * ==========================================================================
 * VALKNUT — SPECIAL SITUATIONS // Inteligência Concursal & Distressed Debt
 * Platform Release v4.7 — 6-Bucket Concursal Engine, Lazy Exports, Entity Filter & Comps
 * ==========================================================================
 */

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwOMjUrheleQxp9XB-4bjiaFOiwDLkRL_R6F2vodaiPpE7qpFcLr9KFWB-nYHRHN_-1/exec';

let DEALS_DATA = [];
let VALKNUT_DATA = [];
const ENRICHED_BY_COMPANY = {};
const BASE_CURATED_BY_CNPJ = new Map();
const BASE_CURATED_BY_STEM = new Map();
let MAX_CURATED_DEAL_ID = 154;
let TRACKING_PRES_YTD_DATA = [
  {
    "data": "2026-11-04",
    "empresa": "Aeris Energy S.A. (AERI3)",
    "cnpj": "12.528.708/0001-07",
    "setor": "Energia & Infraestrutura",
    "regiao": "Caucaia/CE",
    "passivo_mm": 1520,
    "status": "Pedido de RE protocolado",
    "quorum": "Conversão de Cautelar Art. 20-B",
    "quorum_status": "Pedido de RE protocolado • Conversão de Cautelar Art. 20-B",
    "credores": "Debenturistas (AERI11/AERI12 - R$ 650M, Vórtx/Pentágono), BTG Pactual, Santander, Bradesco",
    "dip": "Não",
    "tese": "Creditor-Side Advisory & Conversão de Debêntures",
    "obs": "Plano de RE abrange debenturistas e bancos credores",
    "assessor_legal": "BMA Advogados // Pinheiro Neto",
    "deal_id": 1
  },
  {
    "data": "2026-10-06",
    "empresa": "Braskem S/A",
    "cnpj": "42.150.391/0001-70",
    "setor": "Indústria & Manufatura",
    "regiao": "SP/Nacional",
    "passivo_mm": 58000,
    "status": "Em Negociação / Standstill",
    "quorum": "Em adesão",
    "quorum_status": "Em Negociação / Standstill • Em adesão",
    "credores": "Sindicato internacional de bancos e detentores de bonds",
    "dip": "Sim (US$ 3 Bi pedido)",
    "tese": "Creditor-Side / Watchdog de Contas Escrow",
    "obs": "Contraproposta dos controladores em análise pelos bancos",
    "assessor_legal": "BMA Advogados // Davis Polk",
    "deal_id": 22
  },
  {
    "data": "2026-09-30",
    "empresa": "Raízen (RAIZ4)",
    "cnpj": "33.453.598/0001-23",
    "setor": "Energia & Infraestrutura",
    "regiao": "SP/Nacional",
    "passivo_mm": 65000,
    "status": "Em Homologação / AGE Aprovada",
    "quorum": "Quórum qualificado",
    "quorum_status": "Em Homologação / AGE Aprovada • Quórum qualificado",
    "credores": "Sindicato de bancos nacionais/globais e debenturistas",
    "dip": "Sim (emissão de até R$ 3,5 Bi em papéis)",
    "tese": "Assessoria a Credores Bancários e Desinvestimento de Usinas",
    "obs": "Deliberações aprovadas em assembleia de 30/09/2026",
    "assessor_legal": "Pinheiro Neto Advogados",
    "deal_id": 7
  },
  {
    "data": "2026-10-03",
    "empresa": "Grupo Pão de Açúcar (GPA - PCAR3)",
    "cnpj": "47.508.411/0001-56",
    "setor": "Varejo & Consumo",
    "regiao": "SP/Nacional",
    "passivo_mm": 4568,
    "status": "Homologado pela Justiça (07/10/2026)",
    "quorum": "Maioria qualificada obtida",
    "quorum_status": "Homologado pela Justiça (07/10/2026) • Maioria qualificada obtida",
    "credores": "Itaú, Bradesco, Santander e debenturistas",
    "dip": "Não",
    "tese": "Venda de Ativos Imobiliários (Sale & Leaseback)",
    "obs": "Homologado pela Justiça de SP; venda de ativos non-core",
    "assessor_legal": "Pinheiro Neto Advogados",
    "deal_id": 16
  },
  {
    "data": "2026-10-21",
    "empresa": "Casas Bahia (Grupo Casas Bahia - BHIA3)",
    "cnpj": "33.041.260/0001-44",
    "setor": "Varejo & Consumo",
    "regiao": "SP/Nacional",
    "passivo_mm": 4100,
    "status": "Homologado / Em Cumprimento (1ª Série R$ 4,1 Bi; Consolidado #86 R$ 17,3 Bi)",
    "quorum": "54,7% de adesão inicial",
    "quorum_status": "Homologado / Em Cumprimento • R$ 4,1 Bi 1ª Série PRE (R$ 17,3 Bi consolidado #86)",
    "credores": "Bradesco, Banco do Brasil e debenturistas",
    "dip": "Não",
    "tese": "Creditor-side / Monitoramento de Repactuação",
    "obs": "Alongamento de prazos até 2030 com carência (R$ 4,1 Bi na 1ª PRE; R$ 17,3 Bi passivo consolidado no dossiê #86)",
    "assessor_legal": "Pinheiro Neto Advogados",
    "deal_id": 86
  },
  {
    "data": "2026-10-04",
    "empresa": "Oncoclínicas do Brasil (ONCO3)",
    "cnpj": "12.104.241/0001-09",
    "setor": "Saúde & Farma",
    "regiao": "SP/RJ/Nacional",
    "passivo_mm": 5100,
    "status": "Pedido de Homologação Protocolado",
    "quorum": "Em deliberação em AGDs",
    "quorum_status": "Pedido de Homologação Protocolado • Em deliberação em AGDs",
    "credores": "Titulares de Debêntures e CRIs (Vórtx, Pentágono, Oliveira Trust)",
    "dip": "Sim",
    "tese": "Creditor-Side / Watchdog de Covenants de CRIs",
    "obs": "AGDs convocadas pelos agentes fiduciários em out/2026",
    "assessor_legal": "Spinelli Advogados // Mattos Filho",
    "deal_id": 17
  },
  {
    "data": "2026-08-27",
    "empresa": "Fertilizantes Heringer",
    "cnpj": "22.266.175/0001-89",
    "setor": "Agronegócio & Silvicultura",
    "regiao": "ES/SP",
    "passivo_mm": 1980,
    "status": "Cautelar / Mediação Prévia para PRE",
    "quorum": "Em negociação",
    "quorum_status": "Cautelar / Mediação Prévia para PRE • Em negociação",
    "credores": "Bancos fornecedores de crédito agro e tradings",
    "dip": "Sim",
    "tese": "Financial Advisory na Mediação / DIP",
    "obs": "Suspensão de 60 dias para mediação prévia",
    "assessor_legal": "Aguardando publicação nos autos",
    "deal_id": 34
  },
  {
    "data": "2026-08-10",
    "empresa": "Alliança Saúde",
    "cnpj": "42.771.949/0001-35",
    "setor": "Saúde & Farma",
    "regiao": "SP/RJ",
    "passivo_mm": 1140,
    "status": "Pedido de Homologação Protocolado",
    "quorum": "Maioria obtida",
    "quorum_status": "Pedido de Homologação Protocolado • Maioria obtida",
    "credores": "Debenturistas e bancos credores",
    "dip": "Não",
    "tese": "Venda de Centros Diagnósticos / UPI",
    "obs": "Pedido submetido à Justiça de SP com 83 credores",
    "assessor_legal": "BMA Advogados",
    "deal_id": 5
  },
  {
    "data": "2026-08-15",
    "empresa": "Grupo Toky (Tok&Stok e Mobly)",
    "cnpj": "31.553.627/0001-01",
    "setor": "Varejo & Consumo",
    "regiao": "SP/Nacional",
    "passivo_mm": 600,
    "status": "Em Homologação / Acordo de Fusão",
    "quorum": "Adesão de credores bancários",
    "quorum_status": "Em Homologação / Acordo de Fusão • Adesão de credores bancários",
    "credores": "Bancos de capital de giro e debenturistas",
    "dip": "Sim (aporte na fusão)",
    "tese": "Gestão Interina / CRO de Integração de Redes",
    "obs": "Reestruturação ligada à incorporação entre Mobly e Tok&Stok",
    "assessor_legal": "Spinelli Advogados",
    "deal_id": 37
  },
  {
    "data": "2026-10-03",
    "empresa": "Lupatech S/A",
    "cnpj": "89.468.960/0001-15",
    "setor": "Indústria & Manufatura",
    "regiao": "Sul (RS/SP)",
    "passivo_mm": 386,
    "status": "Em Negociação / Adesão",
    "quorum": "Em coleta de assinaturas",
    "quorum_status": "Em Negociação / Adesão • Em coleta de assinaturas",
    "credores": "Debenturistas de emissões privadas e bancos",
    "dip": "Sim",
    "tese": "Financial Advisory para repactuação de debêntures",
    "obs": "Proposta de repactuação apresentada ao mercado",
    "assessor_legal": "Aguardando publicação nos autos",
    "deal_id": 14
  },
  {
    "data": "2026-10-05",
    "empresa": "Grupo Carbon Blindados (C Blindados / Opera Glass)",
    "cnpj": "22.811.775/0001-80",
    "setor": "Indústria & Manufatura",
    "regiao": "SP (Barueri)",
    "passivo_mm": 371.47,
    "status": "Pedido de Homologação Protocolado (05/10/2026)",
    "quorum": "47,63% assinado (90 dias para maioria)",
    "quorum_status": "Pedido de Homologação Protocolado (05/10/2026) • 47,63% assinado (90 dias para maioria)",
    "credores": "FIDC Amadeus, Banco Digimais, FIDC SSG, Banco do Brasil, Bradesco, Santander",
    "dip": "Sim (DIP de R$ 60M a R$ 100M)",
    "tese": "Watchdog de Contas Escrow do DIP + Assessoria aos Bancos Dissidentes",
    "obs": "Prevê atração de dinheiro novo prioritário",
    "assessor_legal": "Aguardando publicação nos autos",
    "deal_id": 25
  },
  {
    "data": "2026-08-25",
    "empresa": "Terra Assessoria de Siderúrgicas",
    "cnpj": "09.639.962/0001-60",
    "setor": "Indústria & Manufatura",
    "regiao": "MG (Sete Lagoas)",
    "passivo_mm": 304.72,
    "status": "Pedido de Homologação Protocolado",
    "quorum": "Maioria quirografária",
    "quorum_status": "Pedido de Homologação Protocolado • Maioria quirografária",
    "credores": "Fornecedores e instituições financeiras",
    "dip": "Não",
    "tese": "Assessoria a Credores Quirografários",
    "obs": "Plano submetido para créditos quirografários",
    "assessor_legal": "Aguardando publicação nos autos",
    "deal_id": 38
  },
  {
    "data": "2026-09-22",
    "empresa": "Grupo Industrial de Caxias do Sul",
    "cnpj": "88.612.450/0001-19",
    "setor": "Indústria & Manufatura",
    "regiao": "Sul (RS)",
    "passivo_mm": 295,
    "status": "Pedido de Homologação Protocolado",
    "quorum": "Maioria obtida",
    "quorum_status": "Pedido de Homologação Protocolado • Maioria obtida",
    "credores": "Banrisul, BRDE, Sicredi, Itaú",
    "dip": "Não",
    "tese": "Venda de UPI Fabril",
    "obs": "20 empresas do polo gaúcho",
    "assessor_legal": "Aguardando publicação nos autos",
    "deal_id": 4
  },
  {
    "data": "2026-10-20",
    "empresa": "Concessionária & Logística Fluminense",
    "cnpj": "09.321.440/0001-18",
    "setor": "Infraestrutura & Logística",
    "regiao": "RJ",
    "passivo_mm": 62,
    "status": "Homologado pela Justiça",
    "quorum": "100% de adesão das instituições",
    "quorum_status": "Homologado pela Justiça • 100% de adesão das instituições",
    "credores": "BNDES e bancos repassadores",
    "dip": "Não",
    "tese": "Financial Advisory",
    "obs": "Alongamento de perfil de amortização de longo prazo",
    "assessor_legal": "Aguardando publicação nos autos",
    "deal_id": null
  },
  {
    "data": "2026-10-20",
    "empresa": "Grupo Primuss / Fire Eagle",
    "cnpj": "91.442.880/0001-55",
    "setor": "Indústria / Fabricação de Armas",
    "regiao": "Sul (Esteio/RS)",
    "passivo_mm": 17.76,
    "status": "Pedido de Homologação Protocolado",
    "quorum": "52,51% (Banrisul e Caixa assinaram)",
    "quorum_status": "Pedido de Homologação Protocolado • 52,51% (Banrisul e Caixa assinaram)",
    "credores": "Banrisul e Caixa Econômica Federal",
    "dip": "Não",
    "tese": "Creditor-Side",
    "obs": "Plano focado nas dívidas com os dois bancos públicos estaduais",
    "assessor_legal": "Aguardando publicação nos autos",
    "deal_id": null
  }
];

const BRAZIL_UFS_GEOJSON = {"type": "FeatureCollection", "features": [{"type": "Feature", "properties": {"uf": "AC", "nome": "Acre", "capital": "Rio Branco", "lat": -9.974, "lng": -67.81}, "geometry": {"type": "Polygon", "coordinates": [[[-73.99, -7.35], [-70.5, -7.9], [-66.8, -9.8], [-68.5, -11.1], [-70.9, -11.0], [-72.9, -9.5], [-73.99, -7.35]]]}}, {"type": "Feature", "properties": {"uf": "AM", "nome": "Amazonas", "capital": "Manaus", "lat": -3.119, "lng": -60.021}, "geometry": {"type": "Polygon", "coordinates": [[[-73.8, -4.2], [-69.9, -1.1], [-67.1, 2.0], [-63.9, 2.2], [-60.1, 0.2], [-58.9, -1.5], [-56.2, -2.2], [-57.5, -5.8], [-58.5, -7.8], [-61.5, -8.8], [-65.5, -9.5], [-66.8, -9.8], [-70.5, -7.9], [-73.99, -7.35], [-73.8, -4.2]]]}}, {"type": "Feature", "properties": {"uf": "RR", "nome": "Roraima", "capital": "Boa Vista", "lat": 2.823, "lng": -60.675}, "geometry": {"type": "Polygon", "coordinates": [[[-63.9, 2.2], [-64.5, 4.3], [-60.2, 5.2], [-58.9, 1.5], [-60.1, 0.2], [-63.9, 2.2]]]}}, {"type": "Feature", "properties": {"uf": "PA", "nome": "Pará", "capital": "Belém", "lat": -1.455, "lng": -48.49}, "geometry": {"type": "Polygon", "coordinates": [[[-58.9, 1.5], [-55.9, 2.2], [-54.5, 1.5], [-51.8, -1.2], [-49.8, -0.5], [-46.1, -1.1], [-46.4, -3.5], [-48.5, -5.5], [-49.3, -8.2], [-51.1, -9.8], [-54.8, -9.8], [-57.6, -9.2], [-58.5, -7.8], [-57.5, -5.8], [-56.2, -2.2], [-58.9, -1.5]]]}}, {"type": "Feature", "properties": {"uf": "AP", "nome": "Amapá", "capital": "Macapá", "lat": 0.034, "lng": -51.066}, "geometry": {"type": "Polygon", "coordinates": [[[-54.5, 1.5], [-51.6, 4.2], [-49.9, 1.8], [-51.8, -1.2], [-54.5, 1.5]]]}}, {"type": "Feature", "properties": {"uf": "RO", "nome": "Rondônia", "capital": "Porto Velho", "lat": -8.761, "lng": -63.903}, "geometry": {"type": "Polygon", "coordinates": [[[-66.8, -9.8], [-65.5, -9.5], [-61.5, -8.8], [-60.0, -11.5], [-60.4, -13.5], [-63.5, -13.1], [-65.5, -11.8], [-66.8, -9.8]]]}}, {"type": "Feature", "properties": {"uf": "MT", "nome": "Mato Grosso", "capital": "Cuiabá", "lat": -15.601, "lng": -56.097}, "geometry": {"type": "Polygon", "coordinates": [[[-61.5, -8.8], [-58.5, -7.8], [-57.6, -9.2], [-54.8, -9.8], [-51.1, -9.8], [-50.5, -12.5], [-51.0, -15.5], [-53.1, -17.6], [-56.0, -17.9], [-58.0, -17.6], [-60.2, -15.0], [-60.4, -13.5], [-60.0, -11.5], [-61.5, -8.8]]]}}, {"type": "Feature", "properties": {"uf": "MS", "nome": "Mato Grosso do Sul", "capital": "Campo Grande", "lat": -20.469, "lng": -54.62}, "geometry": {"type": "Polygon", "coordinates": [[[-58.0, -17.6], [-56.0, -17.9], [-53.1, -17.6], [-51.0, -19.5], [-51.8, -21.8], [-54.1, -24.0], [-55.8, -23.8], [-58.1, -22.1], [-57.9, -19.0], [-58.0, -17.6]]]}}, {"type": "Feature", "properties": {"uf": "TO", "nome": "Tocantins", "capital": "Palmas", "lat": -10.184, "lng": -48.333}, "geometry": {"type": "Polygon", "coordinates": [[[-48.5, -5.5], [-46.1, -7.5], [-45.9, -10.5], [-46.5, -12.9], [-50.5, -12.5], [-51.1, -9.8], [-49.3, -8.2], [-48.5, -5.5]]]}}, {"type": "Feature", "properties": {"uf": "GO", "nome": "Goiás", "capital": "Goiânia", "lat": -16.686, "lng": -49.264}, "geometry": {"type": "Polygon", "coordinates": [[[-50.5, -12.5], [-46.5, -12.9], [-46.1, -14.8], [-47.3, -16.2], [-47.5, -18.5], [-51.0, -19.5], [-53.1, -17.6], [-51.0, -15.5], [-50.5, -12.5]]]}}, {"type": "Feature", "properties": {"uf": "DF", "nome": "Distrito Federal", "capital": "Brasília", "lat": -15.797, "lng": -47.891}, "geometry": {"type": "Polygon", "coordinates": [[[-48.2, -15.5], [-47.3, -15.5], [-47.3, -16.1], [-48.2, -16.1], [-48.2, -15.5]]]}}, {"type": "Feature", "properties": {"uf": "MA", "nome": "Maranhão", "capital": "São Luís", "lat": -2.53, "lng": -44.306}, "geometry": {"type": "Polygon", "coordinates": [[[-46.1, -1.1], [-44.2, -2.2], [-41.8, -2.8], [-42.8, -5.5], [-43.5, -7.0], [-45.9, -10.0], [-46.1, -7.5], [-48.5, -5.5], [-46.4, -3.5], [-46.1, -1.1]]]}}, {"type": "Feature", "properties": {"uf": "PI", "nome": "Piauí", "capital": "Teresina", "lat": -5.089, "lng": -42.801}, "geometry": {"type": "Polygon", "coordinates": [[[-41.8, -2.8], [-41.3, -3.0], [-40.5, -5.5], [-40.8, -8.5], [-43.5, -10.8], [-45.9, -10.5], [-45.9, -10.0], [-43.5, -7.0], [-42.8, -5.5], [-41.8, -2.8]]]}}, {"type": "Feature", "properties": {"uf": "CE", "nome": "Ceará", "capital": "Fortaleza", "lat": -3.717, "lng": -38.543}, "geometry": {"type": "Polygon", "coordinates": [[[-41.3, -3.0], [-38.5, -3.5], [-37.2, -4.8], [-38.5, -7.6], [-40.5, -7.5], [-40.5, -5.5], [-41.3, -3.0]]]}}, {"type": "Feature", "properties": {"uf": "RN", "nome": "Rio Grande do Norte", "capital": "Natal", "lat": -5.794, "lng": -35.211}, "geometry": {"type": "Polygon", "coordinates": [[[-37.2, -4.8], [-35.2, -5.1], [-35.0, -6.5], [-38.5, -6.8], [-37.2, -4.8]]]}}, {"type": "Feature", "properties": {"uf": "PB", "nome": "Paraíba", "capital": "João Pessoa", "lat": -7.119, "lng": -34.845}, "geometry": {"type": "Polygon", "coordinates": [[[-38.5, -6.8], [-35.0, -6.5], [-34.8, -7.5], [-37.2, -8.2], [-38.5, -7.6], [-38.5, -6.8]]]}}, {"type": "Feature", "properties": {"uf": "PE", "nome": "Pernambuco", "capital": "Recife", "lat": -8.047, "lng": -34.877}, "geometry": {"type": "Polygon", "coordinates": [[[-40.8, -8.5], [-40.5, -7.5], [-38.5, -7.6], [-37.2, -8.2], [-34.8, -7.5], [-35.1, -9.0], [-38.2, -9.4], [-40.8, -9.5], [-40.8, -8.5]]]}}, {"type": "Feature", "properties": {"uf": "AL", "nome": "Alagoas", "capital": "Maceió", "lat": -9.665, "lng": -35.735}, "geometry": {"type": "Polygon", "coordinates": [[[-38.2, -9.4], [-35.1, -9.0], [-36.2, -10.5], [-38.0, -9.8], [-38.2, -9.4]]]}}, {"type": "Feature", "properties": {"uf": "SE", "nome": "Sergipe", "capital": "Aracaju", "lat": -10.947, "lng": -37.073}, "geometry": {"type": "Polygon", "coordinates": [[[-38.0, -9.8], [-36.2, -10.5], [-37.4, -11.5], [-38.2, -10.8], [-38.0, -9.8]]]}}, {"type": "Feature", "properties": {"uf": "BA", "nome": "Bahia", "capital": "Salvador", "lat": -12.971, "lng": -38.501}, "geometry": {"type": "Polygon", "coordinates": [[[-45.9, -10.5], [-43.5, -10.8], [-40.8, -8.5], [-40.8, -9.5], [-38.2, -9.4], [-38.0, -9.8], [-38.2, -10.8], [-37.4, -11.5], [-38.5, -13.0], [-38.9, -16.0], [-39.2, -18.0], [-41.0, -17.5], [-44.0, -14.8], [-46.1, -14.8], [-46.5, -12.9], [-45.9, -10.5]]]}}, {"type": "Feature", "properties": {"uf": "MG", "nome": "Minas Gerais", "capital": "Belo Horizonte", "lat": -19.916, "lng": -43.934}, "geometry": {"type": "Polygon", "coordinates": [[[-46.1, -14.8], [-44.0, -14.8], [-41.0, -17.5], [-40.8, -18.2], [-41.8, -21.0], [-43.5, -21.9], [-46.5, -22.8], [-48.0, -20.0], [-51.0, -19.5], [-47.5, -18.5], [-47.3, -16.2], [-46.1, -14.8]]]}}, {"type": "Feature", "properties": {"uf": "ES", "nome": "Espírito Santo", "capital": "Vitória", "lat": -20.315, "lng": -40.312}, "geometry": {"type": "Polygon", "coordinates": [[[-41.0, -17.5], [-39.2, -18.0], [-39.8, -20.0], [-40.9, -21.3], [-41.8, -21.0], [-40.8, -18.2], [-41.0, -17.5]]]}}, {"type": "Feature", "properties": {"uf": "RJ", "nome": "Rio de Janeiro", "capital": "Rio de Janeiro", "lat": -22.906, "lng": -43.172}, "geometry": {"type": "Polygon", "coordinates": [[[-43.5, -21.9], [-41.8, -21.0], [-40.9, -21.3], [-41.9, -22.9], [-44.8, -23.3], [-44.6, -22.4], [-43.5, -21.9]]]}}, {"type": "Feature", "properties": {"uf": "SP", "nome": "São Paulo", "capital": "São Paulo", "lat": -23.55, "lng": -46.633}, "geometry": {"type": "Polygon", "coordinates": [[[-51.0, -19.5], [-48.0, -20.0], [-46.5, -22.8], [-44.6, -22.4], [-44.8, -23.3], [-47.9, -25.2], [-49.9, -23.0], [-52.0, -22.5], [-51.8, -21.8], [-51.0, -19.5]]]}}, {"type": "Feature", "properties": {"uf": "PR", "nome": "Paraná", "capital": "Curitiba", "lat": -25.428, "lng": -49.273}, "geometry": {"type": "Polygon", "coordinates": [[[-54.1, -24.0], [-51.8, -21.8], [-52.0, -22.5], [-49.9, -23.0], [-47.9, -25.2], [-48.5, -25.9], [-51.0, -26.5], [-53.8, -26.3], [-54.6, -25.5], [-54.1, -24.0]]]}}, {"type": "Feature", "properties": {"uf": "SC", "nome": "Santa Catarina", "capital": "Florianópolis", "lat": -27.595, "lng": -48.548}, "geometry": {"type": "Polygon", "coordinates": [[[-53.8, -26.3], [-51.0, -26.5], [-48.5, -25.9], [-48.4, -27.8], [-49.6, -29.2], [-51.5, -27.5], [-53.8, -27.2], [-53.8, -26.3]]]}}, {"type": "Feature", "properties": {"uf": "RS", "nome": "Rio Grande do Sul", "capital": "Porto Alegre", "lat": -30.034, "lng": -51.217}, "geometry": {"type": "Polygon", "coordinates": [[[-53.8, -27.2], [-51.5, -27.5], [-49.6, -29.2], [-50.5, -31.0], [-52.1, -32.1], [-53.4, -33.7], [-55.8, -30.8], [-57.6, -30.2], [-56.0, -28.2], [-53.8, -27.2]]]}}]};

let baseStaticNewsItems = [];

// ==========================================================================
// Dynamic Deal Count & Flexible Text Resolver
// ==========================================================================
function getBrazilThreeMonthWindowLabel() {
  const monthAbbr = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  let baseMonthIdx = 9;
  try {
    const iso = new Date().toLocaleDateString('sv-SE', { timeZone: 'America/Sao_Paulo' });
    const parsedM = parseInt(iso.slice(5, 7), 10);
    if (!isNaN(parsedM) && parsedM >= 1 && parsedM <= 12) baseMonthIdx = parsedM - 1;
  } catch (e) {}
  return `${monthAbbr[baseMonthIdx]}/${monthAbbr[(baseMonthIdx + 1) % 12]}/${monthAbbr[(baseMonthIdx + 2) % 12]}`;
}

function getDynamicCaseCount() {
  if (typeof DEALS_DATA !== 'undefined' && Array.isArray(DEALS_DATA) && DEALS_DATA.length > 0) {
    return DEALS_DATA.length;
  }
  return 0;
}

function getDynamicEnergyCount() {
  if (typeof DEALS_DATA !== 'undefined' && Array.isArray(DEALS_DATA) && DEALS_DATA.length > 0) {
    return DEALS_DATA.filter(d => d.setor_macro === 'Energia & Infraestrutura').length;
  }
  return 0;
}

function resolveDynamicCaseText(str) {
  if (!str || typeof str !== 'string') return str || '';
  const count = getDynamicCaseCount();
  const energyCount = getDynamicEnergyCount();
  return str
    .replace(/\{COUNT\}/g, count)
    .replace(/\{ENERGY_COUNT\}/g, energyCount)
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
  VALKNUT_DATA = DEALS_DATA;
  if (typeof window !== 'undefined') window.VALKNUT_DATA = DEALS_DATA;

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

  const energiaPill = document.getElementById('nav-count-energia');
  if (energiaPill) {
    energiaPill.textContent = getDynamicEnergyCount();
  }

  const livePill = document.getElementById('lastUpdateTime');
  if (livePill) {
    if (count > 0) {
      livePill.textContent = 'Online: ' + count + ' leads';
    } else if (typeof initialLoadFailed !== 'undefined' && initialLoadFailed) {
      livePill.textContent = 'Offline • Falha ao carregar base';
    } else {
      livePill.textContent = 'Sincronizando base...';
    }
  }

  if (typeof syncNewsCounters === 'function') {
    syncNewsCounters();
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
      { id: 'waterfall_classes', label: 'Waterfall de Classes (RJ vs. Falência)', title: 'Cascata de Alocação de Valor de Ativos por Classe (Art. 83 vs. Plano RJ)', desc: 'Comparativo percentual digitável de recuperação por classe (Extraconcursal, Fiscal/Tributário, Classe I Trabalhista, Classe II Garantia Real, Classe III Quirografária e Classe IV ME/EPP).' },
      { id: 'quorum_agc', label: 'Simulador Quórum AGC & Cram Down', title: 'Simulador de Votação em Assembleia Geral de Credores (Art. 45 e Art. 58, §1º)', desc: 'Cálculo interativo com % digitável de aprovação ordinária por classe (por Cabeça e por Valor), requisitos de Cram Down e posição de bloqueio (Blocking Position > 33,3% ou > 50%).' },
      { id: 'benchmarks_setor', label: 'Benchmarks de Haircut por Setor', title: 'Tabela de Referência de Mercado: % de Haircut e % de Recuperação por Macro-Setor', desc: 'Parâmetros médios observados nos {COUNT} casos monitorados para calibragem rápida de propostas, modelagem de planos e avaliação de colateral.' },
      { id: 'pitch_pptx', label: 'Gerador de Proposta Comercial (.pptx)', title: 'Gerador Automático de Pitch Deck & Proposta de Honorários em PowerPoint (.pptx)', desc: 'Exportação instantânea de apresentação institucional widescreen (7 slides) com Perfil da Empresa, Diagnóstico, Estrutura de Retainer + Success Fee e Cronograma.' }
    ]
  },
  dashboards: {
    pageTitle: 'Dashboards & Inteligência de Mercado',
    pageSubtitle: 'Visão executiva agregada de exposição setorial, funil concursal, tracking de PREs YTD e estratificação por faixa de passivo.',
    showFilters: false,
    subtabs: [
      { id: 'visao_setorial', label: 'Visão Setorial & Funil', title: 'Concentração Setorial & Funil de Fases Concursais', desc: 'Análise comparativa do passivo acumulado (R$ MM) e volume de processos por Macro-Setor e modalidade da Lei 11.101/05.' },
      { id: 'matriz_setor', label: 'Matriz Quantitativa por Setor', title: 'Scorecard Setorial de Special Situations', desc: 'Tabela analítica de participação percentual, ticket médio, oportunidades de UPI e score forense médio por setor.' },
      { id: 'tracking_pres', label: 'Tracking PREs YTD & Safra MoM', title: 'Tracking de Recuperações Extrajudiciais (YTD 2026 — R$ 138+ Bi) & Safra Mensal de Originação', desc: 'Monitoramento dedicado da aba Tracking PREs YTD (2026) da Planilha Mestre combinado à evolução mensal (MoM) de novos casos e passivo.' },
      { id: 'curva_porte', label: 'Curva de Passivo & Top Deals', title: 'Estratificação por Faixa de Passivo & Maiores Exposições', desc: 'Distribuição dos casos entre Sub-30M, Mid-Market, Upper-Mid, Large Cap e Mega Cases no recorte selecionado.' }
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
      { id: 'prazos_calendario', label: `Grade Mensal Interativa (${getBrazilThreeMonthWindowLabel()})`, title: 'Visão de Calendário Mensal de Eventos Críticos, AGCs, AGDs e Leilões', desc: 'Grade mensal interativa destacando dias com assembleias, leilões de UPIs, mediações CEJUSC e vencimentos de blindagem cautelar.' },
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
      { id: 'sin_tempo_real', label: 'SIN & Hidrologia', title: 'Painel Operacional ONS — Geração por Fonte, Carga & Reservatórios (EAR)', desc: 'Curva horária empilhada de geração por fonte (Hidráulica, Térmica, Nuclear, Solar, Eólica e MMGD) comparada à Carga Prevista e Realizada e nível de reservatórios (EAR %).' },
      { id: 'pld_curtailment', label: 'PLD & Curtailment', title: 'Preço de Liquidação das Diferenças (PLD R$/MWh) & Restrição Eólica/Solar (Constrained-off)', desc: 'Monitoramento conjunto de spread horário de PLD entre submercados (CCEE) e cortes de geração renovável (Constrained-off ONS) com impacto sobre ICSD de debêntures.' },
      { id: 'pipeline_energia', label: 'Pipeline Energia & Infra', title: 'Pipeline Dedicado de Special Situations em Energia & Infraestrutura ({ENERGY_COUNT} Casos)', desc: 'Dossiês setoriais destacando Código da Debênture, Agente Fiduciário, Status CCEE, Risco de Caducidade e Corte de Rating por Curtailment/ICSD.' }
    ]
  }
};


const CITY_COORDINATES = {
  'Buritis,MG': [-15.6178, -46.4233],
  'Pinhais,PR': [-25.4344, -49.1925],
  'São José dos Pinhais,PR': [-25.5349, -49.2063],
  'Guarapuava,PR': [-25.3907, -51.4628],
  'Tangará da Serra,MT': [-14.6225, -57.4933],
  'Novo Horizonte do Norte,MT': [-11.4119, -57.3508],
  'Guiratinga,MT': [-16.3475, -53.7583],
  'Vila Rica,MT': [-10.0117, -51.1164],
  'São Paulo,SP': [-23.5505, -46.6333],
  'Guarulhos,SP': [-23.4543, -46.5337],
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
  'São José do Rio Preto,SP': [-20.8113, -49.3758],
  'Penápolis,SP': [-21.4197, -50.0775],
  'Luiziânia,SP': [-21.6756, -50.3267],
  'Santa Cruz do Rio Pardo,SP': [-22.8989, -49.6328],
  'Rio de Janeiro,RJ': [-22.9068, -43.1729],
  'Nilópolis,RJ': [-22.8058, -43.4189],
  'Belford Roxo,RJ': [-22.7642, -43.3992],
  'São João da Barra,RJ': [-21.6403, -41.0514],
  'Belo Horizonte,MG': [-19.9167, -43.9345],
  'Patos de Minas,MG': [-18.5789, -46.5181],
  'Sete Lagoas,MG': [-19.4658, -44.2467],
  'Montes Claros,MG': [-16.735, -43.8617],
  'Vitória,ES': [-20.3155, -40.3128],
  'Viana,ES': [-20.3906, -40.4958],
  'Curitiba,PR': [-25.4284, -49.2733],
  'Londrina,PR': [-23.3045, -51.1696],
  'Maringá,PR': [-23.421, -51.9331],
  'Porto Alegre,RS': [-30.0346, -51.2177],
  'Pelotas,RS': [-31.7654, -52.3376],
  'Santa Rosa,RS': [-27.8708, -54.4814],
  'Marcelino Ramos,RS': [-27.4619, -51.9056],
  'Novo Hamburgo,RS': [-29.6783, -51.1306],
  'Caxias do Sul,RS': [-29.1678, -51.1794],
  'Canoas,RS': [-29.9177, -51.1836],
  'Passo Fundo,RS': [-28.2628, -52.4067],
  'Ibirubá,RS': [-28.6275, -53.0897],
  'Esteio,RS': [-29.8525, -51.1828],
  'Florianópolis,SC': [-27.5954, -48.548],
  'Joinville,SC': [-26.3044, -48.8464],
  'Jaraguá do Sul,SC': [-26.4853, -49.0667],
  'Araquari,SC': [-26.37, -48.7222],
  'Cuiabá,MT': [-15.601, -56.0974],
  'Sinop,MT': [-11.8608, -55.5097],
  'Primavera do Leste,MT': [-15.5586, -54.2961],
  'Rondonópolis,MT': [-16.4674, -54.6368],
  'Nova Bandeirantes,MT': [-9.8653, -57.8578],
  'Sorriso,MT': [-12.5428, -55.7214],
  'Dourados,MS': [-22.2211, -54.8056],
  'Sidrolândia,MS': [-20.9317, -54.9614],
  'Ponta Porã,MS': [-22.5361, -55.7256],
  'Goiânia,GO': [-16.6869, -49.2648],
  'Mineiros,GO': [-17.5694, -52.5511],
  'Vila Boa,GO': [-15.0383, -47.0589],
  'Flores de Goiás,GO': [-14.4486, -47.0503],
  'Itaberaí,GO': [-16.0203, -49.8092],
  'Salvador,BA': [-12.9714, -38.5014],
  'Recife,PE': [-8.0476, -34.877],
  'Fortaleza,CE': [-3.7172, -38.5433],
  'Caucaia,CE': [-3.736, -38.6531],
  'Teresina,PI': [-5.0892, -42.8016],
  'São Luís,MA': [-2.5307, -44.3068],
  'Itinga do Maranhão,MA': [-4.4503, -47.5256],
  'Belém,PA': [-1.4558, -48.4902],
  'Redenção,PA': [-8.0258, -50.0317],
  'Ananindeua,PA': [-1.3656, -48.3744],
  'Paragominas,PA': [-2.9972, -47.3533],
  'Palmas,TO': [-10.1844, -48.3336],
  'Araguacema,TO': [-8.8086, -49.5564],
  'Manaus,AM': [-3.119, -60.0217],
  'Laranjal Paulista,SP': [-23.0497, -47.8367],
  'São Manuel,SP': [-22.7311, -48.5706],
  'Medianeira,PR': [-25.2953, -54.0939],
  'Campo Largo,PR': [-25.4594, -49.5275],
  'São Gabriel,RS': [-30.3364, -54.3200],
  'Parobé,RS': [-29.6286, -50.8350],
  'Natal,RN': [-5.7945, -35.2110],
  'Porangatu,GO': [-13.4408, -49.1486],
  'Jataí,GO': [-17.8814, -51.7144],
  'Maracaju,MS': [-21.6144, -55.1683],
  'Campo Grande,MS': [-20.4697, -54.6201],
  'Paranatinga,MT': [-14.4319, -54.0511],
  'Formoso,BA': [-11.0489, -45.1931],
  'Formoso do Rio Preto,BA': [-11.0489, -45.1931],
  'João Pessoa,PB': [-7.1195, -34.8450],
  'Maceió,AL': [-9.6658, -35.7353],
  'Aracaju,SE': [-10.9472, -37.0731],
  'Porto Velho,RO': [-8.7619, -63.9039],
  'Rio Branco,AC': [-9.9754, -67.8249],
  'Macapá,AP': [0.0349, -51.0694],
  'Boa Vista,RR': [2.8235, -60.6758],
  'Santo André,SP': [-23.6639, -46.5383],
  'Aparecida do Taboado,MS': [-20.0867, -51.0936],
  'Jaborandi,BA': [-13.6194, -44.4328],
  'Cáceres,MT': [-16.0764, -57.6789],
  'Itapira,SP': [-22.4356, -46.8222],
  'Sacramento,MG': [-19.8653, -47.4400]
};

let _cityCoordNormalizedIndex = null;
function lookupCityCoordinates(cidade, uf) {
  if (!cidade || !uf) return null;
  const directKey = `${String(cidade).trim()},${String(uf).trim().toUpperCase()}`;
  if (CITY_COORDINATES[directKey]) return CITY_COORDINATES[directKey];
  if (!_cityCoordNormalizedIndex) {
    _cityCoordNormalizedIndex = new Map();
    Object.entries(CITY_COORDINATES).forEach(([k, coord]) => {
      const normK = k.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ').trim();
      _cityCoordNormalizedIndex.set(normK, coord);
    });
  }
  const normTarget = directKey.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ').trim();
  return _cityCoordNormalizedIndex.get(normTarget) || null;
}

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
  'GDS Subholding': 'GDSS11',
  'Casas Bahia': 'BHIA3',
  'Gol': 'GOLL4',
  'Ambipar': 'AMBP3'
};

// Helper de Data e Hora no Fuso Horário Oficial de Brasília (America/Sao_Paulo)
function getBrazilTodayIso() {
  try {
    return new Date().toLocaleDateString('sv-SE', { timeZone: 'America/Sao_Paulo' });
  } catch (e) {
    const d = new Date(Date.now() - 3 * 60 * 60 * 1000);
    return d.toISOString().slice(0, 10);
  }
}

function formatBrazilNowDateTime() {
  try {
    const parts = new Intl.DateTimeFormat('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).formatToParts(new Date());
    const map = {};
    parts.forEach(p => { map[p.type] = p.value; });
    if (map.day && map.month && map.year) {
      const hh = map.hour === '24' ? '00' : (map.hour || '12');
      return `${map.day}/${map.month}/${map.year} ${hh}:${map.minute || '00'}`;
    }
  } catch (e) {}
  const brt = new Date(Date.now() - 3 * 3600 * 1000);
  return `${String(brt.getUTCDate()).padStart(2, '0')}/${String(brt.getUTCMonth() + 1).padStart(2, '0')}/${brt.getUTCFullYear()} ${String(brt.getUTCHours()).padStart(2, '0')}:${String(brt.getUTCMinutes()).padStart(2, '0')}`;
}

// Application State
let currentMainSection = 'operacao';
let currentSubTab = 'all';
let currentProcessType = '';
let currentUf = '';
let currentSetor = '';
let currentPorte = '';
let currentSort = 'movimento_desc';
let searchTerm = '';
let searchDebounceTimer = null;
let passivoCutoffDebounceTimer = null;
let viewMode = 'table';
let currentPage = 1;
let pageSize = 50;

// Dynamic Passivo Floor & Ceiling (R$ MM)
let minPassivoMM = 30;
let maxPassivoMM = null;
let activeQuickToggle = 'all';

// Structured Entity Filter State (Ecossistema / Bancômetro / UF)
let activeEntityFilter = null; // { label: string, category: string, dealIds: Set<string> }
const entityFilterRegistry = new Map();

// Backend Router Capability & Initial Load State
let gasSupportsActionRouter = null; // null = unknown, true = v4.6/v4.7 router, false = legacy single-sheet
let initialLoadFailed = false;

// Map & Charts State
let leafletMapInstance = null;
let leafletGeoJsonLayer = null;
let leafletMarkersLayer = null;
let leafletCapitalsLayer = null;
let currentModalItem = null;
let currentModalTab = 'visao';
let activeCharts = [];
let pendingChartTimers = [];

// News Filter State
let newsSourceFilter = '';
let newsSetorFilter = '';
let newsCategoriaFilter = '';
let newsSearchQuery = '';
let newsSearchDebounceTimer = null;
let newsScopeFilter = 'all'; // 'all' | 'mercado' | 'pipeline' | 'cvm'
let liveRssNewsItems = [];
let newsFeedSyncStatus = 'Sincronizando Planilha & RSS Distressed Debt...';

// Energy Live Telemetry State
let energyTelemetryStatus = 'Fallback Operacional (Cache ONS/CCEE)';
let energyLastSyncTime = formatBrazilNowDateTime();
let energyLiveOverrides = {};

// Energy SIN Panel State (Inicializado na data corrente de Brasília)
let selectedSinSubmarket = 'SIN';
let selectedSinDate = getBrazilTodayIso();
let upiSortMode = 'valuation_desc';

// v4.7 Module States — Calculadora de Honorários (Success Fee & Retainer)
let selectedModelDealId = 1;
let selectedTier0CalcTarget = null;
let modelCustomPassivo = 1000;
let modelHaircutPct = 55;
let modelSecondaryDiscountPct = 35;
let modelFeeBasis = 'passivo_total'; // 'passivo_total' | 'haircut_economia' | 'credito_recuperado'
let modelMandateMonths = 12;
let modelRetainerOffsetPct = 50;
let modelEvAtivos = 550;
let modelLiqDiscountPct = 40;
let pitchCreditorExposureMM = 200;
let pitchMandateType = 'Debtor-Side / Financial Advisory & Turnaround';
let pitchTargetRecipient = 'Conselho de Administração / Diretoria Financeira ou Comitê de Credores';
let pitchRetainerMensal = 95;
let pitchSuccessFeePct = 2.0;

// AGC Quorum State (Art. 45 & Art. 58 §1º — Cabeça e Valor)
let agcVotes = {
  c1_val_yes: 85, c1_head_yes: 85,
  c2_val_yes: 62, c2_head_yes: 60,
  c3_val_yes: 46, c3_head_yes: 54,
  c4_val_yes: 72, c4_head_yes: 72
};

// Calendar State
let calSelectedMonth = getBrazilTodayIso().slice(0, 7);
let calFilterUrgency = '';
let calFilterMarcoType = '';

// Side-by-Side Case Comparator (Comps) State (up to 4 deals)
let selectedCompIds = [];

let lastNewsAutoSyncTs = 0;
let sheetLiveNewsItems = [];
const STATIC_BUNDLE_VERSION = '20261111v47';

// ==========================================================================
// On-Demand CDN Lazy Script Loader (SheetJS .xlsx & PptxGenJS .pptx)
// ==========================================================================
const SHEETJS_PRIMARY_URL = 'https://cdn.sheetjs.com/xlsx-0.20.2/package/dist/xlsx.full.min.js';
const SHEETJS_PRIMARY_SRI = 'sha384-gx12pQMMYnabkTgbCHqqrT65RwDnXI/f/dU2H9JUmT0KUeiMF5bf+yroQBmX0Nuk';
const SHEETJS_FALLBACK_URL = 'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
const PPTXGEN_CDN_URL = 'https://cdn.jsdelivr.net/npm/pptxgenjs@3.12.0/dist/pptxgen.bundle.js';
const PPTXGEN_CDN_SRI = 'sha384-Cck14aA9cifjYolcnjebXRfWGkz5ltHMBiG4px/j8GS+xQcb7OhNQWZYyWjQ+UwQ';
const _externalScriptPromises = new Map();

function loadExternalScriptOnce(src, integrity) {
  if (!src) return Promise.reject(new Error('Missing script src'));
  if (_externalScriptPromises.has(src)) {
    return _externalScriptPromises.get(src);
  }
  const p = new Promise((resolve, reject) => {
    if (typeof document === 'undefined' || !document.head) {
      reject(new Error('DOM unavailable'));
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    if (integrity) {
      script.integrity = integrity;
      script.crossOrigin = 'anonymous';
    }
    script.onload = () => resolve(true);
    script.onerror = () => {
      _externalScriptPromises.delete(src);
      try { script.remove(); } catch (e) {}
      reject(new Error(`Failed to load ${src}`));
    };
    document.head.appendChild(script);
  });
  _externalScriptPromises.set(src, p);
  return p;
}

async function ensureSheetJsLoaded() {
  if (typeof XLSX !== 'undefined') return true;
  showToast('Carregando motor Excel (.xlsx)...');
  try {
    await loadExternalScriptOnce(SHEETJS_PRIMARY_URL, SHEETJS_PRIMARY_SRI);
  } catch (primaryErr) {
    await loadExternalScriptOnce(SHEETJS_FALLBACK_URL, null);
  }
  return typeof XLSX !== 'undefined';
}

async function ensurePptxGenLoaded() {
  if (typeof PptxGenJS !== 'undefined') return true;
  showToast('Carregando motor PowerPoint (.pptx)...');
  await loadExternalScriptOnce(PPTXGEN_CDN_URL, PPTXGEN_CDN_SRI);
  return typeof PptxGenJS !== 'undefined';
}

function isRecentNewsDate(dataHoraStr, maxAgeDays = 75) {
  const ts = parseNewsTimestamp(dataHoraStr);
  if (!ts || ts <= 0) return false;
  const dt = new Date(ts);
  if (dt.getFullYear() < 2026) return false;
  const ageMs = Date.now() - ts;
  if (ageMs > maxAgeDays * 24 * 60 * 60 * 1000) return false;
  return true;
}

function sanitizeIncomingStaticNewsItem(it) {
  if (!it || !it.titulo || isBlockedEntityToken(it.titulo) || isBlockedEntityToken(it.empresa_nome)) return null;
  const copy = { ...it };
  if (String(copy.fonte || '').trim().toUpperCase() === 'PIPELINE') {
    copy.fonte = 'Pipeline Valor';
  }
  return copy;
}

async function fetchLiveNewsJson(cacheBust = false) {
  const localUrl = cacheBust ? `live-news.json?_cb=${Date.now()}` : `live-news.json?v=${STATIC_BUNDLE_VERSION}`;
  const rawGhUrl = 'https://raw.githubusercontent.com/jmtddr/valknut-radar/main/live-news.json';

  const extractArr = val => {
    if (!val) return [];
    if (Array.isArray(val)) return val;
    return Array.isArray(val.items) ? val.items : [];
  };

  const [localRes, rawGhRes] = await Promise.allSettled([
    fetchWithTimeout(localUrl, {}, 8000).then(r => (r && r.ok ? r.json() : [])),
    fetchWithTimeout(rawGhUrl, {}, 5000).then(r => (r && r.ok ? r.json() : [])).catch(() => [])
  ]);

  const ghItems = rawGhRes.status === 'fulfilled' ? extractArr(rawGhRes.value) : [];
  const localItems = localRes.status === 'fulfilled' ? extractArr(localRes.value) : [];

  const merged = [];
  const seenTitles = new Set();
  // Prefer GitHub raw first so newly committed Actions items take precedence before Pages rebuilds
  [...ghItems, ...localItems].forEach(raw => {
    const clean = sanitizeIncomingStaticNewsItem(raw);
    if (!clean) return;
    const key = String(clean.titulo || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 80);
    if (key && !seenTitles.has(key)) {
      seenTitles.add(key);
      merged.push(clean);
    }
  });
  return merged;
}

async function loadStaticBaseData() {
  const [dealsRes, newsRes] = await Promise.allSettled([
    fetchWithTimeout(`deals.json?v=${STATIC_BUNDLE_VERSION}`, {}, 8000).then(r => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.json();
    }),
    fetchLiveNewsJson(false)
  ]);

  if (dealsRes.status === 'fulfilled' && Array.isArray(dealsRes.value) && dealsRes.value.length > 0) {
    const cleanDeals = dealsRes.value.filter(d => d && !isBlockedEntityToken(d.empresa));
    indexCuratedDeals(cleanDeals);
    DEALS_DATA = cleanDeals.map(d => ({ ...d }));
    VALKNUT_DATA = DEALS_DATA;
    if (typeof window !== 'undefined') window.VALKNUT_DATA = DEALS_DATA;
    initialLoadFailed = false;
  }

  if (newsRes.status === 'fulfilled' && Array.isArray(newsRes.value) && newsRes.value.length > 0) {
    baseStaticNewsItems = newsRes.value;
  }
}

function reconcileDealsWithCuratedBase(incomingArr) {
  if (!Array.isArray(incomingArr) || incomingArr.length === 0) return null;
  const seenCuratedIds = new Set();
  const seenCnpj = new Set();
  const seenStem = new Set();
  let nextNewId = Math.max(154, MAX_CURATED_DEAL_ID) + 1;
  const merged = [];

  incomingArr.forEach(item => {
    if (!item || !item.empresa || isBlockedEntityToken(item.empresa)) return;
    const digits = String(item.cnpj || '').replace(/\D/g, '');
    const stem = normalizeCompanyStem(item.empresa);
    if (digits.length === 14 && seenCnpj.has(digits)) return;
    if (!digits && stem && seenStem.has(stem)) return;

    const curated = findCuratedDeal(item.cnpj, item.empresa);
    let finalDeal;
    if (curated) {
      if (seenCuratedIds.has(curated.id)) return;
      seenCuratedIds.add(curated.id);
      finalDeal = mergeDealWithCurated({ ...item, id: curated.id }, curated);
    } else {
      finalDeal = { ...item, id: nextNewId++ };
    }
    if (digits.length === 14) seenCnpj.add(digits);
    if (stem) seenStem.add(stem);
    merged.push(finalDeal);
  });

  // Garante que todos os casos curados de deals.json permaneçam presentes
  BASE_CURATED_BY_CNPJ.forEach(curated => {
    if (curated && !seenCuratedIds.has(curated.id) && !isBlockedEntityToken(curated.empresa)) {
      seenCuratedIds.add(curated.id);
      merged.push({ ...curated });
    }
  });
  BASE_CURATED_BY_STEM.forEach(curated => {
    if (curated && !seenCuratedIds.has(curated.id) && !isBlockedEntityToken(curated.empresa)) {
      seenCuratedIds.add(curated.id);
      merged.push({ ...curated });
    }
  });

  return merged;
}

function loadCachedLiveNewsFromStorage() {
  try {
    localStorage.removeItem('vk_live_rss_cache_v4');
    localStorage.removeItem('vk_deals_snapshot_v2');
    localStorage.removeItem('vk_deals_snapshot_v3');
    localStorage.removeItem('vk_deals_snapshot_v4');
    localStorage.removeItem('vk_deals_snapshot_v5');
    const rawDealsSnap = localStorage.getItem('vk_deals_snapshot_v6');
    if (rawDealsSnap) {
      const parsedDeals = JSON.parse(rawDealsSnap);
      const totalSnapPassivo = Array.isArray(parsedDeals) ? parsedDeals.reduce((s, x) => s + Number(x.passivo_mm || 0), 0) : 0;
      if (Array.isArray(parsedDeals) && parsedDeals.length >= DEALS_DATA.length && totalSnapPassivo > 0 && totalSnapPassivo < 500000) {
        const reconciled = reconcileDealsWithCuratedBase(parsedDeals);
        if (reconciled && reconciled.length >= DEALS_DATA.length) {
          DEALS_DATA = reconciled;
          VALKNUT_DATA = DEALS_DATA;
          if (typeof window !== 'undefined') window.VALKNUT_DATA = DEALS_DATA;
          initialLoadFailed = false;
        }
      }
    }
    const raw = localStorage.getItem('vk_live_rss_cache_v5');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        liveRssNewsItems = parsed
          .map(sanitizeIncomingStaticNewsItem)
          .filter(it => it && isRecentNewsDate(it.data_hora, 75));
      }
    }
  } catch (e) {}
}

function saveCachedLiveNewsToStorage(items) {
  try {
    if (Array.isArray(items) && items.length > 0) {
      const clean = items.filter(it => it && !isBlockedEntityToken(it.titulo) && isRecentNewsDate(it.data_hora, 75));
      localStorage.setItem('vk_live_rss_cache_v5', JSON.stringify(clean.slice(0, 28)));
    }
  } catch (e) {}
}

async function fetchWithTimeout(url, optionsOrTimeout = {}, timeoutMs = 6500) {
  let opts = {};
  let ms = timeoutMs;
  if (typeof optionsOrTimeout === 'number') {
    ms = optionsOrTimeout;
  } else if (optionsOrTimeout && typeof optionsOrTimeout === 'object') {
    opts = optionsOrTimeout;
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  try {
    return await fetch(url, { ...opts, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

function normalizeIsoDateStr(raw, fallback = '2026-10-25') {
  if (!raw) return fallback;
  const s = String(raw).trim();
  if (!s || s.toUpperCase() === 'TBD') return fallback;
  if (/^\d{5}(\.\d+)?$/.test(s)) {
    const serial = parseFloat(s);
    if (serial > 40000 && serial < 60000) {
      const utcMs = Math.round((serial - 25569) * 86400 * 1000);
      const dtSerial = new Date(utcMs);
      return `${dtSerial.getUTCFullYear()}-${String(dtSerial.getUTCMonth() + 1).padStart(2, '0')}-${String(dtSerial.getUTCDate()).padStart(2, '0')}`;
    }
  }
  const mIso = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (mIso) return `${mIso[1]}-${mIso[2]}-${mIso[3]}`;
  const mBr = s.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/);
  if (mBr) {
    return `${mBr[3]}-${String(mBr[2]).padStart(2, '0')}-${String(mBr[1]).padStart(2, '0')}`;
  }
  const dt = new Date(s);
  if (!isNaN(dt.getTime()) && dt.getFullYear() >= 2020 && dt.getFullYear() <= 2035) {
    return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`;
  }
  return fallback;
}

function shiftWeekendToNextBusinessDay(isoStr) {
  const clean = normalizeIsoDateStr(isoStr, '2026-11-16');
  const parts = clean.split('-').map(Number);
  if (parts.length !== 3 || isNaN(parts[0])) return clean;
  const dt = new Date(parts[0], parts[1] - 1, parts[2], 12, 0, 0);
  const dow = dt.getDay();
  if (dow === 6) dt.setDate(dt.getDate() + 2);
  else if (dow === 0) dt.setDate(dt.getDate() + 1);
  return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`;
}

function saveDealsSnapshotToStorage(dealsArr) {
  try {
    if (Array.isArray(dealsArr) && dealsArr.length > 0) {
      localStorage.setItem('vk_deals_snapshot_v6', JSON.stringify(dealsArr));
    }
  } catch (e) {}
}

let isApplyingUrlHash = false;
function syncUrlHash(pushHistory = false) {
  if (isApplyingUrlHash || typeof window === 'undefined' || !window.history) return;
  const params = new URLSearchParams();
  if (currentMainSection && currentMainSection !== 'operacao') params.set('sec', currentMainSection);
  if (currentSubTab && currentSubTab !== 'all') params.set('sub', currentSubTab);
  if (currentModalItem && currentModalItem.id) params.set('deal', String(currentModalItem.id));
  if (searchTerm) params.set('q', searchTerm);
  if (currentUf) params.set('uf', currentUf);
  if (currentSetor) params.set('setor', currentSetor);
  if (currentPorte) params.set('porte', currentPorte);
  if (currentProcessType) params.set('proc', currentProcessType);
  if (minPassivoMM !== 30) params.set('min', String(minPassivoMM));
  if (maxPassivoMM !== null) params.set('max', String(maxPassivoMM));
  if (currentSort && currentSort !== 'movimento_desc') params.set('sort', currentSort);
  const newHash = params.toString() ? `#${params.toString()}` : '';
  const currentHash = window.location.hash === '#' ? '' : (window.location.hash || '');
  if (currentHash !== newHash) {
    const targetUrl = newHash || (window.location.pathname + window.location.search);
    try {
      if (pushHistory) {
        window.history.pushState(null, '', targetUrl);
      } else {
        window.history.replaceState(null, '', targetUrl);
      }
    } catch (e) {}
  }
}
const updateUrlHash = syncUrlHash;

function syncFilterDomControlsFromState() {
  const sIn = document.getElementById('searchInput');
  if (sIn) sIn.value = searchTerm || '';
  const ufEl = document.getElementById('selectUf');
  if (ufEl) ufEl.value = currentUf || '';
  const setEl = document.getElementById('selectSetor');
  if (setEl) setEl.value = currentSetor || '';
  const pEl = document.getElementById('selectPorte');
  if (pEl) pEl.value = currentPorte || '';
  const sortEl = document.getElementById('selectSort');
  if (sortEl) sortEl.value = currentSort || 'movimento_desc';
  const minEl = document.getElementById('inputMinPassivo');
  if (minEl) minEl.value = String(minPassivoMM ?? 30);
  const maxEl = document.getElementById('inputMaxPassivo');
  if (maxEl) maxEl.value = maxPassivoMM !== null ? String(maxPassivoMM) : '';

  document.querySelectorAll('.phase-chip[id^="proc-"]').forEach(b => b.classList.remove('active'));
  const procMap = {
    '': 'proc-all',
    'PRJ': 'proc-prj',
    'Cautelar / Pré-RJ': 'proc-cautelar',
    'PRE': 'proc-pre',
    'Falência / Liquidação': 'proc-falencia',
    'Tier 0': 'proc-tier0'
  };
  document.getElementById(procMap[currentProcessType] || 'proc-all')?.classList.add('active');

  document.querySelectorAll('.quick-toggle-btn[id^="qtoggle-"]').forEach(b => b.classList.remove('active'));
  if ((minPassivoMM === 0 || minPassivoMM === 30) && maxPassivoMM === null) {
    document.getElementById('qtoggle-all')?.classList.add('active');
  } else if (minPassivoMM === 30 && maxPassivoMM === 10000) {
    document.getElementById('qtoggle-no_outliers')?.classList.add('active');
  } else if (minPassivoMM === 30 && maxPassivoMM === 500) {
    document.getElementById('qtoggle-middle')?.classList.add('active');
  }
}

function applyUrlHash(fromPopOrHashEvent = false) {
  if (typeof window === 'undefined') return;
  const rawHash = (window.location.hash || '').replace(/^#/, '');

  // If initial boot has empty hash and we haven't navigated yet, keep default rendered state cleanly
  if (!rawHash && !fromPopOrHashEvent) return;

  isApplyingUrlHash = true;
  try {
    const params = new URLSearchParams(rawHash);
    let sec = params.get('sec') || 'operacao';
    let sub = params.get('sub');
    const dealId = params.get('deal');

    // Compatibilidade retroativa com links antigos de sub-abas consolidadas
    if (sec === 'dashboards' && sub === 'benchmarks_setor') {
      sec = 'precificacao';
    }
    if (!SECTION_CONFIG[sec]) sec = 'operacao';
    if (sec === 'energia' && sub) {
      if (sub === 'pld_horario' || sub === 'risco_curtailment') sub = 'pld_curtailment';
      else if (sub === 'hidrologia_ena' || sub === 'outorgas_aneel') sub = 'sin_tempo_real';
    }

    // Reset filters to defaults whenever omitted in URL hash (supports browser Back to default state)
    searchTerm = params.has('q') ? params.get('q').trim().toLowerCase() : '';
    currentUf = params.has('uf') ? params.get('uf') : '';
    currentSetor = params.has('setor') ? params.get('setor') : '';
    currentPorte = params.has('porte') ? params.get('porte') : '';
    currentProcessType = params.has('proc') ? params.get('proc') : '';
    minPassivoMM = 30;
    maxPassivoMM = null;
    if (params.has('min')) {
      const minVal = parseFloat(params.get('min'));
      if (!isNaN(minVal) && minVal >= 0) minPassivoMM = minVal;
    } else if (currentPorte === 'small') {
      minPassivoMM = 0;
    }
    if (params.has('max')) {
      const maxVal = parseFloat(params.get('max'));
      if (!isNaN(maxVal) && maxVal > 0) maxPassivoMM = maxVal;
    }
    currentSort = params.get('sort') || 'movimento_desc';

    if (!rawHash && activeEntityFilter) {
      activeEntityFilter = null;
    }
    syncFilterDomControlsFromState();
    if (typeof renderActiveEntityFilterBar === 'function') {
      renderActiveEntityFilterBar();
    }

    if (sec !== 'mapa' && leafletMapInstance) {
      try { leafletMapInstance.remove(); } catch (e) {}
      leafletMapInstance = null;
    }

    currentMainSection = sec;
    currentPage = 1;
    document.querySelectorAll('.nav-link-btn').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    const activeNav = document.getElementById(`nav-${sec}`);
    if (activeNav) {
      activeNav.classList.add('active');
      activeNav.setAttribute('aria-selected', 'true');
    }

    const cfg = SECTION_CONFIG[sec] || SECTION_CONFIG.operacao;
    const titleEl = document.getElementById('pageMainTitle');
    const subEl = document.getElementById('pageMainSubtitle');
    const filterEl = document.getElementById('filterConsole');
    if (titleEl) titleEl.textContent = resolveDynamicCaseText(cfg.pageTitle);
    if (subEl) subEl.textContent = resolveDynamicCaseText(cfg.pageSubtitle);
    if (filterEl) filterEl.style.display = cfg.showFilters ? 'flex' : 'none';

    currentSubTab = (sub && cfg.subtabs.some(s => s.id === sub)) ? sub : cfg.subtabs[0].id;
    renderSubTabs();
    renderSectionContent();

    if (dealId) {
      const numId = Number(dealId);
      if (!isNaN(numId)) openDossier(numId);
    } else {
      if (currentModalItem) closeModal(true);
      if (typeof closeCompsModal === 'function') closeCompsModal();
    }
  } catch (e) {} finally {
    isApplyingUrlHash = false;
  }
}

async function retryInitialDataLoad() {
  initialLoadFailed = false;
  updateDynamicNavCounts();
  const container = document.getElementById('sectionContentArea');
  if (container) {
    container.innerHTML = `<div style="text-align:center; padding:48px; color:var(--text-muted);">Reconectando e sincronizando base concursal...</div>`;
  }
  await loadStaticBaseData();
  loadCachedLiveNewsFromStorage();
  if (DEALS_DATA.length === 0) {
    await fetchLiveSheetInBackground(false);
  }
  if (DEALS_DATA.length === 0) {
    initialLoadFailed = true;
    updateDynamicNavCounts();
    renderSectionContent();
    return;
  }
  initialLoadFailed = false;
  enrichAllDeals();
  if (DEALS_DATA[0]) calibrateAdvisoryDefaultsForDeal(DEALS_DATA[0]);
  populateDropdownFilters();
  updateDynamicNavCounts();
  renderSubTabs();
  renderSectionContent();
  showToast(`Base sincronizada com sucesso (${DEALS_DATA.length} casos)!`);
}

let _hasBootedValknutApp = false;
async function bootValknutApp() {
  if (_hasBootedValknutApp) return;
  _hasBootedValknutApp = true;

  await loadStaticBaseData();
  loadCachedLiveNewsFromStorage();

  if (DEALS_DATA.length === 0) {
    initialLoadFailed = true;
  } else {
    initialLoadFailed = false;
    enrichAllDeals();
    if (DEALS_DATA[0]) calibrateAdvisoryDefaultsForDeal(DEALS_DATA[0]);
  }

  populateDropdownFilters();
  updateDynamicNavCounts();
  renderSubTabs();
  renderSectionContent();
  if (typeof renderCompsFloatingBar === 'function') renderCompsFloatingBar();
  applyUrlHash(false);

  window.addEventListener('hashchange', () => applyUrlHash(true));
  window.addEventListener('popstate', () => applyUrlHash(true));

  // Global keyboard shortcut: '/' or Ctrl+K / Cmd+K focuses #searchInput
  window.addEventListener('keydown', e => {
    const isCmdK = (e.ctrlKey || e.metaKey) && String(e.key || '').toLowerCase() === 'k';
    const isSlash = e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey;
    if (!isCmdK && !isSlash) return;

    const active = document.activeElement;
    const tag = active && active.tagName ? active.tagName.toUpperCase() : '';
    const isTypingField = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || Boolean(active && active.isContentEditable);
    if (isSlash && isTypingField) return;

    const detailOpen = document.getElementById('detailModal')?.style.display === 'flex';
    const compsOpen = document.getElementById('compsModal')?.style.display === 'flex';
    if (detailOpen || compsOpen) return;

    e.preventDefault();
    const cfg = SECTION_CONFIG[currentMainSection] || SECTION_CONFIG.operacao;
    if (!cfg.showFilters) {
      switchMainSection('operacao');
    }
    const searchEl = document.getElementById('searchInput');
    if (searchEl) {
      searchEl.focus();
      if (typeof searchEl.select === 'function') searchEl.select();
    }
  });

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
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootValknutApp);
  } else {
    bootValknutApp();
  }
}

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

const RX_REIT_SEC = /\breit\s+securitizadora\b/i;
const RX_VERT_SEC = /\bvert\s+(?:securitizadora|cia\.?\s+securitizadora|companhia\s+securitizadora)\b/i;
const RX_EURO_SEC = /\beuro\s+securitizadora\b/i;

function extractStrictSecuritizadorasList(text) {
  const blob = String(text || '');
  if (!blob) return [];
  const rules = [
    { name: 'Opea Securitizadora', rx: /\bopea(?:\s+securitizadora)?\b/i },
    { name: 'Vert Securitizadora', rx: RX_VERT_SEC },
    { name: 'Virgo Companhia de Securitização', rx: /\bvirgo(?:\s+(?:securitizadora|cia|companhia))?\b/i },
    { name: 'Reit Securitizadora', rx: RX_REIT_SEC },
    { name: 'Audax Securitizadora', rx: /\baudax(?:\s+securitizadora)?\b/i },
    { name: 'True Securitizadora', rx: /\btrue\s+securitizadora\b/i },
    { name: 'Bari Securitizadora', rx: /\bbari\s+securitizadora\b/i },
    { name: 'Isec Securitizadora', rx: /\bisec(?:\s+securitizadora)?\b/i },
    { name: 'Euro Securitizadora', rx: RX_EURO_SEC },
    { name: 'Ignis Securitizadora', rx: /\bignis(?:\s+securitizadora)?\b/i }
  ];
  const found = [];
  rules.forEach(r => {
    if (r.rx.test(blob)) found.push(r.name);
  });
  return found;
}

function extractStakeholdersFromText(credoresStr, teseStr, extraStr = '') {
  const blob = `${credoresStr || ''} ${teseStr || ''} ${extraStr || ''}`;
  const fiduciarios = [];
  [
    { label: 'Vórtx DTVM', rx: /\bv[oó]rtx\b/i },
    { label: 'Pentágono DTVM', rx: /\bpent[aá]gono\b/i },
    { label: 'Oliveira Trust DTVM', rx: /\boliveira\s+trust\b/i },
    { label: 'Simplific Pavarini DTVM', rx: /\bsimplific\s+pavarini\b/i },
    { label: 'Planner Trustee DTVM', rx: /\bplanner(?:\s+trustee|\s+dtvm|\s+corretora)?\b/i }
  ].forEach(ag => {
    if (ag.rx.test(blob)) fiduciarios.push(ag.label);
  });
  const securitizadoras = extractStrictSecuritizadorasList(blob);
  return {
    fiduciarios: fiduciarios.length > 0 ? fiduciarios.join(' • ') : 'N/A (Dívida Bancária / Bilaterais)',
    securitizadoras: securitizadoras.length > 0 ? securitizadoras.join(' • ') : 'N/A (Sem Emissão Securitizada Reportada)'
  };
}

function reconcileSixBucketSplit(rawObj) {
  const src = rawObj || {};
  const hasExplicit = (
    src.extraconcursal_pct !== undefined || src.extraconcursal_fiduciario !== undefined ||
    src.fiscal_pct !== undefined || src.fiscal_tributario !== undefined ||
    src.classe_i_pct !== undefined || src.c1_trabalhista !== undefined ||
    src.classe_ii_pct !== undefined || src.c2_garantia_real !== undefined ||
    src.classe_iii_pct !== undefined || src.c3_quirografario !== undefined ||
    src.classe_iv_pct !== undefined || src.c4_me_epp !== undefined
  );
  if (!hasExplicit) {
    return { extra: 18, fiscal: 7, c1: 3, c2: 42, c3: 27, c4: 3 };
  }
  let extra = Math.max(0, Number(src.extraconcursal_pct ?? src.extraconcursal_fiduciario ?? src.extra ?? 0) || 0);
  let fiscal = Math.max(0, Number(src.fiscal_pct ?? src.fiscal_tributario ?? src.fiscal ?? 0) || 0);
  let c1 = Math.max(0, Number(src.classe_i_pct ?? src.c1_trabalhista ?? src.c1 ?? 0) || 0);
  let c2 = Math.max(0, Number(src.classe_ii_pct ?? src.c2_garantia_real ?? src.c2 ?? 0) || 0);
  let c3 = Math.max(0, Number(src.classe_iii_pct ?? src.c3_quirografario ?? src.c3 ?? 0) || 0);
  let c4 = Math.max(0, Number(src.classe_iv_pct ?? src.c4_me_epp ?? src.c4 ?? 0) || 0);

  const sum = extra + fiscal + c1 + c2 + c3 + c4;
  if (sum <= 0) {
    return { extra: 18, fiscal: 7, c1: 3, c2: 42, c3: 27, c4: 3 };
  }
  if (Math.abs(sum - 100) < 0.05) {
    return { extra, fiscal, c1, c2, c3, c4 };
  }
  // Proportional normalization to exact 100% with largest-bucket residual adjustment
  const keys = ['extra', 'fiscal', 'c1', 'c2', 'c3', 'c4'];
  const rawVals = { extra, fiscal, c1, c2, c3, c4 };
  const rounded = {};
  let rSum = 0;
  let maxKey = 'c2';
  let maxVal = -1;
  keys.forEach(k => {
    const scaled = Math.round((rawVals[k] / sum) * 1000) / 10;
    rounded[k] = scaled;
    rSum += scaled;
    if (scaled > maxVal) {
      maxVal = scaled;
      maxKey = k;
    }
  });
  const diff = Math.round((100 - rSum) * 10) / 10;
  if (diff !== 0) {
    rounded[maxKey] = Math.max(0, Math.round((rounded[maxKey] + diff) * 10) / 10);
  }
  return rounded;
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
  else if (setor.includes('construção') || setor.includes('real estate') || setor.includes('imobili')) recup = 52;
  else if (setor.includes('agronegócio') || setor.includes('agro')) recup = 48;
  else if (setor.includes('saúde')) recup = 46;
  else if (setor.includes('logística') || setor.includes('transporte')) recup = 41;
  else if (setor.includes('indústria')) recup = 39;
  else if (setor.includes('financeiros') || setor.includes('securitiz')) recup = 34;
  else if (setor.includes('varejo')) recup = 29;
  else if (setor.includes('tecnologia') || setor.includes('serviços b2b') || setor.includes('serviços')) recup = 22;

  if (tier.includes('tier 0') && !setor.includes('tecnologia')) recup += 12;
  else if (tier.includes('tier 1') && !setor.includes('tecnologia')) recup += 8;
  else if (fase.includes('extrajudicial') || fase.includes('128') || fase.includes('12154')) recup += 10;
  else if (fase.includes('falência') || fase.includes('110') || fase.includes('liquidação')) recup -= 16;

  if (colateral.includes('alienação fiduciária') || colateral.includes('garantia real') || colateral.includes('hipoteca') || colateral.includes('project finance')) {
    recup += 5;
  }
  if (colateral.includes('upi') || colateral.includes('sale & leaseback') || colateral.includes('silos') || colateral.includes('parque fabril')) {
    recup += 3;
  }

  const offset = ((Number(d.id || 1) * 7) % 5) - 2;
  recup = Math.min(82, Math.max(15, recup + offset));
  return { recupPct: recup, haircutPct: 100 - recup };
}

function computeDynamicCalendarMeta(d) {
  const existing = d.calendar_meta || {};
  const textBlob = `${d.fase || ''} ${d.tese || ''} ${d.proximas_acoes || ''}`;
  const explicitDateMatch = textBlob.match(/\b(\d{2})\/(\d{2})\/(202\d)\b/);
  let dataMarcoIso = existing.data_marco_iso || existing.data_limite || existing.data_marco || '';

  if (dataMarcoIso && /^\d{2}\/\d{2}\/\d{4}$/.test(dataMarcoIso)) {
    dataMarcoIso = normalizeIsoDateStr(dataMarcoIso);
  }

  const todayIso = typeof getBrazilTodayIso === 'function' ? getBrazilTodayIso() : '2026-11-11';
  const refToday = parseDateBR(todayIso) || new Date();

  let isFixed = Boolean(existing.is_fixed_edital) || hasScheduledAssemblyOrAuction(d);
  if ((!dataMarcoIso || dataMarcoIso === '2026-11-15') && explicitDateMatch) {
    const candidateIso = `${explicitDateMatch[3]}-${explicitDateMatch[2]}-${explicitDateMatch[1]}`;
    if (candidateIso >= todayIso) {
      dataMarcoIso = candidateIso;
      isFixed = true;
    }
  }

  const addDays = (d.tipo_processo === 'Tier 0' || d.tipo_processo === 'PRE') ? (35 + (Number(d.id || 1) % 20)) : 60;
  const evIso = normalizeIsoDateStr(d.data_evento || '2026-10-20');
  const addIso = normalizeIsoDateStr(d.data_adicao || evIso);
  const evDate = parseDateBR(evIso);
  const addDate = parseDateBR(addIso);

  if (!dataMarcoIso || dataMarcoIso === '2026-11-15' || dataMarcoIso < todayIso) {
    const baseDt = (evDate && addDate && (evDate.getTime() + addDays * 86400000 < refToday.getTime()))
      ? (addDate.getTime() + addDays * 86400000 >= refToday.getTime() ? addDate : refToday)
      : (evDate || addDate || refToday);
    let targetMs = baseDt.getTime() + addDays * 86400000;
    if (targetMs < refToday.getTime()) {
      const staggerDays = 10 + ((Number(d.id || 1) * 7) % 45);
      targetMs = refToday.getTime() + staggerDays * 86400000;
    }
    const targetDt = new Date(targetMs);
    dataMarcoIso = `${targetDt.getFullYear()}-${String(targetDt.getMonth() + 1).padStart(2, '0')}-${String(targetDt.getDate()).padStart(2, '0')}`;
  }

  dataMarcoIso = shiftWeekendToNextBusinessDay(dataMarcoIso);
  const dataMarcoBr = formatDateBR(dataMarcoIso);
  const diasRestantes = calcDaysRemaining(dataMarcoIso) ?? 30;
  let tipoMarco = existing.marco_label || existing.marco_principal || existing.tipo_marco || '';
  if (!tipoMarco) {
    if (d.tipo_processo === 'Cautelar / Pré-RJ') {
      tipoMarco = 'Termo Final da Blindagem Cautelar Art. 20-B (60 dias)';
    } else if (d.tipo_processo === 'PRE') {
      tipoMarco = 'Prazo de Homologação de Quórum PRE / Standstill (Art. 163)';
    } else if (d.tipo_processo === 'Tier 0') {
      tipoMarco = 'Janela Crítica de Repactuação / AGD de Debenturistas';
    } else if (d.subtipo_processo === 'Falência / Liquidação') {
      tipoMarco = 'Edital de Arrecadação de Ativos & Leilão Judicial (Art. 140)';
    } else if (isFixed) {
      tipoMarco = 'Assembleia Geral de Credores (AGC/AGD) ou Leilão Fixado em Edital';
    } else {
      tipoMarco = 'Apresentação de Plano de RJ (Art. 53 — 60 dias) & Controle de Stay Period';
    }
  }

  return {
    ...existing,
    data_limite: dataMarcoIso,
    data_marco_iso: dataMarcoIso,
    data_marco: dataMarcoIso,
    data_marco_br: dataMarcoBr,
    marco_principal: tipoMarco,
    tipo_marco: tipoMarco,
    marco_label: tipoMarco,
    is_fixed_edital: isFixed,
    dias_restantes: diasRestantes
  };
}

function enrichAllDeals() {
  const todayIso = typeof getBrazilTodayIso === 'function' ? getBrazilTodayIso() : '2026-11-11';
  DEALS_DATA.forEach(d => {
    d.data_evento = normalizeIsoDateStr(d.data_evento, '2026-10-15');
    d.data_adicao = normalizeIsoDateStr(d.data_adicao, d.data_evento);

    if (typeof resolveGeoFromRegiaoAndTribunal === 'function' && (!d.uf || (d.uf === 'SP' && d.cidade === 'São Paulo'))) {
      const geo = resolveGeoFromRegiaoAndTribunal(d.regiao, d.tribunal, d.empresa);
      if (geo && geo.uf) {
        d.cidade = geo.cidade;
        d.uf = geo.uf;
        d.coordenadas = geo.coord;
        d.regiao_macro = UF_TO_REGION[geo.uf] || d.regiao_macro || 'Sudeste';
      }
    }

    const enrichedRef = ENRICHED_BY_COMPANY[d.empresa];
    if (enrichedRef) {
      if (!d.tese || !d.tese.includes('(1)')) d.tese = enrichedRef.tese;
      if (!d.energy_meta && enrichedRef.energy_meta) d.energy_meta = enrichedRef.energy_meta;
      if (!d.descricao_empresa && enrichedRef.descricao_empresa) d.descricao_empresa = enrichedRef.descricao_empresa;
      if (!d.model_params && enrichedRef.model_params) d.model_params = enrichedRef.model_params;
      if (!d.agro_meta && enrichedRef.agro_meta) d.agro_meta = enrichedRef.agro_meta;
      if (!d.calendar_meta && enrichedRef.calendar_meta && (enrichedRef.calendar_meta.data_marco_iso || '') >= todayIso) {
        d.calendar_meta = enrichedRef.calendar_meta;
      }
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
    const p = Number(d.passivo_mm || 100);
    if (!d.model_params) {
      const defSplit = { extra: 18, fiscal: 7, c1: 3, c2: 42, c3: 27, c4: 3 };
      d.model_params = {
        haircut_pct: dynRec.haircutPct,
        recuperacao_pct: dynRec.recupPct,
        haircut_estimado_pct: dynRec.haircutPct,
        recuperacao_estimada_pct: dynRec.recupPct,
        desconto_secundario_pct: 35,
        ev_estimado_mm: Math.round(p * (dynRec.recupPct / 100.0)),
        liquidez_forcada_desconto_pct: 40,
        split_classes: {
          extraconcursal_pct: defSplit.extra,
          fiscal_pct: defSplit.fiscal,
          classe_i_pct: defSplit.c1,
          classe_ii_pct: defSplit.c2,
          classe_iii_pct: defSplit.c3,
          classe_iv_pct: defSplit.c4
        },
        classes_pct: {
          extraconcursal_fiduciario: defSplit.extra,
          fiscal_tributario: defSplit.fiscal,
          c1_trabalhista: defSplit.c1,
          c2_garantia_real: defSplit.c2,
          c3_quirografario: defSplit.c3,
          c4_me_epp: defSplit.c4,
          passivo_fiscal_estimado_mm: Math.round(p * (defSplit.fiscal / 100) * 10) / 10
        },
        dip_necessidade_mm: Math.round(Math.max(15, p * 0.12)),
        upi_valuation_estimado_mm: Math.round(p * 0.35)
      };
    } else {
      d.model_params.haircut_estimado_pct = dynRec.haircutPct;
      d.model_params.recuperacao_estimada_pct = dynRec.recupPct;
      d.model_params.haircut_pct = dynRec.haircutPct;
      d.model_params.recuperacao_pct = dynRec.recupPct;
      const recSplit = reconcileSixBucketSplit(d.model_params.split_classes || d.model_params.classes_pct);
      d.model_params.split_classes = {
        extraconcursal_pct: recSplit.extra,
        fiscal_pct: recSplit.fiscal,
        classe_i_pct: recSplit.c1,
        classe_ii_pct: recSplit.c2,
        classe_iii_pct: recSplit.c3,
        classe_iv_pct: recSplit.c4
      };
      d.model_params.classes_pct = {
        ...(d.model_params.classes_pct || {}),
        extraconcursal_fiduciario: recSplit.extra,
        fiscal_tributario: recSplit.fiscal,
        c1_trabalhista: recSplit.c1,
        c2_garantia_real: recSplit.c2,
        c3_quirografario: recSplit.c3,
        c4_me_epp: recSplit.c4,
        passivo_fiscal_estimado_mm: Math.round(p * (recSplit.fiscal / 100) * 10) / 10
      };
      if (typeof d.model_params.upi_valuation_estimado_mm !== 'number' || d.model_params.upi_valuation_estimado_mm <= 0) {
        d.model_params.upi_valuation_estimado_mm = Math.round(p * 0.35);
      }
    }

    d.calendar_meta = computeDynamicCalendarMeta(d);

    const st = extractStakeholdersFromText(d.credores, d.tese, d.perfil_passivo);
    d.agentes_fiduciarios = (d.energy_meta && d.energy_meta.agente_fiduciario) ? d.energy_meta.agente_fiduciario : (d.agentes_fiduciarios || st.fiduciarios);
    if (!d.securitizadoras || /^n\/a\b/i.test(String(d.securitizadoras).trim())) {
      d.securitizadoras = st.securitizadoras;
    } else {
      // Sanitize any legacy non-contextual Reit/Vert/Euro token if raw deal fields lack contextual match
      const rawEvidence = `${d.credores || ''} ${d.tese || ''} ${d.perfil_passivo || ''} ${d.descricao_empresa || ''}`;
      const tokens = String(d.securitizadoras).split(/\s*(?:•|,|;|\/)\s*/).filter(Boolean).filter(tok => {
        if (/^reit\b/i.test(tok) && !RX_REIT_SEC.test(rawEvidence) && !RX_REIT_SEC.test(tok)) return false;
        if (/^vert\b/i.test(tok) && !RX_VERT_SEC.test(rawEvidence) && !RX_VERT_SEC.test(tok)) return false;
        if (/^euro\b/i.test(tok) && !RX_EURO_SEC.test(rawEvidence) && !RX_EURO_SEC.test(tok)) return false;
        return true;
      });
      d.securitizadoras = tokens.length > 0 ? tokens.join(' • ') : st.securitizadoras;
    }
    d.ticker = d.ticker || resolveTicker(d.empresa);

    const faseL = (d.fase || '').toLowerCase();
    if (faseL.includes('falência') || faseL.includes('falencia') || faseL.includes('autofalência') || faseL.includes('liquidação') || faseL.includes('liquidacao') || faseL.includes('classe 110')) {
      d.subtipo_processo = 'Falência / Liquidação';
    } else {
      d.subtipo_processo = d.tipo_processo || 'PRJ';
    }
  });

  updateDynamicNavCounts();
}

function showToast(msg) {
  const t = document.getElementById('toastBanner');
  if (!t) return;
  t.textContent = msg;
  t.style.display = 'block';
  if (typeof window !== 'undefined') {
    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(() => { t.style.display = 'none'; }, 3200);
  }
}

// ==========================================================================
// 2. Dynamic Liability Cutoff Controls & Structured Entity Filter
// ==========================================================================
function matchesPassivoCutoff(item) {
  const val = Number(item.passivo_mm || 0);
  if (minPassivoMM !== null && !isNaN(minPassivoMM) && val < minPassivoMM) return false;
  if (maxPassivoMM !== null && !isNaN(maxPassivoMM) && val > maxPassivoMM) return false;
  return true;
}

function applyPassivoCutoffImmediate() {
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

  currentPage = 1;
  renderSubTabs();
  renderSectionContent();
  syncUrlHash(false);
}

function handlePassivoCutoffInput() {
  clearTimeout(passivoCutoffDebounceTimer);
  passivoCutoffDebounceTimer = setTimeout(applyPassivoCutoffImmediate, 120);
}

function setPassivoQuickToggle(mode) {
  activeQuickToggle = mode;
  currentPage = 1;
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
  syncUrlHash(false);
}

function renderActiveEntityFilterBar() {
  const bar = document.getElementById('activeEntityFilterBar');
  if (!bar) return;
  if (!activeEntityFilter || !activeEntityFilter.dealIds) {
    bar.style.display = 'none';
    bar.innerHTML = '';
    return;
  }
  const cnt = activeEntityFilter.dealIds.size;
  bar.style.display = 'flex';
  bar.innerHTML = `
    <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
      <span style="font-size:11px; font-weight:800; color:#063630; text-transform:uppercase; letter-spacing:0.04em;">Filtro de Entidade Ativo:</span>
      <span class="entity-filter-chip">
        <span>${escapeHtml(activeEntityFilter.category)} &mdash; ${escapeHtml(activeEntityFilter.label)} (${cnt} ${cnt === 1 ? 'caso' : 'casos'})</span>
        <button type="button" class="entity-chip-dismiss" onclick="clearEntityFilter()" aria-label="Remover filtro de entidade">&#10005;</button>
      </span>
    </div>
    <button type="button" class="btn-action" style="padding:3px 10px; font-size:11px;" onclick="clearEntityFilter()">&#10005; Limpar</button>
  `;
}

function clearEntityFilter() {
  activeEntityFilter = null;
  currentPage = 1;
  renderActiveEntityFilterBar();
  renderSubTabs();
  renderSectionContent();
  syncUrlHash(true);
  showToast('Filtro de entidade removido.');
}

function activateEntityFilter(category, label, dealIdsIterable) {
  const dealIds = new Set(Array.from(dealIdsIterable || [], id => String(id)));
  activeEntityFilter = {
    category: String(category || 'Entidade'),
    label: String(label || ''),
    dealIds
  };

  // Ensure no secondary filter or passivo cutoff hides any of the exact N matched cases
  currentProcessType = '';
  currentUf = '';
  currentSetor = '';
  currentPorte = '';
  searchTerm = '';

  const matchedDeals = DEALS_DATA.filter(d => dealIds.has(String(d.id)));
  const hasBelowFloor = matchedDeals.some(d => Number(d.passivo_mm || 0) < (minPassivoMM || 0));
  const hasAboveCeil = maxPassivoMM !== null && matchedDeals.some(d => Number(d.passivo_mm || 0) > maxPassivoMM);
  if (hasBelowFloor) {
    minPassivoMM = 0;
  }
  if (hasAboveCeil) {
    maxPassivoMM = null;
  }

  syncFilterDomControlsFromState();
  renderActiveEntityFilterBar();
  switchMainSection('operacao');
  showToast(`${activeEntityFilter.category}: ${activeEntityFilter.label} (${dealIds.size} ${dealIds.size === 1 ? 'caso' : 'casos'})`);
}

function activateEntityFilterFromCard(regKey) {
  const entry = entityFilterRegistry.get(regKey) || entityFilterRegistry[regKey];
  if (!entry) return;
  activateEntityFilter(entry.category, entry.label, entry.dealIds);
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
  activeEntityFilter = null;
  currentPage = 1;

  syncFilterDomControlsFromState();
  renderActiveEntityFilterBar();
  renderSubTabs();
  renderSectionContent();
  syncUrlHash(true);
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
  if (s.includes('agro') || /\b(fazendas?|silos?|armaz[eé]ns?|terras\s+rurais|gr[aã]os|usinas?\s+sucro|sementes|biol[oó]gicos|cprs?)\b/.test(blob)) {
    return 'upi_agro';
  }
  if (
    s.includes('indústria') ||
    s.includes('varejo') ||
    s.includes('financeiros') ||
    s.includes('logística') ||
    /\b(parque\s+fabril|f[aá]bricas?|planta\s+industrial|maquin[aá]rios?|marcas?|frotas?|carteiras?\s+de\s+cr[eé]dito|carteiras?\s+de\s+receb[ií]veis|ccbs?|direitos\s+credit[oó]rios|estoques?)\b/.test(blob)
  ) {
    if (!/\b(campi|campus|hospital|shopping|concess[aã]o|hidrel[eé]trica|e[oó]lica|solar|linha\s+de\s+transmiss[aã]o|subesta[cç][aã]o|spe\s+imobili[aá]ria|edif[ií]cio|incorporadora)\b/.test(blob)) {
      return 'upi_ind';
    }
  }
  return 'upi_imob';
}

function isDebenturesEligible(d) {
  const perfilClean = String(d.perfil_passivo || '').replace(/bancário\s*[+/]\s*mercado de capitais/gi, '');
  const afClean = String(d.agentes_fiduciarios || '').replace(/monitoramento via escrituras\s*\/\s*n\/a/gi, '').replace(/n\/a\s*\([^)]*\)/gi, '');
  const secClean = String(d.securitizadoras || '').replace(/sem securitizadora reportada[^,]*/gi, '').replace(/n\/a\s*\([^)]*\)/gi, '');
  const blob = [perfilClean, d.credores || '', d.tese || '', d.processo || '', d.tribunal || '', afClean, secClean, ...(d.watchdog_triggers || [])].join(' ');
  const dcmRegex = /\b(deb[eê]ntures?|debenturistas?|cras?|cris?|fidcs?|cvm|agds?|notas?\s+comerciais|v[oó]rtx|pent[aá]gono|oliveira\s+trust|virgo|opea|vert\s+(?:cia\.?\s+|companhia\s+)?securitizadora|reit\s+securitizadora|euro\s+securitizadora|audax|covenants?|waivers?|standstill|fitch|moody|bonds?|bondholders?)\b/i;
  return dcmRegex.test(blob);
}

function hasScheduledAssemblyOrAuction(d) {
  if (d && d.calendar_meta && d.calendar_meta.is_fixed_edital) return true;
  const rawBlob = `${d.tese || ''} ${d.proximas_acoes || ''} ${d.fase || ''}`;
  const blob = rawBlob.toLowerCase();
  if (/\b(agc|agd|assembleia|leil[aã]o|hasta\s+p[uú]blica|media[cç][aã]o)\b/i.test(blob)) return true;

  const todayDt = parseDateBR(getBrazilTodayIso()) || new Date();
  // Require either an explicit 4-digit year (DD/MM/202X) OR a date preposition before DD/MM, excluding legal quorum fractions (1/3, 2/3, 3/4)
  const dateRegex = /(?:(\b\d{1,2})\/(\d{1,2})\/(202\d)\b)|(?:\b(?:dia|em|para|data|realizar-se\s+em|marcada\s+para)\s+(\d{1,2})\/(\d{1,2})(?:\/(202\d))?\b)/gi;
  let m;
  while ((m = dateRegex.exec(rawBlob)) !== null) {
    const day = parseInt(m[1] || m[4], 10);
    const mon = parseInt(m[2] || m[5], 10);
    const yrRaw = m[3] || m[6];
    if (day < 1 || day > 31 || mon < 1 || mon > 12) continue;
    const prefixCtx = rawBlob.slice(Math.max(0, m.index - 24), m.index).toLowerCase();
    if (/(?:qu[oó]rum|mais\s+de|m[ií]nimo\s+de|aprova[cç][aã]o\s+de)\s*$/.test(prefixCtx) && !yrRaw) continue;
    const yr = yrRaw ? parseInt(yrRaw, 10) : todayDt.getFullYear();
    const cand = new Date(yr, mon - 1, day, 12, 0, 0);
    if (cand.getFullYear() !== yr || cand.getMonth() !== mon - 1 || cand.getDate() !== day) continue;
    const diffDays = Math.round((cand.getTime() - todayDt.getTime()) / 86400000);
    if (diffDays >= -7 && diffDays <= 120) return true;
  }
  return false;
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
// 4. Main Section & Sub-Tab Navigation + Tier 0 Deduplication
// ==========================================================================
function switchMainSection(secId) {
  if (secId !== 'mapa' && leafletMapInstance) {
    try { leafletMapInstance.remove(); } catch (e) {}
    leafletMapInstance = null;
  }
  currentMainSection = secId;
  currentPage = 1;
  document.querySelectorAll('.nav-link-btn').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
  });
  const activeNav = document.getElementById(`nav-${secId}`);
  if (activeNav) {
    activeNav.classList.add('active');
    activeNav.setAttribute('aria-selected', 'true');
  }

  const cfg = SECTION_CONFIG[secId] || SECTION_CONFIG.operacao;
  const titleEl = document.getElementById('pageMainTitle');
  const subEl = document.getElementById('pageMainSubtitle');
  const filterEl = document.getElementById('filterConsole');
  if (titleEl) titleEl.textContent = resolveDynamicCaseText(cfg.pageTitle);
  if (subEl) subEl.textContent = resolveDynamicCaseText(cfg.pageSubtitle);
  if (filterEl) filterEl.style.display = cfg.showFilters ? 'flex' : 'none';

  currentSubTab = cfg.subtabs[0].id;
  renderSubTabs();
  renderSectionContent();
  syncUrlHash(true);
}

function selectSubTab(subId) {
  currentSubTab = subId;
  currentPage = 1;
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
  syncUrlHash(true);
}

function getMergedTier0Targets() {
  if (!Array.isArray(LIVE_TIER0_DATA) || LIVE_TIER0_DATA.length === 0) return [];
  const existingCnpjs = new Set();
  const existingBaseNames = new Set();
  const existingStems = new Set();

  (DEALS_DATA || []).forEach(d => {
    if (!d) return;
    const digits = String(d.cnpj || '').replace(/\D/g, '');
    if (digits.length >= 11) existingCnpjs.add(digits);
    const baseName = normalizeTextNoAccents(String(d.empresa || '').split('(')[0].trim());
    if (baseName.length >= 3) existingBaseNames.add(baseName);
    const stem = normalizeCompanyStem(d.empresa);
    if (stem.length >= 3) existingStems.add(stem);
  });

  const uniqueTargets = [];
  LIVE_TIER0_DATA.forEach((t0, origIdx) => {
    if (!t0 || !t0.empresa || isBlockedEntityToken(t0.empresa)) return;
    const digits = String(t0.cnpj || '').replace(/\D/g, '');
    const baseName = normalizeTextNoAccents(String(t0.empresa || '').split('(')[0].trim());
    const stem = normalizeCompanyStem(t0.empresa);
    if (digits.length >= 11 && existingCnpjs.has(digits)) return;
    if (baseName.length >= 3 && existingBaseNames.has(baseName)) return;
    if (stem.length >= 3 && existingStems.has(stem)) return;

    if (digits.length >= 11) existingCnpjs.add(digits);
    if (baseName.length >= 3) existingBaseNames.add(baseName);
    if (stem.length >= 3) existingStems.add(stem);
    uniqueTargets.push({ ...t0, _origIdx: origIdx });
  });
  return uniqueTargets;
}

function getFilteredTier0Targets() {
  if (activeEntityFilter && activeEntityFilter.dealIds) return [];
  const merged = getMergedTier0Targets();
  if (merged.length === 0) return [];
  return merged.filter(t0 => {
    if (!matchesPassivoCutoff(t0)) return false;
    if (currentSetor !== '') {
      const sMatch = t0.setor_macro === currentSetor
        || (currentSetor === 'Imobiliário & Construção' && String(t0.setor_macro || '').includes('Construção'));
      if (!sMatch) return false;
    }
    if (currentUf !== '') {
      const regUpper = String(t0.regiao || '').toUpperCase();
      if (!new RegExp(`\\b${currentUf}\\b`).test(regUpper)) return false;
    }
    if (currentPorte !== '') {
      const p = Number(t0.passivo_mm || 0);
      if (currentPorte === 'small' && p >= 30) return false;
      if (currentPorte === 'mid' && (p < 30 || p >= 100)) return false;
      if (currentPorte === 'upper' && (p < 100 || p >= 500)) return false;
      if (currentPorte === 'large' && (p < 500 || p >= 1000)) return false;
      if (currentPorte === 'mega' && p < 1000) return false;
    }
    if (searchTerm !== '') {
      const blob = [t0.empresa, t0.cnpj, t0.setor_macro, t0.regiao, t0.vetores, t0.tese, t0.fontes].join(' ').toLowerCase();
      if (!blob.includes(searchTerm)) return false;
    }
    return true;
  });
}

function renderSubTabs() {
  const cfg = SECTION_CONFIG[currentMainSection] || SECTION_CONFIG.operacao;
  const bar = document.getElementById('subtabPillsBar');
  if (!bar) return;
  const baseDeals = DEALS_DATA.filter(d => {
    if (activeEntityFilter && activeEntityFilter.dealIds && !activeEntityFilter.dealIds.has(String(d.id))) return false;
    return matchesPassivoCutoff(d);
  });

  let html = '';
  cfg.subtabs.forEach(st => {
    const isActive = st.id === currentSubTab;
    let countBadge = '';
    if (currentMainSection === 'operacao') {
      let cnt = baseDeals.filter(d => {
        if (st.id === 'all') return true;
        if (st.id === 'debentures') return isDebenturesEligible(d);
        return d.strategy_id === st.id;
      }).length;
      if (st.id === 'precursor' && !activeEntityFilter) {
        cnt += getMergedTier0Targets().filter(matchesPassivoCutoff).length;
      }
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
      countBadge = `<span class="pill-count" id="subtab-count-${st.id}">${cnt}</span>`;
    } else if (currentMainSection === 'energia' && st.id === 'pipeline_energia') {
      const engCnt = DEALS_DATA.filter(d => d.setor_macro === 'Energia & Infraestrutura').length;
      countBadge = `<span class="pill-count">${engCnt}</span>`;
    }

    html += `
      <button class="subtab-pill ${isActive ? 'active' : ''}" role="tab" aria-selected="${isActive ? 'true' : 'false'}" id="subtab-pill-${st.id}" onclick="selectSubTab('${st.id}')">
        <span>${escapeHtml(resolveDynamicCaseText(st.label))}</span>
        ${countBadge}
      </button>
    `;

    if (isActive) {
      const titleEl = document.getElementById('subSectionTitle');
      const descEl = document.getElementById('subSectionDesc');
      if (titleEl) titleEl.textContent = resolveDynamicCaseText(st.title);
      if (descEl) descEl.textContent = resolveDynamicCaseText(st.desc);
    }
  });

  bar.innerHTML = html;
  if (typeof syncNewsCounters === 'function') {
    syncNewsCounters();
  }
}

// ==========================================================================
// 5. Filtering, Sorting & KPI Recalculation Engine
// ==========================================================================
function matchesEnergySubmarketFilter(item) {
  if (!selectedSinSubmarket || selectedSinSubmarket === 'SIN') return true;
  const subMeta = String(item.energy_meta?.submercado || '').toLowerCase();
  const reg = String(item.regiao_macro || '').toLowerCase();
  const uf = String(item.uf || '').toUpperCase();
  if (selectedSinSubmarket === 'SE') {
    return subMeta.includes('sudeste') || subMeta.includes('se/co') || reg === 'sudeste' || reg === 'centro-oeste' || ['SP', 'RJ', 'MG', 'ES', 'GO', 'MT', 'MS', 'DF'].includes(uf);
  }
  if (selectedSinSubmarket === 'S') {
    return subMeta.includes('sul') || reg === 'sul' || ['PR', 'SC', 'RS'].includes(uf);
  }
  if (selectedSinSubmarket === 'NE') {
    return subMeta.includes('nordeste') || reg === 'nordeste' || ['BA', 'CE', 'PE', 'RN', 'PB', 'AL', 'SE', 'PI'].includes(uf);
  }
  if (selectedSinSubmarket === 'N') {
    return subMeta.includes('norte') || reg === 'norte' || ['PA', 'AM', 'TO', 'MA', 'RO', 'AP', 'RR', 'AC'].includes(uf);
  }
  return true;
}

function getFilteredDeals() {
  const base = DEALS_DATA.filter(item => {
    if (activeEntityFilter && activeEntityFilter.dealIds) {
      if (!activeEntityFilter.dealIds.has(String(item.id))) return false;
    }

    if (currentMainSection === 'energia') {
      if (item.setor_macro !== 'Energia & Infraestrutura') return false;
      if (!matchesEnergySubmarketFilter(item)) return false;
      return true;
    }

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
      if (currentSetor !== '' && item.setor_macro !== currentSetor) return false;
      if (currentPorte !== '') {
        const p = item.passivo_mm || 0;
        if (currentPorte === 'small' && p >= 30) return false;
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
          item.agentes_fiduciarios, item.securitizadoras, item.ticker,
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
    const aEvt = normalizeIsoDateStr(a.data_evento, '2026-01-01');
    const bEvt = normalizeIsoDateStr(b.data_evento, '2026-01-01');
    const aAdd = normalizeIsoDateStr(a.data_adicao, aEvt);
    const bAdd = normalizeIsoDateStr(b.data_adicao, bEvt);
    if (currentSort === 'inclusao_desc') {
      const cmp = bAdd.localeCompare(aAdd);
      return cmp !== 0 ? cmp : bEvt.localeCompare(aEvt);
    }
    if (currentSort === 'inclusao_asc') {
      const cmp = aAdd.localeCompare(bAdd);
      return cmp !== 0 ? cmp : aEvt.localeCompare(bEvt);
    }
    if (currentSort === 'movimento_asc') {
      return aEvt.localeCompare(bEvt);
    }
    return bEvt.localeCompare(aEvt);
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
  currentPage = 1;
  const sel = document.getElementById('selectSort');
  if (sel && [...sel.options].some(o => o.value === currentSort)) {
    sel.value = currentSort;
  }
  renderSectionContent();
  syncUrlHash(false);
}

function updateExecutiveKPIs(deals) {
  const tier0Extra = (currentMainSection === 'operacao' && currentSubTab === 'precursor') ? getFilteredTier0Targets() : [];
  const combinedForKpi = tier0Extra.length > 0 ? [...deals, ...tier0Extra] : deals;
  const totalVol = combinedForKpi.reduce((s, d) => s + (d.passivo_mm || 0), 0);
  const avgVol = combinedForKpi.length > 0 ? totalVol / combinedForKpi.length : 0;
  let maxDeal = { empresa: 'N/A', passivo_mm: 0 };
  combinedForKpi.forEach(d => {
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

  const kpiVolEl = document.getElementById('kpiTotalVolume');
  if (kpiVolEl) kpiVolEl.textContent = `R$ ${formatKpiScale(totalVol)}`;
  const kpiSubEl = document.getElementById('kpiVolumeSub');
  if (kpiSubEl) kpiSubEl.textContent = cutoffDesc;
  const kpiDealsEl = document.getElementById('kpiActiveDeals');
  if (kpiDealsEl) kpiDealsEl.textContent = combinedForKpi.length;
  const kpiAvgEl = document.getElementById('kpiAvgTicket');
  if (kpiAvgEl) kpiAvgEl.textContent = `R$ ${formatKpiScale(avgVol)}`;
  const kpiMaxEl = document.getElementById('kpiMaxPassivo');
  if (kpiMaxEl) kpiMaxEl.textContent = `R$ ${formatKpiScale(maxDeal.passivo_mm)}`;
  const kpiMaxCompEl = document.getElementById('kpiMaxCompany');
  if (kpiMaxCompEl) kpiMaxCompEl.textContent = maxDeal.empresa;
  const kpiJurEl = document.getElementById('kpiJurisdictions');
  if (kpiJurEl) kpiJurEl.textContent = `${ufs.size} UFs`;
  const kpiUpiEl = document.getElementById('kpiUpiCountSub');
  if (kpiUpiEl) kpiUpiEl.textContent = `${upiCount} casos com UPIs mapeadas`;

  const baseWithoutPhase = DEALS_DATA.filter(d => {
    if (activeEntityFilter && activeEntityFilter.dealIds && !activeEntityFilter.dealIds.has(String(d.id))) return false;
    return matchesPassivoCutoff(d);
  });
  const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setTxt('proc-count-all', baseWithoutPhase.length);
  setTxt('proc-count-prj', baseWithoutPhase.filter(d => d.tipo_processo === 'PRJ' && d.subtipo_processo !== 'Falência / Liquidação').length);
  setTxt('proc-count-cautelar', baseWithoutPhase.filter(d => d.tipo_processo === 'Cautelar / Pré-RJ').length);
  setTxt('proc-count-pre', baseWithoutPhase.filter(d => d.tipo_processo === 'PRE').length);
  setTxt('proc-count-falencia', baseWithoutPhase.filter(d => d.subtipo_processo === 'Falência / Liquidação').length);
  setTxt('proc-count-tier0', baseWithoutPhase.filter(d => d.tipo_processo === 'Tier 0').length);
}

// ==========================================================================
// 6. Section Dispatcher & Chart Lifecycle Guard
// ==========================================================================
function scheduleChartInit(fn, delayMs = 40) {
  const timerId = setTimeout(() => {
    pendingChartTimers = pendingChartTimers.filter(t => t !== timerId);
    try { fn(); } catch (e) {}
  }, delayMs);
  pendingChartTimers.push(timerId);
  return timerId;
}

function createManagedChart(canvasOrId, config) {
  if (typeof Chart === 'undefined') return null;
  const canvas = typeof canvasOrId === 'string' ? document.getElementById(canvasOrId) : canvasOrId;
  if (!canvas) return null;
  try {
    if (typeof Chart.getChart === 'function') {
      const existing = Chart.getChart(canvas);
      if (existing) existing.destroy();
    }
  } catch (e) {}
  const chart = new Chart(canvas, config);
  activeCharts.push(chart);
  return chart;
}

function renderSectionContent() {
  pendingChartTimers.forEach(t => clearTimeout(t));
  pendingChartTimers = [];
  activeCharts.forEach(c => { try { c.destroy(); } catch (e) {} });
  activeCharts = [];

  renderActiveEntityFilterBar();
  const deals = getFilteredDeals();
  updateExecutiveKPIs(deals);
  const container = document.getElementById('sectionContentArea');
  if (!container) return;

  if (DEALS_DATA.length === 0 && initialLoadFailed && currentMainSection !== 'noticias') {
    container.innerHTML = `
      <div style="max-width:560px; margin:36px auto; background:#FFFFFF; border:1px solid #FCA5A5; border-radius:12px; padding:28px 24px; text-align:center; box-shadow:0 4px 16px rgba(153,27,27,0.06);">
        <div style="font-size:12px; font-weight:800; color:#991B1B; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:8px;">Offline &bull; Falha ao Carregar Base</div>
        <h3 style="font-size:16px; color:var(--vk-header-start); margin:0 0 8px;">Não foi possível carregar os dossiês concursais</h3>
        <p style="font-size:12.5px; color:var(--text-secondary); line-height:1.5; margin:0 0 18px;">Verifique sua conexão de rede ou tente sincronizar novamente com o repositório estático e a planilha mestre.</p>
        <button type="button" class="btn-action" style="padding:8px 18px; font-size:12.5px;" onclick="retryInitialDataLoad()">&#8635; Tentar Novamente</button>
      </div>
    `;
    return;
  }

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

function buildNewerDealNewsAlertMap() {
  const alertMap = new Map();
  if (typeof getAllCombinedNews !== 'function') return alertMap;
  const allNews = getAllCombinedNews();
  const latestByDeal = new Map();
  for (let i = 0; i < allNews.length; i++) {
    const n = allNews[i];
    const dId = Number(n && n.deal_id);
    if (!dId || latestByDeal.has(dId)) continue;
    latestByDeal.set(dId, n);
  }
  DEALS_DATA.forEach(d => {
    const latestNews = latestByDeal.get(Number(d.id));
    if (!latestNews) return;
    const newsTs = parseNewsTimestamp(latestNews.data_hora);
    const dealEvtIso = normalizeIsoDateStr(d.data_evento, '2026-01-01');
    const dealEvtTs = parseDateBR(dealEvtIso)?.getTime() || 0;
    if (newsTs > dealEvtTs + 12 * 3600 * 1000) {
      alertMap.set(Number(d.id), latestNews);
    }
  });
  return alertMap;
}

function getNewerDealNewsAlert(item) {
  if (!item || !item.id || typeof getAllCombinedNews !== 'function') return null;
  const allNews = getAllCombinedNews();
  const dealNews = allNews.filter(n => Number(n.deal_id) === Number(item.id));
  if (dealNews.length === 0) return null;
  const latestNews = dealNews[0];
  const newsTs = parseNewsTimestamp(latestNews.data_hora);
  const dealEvtIso = normalizeIsoDateStr(item.data_evento, '2026-01-01');
  const dealEvtTs = parseDateBR(dealEvtIso)?.getTime() || 0;
  if (newsTs > dealEvtTs + 12 * 3600 * 1000) {
    return latestNews;
  }
  return null;
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
// 7. Section: Operação & Originação (Table, Cards, Tier 0 Forensic Panel & Pagination)
// ==========================================================================
function paginateDeals(deals) {
  if (!pageSize || pageSize <= 0 || deals.length <= pageSize) {
    currentPage = 1;
    return deals;
  }
  const totalPages = Math.max(1, Math.ceil(deals.length / pageSize));
  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;
  const start = (currentPage - 1) * pageSize;
  return deals.slice(start, start + pageSize);
}

function goToPage(p) {
  currentPage = Math.max(1, Number(p || 1));
  renderSectionContent();
  try {
    document.getElementById('sectionContentArea')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } catch (e) {}
}

function setPageSize(sz) {
  pageSize = Number(sz);
  currentPage = 1;
  renderSectionContent();
}

function renderPaginationBarHtml(totalItems) {
  if (totalItems <= 0) return '';
  const effectiveSize = pageSize > 0 ? pageSize : totalItems;
  const totalPages = pageSize > 0 ? Math.max(1, Math.ceil(totalItems / pageSize)) : 1;
  const startIdx = pageSize > 0 ? (currentPage - 1) * pageSize + 1 : 1;
  const endIdx = pageSize > 0 ? Math.min(totalItems, currentPage * effectiveSize) : totalItems;

  let pageBtnsHtml = '';
  if (totalPages > 1) {
    pageBtnsHtml += `<button type="button" class="page-btn" ${currentPage <= 1 ? 'disabled' : ''} onclick="goToPage(${currentPage - 1})">&lsaquo; Anterior</button>`;
    for (let p = 1; p <= totalPages; p++) {
      if (totalPages <= 7 || p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1) {
        pageBtnsHtml += `<button type="button" class="page-btn ${p === currentPage ? 'active' : ''}" onclick="goToPage(${p})">${p}</button>`;
      } else if (p === currentPage - 2 || p === currentPage + 2) {
        pageBtnsHtml += `<span style="padding:0 4px; color:var(--text-muted); font-size:11px;">&hellip;</span>`;
      }
    }
    pageBtnsHtml += `<button type="button" class="page-btn" ${currentPage >= totalPages ? 'disabled' : ''} onclick="goToPage(${currentPage + 1})">Próxima &rsaquo;</button>`;
  }

  return `
    <div class="pagination-bar">
      <div class="pagination-info">
        Exibindo <strong>${startIdx}&ndash;${endIdx}</strong> de <strong>${totalItems}</strong> casos no recorte
      </div>
      <div class="pagination-controls">
        <span style="font-size:11px; color:var(--text-muted); margin-right:4px;">Por página:</span>
        <button type="button" class="page-btn ${pageSize === 50 ? 'active' : ''}" onclick="setPageSize(50)">50</button>
        <button type="button" class="page-btn ${pageSize === 100 ? 'active' : ''}" onclick="setPageSize(100)">100</button>
        <button type="button" class="page-btn ${pageSize === 0 ? 'active' : ''}" onclick="setPageSize(0)">Todos</button>
        ${pageBtnsHtml ? `<span style="margin:0 6px; color:var(--border-medium);">|</span>${pageBtnsHtml}` : ''}
      </div>
    </div>
  `;
}

function renderTier0ForensicPanelHtml() {
  if (currentSubTab !== 'precursor') return '';
  const targets = getFilteredTier0Targets();
  if (targets.length === 0) return '';

  const totalT0Passivo = targets.reduce((s, t) => s + Number(t.passivo_mm || 0), 0);
  let html = `
    <div class="tier0-section-wrap">
      <div style="background:#FFFBEB; border:1px solid #FCD34D; border-radius:8px; padding:12px 16px; margin-bottom:12px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
        <div>
          <strong style="font-size:13px; color:#92400E;">Radar Preditivo Forense (Tier 0 Antecedente) — ${targets.length} Alvos Extras da Planilha Ao Vivo (R$ ${formatNumberBR(totalT0Passivo)} MM)</strong>
          <div style="font-size:11.5px; color:#78350F; margin-top:2px;">Companhias inéditas sem RJ ajuizada capturadas na aba Tier 0 (protestos CENPROT, PGFN, CVM Fundos.NET, CCEE e agências reguladoras).</div>
        </div>
        <span class="status-badge badge-tier0">JANELA ANTECEDENTE: 30 A 90 DIAS</span>
      </div>
      <div class="tier0-cards-grid">
  `;

  targets.forEach(t0 => {
    const vectors = String(t0.vetores || '').split(/\r?\n/).map(v => v.trim()).filter(Boolean);
    html += `
      <div class="tier0-card">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">
          <div>
            <strong style="font-size:13.5px; color:var(--vk-header-start); display:block;">${escapeHtml(t0.empresa)}</strong>
            <span class="td-company-meta">${escapeHtml(t0.regiao)} &bull; ${escapeHtml(t0.cnpj)}</span>
          </div>
          <span class="status-badge badge-tier0" style="white-space:nowrap;">⏱ ${escapeHtml(t0.janela)}</span>
        </div>
        <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; background:#FFFBEB; border:1px solid #FDE68A; border-radius:6px; padding:6px 10px;">
          <div>
            <span style="font-size:10px; color:#92400E; font-weight:700; text-transform:uppercase; display:block;">Passivo Estimado</span>
            <strong style="font-family:var(--font-mono); font-size:13px; color:#78350F;">R$ ${formatNumberBR(t0.passivo_mm)} MM</strong>
          </div>
          <div style="text-align:right;">
            <span style="font-size:10px; color:#92400E; font-weight:700; text-transform:uppercase; display:block;">Score Forense</span>
            <strong style="font-family:var(--font-mono); font-size:13px; color:#B45309;">${formatScoreBR(t0.score)} / 10</strong>
          </div>
        </div>
        <div>
          <div style="font-size:10px; font-weight:800; color:#92400E; text-transform:uppercase; margin-bottom:4px;">Vetores Forenses Capturados</div>
          <div>
            ${vectors.map(v => `<div class="tier0-vector-pill">${escapeHtml(v)}</div>`).join('')}
          </div>
        </div>
        <div style="font-size:11px; color:var(--text-secondary); line-height:1.4;">
          <strong style="color:var(--vk-header-start);">Credores Expostos:</strong> ${escapeHtml(t0.tese)}<br>
          <strong style="color:var(--vk-header-start);">Natureza da Dívida:</strong> ${escapeHtml(t0.fontes)}
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; border-top:1px solid #FDE68A; padding-top:8px; margin-top:auto;">
          <span class="td-sector-pill">${escapeHtml(t0.setor_macro)}</span>
          <button type="button" class="btn-action" style="padding:4px 10px; font-size:11px;" onclick="openCalculatorForTier0(${t0._origIdx})">⚡ Simular Mandato</button>
        </div>
      </div>
    `;
  });

  html += `</div></div>`;
  return html;
}

function renderTableView(deals, container) {
  const tier0PanelHtml = renderTier0ForensicPanelHtml();
  if (deals.length === 0) {
    if (tier0PanelHtml) {
      container.innerHTML = tier0PanelHtml;
      return;
    }
    container.innerHTML = `<div style="text-align:center; padding: 48px; color: var(--text-muted);">Nenhum caso encontrado para os filtros e limites de passivo selecionados.</div>`;
    return;
  }

  const pagedDeals = paginateDeals(deals);
  const newsAlertMap = buildNewerDealNewsAlertMap();
  const compSet = new Set(selectedCompIds.map(Number));

  const empArrow = currentSort === 'empresa_asc' ? '↑' : (currentSort === 'empresa_desc' ? '↓' : '↕');
  const cnpjArrow = currentSort === 'cnpj_asc' ? '↑' : (currentSort === 'cnpj_desc' ? '↓' : '↕');
  const setArrow = currentSort === 'setor_asc' ? '↑' : (currentSort === 'setor_desc' ? '↓' : '↕');
  const movArrow = currentSort === 'movimento_desc' ? '↓' : (currentSort === 'movimento_asc' ? '↑' : '↕');
  const incArrow = currentSort === 'inclusao_desc' ? '↓' : (currentSort === 'inclusao_asc' ? '↑' : '↕');
  const pasArrow = currentSort === 'passivo_desc' ? '↓' : (currentSort === 'passivo_asc' ? '↑' : '↕');
  const scoArrow = currentSort === 'score_desc' ? '↓' : (currentSort === 'score_asc' ? '↑' : '↕');

  let html = tier0PanelHtml;

  html += `
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
            <th class="sortable-th" style="width: 11%;" onclick="toggleTableColumnSort('setor')" title="Ordenar por Macro-Setor">
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
            <th style="width: 8%;">Principais Credores</th>
            <th class="sortable-th" style="width: 4%; text-align: center;" onclick="toggleTableColumnSort('score')" title="Ordenar por Score Forense">
              Score <span class="sort-indicator">${scoArrow}</span>
            </th>
            <th style="width: 6%; text-align: center;">Ações</th>
          </tr>
        </thead>
        <tbody>
  `;

  pagedDeals.forEach(item => {
    const passivoStr = formatNumberBR(item.passivo_mm);
    const b = getBadgeVisual(item);
    const upiTag = isUpiEligible(item) ? `<span class="status-badge badge-upi" title="Contém ativos/UPIs elegíveis">UPI</span>` : '';
    const tickerBadge = item.ticker ? `<span style="font-family:var(--font-mono); font-size:9.5px; background:#E6E9DC; color:#063630; padding:1px 5px; border-radius:3px; font-weight:800; margin-left:5px;">${escapeHtml(item.ticker)}</span>` : '';
    const newerAlert = newsAlertMap.get(Number(item.id)) || null;
    const alertBadgeHtml = newerAlert
      ? `<div style="margin-top:3px;"><span class="status-badge badge-cautelar" style="margin-left:0; font-size:9px; cursor:pointer;" onclick="event.stopPropagation(); openDossier(${item.id})" title="Fato Relevante Recente (${escapeHtml(newerAlert.data_hora)}): ${escapeHtml(newerAlert.titulo)}">⚡ Fato Relevante (${escapeHtml(newerAlert.data_hora.slice(0, 5))})</span></div>`
      : '';
    const credoresTrunc = (item.credores && item.credores.length > 44) ? `${item.credores.substring(0, 44)}...` : (item.credores || 'Em apuração');
    const isCompSelected = compSet.has(Number(item.id));

    html += `
      <tr>
        <td>
          <span class="td-company-name" onclick="openDossier(${item.id})" title="${escapeHtml(item.descricao_empresa)}">${escapeHtml(item.empresa)}${tickerBadge}</span>
          ${alertBadgeHtml}
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
        <td style="text-align: center; white-space: nowrap;">
          <div style="display:inline-flex; align-items:center; gap:4px;">
            <button type="button" class="btn-comp-toggle ${isCompSelected ? 'active' : ''}" onclick="toggleCompDeal(${item.id}, event)" title="${isCompSelected ? 'Remover do Comparador (Comps)' : 'Adicionar ao Comparador Lado a Lado (até 4 casos)'}" aria-pressed="${isCompSelected ? 'true' : 'false'}">⚖️</button>
            <button type="button" class="btn-action" onclick="openDossier(${item.id})">Ficha</button>
          </div>
        </td>
      </tr>
    `;
  });

  html += `</tbody></table></div>` + renderPaginationBarHtml(deals.length);
  container.innerHTML = html;
}

function renderCardsView(deals, container) {
  const tier0PanelHtml = renderTier0ForensicPanelHtml();
  if (deals.length === 0) {
    if (tier0PanelHtml) {
      container.innerHTML = tier0PanelHtml;
      return;
    }
    container.innerHTML = `<div style="text-align:center; padding: 48px; color: var(--text-muted);">Nenhum caso encontrado para os filtros selecionados.</div>`;
    return;
  }

  const pagedDeals = paginateDeals(deals);
  const compSet = new Set(selectedCompIds.map(Number));
  let html = tier0PanelHtml + `<div class="cards-grid">`;
  pagedDeals.forEach(item => {
    const passivoStr = formatNumberBR(item.passivo_mm);
    const b = getBadgeVisual(item);
    const parsed = parseThesisRegex(item.tese);
    const isCompSelected = compSet.has(Number(item.id));

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
        <div style="display:flex; justify-content:space-between; align-items:center; gap:6px; border-top:1px solid var(--border-light); padding-top:10px;">
          <span class="td-sector-pill">${escapeHtml(item.setor_macro)}</span>
          <div style="display:inline-flex; align-items:center; gap:5px;">
            <button type="button" class="btn-comp-toggle ${isCompSelected ? 'active' : ''}" onclick="toggleCompDeal(${item.id}, event)" title="${isCompSelected ? 'Remover do Comparador' : 'Comparar Lado a Lado'}" aria-pressed="${isCompSelected ? 'true' : 'false'}">⚖️ Comps</button>
            <button type="button" class="btn-action">Abrir Tear Sheet</button>
          </div>
        </div>
      </div>
    `;
  });
  html += `</div>` + renderPaginationBarHtml(deals.length);
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
            <button class="btn-action" data-sector="${escapeHtml(sec.name)}" onclick="drillDownSector(this.getAttribute('data-sector'))">Filtrar Setor</button>
          </td>
        </tr>
      `;
    });
    html += `</tbody></table></div>`;
    container.innerHTML = html;
    return;
  }

  if (currentSubTab === 'tracking_pres') {
    const totalPreVol = TRACKING_PRES_YTD_DATA.reduce((s, x) => s + Number(x.passivo_mm || 0), 0);
    let html = `
      <div class="dashboard-grid" style="margin-bottom:18px;">
        <div class="chart-panel full-span">
          <div class="chart-panel-header">
            <div>
              <h3>Evolução Mensal da Safra de Originação (MoM — Casos &amp; Passivo R$ Bi)</h3>
              <p>Curva histórica de entrada de processos concursais, cautelares Art. 20-B e recuperações extrajudiciais em 2026</p>
            </div>
            <span class="chart-tag">SAFRA MENSAL (MoM)</span>
          </div>
          <div class="chart-canvas-box" style="height:250px;"><canvas id="chartMonthlySafra"></canvas></div>
        </div>
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
        <div>
          <h3 style="font-size:15.5px; font-weight:800; color:var(--vk-header-start);">
            Aba Planilha Mestre: Tracking PREs YTD (2026) — ${TRACKING_PRES_YTD_DATA.length} Casos Monitorados
          </h3>
          <p style="font-size:12px; color:var(--text-secondary);">
            Consolidação das Recuperações Extrajudiciais (Art. 161 a 167 LRF) protocoladas e homologadas em 2026
          </p>
        </div>
        <span class="status-badge badge-pre">VOLUME PREs YTD: R$ ${formatKpiScale(totalPreVol)}</span>
      </div>
      <div class="table-wrap">
        <table class="clean-table">
          <thead>
            <tr>
              <th>Data</th>
              <th>Companhia / Emissor</th>
              <th>CNPJ</th>
              <th>Macro-Setor</th>
              <th style="text-align:right;">Passivo Sujeito (R$ MM)</th>
              <th>Status do Quórum (Art. 163)</th>
              <th>Principais Credores / Debenturistas</th>
              <th>Assessoria</th>
              <th style="text-align:center;">Dossiê</th>
            </tr>
          </thead>
          <tbody>
            ${TRACKING_PRES_YTD_DATA.map(row => `
              <tr>
                <td class="td-date-cell">${formatDateBR(row.data)}</td>
                <td><strong style="color:var(--vk-header-start);">${escapeHtml(row.empresa)}</strong></td>
                <td class="td-cnpj-mono">${escapeHtml(row.cnpj)}</td>
                <td><span class="td-sector-pill">${escapeHtml(row.setor)}</span></td>
                <td class="td-passivo">R$ ${formatNumberBR(row.passivo_mm)}</td>
                <td><span class="status-badge badge-pre" style="margin-left:0;">${escapeHtml(row.quorum_status)}</span></td>
                <td style="font-size:11px; color:var(--text-secondary);">${escapeHtml(row.credores)}</td>
                <td style="font-size:11px; color:var(--text-secondary);">${escapeHtml(row.assessor_legal)}</td>
                <td style="text-align:center;">
                  ${row.deal_id ? `<button class="btn-action" onclick="openDossier(${Number(row.deal_id)})">Tear Sheet</button>` : '-'}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
    container.innerHTML = html;
    scheduleChartInit(() => initMonthlySafraChart(deals), 20);
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
    scheduleChartInit(() => initPorteAndTopCharts(deals), 20);
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

  scheduleChartInit(() => initSectorAndPhaseCharts(deals, sectorsSorted), 20);
}

function initSectorAndPhaseCharts(deals, sectorsSorted) {
  if (typeof Chart === 'undefined') return;
  const labels = sectorsSorted.map(s => s.name);
  const volumes = sectorsSorted.map(s => Math.round(s.volume));
  const counts = sectorsSorted.map(s => s.count);
  const paletteColors = ['#063630', '#08332C', '#235C5B', '#38686A', '#A5AC82', '#C8CEB0', '#64748B'];

  createManagedChart('chartSectorVolume', {
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
  });

  createManagedChart('chartSectorCount', {
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
  });

  const prjCnt = deals.filter(d => d.tipo_processo === 'PRJ' && d.subtipo_processo !== 'Falência / Liquidação').length;
  const cautCnt = deals.filter(d => d.tipo_processo === 'Cautelar / Pré-RJ').length;
  const preCnt = deals.filter(d => d.tipo_processo === 'PRE').length;
  const falCnt = deals.filter(d => d.subtipo_processo === 'Falência / Liquidação').length;
  const t0Cnt = deals.filter(d => d.tipo_processo === 'Tier 0').length;

  createManagedChart('chartPhaseMix', {
    type: 'doughnut',
    data: {
      labels: ['Recuperação Judicial (PRJ)', 'Cautelar Art. 20-B / Pré-RJ', 'Recuperação Extrajudicial (PRE)', 'Sinais Forenses (Tier 0)', 'Falência / Liquidação'],
      datasets: [{ data: [prjCnt, cautCnt, preCnt, t0Cnt, falCnt], backgroundColor: ['#063630', '#38686A', '#A5AC82', '#C8CEB0', '#64748B'], borderWidth: 2, borderColor: '#FFFFFF' }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'right', labels: { font: { family: 'Plus Jakarta Sans', size: 11 }, color: '#1E293B' } } }
    }
  });

  const ufMap = {};
  deals.forEach(d => { if (d.uf) ufMap[d.uf] = (ufMap[d.uf] || 0) + 1; });
  const ufSorted = Object.entries(ufMap).sort((a, b) => b[1] - a[1]).slice(0, 10);
  createManagedChart('chartUfMix', {
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
  });
}

function initPorteAndTopCharts(deals) {
  if (typeof Chart === 'undefined') return;
  const sub30 = deals.filter(d => Number(d.passivo_mm || 0) < 30).length;
  const mid = deals.filter(d => Number(d.passivo_mm || 0) >= 30 && Number(d.passivo_mm || 0) < 100).length;
  const upper = deals.filter(d => Number(d.passivo_mm || 0) >= 100 && Number(d.passivo_mm || 0) < 500).length;
  const large = deals.filter(d => Number(d.passivo_mm || 0) >= 500 && Number(d.passivo_mm || 0) < 1000).length;
  const mega = deals.filter(d => Number(d.passivo_mm || 0) >= 1000).length;

  const labels = sub30 > 0
    ? ['Sub-30M (<30M)', 'Mid-Market (30M-100M)', 'Upper-Mid (100M-500M)', 'Large Cap (500M-1Bi)', 'Mega Cases (> 1Bi)']
    : ['Mid-Market (30M-100M)', 'Upper-Mid (100M-500M)', 'Large Cap (500M-1Bi)', 'Mega Cases (> 1Bi)'];
  const dataArr = sub30 > 0 ? [sub30, mid, upper, large, mega] : [mid, upper, large, mega];
  const bgArr = sub30 > 0 ? ['#E2E8F0', '#C8CEB0', '#A5AC82', '#38686A', '#063630'] : ['#C8CEB0', '#A5AC82', '#38686A', '#063630'];

  createManagedChart('chartPorteCount', {
    type: 'bar',
    data: {
      labels,
      datasets: [{ label: 'Nº de Casos', data: dataArr, backgroundColor: bgArr, borderRadius: 6 }]
    },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
  });

  const top12 = [...deals].sort((a, b) => (b.passivo_mm || 0) - (a.passivo_mm || 0)).slice(0, 12);
  createManagedChart('chartTopDeals', {
    type: 'bar',
    data: {
      labels: top12.map(d => d.empresa.length > 26 ? d.empresa.substring(0, 26) + '...' : d.empresa),
      datasets: [{ label: 'Passivo (R$ MM)', data: top12.map(d => d.passivo_mm), backgroundColor: '#063630', borderRadius: 4 }]
    },
    options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
  });
}

function initMonthlySafraChart(deals) {
  if (typeof Chart === 'undefined') return;
  const monthBuckets = {};
  deals.forEach(d => {
    const ym = normalizeIsoDateStr(d.data_evento, '2026-10-01').slice(0, 7);
    if (!monthBuckets[ym]) monthBuckets[ym] = { count: 0, passivoBi: 0 };
    monthBuckets[ym].count += 1;
    monthBuckets[ym].passivoBi += Number(d.passivo_mm || 0) / 1000.0;
  });
  const sortedMonths = Object.keys(monthBuckets).sort();
  const labels = sortedMonths.map(ym => {
    const [y, m] = ym.split('-');
    return `${m}/${y}`;
  });
  const counts = sortedMonths.map(ym => monthBuckets[ym].count);
  const vols = sortedMonths.map(ym => Number(monthBuckets[ym].passivoBi.toFixed(2)));
  createManagedChart('chartMonthlySafra', {
    type: 'bar',
    data: {
      labels,
      datasets: [
        { label: 'Nº de Casos na Safra', data: counts, backgroundColor: '#063630', borderRadius: 5, yAxisID: 'y' },
        { label: 'Passivo Acumulado (R$ Bi)', data: vols, type: 'line', borderColor: '#D97706', backgroundColor: 'rgba(217,119,6,0.15)', borderWidth: 2.5, tension: 0.3, yAxisID: 'y1' }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { type: 'linear', position: 'left', title: { display: true, text: 'Nº de Casos' } },
        y1: { type: 'linear', position: 'right', grid: { drawOnChartArea: false }, title: { display: true, text: 'Passivo (R$ Bi)' } }
      }
    }
  });
}

function drillDownSector(sectorName) {
  activeEntityFilter = null;
  currentUf = '';
  currentPorte = '';
  currentProcessType = '';
  searchTerm = '';
  currentSetor = sectorName;
  syncFilterDomControlsFromState();
  renderActiveEntityFilterBar();
  switchMainSection('operacao');
  showToast(`Filtrando casos do setor: ${sectorName}`);
}

// ==========================================================================
// 9. Sections: UPIs, Bancômetro & Prazos
// ==========================================================================
function setUpiSortMode(mode) {
  upiSortMode = mode;
  renderSectionContent();
}

function renderUpisSection(deals, container) {
  if (deals.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding: 48px; color: var(--text-muted);">Nenhum ativo/UPI encontrado para os filtros selecionados.</div>`;
    return;
  }

  const sortedUpis = [...deals].sort((a, b) => {
    const valA = a.model_params?.upi_valuation_estimado_mm || Math.round(Number(a.passivo_mm || 100) * 0.35);
    const valB = b.model_params?.upi_valuation_estimado_mm || Math.round(Number(b.passivo_mm || 100) * 0.35);
    if (upiSortMode === 'passivo_desc') return (b.passivo_mm || 0) - (a.passivo_mm || 0);
    if (upiSortMode === 'score_desc') return (b.score || 0) - (a.score || 0);
    return valB - valA;
  });

  const totalUpiValuation = sortedUpis.reduce((s, d) => s + (d.model_params?.upi_valuation_estimado_mm || Math.round(Number(d.passivo_mm || 100) * 0.35)), 0);

  let html = `
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; background:var(--bg-subtle); border:1px solid var(--border-light); border-radius:8px; padding:10px 14px; margin-bottom:14px;">
      <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
        <span style="font-family:var(--font-mono); font-size:10px; font-weight:800; color:var(--text-muted); text-transform:uppercase;">Ordenar Catálogo UPI:</span>
        <button class="phase-chip ${upiSortMode === 'valuation_desc' ? 'active' : ''}" onclick="setUpiSortMode('valuation_desc')">Maior Valuation UPI</button>
        <button class="phase-chip ${upiSortMode === 'passivo_desc' ? 'active' : ''}" onclick="setUpiSortMode('passivo_desc')">Maior Passivo do Grupo</button>
        <button class="phase-chip ${upiSortMode === 'score_desc' ? 'active' : ''}" onclick="setUpiSortMode('score_desc')">Maior Score Forense</button>
      </div>
      <span class="status-badge badge-upi">VALUATION AGREGADO DE UPIs: R$ ${formatKpiScale(totalUpiValuation)}</span>
    </div>
    <div class="cards-grid">
  `;
  sortedUpis.forEach(item => {
    const passivoStr = formatNumberBR(item.passivo_mm);
    const upiValNum = item.model_params?.upi_valuation_estimado_mm || Math.round(Number(item.passivo_mm || 100) * 0.35);
    const upiValStr = formatNumberBR(upiValNum);
    const b = getBadgeVisual(item);
    const parsed = parseThesisRegex(item.tese);
    const cm = computeDynamicCalendarMeta(item);
    const artLei = item.subtipo_processo === 'Falência / Liquidação' ? 'Art. 140 & 141, II LRF (Arrecadação / Leilão Livre de Sucessão)' : 'Art. 60 & 141, II LRF (UPI Livre de Sucessão Tributária/Trabalhista)';

    html += `
      <div class="clean-deal-card" tabindex="0" style="border-top-color: #065F46;" onclick="openDossier(${item.id})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openDossier(${item.id});}">
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
            <div style="font-family:var(--font-mono); font-size:10px; color:#047857; margin-top:6px; padding-top:5px; border-top:1px dashed #A7F3D0;">
              ⚖️ ${escapeHtml(artLei)} &bull; Prazo/Edital: ${escapeHtml(cm.data_marco_br)}
            </div>
          </div>

          <p style="font-size:12px; color:var(--text-secondary); line-height:1.45; margin-bottom:10px;">
            <strong style="color:#065F46;">Tese de Mandato:</strong> ${escapeHtml(parsed.mandato)}
          </p>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; border-top:1px solid var(--border-light); padding-top:10px;">
          <div>
            <span style="font-family:var(--font-mono); font-size:12px; font-weight:800; color:var(--vk-header-start); display:block;">Passivo: R$ ${passivoStr} MM</span>
            <span style="font-family:var(--font-mono); font-size:11px; font-weight:700; color:#065F46; display:block;">Valuation UPI Est.: R$ ${upiValStr} MM</span>
          </div>
          <button class="btn-action">Abrir Tear Sheet</button>
        </div>
      </div>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

function matchesCreditorKeyword(text, kw) {
  const cleanKw = String(kw || '').trim().toLowerCase();
  if (!cleanKw) return false;
  if (cleanKw === 'reit') return RX_REIT_SEC.test(text);
  if (cleanKw === 'vert') return RX_VERT_SEC.test(text);
  if (cleanKw === 'euro') return RX_EURO_SEC.test(text);
  const escaped = cleanKw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const rx = new RegExp(`(?:^|[^a-zA-Z0-9À-ÿ])${escaped}(?:$|[^a-zA-Z0-9À-ÿ])`, 'i');
  return rx.test(text);
}

function renderBancometroSection(deals, container) {
  entityFilterRegistry.clear();
  const catalog = [
    { name: 'Banco do Brasil', group: 'cred_publicos', kw: ['banco do brasil', 'bb'] },
    { name: 'Itaú Unibanco / BBA', group: 'cred_privados', kw: ['itaú', 'itau'] },
    { name: 'Banco Bradesco', group: 'cred_privados', kw: ['bradesco'] },
    { name: 'Banco Santander', group: 'cred_privados', kw: ['santander'] },
    { name: 'Caixa Econômica Federal', group: 'cred_publicos', kw: ['caixa econômica', 'caixa economica', 'caixa', 'cef'] },
    { name: 'Sicredi / Cooperativas', group: 'cred_publicos', kw: ['sicredi', 'sicoob', 'unicred', 'cresol'] },
    { name: 'Banco Daycoval', group: 'cred_privados', kw: ['daycoval'] },
    { name: 'Banco Safra', group: 'cred_privados', kw: ['safra'] },
    { name: 'BTG Pactual', group: 'cred_privados', kw: ['btg'] },
    { name: 'Banco ABC Brasil & Votorantim (BV)', group: 'cred_privados', kw: ['abc brasil', 'banco abc', 'votorantim', 'banco bv'] },
    { name: 'Rabobank & Bancos Internacionais', group: 'cred_privados', kw: ['rabobank', 'citibank', 'citi', 'jpmorgan', 'dll'] },
    { name: 'BNDES / BRDE / BASA / BNB', group: 'cred_publicos', kw: ['bndes', 'brde', 'basa', 'banco da amazônia', 'bnb', 'banco do nordeste'] },
    { name: 'Banrisul', group: 'cred_publicos', kw: ['banrisul'] },
    { name: 'Bancos de Montadoras (John Deere / Scania / Volvo / Cat)', group: 'cred_privados', kw: ['john deere', 'scania', 'volvo', 'caterpillar', 'mercedes', 'cnh'] },
    { name: 'Agentes Fiduciários (Vórtx / Pentágono / Oliveira Trust)', group: 'cred_dcm', kw: ['vórtx', 'vortx', 'pentágono', 'pentagono', 'oliveira trust', 'simplific pavarini', 'planner trustee', 'debenturistas', 'debêntures', 'debentures'] },
    { name: 'Securitizadoras (Opea / Vert / Virgo / Euro / Ignis / CRAs / CRIs)', group: 'cred_dcm', kw: ['opea', 'vert securitizadora', 'virgo', 'reit securitizadora', 'euro securitizadora', 'ignis', 'audax securitizadora', 'true securitizadora', 'bari securitizadora', 'isec', 'securitizadora', 'cra', 'cras', 'cri', 'cris'] },
    { name: 'FIDCs & Fundos Estruturados', group: 'cred_dcm', kw: ['fidc', 'fidcs', 'farallon', 'banco master', 'genial', 'blackpartners'] },
    { name: 'Tradings & Multinacionais do Agro (Cargill / Bunge / COFCO / Syngenta)', group: 'cred_dcm', kw: ['cargill', 'bunge', 'cofco', 'nidera', 'corteva', 'mosaic', 'syngenta', 'adm', 'fiagril', 'input', 'iharga'] }
  ];

  const baseDeals = DEALS_DATA.filter(matchesPassivoCutoff);

  const results = catalog
    .filter(c => currentSubTab === 'cred_all' || c.group === currentSubTab)
    .map((c, catIdx) => {
      let casesCount = 0;
      let participatingPassivo = 0;
      let directMappedCredit = 0;
      const dealIds = new Set();

      baseDeals.forEach(d => {
        const afClean = String(d.agentes_fiduciarios || '').replace(/n\/a\s*\([^)]*\)/gi, '');
        const secClean = String(d.securitizadoras || '').replace(/n\/a\s*\([^)]*\)/gi, '');
        const text = `${d.credores || ''} ${d.perfil_passivo || ''} ${afClean} ${secClean}`.toLowerCase();
        if (c.kw.some(k => matchesCreditorKeyword(text, k))) {
          casesCount += 1;
          participatingPassivo += (d.passivo_mm || 0);
          dealIds.add(String(d.id));
          const credRaw = `${d.credores || ''} ; ${d.tese || ''}`;
          for (const k of c.kw) {
            const cleanK = k.trim();
            const rx = new RegExp(`(?:^|[^a-zA-Z0-9À-ÿ])(${cleanK.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})(?:$|[^a-zA-Z0-9À-ÿ])`, 'i');
            const mIdx = rx.exec(credRaw);
            if (mIdx) {
              const clause = credRaw.substring(mIdx.index, mIdx.index + 75).split(/[;/)]/)[0];
              const m = clause.match(/R\$\s*([\d.,]+)\s*(Bi|Bilh[oõ]es|B|MM|Milh[oõ]es|M)\b/i);
              if (m) {
                const rawNumStr = m[1].includes(',')
                  ? m[1].replace(/\./g, '').replace(',', '.')
                  : m[1];
                const val = parseFloat(rawNumStr);
                const unit = String(m[2] || 'M').toLowerCase();
                if (!isNaN(val) && val > 0) {
                  const mult = unit.startsWith('b') ? 1000 : 1;
                  directMappedCredit += val * mult;
                  break;
                }
              }
            }
          }
        }
      });

      const regKey = `banco_${catIdx}`;
      entityFilterRegistry.set(regKey, {
        category: 'Bancômetro',
        label: c.name,
        dealIds
      });

      return { ...c, regKey, dealIds, casesCount, participatingPassivo, directMappedCredit: Math.round(directMappedCredit) };
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
      <div class="creditor-card" tabindex="0" onclick="activateEntityFilterFromCard('${r.regKey}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();activateEntityFilterFromCard('${r.regKey}');}" title="Clique para listar todos os ${r.casesCount} processos de ${escapeHtml(r.name)}">
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
  const kwClean = String(keyword || '').trim();
  const matchedIds = new Set();
  DEALS_DATA.forEach(d => {
    const afClean = String(d.agentes_fiduciarios || '').replace(/n\/a\s*\([^)]*\)/gi, '');
    const secClean = String(d.securitizadoras || '').replace(/n\/a\s*\([^)]*\)/gi, '');
    const text = `${d.credores || ''} ${d.perfil_passivo || ''} ${afClean} ${secClean} ${d.tese || ''}`.toLowerCase();
    if (matchesCreditorKeyword(text, kwClean)) {
      matchedIds.add(String(d.id));
    }
  });
  if (matchedIds.size > 0) {
    activateEntityFilter('Credor', kwClean, matchedIds);
    return;
  }
  activeEntityFilter = null;
  currentSetor = '';
  currentUf = '';
  currentPorte = '';
  currentProcessType = '';
  searchTerm = kwClean.toLowerCase();
  syncFilterDomControlsFromState();
  renderActiveEntityFilterBar();
  switchMainSection('operacao');
  showToast(`Exibindo carteira de processos com exposição a: "${kwClean.toUpperCase()}"`);
}

// ==========================================================================
// 10. Section: Redesign do Mapa Geográfico (Oceano Azul #090d16 + GeoJSON Brasil)
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

  scheduleChartInit(() => initGeoJsonBrazilMap(deals), 50);
}

function filterMapByUf(uf) {
  currentUf = uf;
  const sel = document.getElementById('selectUf');
  if (sel) sel.value = uf;
  renderSectionContent();
  syncUrlHash(true);
}

function initGeoJsonBrazilMap(deals) {
  if (typeof L === 'undefined') return;
  const mapEl = document.getElementById('map');
  if (!mapEl) return;

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

  const GOLDEN_ANGLE = 2.399963229728653;

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

  Object.keys(coordGroups).forEach(k => {
    const group = coordGroups[k];
    if (group.length >= 3) {
      const baseLat = group[0].coordenadas[0];
      const baseLng = group[0].coordenadas[1];
      const hubIcon = L.divIcon({
        className: 'uf-capital-label',
        html: `<div style="background:#063630; color:#E6E9DC; border:1px solid #A5AC82; border-radius:999px; padding:1px 6px; font-family:var(--font-mono); font-size:9.5px; font-weight:800; box-shadow:0 2px 6px rgba(0,0,0,0.45);">${group.length}</div>`,
        iconSize: [24, 16],
        iconAnchor: [12, 8]
      });
      L.marker([baseLat, baseLng], { icon: hubIcon, interactive: false }).addTo(leafletMarkersLayer);
    }
  });

  if (currentUf !== '' && bounds.length > 0) {
    leafletMapInstance.fitBounds(bounds, { padding: [45, 45], maxZoom: 6.5 });
  }

  if (typeof window !== 'undefined' && !window._vkMapResizeBound) {
    window._vkMapResizeBound = true;
    window.addEventListener('resize', () => {
      if (leafletMapInstance && currentMainSection === 'mapa') {
        try { leafletMapInstance.invalidateSize(); } catch (e) {}
      }
    });
  }
}

// ==========================================================================
// 11. Nova Aba: Notícias & Fatos Relevantes (Feed Híbrido Mercado + Pipeline + Multi-Stream RSS de Waivers/AGDs)
// ==========================================================================
const MIN_NEWS_RECENCY_TIMESTAMP = new Date(2026, 0, 1, 0, 0, 0).getTime(); // Bloqueia matérias antigas (< 2026, ex: 2024/2025)

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
  let rawStr = pubDateRaw ? String(pubDateRaw).trim() : '';
  // rss2json returns UTC timestamps as "YYYY-MM-DD HH:MM:SS" without "Z", which JS would otherwise parse as local time
  if (/^\d{4}-\d{2}-\d{2}[ T]\d{2}:\d{2}(:\d{2})?$/.test(rawStr)) {
    rawStr = rawStr.replace(' ', 'T') + 'Z';
  }
  const dt = rawStr ? new Date(rawStr) : new Date();
  if (!isNaN(dt.getTime())) {
    try {
      const parts = new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).formatToParts(dt);
      const map = {};
      parts.forEach(p => { map[p.type] = p.value; });
      if (map.day && map.month && map.year) {
        const hh = map.hour === '24' ? '00' : (map.hour || '10');
        return `${map.day}/${map.month}/${map.year} ${hh}:${map.minute || '00'}`;
      }
    } catch (e) {}
    // Fallback determinístico em UTC-3 (America/Sao_Paulo)
    const brt = new Date(dt.getTime() - 3 * 3600 * 1000);
    const d = String(brt.getUTCDate()).padStart(2, '0');
    const m = String(brt.getUTCMonth() + 1).padStart(2, '0');
    const y = brt.getUTCFullYear();
    const hh = String(brt.getUTCHours()).padStart(2, '0');
    const mm = String(brt.getUTCMinutes()).padStart(2, '0');
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
  if (s.includes('vortx') || s.includes('pentagono') || s.includes('oliveira trust') || s.includes('opea') || s.includes('virgo') || s.includes('fiduciario') || RX_VERT_SEC.test(rawSource) || RX_REIT_SEC.test(rawSource) || RX_EURO_SEC.test(rawSource)) return 'Agentes Fiduciários';
  if (s.includes('jota') || s.includes('conjur') || s.includes('migalhas') || s.includes('folha') || s.includes('uol') || s.includes('tribunal') || s.includes('tj')) return 'Jota / Tribunais';
  if (blobNorm.includes('fitch') || blobNorm.includes('cvm') || blobNorm.includes('fato relevante')) return 'CVM / Fatos Relevantes';
  if (blobNorm.includes('vortx') || blobNorm.includes('pentagono') || blobNorm.includes('oliveira trust') || blobNorm.includes('agd') || blobNorm.includes('waiver') || RX_VERT_SEC.test(blobNorm) || RX_REIT_SEC.test(blobNorm) || RX_EURO_SEC.test(blobNorm)) return 'Agentes Fiduciários';
  return rawSource || 'Valor Econômico';
}

function classifyRssNewsItem(rawItem, defaultCategory = 'Pedido de RJ') {
  const rawTitle = String(rawItem.title || '').replace(/\s+-\s+[^-]+$/, '').trim();
  if (isBlockedEntityToken(rawTitle)) return null;
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
  if (isBlockedEntityToken(cleanDesc)) return null;

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
    RX_VERT_SEC.test(blobNorm) ||
    RX_REIT_SEC.test(blobNorm) ||
    RX_EURO_SEC.test(blobNorm) ||
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

  let matchedDeal = null;
  for (const d of DEALS_DATA) {
    const baseName = normalizeCompanyStem(d.empresa);
    const tickerNorm = normalizeTextNoAccents(d.ticker || '');
    if ((baseName.length >= 5 && blobNorm.includes(baseName)) || (tickerNorm.length >= 4 && new RegExp(`\\b${tickerNorm}\\b`).test(blobNorm))) {
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
    return items.slice(0, 14).map(node => ({
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

function filterValidRecentRssItems(rawList, defaultCategory) {
  return (rawList || [])
    .map(it => classifyRssNewsItem(it, defaultCategory))
    .filter(item => item && item.titulo && isRecentNewsDate(item.data_hora, 75));
}

async function fetchLiveNewsJsonMerged() {
  const localTask = fetchWithTimeout(`./live-news.json?_cb=${Date.now()}`, { cache: 'no-store' }, 4500)
    .then(r => (r && r.ok ? r.json() : []))
    .catch(() => []);
  const rawGhTask = fetchWithTimeout(`https://raw.githubusercontent.com/jmtddr/valknut-radar/main/live-news.json?_cb=${Date.now()}`, { cache: 'no-store' }, 5000)
    .then(r => (r && r.ok ? r.json() : []))
    .catch(() => []);
  const [localArr, ghArr] = await Promise.all([localTask, rawGhTask]);
  const combined = [...(Array.isArray(ghArr) ? ghArr : []), ...(Array.isArray(localArr) ? localArr : [])];
  const deduped = [];
  const seen = new Set();
  combined.forEach(it => {
    if (!it || !it.titulo || isBlockedEntityToken(it.titulo)) return;
    const key = normalizeTextNoAccents(it.titulo).slice(0, 65);
    if (key && !seen.has(key)) {
      seen.add(key);
      deduped.push(it);
    }
  });
  if (deduped.length > 0) {
    deduped.sort((a, b) => parseNewsTimestamp(b.data_hora) - parseNewsTimestamp(a.data_hora));
    baseStaticNewsItems = deduped;
  }
  return deduped;
}

async function fetchSingleRssStream(rssUrl, defaultCategory, forceFresh = false) {
  const targetUrl = forceFresh
    ? `${rssUrl}${rssUrl.includes('?') ? '&' : '?'}_cb=${Date.now()}`
    : rssUrl;

  // 1. Google Apps Script Backend RSS Proxy (skipped if legacy GAS deployment detected)
  if (gasSupportsActionRouter !== false && typeof APPS_SCRIPT_URL === 'string' && APPS_SCRIPT_URL.startsWith('http')) {
    try {
      const gasUrl = `${APPS_SCRIPT_URL}?action=rss&url=${encodeURIComponent(targetUrl)}${forceFresh ? '&nocache=1' : ''}`;
      const res = await fetchWithTimeout(gasUrl, 5500);
      if (res && res.ok) {
        const data = await res.json();
        if (data && Array.isArray(data.data) && !data.contents && !data.ons) {
          gasSupportsActionRouter = false;
        } else if (data && data.contents) {
          gasSupportsActionRouter = true;
          const valid = filterValidRecentRssItems(parseRssXmlString(data.contents), defaultCategory);
          if (valid.length > 0) return valid;
        }
      }
    } catch (e) {}
  }

  // 2. AllOrigins JSON wrapper
  try {
    const aoUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}`;
    const res = await fetchWithTimeout(aoUrl, 5000);
    if (res && res.ok) {
      const data = await res.json();
      if (data && data.contents) {
        const valid = filterValidRecentRssItems(parseRssXmlString(data.contents), defaultCategory);
        if (valid.length > 0) return valid;
      }
    }
  } catch (e) {}

  return [];
}

async function fetchLiveDistressedNews(forceToast = false) {
  const btn = document.getElementById('btnRefreshRss');
  if (btn) {
    btn.disabled = true;
    btn.textContent = '⏳ Atualizando Feeds & Planilha...';
  }
  if (forceToast) {
    newsFeedSyncStatus = 'Sincronizando Planilha Mestre + Feeds Ao Vivo (Waivers, AGDs, CVM & RJ)...';
    if (currentMainSection === 'noticias') renderSectionContent();
  }

  const rssStreams = [
    {
      url: 'https://news.google.com/rss/search?q=%28waiver+OR+covenants+OR+AGD+OR+debenturistas+OR+%22deb%C3%AAntures%22%29+%28reestrutura%C3%A7%C3%A3o+OR+inadimpl%C3%AAncia+OR+vencimento+OR+apoio%29+when%3A7d&hl=pt-BR&gl=BR&ceid=BR:pt-419',
      defaultCategory: 'Waiver / AGD'
    },
    {
      url: 'https://news.google.com/rss/search?q=waiver+OR+covenants+OR+AGD+OR+debenturistas+OR+deb%C3%AAntures+reestrutura%C3%A7%C3%A3o+when%3A30d&hl=pt-BR&gl=BR&ceid=BR:pt-419',
      defaultCategory: 'Waiver / AGD'
    },
    {
      url: 'https://news.google.com/rss/search?q=%22recupera%C3%A7%C3%A3o+extrajudicial%22+OR+%22vencimento+antecipado%22+OR+V%C3%B3rtx+OR+Pent%C3%A1gono+OR+%22Oliveira+Trust%22+deb%C3%AAntures+when%3A30d&hl=pt-BR&gl=BR&ceid=BR:pt-419',
      defaultCategory: 'Waiver / AGD'
    },
    {
      url: 'https://news.google.com/rss/search?q=rebaixamento+OR+rating+Fitch+OR+Moody%27s+deb%C3%AAntures+OR+CRA+OR+d%C3%ADvida+when%3A30d&hl=pt-BR&gl=BR&ceid=BR:pt-419',
      defaultCategory: 'Downgrade Rating'
    },
    {
      url: 'https://news.google.com/rss/search?q=%22recupera%C3%A7%C3%A3o+judicial%22+OR+%22tutela+cautelar%22+OR+%22pedido+de+fal%C3%AAncia%22+d%C3%ADvida+milh%C3%B5es+when%3A14d&hl=pt-BR&gl=BR&ceid=BR:pt-419',
      defaultCategory: 'Pedido de RJ'
    }
  ];

  try {
    lastNewsAutoSyncTs = Date.now();
    const repoJsonTask = fetchLiveNewsJsonMerged().then(() => []).catch(() => []);

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
          if (!item || !isRecentNewsDate(item.data_hora, 75) || isBlockedEntityToken(item.titulo)) return;
          const normKey = normalizeTextNoAccents(item.titulo).slice(0, 65);
          if (normKey && !seenTitles.has(normKey)) {
            seenTitles.add(normKey);
            mergedRss.push(item);
          }
        });
      }
    });

    if (mergedRss.length > 0) {
      mergedRss.sort((a, b) => parseNewsTimestamp(b.data_hora) - parseNewsTimestamp(a.data_hora));
      liveRssNewsItems = mergedRss.slice(0, 28).map((it, idx) => ({
        ...it,
        id: 800 + idx
      }));
      saveCachedLiveNewsToStorage(liveRssNewsItems);
    }
  } catch (e) {}

  if (btn) {
    btn.disabled = false;
    btn.textContent = '↻ Atualizar RSS';
  }

  const brNowFull = formatBrazilNowDateTime();
  const syncStamp = `${brNowFull.slice(0, 5)}${brNowFull.slice(10)}`;
  const allCombined = getAllCombinedNews();
  const dcmCount = allCombined.filter(n => n.categoria === 'Waiver / AGD' || n.categoria === 'Downgrade Rating').length;

  newsFeedSyncStatus = `Sincronizado (${syncStamp}) • ${allCombined.length} fatos (${dcmCount} de Waivers/AGDs/Ratings)`;
  if (forceToast) {
    showToast(`Feed sincronizado (${syncStamp}): ${allCombined.length} matérias (${dcmCount} eventos de Waivers/AGDs & Ratings)!`);
  }

  const navNews = document.getElementById('nav-count-noticias');
  if (navNews) navNews.textContent = allCombined.length;

  if (currentMainSection === 'noticias') {
    renderSubTabs();
    renderSectionContent();
  }
}

function resolveVerifiedDealForNews(item) {
  if (!item) return null;
  if (item.deal_id) {
    const byId = DEALS_DATA.find(d => d.id === Number(item.deal_id));
    if (byId) return byId;
  }
  const emp = String(item.empresa_nome || '').trim();
  if (emp && !/^(radar live|planilha mestre|panorama|mercado)/i.test(emp)) {
    return findCuratedDeal('', emp) || null;
  }
  return null;
}

function buildDynamicPipelineNews() {
  const coveredDealIds = new Set();
  (baseStaticNewsItems || []).forEach(n => { if (n && n.deal_id) coveredDealIds.add(Number(n.deal_id)); });
  (sheetLiveNewsItems || []).forEach(n => { if (n && n.deal_id) coveredDealIds.add(Number(n.deal_id)); });
  (liveRssNewsItems || []).forEach(n => { if (n && n.deal_id) coveredDealIds.add(Number(n.deal_id)); });

  const dynamicItems = [];
  const ratingStrictRegex = /\b(fitch|moody|s&p|rebaixamento|downgrade|rd\(bra\)|ccc\(bra\)|observa[cç][aã]o\s+negativa)\b/i;

  DEALS_DATA.forEach(d => {
    if (coveredDealIds.has(Number(d.id))) return;
    if (/^(Rede Varejista|Metalúrgica Autopeças|Grupo Agroindustrial do Cerrado)/i.test(d.empresa || '')) return;

    const parsedPre = parseThesisRegex(d.tese);
    const coreDebtBlob = `${d.fase || ''} ${d.processo || ''} ${d.credores || ''} ${d.perfil_passivo || ''} ${parsedPre.causa || ''} ${parsedPre.gargalo || ''}`;
    const textBlob = `${coreDebtBlob} ${d.tese || ''}`;
    const hasDcmSignal = /\b(waivers?|covenants?|agds?|deb[eê]ntures?|debenturistas?|cras?|cris?|notas?\s+comerciais|v[oó]rtx|pent[aá]gono|oliveira\s+trust|opea|virgo|ignis|standstill|bonds?|bondholders?)\b/i.test(coreDebtBlob)
      || RX_VERT_SEC.test(coreDebtBlob)
      || RX_REIT_SEC.test(coreDebtBlob)
      || RX_EURO_SEC.test(coreDebtBlob)
      || d.tipo_processo === 'PRE';
    const hasRatingSignal = ratingStrictRegex.test(textBlob);
    const isRecentDeal = String(d.data_adicao || '') >= '2026-10-18' || String(d.data_evento || '') >= '2026-10-18';
    const isOctDcm = (hasDcmSignal || hasRatingSignal) && (String(d.data_evento || '') >= '2026-10-01' || String(d.data_adicao || '') >= '2026-10-01');

    if (!isRecentDeal && !isOctDcm && d.id <= 98) return;

    const parsed = parseThesisRegex(d.tese);
    let categoria = 'Pedido de RJ';
    if (hasRatingSignal) {
      categoria = 'Downgrade Rating';
    } else if (d.subtipo_processo === 'Falência / Liquidação' || /\b(fal[eê]ncia|convola[cç][aã]o|quebra)\b/i.test(d.fase || '')) {
      categoria = 'Falência';
    } else if (d.tipo_processo === 'PRE' || hasDcmSignal) {
      categoria = 'Waiver / AGD';
    } else if (d.tipo_processo === 'Cautelar / Pré-RJ') {
      categoria = 'Cautelar 20-B';
    } else if (isUpiEligible(d) && /\b(leil[aã]o|edital\s+de\s+aliena[cç][aã]o)\b/i.test(textBlob)) {
      categoria = 'Leilão de UPI';
    }

    const evIso = String(d.data_evento || '');
    const adIso = String(d.data_adicao || '');
    const rawDate = (adIso && evIso) ? (adIso > evIso ? adIso : evIso) : (adIso || evIso || getBrazilTodayIso());
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
      titulo: `${d.empresa.split('(')[0].trim()} — ${cleanGargalo.slice(0, 145)}${cleanGargalo.length > 145 ? '...' : ''} (R$ ${formatNumberBR(d.passivo_mm)} MM)`,
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
  const staticMapped = (baseStaticNewsItems || []).map(n => ({
    ...n,
    escopo: n.escopo || ((n.fonte === 'CVM / Fatos Relevantes' || n.fonte === 'Agentes Fiduciários' || n.categoria === 'Waiver / AGD' || n.categoria === 'Downgrade Rating') ? 'cvm' : (n.deal_id ? 'pipeline' : 'mercado')),
    url: buildNewsItemUrl(n)
  }));
  const dynamicFromDeals = buildDynamicPipelineNews();
  const validLiveRss = (liveRssNewsItems || []).filter(it => it && isRecentNewsDate(it.data_hora, 75));

  const rawAll = [
    ...(sheetLiveNewsItems || []),
    ...validLiveRss,
    ...staticMapped,
    ...dynamicFromDeals
  ];
  const deduped = [];
  const seen = new Set();

  rawAll.forEach(item => {
    if (!item || !item.titulo || isBlockedEntityToken(item.titulo) || isBlockedEntityToken(item.empresa_nome)) return;
    const key = normalizeTextNoAccents(item.titulo).slice(0, 62);
    if (!seen.has(key)) {
      seen.add(key);
      deduped.push(item);
    }
  });

  return deduped.sort((a, b) => parseNewsTimestamp(b.data_hora) - parseNewsTimestamp(a.data_hora));
}
function syncNewsCounters(providedNewsList) {
  const newsList = Array.isArray(providedNewsList) ? providedNewsList : getAllCombinedNews();
  const total = newsList.length;

  const navNews = document.getElementById('nav-count-noticias');
  if (navNews) navNews.textContent = total;

  const subAll = document.getElementById('subtab-count-news_all');
  if (subAll) subAll.textContent = total;

  const subRj = document.getElementById('subtab-count-news_rj');
  if (subRj) {
    subRj.textContent = newsList.filter(n => n.categoria === 'Pedido de RJ' || n.categoria === 'Cautelar 20-B').length;
  }

  const subDcm = document.getElementById('subtab-count-news_dcm');
  if (subDcm) {
    subDcm.textContent = newsList.filter(n => n.categoria === 'Waiver / AGD' || n.categoria === 'Downgrade Rating').length;
  }

  const subUpi = document.getElementById('subtab-count-news_upi_falencia');
  if (subUpi) {
    subUpi.textContent = newsList.filter(n => n.categoria === 'Leilão de UPI' || n.categoria === 'Falência').length;
  }

  const scopeAllBtn = document.getElementById('news-scope-btn-all');
  if (scopeAllBtn) {
    scopeAllBtn.textContent = `Todas as Notícias (${total})`;
  }

  const scopeMercadoBtn = document.getElementById('news-scope-btn-mercado');
  if (scopeMercadoBtn) {
    const countMercado = newsList.filter(n => n.escopo === 'mercado').length;
    scopeMercadoBtn.textContent = `Mercado & Macro (${countMercado})`;
  }

  const scopePipelineBtn = document.getElementById('news-scope-btn-pipeline');
  if (scopePipelineBtn) {
    const countPipeline = newsList.filter(n => Boolean(n.deal_id) || n.escopo === 'pipeline' || String(n.fonte).toUpperCase() === 'PIPELINE').length;
    scopePipelineBtn.textContent = `Empresas do Pipeline (${countPipeline})`;
  }

  const scopeCvmBtn = document.getElementById('news-scope-btn-cvm');
  if (scopeCvmBtn) {
    const countCvm = newsList.filter(n => n.escopo === 'cvm').length;
    scopeCvmBtn.textContent = `CVM, Waivers & Fatos Relevantes (${countCvm})`;
  }
}

function renderNoticiasSection(container) {
  const newsList = getAllCombinedNews();
  syncNewsCounters(newsList);

  const baseSources = ['PIPELINE', 'Valor Econômico', 'Brazil Journal', 'CVM / Fatos Relevantes', 'Agentes Fiduciários', 'Jota / Tribunais', 'AgFeed'];
  const sources = [...baseSources];
  newsList.forEach(n => {
    const f = String(n.fonte || '').trim();
    if (f && !sources.some(s => normalizeTextNoAccents(s) === normalizeTextNoAccents(f))) {
      sources.push(f);
    }
  });

  const categorias = ['Pedido de RJ', 'Cautelar 20-B', 'Waiver / AGD', 'Downgrade Rating', 'Leilão de UPI', 'Falência'];
  const setores = [...new Set(newsList.map(n => n.setor).filter(Boolean))].sort();

  const filteredNews = newsList.filter(n => {
    if (currentSubTab === 'news_rj' && n.categoria !== 'Pedido de RJ' && n.categoria !== 'Cautelar 20-B') return false;
    if (currentSubTab === 'news_dcm' && n.categoria !== 'Waiver / AGD' && n.categoria !== 'Downgrade Rating') return false;
    if (currentSubTab === 'news_upi_falencia' && n.categoria !== 'Leilão de UPI' && n.categoria !== 'Falência') return false;

    const isPipelineItem = Boolean(n.deal_id) || n.escopo === 'pipeline' || String(n.fonte).toUpperCase() === 'PIPELINE';
    if (newsScopeFilter === 'mercado' && n.escopo !== 'mercado') return false;
    if (newsScopeFilter === 'pipeline' && !isPipelineItem) return false;
    if (newsScopeFilter === 'cvm' && n.escopo !== 'cvm') return false;

    if (newsSourceFilter !== '' && normalizeTextNoAccents(n.fonte) !== normalizeTextNoAccents(newsSourceFilter)) return false;
    if (newsSetorFilter !== '' && n.setor !== newsSetorFilter) return false;
    if (newsCategoriaFilter !== '' && n.categoria !== newsCategoriaFilter) return false;
    if (newsSearchQuery !== '') {
      const blob = normalizeTextNoAccents(`${n.titulo} ${n.resumo} ${n.empresa_nome} ${n.fonte} ${n.setor} ${n.categoria}`);
      if (!blob.includes(normalizeTextNoAccents(newsSearchQuery))) return false;
    }
    return true;
  });

  const countMercado = newsList.filter(n => n.escopo === 'mercado').length;
  const countPipeline = newsList.filter(n => Boolean(n.deal_id) || n.escopo === 'pipeline' || String(n.fonte).toUpperCase() === 'PIPELINE').length;
  const countCvm = newsList.filter(n => n.escopo === 'cvm').length;

  let html = `
    <div class="news-filter-bar">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:10px; padding-bottom:8px; border-bottom:1px solid var(--border-light);">
        <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
          <span class="phase-label">Escopo do Feed:</span>
          <button id="news-scope-btn-all" class="phase-chip ${newsScopeFilter === 'all' ? 'active' : ''}" onclick="handleNewsScopeFilter('all')">Todas as Notícias (${newsList.length})</button>
          <button id="news-scope-btn-mercado" class="phase-chip ${newsScopeFilter === 'mercado' ? 'active' : ''}" onclick="handleNewsScopeFilter('mercado')">Mercado &amp; Macro (${countMercado})</button>
          <button id="news-scope-btn-pipeline" class="phase-chip ${newsScopeFilter === 'pipeline' ? 'active' : ''}" onclick="handleNewsScopeFilter('pipeline')">Empresas do Pipeline (${countPipeline})</button>
          <button id="news-scope-btn-cvm" class="phase-chip ${newsScopeFilter === 'cvm' ? 'active' : ''}" onclick="handleNewsScopeFilter('cvm')">CVM, Waivers &amp; Fatos Relevantes (${countCvm})</button>
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
          <button class="phase-chip ${normalizeTextNoAccents(newsSourceFilter) === normalizeTextNoAccents(src) && newsSourceFilter !== '' ? 'active' : ''}" data-news-source="${escapeHtml(src)}" onclick="handleNewsSourceFilter(this.getAttribute('data-news-source'))">${escapeHtml(src)}</button>
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
              <button class="btn-solid" style="padding:6px 11px; font-size:11px;" data-deal-id="${item.deal_id}" data-empresa-nome="${escapeHtml(item.empresa_nome)}" onclick="openDossierByCompanyOrId(Number(this.getAttribute('data-deal-id')), this.getAttribute('data-empresa-nome'))">
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
  newsSourceFilter = src || '';
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
  newsSearchQuery = String(q || '').trim().toLowerCase();
  if (newsSearchDebounceTimer) clearTimeout(newsSearchDebounceTimer);
  newsSearchDebounceTimer = setTimeout(() => {
    renderSectionContent();
  }, 180);
}

function openDossierByCompanyOrId(dealId, empresaNome) {
  let found = dealId ? DEALS_DATA.find(d => d.id === Number(dealId)) : null;
  if (empresaNome && !/^(radar live|planilha mestre|panorama|mercado)/i.test(empresaNome)) {
    const byStem = findCuratedDeal('', empresaNome);
    if (byStem && (!found || found.id !== byStem.id)) {
      const stemTarget = normalizeCompanyStem(empresaNome);
      const stemFound = found ? normalizeCompanyStem(found.empresa) : '';
      if (!stemFound || (stemTarget.length >= 4 && !stemFound.includes(stemTarget) && !stemTarget.includes(stemFound))) {
        found = byStem;
      }
    }
    if (!found) {
      const key = normalizeCompanyStem(empresaNome);
      if (key.length >= 3) {
        found = DEALS_DATA.find(d => normalizeCompanyStem(d.empresa).includes(key));
      }
    }
  }
  if (found) {
    openDossier(found.id);
  } else {
    showToast('Empresa em monitoramento de mercado (sem processo autuado no pipeline).');
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

async function fetchEnergyMarketData(submercado = 'SIN', dataOperativa = selectedSinDate, notifyUser = false) {
  const sep = APPS_SCRIPT_URL.includes('?') ? '&' : '?';
  const gasProxyUrl = `${APPS_SCRIPT_URL}${sep}action=ons_ccee&submercado=${encodeURIComponent(submercado)}&data=${encodeURIComponent(dataOperativa)}${notifyUser ? '&force=1' : ''}&_t=${Date.now()}`;
  const cceeUrl = 'https://dadosabertos.ccee.org.br/api/3/action/package_search?q=pld_horario&rows=3';

  try {
    let synced = false;
    // 1. Primary: Google Apps Script server-side proxy (?action=ons_ccee), skipped if legacy deployment
    if (gasSupportsActionRouter !== false && typeof APPS_SCRIPT_URL === 'string' && APPS_SCRIPT_URL.startsWith('http')) {
      try {
        const proxyRes = await fetchWithTimeout(gasProxyUrl, { cache: 'no-store' }, 6500);
        if (proxyRes && proxyRes.ok) {
          const proxyJson = await proxyRes.json();
          if (proxyJson && Array.isArray(proxyJson.data) && !proxyJson.contents && !proxyJson.ons && !proxyJson.ccee) {
            gasSupportsActionRouter = false;
          } else {
            const isOnsPayload = proxyJson && (proxyJson.ccee !== undefined || proxyJson.ons !== undefined || Array.isArray(proxyJson.records));
            if (isOnsPayload && (proxyJson.status === 'success' || proxyJson.status === 'ok')) {
              gasSupportsActionRouter = true;
              synced = true;
              const recs = proxyJson.ccee?.records || proxyJson.records || [];
              if (recs.length > 0) {
                const pldVals = recs
                  .map(r => parseFloat(String(r.VALOR_PLD || r.valor_pld || r.PLD || r.pld_hora || '').replace(',', '.')))
                  .filter(v => !isNaN(v) && v > 0);
                if (pldVals.length > 0) {
                  const avgPld = pldVals.reduce((a, b) => a + b, 0) / pldVals.length;
                  energyLiveOverrides[submercado] = {
                    pld_medio: `R$ ${avgPld.toFixed(2).replace('.', ',')} / MWh`
                  };
                }
              }
            }
          }
        }
      } catch (gasErr) {}
    }

    // 2. Secondary fallback via allorigins if Apps Script proxy hasn't been redeployed yet
    if (!synced) {
      const cceeRes = await fetchWithTimeout(`https://api.allorigins.win/get?url=${encodeURIComponent(cceeUrl)}`, {}, 6500);
      if (cceeRes && cceeRes.ok) {
        synced = true;
      }
    }

    energyLastSyncTime = formatBrazilNowDateTime();

    if (synced) {
      const hasLivePld = Boolean(energyLiveOverrides[submercado]?.pld_medio);
      energyTelemetryStatus = hasLivePld
        ? 'Telemetria CCEE / ANEEL / ONS Sincronizada (PLD Real)'
        : 'Referência Operacional ONS / CCEE (Sem Modulação Sintética)';
      if (notifyUser) showToast(`${energyTelemetryStatus} (${energyLastSyncTime})!`);
    } else {
      energyTelemetryStatus = 'Referência Operacional Estática (Cache ONS/CCEE)';
      if (notifyUser) showToast('Operando com curva referencial ONS/CCEE verificada.');
    }
  } catch (e) {
    energyTelemetryStatus = 'Referência Operacional Estática (Cache ONS/CCEE)';
  }

  if (currentMainSection === 'energia') {
    renderSectionContent();
  }
}

function getDynamicSubmarketConfig(subKey) {
  const base = ONS_SUBMARKET_SERIES[subKey] || ONS_SUBMARKET_SERIES.SIN;
  const hidro = [...base.hidro];
  const termica = [...base.termica];
  const nuclear = [...base.nuclear];
  const eolica = [...base.eolica];
  const solar = [...base.solar];
  const mmgd = [...base.mmgd];

  const liveOverridePld = energyLiveOverrides[subKey]?.pld_medio;

  return {
    ...base,
    pld_medio: liveOverridePld || base.pld_medio,
    hidro,
    termica,
    nuclear,
    eolica,
    solar,
    mmgd
  };
}

function renderEnergiaSection(container) {
  const subCfg = getDynamicSubmarketConfig(selectedSinSubmarket);
  const energyDeals = getFilteredDeals().filter(d => d.setor_macro === 'Energia & Infraestrutura' && matchesEnergySubmarketFilter(d));

  const isSynced = energyTelemetryStatus.includes('PLD Real');

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
          ${escapeHtml(subCfg.label)} &bull; Data de Consulta CCEE: ${formatDateBR(selectedSinDate)}
        </div>
      </div>
      <div class="ons-control-group">
        <div>
          <label for="sinDateInput" style="font-family:var(--font-mono); font-size:9.5px; color:var(--vk-sage); display:block; text-transform:uppercase;">Data Consulta CCEE</label>
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
        <div class="ons-mini-kpi-label">Carga Referencial</div>
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

  if (currentSubTab === 'pld_curtailment') {
    html += `
      <div class="dashboard-grid" style="margin-bottom:22px;">
        <div class="chart-panel">
          <div class="chart-panel-header">
            <div>
              <h3>PLD Horário por Submercado (R$/MWh)</h3>
              <p>Spread horário entre Sudeste/CO, Nordeste e Sul e gatilhos de chamada de margem MCP</p>
            </div>
            <span class="chart-tag">CCEE PLD HORÁRIO</span>
          </div>
          <div class="chart-canvas-box" style="height:310px;"><canvas id="chartOnsPld"></canvas></div>
        </div>
        <div class="chart-panel">
          <div class="chart-panel-header">
            <div>
              <h3>Restrição Eólica &amp; Solar — Curtailment (MW Cortados)</h3>
              <p>Constrained-off determinado pelo ONS e pressão sobre ICSD de debêntures de infraestrutura</p>
            </div>
            <span class="chart-tag">ONS CONSTRAINED-OFF</span>
          </div>
          <div class="chart-canvas-box" style="height:310px;"><canvas id="chartOnsCurtailment"></canvas></div>
        </div>
      </div>
    `;
  } else if (currentSubTab !== 'pipeline_energia') {
    html += `
      <div class="chart-panel full-span" style="margin-bottom:22px;">
        <div class="chart-panel-header">
          <div>
            <h3 id="onsChartTitle">Geração por Fonte (MW) vs. Carga &amp; Hidrologia — ${escapeHtml(subCfg.label)}</h3>
            <p>Curva horária empilhada (Geração Hidráulica, Térmica, Nuclear, Solar, Eólica e MMGD) confrontada com Carga Prevista e Realizada</p>
          </div>
          <span class="chart-tag">ONS / CCEE PERFIL HORÁRIO</span>
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
    scheduleChartInit(() => initOnsStackedChart(subCfg), 30);
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
  const hours = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00`);

  if (currentSubTab === 'pld_curtailment') {
    const ctxPld = document.getElementById('chartOnsPld');
    if (ctxPld) {
      const pldSE = [138, 134, 130, 128, 131, 142, 155, 162, 158, 149, 142, 139, 141, 146, 154, 168, 185, 210, 224, 218, 195, 174, 158, 145];
      const pldNE = [145, 140, 136, 135, 138, 148, 160, 165, 152, 138, 125, 118, 120, 128, 142, 165, 192, 225, 242, 235, 210, 185, 165, 152];
      const pldS  = [110, 108, 105, 104, 106, 112, 118, 122, 120, 116, 112, 110, 112, 115, 119, 126, 135, 148, 155, 150, 138, 128, 120, 114];
      createManagedChart(ctxPld, {
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
      });
    }

    const ctxCurt = document.getElementById('chartOnsCurtailment');
    if (ctxCurt) {
      const curtEolica = [420, 480, 510, 550, 490, 380, 620, 1150, 1850, 2420, 2890, 3120, 3250, 2980, 2450, 1680, 890, 520, 410, 390, 410, 430, 450, 440];
      const curtSolar  = [0, 0, 0, 0, 0, 0, 180, 640, 1420, 2180, 2760, 3050, 3180, 2890, 2150, 1120, 290, 0, 0, 0, 0, 0, 0, 0];
      createManagedChart(ctxCurt, {
        type: 'bar',
        data: {
          labels: hours,
          datasets: [
            { label: 'Curtailment Eólico (MW Cortados)', data: curtEolica, backgroundColor: '#0284C7', stack: 'curt' },
            { label: 'Curtailment Solar UFVs (MW Cortados)', data: curtSolar, backgroundColor: '#D97706', stack: 'curt' }
          ]
        },
        options: { responsive: true, maintainAspectRatio: false, scales: { x: { stacked: true }, y: { stacked: true } } }
      });
    }
    return;
  }

  const ctx = document.getElementById('chartOnsOperation');
  if (!ctx) return;

  const cargaRealizada = hours.map((_, i) => subCfg.hidro[i] + subCfg.termica[i] + subCfg.nuclear[i] + subCfg.eolica[i] + subCfg.solar[i] + subCfg.mmgd[i]);
  const cargaPrevista = cargaRealizada.map((v, i) => Math.round(v * (i % 2 === 0 ? 1.018 : 0.988)));

  createManagedChart(ctx, {
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
  });
}

// ==========================================================================
// 13. Filter Controls & Dropdown Handlers
// ==========================================================================
function setProcessFilter(proc) {
  currentProcessType = proc;
  currentPage = 1;
  document.querySelectorAll('.phase-chip').forEach(c => c.classList.remove('active'));
  if (proc === '') document.getElementById('proc-all')?.classList.add('active');
  else if (proc === 'PRJ') document.getElementById('proc-prj')?.classList.add('active');
  else if (proc === 'Cautelar / Pré-RJ') document.getElementById('proc-cautelar')?.classList.add('active');
  else if (proc === 'PRE') document.getElementById('proc-pre')?.classList.add('active');
  else if (proc === 'Falência / Liquidação') document.getElementById('proc-falencia')?.classList.add('active');
  else if (proc === 'Tier 0') document.getElementById('proc-tier0')?.classList.add('active');
  renderSectionContent();
  updateUrlHash();
}

function handleSearch(val) {
  searchTerm = String(val || '').trim().toLowerCase();
  currentPage = 1;
  if (searchDebounceTimer) clearTimeout(searchDebounceTimer);
  searchDebounceTimer = setTimeout(() => {
    renderSectionContent();
    updateUrlHash();
  }, 180);
}

function handleUfChange(val) {
  currentUf = val;
  currentPage = 1;
  renderSectionContent();
  updateUrlHash();
}

function handleSetorChange(val) {
  currentSetor = val;
  currentPage = 1;
  renderSectionContent();
  updateUrlHash();
}

function handlePorteChange(val) {
  currentPorte = val;
  currentPage = 1;
  const minEl = document.getElementById('inputMinPassivo');
  const maxEl = document.getElementById('inputMaxPassivo');

  if (val === 'small' && minPassivoMM >= 30) {
    minPassivoMM = 0;
    if (minEl) minEl.value = '0';
    document.querySelectorAll('.quick-toggle-btn').forEach(b => b.classList.remove('active'));
    showToast('Piso ajustado para R$ 0 MM para exibir casos Sub-30M (< R$ 30 MM).');
  } else if (val === 'mid' && (minPassivoMM >= 100 || (maxPassivoMM !== null && maxPassivoMM < 30))) {
    minPassivoMM = 30;
    if (maxPassivoMM !== null && maxPassivoMM < 30) maxPassivoMM = null;
    if (minEl) minEl.value = '30';
    if (maxEl && maxPassivoMM === null) maxEl.value = '';
  } else if (val === 'upper' && (minPassivoMM >= 500 || (maxPassivoMM !== null && maxPassivoMM < 100))) {
    if (minPassivoMM >= 500) { minPassivoMM = 30; if (minEl) minEl.value = '30'; }
    if (maxPassivoMM !== null && maxPassivoMM < 100) { maxPassivoMM = null; if (maxEl) maxEl.value = ''; }
  } else if (val === 'large' && (minPassivoMM >= 1000 || (maxPassivoMM !== null && maxPassivoMM < 500))) {
    if (minPassivoMM >= 1000) { minPassivoMM = 30; if (minEl) minEl.value = '30'; }
    if (maxPassivoMM !== null && maxPassivoMM < 500) { maxPassivoMM = null; if (maxEl) maxEl.value = ''; }
  } else if (val === 'mega' && maxPassivoMM !== null && maxPassivoMM < 1000) {
    maxPassivoMM = null;
    if (maxEl) maxEl.value = '';
  }

  renderSubTabs();
  renderSectionContent();
  updateUrlHash();
}

function handleSortChange(val) {
  currentSort = val;
  currentPage = 1;
  renderSectionContent();
  updateUrlHash();
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
    ufSelect.innerHTML = '<option value="">Todas as UFs</option>' + ufs.map(u => `<option value="${escapeHtml(u)}" ${currentUf === u ? 'selected' : ''}>${escapeHtml(u)}</option>`).join('');
  }
  if (setorSelect) {
    setorSelect.innerHTML = '<option value="">Todos os Macro-Setores</option>' + setores.map(s => `<option value="${escapeHtml(s)}" ${currentSetor === s ? 'selected' : ''}>${escapeHtml(s)}</option>`).join('');
  }
}

// ==========================================================================
// MÓDULO 4: Calendário Tático Completo dos Casos Monitorados + Exportação .ICS
// ==========================================================================
function buildDynamicCalendarMonths() {
  const monthNamesPt = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const brIso = getBrazilTodayIso();
  const [brY, brM] = brIso.split('-').map(Number);
  const baseYear = brY >= 2026 ? brY : 2026;
  const baseMonthIdx = brY >= 2026 ? Math.max(0, (brM - 1) - 1) : 9;
  const list = [];
  for (let i = 0; i < 6; i++) {
    const dt = new Date(baseYear, baseMonthIdx + i, 1);
    const y = dt.getFullYear();
    const mIdx = dt.getMonth();
    const key = `${y}-${String(mIdx + 1).padStart(2, '0')}`;
    const days = new Date(y, mIdx + 1, 0).getDate();
    const startDow = dt.getDay();
    list.push({
      key,
      label: `${monthNamesPt[mIdx]} ${y}`,
      days,
      startDow
    });
  }
  return list;
}

function renderPrazosSection(deals, container) {
  if (deals.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding: 48px; color: var(--text-muted);">Nenhum prazo encontrado para o filtro selecionado.</div>`;
    return;
  }

  // Enrich calendar events for each deal with exact Date diff calculation
  const enrichedEvents = deals.map(d => {
    const cm = computeDynamicCalendarMeta(d);
    d.calendar_meta = cm;
    const parsed = parseThesisRegex(d.tese);
    let dataMarco = cm.data_marco_iso;
    let tipoMarco = cm.marco_label || cm.marco_principal || cm.tipo_marco || 'Prazo de Stay Period / Plano Concursal';
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
    const months = buildDynamicCalendarMonths();
    const mCfg = months.find(m => m.key === calSelectedMonth) || months[1] || months[0];
    calSelectedMonth = mCfg.key;

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

function escapeIcsText(str) {
  return String(str || '')
    .replace(/\\/g, '\\\\')
    .replace(/\r?\n|\r/g, '\\n')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,');
}

function downloadICSFromDeals(dealsList, filename) {
  let ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Valknut Special Situations//Calendario Concursal//PT-BR',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH'
  ];

  const dtStamp = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  dealsList.forEach(d => {
    const cm = computeDynamicCalendarMeta(d);
    const isoDate = normalizeIsoDateStr(cm.data_marco_iso, getBrazilTodayIso());
    const [yy, mm, dd] = isoDate.split('-').map(Number);
    const dtRaw = isoDate.replace(/-/g, '');
    const nextUtc = new Date(Date.UTC(yy || 2026, (mm || 1) - 1, (dd || 1) + 1));
    const dtEndRaw = `${nextUtc.getUTCFullYear()}${String(nextUtc.getUTCMonth() + 1).padStart(2, '0')}${String(nextUtc.getUTCDate()).padStart(2, '0')}`;
    const parsed = parseThesisRegex(d.tese);
    const summaryTxt = escapeIcsText(`[VALKNUT] ${d.empresa} — ${cm.marco_label || cm.tipo_marco || 'Prazo Concursal'} (R$ ${d.passivo_mm} MM)`);
    const descTxt = escapeIcsText(`Empresa: ${d.empresa} (${d.cnpj})\nPassivo: R$ ${d.passivo_mm} MM\nJuízo: ${d.tribunal} | Autos: ${d.processo}\nGargalo: ${parsed.gargalo}`);
    const locTxt = escapeIcsText(`${d.tribunal} - ${d.cidade}/${d.uf}`);
    ics.push(
      'BEGIN:VEVENT',
      `UID:valknut-deal-${d.id}-${dtRaw}@valknut.specialsits`,
      `DTSTAMP:${dtStamp}`,
      `DTSTART;VALUE=DATE:${dtRaw}`,
      `DTEND;VALUE=DATE:${dtEndRaw}`,
      `SUMMARY:${summaryTxt}`,
      `DESCRIPTION:${descTxt}`,
      `LOCATION:${locTxt}`,
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
  fiscal: 7,
  c1: 3,
  c2: 42,
  c3: 27,
  c4: 3
};

function getActiveModelingDeal() {
  if (selectedTier0CalcTarget) {
    return selectedTier0CalcTarget;
  }
  return DEALS_DATA.find(x => Number(x.id) === Number(selectedModelDealId)) || DEALS_DATA[0] || null;
}

function calibrateAdvisoryDefaultsForDeal(d) {
  if (!d) return;
  const passivo = Number(d.passivo_mm || 100);
  const mp = d.model_params || {};
  modelCustomPassivo = passivo;
  pitchCreditorExposureMM = Math.max(5, Math.round(passivo * 0.25));
  modelHaircutPct = typeof mp.haircut_estimado_pct === 'number' ? mp.haircut_estimado_pct : 55;
  modelSecondaryDiscountPct = typeof mp.desconto_secundario_pct === 'number' ? mp.desconto_secundario_pct : 35;
  modelEvAtivos = typeof mp.ev_estimado_mm === 'number' ? mp.ev_estimado_mm : Math.round(passivo * 0.55);
  modelLiqDiscountPct = typeof mp.liquidez_forcada_desconto_pct === 'number' ? mp.liquidez_forcada_desconto_pct : 40;

  const sc = mp.split_classes || mp.classes_pct || {};
  const rec = reconcileSixBucketSplit({
    extra: sc.extraconcursal_pct ?? sc.extraconcursal_fiduciario ?? 18,
    fiscal: sc.fiscal_pct ?? sc.fiscal_tributario ?? 7,
    c1: sc.classe_i_pct ?? sc.c1_trabalhista ?? 3,
    c2: sc.classe_ii_pct ?? sc.c2_garantia_real ?? 42,
    c3: sc.classe_iii_pct ?? sc.c3_quirografario ?? 27,
    c4: sc.classe_iv_pct ?? sc.c4_me_epp ?? 3
  });
  waterfallSplitPcts = {
    extra: rec.extra,
    fiscal: rec.fiscal,
    c1: rec.c1,
    c2: rec.c2,
    c3: rec.c3,
    c4: rec.c4
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
  const creditorExposureMM = Math.max(1, Number(pitchCreditorExposureMM || Math.round(passivoMM * 0.25)));
  const creditorRecoveredMM = (creditorExposureMM * recupPct) / 100.0;

  let baseCalculoMM = passivoMM;
  let baseLabel = 'Passivo Total Reestruturado (Debtor-Side)';
  let baseShortLabel = 'Passivo Total';
  if (modelFeeBasis === 'haircut_economia') {
    baseCalculoMM = economiaMM;
    baseLabel = `Economia / Redução de Dívida Obtida (Debtor-Side — Haircut ${haircutPct}%)`;
    baseShortLabel = `Economia Debtor (Haircut ${haircutPct}%)`;
  } else if (modelFeeBasis === 'credito_recuperado') {
    baseCalculoMM = creditorRecoveredMM;
    baseLabel = `Crédito Recuperado pelo Credor (${recupPct}% s/ Exposição R$ ${formatNumberBR(creditorExposureMM)}M)`;
    baseShortLabel = `Créd. Recuperado Credor (${recupPct}%)`;
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
  const refExposureForTakeRate = modelFeeBasis === 'credito_recuperado' ? creditorExposureMM : passivoMM;
  const takeRatePassivoPct = refExposureForTakeRate > 0 ? (totalHonorariosMM / refExposureForTakeRate) * 100.0 : 0;
  const shareVariavelPct = totalHonorariosMM > 0 ? Math.round((successLiquidoMM / totalHonorariosMM) * 100) : 0;
  const shareFixoPct = 100 - shareVariavelPct;
  const roiClienteEconomia = totalHonorariosMM > 0
    ? ((modelFeeBasis === 'credito_recuperado' ? creditorRecoveredMM : economiaMM) / totalHonorariosMM)
    : 0;

  return {
    passivoMM,
    creditorExposureMM,
    creditorRecoveredMM,
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
  if (dealId === 'tier0') return;
  selectedTier0CalcTarget = null;
  selectedModelDealId = Number(dealId);
  const d = DEALS_DATA.find(x => x.id === selectedModelDealId);
  if (d) {
    calibrateAdvisoryDefaultsForDeal(d);
  }
  renderSectionContent();
}

function openCalculatorForDeal(dealId) {
  closeModal();
  selectedTier0CalcTarget = null;
  selectedModelDealId = Number(dealId);
  switchMainSection('precificacao');
  selectDealForCalculator(dealId);
  showToast('Caso carregado na Calculadora de Success Fee & Retainer!');
}

function openCalculatorForTier0(idx) {
  const t0 = Array.isArray(LIVE_TIER0_DATA) ? LIVE_TIER0_DATA[idx] : null;
  if (!t0) return;
  closeModal();
  const ufMatch = String(t0.regiao || 'SP').match(/\b([A-Z]{2})\b/);
  const passivoNum = Math.max(10, Number(t0.passivo_mm || 150));
  const cleanVetores = String(t0.vetores || '').replace(/\r?\n/g, ' • ').trim();
  const todayIso = getBrazilTodayIso();

  selectedTier0CalcTarget = {
    id: 'tier0',
    empresa: t0.empresa || 'Alvo Radar Preditivo Tier 0',
    cnpj: t0.cnpj || 'Em apuração (Tier 0)',
    setor_macro: t0.setor_macro || 'Indústria & Manufatura',
    uf: ufMatch ? ufMatch[1] : 'SP',
    cidade: String(t0.regiao || 'São Paulo').split('/')[0].split('(')[0].trim() || 'São Paulo',
    tribunal: 'Radar Pré-Concursal (Fase Antecedente — Sem RJ Ajuizada)',
    processo: t0.fontes || 'Monitoramento Forense Antecedente',
    fase: 'Sinal Precursor (Tier 0)',
    tier: 'Tier 0',
    score: Number(t0.score || 9.0),
    tipo_processo: 'Tier 0',
    subtipo_processo: `Tier 0 (${t0.janela || '30-60 dias'})`,
    passivo_mm: passivoNum,
    data_evento: todayIso,
    data_adicao: todayIso,
    credores: t0.tese || 'Credores Financeiros & Mercado de Capitais',
    perfil_passivo: t0.fontes || 'Bancário + Mercado de Capitais',
    agentes_fiduciarios: 'Monitoramento Preventivo CVM / Escrituras',
    securitizadoras: 'Sem securitizadora reportada',
    advocacia: 'Mandato Preventivo em Prospecção',
    aj: 'Não aplicável (Fase Pré-Processual)',
    proximas_acoes: `Abordagem confidencial na janela antecedente (${t0.janela || '30-60 dias'}) para diagnóstico de liquidez, standstill e mediação pré-processual.`,
    tese: `(1) Contexto e Causa da Crise: ${cleanVetores || ' Deterioração de liquidez capturada por sinais antecedentes.'} (2) Gargalo Imediato: Janela crítica de ${t0.janela || '30-60 dias'} sob pressão de ${t0.fontes || 'dívida bancária e mercado de capitais'}. (3) Tese de Mandato: Estruturação preventiva de standstill / reperfilamento extrajudicial junto a ${t0.tese || 'credores financeiros'}.`,
    descricao_empresa: cleanVetores || 'Companhia monitorada preventivamente pelo Radar Forense Tier 0.',
    bancos_credores: t0.tese || 'Credores Financeiros & Mercado de Capitais',
    model_params: {
      haircut_estimado_pct: 42,
      desconto_secundario_pct: 32,
      ev_estimado_mm: Math.round(passivoNum * 0.62),
      liquidez_forcada_desconto_pct: 38,
      split_classes: { extraconcursal_pct: 20, fiscal_pct: 10, classe_i_pct: 4, classe_ii_pct: 36, classe_iii_pct: 27, classe_iv_pct: 3 }
    }
  };
  calibrateAdvisoryDefaultsForDeal(selectedTier0CalcTarget);
  modelCustomPassivo = passivoNum;
  modelHaircutPct = 42;
  modelFeeBasis = 'passivo_total';
  modelMandateMonths = 9;
  modelRetainerOffsetPct = 50;
  pitchMandateType = 'Turnaround Pré-Concursal & Mediação Antecedente (Tier 0)';
  pitchTargetRecipient = 'Acionistas Controladores & Sindicato de Credores';
  pitchRetainerMensal = Math.max(65, Math.min(220, Math.round(modelCustomPassivo * 0.35)));
  pitchSuccessFeePct = 2.0;
  switchMainSection('precificacao');
  showToast(`Alvo Tier 0 carregado na Calculadora: ${t0.empresa} (R$ ${formatNumberBR(t0.passivo_mm)} MM)!`);
}

function openPitchGeneratorForDeal(dealId) {
  closeModal();
  selectedTier0CalcTarget = null;
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
  syncUrlHash(true);
  showToast('Caso carregado no Gerador de Proposta Comercial (.pptx)!');
}

function buildFeeCalculatorRightPaneHtml(m) {
  const feeRateScenarios = [0.75, 1.0, 1.5, 2.0, 2.5, 3.0, 4.0, 5.0];
  const takeRateLabel = modelFeeBasis === 'credito_recuperado' ? 's/ Exposição Credor' : 's/ Passivo Total';
  const refDenom = modelFeeBasis === 'credito_recuperado' ? m.creditorExposureMM : m.passivoMM;
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
        <div class="calc-res-sub">Take Rate: <strong>${m.takeRatePassivoPct.toFixed(2).replace('.', ',')}%</strong> ${takeRateLabel} (${m.shareVariavelPct}% Êxito)</div>
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
                <th style="text-align:right;">% Efetivo (${takeRateLabel})</th>
              </tr>
            </thead>
            <tbody>
              ${feeRateScenarios.map(rate => {
                const sBruto = (m.baseCalculoMM * rate) / 100.0;
                const sDed = Math.min(sBruto, m.retainerTotalMM * (m.offsetPct / 100.0));
                const sLiq = Math.max(0, sBruto - sDed);
                const totFee = m.retainerTotalMM + sLiq;
                const effPct = refDenom > 0 ? (totFee / refDenom) * 100.0 : 0;
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
  if (typeof Chart === 'undefined') return;
  const ctx = document.getElementById('chartSimpleRecovery');
  if (ctx) {
    createManagedChart(ctx, {
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
    });
  }
}

function parseNonDestructiveDecimal(rawVal) {
  if (rawVal === null || rawVal === undefined) return null;
  const s = String(rawVal).trim().replace(',', '.');
  if (!s || s === '-' || s === '.' || s.endsWith('.')) return null;
  const parsed = parseFloat(s);
  return isNaN(parsed) ? null : parsed;
}

function updateSimpleCalcLive(field, val) {
  if (field === 'basis') {
    modelFeeBasis = String(val);
    const expWrap = document.getElementById('creditorExposureFieldWrap');
    if (expWrap) expWrap.style.display = modelFeeBasis === 'credito_recuperado' ? 'block' : 'none';
  } else {
    const num = parseNonDestructiveDecimal(val);
    if (num === null || isNaN(num)) return;
    if (field === 'passivo' || field === 'credito') modelCustomPassivo = Math.max(1, num);
    else if (field === 'creditor_exposure') pitchCreditorExposureMM = Math.max(1, num);
    else if (field === 'haircut') modelHaircutPct = Math.min(99, Math.max(0, num));
    else if (field === 'retainer') pitchRetainerMensal = Math.max(0, num);
    else if (field === 'meses') modelMandateMonths = Math.min(60, Math.max(1, Math.round(num)));
    else if (field === 'success_pct') pitchSuccessFeePct = Math.min(25, Math.max(0, num));
    else if (field === 'offset_pct') modelRetainerOffsetPct = Math.min(100, Math.max(0, num));
  }

  const m = computeAdvisoryFeeMetrics();

  const bPassivo = document.getElementById('badge-fee-passivo');
  if (bPassivo) bPassivo.textContent = `R$ ${formatNumberBR(m.passivoMM)} MM`;
  const bCredExp = document.getElementById('badge-fee-cred-exp');
  if (bCredExp) bCredExp.textContent = `R$ ${formatNumberBR(m.creditorExposureMM)} MM`;
  const bBasis = document.getElementById('badge-fee-basis');
  if (bBasis) bBasis.textContent = `R$ ${m.baseCalculoMM.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} MM`;
  const bHaircut = document.getElementById('badge-fee-haircut');
  if (bHaircut) bHaircut.textContent = `Recup. Implícita: ${m.recupPct}%`;
  const bEconSub = document.getElementById('sub-fee-economia');
  if (bEconSub) {
    bEconSub.innerHTML = modelFeeBasis === 'credito_recuperado'
      ? `<span>Exposição Credor: <strong>R$ ${m.creditorExposureMM.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}M</strong></span><span>Recuperado Credor: <strong>R$ ${m.creditorRecoveredMM.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}M</strong></span>`
      : `<span>Economia: <strong>R$ ${m.economiaMM.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}M</strong></span><span>Dívida Pós-Plano: <strong>R$ ${m.creditoRecupMM.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}M</strong></span>`;
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
  const d = getActiveModelingDeal();
  if (!d) {
    container.innerHTML = `<div style="text-align:center; padding:48px; color:var(--text-muted);">Carregando base de casos...</div>`;
    return;
  }

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
          ${selectedTier0CalcTarget ? `<option value="tier0" selected>[Tier 0] ${escapeHtml(selectedTier0CalcTarget.empresa)} (R$ ${formatNumberBR(selectedTier0CalcTarget.passivo_mm)} MM)</option>` : ''}
          ${DEALS_DATA.map(item => `
            <option value="${item.id}" ${!selectedTier0CalcTarget && item.id === d.id ? 'selected' : ''}>
              #${item.id} — ${escapeHtml(item.empresa)} (R$ ${formatNumberBR(item.passivo_mm)} MM)
            </option>
          `).join('')}
        </select>
        ${!selectedTier0CalcTarget && d.id ? `<button class="header-pill-btn btn-xlsx" onclick="openDossier(${d.id})">📄 Ver Tear Sheet</button>` : ''}
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

  const m = computeAdvisoryFeeMetrics();

  container.innerHTML = selectorBar + `
    <div class="calc-layout-grid">
      <div class="calc-controls-panel">
        <div style="font-family:var(--font-mono); font-size:11px; font-weight:800; color:var(--vk-header-start); text-transform:uppercase; margin-bottom:14px; padding-bottom:8px; border-bottom:1px solid var(--border-light);">
          Parâmetros Digitáveis do Mandato (Retainer &amp; Success Fee)
        </div>

        <div class="calc-field-group">
          <div class="calc-field-label">
            <span>1. Passivo Total da Devedora (R$ MM)</span>
            <span class="val-badge" id="badge-fee-passivo">R$ ${formatNumberBR(m.passivoMM)} MM</span>
          </div>
          <input type="text" inputmode="decimal" class="calc-num-input" value="${m.passivoMM}" oninput="updateSimpleCalcLive('passivo', this.value)">
        </div>

        <div class="calc-field-group">
          <div class="calc-field-label">
            <span>2. Base de Cálculo do Success Fee</span>
            <span class="val-badge" id="badge-fee-basis">R$ ${m.baseCalculoMM.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} MM</span>
          </div>
          <select class="clean-select" style="width:100%;" onchange="updateSimpleCalcLive('basis', this.value)">
            <option value="passivo_total" ${modelFeeBasis === 'passivo_total' ? 'selected' : ''}>Debtor-Side: Sobre Passivo Total Reestruturado (100% da Dívida)</option>
            <option value="haircut_economia" ${modelFeeBasis === 'haircut_economia' ? 'selected' : ''}>Debtor-Side: Sobre Economia / Redução de Dívida Obtida (Haircut)</option>
            <option value="credito_recuperado" ${modelFeeBasis === 'credito_recuperado' ? 'selected' : ''}>Creditor-Side: Sobre Crédito Efetivamente Recuperado pelo Credor</option>
          </select>
        </div>

        <div class="calc-field-group" id="creditorExposureFieldWrap" style="display:${modelFeeBasis === 'credito_recuperado' ? 'block' : 'none'};">
          <div class="calc-field-label">
            <span>2B. Exposição do Credor / Pool Assessorado (R$ MM)</span>
            <span class="val-badge" id="badge-fee-cred-exp">R$ ${formatNumberBR(m.creditorExposureMM)} MM</span>
          </div>
          <input type="text" inputmode="decimal" class="calc-num-input" value="${m.creditorExposureMM}" oninput="updateSimpleCalcLive('creditor_exposure', this.value)">
        </div>

        <div class="calc-field-group">
          <div class="calc-field-label">
            <span>3. Haircut / Deságio Estimado (% Digitável)</span>
            <span class="val-badge" id="badge-fee-haircut">Recup. Implícita: ${m.recupPct}%</span>
          </div>
          <div class="pct-input-wrap">
            <input type="text" inputmode="decimal" class="calc-num-input" value="${m.haircutPct}" oninput="updateSimpleCalcLive('haircut', this.value)">
            <span class="pct-suffix">%</span>
          </div>
          <div id="sub-fee-economia" style="display:flex; justify-content:space-between; font-family:var(--font-mono); font-size:10px; color:var(--text-muted); margin-top:5px;">
            ${modelFeeBasis === 'credito_recuperado'
              ? `<span>Exposição Credor: <strong>R$ ${m.creditorExposureMM.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}M</strong></span><span>Recuperado Credor: <strong>R$ ${m.creditorRecoveredMM.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}M</strong></span>`
              : `<span>Economia: <strong>R$ ${m.economiaMM.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}M</strong></span><span>Dívida Pós-Plano: <strong>R$ ${m.creditoRecupMM.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}M</strong></span>`}
          </div>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
          <div class="calc-field-group">
            <div class="calc-field-label">
              <span>4. Retainer (R$ mil/mês)</span>
              <span class="val-badge" id="badge-fee-retainer">R$ ${m.retainerMensalMil}k/mês</span>
            </div>
            <input type="text" inputmode="decimal" class="calc-num-input" value="${m.retainerMensalMil}" oninput="updateSimpleCalcLive('retainer', this.value)">
          </div>

          <div class="calc-field-group">
            <div class="calc-field-label">
              <span>5. Prazo (Meses)</span>
              <span class="val-badge" id="badge-fee-meses">${m.mesesMandato} meses</span>
            </div>
            <input type="text" inputmode="numeric" class="calc-num-input" value="${m.mesesMandato}" oninput="updateSimpleCalcLive('meses', this.value)">
          </div>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
          <div class="calc-field-group">
            <div class="calc-field-label">
              <span>6. Success Fee (% Digitável)</span>
              <span class="val-badge" id="badge-fee-success">Bruto: R$ ${m.successBrutoMM.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}M</span>
            </div>
            <div class="pct-input-wrap">
              <input type="text" inputmode="decimal" class="calc-num-input" value="${m.successFeePct}" oninput="updateSimpleCalcLive('success_pct', this.value)">
              <span class="pct-suffix">%</span>
            </div>
          </div>

          <div class="calc-field-group">
            <div class="calc-field-label">
              <span>7. Offset Retainer (% Digitável)</span>
              <span class="val-badge" id="badge-fee-offset">Deduz: R$ ${m.offsetDeduzidoMM.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}M</span>
            </div>
            <div class="pct-input-wrap">
              <input type="text" inputmode="decimal" class="calc-num-input" value="${m.offsetPct}" oninput="updateSimpleCalcLive('offset_pct', this.value)">
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

  scheduleChartInit(() => drawFeeCalculatorChart(m), 20);
}

// ==========================================================================
// SUB-MÓDULO 2: Waterfall de Classes (RJ vs. Falência — Lei 11.101/05 & Lei 14.112/20)
// ==========================================================================
function computeWaterfallMetrics(d) {
  const targetDeal = d || getActiveModelingDeal() || { id: 0, empresa: 'Caso em Modelagem', passivo_mm: 100 };
  const passivoTotal = Math.max(0.1, Number(modelCustomPassivo || targetDeal.passivo_mm || 100));
  const evBruto = Math.max(0, Number(modelEvAtivos || 0));
  const liqDisc = Math.min(99, Math.max(0, Number(modelLiqDiscountPct || 0)));
  const massaLiquida = Number((evBruto * (1 - liqDisc / 100.0)).toFixed(2));

  const pctExtra = Math.max(0, Number(waterfallSplitPcts.extra ?? 0));
  const pctFiscal = Math.max(0, Number(waterfallSplitPcts.fiscal ?? 0));
  const pctC1 = Math.max(0, Number(waterfallSplitPcts.c1 ?? 0));
  const pctC2 = Math.max(0, Number(waterfallSplitPcts.c2 ?? 0));
  const pctC3 = Math.max(0, Number(waterfallSplitPcts.c3 ?? 0));
  const pctC4 = Math.max(0, Number(waterfallSplitPcts.c4 ?? 0));
  const totalSplitPct = Math.round((pctExtra + pctFiscal + pctC1 + pctC2 + pctC3 + pctC4) * 10) / 10;

  const cExtra = Number(((passivoTotal * pctExtra) / 100.0).toFixed(2));
  const cFiscal = Number(((passivoTotal * pctFiscal) / 100.0).toFixed(2));
  const c1 = Number(((passivoTotal * pctC1) / 100.0).toFixed(2));
  const c2 = Number(((passivoTotal * pctC2) / 100.0).toFixed(2));
  const c3 = Number(((passivoTotal * pctC3) / 100.0).toFixed(2));
  const c4 = Number(((passivoTotal * pctC4) / 100.0).toFixed(2));

  // Ordem legal estrita na Liquidação Forçada / Falência (Lei 14.112/20 Arts. 49 §3º, 83 e 84):
  // 1º Extraconcursal / Fiduciário (Arts. 49 §3º e 84) -> 2º Classe I (Art. 83, I) -> 3º Classe II (Art. 83, II)
  // -> 4º Fiscal / Tributário ANTES dos quirografários (Art. 83, III) -> 5º Classe III + IV PARI PASSU (Art. 83, VI)
  let rem = massaLiquida;
  const payExtra = Number(Math.min(rem, cExtra).toFixed(2));
  rem = Math.max(0, Number((rem - payExtra).toFixed(2)));

  const payC1 = Number(Math.min(rem, c1).toFixed(2));
  rem = Math.max(0, Number((rem - payC1).toFixed(2)));

  const payC2 = Number(Math.min(rem, c2).toFixed(2));
  rem = Math.max(0, Number((rem - payC2).toFixed(2)));

  const payFiscal = Number(Math.min(rem, cFiscal).toFixed(2));
  rem = Math.max(0, Number((rem - payFiscal).toFixed(2)));

  const unsecuredPoolClaim = Number((c3 + c4).toFixed(2));
  let payC3 = 0;
  let payC4 = 0;
  if (unsecuredPoolClaim > 0 && rem > 0) {
    if (rem >= unsecuredPoolClaim) {
      payC3 = c3;
      payC4 = c4;
      rem = Math.max(0, Number((rem - unsecuredPoolClaim).toFixed(2)));
    } else {
      payC3 = Number((rem * (c3 / unsecuredPoolClaim)).toFixed(2));
      payC4 = Math.max(0, Number((rem - payC3).toFixed(2)));
      rem = 0;
    }
  }

  const rows = [
    { key: 'extra', order: '1º', pct: pctExtra, label: 'Extraconcursal / Fiduciário (Arts. 49 §3º e 84)', claim: cExtra, paid: payExtra, isConcursal: false },
    { key: 'c1', order: '2º', pct: pctC1, label: 'Classe I — Trabalhista (Art. 83, I)', claim: c1, paid: payC1, isConcursal: true },
    { key: 'c2', order: '3º', pct: pctC2, label: 'Classe II — Garantia Real (Art. 83, II)', claim: c2, paid: payC2, isConcursal: true },
    { key: 'fiscal', order: '4º', pct: pctFiscal, label: 'Fiscal / Tributário — PGFN (Art. 83, III / Art. 6º §7º-B)', claim: cFiscal, paid: payFiscal, isConcursal: false },
    { key: 'c3', order: '5º (Pari Passu)', pct: pctC3, label: 'Classe III — Quirografários (Art. 83, VI — Pari Passu)', claim: c3, paid: payC3, isConcursal: true },
    { key: 'c4', order: '5º (Pari Passu)', pct: pctC4, label: 'Classe IV — ME / EPP (Art. 83, VI — Pari Passu c/ Cl. III)', claim: c4, paid: payC4, isConcursal: true }
  ];

  const totalClaimsAll = Number((cExtra + cFiscal + c1 + c2 + c3 + c4).toFixed(2));
  const totalClaimsConcursais = Number((c1 + c2 + c3 + c4).toFixed(2));
  const totalRecovered = Number((payExtra + payFiscal + payC1 + payC2 + payC3 + payC4).toFixed(2));
  const totalRecoveredConcursal = Number((payC1 + payC2 + payC3 + payC4).toFixed(2));

  const globalRecupPct = passivoTotal > 0 ? Math.min(100, Math.round((totalRecovered / passivoTotal) * 1000) / 10) : 0;
  const concursalRecupPct = totalClaimsConcursais > 0 ? Math.min(100, Math.round((totalRecoveredConcursal / totalClaimsConcursais) * 1000) / 10) : 0;

  return {
    passivoTotal, evBruto, liqDisc, massaLiquida, rows,
    totalClaimsAll, totalClaimsConcursais, totalRecovered, totalRecoveredConcursal,
    globalRecupPct, concursalRecupPct, totalSplitPct
  };
}
const computeWaterfallModel = computeWaterfallMetrics;

function normalizeWaterfallSplitTo100() {
  waterfallSplitPcts = { ...reconcileSixBucketSplit(waterfallSplitPcts) };
  renderSectionContent();
  showToast('Estrutura de capital reconciliada proporcionalmente para 100,0%!');
}

function buildWaterfallRightPaneHtml(wf) {
  let fulcrumClass = 'N/A (Cobertura Integral)';
  const partialLabels = [];
  for (const r of wf.rows) {
    if (r.claim <= 0) continue;
    const recPct = (r.paid / r.claim) * 100;
    if (recPct < 99.95 && recPct > 0.05) {
      partialLabels.push(r.label.split('—')[0].split('(')[0].trim());
    }
  }
  if (partialLabels.length > 0) {
    fulcrumClass = partialLabels.join(' + ');
  } else {
    const firstZero = wf.rows.find(r => r.claim > 0 && r.paid <= 0);
    if (firstZero) fulcrumClass = firstZero.label.split('—')[0].split('(')[0].trim();
  }

  const splitDiff = Math.round((wf.totalSplitPct - 100) * 10) / 10;
  const splitAlertBanner = Math.abs(splitDiff) >= 0.1
    ? `<div role="alert" style="margin-bottom:12px; padding:10px 14px; background:#FEF2F2; border:1px solid #FECDD3; border-left:4px solid #9F1239; border-radius:6px; font-size:12px; color:#9F1239; display:flex; justify-content:space-between; align-items:center; gap:10px; flex-wrap:wrap;">
         <span><strong>⚠️ Alerta de Reconciliação de Classes:</strong> Soma atual das 6 faixas = <strong>${String(wf.totalSplitPct).replace('.', ',')}%</strong> (${splitDiff > 0 ? `+${String(splitDiff).replace('.', ',')}% acima` : `${String(splitDiff).replace('.', ',')}% abaixo`} de 100%).</span>
         <div style="display:flex; align-items:center; gap:8px;">
           <span class="status-badge badge-cautelar">Soma: ${String(wf.totalSplitPct).replace('.', ',')}%</span>
           <button type="button" class="btn-action" style="padding:4px 10px; font-size:11px;" onclick="normalizeWaterfallSplitTo100()">Reconciliar p/ 100%</button>
         </div>
       </div>`
    : `<div style="margin-bottom:12px; padding:8px 14px; background:#F0FDF4; border:1px solid #BBF7D0; border-left:4px solid #065F46; border-radius:6px; font-size:11.5px; color:#065F46; display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
         <span>✓ Estrutura de capital 100% reconciliada (6 faixas: Extraconcursal + Fiscal + Classes I a IV = R$ ${formatNumberBR(wf.passivoTotal)} MM) sob Lei 14.112/20 (Arts. 83 e 84).</span>
         <span class="status-badge badge-upi">Soma: 100%</span>
       </div>`;

  return `
    ${splitAlertBanner}
    <div class="calc-results-strip" style="grid-template-columns:repeat(4,1fr);">
      <div class="calc-res-card">
        <div class="calc-res-label">Ativos (EV) &amp; Massa Líquida</div>
        <div class="calc-res-val">R$ ${formatNumberBR(wf.massaLiquida)} MM</div>
        <div class="calc-res-sub">EV R$ ${formatNumberBR(wf.evBruto)}M (&minus;${wf.liqDisc}% deságio forçado)</div>
      </div>
      <div class="calc-res-card">
        <div class="calc-res-label">Recup. Global (s/ Passivo Total)</div>
        <div class="calc-res-val" style="color:#065F46;">${wf.globalRecupPct.toFixed(1).replace('.', ',')}%</div>
        <div class="calc-res-sub">R$ ${formatNumberBR(wf.totalRecovered)}M de R$ ${formatNumberBR(wf.passivoTotal)}M totais</div>
      </div>
      <div class="calc-res-card">
        <div class="calc-res-label">Recup. Concursal (Classes I–IV)</div>
        <div class="calc-res-val" style="color:var(--vk-header-start);">${wf.concursalRecupPct.toFixed(1).replace('.', ',')}%</div>
        <div class="calc-res-sub">R$ ${formatNumberBR(wf.totalRecoveredConcursal)}M de R$ ${formatNumberBR(wf.totalClaimsConcursais)}M concursais</div>
      </div>
      <div class="calc-res-card">
        <div class="calc-res-label">Classe Fulcrum (Corte de Valor)</div>
        <div class="calc-res-val" style="font-size:14.5px; color:var(--vk-teal);">${escapeHtml(fulcrumClass)}</div>
        <div class="calc-res-sub">Onde a massa líquida se esgota</div>
      </div>
    </div>

    <div class="table-wrap">
      <table class="clean-table">
        <thead>
          <tr>
            <th style="text-align:center;">Ordem Legal</th>
            <th>Faixa / Classe (Lei 14.112/20)</th>
            <th style="text-align:right;">% Passivo</th>
            <th style="text-align:right;">Crédito (R$ MM)</th>
            <th style="text-align:right;">Recuperado (R$ MM)</th>
            <th style="text-align:right;">% Recuperação</th>
            <th style="text-align:right;">% Haircut</th>
            <th style="text-align:center;">Status na Cascata</th>
          </tr>
        </thead>
        <tbody>
          ${wf.rows.map(r => {
            const recPct = r.claim > 0 ? Math.round((r.paid / r.claim) * 1000) / 10 : 100;
            const hPct = Math.max(0, Math.round((100 - recPct) * 10) / 10);
            const statusTag = r.claim <= 0
              ? '<span class="status-badge" style="background:#F1F5F9; color:#64748B;">SEM SALDO (0%)</span>'
              : (recPct >= 99.95
                ? '<span class="status-badge badge-upi">INTEGRAL (100%)</span>'
                : (recPct > 0 ? '<span class="status-badge badge-prj">CLASSE FULCRUM</span>' : '<span class="status-badge badge-cautelar">ZERO RECUP. (0%)</span>'));
            return `
              <tr>
                <td style="text-align:center; font-family:var(--font-mono); font-size:11px; color:var(--text-secondary);">${escapeHtml(r.order)}</td>
                <td><strong>${escapeHtml(r.label)}</strong></td>
                <td style="text-align:right; font-family:var(--font-mono); color:var(--text-secondary);">${String(r.pct).replace('.', ',')}%</td>
                <td style="text-align:right; font-family:var(--font-mono);">R$ ${formatNumberBR(r.claim)} MM</td>
                <td style="text-align:right; font-family:var(--font-mono); font-weight:700; color:#065F46;">R$ ${formatNumberBR(r.paid)} MM</td>
                <td style="text-align:right; font-family:var(--font-mono); font-weight:800;">${r.claim > 0 ? `${recPct.toFixed(1).replace('.', ',')}%` : '—'}</td>
                <td style="text-align:right; font-family:var(--font-mono); color:#9F1239;">${r.claim > 0 ? `${hPct.toFixed(1).replace('.', ',')}%` : '—'}</td>
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
  const num = parseNonDestructiveDecimal(val);
  if (num === null) return;
  if (field === 'ev') modelEvAtivos = Math.max(0, num);
  else if (field === 'liq_disc') modelLiqDiscountPct = Math.min(99, Math.max(0, num));
  else if (field in waterfallSplitPcts) waterfallSplitPcts[field] = Math.min(100, Math.max(0, num));

  const d = getActiveModelingDeal();
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
          Parâmetros de Ativos &amp; Liquidação Forçada (Lei 14.112/20)
        </div>

        <div class="calc-field-group">
          <div class="calc-field-label">
            <span>1. Valor Estimado dos Ativos / EV (R$ MM)</span>
            <span class="val-badge" id="badge-wf-ev">R$ ${formatNumberBR(wf.evBruto)} MM</span>
          </div>
          <input type="text" inputmode="decimal" class="calc-num-input" value="${wf.evBruto}" oninput="updateWaterfallLive('ev', this.value)">
        </div>

        <div class="calc-field-group">
          <div class="calc-field-label">
            <span>2. Deságio de Liquidação Forçada (%)</span>
            <span class="val-badge" id="badge-wf-disc">${wf.liqDisc}%</span>
          </div>
          <div class="pct-input-wrap">
            <input type="text" inputmode="decimal" class="calc-num-input" value="${wf.liqDisc}" oninput="updateWaterfallLive('liq_disc', this.value)">
            <span class="pct-suffix">%</span>
          </div>
        </div>

        <div style="background:#FFFFFF; border:1px solid var(--border-light); border-left:3px solid var(--vk-header-start); border-radius:6px; padding:10px 12px; margin-bottom:14px; font-size:12px; display:flex; justify-content:space-between; align-items:center;">
          <strong>Massa Líquida Distribuível:</strong>
          <span id="badge-wf-massa" style="font-family:var(--font-mono); font-weight:800; font-size:13.5px; color:var(--vk-header-start);">R$ ${formatNumberBR(wf.massaLiquida)} MM</span>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; padding-top:6px; border-top:1px dashed var(--border-medium);">
          <span style="font-family:var(--font-mono); font-size:10.5px; font-weight:800; color:var(--text-secondary); text-transform:uppercase;">
            Estrutura de Capital — 6 Faixas (% Digitável)
          </span>
          <button type="button" class="btn-action" style="padding:2px 8px; font-size:10.5px;" onclick="normalizeWaterfallSplitTo100()">100%</button>
        </div>

        <div class="wf-grid-responsive">
          <div class="calc-field-group" style="margin-bottom:6px;">
            <div class="calc-field-label"><span>Extraconcursal / Fid. (%)</span></div>
            <div class="pct-input-wrap">
              <input type="text" inputmode="decimal" class="calc-num-input" value="${waterfallSplitPcts.extra}" oninput="updateWaterfallLive('extra', this.value)">
              <span class="pct-suffix">%</span>
            </div>
          </div>
          <div class="calc-field-group" style="margin-bottom:6px;">
            <div class="calc-field-label"><span>Fiscal / Trib. (Art. 83 III)</span></div>
            <div class="pct-input-wrap">
              <input type="text" inputmode="decimal" class="calc-num-input" value="${waterfallSplitPcts.fiscal}" oninput="updateWaterfallLive('fiscal', this.value)">
              <span class="pct-suffix">%</span>
            </div>
          </div>
          <div class="calc-field-group" style="margin-bottom:6px;">
            <div class="calc-field-label"><span>Classe I Trab. (%)</span></div>
            <div class="pct-input-wrap">
              <input type="text" inputmode="decimal" class="calc-num-input" value="${waterfallSplitPcts.c1}" oninput="updateWaterfallLive('c1', this.value)">
              <span class="pct-suffix">%</span>
            </div>
          </div>
          <div class="calc-field-group" style="margin-bottom:6px;">
            <div class="calc-field-label"><span>Classe II Real (%)</span></div>
            <div class="pct-input-wrap">
              <input type="text" inputmode="decimal" class="calc-num-input" value="${waterfallSplitPcts.c2}" oninput="updateWaterfallLive('c2', this.value)">
              <span class="pct-suffix">%</span>
            </div>
          </div>
          <div class="calc-field-group" style="margin-bottom:6px;">
            <div class="calc-field-label"><span>Classe III Quirog. (%)</span></div>
            <div class="pct-input-wrap">
              <input type="text" inputmode="decimal" class="calc-num-input" value="${waterfallSplitPcts.c3}" oninput="updateWaterfallLive('c3', this.value)">
              <span class="pct-suffix">%</span>
            </div>
          </div>
          <div class="calc-field-group" style="margin-bottom:6px;">
            <div class="calc-field-label"><span>Classe IV ME/EPP (%)</span></div>
            <div class="pct-input-wrap">
              <input type="text" inputmode="decimal" class="calc-num-input" value="${waterfallSplitPcts.c4}" oninput="updateWaterfallLive('c4', this.value)">
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
// SUB-MÓDULO 3: Simulador de Quórum AGC & Cram Down (Art. 45 e Art. 58, §1º)
// ==========================================================================
function computeQuorumMetrics(d) {
  const targetDeal = d || getActiveModelingDeal() || { id: 0, empresa: 'Caso em Modelagem', passivo_mm: 100 };
  const passivoTotal = Math.max(0.1, Number(modelCustomPassivo || targetDeal.passivo_mm || 100));

  const rawC1 = Math.max(0, Number(waterfallSplitPcts.c1 ?? 3));
  const rawC2 = Math.max(0, Number(waterfallSplitPcts.c2 ?? 42));
  const rawC3 = Math.max(0, Number(waterfallSplitPcts.c3 ?? 27));
  const rawC4 = Math.max(0, Number(waterfallSplitPcts.c4 ?? 3));
  const concursalSum = rawC1 + rawC2 + rawC3 + rawC4;

  const allZero = concursalSum <= 0;
  const activeC1 = allZero || rawC1 > 0;
  const activeC2 = allZero || rawC2 > 0;
  const activeC3 = allZero || rawC3 > 0;
  const activeC4 = allZero || rawC4 > 0;

  const c1ValYes = Number(agcVotes.c1_val_yes ?? agcVotes.c1_head_yes ?? 0);
  const c1HeadYes = Number(agcVotes.c1_head_yes ?? 0);
  const c2ValYes = Number(agcVotes.c2_val_yes ?? 0);
  const c2HeadYes = Number(agcVotes.c2_head_yes ?? 0);
  const c3ValYes = Number(agcVotes.c3_val_yes ?? 0);
  const c3HeadYes = Number(agcVotes.c3_head_yes ?? 0);
  const c4ValYes = Number(agcVotes.c4_val_yes ?? agcVotes.c4_head_yes ?? 0);
  const c4HeadYes = Number(agcVotes.c4_head_yes ?? 0);

  // Quórum Ordinário (Art. 45 §§1º e 2º): Classes I e IV (>50% cabeça); Classes II e III (>50% valor E >50% cabeça)
  const c1Ok = c1HeadYes > 50;
  const c2Ok = c2ValYes > 50 && c2HeadYes > 50;
  const c3Ok = c3ValYes > 50 && c3HeadYes > 50;
  const c4Ok = c4HeadYes > 50;

  const activeFlags = [
    { key: 'c1', active: activeC1, ok: c1Ok },
    { key: 'c2', active: activeC2, ok: c2Ok },
    { key: 'c3', active: activeC3, ok: c3Ok },
    { key: 'c4', active: activeC4, ok: c4Ok }
  ];
  const votingClassesCount = activeFlags.filter(x => x.active).length;
  const classesApproved = activeFlags.filter(x => x.active && x.ok).length;
  const ordinaryApproved = votingClassesCount > 0 && classesApproved === votingClassesCount;

  // Cram Down — Art. 58, §1º, I a III:
  // I - voto favorável > 50% do VALOR de todos os créditos presentes à AGC;
  // II - aprovação de 3 das 4 classes (ou 2 de 3; ou 1 de 2);
  // III - na classe dissidente, > 1/3 (33,333...%) computado conforme §§1º e 2º do Art. 45.
  const wC1 = concursalSum > 0 ? rawC1 / concursalSum : 0.05;
  const wC2 = concursalSum > 0 ? rawC2 / concursalSum : 0.45;
  const wC3 = concursalSum > 0 ? rawC3 / concursalSum : 0.45;
  const wC4 = concursalSum > 0 ? rawC4 / concursalSum : 0.05;

  const weightedValVotePct = Number((
    c1ValYes * wC1 +
    c2ValYes * wC2 +
    c3ValYes * wC3 +
    c4ValYes * wC4
  ).toFixed(2));

  const cramDownReqI = weightedValVotePct > 50;
  const requiredClassesForCramDown = votingClassesCount >= 4 ? 3 : (votingClassesCount === 3 ? 2 : 1);
  const cramDownReqII = classesApproved >= requiredClassesForCramDown;

  const ONE_THIRD = 100 / 3;
  const c1PassThird = !activeC1 || c1Ok || c1HeadYes > ONE_THIRD;
  const c2PassThird = !activeC2 || c2Ok || (c2ValYes > ONE_THIRD && c2HeadYes > ONE_THIRD);
  const c3PassThird = !activeC3 || c3Ok || (c3ValYes > ONE_THIRD && c3HeadYes > ONE_THIRD);
  const c4PassThird = !activeC4 || c4Ok || c4HeadYes > ONE_THIRD;
  const rejectedClassesPassOneThird = c1PassThird && c2PassThird && c3PassThird && c4PassThird;

  const cramDownEligible = !ordinaryApproved && cramDownReqI && cramDownReqII && rejectedClassesPassOneThird;

  const c2ClaimMM = Math.round(passivoTotal * (rawC2 / 100.0));
  const c3ClaimMM = Math.round(passivoTotal * (rawC3 / 100.0));
  const blockingC2MM = Math.round(c2ClaimMM * (2 / 3));
  const blockingC3MM = Math.round(c3ClaimMM * (2 / 3));

  return {
    c1Ok, c2Ok, c3Ok, c4Ok,
    activeC1, activeC2, activeC3, activeC4,
    c1ValYes, c1HeadYes, c2ValYes, c2HeadYes, c3ValYes, c3HeadYes, c4ValYes, c4HeadYes,
    c1PassThird, c2PassThird, c3PassThird, c4PassThird,
    votingClassesCount, requiredClassesForCramDown, classesApproved, ordinaryApproved,
    weightedValVotePct, cramDownReqI, cramDownReqII, rejectedClassesPassOneThird, cramDownEligible,
    c2ClaimMM, c3ClaimMM, blockingC2MM, blockingC3MM
  };
}

function buildQuorumRightPaneHtml(d, q) {
  const ONE_THIRD = 100 / 3;
  const classRows = [
    {
      nome: 'Classe I — Trabalhista (Art. 45, §2º)',
      active: q.activeC1,
      regra: 'Maioria simples (> 50%) por Cabeça (Valor compõe Art. 58 §1º, I)',
      votoValor: `${q.c1ValYes}%`,
      votoCabeca: `${q.c1HeadYes}%`,
      cramDownMin: !q.activeC1 ? 'Sem créditos' : (q.c1HeadYes > ONE_THIRD ? 'Atende (> 33,33%)' : 'Bloqueia (&le; 33,33%)'),
      ok: q.c1Ok
    },
    {
      nome: 'Classe II — Garantia Real (Art. 45, §1º)',
      active: q.activeC2,
      regra: 'Dupla maioria (> 50% Valor E > 50% Cabeça)',
      votoValor: `${q.c2ValYes}%`,
      votoCabeca: `${q.c2HeadYes}%`,
      cramDownMin: !q.activeC2 ? 'Sem créditos' : ((q.c2ValYes > ONE_THIRD && q.c2HeadYes > ONE_THIRD) ? 'Atende (> 33,33%)' : 'Bloqueia (&le; 33,33%)'),
      ok: q.c2Ok
    },
    {
      nome: 'Classe III — Quirografários (Art. 45, §1º)',
      active: q.activeC3,
      regra: 'Dupla maioria (> 50% Valor E > 50% Cabeça)',
      votoValor: `${q.c3ValYes}%`,
      votoCabeca: `${q.c3HeadYes}%`,
      cramDownMin: !q.activeC3 ? 'Sem créditos' : ((q.c3ValYes > ONE_THIRD && q.c3HeadYes > ONE_THIRD) ? 'Atende (> 33,33%)' : 'Bloqueia (&le; 33,33%)'),
      ok: q.c3Ok
    },
    {
      nome: 'Classe IV — ME e EPP (Art. 45, §2º)',
      active: q.activeC4,
      regra: 'Maioria simples (> 50%) por Cabeça (Valor compõe Art. 58 §1º, I)',
      votoValor: `${q.c4ValYes}%`,
      votoCabeca: `${q.c4HeadYes}%`,
      cramDownMin: !q.activeC4 ? 'Sem créditos' : (q.c4HeadYes > ONE_THIRD ? 'Atende (> 33,33%)' : 'Bloqueia (&le; 33,33%)'),
      ok: q.c4Ok
    }
  ];

  let cramBlockReason = `Exige >= ${q.requiredClassesForCramDown}/${q.votingClassesCount} classes + >50% valor + >1/3 dissidente`;
  if (!q.ordinaryApproved && !q.cramDownEligible) {
    const reasons = [];
    if (!q.cramDownReqI) reasons.push(`Inc. I: valor ${q.weightedValVotePct.toFixed(1).replace('.', ',')}% <= 50%`);
    if (!q.cramDownReqII) reasons.push(`Inc. II: ${q.classesApproved}/${q.votingClassesCount} classes (mín. ${q.requiredClassesForCramDown})`);
    if (!q.rejectedClassesPassOneThird) reasons.push('Inc. III: dissidente <= 1/3');
    cramBlockReason = reasons.join(' • ');
  }

  return `
    <div class="calc-results-strip" style="grid-template-columns:repeat(4,1fr);">
      <div class="calc-res-card">
        <div class="calc-res-label">Quórum Ordinário (Art. 45)</div>
        <div class="calc-res-val" style="color:${q.ordinaryApproved ? '#065F46' : '#9F1239'};">${q.ordinaryApproved ? `APROVADO (${q.classesApproved}/${q.votingClassesCount})` : `REJEITADO (${q.classesApproved}/${q.votingClassesCount})`}</div>
        <div class="calc-res-sub">Unanimidade das ${q.votingClassesCount} classes votantes</div>
      </div>
      <div class="calc-res-card">
        <div class="calc-res-label">Cram Down (Art. 58, §1º, I–III)</div>
        <div class="calc-res-val" style="color:${q.cramDownEligible || q.ordinaryApproved ? '#065F46' : '#9F1239'};">${q.ordinaryApproved ? 'DESNECESSÁRIO' : (q.cramDownEligible ? `VIÁVEL (${q.classesApproved}/${q.votingClassesCount})` : 'BLOQUEADO')}</div>
        <div class="calc-res-sub">${escapeHtml(cramBlockReason)}</div>
      </div>
      <div class="calc-res-card">
        <div class="calc-res-label">Voto Geral por Valor (Inc. I)</div>
        <div class="calc-res-val" style="color:${q.cramDownReqI ? '#065F46' : '#9F1239'};">${q.weightedValVotePct.toFixed(1).replace('.', ',')}%</div>
        <div class="calc-res-sub">Ponderado nas classes concursais (&gt; 50,0%)</div>
      </div>
      <div class="calc-res-card">
        <div class="calc-res-label">Minoria de Bloqueio (Veto 2/3)</div>
        <div class="calc-res-val" style="font-size:15.5px;">Cl. II: R$ ${formatNumberBR(q.blockingC2MM)}M | Cl. III: R$ ${formatNumberBR(q.blockingC3MM)}M</div>
        <div class="calc-res-sub">&ge; 66,67% da classe barra Cram Down (Inc. III)</div>
      </div>
    </div>

    <div class="table-wrap">
      <table class="clean-table">
        <thead>
          <tr>
            <th>Classe da Assembleia (AGC)</th>
            <th>Critério Legal (Art. 45 &amp; Art. 58 §1º)</th>
            <th style="text-align:center;">% Voto Valor</th>
            <th style="text-align:center;">% Voto Cabeça</th>
            <th style="text-align:center;">Piso Cram Down (&gt; 1/3)</th>
            <th style="text-align:center;">Deliberação</th>
          </tr>
        </thead>
        <tbody>
          ${classRows.map(r => `
            <tr style="${!r.active ? 'opacity:0.55;' : ''}">
              <td><strong>${r.nome}</strong></td>
              <td style="font-size:11.5px; color:var(--text-secondary);">${r.regra}</td>
              <td style="text-align:center; font-family:var(--font-mono); font-weight:700;">${r.votoValor}</td>
              <td style="text-align:center; font-family:var(--font-mono); font-weight:700;">${r.votoCabeca}</td>
              <td style="text-align:center; font-family:var(--font-mono); font-size:11px;">${r.cramDownMin}</td>
              <td style="text-align:center;">
                ${!r.active
                  ? '<span class="status-badge" style="background:#F1F5F9; color:#64748B;">INATIVA (0%)</span>'
                  : (r.ok
                    ? '<span class="status-badge badge-upi">APROVADA (&gt; 50%)</span>'
                    : '<span class="status-badge badge-cautelar">REJEITADA (&le; 50%)</span>')}
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function updateQuorumLive(field, val) {
  const num = parseNonDestructiveDecimal(val);
  if (num === null) return;
  const clamped = Math.min(100, Math.max(0, num));
  agcVotes[field] = clamped;

  const d = getActiveModelingDeal();
  const q = computeQuorumMetrics(d);

  const b1 = document.getElementById('badge-q-c1');
  if (b1) b1.textContent = !q.activeC1 ? 'INATIVA' : (q.c1Ok ? 'APROVADA' : 'REJEITADA');
  const b2 = document.getElementById('badge-q-c2');
  if (b2) b2.textContent = !q.activeC2 ? 'INATIVA' : (q.c2Ok ? 'APROVADA' : 'REJEITADA');
  const b3 = document.getElementById('badge-q-c3');
  if (b3) b3.textContent = !q.activeC3 ? 'INATIVA' : (q.c3Ok ? 'APROVADA' : 'REJEITADA');
  const b4 = document.getElementById('badge-q-c4');
  if (b4) b4.textContent = !q.activeC4 ? 'INATIVA' : (q.c4Ok ? 'APROVADA' : 'REJEITADA');

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
          Simulação de Votos por Classe (Art. 45 &amp; Art. 58, §1º)
        </div>

        <div class="quorum-class-box">
          <div class="quorum-class-header">
            <span>Classe I — Trabalhista</span>
            <span class="val-badge" id="badge-q-c1">${!q.activeC1 ? 'INATIVA' : (q.c1Ok ? 'APROVADA' : 'REJEITADA')}</span>
          </div>
          <div class="quorum-grid-responsive">
            <div>
              <div class="calc-field-label"><span>% Cabeça (Art. 45 §2º)</span></div>
              <div class="pct-input-wrap">
                <input type="text" inputmode="decimal" class="calc-num-input" value="${agcVotes.c1_head_yes}" oninput="updateQuorumLive('c1_head_yes', this.value)">
                <span class="pct-suffix">%</span>
              </div>
            </div>
            <div>
              <div class="calc-field-label"><span>% Valor (Art. 58 §1º, I)</span></div>
              <div class="pct-input-wrap">
                <input type="text" inputmode="decimal" class="calc-num-input" value="${agcVotes.c1_val_yes}" oninput="updateQuorumLive('c1_val_yes', this.value)">
                <span class="pct-suffix">%</span>
              </div>
            </div>
          </div>
        </div>

        <div class="quorum-class-box">
          <div class="quorum-class-header">
            <span>Classe II — Garantia Real</span>
            <span class="val-badge" id="badge-q-c2">${!q.activeC2 ? 'INATIVA' : (q.c2Ok ? 'APROVADA' : 'REJEITADA')}</span>
          </div>
          <div class="quorum-grid-responsive">
            <div>
              <div class="calc-field-label"><span>% por Valor</span></div>
              <div class="pct-input-wrap">
                <input type="text" inputmode="decimal" class="calc-num-input" value="${agcVotes.c2_val_yes}" oninput="updateQuorumLive('c2_val_yes', this.value)">
                <span class="pct-suffix">%</span>
              </div>
            </div>
            <div>
              <div class="calc-field-label"><span>% por Cabeça</span></div>
              <div class="pct-input-wrap">
                <input type="text" inputmode="decimal" class="calc-num-input" value="${agcVotes.c2_head_yes}" oninput="updateQuorumLive('c2_head_yes', this.value)">
                <span class="pct-suffix">%</span>
              </div>
            </div>
          </div>
        </div>

        <div class="quorum-class-box">
          <div class="quorum-class-header">
            <span>Classe III — Quirografários</span>
            <span class="val-badge" id="badge-q-c3">${!q.activeC3 ? 'INATIVA' : (q.c3Ok ? 'APROVADA' : 'REJEITADA')}</span>
          </div>
          <div class="quorum-grid-responsive">
            <div>
              <div class="calc-field-label"><span>% por Valor</span></div>
              <div class="pct-input-wrap">
                <input type="text" inputmode="decimal" class="calc-num-input" value="${agcVotes.c3_val_yes}" oninput="updateQuorumLive('c3_val_yes', this.value)">
                <span class="pct-suffix">%</span>
              </div>
            </div>
            <div>
              <div class="calc-field-label"><span>% por Cabeça</span></div>
              <div class="pct-input-wrap">
                <input type="text" inputmode="decimal" class="calc-num-input" value="${agcVotes.c3_head_yes}" oninput="updateQuorumLive('c3_head_yes', this.value)">
                <span class="pct-suffix">%</span>
              </div>
            </div>
          </div>
        </div>

        <div class="quorum-class-box" style="margin-bottom:0;">
          <div class="quorum-class-header">
            <span>Classe IV — ME / EPP</span>
            <span class="val-badge" id="badge-q-c4">${!q.activeC4 ? 'INATIVA' : (q.c4Ok ? 'APROVADA' : 'REJEITADA')}</span>
          </div>
          <div class="quorum-grid-responsive">
            <div>
              <div class="calc-field-label"><span>% Cabeça (Art. 45 §2º)</span></div>
              <div class="pct-input-wrap">
                <input type="text" inputmode="decimal" class="calc-num-input" value="${agcVotes.c4_head_yes}" oninput="updateQuorumLive('c4_head_yes', this.value)">
                <span class="pct-suffix">%</span>
              </div>
            </div>
            <div>
              <div class="calc-field-label"><span>% Valor (Art. 58 §1º, I)</span></div>
              <div class="pct-input-wrap">
                <input type="text" inputmode="decimal" class="calc-num-input" value="${agcVotes.c4_val_yes}" oninput="updateQuorumLive('c4_val_yes', this.value)">
                <span class="pct-suffix">%</span>
              </div>
            </div>
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
  const defaultCollateralBySector = {
    'Agronegócio & Silvicultura': 'Alienação Fiduciária de Terras / CPRs (Lei 13.986/20) & Silos',
    'Varejo, Consumo & Atacado': 'Travas de Recebíveis de Cartão / Pontos Comerciais & Estoques',
    'Varejo & Consumo': 'Travas de Recebíveis de Cartão / Pontos Comerciais & Estoques',
    'Indústria & Manufatura': 'Imóveis Fabris / Maquinário Pesado / Duplicatas FIDC',
    'Logística & Transporte': 'Frota Pesada / Concessões Portuárias & Contratos de Frete',
    'Energia & Infraestrutura': 'Project Finance / Cessão Fiduciária de PPAs e Recebíveis CCEE',
    'Construção, Real Estate & Incorporação': 'Patrimônio de Afetação / SPEs Imobiliárias e Terrenos (CRI)',
    'Construção Civil & Real Estate': 'Patrimônio de Afetação / SPEs Imobiliárias e Terrenos (CRI)',
    'Saúde & Hospitais': 'Recebíveis de Operadoras / Unidades Hospitalares & Diagnóstico',
    'Saúde & Farma': 'Recebíveis de Operadoras / Unidades Hospitalares & Diagnóstico',
    'TMT, Tecnologia & Serviços': 'Contratos B2B Recorrentes / Redes de Fibra & Ativos Intangíveis',
    'Tecnologia & Serviços B2B': 'Contratos B2B Recorrentes / Ativos Imobiliários Educacionais',
    'Serviços Financeiros & Crédito': 'Carteiras de Recebíveis / CCBs, FIDCs e Estruturas Securitizadas'
  };

  const baseDeals = Array.isArray(DEALS_DATA) && DEALS_DATA.length > 0 ? DEALS_DATA.filter(matchesPassivoCutoff) : [];
  const grouped = {};
  baseDeals.forEach(d => {
    const s = d.setor_macro || 'Indústria & Manufatura';
    if (!grouped[s]) grouped[s] = { setor: s, casos: 0, haircutSum: 0 };
    grouped[s].casos += 1;
    const dyn = computeDynamicRecovery(d);
    grouped[s].haircutSum += dyn.haircutPct;
  });

  const sectorBench = Object.values(grouped)
    .sort((a, b) => b.casos - a.casos)
    .map(g => {
      const haircutNum = g.casos > 0 ? Math.round(g.haircutSum / g.casos) : 55;
      const recupNum = 100 - haircutNum;
      return {
        setor: g.setor,
        casos: g.casos,
        haircutNum,
        haircutMedio: `${haircutNum}%`,
        recupMedia: `${recupNum}%`,
        garantia: defaultCollateralBySector[g.setor] || 'Garantias Reais / Cessão Fiduciária de Recebíveis & Ativos Operacionais'
      };
    });

  container.innerHTML = `
    <div class="table-wrap">
      <table class="clean-table">
        <thead>
          <tr>
            <th>Macro-Setor Oficial</th>
            <th style="text-align:center;">Casos na Base (${baseDeals.length})</th>
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
                <button class="btn-action" data-bench-setor="${escapeHtml(b.setor)}" data-bench-haircut="${b.haircutNum}" onclick="applyBenchmarkHaircutToCalc(this.getAttribute('data-bench-setor'), Number(this.getAttribute('data-bench-haircut')))">Usar ${b.haircutMedio} na Calc.</button>
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
        <button class="btn-solid" style="width:100%; justify-content:center; padding:11px; font-size:13px; margin-top:8px;" onclick="generatePitchDeckPptx('${escapeHtml(String(d.id))}')">
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

async function generatePitchDeckPptx(dealId) {
  const ok = await ensurePptxGenLoaded();
  if (!ok || typeof PptxGenJS === 'undefined') {
    showToast('Não foi possível carregar o motor PowerPoint (.pptx). Verifique sua conexão.');
    return;
  }

  let d = null;
  if (typeof selectedTier0CalcTarget !== 'undefined' && selectedTier0CalcTarget && (String(dealId) === 'tier0' || String(selectedTier0CalcTarget.id) === String(dealId))) {
    d = selectedTier0CalcTarget;
  } else if (dealId !== undefined && dealId !== null && String(dealId) !== '') {
    d = DEALS_DATA.find(x => String(x.id) === String(dealId)) || null;
  }
  if (!d) d = getActiveModelingDeal();
  if (!d) {
    showToast('Selecione um caso válido antes de gerar a apresentação.');
    return;
  }

  const safeStr = (val, fb) => {
    const s = val === undefined || val === null ? '' : String(val).trim();
    return (!s || s === 'undefined' || s === 'null') ? fb : s;
  };

  const empresaNome = safeStr(d.empresa, 'Caso em Monitoramento');
  const cnpjTxt = safeStr(d.cnpj, 'Em apuração cadastral');
  const setorTxt = safeStr(d.setor_macro, 'Corporate / Special Situations');
  const cidadeTxt = safeStr(d.cidade, 'São Paulo');
  const ufTxt = safeStr(d.uf, 'SP');
  const descEmpresa = safeStr(d.descricao_empresa, `${empresaNome} — operação monitorada pela mesa Valknut Special Situations no segmento de ${setorTxt}.`);
  const faseTxt = safeStr(d.fase, 'Sinal Precursor (Tier 0)');
  const tribunalTxt = safeStr(d.tribunal, 'Monitoramento Pré-Processual / CVM');
  const processoTxt = safeStr(d.processo, 'Monitoramento Extrajudicial / Pré-RJ');
  const tierTxt = safeStr(d.tier, 'Tier 0');
  const advTxt = safeStr(d.advocacia, 'Mandato Preventivo em Prospecção');
  const ajTxt = safeStr(d.aj, 'Não aplicável (Fase Pré-Processual)');
  const credoresTxt = safeStr(d.credores, 'Credores financeiros, mercado de capitais e fornecedores estratégicos em mapeamento.');
  const perfilPassivoTxt = safeStr(d.perfil_passivo, 'Passivo financeiro e operacional sujeito a reperfilamento estruturado.');
  const afTxt = safeStr(d.agentes_fiduciarios, 'N/A / Em levantamento de escrituras');
  const secTxt = safeStr(d.securitizadoras, 'Sem securitizadora reportada / Crédito Bancário Direto');
  const proxAcoesTxt = safeStr(d.proximas_acoes, 'Diagnóstico econômico-financeiro de caixa 13 semanas, standstill com credores-chave e estruturação de mandato.');
  const passivoNum = Number(d.passivo_mm || modelCustomPassivo || 100);
  const scoreNum = Number(d.score || 8.5);

  const parsed = parseThesisRegex(safeStr(d.tese, descEmpresa));
  const m = computeAdvisoryFeeMetrics();
  const monthNamesPt = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const isoToday = getBrazilTodayIso();
  const [yrStr, moStr] = isoToday.split('-');
  const mesAnoAtual = `${monthNamesPt[Math.max(0, (Number(moStr) || 1) - 1)]}/${yrStr}`;

  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_WIDE';
  pptx.author = 'VALKNUT — SPECIAL SITUATIONS';
  pptx.company = 'Valknut Special Situations';
  pptx.title = `Proposta Executiva - ${empresaNome}`;

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
  s1.addText(`PROPOSTA DE ASSESSORIA & DOSSIÊ EXECUTIVO:\n${empresaNome}`, { x: 0.8, y: 3.1, w: 11.5, h: 1.3, fontSize: 24, bold: true, color: 'FFFFFF' });
  s1.addText(`Ângulo: ${safeStr(pitchMandateType, 'Financial Advisory & Turnaround')}\nDestinatário: ${safeStr(pitchTargetRecipient, 'Conselho de Administração / Comitê')}\nPassivo Monitorado: R$ ${formatNumberBR(passivoNum)} Milhões | Data: ${mesAnoAtual}`, { x: 0.8, y: 4.8, w: 11, h: 1.2, fontSize: 13, color: 'E6E9DC' });

  // Slide 2: Perfil & Introdução da Empresa
  const s2 = pptx.addSlide();
  addSlideHeader(s2, `1. Perfil & Introdução da Empresa — ${empresaNome}`, `${cnpjTxt} | ${setorTxt} | ${cidadeTxt}/${ufTxt}`);
  s2.addText([
    { text: 'PERFIL OPERACIONAL & INTRODUÇÃO DA DEVEDORA:\n', options: { bold: true, color: '063630', fontSize: 13 } },
    { text: `${descEmpresa}\n\n`, options: { color: '1E293B', fontSize: 12 } },
    { text: 'DADOS PROCESSUAIS & MÉTRICAS CHAVE:\n', options: { bold: true, color: '063630', fontSize: 13 } },
    { text: `• Passivo Total Estimado: R$ ${formatNumberBR(passivoNum)} MM\n• Fase Concursal: ${faseTxt}\n• Juízo / Monitoramento: ${tribunalTxt} (Ref.: ${processoTxt})\n• Score Forense Valknut: ${formatScoreBR(scoreNum)} / 10,0 (${tierTxt})\n• Banca Jurídica: ${advTxt} | Administrador Judicial: ${ajTxt}`, options: { color: '1E293B', fontSize: 12 } }
  ], { x: 0.6, y: 1.4, w: 12.1, h: 5.2, fill: { color: 'F8FAFA' }, line: { color: 'CBD5E1', pt: 1 }, margin: 14 });

  // Slide 3: Diagnóstico Forense (3 Pilares)
  const s3 = pptx.addSlide();
  addSlideHeader(s3, '2. Diagnóstico Forense em 3 Pilares', 'Análise estruturada da causa da crise, gargalo imediato e oportunidade de mandato');
  s3.addText(`1. CAUSA DA CRISE:\n${safeStr(parsed.causa, descEmpresa)}`, { x: 0.5, y: 1.4, w: 3.9, h: 5.2, fill: { color: 'FFFFFF' }, line: { color: '063630', pt: 1.5 }, fontSize: 11.5, color: '1E293B', valign: 'top', margin: 12 });
  s3.addText(`2. GARGALO IMEDIATO:\n${safeStr(parsed.gargalo, faseTxt)}`, { x: 4.7, y: 1.4, w: 3.9, h: 5.2, fill: { color: 'FFFBEB' }, line: { color: 'B45309', pt: 1.5 }, fontSize: 11.5, color: '1E293B', valign: 'top', margin: 12 });
  s3.addText(`3. TESE DE MANDATO:\n${safeStr(parsed.mandato, proxAcoesTxt)}`, { x: 8.9, y: 1.4, w: 3.9, h: 5.2, fill: { color: 'F0FDF4' }, line: { color: '065F46', pt: 1.5 }, fontSize: 11.5, color: '1E293B', valign: 'top', margin: 12 });

  // Slide 4: Credores e Stakeholders
  const s4 = pptx.addSlide();
  addSlideHeader(s4, '3. Quadro de Credores & Stakeholders Fiduciários', 'Mapeamento de exposições bancárias, agentes fiduciários, securitizadoras e garantias');
  s4.addText(`• Principais Credores Mapeados:\n${credoresTxt}\n\n• Perfil do Passivo & Colateral:\n${perfilPassivoTxt}\n\n• Agentes Fiduciários: ${afTxt}\n• Securitizadoras: ${secTxt}`, { x: 0.6, y: 1.4, w: 12.1, h: 5.2, fill: { color: 'F8FAFA' }, line: { color: 'CBD5E1', pt: 1 }, fontSize: 12.5, color: '1E293B', valign: 'top', margin: 14 });

  // Slide 5: Modelagem de Desalavancagem & Estrutura de Capital (6 Faixas)
  const s5 = pptx.addSlide();
  const splitTxt = `Extraconcursal ${waterfallSplitPcts.extra}% | Fiscal ${waterfallSplitPcts.fiscal}% | Cl. I ${waterfallSplitPcts.c1}% | Cl. II ${waterfallSplitPcts.c2}% | Cl. III ${waterfallSplitPcts.c3}% | Cl. IV ${waterfallSplitPcts.c4}%`;
  addSlideHeader(s5, '4. Dimensionamento da Reestruturação & Geração de Valor', 'Impacto estimado do plano de reestruturação e abertura reconciliada do passivo');
  s5.addText(`• Passivo / Dívida Alvo do Mandato: R$ ${formatNumberBR(m.passivoMM)} MM (100%)\n• Estrutura de Capital (6 Faixas): ${splitTxt}\n• Haircut / Deságio Projetado no Plano: ${m.haircutPct}% (Recuperação Implícita: ${m.recupPct}%)\n• Economia / Redução Nominal de Dívida Gerada: R$ ${m.economiaMM.toFixed(1).replace('.', ',')} MM\n• Passivo Reperfilado Pós-Plano: R$ ${m.creditoRecupMM.toFixed(1).replace('.', ',')} MM\n• Base Selecionada para Success Fee: ${m.baseLabel} (R$ ${m.baseCalculoMM.toFixed(1).replace('.', ',')} MM)`, { x: 0.6, y: 1.4, w: 12.1, h: 5.0, fill: { color: 'FFFFFF' }, line: { color: '063630', pt: 1.5 }, fontSize: 13.5, bold: true, color: '063630', valign: 'middle', margin: 18 });

  // Slide 6: Cronograma, Fatos Relevantes Recentes e Próximas Ações
  const s6 = pptx.addSlide();
  addSlideHeader(s6, '5. Cronograma Tático, Fatos Relevantes & Plano de Ação', 'Marcos legais da Lei 11.101/05, últimas notícias vinculadas e diligências');
  const cm = computeDynamicCalendarMeta(d);
  const marcoDt = safeStr(cm.data_marco_br || formatDateBR(cm.data_marco_iso), formatDateBR(isoToday));
  const marcoDesc = safeStr(cm.marco_label || cm.marco_principal || cm.tipo_marco, 'Monitoramento Tático Concursal');
  const diasRem = typeof cm.dias_restantes === 'number' ? ` (Faltam ${cm.dias_restantes} dias)` : '';
  const dealNews = (typeof getAllCombinedNews === 'function' ? getAllCombinedNews() : []).filter(n => Number(n.deal_id) === Number(d.id) && Number(d.id) > 0).slice(0, 2);
  const newsBullets = dealNews.length > 0
    ? '\n\n• Últimos Fatos Relevantes & Notícias Capturadas no Radar:\n' + dealNews.map(n => `  - [${safeStr(n.data_hora, isoToday)}] ${safeStr(n.titulo, '')} (${safeStr(n.fonte, 'Radar')})`).join('\n')
    : '';
  const ultMovTxt = formatDateBR(d.data_evento || isoToday);
  s6.addText(`• Último Movimento / Gatilho Mapeado: ${ultMovTxt}\n• Próximo Marco Fatal / Assembleia (Dia Útil): ${marcoDt}${diasRem} — ${marcoDesc}\n• Horizonte Estimado do Mandato: ${m.mesesMandato} meses\n\n• Plano de Ação Recomendado pela Mesa Valknut:\n${proxAcoesTxt}${newsBullets}`, { x: 0.6, y: 1.4, w: 12.1, h: 5.0, fill: { color: 'F8FAFA' }, line: { color: 'CBD5E1', pt: 1 }, fontSize: 12, color: '1E293B', valign: 'top', margin: 14 });

  // Slide 7: Proposta Comercial (Retainer & Success Fee)
  const s7 = pptx.addSlide();
  const safeMandate = safeStr(pitchMandateType, 'Debtor-Side / Financial Advisory & Turnaround (RJ/PRE)');
  const safeRecipient = safeStr(pitchTargetRecipient, 'Conselho de Administração / Diretoria Financeira');
  addSlideHeader(s7, '6. Proposta de Honorários (Retainer & Success Fee)', `Mandato proposto: ${safeMandate}`);
  s7.addText(`• Modalidade de Atuação: ${safeMandate}\n• Destinatário: ${safeRecipient}\n\nESTRUTURA DE REMUNERAÇÃO PROPOSTA:\n1. Retainer Fixo Mensal: R$ ${m.retainerMensalMil} mil/mês por ${m.mesesMandato} meses (Total Fixo: R$ ${m.retainerTotalMM.toFixed(2).replace('.', ',')} MM)\n2. Taxa de Êxito (Success Fee Bruto): ${m.successFeePct.toFixed(2).replace('.', ',')}% sobre ${m.baseLabel} = R$ ${m.successBrutoMM.toFixed(2).replace('.', ',')} MM\n3. Cláusula de Abatimento (Offset de ${m.offsetPct}% do Retainer): -R$ ${m.offsetDeduzidoMM.toFixed(2).replace('.', ',')} MM\n4. Success Fee Líquido no Fechamento: R$ ${m.successLiquidoMM.toFixed(2).replace('.', ',')} MM\n5. Remuneração Total Estimada do Mandato: R$ ${m.totalHonorariosMM.toFixed(2).replace('.', ',')} MM (${m.takeRatePassivoPct.toFixed(2).replace('.', ',')}% do Passivo Total)`, { x: 0.6, y: 1.4, w: 12.1, h: 5.0, fill: { color: 'FFFFFF' }, line: { color: 'A5AC82', pt: 2 }, fontSize: 13, bold: true, color: '063630', valign: 'top', margin: 18 });

  await pptx.writeFile({ fileName: `Valknut_Proposta_Honorarios_${empresaNome.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 25)}.pptx` });
  showToast(`Proposta Comercial (.pptx) gerada com sucesso para ${empresaNome}!`);
}

// ==========================================================================
// MÓDULO 2: Ecossistema & Players (Bancas, AJs, Agentes Fiduciários & Varas — Saneado)
// ==========================================================================
function isGenericPlaceholderPlayer(str) {
  if (!str) return true;
  const s = String(str).toLowerCase().trim();
  const ignorePatterns = [
    'aguardando', 'em apuração', 'em apuracao', 'n/a', 'n/d', 'não informado', 'nao informado', 'sigilo',
    'monitoramento', 'em consulta', 'em sondagem', 'em tratativas',
    'em prospecção', 'em estruturação', 'em definição', 'a ser nomeado', 'a nomear', 'pelo juízo', 'pelo juizo',
    'em substituição', 'em eleição', 'em recurso', 'massa falida',
    'administrador judicial nomeado', 'perícia prévia nomeada',
    'banca especializada', 'assessoria financeira', 'assessoria jurídica', 'assessoria juridica',
    'escritório especializado', 'escritorio especializado'
  ];
  return ignorePatterns.some(p => s.includes(p));
}

function normalizeCanonicalPlayerName(rawName, tabType) {
  if (!rawName) return '';
  let s = String(rawName).replace(/\s+/g, ' ').trim();
  s = s.replace(/\s*\((?:Banca|Devedora|Credores|AJ|Perito|Sindicância|Substituto)[^)]*\)/gi, '').trim();
  s = s.replace(/\s+(?:Ltda\.?|S\/S|S\.A\.|Sociedade de Advogados)\s*$/i, '').trim();

  const lower = normalizeTextNoAccents(s);

  if (tabType === 'eco_ajs' || tabType === 'eco_aj') {
    if (lower.includes('laspro')) return 'Laspro Consultores';
    if (lower.includes('brizola') && lower.includes('japur')) return 'Brizola e Japur Administração Judicial';
    if (lower.includes('exm partners')) return 'EXM Partners';
    if (lower.includes('alvarez') && lower.includes('marsal')) return 'Alvarez & Marsal Administração Judicial';
    if (lower.includes('kroll')) return 'Kroll Administração Judicial';
    if (lower.includes('deloitte')) return 'Deloitte Touche Tohmatsu';
    if (lower.includes('pwc') || lower.includes('pricewaterhouse')) return 'PwC Brasil';
    if (lower.includes('kpmg')) return 'KPMG Corporate Finance';
    if (/\bey\b/.test(lower) || lower.includes('ernst & young')) return 'EY Turnaround & Restructuring';
    if (lower.includes('valor judicial')) return 'Valor Judicial';
    if (lower.includes('brasil trustee')) return 'Brasil Trustee Assessoria e Consultoria';
    if (lower.includes('quadra')) return 'Quadra Administração Judicial';
    if (lower.includes('wald')) return 'Wald Administração de Falências e Empresas em Recuperação Judicial';
  } else if (tabType === 'eco_bancas') {
    if (lower.includes('munhoz') || lower.includes('mattos filho')) return 'Mattos Filho, Veiga Filho, Marrey Jr e Quiroga Advogados';
    if (lower.includes('pinheiro neto')) return 'Pinheiro Neto Advogados';
    if (lower.includes('felsberg')) return 'Felsberg Advogados';
    if (lower.includes('bumachar') || lower.includes('padis')) return 'Padis Mattar Advogados';
    if (/\btwk\b/.test(lower)) return 'TWK Advogados';
    if (lower.includes('galdino') || lower.includes('coelho')) return 'Galdino & Coelho Advogados';
    if (lower.includes('tozzinifreire') || lower.includes('tozzini freire')) return 'TozziniFreire Advogados';
    if (lower.includes('machado meyer')) return 'Machado Meyer Advogados';
    if (lower.includes('lefosse')) return 'Lefosse Advogados';
    if (lower.includes('cescon')) return 'Cescon, Barrieu, Flesch & Barreto Advogados';
    if (lower.includes('veirano')) return 'Veirano Advogados';
    if (/\bbma\b/.test(lower) || lower.includes('barbosa mussnich')) return 'BMA — Barbosa Müssnich Aragão';
    if (lower.includes('stocche forbes')) return 'Stocche Forbes Advogados';
    if (lower.includes('tauil') || lower.includes('chequer')) return 'Tauil & Chequer Advogados (Mayer Brown)';
    if (lower.includes('demarest')) return 'Demarest Advogados';
  } else if (tabType === 'eco_varas') {
    const lowerOrd = lower.replace(/ª/g, 'a').replace(/º/g, 'o');
    if (lowerOrd.includes('tjsp') && lowerOrd.includes('1a vara') && lowerOrd.includes('falencias')) return 'TJSP - 1ª Vara de Falências e RJs da Capital';
    if (lowerOrd.includes('tjsp') && lowerOrd.includes('2a vara') && lowerOrd.includes('falencias')) return 'TJSP - 2ª Vara de Falências e RJs da Capital';
    if (lowerOrd.includes('tjsp') && lowerOrd.includes('3a vara') && lowerOrd.includes('falencias')) return 'TJSP - 3ª Vara de Falências e RJs da Capital';
    if (lowerOrd.includes('tjrj') && lowerOrd.includes('varas empresariais')) return 'TJRJ - Varas Empresariais da Capital';
  }
  return s;
}

const ECO_FIDUCIARIOS_MATCHERS = [
  { name: 'Vórtx DTVM', test: (raw, norm) => norm.includes('vortx') },
  { name: 'Pentágono DTVM', test: (raw, norm) => norm.includes('pentagono') },
  { name: 'Oliveira Trust DTVM', test: (raw, norm) => norm.includes('oliveira trust') },
  { name: 'Simplific Pavarini DTVM', test: (raw, norm) => norm.includes('pavarini') || norm.includes('simplific') },
  { name: 'Opea Securitizadora', test: (raw, norm) => /\bopea\b/.test(norm) },
  { name: 'Vert Securitizadora', test: (raw) => RX_VERT_SEC.test(raw) },
  { name: 'Virgo Securitizadora', test: (raw, norm) => /\bvirgo\b/.test(norm) },
  { name: 'Reit Securitizadora', test: (raw) => RX_REIT_SEC.test(raw) },
  { name: 'Euro Securitizadora', test: (raw) => RX_EURO_SEC.test(raw) },
  { name: 'True Securitizadora', test: (raw, norm) => /\btrue\s+securitizadora\b/.test(norm) },
  { name: 'Habitasec Securitizadora', test: (raw, norm) => /\bhabitasec\b/.test(norm) },
  { name: 'Canal Securitizadora', test: (raw, norm) => /\bcanal\s+securitizadora\b/.test(norm) },
  { name: 'Isec Securitizadora', test: (raw, norm) => /\bisec\b/.test(norm) },
  { name: 'Ignis Securitizadora', test: (raw, norm) => /\bignis\s+securitizadora\b/.test(norm) },
  { name: 'Audax Securitizadora', test: (raw, norm) => /\baudax\s+securitizadora\b/.test(norm) }
];

function renderEcossistemaSection(deals, container) {
  const baseDeals = DEALS_DATA.filter(matchesPassivoCutoff);
  const groups = {};
  let unmappedDealsCount = 0;

  const categoryMap = {
    eco_bancas: 'Ecossistema • Banca Jurídica',
    eco_ajs: 'Ecossistema • Administrador Judicial',
    eco_aj: 'Ecossistema • Administrador Judicial',
    eco_fiduciarios: 'Ecossistema • Agente Fiduciário / Securitizadora',
    eco_varas: 'Ecossistema • Juízo / Vara Empresarial'
  };
  const categoryLabel = categoryMap[currentSubTab] || 'Ecossistema';

  baseDeals.forEach(d => {
    let keyList = [];
    if (currentSubTab === 'eco_ajs' || currentSubTab === 'eco_aj') {
      const ajRaw = (d.aj || d.administrador_judicial || d.adm_judicial || '').trim();
      if (ajRaw && !isGenericPlaceholderPlayer(ajRaw)) {
        keyList = ajRaw.split(/\s*(?:\/\/|\+|;|\s+\/\s+)\s*/).map(s => normalizeCanonicalPlayerName(s.trim(), currentSubTab)).filter(s => s && !isGenericPlaceholderPlayer(s));
      } else {
        unmappedDealsCount += 1;
      }
    } else if (currentSubTab === 'eco_bancas') {
      const advRaw = (d.advocacia || '').trim();
      if (advRaw && !isGenericPlaceholderPlayer(advRaw)) {
        keyList = advRaw.split(/\s*(?:\/\/|\+|;|\s+\/\s+)\s*/).map(s => normalizeCanonicalPlayerName(s.trim(), currentSubTab)).filter(s => s && !isGenericPlaceholderPlayer(s));
      } else {
        unmappedDealsCount += 1;
      }
    } else if (currentSubTab === 'eco_fiduciarios') {
      const rawFiduciaryCorpus = [d.agentes_fiduciarios || '', d.securitizadoras || '', d.credores || '', d.perfil_passivo || '', d.tese || ''].join(' ');
      const normFiduciaryCorpus = normalizeTextNoAccents(rawFiduciaryCorpus);
      ECO_FIDUCIARIOS_MATCHERS.forEach(m => {
        if (m.test(rawFiduciaryCorpus, normFiduciaryCorpus)) {
          keyList.push(m.name);
        }
      });
    } else if (currentSubTab === 'eco_varas') {
      if (d.tribunal) keyList = [normalizeCanonicalPlayerName(d.tribunal, currentSubTab)];
    }

    const dynRec = computeDynamicRecovery(d);
    const uniqueKeys = [...new Set(keyList)];
    uniqueKeys.forEach(k => {
      if (!groups[k]) groups[k] = { name: k, count: 0, passivo: 0, deals: [], dealIds: new Set(), recupSum: 0 };
      const idStr = String(d.id);
      if (!groups[k].dealIds.has(idStr)) {
        groups[k].dealIds.add(idStr);
        groups[k].count += 1;
        groups[k].passivo += (d.passivo_mm || 0);
        groups[k].deals.push(d);
        groups[k].recupSum += dynRec.recupPct;
      }
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

  entityFilterRegistry.clear();
  html += `<div class="eco-cards-grid">`;
  sorted.forEach((g, idx) => {
    const avgRec = Math.round(g.recupSum / g.count);
    const avgHaircut = 100 - avgRec;
    const regKey = `eco_${currentSubTab}_${idx}`;
    entityFilterRegistry.set(regKey, {
      label: g.name,
      category: categoryLabel,
      dealIds: new Set(g.dealIds)
    });

    html += `
      <div class="eco-player-card" style="cursor:pointer;" onclick="activateEntityFilterFromCard('${regKey}')">
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
        <button type="button" class="btn-action" style="width:100%;" onclick="event.stopPropagation(); activateEntityFilterFromCard('${regKey}')">
          Filtrar Carteira deste Player (${g.count})
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
let lastFocusedElementBeforeModal = null;

function resolveTribunalCvmUrl(d) {
  if (!d) return 'https://comunica.pje.jus.br/';
  if (typeof d.url_tribunal_cvm === 'string' && /^https?:\/\//i.test(d.url_tribunal_cvm.trim())) {
    return d.url_tribunal_cvm.trim();
  }
  const trib = String(d.tribunal || '').toUpperCase();
  const proc = String(d.processo || '').toUpperCase();
  if (trib.includes('CVM') || proc.includes('CVM') || proc.includes('AGD') || (!trib.includes('TJ') && d.tipo_processo === 'Tier 0')) {
    return 'https://rad.cvm.gov.br/ENET/frmConsultaExternaCVM.aspx';
  }
  if (trib.includes('TJSP') || d.uf === 'SP') return 'https://esaj.tjsp.jus.br/cpopg/open.do';
  if (trib.includes('TJRJ') || d.uf === 'RJ') return 'https://www3.tjrj.jus.br/consultaprocessual/';
  if (trib.includes('TJRS') || d.uf === 'RS') return 'https://eproc1g.tjrs.jus.br/eproc/externo_controlador.php?acao=processo_consulta_publica';
  if (trib.includes('TJPR') || d.uf === 'PR') return 'https://consulta.tjpr.jus.br/projudi_consulta/';
  if (trib.includes('TJSC') || d.uf === 'SC') return 'https://eproc1g.tjsc.jus.br/eproc/externo_controlador.php?acao=processo_consulta_publica';
  if (trib.includes('TJMT') || d.uf === 'MT') return 'https://pje.tjmt.jus.br/pje/ConsultaPublica/listView.seam';
  if (trib.includes('TJGO') || d.uf === 'GO') return 'https://projudi.tjgo.jus.br/BuscaProcessoPublica';
  if (trib.includes('TJMG') || d.uf === 'MG') return 'https://eproc-consulta-publica-1g.tjmg.jus.br/eproc/externo_controlador.php?acao=processo_consulta_publica';
  if (trib.includes('TJCE') || d.uf === 'CE') return 'https://esaj.tjce.jus.br/cpopg/open.do';
  if (trib.includes('TJBA') || d.uf === 'BA') return 'https://consultapublicapje.tjba.jus.br/pje/ConsultaPublica/listView.seam';
  if (trib.includes('TJPE') || d.uf === 'PE') return 'https://pje.cloud.tjpe.jus.br/1g/ConsultaPublica/listView.seam';
  if (trib.includes('TJES') || d.uf === 'ES') return 'https://sistemas.tjes.jus.br/pje/ConsultaPublica/listView.seam';
  if (trib.includes('TJPA') || d.uf === 'PA') return 'https://consultas.tjpa.jus.br/consultaunificada/';
  return 'https://comunica.pje.jus.br/';
}

function openDossier(id) {
  const item = DEALS_DATA.find(d => Number(d.id) === Number(id));
  if (!item) return;
  currentModalItem = item;
  lastFocusedElementBeforeModal = document.activeElement;

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

  const tribUrl = resolveTribunalCvmUrl(item);
  const subGrid = document.getElementById('modalSubheaderGrid');
  if (subGrid) {
    subGrid.innerHTML = `
      <span class="tearsheet-meta-item"><strong>CNPJ:</strong> ${escapeHtml(item.cnpj)}</span>
      <span class="tearsheet-meta-item"><strong>Macro-Setor:</strong> ${escapeHtml(item.setor_macro)}</span>
      <span class="tearsheet-meta-item"><strong>Polo:</strong> ${escapeHtml(item.cidade)}/${escapeHtml(item.uf)}</span>
      <span class="tearsheet-meta-item"><strong>Juízo:</strong> ${escapeHtml(item.tribunal)}</span>
      <span class="tearsheet-meta-item">
        <strong>Autos:</strong> ${escapeHtml(item.processo)}
        <button type="button" class="btn-copy-autos" data-proc="${escapeHtml(item.processo)}" onclick="copyProcessNumber(this.getAttribute('data-proc'))">📋 Copiar Autos</button>
        <a href="${escapeHtml(tribUrl)}" target="_blank" rel="noopener noreferrer" class="btn-header-tribunal">⚖️ Consultar Autos / CVM ↗</a>
      </span>
    `;
  }

  const footerTribBtn = document.getElementById('modalFooterTribunalBtn');
  if (footerTribBtn) {
    footerTribBtn.href = tribUrl;
    footerTribBtn.style.display = 'inline-flex';
  }

  setModalTab('visao');
  const modalEl = document.getElementById('detailModal');
  if (modalEl) {
    modalEl.style.display = 'flex';
    const firstTab = document.getElementById('modal-tab-visao');
    if (firstTab) setTimeout(() => firstTab.focus(), 20);
  }
  document.body.classList.toggle('modal-open', true);
  document.body.style.overflow = 'hidden';
  syncUrlHash(true);
}

function copyProcessNumber(procStr) {
  try {
    navigator.clipboard.writeText(procStr || '').then(() => showToast(`Número dos autos copiado: ${procStr}`));
  } catch (e) {
    showToast(`Autos: ${procStr}`);
  }
}

function closeModal() {
  const modalEl = document.getElementById('detailModal');
  if (modalEl) modalEl.style.display = 'none';
  document.body.classList.toggle('modal-open', false);
  if (!document.body.classList.contains('comps-modal-open')) {
    document.body.style.overflow = '';
  }
  currentModalItem = null;
  syncUrlHash(true);
  if (lastFocusedElementBeforeModal && typeof lastFocusedElementBeforeModal.focus === 'function') {
    try { lastFocusedElementBeforeModal.focus(); } catch (e) { /* ignore */ }
    lastFocusedElementBeforeModal = null;
  }
}

function handleOverlayClick(e) {
  if (e.target.id === 'detailModal') closeModal();
}

window.addEventListener('keydown', e => {
  if ((e.key === 'ArrowRight' || e.key === 'ArrowLeft') && document.activeElement && document.activeElement.getAttribute('role') === 'tab') {
    const tablist = document.activeElement.closest('[role="tablist"]');
    if (tablist) {
      const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
      const idx = tabs.indexOf(document.activeElement);
      if (idx !== -1 && tabs.length > 1) {
        e.preventDefault();
        const nextIdx = e.key === 'ArrowRight' ? (idx + 1) % tabs.length : (idx - 1 + tabs.length) % tabs.length;
        tabs[nextIdx].focus();
        tabs[nextIdx].click();
      }
    }
    return;
  }

  const compsModalEl = document.getElementById('compsModal');
  const isCompsOpen = Boolean(compsModalEl && compsModalEl.style.display === 'flex');
  if (isCompsOpen && e.key === 'Escape') {
    closeCompsModal();
    return;
  }

  const modalEl = document.getElementById('detailModal');
  const isModalOpen = Boolean(modalEl && modalEl.style.display === 'flex');
  const activeOverlay = isCompsOpen ? compsModalEl : (isModalOpen ? modalEl : null);
  if (!activeOverlay) return;

  if (e.key === 'Escape') {
    closeModal();
    return;
  }

  if (e.key === 'Tab') {
    const dialog = activeOverlay.querySelector('.modal-dialog') || activeOverlay;
    const focusables = Array.from(
      dialog.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')
    ).filter(el => el.offsetParent !== null);
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});

function buildSixBucketStripHtml(d) {
  const sc = d.model_params?.split_classes || {};
  const cp = d.model_params?.classes_pct || {};
  const split = reconcileSixBucketSplit({
    extra: sc.extraconcursal_pct ?? cp.extraconcursal_fiduciario ?? 18,
    fiscal: sc.fiscal_pct ?? cp.fiscal_tributario ?? 7,
    c1: sc.classe_i_pct ?? cp.c1_trabalhista ?? 3,
    c2: sc.classe_ii_pct ?? cp.c2_garantia_real ?? 42,
    c3: sc.classe_iii_pct ?? cp.c3_quirografario ?? 27,
    c4: sc.classe_iv_pct ?? cp.c4_me_epp ?? 3
  });
  const items = [
    { label: 'Extraconcursal / Fid.', pct: split.extra, color: '#063630' },
    { label: 'Fiscal / Tributário', pct: split.fiscal, color: '#92400E' },
    { label: 'Classe I (Trab.)', pct: split.c1, color: '#1E40AF' },
    { label: 'Classe II (Real)', pct: split.c2, color: '#0F766E' },
    { label: 'Classe III (Quirog.)', pct: split.c3, color: '#475569' },
    { label: 'Classe IV (ME/EPP)', pct: split.c4, color: '#6D28D9' }
  ];
  return `
    <div style="margin-top:10px; padding:10px 12px; background:var(--bg-subtle); border:1px solid var(--border-light); border-radius:6px;">
      <div style="display:flex; justify-content:space-between; align-items:center; font-family:var(--font-mono); font-size:10.5px; font-weight:800; color:var(--vk-header-start); margin-bottom:6px;">
        <span>ESTRUTURA DE CAPITAL ESTIMADA — 6 FAIXAS (LEI 11.101/05 &amp; LEI 14.112/20)</span>
        <span class="status-badge badge-upi" style="font-size:9.5px;">Soma: 100%</span>
      </div>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(125px, 1fr)); gap:6px;">
        ${items.map(it => `
          <div style="background:#FFFFFF; border:1px solid var(--border-light); border-left:3px solid ${it.color}; border-radius:4px; padding:5px 8px;">
            <div style="font-size:10px; color:var(--text-secondary);">${it.label}</div>
            <div style="font-family:var(--font-mono); font-size:12.5px; font-weight:800; color:${it.color};">${String(it.pct).replace('.', ',')}%</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function setModalTab(tab) {
  currentModalTab = tab;
  document.querySelectorAll('.modal-tab-item').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
  });
  const activeBtn = document.getElementById(`modal-tab-${tab}`);
  if (activeBtn) {
    activeBtn.classList.add('active');
    activeBtn.setAttribute('aria-selected', 'true');
  }

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
  const tribUrl = resolveTribunalCvmUrl(d);
  const isCompSelected = selectedCompIds.map(Number).includes(Number(d.id));

  const credChips = parseCreditorsList(d.credores);

  if (tab === 'visao') {
    const newerAlert = getNewerDealNewsAlert(d);
    const modalAlertBanner = newerAlert
      ? `<div style="margin-bottom:14px; padding:10px 14px; background:#FFFBEB; border:1px solid #FDE68A; border-left:4px solid #D97706; border-radius:6px; font-size:12px; color:#92400E; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
           <div>
             <strong>⚡ Fato Relevante Recente Capturado (${escapeHtml(newerAlert.data_hora)} — ${escapeHtml(newerAlert.fonte)}):</strong><br>
             <span>${escapeHtml(newerAlert.titulo)}</span>
           </div>
           <a href="${escapeHtml(buildNewsItemUrl(newerAlert))}" target="_blank" rel="noopener noreferrer" class="btn-action" style="text-decoration:none; padding:4px 10px;">Ler Fato Relevante ↗</a>
         </div>`
      : '';
    body.innerHTML = `
      ${modalAlertBanner}
      <div class="company-intro-banner">
        <div class="company-intro-label">
          <span>🏢 PERFIL &amp; INTRODUÇÃO DA EMPRESA</span>
          <span style="margin-left:auto; display:inline-flex; gap:6px; flex-wrap:wrap;">
            <button type="button" class="btn-comp-toggle ${isCompSelected ? 'active' : ''}" style="padding:3px 9px; font-size:10.5px;" onclick="toggleCompDeal(${d.id}, event); setModalTab('visao');">⚖️ ${isCompSelected ? 'No Comps ✓' : 'Comparar'}</button>
            <a href="${escapeHtml(tribUrl)}" target="_blank" rel="noopener noreferrer" class="btn-tribunal-link">⚖️ Consultar Autos / CVM ↗</a>
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

        ${buildSixBucketStripHtml(d)}

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
        ${buildSixBucketStripHtml(d)}
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
          <div class="dossier-cell-label">Número dos Autos / Emissão &amp; Portal Oficial</div>
          <div class="dossier-cell-val" style="font-family:var(--font-mono); display:flex; align-items:center; flex-wrap:wrap; gap:6px;">
            <span>${escapeHtml(d.processo)}</span>
            <button type="button" class="btn-action" style="padding:2px 8px;" data-proc="${escapeHtml(d.processo)}" onclick="copyProcessNumber(this.getAttribute('data-proc'))">Copiar</button>
            <a href="${escapeHtml(tribUrl)}" target="_blank" rel="noopener noreferrer" class="btn-tribunal-link">⚖️ Consultar Autos / CVM ↗</a>
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
    `Consulta Oficial (Tribunal/CVM): ${resolveTribunalCvmUrl(d)}`,
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
  document.body.classList.toggle('modal-open', true);
  setModalTab('visao');
  setTimeout(() => window.print(), 80);
}

// ==========================================================================
// 14B. Comparador Lado a Lado de Casos Concursais (Comps — Até 4 Casos)
// ==========================================================================
function toggleCompDeal(dealId, evt) {
  if (evt && typeof evt.stopPropagation === 'function') {
    evt.stopPropagation();
  }
  const numId = Number(dealId);
  if (!numId || isNaN(numId)) return;

  const existingIdx = selectedCompIds.findIndex(x => Number(x) === numId);
  if (existingIdx !== -1) {
    selectedCompIds.splice(existingIdx, 1);
  } else {
    if (selectedCompIds.length >= 4) {
      showToast('Limite máximo de 4 casos no comparador (Comps) atingido.');
      return;
    }
    selectedCompIds.push(numId);
  }

  renderCompsFloatingBar();
  const compsModalEl = document.getElementById('compsModal');
  if (compsModalEl && compsModalEl.style.display === 'flex') {
    if (selectedCompIds.length === 0) {
      closeCompsModal();
    } else {
      openCompsModal();
    }
  }
  if (currentMainSection === 'operacao' || currentMainSection === 'precursor' || currentMainSection === 'upis') {
    renderSectionContent();
  }
}

function removeCompDeal(dealId) {
  const numId = Number(dealId);
  selectedCompIds = selectedCompIds.filter(x => Number(x) !== numId);
  renderCompsFloatingBar();
  const compsModalEl = document.getElementById('compsModal');
  if (compsModalEl && compsModalEl.style.display === 'flex') {
    if (selectedCompIds.length === 0) closeCompsModal();
    else openCompsModal();
  }
  if (currentMainSection === 'operacao' || currentMainSection === 'precursor' || currentMainSection === 'upis') {
    renderSectionContent();
  }
}

function clearCompSelection() {
  selectedCompIds = [];
  closeCompsModal();
  renderCompsFloatingBar();
  if (currentMainSection === 'operacao' || currentMainSection === 'precursor' || currentMainSection === 'upis') {
    renderSectionContent();
  }
}
const clearCompDeals = clearCompSelection;

function renderCompsFloatingBar() {
  const bar = document.getElementById('compsFloatingBar');
  if (!bar) return;

  const validDeals = selectedCompIds
    .map(id => DEALS_DATA.find(d => Number(d.id) === Number(id)))
    .filter(Boolean);

  if (validDeals.length === 0) {
    bar.style.display = 'none';
    bar.innerHTML = '';
    return;
  }

  bar.style.display = 'flex';
  bar.innerHTML = `
    <div class="comps-chips-list">
      <strong style="font-family:var(--font-mono); font-size:11.5px; color:#E6E9DC; white-space:nowrap;">⚖️ COMPS (${validDeals.length}/4):</strong>
      ${validDeals.map(d => `
        <span class="comps-chip">
          <span>${escapeHtml(d.empresa.length > 26 ? d.empresa.slice(0, 26) + '…' : d.empresa)}</span>
          <button type="button" class="comps-chip-remove" onclick="removeCompDeal(${d.id})" title="Remover ${escapeHtml(d.empresa)}" aria-label="Remover ${escapeHtml(d.empresa)}">&times;</button>
        </span>
      `).join('')}
    </div>
    <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
      <button type="button" class="btn-solid" style="padding:6px 12px; font-size:11.5px;" onclick="openCompsModal()">
        ⚖️ Comparar Lado a Lado (${validDeals.length})
      </button>
      <button type="button" class="btn-action" style="padding:5px 10px; font-size:11px; background:#FFFFFF;" onclick="exportCompsXlsx()">
        📊 Excel (.xlsx)
      </button>
      <button type="button" class="btn-reset" style="padding:5px 10px; font-size:11px; color:#FEE2E2;" onclick="clearCompSelection()">
        ✕ Limpar
      </button>
    </div>
  `;
}

function openCompsModal() {
  const validDeals = selectedCompIds
    .map(id => DEALS_DATA.find(d => Number(d.id) === Number(id)))
    .filter(Boolean);

  if (validDeals.length === 0) {
    showToast('Selecione ao menos 1 caso no botão ⚖️ para abrir o comparador.');
    return;
  }

  const modalEl = document.getElementById('compsModal');
  const titleEl = document.getElementById('compsModalTitle');
  const bodyEl = document.getElementById('compsModalBody');
  if (!modalEl || !bodyEl) return;

  if (titleEl) {
    const totalPassivo = validDeals.reduce((acc, d) => acc + (Number(d.passivo_mm) || 0), 0);
    titleEl.textContent = `Comparativo Lado a Lado (${validDeals.length} ${validDeals.length === 1 ? 'Caso' : 'Casos'} • Passivo Agregado: R$ ${formatNumberBR(Math.round(totalPassivo))} MM)`;
  }

  const dealCols = validDeals.map(d => {
    const dyn = computeDynamicRecovery(d);
    const parsed = parseThesisRegex(d.tese);
    const sc = d.model_params?.split_classes || {};
    const cp = d.model_params?.classes_pct || {};
    const split = reconcileSixBucketSplit({
      extra: sc.extraconcursal_pct ?? cp.extraconcursal_fiduciario ?? 18,
      fiscal: sc.fiscal_pct ?? cp.fiscal_tributario ?? 7,
      c1: sc.classe_i_pct ?? cp.c1_trabalhista ?? 3,
      c2: sc.classe_ii_pct ?? cp.c2_garantia_real ?? 42,
      c3: sc.classe_iii_pct ?? cp.c3_quirografario ?? 27,
      c4: sc.classe_iv_pct ?? cp.c4_me_epp ?? 3
    });
    const evEst = Math.round(Number(d.model_params?.ev_ativos_mm || (Number(d.passivo_mm || 100) * 0.58)));
    const liqDisc = Number(d.model_params?.desagio_liquidacao_pct || 38);
    const massaEst = Math.round(evEst * (1 - liqDisc / 100));
    const badge = getBadgeVisual(d);
    return { d, dyn, parsed, split, evEst, liqDisc, massaEst, badge };
  });

  bodyEl.innerHTML = `
    <div class="comps-matrix-wrap">
      <table class="comps-matrix-table">
        <thead>
          <tr>
            <th style="min-width:170px;">Métrica / Dimensão Forense</th>
            ${dealCols.map(c => `
              <th style="min-width:220px;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:6px;">
                  <div>
                    <strong style="font-size:13px; color:#E6E9DC; text-decoration:underline; text-underline-offset:2px; cursor:pointer;" onclick="closeCompsModal(); openDossier(${c.d.id});">${escapeHtml(c.d.empresa)}</strong>
                    <div style="font-family:var(--font-mono); font-size:10px; color:#C8CEB0; font-weight:500; margin-top:2px;">${escapeHtml(c.d.cnpj)} • ${escapeHtml(c.d.setor_macro)}</div>
                  </div>
                  <button type="button" style="background:rgba(255,255,255,0.14); border:1px solid rgba(230,233,220,0.35); color:#FFFFFF; border-radius:4px; padding:2px 6px; font-size:11px; cursor:pointer;" onclick="removeCompDeal(${c.d.id})" title="Remover coluna" aria-label="Remover ${escapeHtml(c.d.empresa)}">&times;</button>
                </div>
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1. Passivo Total Estimado</strong></td>
            ${dealCols.map(c => `<td class="comp-num" data-numeric="true" style="font-weight:800; font-size:13.5px;">R$ ${formatNumberBR(c.d.passivo_mm)} MM</td>`).join('')}
          </tr>
          <tr>
            <td><strong>2. Fase / Classe CNJ</strong></td>
            ${dealCols.map(c => `<td><span class="status-badge ${c.badge.cls}">${escapeHtml(c.d.fase)}</span><div style="font-family:var(--font-mono); font-size:10.5px; color:var(--text-muted); margin-top:4px;">${escapeHtml(c.d.processo || 'Em autuação')}</div></td>`).join('')}
          </tr>
          <tr>
            <td><strong>3. Polo &amp; Juízo Competente</strong></td>
            ${dealCols.map(c => `<td><strong>${escapeHtml(c.d.cidade)}/${escapeHtml(c.d.uf)}</strong><br><span style="font-size:11.5px; color:var(--text-secondary);">${escapeHtml(c.d.tribunal)}</span></td>`).join('')}
          </tr>
          <tr>
            <td><strong>4. Score Forense &amp; Tier</strong></td>
            ${dealCols.map(c => `<td class="comp-num" data-numeric="true"><strong>${formatScoreBR(c.d.score)} / 10,0</strong> <span class="status-badge badge-upi">${escapeHtml(c.d.tier)}</span></td>`).join('')}
          </tr>
          <tr>
            <td><strong>5. Haircut &amp; % Recuperação</strong></td>
            ${dealCols.map(c => `<td class="comp-num" data-numeric="true"><span style="color:#9F1239; font-weight:700;">Haircut: ${c.dyn.haircutPct}%</span><br><span style="color:#065F46; font-weight:800;">Recup. Implícita: ${c.dyn.recupPct}%</span></td>`).join('')}
          </tr>
          <tr>
            <td><strong>6. EV &amp; Massa Líquida Est.</strong></td>
            ${dealCols.map(c => `<td class="comp-num" data-numeric="true" style="font-size:11.5px;">EV Ativos: <strong>R$ ${formatNumberBR(c.evEst)} MM</strong><br>Massa (&minus;${c.liqDisc}%): <strong>R$ ${formatNumberBR(c.massaEst)} MM</strong> ${isUpiEligible(c.d) ? '<span class="status-badge badge-upi">UPI</span>' : ''}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>7. Estrutura de Capital (100%)</strong></td>
            ${dealCols.map(c => `<td class="comp-num" data-numeric="true" style="font-size:11px; line-height:1.5;">
              Extra/Fid: <strong>${c.split.extra}%</strong> | Fiscal: <strong>${c.split.fiscal}%</strong><br>
              Cl. I: <strong>${c.split.c1}%</strong> | Cl. II: <strong>${c.split.c2}%</strong><br>
              Cl. III: <strong>${c.split.c3}%</strong> | Cl. IV: <strong>${c.split.c4}%</strong>
            </td>`).join('')}
          </tr>
          <tr>
            <td><strong>8. Principais Credores</strong></td>
            ${dealCols.map(c => `<td style="font-size:11.5px; line-height:1.45;">${escapeHtml(c.d.credores || 'Em apuração')}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>9. Fiduciários &amp; Securitizadoras</strong></td>
            ${dealCols.map(c => `<td style="font-size:11.5px;"><strong>AF:</strong> ${escapeHtml(c.d.agentes_fiduciarios || 'N/A')}<br><strong>Sec.:</strong> ${escapeHtml(c.d.securitizadoras || 'N/A')}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>10. Banca &amp; Adm. Judicial</strong></td>
            ${dealCols.map(c => `<td style="font-size:11.5px;"><strong>Banca:</strong> ${escapeHtml(c.d.advocacia || 'Em definição')}<br><strong>AJ:</strong> ${escapeHtml(c.d.aj || 'Aguardando nomeação')}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>11. Gargalo &amp; Tese de Mandato</strong></td>
            ${dealCols.map(c => `<td style="font-size:11.5px; line-height:1.45;"><strong>Gargalo:</strong> ${escapeHtml(c.parsed.gargalo)}<br><br><strong>Mandato:</strong> ${escapeHtml(c.parsed.mandato)}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>12. Ações Executivas</strong></td>
            ${dealCols.map(c => `<td>
              <div style="display:flex; gap:6px; flex-wrap:wrap;">
                <button type="button" class="btn-action" style="font-size:11px;" onclick="closeCompsModal(); openDossier(${c.d.id});">Abrir Ficha</button>
                <button type="button" class="btn-solid" style="font-size:11px;" onclick="closeCompsModal(); openCalculatorForDeal(${c.d.id});">Modelar</button>
              </div>
            </td>`).join('')}
          </tr>
        </tbody>
      </table>
    </div>
  `;

  modalEl.style.display = 'flex';
  document.body.classList.toggle('comps-modal-open', true);
  document.body.style.overflow = 'hidden';
}

function closeCompsModal() {
  const modalEl = document.getElementById('compsModal');
  if (modalEl) modalEl.style.display = 'none';
  document.body.classList.toggle('comps-modal-open', false);
  if (!document.body.classList.contains('modal-open')) {
    document.body.style.overflow = '';
  }
}

async function exportCompsXlsx() {
  const validDeals = selectedCompIds
    .map(id => DEALS_DATA.find(d => Number(d.id) === Number(id)))
    .filter(Boolean);
  if (validDeals.length === 0) {
    showToast('Selecione casos no comparador (Comps) antes de exportar.');
    return;
  }
  const ok = await ensureSheetJsLoaded();
  if (!ok || typeof XLSX === 'undefined') {
    showToast('Não foi possível carregar o motor Excel (.xlsx).');
    return;
  }
  const rows = [
    ['Métrica / Campo', ...validDeals.map(d => d.empresa)],
    ['CNPJ', ...validDeals.map(d => d.cnpj || '')],
    ['Macro-Setor', ...validDeals.map(d => d.setor_macro || '')],
    ['Passivo Total (R$ MM)', ...validDeals.map(d => Number(d.passivo_mm || 0))],
    ['Fase Concursal', ...validDeals.map(d => d.fase || '')],
    ['Polo (Cidade/UF)', ...validDeals.map(d => `${d.cidade || ''}/${d.uf || ''}`)],
    ['Juízo / Vara', ...validDeals.map(d => d.tribunal || '')],
    ['Autos', ...validDeals.map(d => d.processo || '')],
    ['Score Forense', ...validDeals.map(d => Number(d.score || 0))],
    ['Haircut Estimado (%)', ...validDeals.map(d => computeDynamicRecovery(d).haircutPct)],
    ['Recuperação Implícita (%)', ...validDeals.map(d => computeDynamicRecovery(d).recupPct)],
    ['Principais Credores', ...validDeals.map(d => d.credores || '')],
    ['Agentes Fiduciários', ...validDeals.map(d => d.agentes_fiduciarios || '')],
    ['Securitizadoras', ...validDeals.map(d => d.securitizadoras || '')],
    ['Banca Jurídica', ...validDeals.map(d => d.advocacia || '')],
    ['Administrador Judicial (AJ)', ...validDeals.map(d => d.aj || '')],
    ['Próximas Ações', ...validDeals.map(d => d.proximas_acoes || '')]
  ];
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(rows);
  ws['!cols'] = [{ wch: 28 }, ...validDeals.map(() => ({ wch: 36 }))];
  XLSX.utils.book_append_sheet(wb, ws, 'Comps Lado a Lado');
  XLSX.writeFile(wb, `Valknut_Comps_Concursais_${getBrazilTodayIso()}.xlsx`);
  showToast(`Matriz comparativa (.xlsx) exportada com ${validDeals.length} casos!`);
}


// ==========================================================================
// 15. Live Google Sheets Sync
// ==========================================================================
async function forceSyncData() {
  showToast('Sincronizando com a planilha mestre...');
  await fetchLiveSheetInBackground(true);
}

function parseSheetNoticiasRows(rows) {
  if (!Array.isArray(rows) || rows.length === 0) return [];
  const out = [];
  const firstRowStr = rows[0] ? String(rows[0][0] || '') + ' ' + String(rows[0][6] || '') : '';
  const startIdx = /data\s*e\s*hora|título\s*analítico/i.test(firstRowStr) ? 1 : 0;

  for (let i = startIdx; i < rows.length; i++) {
    const r = rows[i];
    if (!r || r.length < 3) continue;
    const c0 = String(r[0] || '').trim();
    const c6 = String(r[6] || '').trim();
    // P0-1 Fix: Auto-Detecta se a linha foi inserida no formato alternativo (Linhas 17-25: Col A = ID numérico e Col G = URL http)
    const isAltSchema = /^\d+(\.0)?$/.test(c0) && /^https?:\/\//i.test(c6);

    const rawDate = isAltSchema ? String(r[1] || '').trim() : c0;
    let dtStr = rawDate;
    if (/^\d{5}(\.\d+)?$/.test(dtStr)) {
      const serial = parseFloat(dtStr);
      const utcMs = Math.round((serial - 25569) * 86400 * 1000);
      dtStr = formatRssPubDateBR(new Date(utcMs).toISOString());
    } else if (dtStr.includes('T') || /^\d{4}-\d{2}-\d{2}/.test(dtStr)) {
      dtStr = formatRssPubDateBR(dtStr);
    } else if (/^\d{2}\/\d{2}\/\d{4}$/.test(dtStr)) {
      dtStr = `${dtStr} 10:00`;
    }

    const fonte = isAltSchema
      ? String(r[5] || 'Tribunal / Pipeline').trim()
      : String(r[1] || 'CVM / Fatos Relevantes').trim();
    const tagCurta = isAltSchema
      ? String(r[8] || 'RJ / 20-B').split(',')[0].trim().toUpperCase()
      : String(r[2] || 'FATOS').trim();
    const catAba = isAltSchema
      ? String(r[8] || 'rj').trim()
      : String(r[3] || 'rj').trim();
    const escopoRaw = isAltSchema
      ? 'pipeline'
      : normalizeTextNoAccents(String(r[4] || 'pipeline'));
    const rawSetor = isAltSchema
      ? String(r[4] || 'Agronegócio & Silvicultura').trim()
      : String(r[5] || 'Mercado & Macro (RJ / Crédito)').trim();
    const sLow = normalizeTextNoAccents(rawSetor);
    let setorRaw = rawSetor;
    if (sLow.includes('agro') || sLow.includes('insumos') || sLow.includes('silvicultura')) setorRaw = 'Agronegócio & Silvicultura';
    else if (sLow.includes('tecnologia') || sLow.includes('servicos b2b')) setorRaw = 'Tecnologia & Serviços B2B';

    const titulo = isAltSchema ? String(r[2] || '').trim() : c6;
    const empAlt = isAltSchema ? String(r[3] || '').trim() : '';
    const resumo = String(r[7] || '').trim();
    const rawUrl = isAltSchema ? c6 : String(r[8] || '').trim();
    const urlOrig = /^https?:\/\//i.test(rawUrl) ? rawUrl : '';

    if (!titulo || titulo.toLowerCase().includes('título analítico') || isBlockedEntityToken(titulo) || isBlockedEntityToken(empAlt)) continue;

    const specific = normalizeTextNoAccents(`${tagCurta} ${titulo}`);
    const blob = normalizeTextNoAccents(`${tagCurta} ${catAba} ${titulo}`);
    let categoria = 'Pedido de RJ';
    if (specific.includes('downgrade') || specific.includes('rebaixa') || specific.includes('fitch') || specific.includes('moody')) {
      categoria = 'Downgrade Rating';
    } else if (blob.includes('waiver') || blob.includes('agd') || blob.includes('fato relevante') || blob.includes('dip') || blob.includes('debenture') || blob.includes('extrajudicial') || blob.includes('notas comerciais')) {
      categoria = 'Waiver / AGD';
    } else if (blob.includes('falencia') || blob.includes('convolacao')) {
      categoria = 'Falência';
    } else if (blob.includes('leilao') || blob.includes('upi') || blob.includes('qgc') || blob.includes('relatorio')) {
      categoria = blob.includes('leilao') || blob.includes('upi') ? 'Leilão de UPI' : 'Pedido de RJ';
    } else if (blob.includes('cautelar') || blob.includes('20-b')) {
      categoria = 'Cautelar 20-B';
    }

    let matchedDeal = empAlt ? findCuratedDeal('', empAlt) : null;
    if (!matchedDeal) {
      const searchBlob = normalizeTextNoAccents(`${empAlt} ${titulo}`);
      for (const d of DEALS_DATA) {
        const stem = normalizeCompanyStem(d.empresa);
        if (stem.length >= 4 && searchBlob.includes(stem)) {
          matchedDeal = d;
          break;
        }
      }
    }

    const escopo = (escopoRaw.includes('cvm') || categoria === 'Waiver / AGD' || categoria === 'Downgrade Rating')
      ? 'cvm'
      : (matchedDeal || escopoRaw.includes('pipeline') ? 'pipeline' : 'mercado');

    out.push({
      id: 1100 + i,
      data_hora: dtStr || formatBrazilNowDateTime(),
      titulo,
      fonte,
      setor: matchedDeal ? matchedDeal.setor_macro : setorRaw,
      categoria,
      escopo,
      resumo,
      url: urlOrig || buildNewsItemUrl({ titulo, empresa_nome: matchedDeal ? matchedDeal.empresa : empAlt }),
      deal_id: matchedDeal ? matchedDeal.id : null,
      empresa_nome: matchedDeal ? matchedDeal.empresa : (empAlt || `Planilha Mestre // ${fonte}`)
    });
  }
  return out;
}

let LIVE_TIER0_DATA = [
  {
    "empresa": "Grupo Agroindustrial do Cerrado (Grãos, Soja/Milho)",
    "cnpj": "08.412.981/0001-34",
    "setor_macro": "Agronegócio & Silvicultura",
    "regiao": "Centro-Oeste (MT/GO)",
    "passivo_mm": 185,
    "score": 9.4,
    "janela": "45-60 dias",
    "vetores": "🔴 CENPROT (28 protestos em 30d / R$ 14,2M)\n🔴 Arresto de Safra (Art. 12135 TJMT)\n🔴 Rompimento Transação PGFN",
    "tese": "Tradings Globais (Cargill, Bunge, ADM), Revendas e Bancos do Agro (BB, Sicredi)",
    "fontes": "Barter / CPR Física e Financeira + Crédito Rural de Custeio"
  },
  {
    "empresa": "Rede Hospitalar & Operadora Regional Sul-Sudeste",
    "cnpj": "14.289.442/0001-89",
    "setor_macro": "Saúde & Farma",
    "regiao": "Sul / Sudeste (PR/SC/SP)",
    "passivo_mm": 260,
    "score": 9.2,
    "janela": "60-90 dias",
    "vetores": "🔴 Direção Fiscal ANS (DOU Seção 1)\n🔴 PEPT Trabalhista TRT-4\n🔴 CENPROT (22 protestos OPME/medicamentos)",
    "tese": "Bancos comerciais (Itaú, Bradesco, Santander), Fornecedores de OPME e Distribuidores Farma",
    "fontes": "Bancário Capital de Giro + Fornecedores Médicos + Passivo Trabalhista"
  },
  {
    "empresa": "Renovare Energia & Comercializadora S/A",
    "cnpj": "21.733.109/0001-55",
    "setor_macro": "Energia & Infraestrutura",
    "regiao": "Sudeste (SP) / Nordeste",
    "passivo_mm": 340,
    "score": 9.1,
    "janela": "30-45 dias",
    "vetores": "🔴 Inadimplemento Garantias CCEE MCP\n🔴 Downgrade CVM Debêntures (CCC) & AGD\n🔴 Protestos de Geradoras",
    "tese": "Debenturistas da 2ª Emissão, Bancos repassadores BNDES e Agentes da CCEE",
    "fontes": "Debêntures de Infraestrutura + Garantias Financeiras MCP CCEE"
  },
  {
    "empresa": "Rede Varejista Moda & Calçados Brasil (120 Lojas)",
    "cnpj": "05.118.774/0001-92",
    "setor_macro": "Varejo & Consumo",
    "regiao": "Sudeste / Sul",
    "passivo_mm": 145,
    "score": 8.8,
    "janela": "45-60 dias",
    "vetores": "🔴 Spike CENPROT (34 protestos em 45d / R$ 9,8M)\n🔴 Penhora Faturamento PGFN CPC 866\n🔴 8 Ações Despejo Shoppings",
    "tese": "Bancos privados (Itaú, Santander, Bradesco, Safra, Daycoval), Shopping Centers e Confeccionistas",
    "fontes": "Capital de Giro + Aluguéis Comerciais Mínimos + Fornecedores"
  },
  {
    "empresa": "Metalúrgica Autopeças & Componentes Pesados",
    "cnpj": "58.910.223/0001-44",
    "setor_macro": "Indústria & Manufatura",
    "regiao": "SP (Interior / Campinas)",
    "passivo_mm": 95,
    "score": 8.6,
    "janela": "60-90 dias",
    "vetores": "🔴 FIDC CVM em Amortização Antecipada\n🔴 Intimação SEIC Imóvel Fabril Art. 26\n🔴 19 Protestos Fornecedores Aço",
    "tese": "FIDC de Duplicatas Mercantis, Bancos Industriais (Bradesco, Santander) e Fornecedores de Aço",
    "fontes": "Antecipação de Recebíveis Bloqueados + Garantia Real de Galpão Fabril"
  },
  {
    "empresa": "TransLog Cargas Pesadas & Logística Rodoviária",
    "cnpj": "18.330.145/0001-18",
    "setor_macro": "Tecnologia & Serviços B2B",
    "regiao": "Sudeste / Centro-Oeste",
    "passivo_mm": 120,
    "score": 8.5,
    "janela": "45-60 dias",
    "vetores": "🔴 Busca e Apreensão Frota (65 caminhões)\n🔴 PEPT Trabalhista TRT-2\n🔴 Dívida Ativa PGFN (R$ 38M)",
    "tese": "Bancos de Montadoras (Mercedes, Scania, Volvo Financial), Distribuidoras de Diesel e Bancos",
    "fontes": "Alienação Fiduciária de Frota (Finame/Leasing) + Combustível"
  },
  {
    "empresa": "Engenharia & Construtora InfraBrasil",
    "cnpj": "03.771.890/0001-67",
    "setor_macro": "Construção Civil & Real Estate",
    "regiao": "Nacional (MG/SP/RJ)",
    "passivo_mm": 210,
    "score": 8.9,
    "janela": "60-75 dias",
    "vetores": "🔴 Sanção CEIS/CNEP/PNCP (Suspensão de Licitar)\n🔴 Cobrança Sinistro Seguro Garantia R$ 45M\n🔴 31 Protestos CENPROT",
    "tese": "Seguradoras Garantidoras (Pomerania, Pottencial, Junto), Bancos de Fiança (Daycoval, ABC Brasil) e Subempreiteiros",
    "fontes": "Seguro Garantia / Fianças Bancárias em Execução + Fornecedores de Maquinário"
  },
  {
    "empresa": "Concessionária Rodoviária das Colinas do Tietê",
    "cnpj": "10.450.881/0001-22",
    "setor_macro": "Energia & Infraestrutura",
    "regiao": "São Paulo (SP)",
    "passivo_mm": 420,
    "score": 9.6,
    "janela": "30-60 dias",
    "vetores": "🔴 Processo de Caducidade ARTESP\n🔴 AGD Debêntures Vencimento Antecipado\n🔴 Notificação Garantias Fiduciárias Pedágios",
    "tese": "Debenturistas da 1ª e 2ª Emissão, BNDES, Agência Reguladora (Multas Contratuais) e Construtoras",
    "fontes": "Project Finance Não-Recurso + Debêntures Incentivadas (Lei 12.431)"
  }
];

const BLOCKED_ENTITY_TOKEN_FNV1A = new Set(['cc2636e1']);

function fnv1a32Hex(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
}

function isBlockedEntityToken(text) {
  if (!text) return false;
  const norm = String(text)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
  const tokens = norm.split(/[^a-z0-9]+/).filter(Boolean);
  for (let i = 0; i < tokens.length; i++) {
    if (BLOCKED_ENTITY_TOKEN_FNV1A.has(fnv1a32Hex(tokens[i]))) return true;
  }
  return false;
}

function normalizeCompanyStem(name) {
  return String(name || '')
    .split('(')[0]
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\b(grupo|rede|s\.a\.|s\/a|sa|ltda|industria|comercio|participacoes|holding|do brasil|brasil)\b/g, ' ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function indexCuratedDeals(dealsArr) {
  BASE_CURATED_BY_CNPJ.clear();
  BASE_CURATED_BY_STEM.clear();
  let maxId = 0;
  (dealsArr || []).forEach(d => {
    if (!d || isBlockedEntityToken(d.empresa)) return;
    const numId = Number(d.id || 0);
    if (numId > maxId) maxId = numId;
    if (d.empresa) {
      ENRICHED_BY_COMPANY[d.empresa] = d;
      const preParen = normalizeTextNoAccents(String(d.empresa).split('(')[0].trim());
      if (preParen.length >= 3 && !BASE_CURATED_BY_STEM.has(preParen)) {
        BASE_CURATED_BY_STEM.set(preParen, d);
      }
      const stem = normalizeCompanyStem(d.empresa);
      if (stem.length >= 3 && !BASE_CURATED_BY_STEM.has(stem)) {
        BASE_CURATED_BY_STEM.set(stem, d);
      }
    }
    const digits = String(d.cnpj || '').replace(/\D/g, '');
    if (digits.length >= 11 && !BASE_CURATED_BY_CNPJ.has(digits)) {
      BASE_CURATED_BY_CNPJ.set(digits, d);
    }
  });
  if (maxId > 0) MAX_CURATED_DEAL_ID = maxId;
}

function findCuratedDeal(cnpj, empresa) {
  const digits = String(cnpj || '').replace(/\D/g, '');
  if (digits.length >= 11 && BASE_CURATED_BY_CNPJ.has(digits)) {
    return BASE_CURATED_BY_CNPJ.get(digits);
  }
  if (empresa && ENRICHED_BY_COMPANY[empresa]) {
    return ENRICHED_BY_COMPANY[empresa];
  }
  const preParen = normalizeTextNoAccents(String(empresa || '').split('(')[0].trim());
  if (preParen.length >= 3 && BASE_CURATED_BY_STEM.has(preParen)) {
    return BASE_CURATED_BY_STEM.get(preParen);
  }
  const stem = normalizeCompanyStem(empresa);
  if (stem.length >= 3 && BASE_CURATED_BY_STEM.has(stem)) {
    return BASE_CURATED_BY_STEM.get(stem);
  }
  return null;
}

function mergeDealWithCurated(liveItem, curated) {
  if (!curated) return liveItem;
  const merged = { ...curated, ...liveItem };
  merged.id = curated.id;

  if (curated.data_evento && (!liveItem.data_evento || curated.data_evento > liveItem.data_evento)) {
    merged.data_evento = curated.data_evento;
  }
  if (curated.data_adicao && (!liveItem.data_adicao || curated.data_adicao > liveItem.data_adicao)) {
    merged.data_adicao = curated.data_adicao;
  }
  if ((!liveItem.passivo_mm || liveItem.passivo_mm <= 0) && curated.passivo_mm > 0) {
    merged.passivo_mm = curated.passivo_mm;
    merged.passivo_display = formatNumberBR(curated.passivo_mm);
  }
  if ((!liveItem.processo || liveItem.processo === 'Em autuação') && curated.processo) {
    merged.processo = curated.processo;
  }
  if ((!liveItem.credores || liveItem.credores === 'Mapeamento em curso') && curated.credores) {
    merged.credores = curated.credores;
  }
  if ((!liveItem.advocacia || liveItem.advocacia === 'Em apuração') && curated.advocacia) {
    merged.advocacia = curated.advocacia;
  }
  if ((!liveItem.aj || liveItem.aj === 'N/A ou A Nomear') && curated.aj) {
    merged.aj = curated.aj;
  }

  // Preserve rich curated intelligence not stored in the 19-col sheet
  if (!liveItem.descricao_empresa && curated.descricao_empresa) {
    merged.descricao_empresa = curated.descricao_empresa;
  }
  if (!liveItem.energy_meta && curated.energy_meta) {
    merged.energy_meta = curated.energy_meta;
  }
  if (!liveItem.agro_meta && curated.agro_meta) {
    merged.agro_meta = curated.agro_meta;
  }
  if (!liveItem.model_params && curated.model_params) {
    merged.model_params = curated.model_params;
  }
  if (!liveItem.calendar_meta && curated.calendar_meta) {
    merged.calendar_meta = curated.calendar_meta;
  }
  if (!liveItem.url_noticia && curated.url_noticia) {
    merged.url_noticia = curated.url_noticia;
  }
  if (!liveItem.url_tribunal_cvm && curated.url_tribunal_cvm) {
    merged.url_tribunal_cvm = curated.url_tribunal_cvm;
  }
  if (!liveItem.agentes_fiduciarios && curated.agentes_fiduciarios) {
    merged.agentes_fiduciarios = curated.agentes_fiduciarios;
  }
  if (!liveItem.securitizadoras && curated.securitizadoras) {
    merged.securitizadoras = curated.securitizadoras;
  }
  if (Array.isArray(curated.watchdog_triggers) && curated.watchdog_triggers.length > 0) {
    merged.watchdog_triggers = curated.watchdog_triggers;
  }
  if (curated.tese && curated.tese.includes('(1)') && (!liveItem.tese || !liveItem.tese.includes('(1)'))) {
    merged.tese = curated.tese;
  }
  if (curated.uf && (liveItem.cidade === 'São Paulo' && liveItem.uf === 'SP') && (curated.uf !== 'SP' || curated.cidade !== 'São Paulo')) {
    merged.cidade = curated.cidade;
    merged.uf = curated.uf;
    merged.coordenadas = curated.coordenadas || liveItem.coordenadas;
    merged.regiao_macro = curated.regiao_macro || liveItem.regiao_macro;
  }

  return merged;
}

async function fetchLiveSheetInBackground(notifyUser = false) {
  const pill = document.getElementById('lastUpdateTime');
  try {
    const res = await fetchWithTimeout(`${APPS_SCRIPT_URL}?_cb=${Date.now()}`, 8000);
    if (!res.ok) {
      if (DEALS_DATA.length === 0) {
        initialLoadFailed = true;
        if (pill) pill.textContent = 'Offline • Falha ao carregar base';
        renderSectionContent();
      }
      return;
    }
    const json = await res.json();

    // Detecta se o endpoint Apps Script possui o roteador moderno v4.6/v4.7 ou se é implantação legada de aba única
    const hasModernRouter = Boolean(json && (json.version || Array.isArray(json.noticias) || Array.isArray(json.tier0)));
    gasSupportsActionRouter = hasModernRouter;

    let changed = false;

    if (json && json.status === 'success' && Array.isArray(json.data) && json.data.length > 0) {
      const parsed = parseSheetRows(json.data);
      if (parsed.length > 0) {
        DEALS_DATA = parsed;
        VALKNUT_DATA = DEALS_DATA;
        if (typeof window !== 'undefined') window.VALKNUT_DATA = DEALS_DATA;
        initialLoadFailed = false;
        saveDealsSnapshotToStorage(DEALS_DATA);
        enrichAllDeals();
        populateDropdownFilters();
        changed = true;
      }
    }

    const rawPresList = Array.isArray(json.tracking_pres) ? json.tracking_pres : (Array.isArray(json.pres) ? json.pres : []);
    if (json && json.status === 'success' && rawPresList.length > 0) {
      const parsedPres = [];
      const startIdx = String((rawPresList[0] && rawPresList[0][0]) || '').toLowerCase().includes('data') ? 1 : 0;
      const fallbackTodayIso = getBrazilTodayIso();
      for (let i = startIdx; i < rawPresList.length; i++) {
        const r = rawPresList[i];
        if (!r || !r[1]) continue;
        const emp = String(r[1] || '').trim();
        if (!emp || emp.toLowerCase().includes('empresa') || isBlockedEntityToken(emp)) continue;
        const matched = findCuratedDeal('', emp) || DEALS_DATA.find(d => normalizeTextNoAccents(d.empresa).includes(normalizeTextNoAccents(emp.split('(')[0].trim())));
        const statusProcedimento = String(r[5] || 'Em Negociação').trim();
        const quorumAdesao = String(r[6] || '').trim();
        parsedPres.push({
          data: normalizeIsoDateStr(r[0], fallbackTodayIso),
          empresa: emp,
          cnpj: matched ? matched.cnpj : (emp.toLowerCase().includes('braskem') ? '42.150.391/0001-70' : 'Mercado de Capitais'),
          setor: String(r[2] || (matched ? matched.setor_macro : 'Mercado de Capitais')).trim(),
          regiao: String(r[3] || (matched ? `${matched.cidade}/${matched.uf}` : 'SP/Nacional')).trim(),
          passivo_mm: parsePassivoMmValue(r[4]),
          status: statusProcedimento,
          quorum: quorumAdesao || 'Em apuração',
          quorum_status: quorumAdesao && !statusProcedimento.includes(quorumAdesao)
            ? `${statusProcedimento} • ${quorumAdesao}`
            : statusProcedimento,
          credores: String(r[7] || (matched ? matched.credores : 'N/D')).trim(),
          dip: String(r[8] || 'Não').trim(),
          tese: String(r[9] || '').trim(),
          obs: String(r[10] || '').trim(),
          assessor_legal: matched && matched.advocacia && !isGenericPlaceholderPlayer(matched.advocacia)
            ? matched.advocacia
            : String(r[9] || 'Creditor-Side / Advisory').trim(),
          deal_id: matched ? matched.id : null
        });
      }
      if (parsedPres.length > 0) {
        TRACKING_PRES_YTD_DATA = parsedPres;
        changed = true;
      }
    }

    if (json && json.status === 'success' && Array.isArray(json.tier0) && json.tier0.length > 0) {
      const t0Start = String((json.tier0[0] && json.tier0[0][0]) || '').toLowerCase().includes('empresa') ? 1 : 0;
      const parsedT0 = [];
      for (let i = t0Start; i < json.tier0.length; i++) {
        const r = json.tier0[i];
        if (!r || !r[0] || isBlockedEntityToken(r[0])) continue;
        parsedT0.push({
          empresa: String(r[0] || '').trim(),
          cnpj: String(r[1] || '').trim(),
          setor_macro: String(r[2] || 'Indústria & Manufatura').trim(),
          regiao: String(r[3] || 'SP').trim(),
          passivo_mm: parsePassivoMmValue(r[4]),
          score: parseFloat(String(r[5] || '9.0').replace(',', '.')) || 9.0,
          janela: String(r[6] || '45-60 dias').trim(),
          vetores: String(r[7] || '').trim(),
          tese: String(r[9] || '').trim(),
          fontes: String(r[10] || '').trim()
        });
      }
      if (parsedT0.length > 0) {
        LIVE_TIER0_DATA = parsedT0;
        changed = true;
      }
    }

    if (json && json.status === 'success' && Array.isArray(json.noticias) && json.noticias.length > 0) {
      const fromSheetNews = parseSheetNoticiasRows(json.noticias);
      if (fromSheetNews.length > 0) {
        const mergedSeed = [...fromSheetNews, ...(sheetLiveNewsItems || [])];
        const dedup = [];
        const seenN = new Set();
        mergedSeed.forEach(it => {
          const k = normalizeTextNoAccents(it.titulo).slice(0, 62);
          if (k && !seenN.has(k)) {
            seenN.add(k);
            dedup.push(it);
          }
        });
        sheetLiveNewsItems = dedup;
        changed = true;
      }
    }

    if (changed) {
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
      if (pill) pill.textContent = DEALS_DATA.length > 0 ? `Online: ${DEALS_DATA.length} leads` : 'Offline • Falha ao carregar base';
      if (notifyUser) showToast(`Sincronizado: ${DEALS_DATA.length} casos ativos e ${getAllCombinedNews().length} notícias carregadas!`);
    } else if (DEALS_DATA.length === 0) {
      initialLoadFailed = true;
      if (pill) pill.textContent = 'Offline • Falha ao carregar base';
      renderSectionContent();
    }
  } catch (err) {
    if (DEALS_DATA.length > 0) {
      if (pill) pill.textContent = `Base Ativa: ${DEALS_DATA.length} leads`;
    } else {
      initialLoadFailed = true;
      if (pill) pill.textContent = 'Offline • Falha ao carregar base';
      renderSectionContent();
    }
  }
}
const syncFromGoogleSheets = fetchLiveSheetInBackground;

// Cobertura completa das 27 Unidades Federativas do Brasil
const UF_CAPITAL_FALLBACKS = {
  SP: ['São Paulo', [-23.5505, -46.6333]],
  RJ: ['Rio de Janeiro', [-22.9068, -43.1729]],
  MG: ['Belo Horizonte', [-19.9167, -43.9345]],
  ES: ['Vitória', [-20.3155, -40.3128]],
  PR: ['Curitiba', [-25.4284, -49.2733]],
  RS: ['Porto Alegre', [-30.0346, -51.2177]],
  SC: ['Florianópolis', [-27.5954, -48.5480]],
  MT: ['Cuiabá', [-15.6010, -56.0974]],
  MS: ['Campo Grande', [-20.4697, -54.6201]],
  GO: ['Goiânia', [-16.6869, -49.2648]],
  DF: ['Brasília', [-15.7975, -47.8919]],
  BA: ['Salvador', [-12.9714, -38.5014]],
  PE: ['Recife', [-8.0476, -34.8770]],
  CE: ['Fortaleza', [-3.7172, -38.5433]],
  MA: ['São Luís', [-2.5307, -44.3068]],
  PI: ['Teresina', [-5.0892, -42.8016]],
  RN: ['Natal', [-5.7945, -35.2110]],
  PB: ['João Pessoa', [-7.1195, -34.8450]],
  AL: ['Maceió', [-9.6658, -35.7353]],
  SE: ['Aracaju', [-10.9472, -37.0731]],
  PA: ['Belém', [-1.4558, -48.4902]],
  TO: ['Palmas', [-10.1844, -48.3336]],
  AM: ['Manaus', [-3.1190, -60.0217]],
  RO: ['Porto Velho', [-8.7619, -63.9039]],
  AC: ['Rio Branco', [-9.9754, -67.8249]],
  AP: ['Macapá', [0.0349, -51.0694]],
  RR: ['Boa Vista', [2.8235, -60.6758]]
};

function parsePassivoMmValue(rawVal) {
  if (typeof rawVal === 'number') return isNaN(rawVal) ? 0 : Math.round(rawVal * 100) / 100;
  const s = String(rawVal || '0').replace(/R\$/gi, '').trim();
  if (!s) return 0;
  let num = 0;
  if (s.includes(',') && s.includes('.')) {
    num = parseFloat(s.replace(/\./g, '').replace(',', '.'));
  } else if (s.includes(',')) {
    num = parseFloat(s.replace(',', '.'));
  } else {
    num = parseFloat(s);
  }
  return isNaN(num) ? 0 : Math.round(num * 100) / 100;
}

function finalizeParsedDealStructure(item) {
  if (!item) return item;
  const rawBlob = `${item.credores || ''} ${item.perfil_passivo || ''} ${item.tese || ''} ${item.securitizadoras || ''}`;
  const strictSecs = extractStrictSecuritizadorasList(rawBlob);
  if (strictSecs.length > 0) {
    item.securitizadoras = strictSecs.join(', ');
  } else if (item.securitizadoras && (/\breit\b/i.test(item.securitizadoras) || /\bvert\b/i.test(item.securitizadoras) || /\beuro\b/i.test(item.securitizadoras))) {
    item.securitizadoras = 'Sem securitizadora reportada / Crédito Bancário Direto';
  } else if (!item.securitizadoras) {
    item.securitizadoras = 'Sem securitizadora reportada / Crédito Bancário Direto';
  }

  const mp = item.model_params || {};
  const sc = mp.split_classes || {};
  const cp = mp.classes_pct || {};
  const split = reconcileSixBucketSplit({
    extra: sc.extraconcursal_pct ?? cp.extraconcursal_fiduciario ?? 18,
    fiscal: sc.fiscal_pct ?? cp.fiscal_tributario ?? 7,
    c1: sc.classe_i_pct ?? cp.c1_trabalhista ?? 3,
    c2: sc.classe_ii_pct ?? cp.c2_garantia_real ?? 42,
    c3: sc.classe_iii_pct ?? cp.c3_quirografario ?? 27,
    c4: sc.classe_iv_pct ?? cp.c4_me_epp ?? 3
  });
  const haircutEst = Number(mp.haircut_estimado_pct || 55);
  item.model_params = {
    ...mp,
    haircut_estimado_pct: haircutEst,
    recuperacao_estimada_pct: 100 - haircutEst,
    ev_ativos_mm: Number(mp.ev_ativos_mm || Math.max(10, Math.round((Number(item.passivo_mm) || 100) * 0.58))),
    desagio_liquidacao_pct: Number(mp.desagio_liquidacao_pct || 38),
    split_classes: {
      extraconcursal_pct: split.extra,
      fiscal_pct: split.fiscal,
      classe_i_pct: split.c1,
      classe_ii_pct: split.c2,
      classe_iii_pct: split.c3,
      classe_iv_pct: split.c4
    },
    classes_pct: {
      extraconcursal_fiduciario: split.extra,
      fiscal_tributario: split.fiscal,
      c1_trabalhista: split.c1,
      c2_garantia_real: split.c2,
      c3_quirografario: split.c3,
      c4_me_epp: split.c4
    }
  };
  return item;
}

function parseSheetRows(rows) {
  const rawList = [];
  const sortedCityKeys = Object.keys(CITY_COORDINATES).sort((a, b) => b.split(',')[0].length - a.split(',')[0].length);
  const todayIso = getBrazilTodayIso();

  for (let r = 0; r < rows.length; r++) {
    const row = rows[r];
    if (!row || row.length < 3) continue;
    const empresa = String(row[2] || '').trim();
    if (!empresa || empresa.toLowerCase().includes('empresa/grupo') || isBlockedEntityToken(empresa)) continue;

    let passivoVal = parsePassivoMmValue(row[11]);

    const trib = String(row[6] || '');
    const reg = String(row[5] || '');
    const fase = String(row[8] || '');
    const tier = String(row[10] || '');
    const tese = String(row[16] || '');
    const credoresStr = String(row[12] || 'Mapeamento em curso');

    let cidade = '';
    let uf = '';
    for (const key of sortedCityKeys) {
      const [c, u] = key.split(',');
      if (reg.includes(c)) {
        cidade = c;
        uf = u;
        break;
      }
    }
    if (!cidade) {
      for (const key of sortedCityKeys) {
        const [c, u] = key.split(',');
        if (empresa.includes(c)) {
          cidade = c;
          uf = u;
          break;
        }
      }
    }

    if (!uf) {
      const mSlash = reg.toUpperCase().match(/[/,\-\s]([A-Z]{2})(?:\b|\s|\(|$)/);
      const mRegExact = reg.trim().toUpperCase().match(/^([A-Z]{2})$/);
      const mTj = trib.toUpperCase().match(/\bTJ([A-Z]{2})\b/);
      uf = (mSlash && UF_TO_REGION[mSlash[1]] ? mSlash[1] : null)
        || (mRegExact && UF_TO_REGION[mRegExact[1]] ? mRegExact[1] : null)
        || (mTj && UF_TO_REGION[mTj[1]] ? mTj[1] : 'SP');
    }
    if (!cidade) {
      const cleanReg = reg.replace(/\(.*?\)/g, '').trim();
      const firstPart = cleanReg.split(/[/,-]/)[0].trim();
      if (firstPart.length >= 3 && !UF_TO_REGION[firstPart.toUpperCase()]) {
        cidade = firstPart;
      } else {
        for (const key of sortedCityKeys) {
          const [c, u] = key.split(',');
          if (trib.includes(c)) {
            cidade = c;
            if (!uf) uf = u;
            break;
          }
        }
        if (!cidade) {
          cidade = (UF_CAPITAL_FALLBACKS[uf] && UF_CAPITAL_FALLBACKS[uf][0]) || 'São Paulo';
        }
      }
    }

    const coord = CITY_COORDINATES[`${cidade},${uf}`]
      || (UF_CAPITAL_FALLBACKS[uf] && UF_CAPITAL_FALLBACKS[uf][1])
      || [-23.5505, -46.6333];
    const regiaoMacro = UF_TO_REGION[uf] || 'Sudeste';

    // Precedência estrita: Falência / Liquidação (incluindo "Liquidação Extrajudicial" BACEN/SUSEP/ANS!) DEVE vir ANTES de "extrajudicial" (PRE Classe 128)!
    const faseLower = fase.toLowerCase();
    const tierLower = tier.toLowerCase();
    let tipoProcesso = 'PRJ';
    let subtipoProcesso = 'PRJ';
    if (
      faseLower.includes('falência') ||
      faseLower.includes('falencia') ||
      faseLower.includes('autofalência') ||
      faseLower.includes('autofalencia') ||
      faseLower.includes('liquidação') ||
      faseLower.includes('liquidacao') ||
      faseLower.includes('classe 110') ||
      faseLower.includes('convolação') ||
      faseLower.includes('convolacao')
    ) {
      tipoProcesso = 'PRJ';
      subtipoProcesso = 'Falência / Liquidação';
    } else if (faseLower.includes('extrajudicial') || faseLower.includes('classe 128') || faseLower.includes('128') || faseLower.includes('12154') || /\bpre\b/i.test(faseLower)) {
      tipoProcesso = 'PRE';
      subtipoProcesso = 'PRE';
    } else if (faseLower.includes('cautelar') || faseLower.includes('20-b') || faseLower.includes('pré-rj') || faseLower.includes('pre-rj') || faseLower.includes('tutela') || faseLower.includes('constatação prévia') || faseLower.includes('constatacao previa')) {
      tipoProcesso = 'Cautelar / Pré-RJ';
      subtipoProcesso = 'Cautelar / Pré-RJ';
    } else if (
      faseLower.includes('precursor') ||
      faseLower.includes('execução') ||
      faseLower.includes('execucao') ||
      faseLower.includes('monitoramento') ||
      (faseLower.includes('rating') && !faseLower.includes('rj') && !faseLower.includes('judicial')) ||
      (tierLower.includes('tier 0') && !faseLower.includes('judicial') && !faseLower.includes('128') && !faseLower.includes('129') && !faseLower.includes('liquida'))
    ) {
      tipoProcesso = 'Tier 0';
      subtipoProcesso = 'Tier 0';
    }

    const teseLower = tese.toLowerCase();
    let stratId = 'watchdog';
    if (tipoProcesso === 'Tier 0') stratId = 'precursor';
    else if (teseLower.includes('dip') || teseLower.includes('upi') || teseLower.includes('m&a') || teseLower.includes('leilão')) stratId = 'dip';
    else if (tipoProcesso === 'PRE' || tipoProcesso === 'Cautelar / Pré-RJ') stratId = 'consensual';

    let scoreVal = typeof row[9] === 'number' ? row[9] : parseFloat(String(row[9] || '8.5').replace(',', '.'));
    if (isNaN(scoreVal) || scoreVal > 10) scoreVal = 8.8;

    const dataEvento = normalizeIsoDateStr(row[0], todayIso);
    const dataAdicao = normalizeIsoDateStr(row[1], todayIso);

    const rawSetor = String(row[4] || 'Indústria & Manufatura');
    const sLow = normalizeTextNoAccents(rawSetor);
    let setorMacro = rawSetor;
    if (sLow.includes('agro') || sLow.includes('insumos') || sLow.includes('silvicultura') || sLow.includes('sementes')) setorMacro = 'Agronegócio & Silvicultura';
    else if (sLow.includes('energia') || sLow.includes('infra')) setorMacro = 'Energia & Infraestrutura';
    else if (sLow.includes('varejo') || sLow.includes('consumo') || sLow.includes('hotel')) setorMacro = 'Varejo & Consumo';
    else if (sLow.includes('logistica') || sLow.includes('transporte')) setorMacro = 'Logística & Transporte';
    else if (sLow.includes('saude') || sLow.includes('farma') || sLow.includes('medicamento')) setorMacro = 'Saúde & Farma';
    else if (sLow.includes('imobili') || sLow.includes('constru') || sLow.includes('incorpor')) setorMacro = 'Imobiliário & Construção';
    else if (sLow.includes('tecnologia') || sLow.includes('servicos b2b') || sLow.includes('terceiriz') || sLow.includes('educac') || sLow.includes('telecom')) setorMacro = 'Tecnologia & Serviços B2B';
    else if (sLow.includes('financ') || sLow.includes('securitiz')) setorMacro = 'Serviços Financeiros & Securitização';

    rawList.push({
      id: rawList.length + 1,
      data_evento: dataEvento,
      data_adicao: dataAdicao,
      empresa,
      cnpj: String(row[3] || ''),
      setor_detalhe: rawSetor,
      setor_macro: setorMacro,
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

  // Deduplicação robusta: por CNPJ válido de 14 dígitos OU nome-base pré-'(' / stem corporativo, prevalecendo a linha MAIS RECENTE (posterior) na planilha!
  const dedupedList = [];
  const indexByCnpj14 = new Map();
  const indexByBaseName = new Map();
  const indexByStem = new Map();

  rawList.forEach(item => {
    const digits = String(item.cnpj || '').replace(/\D/g, '');
    const cnpj14 = digits.length === 14 ? digits : '';
    const basePreParen = normalizeTextNoAccents(String(item.empresa || '').split('(')[0].trim());
    const stemKey = normalizeCompanyStem(item.empresa);

    let existingIdx = -1;
    if (cnpj14 && indexByCnpj14.has(cnpj14)) {
      existingIdx = indexByCnpj14.get(cnpj14);
    } else if (basePreParen.length >= 3 && indexByBaseName.has(basePreParen)) {
      existingIdx = indexByBaseName.get(basePreParen);
    } else if (stemKey.length >= 4 && indexByStem.has(stemKey)) {
      existingIdx = indexByStem.get(stemKey);
    }

    if (existingIdx === -1) {
      const newIdx = dedupedList.length;
      dedupedList.push(item);
      if (cnpj14) indexByCnpj14.set(cnpj14, newIdx);
      if (basePreParen.length >= 3) indexByBaseName.set(basePreParen, newIdx);
      if (stemKey.length >= 4) indexByStem.set(stemKey, newIdx);
    } else {
      const prev = dedupedList[existingIdx];
      // A linha posterior prevalece (atualização de fase, passivo, processo, tese), preservando campos preenchidos da anterior caso a posterior esteja vazia
      const mergedDup = {
        ...prev,
        ...item,
        cnpj: cnpj14 ? item.cnpj : (String(prev.cnpj || '').replace(/\D/g, '').length === 14 ? prev.cnpj : (item.cnpj || prev.cnpj)),
        passivo_mm: item.passivo_mm > 0 ? item.passivo_mm : prev.passivo_mm,
        passivo_display: item.passivo_mm > 0 ? item.passivo_display : prev.passivo_display,
        processo: (item.processo && item.processo !== 'Em autuação') ? item.processo : prev.processo,
        credores: (item.credores && item.credores !== 'Mapeamento em curso') ? item.credores : prev.credores,
        advocacia: (item.advocacia && item.advocacia !== 'Em apuração') ? item.advocacia : prev.advocacia,
        aj: (item.aj && item.aj !== 'N/A ou A Nomear') ? item.aj : prev.aj,
        tese: item.tese || prev.tese
      };
      dedupedList[existingIdx] = mergedDup;
      if (cnpj14) indexByCnpj14.set(cnpj14, existingIdx);
      if (basePreParen.length >= 3) indexByBaseName.set(basePreParen, existingIdx);
      if (stemKey.length >= 4) indexByStem.set(stemKey, existingIdx);
    }
  });

  // Merge não-destrutivo contra a base curada deals.json + IDs estáveis
  const mergedList = [];
  const matchedCuratedIds = new Set();
  const unmatchedNewItems = [];

  dedupedList.forEach(item => {
    const curated = findCuratedDeal(item.cnpj, item.empresa);
    if (curated && !matchedCuratedIds.has(curated.id)) {
      matchedCuratedIds.add(curated.id);
      mergedList.push(finalizeParsedDealStructure(mergeDealWithCurated(item, curated)));
    } else if (!curated) {
      unmatchedNewItems.push(finalizeParsedDealStructure(item));
    }
  });

  // Preserva todos os casos curados de deals.json (tanto por CNPJ quanto por stem) que não vieram na aba ao vivo
  const allCuratedCandidates = [...BASE_CURATED_BY_CNPJ.values(), ...BASE_CURATED_BY_STEM.values()];
  allCuratedCandidates.forEach(curated => {
    if (curated && !matchedCuratedIds.has(curated.id) && !isBlockedEntityToken(curated.empresa)) {
      matchedCuratedIds.add(curated.id);
      mergedList.push(finalizeParsedDealStructure({ ...curated }));
    }
  });

  unmatchedNewItems.sort((a, b) => {
    const cmpAdd = String(a.data_adicao || '').localeCompare(String(b.data_adicao || ''));
    if (cmpAdd !== 0) return cmpAdd;
    return String(a.cnpj || '').localeCompare(String(b.cnpj || ''));
  });
  let nextNewId = (MAX_CURATED_DEAL_ID || 154) + 1;
  unmatchedNewItems.forEach(item => {
    item.id = nextNewId++;
    mergedList.push(item);
  });

  return mergedList;
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
    'Agentes_Fiduciarios',
    'Securitizadoras',
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
      quoteCSVField(d.agentes_fiduciarios || ''),
      quoteCSVField(d.securitizadoras || ''),
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
  a.download = `valknut_radar_${getBrazilTodayIso()}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(`CSV PT-BR exportado com ${deals.length} casos!`);
}

async function exportXLSX() {
  const deals = getFilteredDeals();
  if (deals.length === 0) {
    showToast('Nenhum registro no recorte para exportar.');
    return;
  }

  const ok = await ensureSheetJsLoaded();

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
    'Extraconcursal_Pct',
    'Fiscal_Pct',
    'Classe_I_Pct',
    'Classe_II_Pct',
    'Classe_III_Pct',
    'Classe_IV_Pct',
    'Score',
    'Principais_Credores',
    'Agentes_Fiduciarios',
    'Securitizadoras',
    'Causa_da_Crise',
    'Gargalo_Imediato',
    'Tese_de_Mandato'
  ];

  const aoa = [headers];
  deals.forEach(d => {
    const parsed = parseThesisRegex(d.tese);
    const hPct = d.model_params?.haircut_estimado_pct || 55;
    const rPct = 100 - hPct;
    const sc = d.model_params?.split_classes || {};
    const cp = d.model_params?.classes_pct || {};
    const split = reconcileSixBucketSplit({
      extra: sc.extraconcursal_pct ?? cp.extraconcursal_fiduciario ?? 18,
      fiscal: sc.fiscal_pct ?? cp.fiscal_tributario ?? 7,
      c1: sc.classe_i_pct ?? cp.c1_trabalhista ?? 3,
      c2: sc.classe_ii_pct ?? cp.c2_garantia_real ?? 42,
      c3: sc.classe_iii_pct ?? cp.c3_quirografario ?? 27,
      c4: sc.classe_iv_pct ?? cp.c4_me_epp ?? 3
    });
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
      Number(split.extra),
      Number(split.fiscal),
      Number(split.c1),
      Number(split.c2),
      Number(split.c3),
      Number(split.c4),
      Number(Number(d.score || 8.5).toFixed(1)),
      d.credores || '',
      d.agentes_fiduciarios || '',
      d.securitizadoras || '',
      d.causa_crise || parsed.causa,
      d.gargalo_imediato || parsed.gargalo,
      d.tese_mandato || parsed.mandato
    ]);
  });

  if (ok && typeof XLSX !== 'undefined') {
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
      { wch: 14 },
      { wch: 12 },
      { wch: 12 },
      { wch: 12 },
      { wch: 12 },
      { wch: 12 },
      { wch: 9 },
      { wch: 55 },
      { wch: 35 },
      { wch: 35 },
      { wch: 55 },
      { wch: 55 },
      { wch: 55 }
    ];

    ws['!views'] = [{ state: 'frozen', xSplit: 0, ySplit: 1 }];

    for (let r = 1; r < aoa.length; r++) {
      const passCell = ws[XLSX.utils.encode_cell({ r, c: 12 })];
      if (passCell) passCell.z = '#,##0.00';
      const scoreCell = ws[XLSX.utils.encode_cell({ r, c: 21 })];
      if (scoreCell) scoreCell.z = '0.0';
    }

    wb.Props = {
      Title: 'VALKNUT — SPECIAL SITUATIONS // Base Concursal v4.7',
      Author: 'Valknut Special Situations'
    };

    XLSX.utils.book_append_sheet(wb, ws, 'Valknut Special Situations');
    XLSX.writeFile(wb, `valknut_radar_${getBrazilTodayIso()}.xlsx`);
    showToast(`Planilha Excel (.xlsx) exportada com ${deals.length} casos e estrutura em 6 faixas!`);
  } else {
    exportCSV();
  }
}
