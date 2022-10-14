import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProfessional } from '../models/IProfessional.model';
import { ProfessionalsService } from '../services/professionals/professionals.service';

@Component({
  selector: 'app-customer-professional',
  templateUrl: './customer-professional.page.html',
  styleUrls: ['./customer-professional.page.scss'],
})
export class CustomerProfessionalPage implements OnInit {

  // titulo = 'Vídeos App';
  // title = 'Título';

  // ao carregar o componente, trazer a lista de profissionais que se enquadram na distancia e categoria.
  // utilizar o serviço para retornar os dados. a principio, puxar os dados de todos os profissionais e exibir
  // caso não seja retornado nenhum usuário, utilizar o template default
  listProfessionals: IProfessional[];
  professionalService: ProfessionalsService;

  constructor(private route: ActivatedRoute) {
    this.professionalService = new ProfessionalsService();
    this.listProfessionals = this.professionalService.getAll();
    this.route.params.subscribe(res => console.log(res.longitude)); // parametro passado pela rota
  }

  // função para capturar todos os profissionais pela categoria e pela distância.
  // adicionar a propriedade longitute e latitute no profissional e no cliente.

  ngOnInit() {
  }

}
