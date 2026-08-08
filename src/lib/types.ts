export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'to_do' | 'in_progress' | 'completed' | 'paused';
  assigned_to: 'Você' | 'Hermes' | 'Time';
  priority: 'low' | 'medium' | 'high';
  due_date?: string; // Formato YYYY-MM-DD
  references: { title: string; url: string; }[];
  notes?: string;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
}

export interface ProjectPhase {
  phase: string;
  title: string;
  status: 'completed' | 'pending' | 'in_progress';
  percentage: number;
  notes: string;
}

export interface Metric {
  name: string;
  meta: number | string;
  current: number | string;
  trend: 'up' | 'down' | 'stable';
  last_updated: string;
}

export interface KnowledgeItem {
    title: string;
    url: string;
}

export interface Artifact {
    title: string;
    description: string;
    file_url: string;
}
