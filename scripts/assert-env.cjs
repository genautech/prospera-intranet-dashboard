'use strict';

const fs = require('fs');
const path = require('path');

function carregarArquivoEnv(nome) {
  const arquivo = path.join(process.cwd(), nome);
  if (!fs.existsSync(arquivo)) return;
  const texto = fs.readFileSync(arquivo, 'utf8');
  for (const linha of texto.split(/\r?\n/)) {
    const t = linha.trim();
    if (!t || t.startsWith('#')) continue;
    const eq = t.indexOf('=');
    if (eq <= 0) continue;
    const chave = t.slice(0, eq).trim();
    let valor = t.slice(eq + 1).trim();
    if (
      (valor.startsWith('"') && valor.endsWith('"')) ||
      (valor.startsWith("'") && valor.endsWith("'"))
    ) {
      valor = valor.slice(1, -1);
    }
    if (process.env[chave] === undefined) {
      process.env[chave] = valor;
    }
  }
}

carregarArquivoEnv('.env');
carregarArquivoEnv('.env.local');

const obrigatorias = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  'AGENT_RUNS_TOKEN',
];

// Na Vercel o build deve falhar se a service role não estiver configurada
// (Production/Preview). Localmente o app ainda não lê essa chave; exigir
// aqui quebraria `npm run build` até ela existir em `.env.local`.
if (process.env.VERCEL) {
  obrigatorias.push('SUPABASE_SERVICE_ROLE_KEY');
}

const ausentes = obrigatorias.filter((nome) => !String(process.env[nome] || '').trim());

if (ausentes.length > 0) {
  console.error('');
  console.error(
    `[prospera-intranet-dashboard] Variáveis de ambiente obrigatórias ausentes: ${ausentes.join(', ')}.`,
  );
  console.error(
    'Copie `.env.example` para `.env.local` e preencha os valores, ou configure as mesmas chaves na Vercel (Production e Preview).',
  );
  console.error('Não versione `.env.local` nem cole segredos no repositório.');
  console.error('');
  process.exit(1);
}
