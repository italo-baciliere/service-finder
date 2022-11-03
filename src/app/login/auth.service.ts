import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginDTO, AccessToken } from '../models/Usuario.model';

const url = 'https://api-finder.azurewebsites.net/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mostrarMenuEmitter = new EventEmitter<boolean>();

  usuario: Usuario = null;
  accessToken: string;
  refreshToken: string;

  constructor(private router: Router, private http: HttpClient) {}


  authenticate(userName: string, password: string){
    return this.http.post(url + 'api/login/', {userName, password});
  }


  fazerLogin(loginData: LoginDTO){
    return this.http.post(url + 'api/login/', {username:loginData.userName, password:loginData.password})
    .subscribe(
      (data: AccessToken) => {
        this.accessToken = data.access_token;
        this.refreshToken = data.refresh_token;
      },
      (error) => {
      }
    );
  }




}
