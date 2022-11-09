import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './Usuario';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginDTO, AccessToken } from '../models/Usuario.model';

const url = 'http://localhost:8000/';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  mostrarMenuEmitter = new EventEmitter<boolean>();

  usuario: Usuario = null;
  loading: boolean;
  accessToken: string;
  refreshToken: string;

  constructor(private router: Router, private http: HttpClient) {}

  verifyTokens() {
    this.loading = true;
    if (this.accessToken) {
      this.http
        .post(url + 'api/verify', { token: localStorage.getItem('access') })
        .subscribe(
          (data) => {
            this.accessToken = localStorage.getItem('access');
            this.refreshToken = localStorage.getItem('refresh');
            this.loading = false;
          },
          () => {
            this.http
              .post<{ access: string }>(url + 'api/refresh', {
                refresh: localStorage.getItem('refresh'),
              })
              .subscribe(
                (res) => {
                  this.accessToken = res.access;
                  this.refreshToken = localStorage.getItem('refresh');
                  this.loading = false;
                },
                (e) => {
                  console.log(e);
                  localStorage.removeItem('access');
                  localStorage.removeItem('refresh');

                  this.accessToken = null;
                  this.refreshToken = null;
                }
              );
          }
        );
    }
  }

  authenticate(userName: string, password: string) {
    return this.http.post(url + 'api/login', { userName, password });
  }

  fazerLogin(loginData: LoginDTO) {
    this.http
      .post(url + 'api/login', {
        username: loginData.userName,
        password: loginData.password,
      })
      .subscribe(
        (data: AccessToken) => {
          this.accessToken = data.access;
          this.refreshToken = data.refresh;

          localStorage.setItem('access', data.access);
          localStorage.setItem('refresh', data.refresh);

          this.router.navigate(['home']);
        },
        (error) => {}
      );
  }
}
