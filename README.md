# VALKNUT ANALYTICS // Special Situations & Distressed Debt Platform

Plataforma de inteligência de mercado financeiro e jurídico-concursal especializada em **Distressed Debt**, **Special Situations** e reestruturação corporativa no Brasil.

---

## 🏗️ Arquitetura em Duas Camadas

A plataforma opera em um modelo desacoplado de duas camadas, combinando processamento analítico em lote com visualização de baixa latência:

```
┌────────────────────────────────────────────────────────────────────────┐
│ 1. CAMADA DE INGESTÃO & TRIAGEM (Agente Autônomo - a cada 3h)          │
│    • Varredura: DataJud, DJEN (Classes 12134, 129, 128, 12154)         │
│    • Sinais Forenses: CENPROT, PGFN (Art. 866 CPC), CVM Res. 175, CCEE │
│    • Filtro de Corte: Passivo >= R$ 30 Milhões (Exclusão Safira)       │
│    • Persistência: Planilha Mestre (Google Sheets)                     │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 2. CAMADA DE APRESENTAÇÃO & DASHBOARD (GitHub Pages - Front-End)       │
│    • API Rest: Google Apps Script Web App (JSON)                       │
│    • Polling Inteligente: Background fetch a cada 15 min (Visibility)  │
│    • Resiliência Offline: Fallback automático para deals.json local    │
│    • Interface: Terminal Clean Dark Mode (Linear / Stripe style)       │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Matriz de Estratégias Institucionais e Tiers

- **Tier 0 (Score 8,5–10,0) — Distress Precursor (60 a 120 dias pré-crise):**
  - Monitoramento de anomalias extrajudiciais: spikes de protestos no CENPROT, execuções de frotas e safra, penhora de faturamento pela PGFN, liquidação de FIDCs na CVM e processos regulatórios (CCEE, ANS, ARTESP).
- **Tier 1 (Score 9,0–10,0) — Consensual & Cautelar Antecedente:**
  - Tutelas de urgência sob o Art. 20-B da Lei 11.101/2005, stay period preparatório e mediações pré-processuais.
- **Tier 2 (Score 7,0–8,9) — Minuto Zero Concursal:**
  - Distribuição recente de Recuperação Judicial (Classe 129) ou Extrajudicial (Classe 128), perícia prévia do Art. 51-A e contestação de travas bancárias.
- **Tier 3 (Score 4,0–6,9) — Pós-Plano & Special Situations:**
  - Homologação de planos, alienação judicial de Unidades Produtivas Isoladas (UPIs) e estruturação de Financiamento DIP (*Debtor-in-Possession*).

---

## 📁 Estrutura de Arquivos do Repositório

```text
valknut-radar/
├── index.html        # Estrutura semântica limpa (< 200 linhas)
├── styles.css        # Design System e variáveis temáticas (Clean Dark FinTech)
├── app.js           # Controlador da aplicação, Leaflet e polling de 15 min
├── deals.json        # Base local canônica atualizada (64 casos - Fallback offline)
├── README.md         # Documentação técnica e de negócio
└── .gitignore        # Arquivos de sistema e ambiente ignorados
```

---

## 🚀 Como Executar Localmente

Basta servir o diretório estático em qualquer servidor HTTP local:

```bash
# Opção 1: Via Python 3
python3 -m http.server 8000

# Opção 2: Via Node / npx
npx serve .
```

Acesse `http://localhost:8000` no seu navegador.
