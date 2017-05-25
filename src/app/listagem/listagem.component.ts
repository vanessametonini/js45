import { Component } from '@angular/core';
import { Http } from '@angular/http'
import { FotoComponent } from '../foto/foto.component'
import { FotoService} from '../foto/foto.service'

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {

  title = 'Caelum Pic!';

  fotos: FotoComponent[] = [];

  service: FotoService

  constructor(service: FotoService) {

      this.service = service;

      this.service.lista().subscribe(
          fotos => this.fotos = fotos,
          erro => console.log(erro)
      )
  }

}
