// src/app/core/models/task.model.ts

export type TaskStatus = 'pending' | 'in_progress' | 'done';

export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string | null;
  tasks_count?: number;
  created_at: string;
}

export interface Task {
  id: number;
  title: string;
  description?: string | null;
  status: TaskStatus;
  due_date: string | null;  // 'YYYY-MM-DD'
  user: User | null;
  created_at: string;
  updated_at: string;
}

// Payload para crear una tarea
export interface CreateTaskPayload {
  user_id: number;
  title: string;
  description?: string;
  status?: TaskStatus;
  due_date?: string;
}

// Payload para actualizar (todos opcionales)
export interface UpdateTaskPayload {
  user_id?: number;
  title?: string;
  description?: string | null;
  status?: TaskStatus;
  due_date?: string | null;
}

// Respuesta paginada estándar de Laravel
export interface PaginatedResponse<T> {
  data: T[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
  };
}