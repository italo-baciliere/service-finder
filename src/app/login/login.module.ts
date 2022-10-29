import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';

import { HeaderModule } from '../header/header.component.module';
import { SignInComponent } from './signin/signin.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    HeaderModule,
    ReactiveFormsModule
  ],
  declarations: [LoginPage, SignInComponent]
})
export class LoginPageModule {}
