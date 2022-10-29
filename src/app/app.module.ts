import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AuthService } from './login/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomePageModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    HomePageModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService
  ],
  bootstrap: [
    AppComponent
  ],
})

export class AppModule {}
