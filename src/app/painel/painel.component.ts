import { Component, Input, OnInit } from '@angular/core'

@Component({
    selector: 'painel',
    templateUrl: './painel.component.html'
})
export class PainelComponent implements OnInit {
    @Input() titulo

    constructor(){}

    ngOnInit() {

        //notacao do if ternário
        (this.titulo.length > 7) //se o titulo for maior que 7
        ? this.titulo = `${this.titulo.substr(0,7)}...` //titulo vai ser cortado até 7 e adicionado ...
        : this.titulo // senao retorna o titulo

    }

}