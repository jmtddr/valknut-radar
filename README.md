# VALKNUT — SPECIAL SITUATIONS // Intelligence & Distressed Debt Platform (Release v4.1)

Plataforma institucional de inteligência concursal, **Distressed Debt**, **Special Situations** e reestruturação corporativa no Brasil (`https://jmtddr.github.io/valknut-radar/`).

---

## 🏗️ Arquitetura e Módulos Ativos (10 Módulos Táticos)

1. **Operação & Originação (`72 Casos Ativos`)**:
   - Pipeline consolidado em tempo real com filtro dinâmico de piso/teto de passivo (`>= R$ 30 MM`), recorte rápido (`Todos`, `Sem Outliers`, `Middle-Market`), botão `✕ Limpar Filtros` (`resetAllFilters()`) e sub-aba estrita de **Debêntures, CRAs & FIDCs** (`33 casos reais` de Mercado de Capitais).
2. **Precificação & Modelagem (`.PPTX` Widescreen)**:
   - Calculadora direta de **% de Recuperação & Haircut** (`computeDynamicRecovery()`), Waterfall de Classes (Art. 83 vs. Plano de RJ), Simulador de DIP Financing & Valuation de UPIs, Simulador de Quórum de AGC/Cram Down e Gerador Automático de Pitch Deck em PowerPoint (`.pptx` de 7 slides).
3. **Dashboards & Inteligência de Mercado**:
   - Visão setorial e funil concursal, scorecard quantitativo com drill-down desacoplado e curva de porte estratificada em 4 faixas (`< R$ 100M`, `R$ 100M–500M`, `R$ 500M–1Bi`, `>= R$ 1Bi`) totalizando 100% da base (`72/72 casos`).
4. **UPIs & Ativos Distressed**:
   - Catálogo de Unidades Produtivas Isoladas (Art. 60 e 141 da Lei 11.101/05) com sub-abas independentes (`Fazendas, Silos & Grãos`, `Parques Fabris & Marcas`, `Imóveis, Campi & Concessões`).
5. **Bancômetro & Exposição de Credores**:
   - Ranking de exposição de bancos públicos, privados, montadoras, agentes fiduciários, securitizadoras, FIDCs e tradings com drill-down direto e limpeza automática de filtros anteriores.
6. **Ecossistema & Players**:
   - Rankings nominados (`#1, #2, #3...`) de **Bancas de Advocacia**, **Administradores Judiciais (AJs)** (`14 AJs ativos`), **Agentes Fiduciários & Securitizadoras** e **Varas Empresariais**, livres de placeholders genéricos e com cálculo dinâmico de recuperação média.
7. **Prazos & AGCs (Calendário Tático + `.ICS`)**:
   - Contagem regressiva exata em dias corridos (`parseDateBR()` e `calcDaysRemaining()`), grade mensal interativa (`Out/Nov/Dez 2026` e `Jan/Fev/Mar 2027`) e exportação `.ics` para Google Calendar / Outlook.
8. **Comps Concursais**:
   - Comparador lado a lado (até 4 empresas simultâneas) e matriz dinâmica de benchmarks setoriais de *Haircut %* e *Recuperação %* calculada sobre os 72 casos.
9. **Mapa Geográfico Concursal (Dark Mode)**:
   - Cartografia interativa das 27 UFs em **Dark Mode** (oceano `#090d16`, estados `#111827`, divisas `#1e293b`), raio proporcional limitado a `11px` (`fill-opacity: 0.65`) e espalhamento em espiral de ângulo áureo (`137,508°`) para evitar sobreposição em polos densos como SP e PR.
10. **Notícias & Fatos + Energia & Infra (ONS / CCEE / ANEEL)**:
    - **Notícias & Fatos**: Feed híbrido combinando matérias gerais do mercado de *Distressed Debt / RJ* (`MARKET_MACRO_NEWS_DATA` + RSS Google News em tempo real) e fatos relevantes das empresas do pipeline, com links clicáveis (`target="_blank"`) nos títulos, fontes e botões `Ler Notícia Completa ↗`.
    - **Energia & Infra**: Telemetria assíncrona via APIs CKAN da **CCEE** e **ANEEL** (`fetchEnergyMarketData()`), reatividade completa por *Submercado* (`SIN`, `SE/CO`, `S`, `NE`, `N`) e *Data Operativa*, e links oficiais clicáveis para CCEE, ANEEL e ONS.

---

## 📁 Estrutura de Arquivos do Repositório

```text
valknut-radar/
├── index.html        # Estrutura semântica e barra de navegação (10 módulos táticos)
├── styles.css        # Design System institucional Valknut + Mapa Dark Mode
├── app.js            # Controlador da aplicação, telemetria CCEE/ANEEL, RSS e modelagem
├── deals.json        # Base canônica enriquecida (72 casos auditados)
└── README.md         # Documentação técnica e operacional (Release v4.1)
```

---

## 🚀 Como Executar Localmente

```bash
# Opção 1: Via Python 3
python3 -m http.server 8000

# Opção 2: Via Node / npx
npx serve .
```
