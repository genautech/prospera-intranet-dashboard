'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { AuthForm } from '@/components/AuthForm';
import { KanbanBoard } from '@/components/KanbanBoard';

export default function HomePage() {
  const [session, setSession] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <div className="flex justify-center py-20 opacity-60">Carregando...</div>;
  }

  if (!session) {
    return <AuthForm />;
  }

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl md:text-4xl">Gestão de Tarefas PROSPERA</h1>
        <button
          onClick={async () => {
            const { error } = await supabase.auth.signOut();
            if (error) console.error('Erro ao sair:', error.message);
          }}
          className="rounded-lg border border-divider px-4 py-2 text-sm font-semibold text-ink transition hover:bg-surface"
        >
          Sair
        </button>
      </div>
      <KanbanBoard />
    </div>
  );
}
