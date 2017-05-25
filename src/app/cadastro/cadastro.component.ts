import { Component } from '@angular/core';
import { FotoComponent } from "../foto/foto.component";
import { Http, Headers } from '@angular/http'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { FotoService } from "../foto/foto.service";
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  foto = new FotoComponent;
  service: FotoService;
  meuForm: FormGroup;
  route: ActivatedRoute

  constructor(service: FotoService, fb: FormBuilder, route: ActivatedRoute) {
    this.service = service;

    this.route = route;

    this.route.params.subscribe(
      params => console.log(params['id'])
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

      this.service.cadastra(this.foto).subscribe(
                      () => {
                        this.foto = new FotoComponent;
                        console.log('Foto cadastrada com sucesso')
                      },
                      erro => console.log(erro)
      )
  }

}