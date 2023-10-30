import { Route } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './component/login/login.component';

export const AUTH_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {path: 'login', component: LoginComponent},
    ],
  }
];
