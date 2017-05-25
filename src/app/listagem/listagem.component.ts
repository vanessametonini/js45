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

  mensagem: string = "";

  constructor(service: FotoService) {

      this.service = service;

      this.service.lista().subscribe(
          fotos => this.fotos = fotos,
          erro => console.log(erro)
      )
  }

  remover(foto: FotoComponent){
    console.log(foto.titulo);
    console.log(foto._id);

    this.service.remove(foto)
                .subscribe(
                  () => {
                      //cria um copia da atual lista de fotos
                      let novasFotos = this.fotos.slice(0)

                      //pega a posicao no array da foto que foi excluida
                      let indice = novasFotos.indexOf(foto)

                      //remove o elemento do array com o indice informado, e quantidade de elementos a ser removidos
                      novasFotos.splice(indice,1)

                      //atribui um novo valor para lista de fotos
                      this.fotos = novasFotos

                      this.mensagem = "Foto removida com sucesso!"

                  },
                  erro => {
                    this.mensagem = "Erro ao tentar excluir a foto"
                    console.log(erro)
                  }

                );
  }

}
