import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroeNames:string[]=['Spiderman','Ironman','Batman','Hulk','Thor'];
  public deletedHeroe?:string;
  borrarHeroe():void{
    this.deletedHeroe = this.heroeNames.pop();
    }
}
