export interface Task {
  id: number;
  title: string;
  category: 'Trabajo' | 'Personal' | 'Urgente' | 'General';
  completed: boolean;
}