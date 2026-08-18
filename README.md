# PROSPERA — Dashboard de gestão (intranet)

Intranet da fábrica de produtos próprios PROSPERA. Serve à equipe interna (Genau e agentes) para ver o estado do projeto, mover tarefas no Kanban, consultar playbooks e acompanhar execuções dos agentes. Não é site público, não tem checkout e não substitui o `prospera-public`.

## Stack

- **Next.js** (App Router) + TypeScript + Tailwind
- **Supabase** — Auth, Postgres e Row Level Security (RLS)
- **dnd-kit** — Kanban com persistência em `public.tasks`
- API **`/api/agent-runs`** — registro de execuções dos agentes

## Setup local

```bash
git clone https://github.com/genautech/prospera-intranet-dashboard.git
cd prospera-intranet-dashboard
npm install
cp .env.example .env.local
# Preencha NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY e AGENT_RUNS_TOKEN
npm run dev
```

O servidor sobe em **http://localhost:8989**.

Caminhos opcionais (`OBSIDIAN_VAULT_PATH`, `EMAI_VAULT_PATH`, `HERMES_SKILLS_PATH`, `OPERADOR_COURSE_PATH`) só existem na máquina local. Sem eles, vault e progresso do curso OPERADOR usam os padrões do código ou degradam com segurança — o build não depende deles.

`SUPABASE_SERVICE_ROLE_KEY` entra no `.env.example` e é **obrigatória no build da Vercel**. O app ainda não a lê (o cliente usa a chave anon + RLS). Não prefixe com `NEXT_PUBLIC_`.

## Contrato `agent_runs`

Agentes **não** editam `src/lib/dashboardData.ts` para registrar trabalho. Esse arquivo descreve o catálogo; a tabela `public.agent_runs` registra o que cada agente fez.

- `POST /api/agent-runs` exige header `x-agent-token: $AGENT_RUNS_TOKEN`
- `GET /api/agent-runs` é leitura pública (alimenta a seção 8 do dashboard)

Contrato completo, exemplos `curl` e regras de `status`: ver [`AGENTS.md`](./AGENTS.md).

## Banco e RLS

Não há pasta `supabase/` neste repositório: o schema vive no projeto Supabase remoto. Tabelas usadas pelo app:

| Tabela | Uso no app | Comportamento observado |
|---|---|---|
| `public.tasks` | Kanban | `SELECT` via cliente anon; `UPDATE` de status só persiste com sessão autenticada (sem sessão o Postgres devolve 0 linhas, sem erro) |
| `public.agent_runs` | seção Execuções | `SELECT` via `GET` (sem token); `INSERT`/`UPDATE` só pela API, depois do token |

Como testar:

```bash
# GET público — deve listar JSON (array)
curl -s "http://localhost:8989/api/agent-runs?limit=5"

# POST sem token — 401
curl -s -o /dev/null -w "%{http_code}" -X POST http://localhost:8989/api/agent-runs \
  -H "content-type: application/json" -d '{"agent":"teste","action":"ping"}'

# POST com token — 201 (abre execução)
curl -s -X POST http://localhost:8989/api/agent-runs \
  -H "content-type: application/json" -H "x-agent-token: $AGENT_RUNS_TOKEN" \
  -d '{"agent":"teste","action":"ping","status":"succeeded","summary":"ok"}'
```

Kanban: entre com usuário Auth; arraste um card; recarregue. Sem login, a UI pede autenticação e o UPDATE não persiste.

## Deploy na Vercel (Genau executa autenticado)

O CLI local **não** está autenticado neste ambiente. Não rode `vercel login` daqui. Passos no seu terminal/navegador:

1. **Login e link**
   ```bash
   vercel login
   vercel link
   ```
   Confirme o diretório raiz deste repo (não o monorepo `infoprod`).

2. **Variáveis** — Production **e** Preview, uma a uma:
   ```bash
   vercel env add NEXT_PUBLIC_SUPABASE_URL
   vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
   vercel env add SUPABASE_SERVICE_ROLE_KEY
   vercel env add AGENT_RUNS_TOKEN
   ```
   Não cadastre caminhos de disco (`OBSIDIAN_VAULT_PATH` etc.) na Vercel: o filesystem da função não tem os vaults.

3. **GitHub → deploy contínuo**
   - No dashboard da Vercel, conecte `genautech/prospera-intranet-dashboard`
   - Push em `main` → Production
   - Pull requests → Preview

4. **Proteção de Preview**
   - O dashboard exige login Supabase nas telas internas; isso não basta sozinho em Preview público.
   - Em Project → Settings → Deployment Protection, ative proteção de previews (Vercel Authentication ou senha) para PRs, sobretudo se o repositório for público.
   - Confira: abrir a URL de Preview sem sessão deve mostrar o formulário de login, não dados do Kanban.
   - `GET /api/agent-runs` continua público por contrato — não exponha resumos sensíveis nessa tabela, ou restrinja o Preview.

`vercel.json` fixa framework Next.js, região `gru1` (São Paulo) e `buildCommand` = `npm run vercel:build` (equivale a `next build` **sem** migrations). Não rode `prisma db push` nem SQL no build.

## Troubleshooting

| Sintoma | Causa provável | O que fazer |
|---|---|---|
| Build: `Variáveis de ambiente obrigatórias ausentes: …` | `.env.local` incompleto ou env da Vercel faltando | Preencha as chaves listadas na mensagem (PT-BR). Na Vercel, inclua `SUPABASE_SERVICE_ROLE_KEY`. |
| Cliente Supabase: `NEXT_PUBLIC_SUPABASE_* ausente` | URL/anon não injetadas no bundle | Rebuild depois de salvar as `NEXT_PUBLIC_*` na Vercel. |
| `AGENT_RUNS_TOKEN não configurado no servidor` (503) | Token só no `.env.example` / ausente no host | Defina `AGENT_RUNS_TOKEN` no servidor. |
| `Token inválido ou ausente` (401) | Header `x-agent-token` errado ou vazio | Compare com o valor do host, sem aspas extras. |
| Card do Kanban volta ao arrastar | Sessão expirada ou RLS bloqueando UPDATE | Entre de novo; o hook só confirma persistência se o `select` devolver a linha. |
| `GET /api/agent-runs` 500 com erro de permissão | Policy de SELECT em `agent_runs` | Conferir RLS no Supabase Dashboard; não aplicar migration daqui sem autorização. |
| Vault / knowledge 404 na Vercel | Paths locais (`~/notes`) inexistentes na nuvem | Esperado. Knowledge de disco é feature de máquina local. |

## Scripts

| Script | Função |
|---|---|
| `npm run dev` | Next na porta 8989 |
| `npm run build` | Valida env e gera produção |
| `npm run vercel:build` | Idem; usado pela Vercel; **não** migra banco |
| `npm test` | 21 testes (Node test runner) |
| `npm run lint` | ESLint |

## Contribuição

- Não reescrever `src/lib/dashboardData.ts` (já houve perda; ver `AGENTS.md`).
- Não commitar `.env.local` nem chaves `sb_` / `service_role` reais.
- Não rodar migrations sem autorização explícita.
- Registrar execução via `POST /api/agent-runs`, não editando o catálogo estático.
- Commit, push e deploy só com pedido explícito do Genau.
