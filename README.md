# VALKNUT — SPECIAL SITUATIONS (Release v3.0)

Plataforma institucional de Inteligência Concursal, Distressed Debt e Monitoramento de Situações Especiais no Brasil.

## Principais Atualizações (v3.0)
1. **Header Institucional (`#063630` / `#08332C`), Favicon & Nova Identidade Visual**:
   - Remoção definitiva do sufixo `.on` e aplicação da nova logo horizontal **VALKNUT — SPECIAL SITUATIONS** (`#E6E9DC` / `#A5AC82` / `#38686A`) e novo Favicon arredondado (`assets/favicon-64.png`).
   - Remoção da badge `Fonte: Google Sheets Live API` da seção Operação & Originação.
2. **Filtro Dinâmico de Corte de Passivo (Piso e Teto em R$ MM)**:
   - Inputs numéricos em tempo real para **Passivo Mínimo (R$ MM)** e **Passivo Máximo / Teto (R$ MM)** acompanhados dos botões de atalho rápido `Todos`, `Sem Outliers (<= R$ 10 Bi)` e `Middle Market (R$ 30M - R$ 500M)`.
3. **Separação das Colunas de Data na Tabela Principal**:
   - Colunas independentes e ordenáveis `ÚLTIMO MOVIMENTO` (`DD/MM/YYYY`) e `DATA DE INCLUSÃO` (`DD/MM/YYYY`, sem prefixo `Inc:`).
4. **Tear Sheet Institucional de Special Situations (Modal & Impressão PDF)**:
   - Cabeçalho institucional com a nova logo, Razão Social, Ticker, CNPJ, Macro-Setor, Cidade/UF, Tribunal/Vara e Número dos Autos com botão de cópia rápida.
   - Linha de 4 KPIs (`Passivo Total Estimado`, `Score Forense & Tier` com barra de progresso, `Fase Concursal` e `Cronologia`).
   - Parser Regex automático em 3 blocos (`1. Contexto & Causa Raiz da Crise`, `2. Gargalo Imediato & Gatilho Concursal`, `3. Tese de Mandato & Atuação Recomendada`) com todos os 72 casos enriquecidos.
   - Quadro integral de Credores, Agentes Fiduciários (`Vórtx`, `Pentágono`, `Oliveira Trust`) e Securitizadoras (`Opea`, `Vert`, `Virgo`, `Reit`, `Audax`) sem truncamento.
5. **Exportação CSV (Padrão Excel PT-BR) + Exportação Nativa Excel (`.xlsx`)**:
   - CSV com BOM UTF-8 (`\uFEFF`), delimitador `;`, datas `DD/MM/YYYY` separadas, `Score` com vírgula decimal (`"8,7"`) e Tese desmembrada em 3 colunas.
   - Exportação `.xlsx` via SheetJS com larguras de colunas (`wch`) ajustadas, linha de cabeçalho congelada e formatação contábil.
6. **Redesign do Mapa Geográfico (Leaflet + GeoJSON Brasil)**:
   - Oceano em azul suave (`#CFE2F3`), estados do Brasil em cinza claro (`#F1F5F9`) com fronteiras nítidas (`#94A3B8`), siglas/capitais das 27 UFs e legenda flutuante de cores por fase processual e escala de raio por passivo.
7. **Nova Aba `Notícias & Fatos Relevantes`** (posicionada imediatamente após `Mapa Geográfico`).
8. **Nova Aba `Energia & Infra` (Vertical Setorial ONS / CCEE / ANEEL)** com painel operacional em tempo real (gráfico de área empilhada MW por fonte vs. Carga Prevista/Realizada) e integração com os 9 casos do pipeline de Energia & Infraestrutura.
