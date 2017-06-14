import { Component, Input, OnInit, ElementRef } from '@angular/core'
import * as $ from 'jquery';

@Component({
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
    @Input() titulo
    element: ElementRef;

    constructor(elemento: ElementRef){
        this.element = elemento
    }

    fadeOut(callback){
        $(this.element.nativeElement).fadeOut(callback);
    }

    ngOnInit() {

        //notacao do if ternário
        (this.titulo.length > 7) //se o titulo for maior que 7
        ? this.titulo = `${this.titulo.substr(0,7)}...` //titulo vai ser cortado até 7 e adicionado ...
        : this.titulo // senao retorna o titulo

    }

}