import { Component } from "@angular/core";

@Component({

    selector:'app-counter',
    template: `<h4>{{contador}}</h4>

                <button (click)="modificar(+1)">+1</button>
                <button (click)="resetear()">reset</button>
                <button (click)="modificar(-1)">-1</button>`,
})
export class CounterComponent{
    public titulo:string = "Primer ejemplo de angular";
  public contador:number =10;

  modificar(valor:number):void{
    this.contador+=valor;
  }
  resetear():void{
    this.contador=25
  }
}