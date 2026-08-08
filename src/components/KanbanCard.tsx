import { Task } from '@/lib/types';

interface KanbanCardProps {
  task: Task;
}

const getStatusColor = (status: Task['status']) => {
  switch (status) {
    case 'completed': return 'bg-green-200 text-green-800';
    case 'in_progress': return 'bg-yellow-200 text-yellow-800';
    case 'pending':
    case 'to_do': return 'bg-red-200 text-red-800';
    case 'paused': return 'bg-blue-200 text-blue-800';
    default: return 'bg-gray-200 text-gray-800';
  }
};

const getResponsibilityColor = (assigned_to: Task['assigned_to']) => {
    switch (assigned_to) {
      case 'Hermes': return 'bg-gray-500 text-white';
      case 'Você': return 'bg-orange-500 text-white';
      case 'Time': return 'bg-black text-white';
      default: return 'bg-gray-300 text-gray-700';
    }
  };

export function KanbanCard({ task }: KanbanCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 text-sm">
      <h4 className="font-semibold text-gray-900">{task.title}</h4>
      <div className="flex items-center space-x-2 mt-2">
        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(task.status)}`}>
          {task.status.replace(/_/g, ' ').toUpperCase()}
        </span>
        <span className={`px-2 py-1 rounded-full text-xs ${getResponsibilityColor(task.assigned_to)}`}>
          {task.assigned_to}
        </span>
      </div>
      <p className="text-gray-600 mt-2">{task.description}</p>
      {task.due_date && (
        <p className="text-gray-500 text-xs mt-2"><strong>Prazo:</strong> {task.due_date}</p>
      )}
      {task.references.length > 0 && (
        <div className="mt-2">
          <strong className="text-gray-700">Referências:</strong>
          <ul className="list-disc list-inside text-xs text-gray-500">
            {task.references.map((ref, index) => (
              <li key={index}><a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{ref.title}</a></li>
            ))}
          </ul>
        </div>
      )}
      {task.notes && (
        <p className="text-gray-500 text-xs mt-2"><strong>Notas:</strong> {task.notes}</p>
      )}
    </div>
  );
}
