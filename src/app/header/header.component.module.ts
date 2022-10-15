import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    IonicModule
  ],
  declarations: [
    HeaderComponent],
  exports: [HeaderComponent]
})

export class HeaderModule {}

// https://www.youtube.com/watch?v=za5NaFavux4
