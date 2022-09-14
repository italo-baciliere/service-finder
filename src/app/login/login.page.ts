import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  email: string;
  senha: string;

  constructor(private toastController: ToastController, private router: Router) {
    this.email =  'admin@gmail.com';
    this.senha = 'admin';
  }

  ngOnInit() {}

  login(){
    if(this.email === 'admin@gmail.com' && this.senha === 'admin'){
      this.router.navigateByUrl('/register');
      this.presentToast('Seja bem vindo', 'success');
    } else {
      this.presentToast('Usuário e senha incorretos', 'danger');
    }
  }
  async presentToast(text: string, cor: string){
    const toast = await this.toastController.create({
      message: text,
      color: cor,
      duration: 1500,
      position: 'bottom'
    });
    await toast.present();
  }

  registrar(){
    this.router.navigateByUrl('/register');
  }
}
