import { Injectable, signal, computed } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSignal = signal<Task[]>([]);
  
  filterStatus = signal<'all' | 'pending' | 'completed'>('all');
  filterCategory = signal<'all' | 'Trabajo' | 'Personal' | 'Urgente' | 'General'>('all');

  filteredTasks = computed(() => {
    let tasks = this.tasksSignal();
    if (this.filterStatus() === 'pending') tasks = tasks.filter(t => !t.completed);
    else if (this.filterStatus() === 'completed') tasks = tasks.filter(t => t.completed);
    if (this.filterCategory() !== 'all') tasks = tasks.filter(t => t.category === this.filterCategory());
    return tasks;
  });

  constructor() { this.loadFromStorage(); }

  // Cambiado de string a los tipos específicos del modelo
  addTask(title: string, category: 'Trabajo' | 'Personal' | 'Urgente' | 'General') {
    const newTask: Task = { id: Date.now(), title, category, completed: false };
    this.tasksSignal.update(tasks => [...tasks, newTask]);
    this.saveToStorage();
  }

  // Cambiado de string a los tipos específicos del modelo
  editTask(id: number, title: string, category: 'Trabajo' | 'Personal' | 'Urgente' | 'General') {
    this.tasksSignal.update(tasks => 
      tasks.map(t => t.id === id ? { ...t, title, category } as Task : t)
    );
    this.saveToStorage();
  }

  updateTask(id: number) {
    this.tasksSignal.update(tasks => 
      tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    );
    this.saveToStorage();
  }

  deleteTask(id: number) {
    this.tasksSignal.update(tasks => tasks.filter(t => t.id !== id));
    this.saveToStorage();
  }

  private saveToStorage() { localStorage.setItem('tasks', JSON.stringify(this.tasksSignal())); }
  private loadFromStorage() {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      try {
        this.tasksSignal.set(JSON.parse(saved));
      } catch (e) {
        console.error("Error cargando tareas", e);
      }
    }
  }
}