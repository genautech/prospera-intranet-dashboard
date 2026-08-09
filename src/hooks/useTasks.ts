import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Task } from '@/lib/types';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  return { tasks, loading, error, setTasks };
}
