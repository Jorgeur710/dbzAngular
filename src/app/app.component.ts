import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba';
  public titulo:string = "Primer ejemplo de angular";
  public contador:number =10;

  modificar(valor:number):void{
    this.contador+=valor;
  }
  resetear():void{
    this.contador=25
  }
}
