# VALKNUT — SPECIAL SITUATIONS // Radar de Inteligência Concursal & Distressed Debt (v4.6)

Plataforma analítica institucional de originação tática, monitoramento processual e modelagem financeira para **Special Situations**, **Reestruturação de Dívidas (RJ / PRE / Cautelares Art. 20-B)**, **Mercado de Capitais (Debêntures, CRAs, CRIs, FIDCs)** e **Ativos Distressed (UPIs)** no Brasil.

## Arquitetura Técnica (Release v4.6)

- **Front-End Estático Desacoplado (`index.html`, `styles.css`, `app.js`)**:
  - Interface institucional clara de alto contraste (**WCAG AA**), paleta corporativa Valknut (`#063630` / `#38686A` / `#A5AC82` / `#E6E9DC`), navegação acessível via teclado (`role="tablist"`, setas direcionais, *focus trap* em modais) e *Subresource Integrity (SRI)* em todas as bibliotecas CDN.
  - Carregamento assíncrono não-bloqueante de bases estáticas (`deals.json` e `live-news.json`) combinado à sincronização incremental por CNPJ com a Planilha Mestre (preservando IDs estáveis, teses enriquecidas, metadados de energia e links diretos a tribunais/CVM).
  - Paginação analítica configurável (`50`, `100` ou `Todos`) e persistência integral do estado de navegação e filtros via hash de URL (`#sec=...&sub=...&uf=...&setor=...`).
- **Back-End Serverless & Automação (`_backend/`)**:
  - `_backend/Code.gs`: Motor Google Apps Script v4.6 com cache particionado (`CacheService`), leitura unificada de 4 abas públicas (`Radar de Originação`, `Noticias`, `Tracking PREs YTD` e `Radar Preditivo Tier 0`), proxy ONS/CCEE e proxy RSS com *allowlist* estrita de domínios HTTPS (anti-SSRF) e sincronização protegida por token.
  - `_backend/update_live_news.py` + `.github/workflows/update-live-news.yml`: Robô agendado via GitHub Actions para captura contínua de fatos relevantes, waivers, AGDs, downgrades de rating e novos ajuizamentos, reconciliando automaticamente os `deal_id`s contra `deals.json`.

## Módulos da Plataforma

1. **Operação & Originação**: Pipeline consolidado ordenável, recortes táticos (*Creditor-Side & Watchdog*, *DIP & M&A*, *Consensual & Art. 20-B*, *Debêntures/CRAs/FIDCs*) e **Radar Preditivo (Tier 0)** com cartões forenses antecedentes (CENPROT, PGFN, CCEE, ANS, ARTESP e CVM).
2. **Precificação & Modelagem**: Calculadora de honorários (*Retainer + Success Fee* com cláusula de *Offset*), *Waterfall* de classes (Art. 83 vs. Plano de RJ), Simulador de Quórum de AGC / *Cram Down*, Benchmarks de Haircut por Macro-Setor e Gerador Nativo de Proposta Comercial (`.pptx`).
3. **Dashboards & Mercado**: Concentração setorial, matriz quantitativa de *Special Situations*, *Tracking* dedicado de Recuperações Extrajudiciais (YTD) e estratificação por porte de passivo.
4. **UPIs & Ativos Distressed**: Catálogo de Unidades Produtivas Isoladas (fazendas, silos, parques fabris, marcas, imóveis e concessões) elegíveis sob os Arts. 60 e 141 da Lei 11.101/05.
5. **Bancômetro**: Mapa de exposição de bancos privados, bancos públicos, cooperativas, agentes fiduciários, securitizadoras e *tradings*.
6. **Ecossistema & Players**: Ranking de bancas jurídicas, administradores judiciais (Art. 51-A), agentes fiduciários e varas empresariais especializadas.
7. **Prazos & AGCs**: Cronograma regressivo completo, grade mensal interativa e exportação individual de compromissos concursais (`.ics`).
8. **Mapa Geográfico**: Cartografia vetorial GeoJSON das 27 Unidades Federativas do Brasil com concentração regional de passivos.
9. **Notícias & Fatos**: Feed unificado e auditável conectado diretamente aos *Tear Sheets* dos grupos monitorados.
10. **Energia & Infraestrutura**: Telemetria operacional do SIN (ONS / CCEE / ANEEL), curvas horárias de geração/carga, *PLD* por submercado vs. *Curtailment* (*Constrained-off*) e pipeline setorial de debêntures de infraestrutura.
