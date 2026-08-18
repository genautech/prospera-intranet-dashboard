# CURSOR T0.3 Fase 4 — relatório

Workspace: `~/infoprod/prospera-intranet-dashboard`  
Data: 2026-08-16  
Commit/push: **não feitos** (pedido explícito).

## Checklist — pronto para deploy (código)

- [x] `vercel.json` — framework `nextjs`, região `gru1`, `buildCommand` = `npm run vercel:build` (sem migrations)
- [x] `npm run vercel:build` — `assert-env` + `next build`
- [x] `.env.example` versionável, valores vazios, descrição de cada variável
- [x] `.gitignore` ignora `.env` / `.env.*` e **não** ignora `.env.example`
- [x] Falha de env em PT-BR (`scripts/assert-env.cjs` + `next.config.js` + `supabaseClient.ts`)
- [x] README: o que é, stack, setup local (porta 8989), `agent_runs`, RLS, Vercel, troubleshooting
- [x] Headers de segurança em `next.config.js` (`X-Frame-Options`, `nosniff`, `Referrer-Policy`)
- [x] `src/lib/dashboardData.ts` **não** alterado
- [x] Nenhuma migration / alteração de banco
- [x] Warnings de tracing Turbopack (vault em disco) silenciados com `turbopackIgnore` — o build da Vercel não tenta empacotar o projeto inteiro

## Gates

| Gate | Resultado |
|---|---|
| `npm run test` | **21/21** pass, 0 fail |
| `npm run build` | **OK** (Next.js 16.3.0 Turbopack) |
| Env ausente | `node scripts/assert-env.cjs` em cwd sem `.env.local` sai **1** com mensagem PT-BR listando as chaves |
| Segredos versionados | Nenhum valor `sb_…` nem service_role real em `git ls-files` |

Exceções do grep `service_role` (documentação, não chave):

- `.agents/skills/supabase/SKILL.md`
- `.agents/skills/supabase-postgres-best-practices/references/security-rls-performance.md`

`.env.local` existe no disco e **continua ignorado**.

## `SUPABASE_SERVICE_ROLE_KEY`

O prompt pedia falha de build se essa chave faltasse. O código **ainda não a lê**; `.env.local` local também não a tem. Exigi-la sempre quebraria o gate `npm run build` nesta máquina.

Comportamento adotado:

- Sempre obrigatórias: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `AGENT_RUNS_TOKEN`
- `SUPABASE_SERVICE_ROLE_KEY` obrigatória **somente quando `VERCEL=1`** (build na plataforma)
- Documentada no `.env.example` e no README para Genau cadastrar na Vercel

## O que depende do Genau

1. `vercel login` (CLI daqui não está autenticado; não foi tentado login interativo)
2. `vercel link` neste diretório (repo GitHub: `genautech/prospera-intranet-dashboard`)
3. `vercel env add` das quatro chaves em **Production e Preview**
4. Conectar o GitHub na Vercel: `main` → production; PRs → preview
5. Ativar Deployment Protection nos Previews (o dashboard pede Auth, mas `GET /api/agent-runs` é público por contrato)
6. Conferir no browser: Preview sem sessão mostra login; Kanban não vaza dados

Não há pasta `supabase/` no repo: policies RLS estão só no projeto remoto. O README descreve o comportamento observado no código (`tasks` UPDATE autenticado; `agent_runs` GET público / POST com `x-agent-token`). Validar as policies no Dashboard do Supabase continua com Genau — sem SQL daqui.

## Working tree tocado (não commitado)

- `package.json` — `dev`/`start` na 8989, `build` e `vercel:build`
- `next.config.js`, `vercel.json`, `.gitignore`
- `scripts/assert-env.cjs`, `.env.example`, `README.md`
- `src/lib/supabaseClient.ts`
- `src/lib/learningLog.ts`, `src/app/knowledge/doc/[...slug]/page.tsx` (ignore de tracing)
- este relatório
