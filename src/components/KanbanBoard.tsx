'use client';

import { KanbanColumn } from './KanbanColumn';
import { Task } from '@/lib/types';
import { DndContext, DragEndEvent, useSensor, PointerSensor } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';

interface KanbanBoardProps {
  tasks: Task[]; // Recebe as tarefas como prop
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>; // Adiciona setTasks para atualizar o estado
  updateTaskStatus: (taskId: string, newStatus: Task['status']) => Promise<boolean>; // Adiciona updateTaskStatus para persistir no DB
}

export function KanbanBoard({ tasks, setTasks, updateTaskStatus }: KanbanBoardProps) {
  const sensors = useSensor(PointerSensor, { activationConstraint: { distance: 8 } });

  const getTasksByStatus = (status: Task['status']) => {
    return tasks.filter(task => task.status === status);
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    // Lógica para mover tarefas entre colunas e atualizar o status
    // Por enquanto, apenas para reordenar visualmente. A persistência no DB será adicionada depois.
    const activeTask = tasks.find(task => task.id === active.id);
    const overColumnStatus = over.id as Task['status']; // Assumindo que over.id é o status da coluna

    if (activeTask && activeTask.status !== overColumnStatus) {
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === active.id ? { ...task, status: overColumnStatus } : task
        )
      );
      await updateTaskStatus(active.id as string, overColumnStatus);
    } else if (activeTask && activeTask.status === overColumnStatus) {
      // Lógica para reordenar dentro da mesma coluna
      const oldIndex = getTasksByStatus(overColumnStatus).findIndex(task => task.id === active.id);
      const newIndex = getTasksByStatus(overColumnStatus).findIndex(task => task.id === over.id);

      if (oldIndex !== -1 && newIndex !== -1) {
        setTasks(prevTasks => {
          const newOrderedTasks = arrayMove(
            getTasksByStatus(overColumnStatus),
            oldIndex,
            newIndex
          );
          const otherTasks = prevTasks.filter(task => task.status !== overColumnStatus);
          return [...otherTasks, ...newOrderedTasks];
        });
      }
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={[sensors]}>
      <div className="flex space-x-4 overflow-x-auto">
        <KanbanColumn title="A Fazer" status="to_do" tasks={getTasksByStatus('to_do')} />
        <KanbanColumn title="Em Progresso" status="in_progress" tasks={getTasksByStatus('in_progress')} />
        <KanbanColumn title="Concluído" status="completed" tasks={getTasksByStatus('completed')} />
        <KanbanColumn title="Pausado" status="paused" tasks={getTasksByStatus('paused')} />
        <KanbanColumn title="Pendente" status="pending" tasks={getTasksByStatus('pending')} />
      </div>
    </DndContext>
  );
}
