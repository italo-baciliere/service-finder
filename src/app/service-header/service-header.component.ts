import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './service-header.component.html',
  styleUrls: ['./service-header.component.scss'],
})
export class ServiceHeaderComponent implements OnInit {

  // Inboud properties - aceita receber valor através da sua forma declarativa do componente
  // @Input() description = '';
  description = 'Logo Service Finder';

  constructor() { }

  ngOnInit() {}
}
