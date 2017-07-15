import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { FotoComponent } from "./foto.component";
import { Injectable } from "@angular/core";

@Injectable()
export class FotoService {

    http: Http
    url: string = '//caelumpic-server.herokuapp.com/v1/fotos'
    headers: Headers;

    constructor(http: Http){

        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json')
    }

    lista(): Observable<FotoComponent[]> {
        return this.http.get(this.url)
                        .map(res => res.json())
    }

    cadastra(foto: FotoComponent): Observable<MensagemCadastro>{

        if(foto._id){
            return this.http.put(
                            this.url+'/'+foto._id, 
                            JSON.stringify(foto), 
                            { headers: this.headers}
                        ).map(
                            () => new MensagemCadastro('Foto alterada com sucesso', false)
                        )
        }
        else {
            return this.http.post(
                        this.url, 
                        JSON.stringify(foto), 
                        { headers: this.headers}
                    ).map(
                        () => new MensagemCadastro('Foto cadastrada com sucesso', true)
                    )
        }
    }

    remove(foto: FotoComponent): Observable<MensagemCadastro> {
        return this.http.delete(this.url+'/'+foto._id)
                        .map(
                            () => new MensagemCadastro('Foto Removida com sucesso', false)
                        )
    }

    buscaPorId(id: string): Observable<FotoComponent>{
        return this.http.get(this.url+'/'+id)
                        .map(res => res.json())
    }
}

export class MensagemCadastro {

    constructor(private _mensagem: string, private _inclusao: boolean){

        this._mensagem = _mensagem
        this._inclusao = _inclusao

    }

    public get mensagem(): string{
        return this._mensagem
    }

    public get inclusao(): boolean {
        return this._inclusao
    }

}