import { Task } from '@/lib/types';

interface KanbanCardProps {
  task: Task;
}

const getStatusColor = (status: Task['status']) => {
  switch (status) {
    case 'completed': return 'bg-olive text-bg';
    case 'in_progress': return 'bg-accent text-bg';
    case 'paused': return 'bg-bg text-ink border border-divider';
    case 'pending':
    case 'to_do':
    default: return 'bg-bg text-ink border border-divider';
  }
};

const getResponsibilityColor = (assigned_to: Task['assigned_to']) => {
  switch (assigned_to) {
    case 'Você': return 'bg-ink text-bg';
    case 'Hermes': return 'bg-olive text-bg';
    case 'Time': return 'bg-accent text-bg';
    default: return 'bg-bg text-ink border border-divider';
  }
};

export function KanbanCard({ task }: KanbanCardProps) {
  return (
    <div className="rounded-xl border border-divider bg-bg p-4 text-sm shadow-[0_1px_3px_rgba(46,43,37,0.10)] transition hover:shadow-[0_3px_10px_rgba(46,43,37,0.16)]">
      <h4 className="font-semibold leading-snug text-ink">{task.title}</h4>
      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${getStatusColor(task.status)}`}>
          {task.status.replace(/_/g, ' ')}
        </span>
        <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${getResponsibilityColor(task.assigned_to)}`}>
          {task.assigned_to}
        </span>
      </div>
      <p className="mt-2 text-ink opacity-75">{task.description}</p>
      {task.due_date && (
        <p className="mt-2 text-xs opacity-60"><strong>Prazo:</strong> {task.due_date}</p>
      )}
      {task.references.length > 0 && (
        <div className="mt-2">
          <strong className="text-xs opacity-70">Referências:</strong>
          <ul className="mt-1 space-y-0.5 text-xs">
            {task.references.map((ref, index) => (
              <li key={index}>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  {ref.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {task.notes && (
        <p className="mt-2 text-xs opacity-60"><strong>Notas:</strong> {task.notes}</p>
      )}
    </div>
  );
}
