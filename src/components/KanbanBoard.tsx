'use client';

import { useState } from 'react';
import { KanbanColumn } from './KanbanColumn';
import { Task } from '@/lib/types';

// Dados simulados para o Kanban
const initialTasks: Task[] = [
  {
    id: 'T1.3.1',
    title: 'Criar Contas nos Marketplaces e Gateways Definidos',
    description: 'Acessar Hotmart e Kiwify para criar contas de produtor. Escolher e configurar um Gateway de Pagamento principal (Asaas, Pagar.me ou Mercado Pago) para Pix e Cartão. Definir o Domínio principal para a plataforma PROSPERA.',
    status: 'in_progress',
    assigned_to: 'Você',
    priority: 'high',
    due_date: '2026-08-15',
    references: [
      { title: 'Playbook: Arquitetura da Plataforma de Vendas', url: 'file:///Users/genautech/notes/Conhecimento/PROSPERA/Playbooks/Plataforma/Arquitetura_Vendas_Ebooks.md' }
    ],
    notes: 'Aguardando confirmação das contas e domínio. Lembrar de não compartilhar credenciais aqui.'
  },
  {
    id: 'T1.4',
    title: 'Cadastrar E-book "OPERADOR" nos Marketplaces e Configurar Afiliados',
    description: 'No Hotmart e Kiwify (após T1.3.1), cadastre o e-book "OPERADOR" como um produto. Configure as informações de vendas, preço (R$ 37), descrição e materiais de divulgação básicos. Ative o programa de afiliados, definindo uma comissão de 50-70%.',
    status: 'to_do',
    assigned_to: 'Você',
    priority: 'high',
    due_date: '2026-08-20',
    references: [
      { title: 'Playbook: Marketing de Afiliados e Google Ads', url: 'file:///Users/genautech/notes/Conhecimento/PROSPERA/Playbooks/Marketing/Google_Ads_Afiliados.md' }
    ],
    notes: ''
  },
  {
    id: 'T2.1',
    title: 'Definir Arquitetura Técnica da Loja Própria (Next.js, Supabase, Vercel)',
    description: 'Detalhar o setup inicial do Next.js, Vercel e Supabase, incluindo configurações básicas de ambiente e conexão.',
    status: 'to_do',
    assigned_to: 'Hermes',
    priority: 'medium',
    due_date: '2026-08-25',
    references: [
      { title: 'Playbook: Arquitetura da Plataforma de Vendas', url: 'file:///Users/genautech/notes/Conhecimento/PROSPERA/Playbooks/Plataforma/Arquitetura_Vendas_Ebooks.md' }
    ],
    notes: ''
  },
  {
    id: 'T0.3',
    title: 'Configurar Dashboard de Gestão (Intranet) Hermes para Fábrica PROSPERA',
    description: 'Criar o dashboard HTML V3 aprimorado com pesquisa, Kanban visual e links HTML.',
    status: 'completed',
    assigned_to: 'Hermes',
    priority: 'high',
    due_date: '2026-08-08',
    references: [],
    notes: 'Versão HTML estática concluída e entregue no preview.'
  },
  {
    id: 'T1.3.2',
    title: 'Realizar pesquisa abrangente de Marketplaces, Gateways de Pagamento e Redes Sociais',
    description: 'Pesquisar Marketplaces, Gateways e Redes Sociais para atingir +200k/semana, incluindo inovações e links diretos para o conhecimento.',
    status: 'completed',
    assigned_to: 'Hermes',
    priority: 'high',
    due_date: '2026-08-08',
    references: [],
    notes: 'Pesquisa detalhada concluída e incorporada na documentação.'
  },
  {
    id: 'T1.3',
    title: 'Pesquisar Melhores Marketplaces e Canais de Divulgação (200k+/semana)',
    description: 'Pesquisa de plataformas e estratégias de alto volume de vendas para low-ticket.',
    status: 'completed',
    assigned_to: 'Hermes',
    priority: 'high',
    due_date: '2026-08-08',
    references: [],
    notes: 'Tarefa original de pesquisa concluída.'
  }
];

export function KanbanBoard() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const getTasksByStatus = (status: Task['status']) => {
    return tasks.filter(task => task.status === status);
  };

  // A função para mover tarefas (drag-and-drop) seria implementada aqui
  // e passaria para KanbanColumn. Por enquanto, é apenas visual.

  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      <KanbanColumn title="A Fazer" status="to_do" tasks={getTasksByStatus('to_do')} />
      <KanbanColumn title="Em Progresso" status="in_progress" tasks={getTasksByStatus('in_progress')} />
      <KanbanColumn title="Concluído" status="completed" tasks={getTasksByStatus('completed')} />
      <KanbanColumn title="Pausado" status="paused" tasks={getTasksByStatus('paused')} />
    </div>
  );
}
