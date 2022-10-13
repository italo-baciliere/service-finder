import { Component } from '@angular/core';
import { __param } from 'tslib';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  pinFormatter(value: number) {
      return `${value}km`;
  }

  // https://www.youtube.com/watch?v=lWfMxGU9LXU
  rangeChange(event: any){
    console.log(event.detail.value);
  }

  searchProfessionalByDistance(){
    console.log('Searching...');
  }
}
