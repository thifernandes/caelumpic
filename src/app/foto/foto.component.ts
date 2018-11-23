import { Component, Input } from '@angular/core';

@Component({
    selector: 'foto',
    templateUrl: './foto.component.html'
})

export class FotoComponent {
    _id: string;
    @Input() titulo: string = '';
    @Input() url: string = '';
    descricao: string = '';
}
