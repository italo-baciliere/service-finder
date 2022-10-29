import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.page.scss'],
})

export class SignInComponent implements OnInit{

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['admin@gmail.com', Validators.required],
      password: ['admin', Validators.required]
    });
  }

  registrar(){}

  login(){}
}
