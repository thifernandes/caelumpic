import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  foto = new FotoComponent();

  constructor() { }

  ngOnInit() {
  }

  salvar(event: Event) {
    event.preventDefault();
    console.log(this.foto);
  }

}
