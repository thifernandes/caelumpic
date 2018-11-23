import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../servicos/foto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ListagemComponent } from '../listagem/listagem.component';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {
  foto = new FotoComponent();
  mensagem;

  constructor(private servico: FotoService, rota: ActivatedRoute, 
    private roteador: Router) {
    rota.params.subscribe(
      parametros => {
        if (parametros.idFoto) {
          this.servico.obter(parametros.idFoto).subscribe(fotoApi => this.foto = fotoApi)
        }
      });
  }

  ngOnInit() {
  }

  salvar() {

    if (this.foto._id == null) {
      this.servico.incluir(this.foto).subscribe(
        () => {
          this.mensagem = `Foto ${this.foto.titulo} incluída com sucesso.`;
          this.foto = new FotoComponent();
          setTimeout(() => {
            this.roteador.navigate(['']);
          }, 2000);
        },
        erro => console.log(erro)
      );

    } else {
      this.servico.alterar(this.foto).subscribe(
        () => {
          this.mensagem = `Foto ${this.foto.titulo} alterada com sucesso.`;
          setTimeout(() => {
            this.roteador.navigate(['']);
          }, 2000);
        }, erro => console.log(erro)
      );
    }

  }

}