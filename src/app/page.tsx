'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { AuthForm } from '@/components/AuthForm';
import { KanbanBoard } from '@/components/KanbanBoard';
import { useTasks } from '@/hooks/useTasks'; // Importa o hook useTasks

export default function HomePage() {
  const [session, setSession] = useState<any | null>(null);
  const [loadingSession, setLoadingSession] = useState(true); // Renomeado para evitar conflito
  const { tasks, loading: loadingTasks, error: tasksError } = useTasks(); // Usa o hook useTasks

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoadingSession(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loadingSession || loadingTasks) { // Verifica ambos os loadings
    return <div className="min-h-screen flex items-center justify-center text-xl">Carregando...</div>;
  }

  if (tasksError) {
    return <div className="min-h-screen flex items-center justify-center text-xl text-red-500">Erro ao carregar tarefas: {tasksError}</div>;
  }

  if (!session) {
    return <AuthForm />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Gestão de Tarefas PROSPERA</h1>
      <KanbanBoard tasks={tasks} /> {/* Passa as tarefas do Supabase para o KanbanBoard */}
      <div className="mt-8 text-center">
        <button
          onClick={async () => {
            const { error } = await supabase.auth.signOut();
            if (error) console.error('Erro ao sair:', error.message);
          }}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Sair
        </button>
      </div>
    </div>
  );
}
