import { Component} from '@angular/core';
import { CharacterInterface } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.components.html'
})

export class MainPageComponent{
    public characters:CharacterInterface[]=[
        {
            name:'Krilin',
            power:10,
        },
        {
            name:'Goku',
            power:9000,
        },
        {
            name:'Pikolo',
            power:7000,
        }
    ];
    constructor() { }
}