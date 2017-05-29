import { Component, Input, OnInit, ElementRef } from '@angular/core'
import * as $ from 'jquery';

@Component({
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
    @Input() titulo
    private elemento: ElementRef

    constructor(elemento: ElementRef){
        this.elemento = elemento;
    }

    ngOnInit() {

        //notacao do if ternário
        (this.titulo.length > 7) //se o titulo for maior que 7
        ? this.titulo = `${this.titulo.substr(0,7)}...` //titulo vai ser cortado até 7 e adicionado ...
        : this.titulo // senao retorna o titulo
    }

    fadeOut(cb){
        $(this.elemento.nativeElement).fadeOut(cb)
    }

}