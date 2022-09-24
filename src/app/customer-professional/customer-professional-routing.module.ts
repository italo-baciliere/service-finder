import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerProfessionalPage } from './customer-professional.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerProfessionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerProfessionalPageRoutingModule {}
