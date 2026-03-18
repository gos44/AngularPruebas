import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Pruebas } from '../components/pruebas/pruebas';
import { Sidemenu } from '@shared/sidemenu/sidemenu';
// import { Sidemenu } from '@shared/sidemenu/sidemenu';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule,Sidemenu],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export default class  Dashboard {}
