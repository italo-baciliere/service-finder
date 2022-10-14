import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  distanceSearch = 9;

  constructor(private router: Router) {}

  pinFormatter(value: number) {
      return `${value}km`;
  }

  // https://www.youtube.com/watch?v=lWfMxGU9LXU
  // (ionChange)="rangeChange($event)" [value]="distanceSearch"
  // rangeChange(event: any){
  //   this.distanceSearch = event.detail.value;
  // }

  searchProfessionalByDistance(){
    console.log('Searching...');
    this.router.navigateByUrl(`customer-professional/${this.distanceSearch}`);
    // https://medium.com/angularbr/angular-5-trabalhando-com-rotas-8335617fcdbc
    // Ctrl + b
  }
}
