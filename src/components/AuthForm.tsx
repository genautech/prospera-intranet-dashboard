'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setIsError(!!error);
    setMessage(error ? error.message : 'Login bem-sucedido!');
    setLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const { error } = await supabase.auth.signUp({ email, password });

    setIsError(!!error);
    setMessage(error ? error.message : 'Registro bem-sucedido! Verifique seu e-mail para confirmar.');
    setLoading(false);
  };

  return (
    <div className="flex justify-center py-10">
      <div className="w-full max-w-md rounded-[var(--radius-md)] border border-divider bg-surface p-8 shadow-[0_3px_10px_rgba(46,43,37,0.16)]">
        <h2 className="mb-6 text-center text-2xl">Acesso à Intranet PROSPERA</h2>
        <form className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-ink" htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              className="w-full rounded-lg border border-divider bg-bg px-3 py-2 text-ink outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-ink" htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              className="w-full rounded-lg border border-divider bg-bg px-3 py-2 text-ink outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {message && (
            <p className={`text-center text-sm ${isError ? 'text-red-700' : 'text-olive'}`}>{message}</p>
          )}
          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleLogin}
              disabled={loading}
              className="flex-1 rounded-lg bg-accent px-4 py-2.5 font-semibold text-bg transition hover:opacity-90 disabled:opacity-50"
            >
              {loading ? 'Carregando...' : 'Entrar'}
            </button>
            <button
              type="button"
              onClick={handleSignUp}
              disabled={loading}
              className="flex-1 rounded-lg border border-divider px-4 py-2.5 font-semibold text-ink transition hover:bg-bg disabled:opacity-50"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
