import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  title = 'Caelum Pic';
  listaFotos;

  constructor(http: HttpClient) {
    http.get('http://localhost:3000/v1/fotos')
      .subscribe(
        fotosApi => this.listaFotos = fotosApi,
        erro => console.log(erro)
    );
  }
  
  ngOnInit() {
  }
}
