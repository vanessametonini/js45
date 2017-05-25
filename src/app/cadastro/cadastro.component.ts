import { Component, OnInit } from '@angular/core';
import { FotoComponent } from "../foto/foto.component";
import { Http, Headers } from '@angular/http'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { FotoService } from "../foto/foto.service";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent;
  service: FotoService;
  meuForm: FormGroup;

  constructor(service: FotoService, fb: FormBuilder) {
    this.service = service;

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

  ngOnInit() {
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