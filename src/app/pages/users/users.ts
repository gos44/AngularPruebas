import { Component, inject } from '@angular/core';
import { UsersService } from '@services/users';
import { Title } from '@shared/title/title';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [Title, RouterModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export default class Users {
  public userService = inject(UsersService);
}
