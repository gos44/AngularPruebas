import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'dasboard',
        loadComponent:() =>import('./dashboard/dashboard'),
        children:[
            {
                path:'change-dectection',
                title:'Change Dectection',
                loadComponent:()=> import('./pages/change-dectection/change-dectection'),
            },
            {
                path:'control-flow',
                title:'Control Flow',
                loadComponent:()=> import('./pages/control-flow/control-flow')
            },
            {
                path:'defer-options',
                title:'Defer Options',
                loadComponent:()=> import('./pages/defer-options/defer-options')
            },
            {
                path:'defer-view',
                title:'Defer View',
                loadComponent:()=> import('./pages/defer-view/defer-view')
            }
            ,
            {
                path:'user/:id',
                title:'User',
                loadComponent:()=> import('./pages/user/user')
            }
            ,
            {
                path:'user-list',
                title:'User List',
                loadComponent:()=> import('./pages/users/users')
            }
            ,
            {
                path:'view-transition',
                title:'View Transition',
                loadComponent:()=> import('./pages/view-transition/view-transition')
            } 
        ]      
    },
    {
        path:'',
        redirectTo:'/dasboard',
        pathMatch:'full'
    }
];
