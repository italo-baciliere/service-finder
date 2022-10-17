import { Injectable } from '@angular/core';
import { IProfessional } from '../../models/IProfessional.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ // pode ser criado uma instancia deste objeto em outras classes
  providedIn: 'root'
})
export class ProfessionalsService {

  private listProfessionals: IProfessional[];
  private url = 'http://localhost:3000/professionals';

  constructor(private httpClient: HttpClient) {
    this.listProfessionals = [];
  }

  get professionals(){
    return this.listProfessionals;
  }

  public getAll(): Array<IProfessional>{
    return this.listProfessionals;
  }

  todas(){
    return this.httpClient.get<IProfessional[]>(this.url);
  }

  public searchProfessionalsNear(categoria: string, distance: number){
    console.log('Searching...');

    // let listResearch: number[] = [];

    // listResearch.push({2});
    // listResearchResult = this.listProfessionals.find(obj => obj.distance === distance);
    return this.listProfessionals.find(professional => professional.distance === distance);
  }
}

// JSON SERVER
// https://github.com/typicode/json-server
// json-server --watch db.json
