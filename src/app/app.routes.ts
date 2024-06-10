import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./ghost/ghost.page').then((c) => c.GhostPage),
  },
];
