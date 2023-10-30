import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginUser } from '@types';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { APP_CONFIG } from '@config';
import { setToken, removeToken } from '@helper';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(user: LoginUser): Observable<any> {
    return this.http
      .post<any>(`${APP_CONFIG.API_URL}/login`, user)
      .pipe(
        map((res) => {
          console.log('res', res)
          if(res?.data?.access_token){
            setToken(res?.data?.access_token);
            this.router.navigate(['admin']);
          }
          return res;
        }),
        catchError((error: any) => {
          return of(error)
        })
      );
  }

  logout(): void{
    removeToken();
    this.router.navigate(['auth/login']);
  }
}
