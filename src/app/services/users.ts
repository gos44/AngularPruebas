import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { User, PaginatedResponse } from '@interfaces/resquest-response';
import { delay, map } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);
  
  #state = signal<State>({
    loading: true,
    users: [],
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);
  
  constructor() { 
    this.http.get<User[] | PaginatedResponse<User>>('http://127.0.0.1:8000/api/users')
      .pipe(
        // delay(1500) 
      )
      .subscribe({
        next: (res) => {
          const users = Array.isArray(res) ? res : res.data;
          this.#state.set({
            loading: false,
            users: users
          });
        },
        error: (err) => {
          console.error('Error fetching users:', err);
          this.#state.set({ loading: false, users: [] });
        }
      });
  }

  // Método opcional para cargar un usuario específico después
  getUserById(id: string) {
    return this.http.get<{data: User}>(`http://127.0.0.1:8000/api/users/${id}`)
      .pipe(map(res => res.data));
  }

}
