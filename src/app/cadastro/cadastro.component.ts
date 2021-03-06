import { Component } from '@angular/core';
import { FotoComponent } from "../foto/foto.component";
import { Http, Headers } from '@angular/http'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { FotoService } from "../foto/foto.service";
import { ActivatedRoute, Router } from "@angular/router"

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  foto = new FotoComponent()
  service: FotoService
  meuForm: FormGroup
  route: ActivatedRoute
  router: Router
  mensagem: string = ''

  constructor(service: FotoService, fb: FormBuilder, route: ActivatedRoute, router: Router) {

    this.service = service
    this.route = route
    this.router = router 

    this.route.params.subscribe(

        params => {
          let id = params['id']

          if(id){
            this.service.buscaPorId(id)
                      .subscribe(
                          foto => this.foto = foto,
                          erro => console.log(erro)
                      )
          }
        }

    )

    this.meuForm = fb.group({
      titulo: ['', Validators.compose(
        [
          Validators.required,
          Validators.minLength(4)
        ]
      )],
      url: ['', Validators.required],
      descricao: ['']
    })
  }

  cadastrar(){

      this.service.cadastra(this.foto)
                  .subscribe(
                      retorno => {

                        this.mensagem = retorno.mensagem

                        this.foto = new FotoComponent;

                        if(!retorno.inclusao) this.router.navigate(['']);
                      },
                      erro => console.log(erro)
      )
  }

}