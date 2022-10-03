import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mostrarMenuEmitter = new EventEmitter<boolean>();

  private usuarioAutenticado = false;

  constructor(private router: Router) {}

  fazerLogin(usuario: Usuario){
    if(usuario.email === 'admin@gmail.com' && usuario.senha === 'admin'){
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigateByUrl('/profile');
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  UsuarioAuthenticado(){
    return this.UsuarioAuthenticado;
  }
}
