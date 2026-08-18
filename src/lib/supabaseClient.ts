import { createClient } from '@supabase/supabase-js';

function exigirEnvPublica(nome: string, valor: string | undefined): string {
  if (!valor || !valor.trim()) {
    throw new Error(
      `Variável de ambiente ${nome} ausente. Copie .env.example para .env.local (dev) ou configure a chave na Vercel.`,
    );
  }
  return valor;
}

// Acesso estático é obrigatório: o bundler só inliniza NEXT_PUBLIC_*
// quando a propriedade aparece literalmente no código (process.env.NEXT_PUBLIC_X).
const supabaseUrl = exigirEnvPublica(
  'NEXT_PUBLIC_SUPABASE_URL',
  process.env.NEXT_PUBLIC_SUPABASE_URL,
);
const supabaseAnonKey = exigirEnvPublica(
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
