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
      userName: ['', Validators.required], // admin@gmail.com     // tmp@2022
      password: ['', Validators.required] // admin                //  italo@fmchtt.dev.br
    });
  }

  registrar(){}

  login(){
    this.authService.fazerLogin({userName:this.loginForm.get('userName').value,password:this.loginForm.get('password').value});
  }
}
