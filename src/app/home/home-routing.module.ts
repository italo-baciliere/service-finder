import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from '../header/header.component.module';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HeaderModule
  ],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
