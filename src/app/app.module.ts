import 'rxjs/add/operator/map'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module'
import { PainelModule } from './painel/painel.module';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component'
import { routing } from './app.routes';
import { BotaoModule } from './botao/botao.module'

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FotoModule,
    PainelModule,
    routing,
    ReactiveFormsModule,
    BotaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
