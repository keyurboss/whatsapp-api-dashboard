import { inject } from '@angular/core';
import { Route } from '@angular/router';
import { LoginGuard } from './guards/login.guard';

export const appRoutes: Route[] = [
  {
    path: 'login',
    canActivate: [inject(LoginGuard).isLogin()],
    canMatch: [inject(LoginGuard).isLogin()],
    loadComponent: () =>
      import('./Login/Login.component').then((a) => a.LoginComponent),
  },
];
