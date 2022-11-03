import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.page.scss'],
})

export class SignInComponent implements OnInit{

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['italo@fmchtt.dev.br', Validators.required],  // admin@gmail.com   // italo@fmchtt.dev.br
      password: ['tmp@2022', Validators.required]              // admin             // tmp@2022
    });
  }

  login(){
    console.log('Vai se autenticar');

    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    // this.authService
    //   .authenticate(userName, password)
    //   .subscribe(
    //     () => console.log('authenticado'),
    //     err => {
    //       console.log(err);
    //       this.loginForm.reset();
    //     }
    //   );

    this.authService.fazerLogin({userName,password});


  }

  registrar() {
    throw new Error('Method not implemented.');
  }
}
