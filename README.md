# VALKNUT — SPECIAL SITUATIONS // Radar de Inteligência Concursal & Distressed Debt (v6.0)

Plataforma analítica institucional de originação pré-mídia, inteligência concursal, mapeamento de decisores (QSA) e modelagem financeira para **Special Situations**, **Reestruturação de Dívidas (RJ / PRE / Cautelares Art. 20-B)**, **Mercado de Capitais (Debêntures, CRAs, CRIs, FIDCs)** e **Ativos Distressed (UPIs)** no Brasil, consolidando **172 grupos econômicos reais** (**R$ 173,02 bilhões** monitorados — 0 casos fictícios), **45 sinais oficiais pré-mídia da CVM (IPE 2026)**, **177 CNPJs enriquecidos com QSA da Receita Federal** e **Top 35 complexos eólicos/solares em curtailment (ONS S3)**.

## Arquitetura Técnica (Release v6.0 — `20261119v60`)

- **Arquitetura Flat na Raiz & Hidratação Híbrida Stale-While-Revalidate (`index.html`, `styles.css`, `app.js`, `deals.json`, `live-news.json`, `live-energy.json`, `live-leads.json`)**:
  - Todos os artefatos de aplicação e robôs residem estritamente na raiz do repositório (`index.html`, `app.js`, `styles.css`, `Code.gs`, `deals.json`, `live-news.json`, `live-energy.json`, `live-leads.json`, `update_live_news.py`, `update_live_energy.py`, `update_lead_radar.py`), preservando conformidade integral com limites `MAX_PATH` (Windows/OneDrive) e deploy direto via GitHub Pages.
  - **Hidratação em 3 Camadas Concorrentes (Zero Cold-Start Flash)**: (1) `localStorage` (`vk_deals_snapshot_v5`, `vk_live_energy_v5`, `vk_live_leads_v6`) em `0ms`, (2) Seed estático na CDN (`?v=20261119v60`) em milissegundos e (3) Revalidação em *background* com o Google Apps Script (`&nocache=1` em sincronização manual).
  - Interface institucional **WCAG 2.1 AA** na paleta verde-floresta / oliva / off-white (`#063630`, `#0A4039`, `#9EA581`, `#F4F5F2`), atalhos globais de busca (`/` e `Ctrl+K`/`Cmd+K`), *focus trap* cíclico nos modais e *Subresource Integrity (SRI SHA-384)* intacto em todas as 5 CDNs externas.
- **Robôs Autônomos 24/7 & Back-End Serverless (`update_lead_radar.py`, `update_live_energy.py`, `update_live_news.py`, `Code.gs`, `.github/workflows/`)**:
  - `update_lead_radar.py` (`update-live-leads.yml`): Agendado 2x/dia (`11:15` e `18:15` UTC) coletando **sinais oficiais pré-mídia da CVM Dados Abertos (IPE 2026)** — AGDs, pedidos de waiver/PIK, suspensão de amortização, liberação de conta vinculada, Cautelares Art. 20-B, PREs e carve-outs — além de sonda oportunista DJEN/CNJ e **enriquecimento incremental do QSA (Receita Federal via BrasilAPI / CNPJ.ws)** gravando `live-leads.json`.
  - `update_live_energy.py` (`update-live-energy.yml`): Agendado 2x/dia (`15:30` e `22:30` UTC) consolidando 30 dias operacionais de 24h (`SIN`, `SE/CO`, `S`, `NE`, `N`) + ranking **Top 35 complexos eólicos e solares em curtailment (`top_curtailment_plants`)** diretamente dos CSVs oficiais do **ONS AWS S3 OpenData** com perda estimada de receita (benchmark R$ 180/MWh) e razão predominante (`ENE`/`CNF`/`REL`).
  - `update_live_news.py` (`update-live-news.yml`): Robô RSS 24/7 preservando as **59 notícias curadas** (`900 <= id < 100000`), cobrindo Waivers/AGDs, Downgrades, Pedidos de RJ, **UPIs / Stalking Horse / Carve-outs**, **Caducidade ANEEL / Curtailment / CCEE** e **Legal Claims / Ativos Non-Core / DIP**.
  - `Code.gs` (**Release v6.0**): Exporta 6 abas estruturadas (`data`, `noticias`, `tracking_pres`, `tier0`, `mandatos`, `diretrizes`) com cache particionado UTF-8 (`15x85KB`), allowlist estrita anti-SSRF (incluindo `brasilapi.com.br`), sonda oportunista DJEN/CNJ e rota `?action=health`.

## 8 Módulos Executivos + Inteligência de Originação (v6.0)

1. **Pipeline (`172` Grupos Reais + Radar Pré-Mídia CVM)**: Recortes rápidos **🎯 Sweet Spot (R$ 100M–2,5B)** e **Sem Mega-Deals (≤ R$ 3 Bi)**, **Origination Fit Score (`0–100`)** ordenável na tabela e cards, **Radar Preditivo Tier 0 100% real (CVM IPE 2026)** com link direto para o PDF oficial CVM, **Mandatos Ativos (CRM)**, **Minha Watchlist (★)** e **Comparador Lado a Lado (*Comps*)**.
2. **Notícias & Waivers**: Radar imediato em 1 clique para *Waivers, AGDs & Downgrades*, *Pedidos de RJ & Cautelares 20-B* e *Leilões de UPI, Carve-outs & Falências*.
3. **Credores & Players**: Hub unificado de *Stakeholders* (*Bancômetro Geral*, *Bancos Privados & Público/Coop*, *DCM, Agentes Fiduciários & Securitizadoras*, *Bancas Jurídicas*, *Administradores Judiciais* e *Varas Empresariais*).
4. **UPIs & Ativos**: Catálogo de M&A Distressed elegível sob os Arts. 60 e 142 da Lei 11.101/05.
5. **Prazos & AGCs**: Cronograma regressivo, grade mensal interativa, editais de AGC, janelas Art. 20-B e exportação `.ics`.
6. **Energia & Infra**: Telemetria horária real de 30 dias do SIN e subsistemas (**ONS AWS S3 + CCEE**), **⚡ Usinas em Curtailment (ONS Top 35)** filtrável por submercado e fonte (Eólica/Solar) com atalhos de prospecção de SPEs/CFOs, *PLD Horário* e pipeline de debêntures de infraestrutura.
7. **Mercado & Mapa**: Cartografia interativa das 27 UFs + *Macro Analytics* (*Visão Setorial & Funil*, *Matriz Quantitativa*, *Tracking PREs YTD* e *Curva de Passivo*).
8. **Modelagem & Pitch**: Calculadora *Success Fee & Retainer*, *Waterfall* de 6 classes, Simulador de Quórum AGC & *Cram Down*, Benchmarks de *Haircut* e **Gerador de Proposta Comercial (`.pptx` — 8 slides, 6 ângulos de mandato incluindo Carve-out Pós-Execução e Monetização de Ativos Non-Core, com Slide dedicado de Governança, QSA & Estratégia de Entrada)**.
- **Tear Sheet — 5ª Aba `🎯 Abordagem & Decisores (QSA)`**: Exibe o QSA oficial da Receita Federal (com consulta ao vivo sob demanda via BrasilAPI), Breakdown do Fit Score, **Mapa de 3 Portas de Entrada** (Credores/Fiduciários, Bancas/AJ, Decisores Diretos QSA/C-Level) com atalhos de busca no LinkedIn e **Estúdio de Abordagem Executiva** (1 clique para copiar).
- **Governança Metodológica (`ⓘ Metodologia`)**: Gaveta executiva detalhando piso de corte, tribunais monitorados, classes processuais CNJ e carimbo de sincronização (`Release v6.0`).

## Implantação do Google Apps Script Backend (Release v6.0)

1. Abra a Planilha Mestre no Google Sheets e acesse **Extensões > Apps Script**.
2. Substitua integralmente o conteúdo de `Código.gs` pelo código de `Code.gs` (**Release v6.0**) na raiz do repositório e salve (`Ctrl+S`).
3. Em **Implantar > Gerenciar implantações**, edite a implantação ativa, selecione **"Nova versão"** e clique em **Implantar**.
4. Valide abrindo `<APPS_SCRIPT_URL>?action=health` — resposta esperada: `{"status":"ok","version":"6.0","router":true,...}`.
