import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado = false;

  constructor(private router: Router) {}

  fazerLogin(usuario: Usuario){
    if(usuario.email === 'admin@gmail.com' && usuario.senha === 'admin'){
      this.usuarioAutenticado = true;
      this.router.navigateByUrl('/profile');
    } else {
      this.usuarioAutenticado = false;
    }
  }
}
