import { KanbanCard } from './KanbanCard';
import { Task } from '@/lib/types';

interface KanbanColumnProps {
  title: string;
  status: Task['status'];
  tasks: Task[];
}

export function KanbanColumn({ title, tasks }: KanbanColumnProps) {
  return (
    <div className="bg-gray-200 rounded-lg p-4 w-80 shrink-0">
      <h3 className="text-lg font-bold mb-4 text-gray-800 text-center">{title}</h3>
      <div className="space-y-4">
        {tasks.map(task => (
          <KanbanCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
