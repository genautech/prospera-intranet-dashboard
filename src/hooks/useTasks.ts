import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Task } from '@/lib/types';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function updateTaskStatus(taskId: string, newStatus: Task['status']) {
    const { error } = await supabase.from('tasks').update({ status: newStatus }).eq('id', taskId);
    if (error) {
      console.error('Erro ao atualizar o status da tarefa:', error.message);
      return false;
    }
    return true;
  }

  useEffect(() => {
    async function fetchTasks() {
      const { data, error } = await supabase.from('tasks').select('*').order('created_at', { ascending: true });
      if (error) {
        setError(error.message);
      } else {
        setTasks(data as Task[]);
      }
      setLoading(false);
    }

    fetchTasks();
  }, []);

  return { tasks, loading, error, setTasks, updateTaskStatus };
}
