import { Component, OnInit } from '@angular/core';
import { IProfessional } from '../models/IProfessional.model';

@Component({
  selector: 'app-customer-professional',
  templateUrl: './customer-professional.page.html',
  styleUrls: ['./customer-professional.page.scss'],
})
export class CustomerProfessionalPage implements OnInit {

  titulo = 'Vídeos App';

  listProfessionals: IProfessional[] = [
    {
      photo: 'https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg',
      nome: 'Ronaldo Matos',
      category: ['Marceneiro', 'Pintor', 'Encanador'],
      distance: 2.5,
      score: '5.0',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
