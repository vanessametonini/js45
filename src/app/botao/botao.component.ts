import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'botao',
  templateUrl: './botao.component.html'
})
export class BotaoComponent {

  @Input() nome: string = "Ok"
  @Input() classes: string = "btn-default"
  @Input() tipo: string = "button"
  @Output() acao = new EventEmitter();
  @Input() confirmacao = false
  @Input() desabilitado: boolean = false

  executaAcao(){

      if(this.confirmacao){
          if(confirm('vc tem certeza?')){
            this.acao.emit()
          }
      } else {
        this.acao.emit()
      }

  }

}
