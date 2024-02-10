import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component'),
  },
  {
    path: 'rxjs',
    loadComponent: () => import('./rxjs/rxjs.component'),
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('./detail/detail.component'),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
