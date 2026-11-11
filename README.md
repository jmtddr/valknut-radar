# VALKNUT — SPECIAL SITUATIONS // Radar de Inteligência Concursal & Distressed Debt (v4.7)

Plataforma analítica institucional de originação tática, monitoramento processual e modelagem financeira para **Special Situations**, **Reestruturação de Dívidas (RJ / PRE / Cautelares Art. 20-B)**, **Mercado de Capitais (Debêntures, CRAs, CRIs, FIDCs)** e **Ativos Distressed (UPIs)** no Brasil, consolidando **154 casos auditados** com reconciliação integral de passivos, CNPJs oficiais e geolocalização verificada.

## Arquitetura Técnica (Release v4.7)

- **Front-End Estático Desacoplado & Performance (`index.html`, `styles.css`, `app.js`)**:
  - Interface institucional clara de alto contraste (**WCAG AA**), paleta corporativa Valknut (`#063630` / `#38686A` / `#A5AC82` / `#E6E9DC`), navegação acessível via teclado (`role="tablist"`, setas direcionais, *focus trap* em modais) e *Subresource Integrity (SRI)* nas dependências críticas.
  - **Carregamento Sob Demanda (*Lazy-Loaded Bundles*)**: As bibliotecas pesadas de exportação corporativa (**SheetJS / `.xlsx`** e **PptxGenJS / `.pptx`**) são carregadas dinamicamente sob demanda apenas no acionamento de download de planilhas ou propostas executivas, eliminando bloqueio de *main thread* no carregamento inicial.
  - **Base Verificada de 154 Casos (`deals.json`) + Sincronização Incremental**: Carregamento instantâneo de **154 dossiês verificados** (com CNPJs validados por Módulo-11 perante CVM/RFB, zero falsos positivos em securitizadoras, links diretos aos portais oficiais de busca processual dos tribunais/CVM e coordenadas *onshore* precisas com *jitter* determinístico), combinado à sincronização incremental deduplicada com a Planilha Mestre e `live-news.json`.
  - Paginação analítica configurável (`50`, `100` ou `Todos`) e persistência integral do estado de navegação e filtros via hash de URL (`#sec=...&sub=...&uf=...&setor=...`).
- **Back-End Serverless Blindado & CI/CD Contínuo (`_backend/`, `.github/workflows/`)**:
  - `_backend/Code.gs` (**Release v4.7**): Motor Google Apps Script endurecido para produção com cache particionado seguro para UTF-8 acentuado (`CacheService` em até 12 blocos de `42.000` caracteres, respeitando o teto de 100 KB por chave até ~500 KB), deduplicação automática de leads na leitura por CNPJ válido ou nome-base, proteção contra *Spreadsheet Formula Injection* (`sanitizeSheetCell_`), poda automática da aba `Noticias` em 500 linhas, *rate-limiting* público de `?nocache=1` (janela de 60s contra *cache-bypass DoS*), proxy RSS com até 2 redirecionamentos HTTPS verificados contra *allowlist* anti-SSRF, proxy CNJ/DJEN com cache de 5 minutos e *fallback* JSON seguro, e rota diagnóstica `?action=health`.
  - `_backend/update_live_news.py` + `.github/workflows/update-live-news.yml`: Robô autônomo agendado via GitHub Actions (com controle de concorrência `sync-live-news`, `git pull --rebase` e acionamento automático de *rebuild* do GitHub Pages via API REST), aplicando classificação estrita de *Downgrades de Rating*, reconciliação por *word-boundary* de empresas/tickers contra os 154 casos e IDs determinísticos 100% únicos via SHA-1.

## Módulos da Plataforma

1. **Operação & Originação (`154` Dossiês)**: Pipeline consolidado ordenável, recortes táticos (*Creditor-Side & Watchdog*, *DIP & M&A*, *Consensual & Art. 20-B*, *Debêntures/CRAs/FIDCs*), **Matriz Comparativa Lado a Lado (*Side-by-Side Comps Matrix*)** para contraste simultâneo de múltiplos casos selecionados (passivo, estrutura de classes, *haircut*, EV, necessidade de DIP, assessores e marcos legais) e **Radar Preditivo (Tier 0)** com sinais forenses antecedentes (CENPROT, PGFN, CCEE, ANS, ARTESP e CVM).
2. **Precificação, Waterfall de 6 Camadas & Cram Down (Art. 58 §1º)**:
   - **Waterfall Integral de 6 Classes (100% Reconciliado)**: Modelagem exata reconciliando `split_classes` e `classes_pct` nos 6 baldes concursais e extraconcursais (**Extraconcursal / Fiduciário**, **Passivo Fiscal / Tributário**, **Classe I Trabalhista**, **Classe II Garantia Real**, **Classe III Quirografário** e **Classe IV ME/EPP**) somando rigorosamente **100%** em todos os 154 casos, confrontando liquidação falimentar (Art. 83) vs. recuperação sob Plano de RJ/PRE.
   - **Simulador Matemático de Quórum de AGC & *Cram Down* (Art. 58, §1º da Lei 11.101/05)**: Verificação cumulativa dos requisitos legais de homologação judicial forçada — (i) voto favorável de credores que representem mais de `50%` do total de créditos presentes à AGC; (ii) aprovação pela maioria das classes de credores presentes (ou por pelo menos `1` classe caso haja apenas `2` classes votantes); e (iii) mais de `1/3` (`> 33,33%`) de aprovação na classe dissidente (por cabeça e/ou valor conforme os arts. 45 e 58, §1º, III), vedado tratamento diferenciado entre credores da classe que rejeitou o plano.
   - Calculadora de honorários (*Retainer + Success Fee* com cláusula de *Offset*), Benchmarks de *Haircut* por Macro-Setor e exportação sob demanda em **Excel (`.xlsx`)** e **Apresentação Executiva (`.pptx`)**.
3. **Dashboards & Mercado**: Concentração setorial, matriz quantitativa de *Special Situations*, *Tracking* dedicado de Recuperações Extrajudiciais (YTD) e estratificação por porte de passivo.
4. **UPIs & Ativos Distressed**: Catálogo de Unidades Produtivas Isoladas (fazendas, silos, frigoríficos, parques fabris, marcas, imóveis e concessões) elegíveis sob os Arts. 60 e 141 da Lei 11.101/05.
5. **Bancômetro**: Mapa auditado de exposição de bancos privados, bancos públicos, cooperativas, agentes fiduciários, securitizadoras verificadas (emissoras reais de CRAs/CRIs/debêntures securitizadas) e *tradings*.
6. **Ecossistema & Players**: Ranking de bancas jurídicas, administradores judiciais (Art. 51-A), agentes fiduciários e varas empresariais especializadas.
7. **Prazos & AGCs**: Cronograma regressivo completo, grade mensal interativa e exportação individual de compromissos concursais (`.ics`).
8. **Mapa Geográfico**: Cartografia vetorial GeoJSON das 27 Unidades Federativas do Brasil com 154 pinos *onshore* verificados por município/comarca.
9. **Notícias & Fatos**: Feed em tempo real auditável e sem duplicidades conectado diretamente aos *Tear Sheets* dos 154 grupos monitorados.
10. **Energia & Infraestrutura**: Telemetria operacional do SIN (ONS / CCEE / ANEEL), curvas horárias de geração/carga, *PLD* por submercado vs. *Curtailment* (*Constrained-off*) e pipeline setorial de debêntures de infraestrutura.

## Implantação do Google Apps Script Backend (Release v4.7)

Para atualizar a implantação existente mantendo exatamente a mesma URL de produção (`APPS_SCRIPT_URL`):

1. Abra a Planilha Mestre no Google Sheets e acesse **Extensões > Apps Script** (caso utilize projeto independente, configure `MASTER_SHEET_ID` e opcionalmente `SYNC_API_TOKEN` com 16+ caracteres em **Configurações do Projeto > Propriedades do Script**).
2. Substitua integralmente o conteúdo de `Código.gs` pelo código de `_backend/Code.gs` (**Release v4.7**) e salve (`Ctrl+S`).
3. Clique em **Implantar > Gerenciar implantações**, clique no ícone de **Editar (lápis)** da implantação ativa, selecione **"Nova versão"** no seletor de Versão e clique em **Implantar**.
4. Valide a implantação abrindo `<APPS_SCRIPT_URL>?action=health` no navegador — a resposta esperada é `{"status":"ok","version":"4.7","router":true,"timestamp":"..."}`.
5. *(Opcional)* Para habilitar a varredura RSS autônoma a cada 15 minutos com proteção contra *formula injection* e poda automática da aba `Noticias` em 500 linhas, execute uma única vez a função `instalarGatilhosAutomaticos()` no editor do Apps Script.
