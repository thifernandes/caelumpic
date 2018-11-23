import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { FotoComponent } from "../foto/foto.component";
import { Injectable } from "@angular/core";
import { ParseSourceFile } from "@angular/compiler";

@Injectable()
export class FotoService {

    private cabecalho = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    private url = 'http://localhost:3000/v1/fotos/';

    constructor(private http: HttpClient) {

    }

    listar(): Observable<FotoComponent[]> {
        return this.http.get<FotoComponent[]>(this.url);
    }

    incluir(foto: FotoComponent): Observable<FotoComponent[]> {
        return this.http.post<FotoComponent[]>(this.url, foto, this.cabecalho);
    }

    remover(foto: FotoComponent): Observable<Object> {
        return this.http.delete(this.url + foto._id);
    }

    obter(id: string): Observable<FotoComponent> {
        return this.http.get<FotoComponent>(this.url + id);
    }

    alterar(foto: FotoComponent): Observable<FotoComponent> {
        return this.http.put<FotoComponent>(this.url + foto._id, foto);
    }
}