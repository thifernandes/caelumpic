import { Component, OnInit, Inject } from '@angular/core';
import { FotoService } from '../servicos/foto.service';
import { FotoComponent } from '../foto/foto.component';

@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  title = 'Caelum Pic';
  listaFotos;
  mensagem;

  constructor(private servico: FotoService) {
    servico.listar().subscribe(
        fotosApi => this.listaFotos = fotosApi,
        erro => console.log(erro)
    );
  }
  
  remover(foto: FotoComponent) {
    this.servico.remover(foto).subscribe(
      () => {
        this.mensagem = `Foto ${foto.titulo} removida com sucesso.`;
        this.listaFotos = this.listaFotos.filter(f => f._id !== foto._id);

        setTimeout(
          () => this.mensagem = '', 5000
        );
      }
      , erro => console.log(erro)
    );


  }

  ngOnInit() {
  }
}
