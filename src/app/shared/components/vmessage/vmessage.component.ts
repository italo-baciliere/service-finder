import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vmessage',
  templateUrl: './vmessagem.component.html',
  styleUrls: ['./vmessage.component.scss'],
})

export class VMessageComponent{

  @Input() message = '';

}
