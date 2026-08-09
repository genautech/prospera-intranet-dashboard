'use client';

import { useState } from 'react';
import { KanbanColumn } from './KanbanColumn';
import { Task } from '@/lib/types';

interface KanbanBoardProps {
  tasks: Task[]; // Recebe as tarefas como prop
}

export function KanbanBoard({ tasks }: KanbanBoardProps) {
  const getTasksByStatus = (status: Task['status']) => {
    return tasks.filter(task => task.status === status);
  };

  // A função para mover tarefas (drag-and-drop) seria implementada aqui
  // e passaria para KanbanColumn. Por enquanto, é apenas visual.

  return (
    <div className="flex space-x-4 overflow-x-auto">
      <KanbanColumn title="A Fazer" status="to_do" tasks={getTasksByStatus('to_do')} />
      <KanbanColumn title="Em Progresso" status="in_progress" tasks={getTasksByStatus('in_progress')} />
      <KanbanColumn title="Concluído" status="completed" tasks={getTasksByStatus('completed')} />
      <KanbanColumn title="Pausado" status="paused" tasks={getTasksByStatus('paused')} />
      <KanbanColumn title="Pendente" status="pending" tasks={getTasksByStatus('pending')} /> {/* Adicionado coluna Pendente */}
    </div>
  );
}
