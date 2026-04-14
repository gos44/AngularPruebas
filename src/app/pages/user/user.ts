import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

import { UsersService } from '@services/users';
import { Title } from "@shared/title/title";
import { User } from '@interfaces/resquest-response';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [Title, DatePipe],
  templateUrl: './user.html',
  styleUrl: './user.css',
})

export default class UserResponse {
  
  private route = inject(ActivatedRoute);
  public userService = inject(UsersService);

  public user = toSignal(
    this.route.params.pipe(
      switchMap((params) => this.userService.getUserById(params['id']))
    )
  );

  public titleLabel = computed(() => {
    if (this.user()) {
      return `Información del usuario: ${this.user()?.name}`;
    }
    return 'Cargando información...';
  });

  constructor() {}
}
