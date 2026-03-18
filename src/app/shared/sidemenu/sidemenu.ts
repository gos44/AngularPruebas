import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  imports: [RouterModule],
  templateUrl: './sidemenu.html',
  styleUrl: './sidemenu.css',
})


export class Sidemenu {
  public MenuItems = routes
  .map(
      route => route.children ?? [])
      .flat()
      .filter(route => route && route.path)
      .filter(route => !route.path?.includes(':'))
      
  constructor(){
    // const dashboradRoute = routes.map(
    //   route => route.children ?? [])
    //   .flat()
    //   .filter(route => route && route.path)
    //   .filter(route => !route.path?.includes(':'))

    //  console.log(dashboradRoute)
  }
}
