import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FotoService } from '../servicos/foto.service';

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  title = 'Caelum Pic';
  listaFotos;

  constructor(private servico: FotoService) {
    servico.listar().subscribe(
        fotosApi => this.listaFotos = fotosApi,
        erro => console.log(erro)
    );
  }
  
  ngOnInit() {
  }
}
