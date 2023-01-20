import { Component } from '@angular/core';
import { ResolveStart } from '@angular/router';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  numero1:string = "0";
  numero2:string = "0";
  resultado:number = 0;


  sumar(): void{
    if(Number(this.numero1) && (Number(this.numero2))){
      this.resultado =  parseInt( this.numero1) + parseInt( this.numero2);
    }
  }

  restar():void{
    if(Number(this.numero1) && (Number(this.numero2))){
      this.resultado =  parseInt( this.numero1) - parseInt( this.numero2);
    }
  }
}
