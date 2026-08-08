import { KanbanCard } from './KanbanCard';
import { Task } from '@/lib/types';

interface KanbanColumnProps {
  title: string;
  status: Task['status'];
  tasks: Task[];
}

export function KanbanColumn({ title, tasks }: KanbanColumnProps) {
  return (
    <div className="w-80 shrink-0 rounded-[var(--radius-md)] border border-divider bg-surface p-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base">{title}</h3>
        <span className="rounded-full bg-bg px-2 py-0.5 text-xs font-semibold text-ink">
          {tasks.length}
        </span>
      </div>
      <div className="space-y-3">
        {tasks.map(task => (
          <KanbanCard key={task.id} task={task} />
        ))}
        {tasks.length === 0 && (
          <p className="py-6 text-center text-sm opacity-50">Nenhuma tarefa</p>
        )}
      </div>
    </div>
  );
}
