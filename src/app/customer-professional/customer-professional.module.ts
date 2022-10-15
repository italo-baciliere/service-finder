import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerProfessionalPageRoutingModule } from './customer-professional-routing.module';

import { CustomerProfessionalPage } from './customer-professional.page';
import { HeaderModule } from '../header/header.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    CustomerProfessionalPageRoutingModule
  ],
  declarations: [
    CustomerProfessionalPage
    ]
})
export class CustomerProfessionalPageModule {}
