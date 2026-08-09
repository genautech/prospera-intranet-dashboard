'use client';

import { useState, useEffect } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabaseClient';
import { AuthForm } from '@/components/AuthForm';
import { KanbanBoard } from '@/components/KanbanBoard';
import { SectionCard } from '@/components/SectionCard';
import { Overview } from '@/components/Overview';
import { DataTable } from '@/components/DataTable';
import { Playbooks } from '@/components/Playbooks';
import { ExecutionLog } from '@/components/ExecutionLog';
import { useTasks } from '@/hooks/useTasks';
import { dashboardData } from '@/lib/dashboardData';

const SECTIONS = [
  { id: 'visao-geral', title: 'Visão Geral e Status do Projeto' },
  { id: 'fases', title: 'Progresso das Fases de Execução' },
  { id: 'plano-conhecimento', title: 'Plano de Conhecimento Aplicado' },
  { id: 'kanban', title: 'Kanban de Tarefas' },
  { id: 'orquestracao', title: 'Orquestração de LLMs e Ferramentas' },
  { id: 'playbooks', title: 'Playbooks e Conhecimento' },
  { id: 'metricas', title: 'Métricas Chave' },
  { id: 'log', title: 'Log de Execução Recente' },
];

export default function HomePage() {
  const [session, setSession] = useState<Session | null>(null);
  const [loadingSession, setLoadingSession] = useState(true);
  const [authNotice, setAuthNotice] = useState<string | null>(null);
  const { tasks, loading: loadingTasks, error: tasksError, setTasks, updateTaskStatus } = useTasks();

  useEffect(() => {
    const hash = new URLSearchParams(window.location.hash.slice(1));
    const code = hash.get('error_code');
    const notice = code
      ? code === 'otp_expired'
        ? 'O link do e-mail expirou ou já foi usado. Peça um novo link e abra-o em até 1 hora.'
        : hash.get('error_description') || 'Não foi possível concluir o acesso pelo link do e-mail.'
      : null;

    if (code) {
      history.replaceState(null, '', window.location.pathname);
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setAuthNotice(notice);
      setSession(session);
      setLoadingSession(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loadingSession) {
    return <div className="flex justify-center py-20 opacity-60">Carregando...</div>;
  }

  if (!session) {
    return (
      <>
        {authNotice && (
          <div className="mx-auto mb-4 max-w-md rounded-xl border border-accent bg-surface p-4 text-sm">
            {authNotice}
          </div>
        )}
        <AuthForm />
      </>
    );
  }

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl md:text-4xl">Fábrica de E-books PROSPERA</h1>
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

      <nav className="mb-8 flex flex-wrap gap-2 text-xs">
        {SECTIONS.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="rounded-full border border-divider px-3 py-1.5 font-semibold transition hover:bg-surface"
          >
            {i + 1}. {s.title}
          </a>
        ))}
      </nav>

      <div className="space-y-6">
        <SectionCard id="visao-geral" number={1} title="Visão Geral e Status do Projeto">
          <Overview items={dashboardData.overview} />
        </SectionCard>

        <SectionCard id="fases" number={2} title="Progresso das Fases de Execução">
          <DataTable data={dashboardData.phases} />
        </SectionCard>

        <SectionCard id="plano-conhecimento" number={3} title="Plano de Conhecimento Aplicado">
          <p className="mb-4 text-sm opacity-75">
            A trilha K0–K6 transforma fontes em contratos, artefatos verificados e aprendizado reutilizável.
            Ela atravessa as fases comerciais do MVP sem substituir o masterplan.
          </p>
          <DataTable data={dashboardData.knowledgePlan} />
        </SectionCard>

        <SectionCard id="kanban" number={4} title="Kanban de Tarefas">
          {loadingTasks ? (
            <p className="py-6 text-center opacity-60">Carregando tarefas...</p>
          ) : tasksError ? (
            <p className="py-6 text-center text-sm text-red-700">Erro ao carregar tarefas: {tasksError}</p>
          ) : (
            <KanbanBoard tasks={tasks} setTasks={setTasks} updateTaskStatus={updateTaskStatus} />
          )}
        </SectionCard>

        <SectionCard id="orquestracao" number={5} title="Orquestração de LLMs e Ferramentas">
          <DataTable data={dashboardData.orchestration} />
        </SectionCard>

        <SectionCard id="playbooks" number={6} title="Playbooks e Conhecimento">
          <Playbooks groups={dashboardData.playbooks} />
        </SectionCard>

        <SectionCard id="metricas" number={7} title="Métricas Chave">
          <DataTable data={dashboardData.metrics} />
        </SectionCard>

        <SectionCard id="log" number={8} title="Log de Execução Recente">
          <ExecutionLog entries={dashboardData.log} note={dashboardData.logNote} />
        </SectionCard>
      </div>
    </div>
  );
}
