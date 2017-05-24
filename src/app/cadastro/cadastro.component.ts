import { Component, OnInit } from '@angular/core';
import { FotoComponent } from "../foto/foto.component";
import { Http, Headers } from '@angular/http'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent;
  http: Http;
  meuForm: FormGroup;

  constructor(http: Http, fb: FormBuilder) {
    this.http = http;

    this.meuForm = fb.group({
      titulo: ['', Validators.required],
      url: ['', Validators.required],
      descricao: ['']
    })
  }

  ngOnInit() {
  }

  cadastrar(){

      var headers = new Headers();
          headers.append('Content-Type','application/json')

          this.http.post('http://localhost:3000/v1/fotos', JSON.stringify(this.foto), {
            headers: headers
          })
          .subscribe(
            () => {
              this.foto = new FotoComponent;
              console.log('Foto cadastrada com sucesso')
            },
            erro => console.log(erro)
          )

          console.log(this.foto)
  }

}