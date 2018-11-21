import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';

const rotasApp: Routes = [
    {path: '', component: ListagemComponent}, //se for endereco vazio, redireciona para a tela de listagem.
    {path: 'cadastro', component: CadastroComponent},
    {path: '**', redirectTo: ''} //redireciona para uma pagina vazia.
];

export const roteamento = RouterModule.forRoot(rotasApp);