# ROTEIRO DE PROMPTS EM 3 FASES (ETAPAS SEQUENCIAIS) // VALKNUT RADAR
# Objetivo: Dividir as correções em 3 prompts independentes e cirúrgicos para evitar truncamento de código na IA e permitir validação etapa por etapa no repositório https://jmtddr.github.io/valknut-radar/

---

## 🚀 FASE 1 — LIMPEZA ESTRUTURAL (REMOÇÃO AGRO), PARSERS E FILTROS CORE
*(Copie e cole o bloco abaixo no seu agente de código para executar a Etapa 1)*

```markdown
# PROMPT — FASE 1: REMOÇÃO DO MÓDULO AGRO, PARSER DE CREDORES E DESTRAVAMENTO DE FILTROS

Você é um Engenheiro Front-End Sênior mantendo o terminal **Valknut Special Situations (`valknut-radar`)**.
Execute **exclusivamente as 4 tarefas desta Fase 1** nos arquivos `index.html` e `app.js`, mantendo **100% intactos** o Design System, as cores, a tipografia e o layout geral.

### 1. REMOÇÃO COMPLETA DO MÓDULO "AGRO & TERRAS"
1. No `index.html`, remova o botão/pílula `Agro & Terras` da segunda barra de navegação superior e remova o contêiner HTML (`<section>` ou `<div>`) correspondente à visão interna de `Agro & Terras`.
2. No `app.js`, remova (ou proteja com `if (!el) return;`) todas as referências de renderização e contadores do módulo `Agro & Terras` para que o Console (DevTools) fique livre de erros.
3. Mantenha normalmente a opção `"Agronegócio & Silvicultura"` no dropdown de filtro *Macro-Setor* da tabela principal.

### 2. CORREÇÃO DO PARSER DE CREDORES NO TEAR SHEET (FIM DO SPLIT EM VÍRGULA DECIMAL)
Na Aba 2 (*Quadro de Credores & Stakeholders*) do modal *Tear Sheet*, valores como `"Sicredi R$ 17,77M, Itaú Unibanco R$ 7,61M"` estão sofrendo `.split(',')` simples, quebrando o valor decimal em duas pílulas (`"Sicredi R$ 17"` e `"77M"`).
- No `app.js`, substitua o `.split(',')` de credores por regex com *negative lookahead* que nunca quebra vírgulas seguidas de dígito decimal:
  ```javascript
  function parseCreditorsList(rawStr) {
    if (!rawStr || typeof rawStr !== 'string') return [];
    return rawStr
      .split(/,(?!\s*\d)|;|\s+\+\s+/g)
      .map(s => s.trim())
      .filter(Boolean);
  }
  ```

### 3. DESACOPLAMENTO DE FILTROS PRESOS E BOTÃO "✕ LIMPAR FILTROS"
1. Adicione um botão discreto `✕ Limpar Filtros` na barra de controles da tabela principal que resete busca por texto, dropdowns (*Macro-Setor*, *UF*, *Tier*, *Porte*), restaure o Passivo Mínimo para `30` (R$ 30 MM) e re-renderize a tabela.
2. Garanta que clicar no botão de recorte `Todos` mantenha o piso padrão `30` no Passivo Mínimo (em vez de zerar para `0`).
3. Ao clicar em `Ver Casos` de um banco no módulo `Bancômetro` (ou `Filtrar Setor` no Dashboard), limpe previamente os demais filtros para que filtros antigos não escondam resultados.
4. No módulo `UPIs & Ativos`, faça as pílulas de categoria de ativo (*Fazendas, Silos & Grãos*, *Plantas Industriais*, etc.) filtrarem de forma independente do dropdown de *Macro-Setor* da tela principal.

### 4. FILTRO ESTRITO DA ABA "DEBÊNTURES, CRAs & FIDCs" (FIM DO FALSO-POSITIVO 72/72)
A aba `Debêntures, CRAs & FIDCs` está listando todos os `72` casos porque o fallback padrão de `perfil_passivo` contém `"Bancário / Mercado de Capitais"`.
- Remova o termo genérico `"mercado de capitais"` da condição de filtro dessa aba e exija match estrito nos campos do caso (`debênture`, `debenture`, `cra`, `cri`, `fidc`, `cvm`, `agd`, `nota comercial`, `agente fiduciário`, `securitizadora`, `vórtx`, `pentágono`, `oliveira trust`, `virgo`, `opea`, `covenant`, `waiver`), usando fronteira de palavra (`\b`) para siglas curtas (`cra`, `cri`, `cvm`, `agd`). Atualize tanto a listagem da aba quanto o contador do botão.
```

---

## 📊 FASE 2 — CÁLCULOS DE PRAZOS, RANKING DE PLAYERS, DASHBOARD E MAPA DARK MODE
*(Após validar a Fase 1, copie e cole o bloco abaixo para executar a Etapa 2)*

```markdown
# PROMPT — FASE 2: CONTAGEM REGRESSIVA DE PRAZOS, SANEAMENTO DE PLAYERS, PORTE E MAPA ESCURO

Você é um Engenheiro Front-End Sênior mantendo o terminal **Valknut Special Situations (`valknut-radar`)**.
Sem alterar o layout ou a estrutura das barras de navegação, aplique **exclusivamente as 4 correções de cálculo e visualização desta Fase 2** no `app.js` e `styles.css`.

### 1. CORREÇÃO MATEMÁTICA DO "FALTAM X DIAS" NO MÓDULO "PRAZOS & AGCs"
Atualmente o cálculo subtrai os dias numéricos sem considerar a virada de mês (ex: movimento em `14/10/2026` e AGC em `15/11/2026` exibe `"FALTAM 5 DIAS"` em vez de `30 DIAS`).
- Implemente parser real de datas `DD/MM/YYYY` e `YYYY-MM-DD` para objeto `Date` e calcule os dias restantes pela diferença de timestamps:
  ```javascript
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
  ```

### 2. SANEAMENTO DO MÓDULO "ECOSSISTEMA & PLAYERS" (ADVOCACIA E ABA AJs EM BRANCO)
1. No *Ranking de Escritórios de Advocacia*, exclua strings de placeholder (`"em apuração"`, `"banca em apuração"`, `"aguardando"`, `"n/a"`, `"n/d"`, `"não informado"`, `"sigilo"`) da lista numerada (`#1, #2, #3...`), para que `"Banca em Apuração nos Autos"` deixe de aparecer como o escritório `#1` do país.
2. Corrija a renderização da sub-aba **Administradores Judiciais (AJs)** — que hoje abre em branco — lendo `deal.aj || deal.administrador_judicial || deal.adm_judicial`, filtrando placeholders e renderizando os cards/tabela com número de casos e passivo administrado.

### 3. SOMA DO GRÁFICO DE PORTE (72/72 CASOS) E RECOVERY/HAIRCUT DINÂMICO
1. Em `Dashboards & Mercado` -> *Curva de Passivo & Top Deals*, ajuste a lógica do gráfico *Estratificação por Faixa de Passivo (Porte)* para cobrir todo o espectro sem lacunas (`Mid-Market: < 100`, `Upper-Mid: >= 100 && < 500`, `Large Cap: >= 500 && < 1000`, `Mega Cases: >= 1000` em R$ MM), garantindo que a soma das 4 barras feche em 100% dos casos da base (72 casos, em vez de 28).
2. Substitua os percentuais estáticos `Recup: 45% | Haircut: 55%` exibidos em `Comps Concursais` e `Ecossistema & Players` por uma função determinística baseada no *Setor*, *Tier* e presença de *Garantia Real / UPI* do caso (variando entre `25%` e `68%` de recuperação conforme a qualidade da garantia).

### 4. MAPA GEOGRÁFICO EM DARK MODE E CALIBRAÇÃO DAS BOLHAS EM SP/PR
1. Substitua o fundo azul-claro (`#d4e3f0`) do contêiner do `Mapa Geográfico` por `#090d16`, estilizando o preenchimento dos estados com `#111827` e as divisas estaduais com `#1e293b` (ou tile layer `dark_all` do CartoDB caso use Leaflet).
2. Reduza o raio máximo das bolhas de `> R$ 1Bi` para `11px` com `fill-opacity: 0.65` e aplique distribuição em espiral de ângulo áureo (`indexInState * 2.39996`) para evitar sobreposição visual de mega-casos em São Paulo e no Paraná.
```

---

## 🌐 FASE 3 — INTEGRAÇÃO DE DADOS EXTERNOS: ENERGIA (CCEE/ANEEL) E NOTÍCIAS COM LINKS CLICÁVEIS
*(Após validar a Fase 2, copie e cole o bloco abaixo para executar a Etapa 3 final)*

```markdown
# PROMPT — FASE 3: INTEGRAÇÃO API CCEE/ANEEL EM ENERGIA E FEED DE NOTÍCIAS COM LINKS CLICÁVEIS

Você é um Engenheiro Front-End Sênior mantendo o terminal **Valknut Special Situations (`valknut-radar`)**.
Sem alterar o layout geral da plataforma, implemente **as 2 integrações externas e de links clicáveis desta Fase 3** nos módulos `Energia & Infra` e `Notícias & Fatos`.

### 1. MÓDULO "ENERGIA & INFRA": API CCEE / ANEEL / ONS + SELETORES REATIVOS + LINKS OFICIAIS
Atualmente o módulo `Energia & Infra` não faz chamadas de rede e exibe números estáticos.
1. **Fetch nas APIs de Dados Abertos (CCEE / ANEEL):**
   - Implemente `fetchEnergyMarketData(submercado = 'SIN', dataOperativa)` consultando os endpoints públicos CKAN do Portal de Dados Abertos da **CCEE** (`https://dadosabertos.ccee.org.br/api/3/action/datastore_search` para PLD e liquidação) e da **ANEEL** (`https://dadosabertos.aneel.gov.br/api/3/action/package_search?q=geracao+OR+outorga`), usando fallback seguro para cache operacional caso o endpoint governamental oscile por CORS/timeout.
   - Exiba um badge de telemetria no topo do painel (`● Telemetria CCEE / ANEEL / ONS Sincronizada` com horário da leitura e botão de atualizar).
2. **Reatividade dos Seletores (`Submercado` e `Data Operativa`):**
   - Ao alterar o dropdown de Submercado (`SIN`, `Sudeste/Centro-Oeste`, `Sul`, `Nordeste`, `Norte`) ou a `Data Operativa`, recalcule dinamicamente os 5 KPIs (*Carga Instantânea*, *Matriz Renovável*, *EAR Reservatórios*, *PLD Horário Médio* e *Curtailment*), atualize as curvas do gráfico horário e filtre os casos de energia daquela região.
3. **Links Clicáveis para CCEE, ANEEL e ONS:**
   - Adicione links externos clicáveis (`<a href="..." target="_blank" rel="noopener noreferrer">`) nos 5 KPIs apontando para as fontes oficiais:
     - PLD Médio -> `https://www.ccee.org.br/precos/painel-precos` (`CCEE Painel de Preços ↗`)
     - Carga & Reservatórios (EAR) -> `https://www.ons.org.br/paginas/energia-agora/carga-e-geracao` (`ONS Energia Agora ↗`)
     - Matriz & Outorgas -> `https://dadosabertos.aneel.gov.br/` (`ANEEL Dados Abertos ↗`)
   - Em cada card das empresas do *Pipeline Integrado de Energia*, adicione ao lado de `"Abrir Tear Sheet"` um link clicável `"Consultar Outorga ANEEL / CCEE ↗"`.

### 2. MÓDULO "NOTÍCIAS & FATOS": FEED HÍBRIDO (MERCADO + EMPRESAS) E LINKS CLICÁVEIS EM 100% DOS CARDS
Atualmente o módulo `Notícias & Fatos` gera cards apenas das empresas da planilha e usa tags `<span>` sem links externos.
1. **Feed em Tempo Real de Mercado + Empresas (`fetchLiveDistressedNews()`):**
   - Busque notícias reais e recentes do mercado brasileiro de *Distressed Debt*, *Recuperação Judicial*, *Quebra de Covenants / Debêntures (AGD / Waiver)*, *FIDCs / CVM* e *Leilões de UPIs* via feed RSS do Google Notícias Brasil (`https://news.google.com/rss/search?q=%22recupera%C3%A7%C3%A3o+judicial%22+OR+%22reestrutura%C3%A7%C3%A3o+de+d%C3%ADvida%22+OR+%22deb%C3%AAntures%22+waiver+OR+%22pedido+de+fal%C3%AAncia%22&hl=pt-BR&gl=BR&ceid=BR:pt-419` lido via `rss2json` ou proxy CORS + `DOMParser`).
   - Combine essas matérias gerais de mercado (Valor Econômico, Brazil Journal, Pipeline, JOTA, NeoFeed, Estadão) com os fatos relevantes das empresas monitoradas na planilha.
   - Adicione pílulas de filtro rápido no topo do módulo: `Todas`, `Mercado & Macro (RJ / Crédito)`, `Empresas do Pipeline` e `CVM & Fatos Relevantes`.
2. **Links Clicáveis Obrigatórios (`target="_blank"`) em Todos os Cards:**
   - O **título da manchete** de cada card deve ser um link `<a href="..." target="_blank" rel="noopener noreferrer">` funcional com ícone `↗`.
   - Adicione em **todos os cards** um botão principal `<a href="..." target="_blank" rel="noopener noreferrer">Ler Notícia Completa ↗</a>` que abre a matéria ou fato relevante original em nova aba (para itens vindos do RSS, use o `link` real da matéria; para itens derivados da planilha sem URL explícita, aponte para a busca direta da notícia/empresa no Google Notícias ou CVM, garantindo que **nenhum card fique sem link clicável**).
   - Quando a notícia corresponder a uma empresa do pipeline, mantenha ao lado o botão secundário `"Abrir Ficha da Empresa"`.
```