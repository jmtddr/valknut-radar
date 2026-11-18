# VALKNUT — SPECIAL SITUATIONS // Radar de Inteligência Concursal & Distressed Debt (v5.0)

Plataforma analítica institucional de originação tática, monitoramento processual e modelagem financeira para **Special Situations**, **Reestruturação de Dívidas (RJ / PRE / Cautelares Art. 20-B)**, **Mercado de Capitais (Debêntures, CRAs, CRIs, FIDCs)** e **Ativos Distressed (UPIs)** no Brasil, consolidando **180 grupos econômicos únicos** (**R$ 174,80 bilhões** monitorados), **59 notícias curadas** na Planilha Mestre e sincronização em tempo real.

## Arquitetura Técnica (Release v5.0 — `20261118v50`)

- **Arquitetura Flat na Raiz & Hidratação Híbrida Stale-While-Revalidate (`index.html`, `styles.css`, `app.js`, `deals.json`, `live-news.json`, `live-energy.json`)**:
  - Todos os artefatos de aplicação residem estritamente na raiz do repositório (`index.html`, `app.js`, `styles.css`, `Code.gs`, `deals.json`, `live-news.json`, `live-energy.json`, `update_live_news.py`, `update_live_energy.py`), garantindo conformidade integral com limites `MAX_PATH` (Windows/OneDrive) e deploy direto via GitHub Pages.
  - **Hidratação em 3 Camadas Concorrentes (Zero Cold-Start Flash)**: (1) `localStorage` (`vk_deals_snapshot_v5`) em `0ms`, (2) Seed estático na CDN (`./deals.json?v=20261118v50`, `./live-news.json?v=20261118v50` e `./live-energy.json?v=20261118v50`) em milissegundos com *skeleton shimmer* sem flash de `R$ 0,0 Bi` e (3) Revalidação em *background* com o Google Apps Script (`&nocache=1` em sincronização manual).
  - Interface institucional **WCAG 2.1 AA**, atalhos globais de busca (`/` e `Ctrl+K`/`Cmd+K`), *focus trap* cíclico (`Tab`/`Shift+Tab`/`Escape`) nos 3 modais (`#detailModal`, `#diretrizesModal`, `#compsModal`) e *Subresource Integrity (SRI SHA-384)* em todas as 5 CDNs externas.
- **Back-End Serverless, Telemetria Elétrica Real ONS/CCEE & Robô RSS (`Code.gs`, `update_live_energy.py`, `update_live_news.py`, `.github/workflows/`)**:
  - `Code.gs` (**Release v5.0**): Exporta 6 abas estruturadas (`data`, `noticias`, `tracking_pres`, `tier0`, `mandatos`, `diretrizes`) com cache particionado UTF-8 seguro (`15x85KB`), deduplicação automática por CNPJ/stem, decodificação de entidades HTML em 2 passes (`decodeHtmlEntities_`), *proxy* seguro ONS AWS S3 + Integra + CCEE (`?action=ons_ccee`), *rate-limiting* público de `?nocache=1` e rota `?action=health`.
  - `update_live_energy.py` (`update-live-energy.yml`): Pipeline autônomo agendado 2x/dia (`15:30` e `22:30` UTC) consolidando 30 dias operacionais de 24h (`SIN`, `SE/CO`, `S`, `NE`, `N`) diretamente do repositório oficial **ONS AWS S3 OpenData** (`EAR_DIARIO_SUBSISTEMA`, `BALANCO_ENERGIA_SUBSISTEMA`, `RESTRICAO_COFF_EOLICA`, `RESTRICAO_COFF_FOTOVOLTAICA`, `CMO_SEMIHORARIO`), **ONS Integra** e **CCEE Dados Abertos** (com fallback regulatório ANEEL REN 1.032/2022 em caso de bloqueio Akamai).
  - `update_live_news.py` (`update-live-news.yml`): Robô autônomo agendado via GitHub Actions preservando integralmente as **59 notícias curadas** (`900 <= id < 100000`), decodificando entidades HTML (`&nbsp;`, `&#xHHH;`, `&amp;`) e reconciliando `deal_id` por CNPJ, número CNJ, ticker e *longest-alias word-boundary* contra os **180 grupos monitorados**.

## 8 Módulos Executivos + Governança Metodológica

1. **Pipeline (`180` Dossiês)**: Pipeline Consolidado, *Creditor-Side & Watchdog*, *DIP Financing & M&A*, *Consensual & Art. 20-B*, *Debêntures/CRAs/FIDCs*, *Radar Preditivo Tier 0*, **Mandatos Ativos (CRM)** (`LIVE_MANDATOS_DATA`) e **Minha Watchlist (★)** (`vk_watchlist_ids_v1`), além de **Matriz Comparativa Lado a Lado (*Comps*)**.
2. **Notícias & Waivers**: Radar imediato em 1 clique para *Waivers, AGDs & Downgrades*, *Pedidos de RJ & Cautelares 20-B* e *Leilões de UPI & Falências*.
3. **Credores & Players**: Hub unificado de *Stakeholders* (*Bancômetro Geral*, *Bancos Privados & Público/Coop*, *DCM, Agentes Fiduciários & Securitizadoras*, *Bancas Jurídicas*, *Administradores Judiciais* e *Varas Empresariais*).
4. **UPIs & Ativos**: Catálogo de M&A Distressed elegível sob os Arts. 60 e 142 da Lei 11.101/05.
5. **Prazos & AGCs**: Cronograma regressivo, grade mensal interativa, editais de AGC, janelas Art. 20-B e exportação `.ics`.
6. **Energia & Infra**: Telemetria horária real de 30 dias do SIN e subsistemas (**ONS AWS S3 + CCEE** via `live-energy.json`), *Curtailment* eólico/solar por código ONS (`ENE`/`CNF`/`REL`), *PLD Horário* e pipeline de debêntures de infraestrutura.
7. **Mercado & Mapa**: Cartografia interativa das 27 UFs + *Macro Analytics* (*Visão Setorial & Funil*, *Matriz Quantitativa*, *Tracking PREs YTD* e *Curva de Passivo*).
8. **Modelagem & Pitch**: Calculadora *Success Fee & Retainer* (com *Offset*), *Waterfall* de 6 classes (100% reconciliado sob os Arts. 49 §3º e 83 da LRF), Simulador de Quórum de AGC & *Cram Down* (Arts. 45 e 58 §1º), Benchmarks de *Haircut* e Gerador de Proposta Executiva (`.pptx`).
- **Governança Metodológica (`ⓘ Metodologia`)**: Gaveta executiva detalhando piso de corte (`>= R$ 30M`), tribunais monitorados, classes processuais CNJ (`129`, `128`, `110`, `20-B`, `51-A`) e fontes primárias (`LIVE_DIRETRIZES_DATA`).

## Implantação do Google Apps Script Backend (Release v5.0)

1. Abra a Planilha Mestre no Google Sheets e acesse **Extensões > Apps Script**.
2. Substitua integralmente o conteúdo de `Código.gs` pelo código de `Code.gs` (**Release v5.0**) na raiz do repositório e salve (`Ctrl+S`).
3. Em **Implantar > Gerenciar implantações**, edite a implantação ativa, selecione **"Nova versão"** e clique em **Implantar**.
4. Valide abrindo `<APPS_SCRIPT_URL>?action=health` — resposta esperada: `{"status":"ok","version":"5.0","router":true,...}`.
