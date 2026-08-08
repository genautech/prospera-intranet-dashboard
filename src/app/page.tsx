import { KanbanBoard } from '@/components/KanbanBoard';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Gestão de Tarefas PROSPERA</h1>
      <KanbanBoard />
    </div>
  );
}
