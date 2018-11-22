import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FotoService } from '../servicos/foto.service';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {
  foto = new FotoComponent();

  constructor(private servico: FotoService) {
   }

  ngOnInit() {
  }

  salvar() {
    this.servico.salvar(this.foto).subscribe(
      () => {
        console.log(`Foto ${this.foto.titulo} salva com sucesso.`);
        this.foto = new FotoComponent();
      },
      erro => console.log(erro)
    );
  }

}
