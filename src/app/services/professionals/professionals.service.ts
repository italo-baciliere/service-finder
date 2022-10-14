import { Injectable } from '@angular/core';
import { IProfessional } from '../../models/IProfessional.model';

@Injectable({ // pode ser criado uma instancia deste objeto em outras classes
  providedIn: 'root'  //
})
export class ProfessionalsService {

  private listProfessionals: IProfessional[];

  constructor() {
    this.listProfessionals = [
      {
        photo: 'https://thispersondoesnotexist.com/image',
        nome: 'Ronaldo Matos',
        category: ['Marceneiro', 'Pintor', 'Encanador'],
        distance: 2.5,
        score: '5.0',
      },
      {
        photo: 'https://thispersondoesnotexist.com/image',
        nome: 'Ronaldo Matos',
        category: ['Marceneiro', 'Pintor', 'Encanador'],
        distance: 2.5,
        score: '5.0',
      },
      {
        photo: 'https://thispersondoesnotexist.com/image',
        nome: 'Ronaldo Matos',
        category: ['Marceneiro', 'Pintor', 'Encanador'],
        distance: 2.5,
        score: '5.0',
      }
    ];
  }

  public getAll(): Array<IProfessional>{
    return this.listProfessionals;
  }

  public searchProfessionalsNear(categoria: string, distance: number){
    console.log('Searching...');

    // let listResearch: number[] = [];

    // listResearch.push({2});
    // listResearchResult = this.listProfessionals.find(obj => obj.distance === distance);
    return this.listProfessionals.find(professional => professional.distance === distance);
  }
}
