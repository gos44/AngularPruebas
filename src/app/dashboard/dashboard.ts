import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Pruebas } from '../components/pruebas/pruebas';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export default class  Dashboard {}
