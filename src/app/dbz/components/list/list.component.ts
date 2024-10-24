import { Component, Input} from '@angular/core';
import { CharacterInterface } from '../../interfaces/character.interface';

@Component({
    selector: 'app-dbz-list',
    templateUrl: './list.component.html'
})

export class ListComponent{
    @Input()
    public characterList:CharacterInterface[]=[{
        name:'Gohan',
        power:2000
    },{
        name:'Vegeta',
        power:8000
    }]
    constructor() { }
}
