import { Component } from '@angular/core';
import { Http } from '@angular/http'
import { FotoComponent } from './foto/foto.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Caelum Pic!';
  fotos: FotoComponent[] = [];

  constructor(http: Http){
      http.get('http://localhost:3000/v1/fotos')
          .map(
            res => res.json()
          )
          .subscribe(
            (fotos) => {
              this.fotos = fotos
            },
            (erro) => {
              console.log(erro)
            }
          )
  }

}
