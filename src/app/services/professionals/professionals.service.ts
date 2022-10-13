import { Injectable } from '@angular/core';
import { IProfessional } from '../../models/IProfessional.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalsService {

  private listProfessionals: IProfessional[];

  constructor() {
    this.listProfessionals = [
      {
        photo: 'https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg',
        nome: 'Ronaldo Matos',
        category: ['Marceneiro', 'Pintor', 'Encanador'],
        distance: 2.5,
        score: '5.0',
      }];
  }

  public searchProfessionalsNear(categoria: string, distance: number){
    console.log('Searching...');

    // let listResearch: number[] = [];


    // listResearch.push({2});
    // listResearchResult = this.listProfessionals.find(obj => obj.distance === distance);
    return this.listProfessionals.find(professional => professional.distance === distance);
  }
}
