import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.scss']
})
export class MiPrimerComponenteComponent implements OnInit, OnDestroy {

//  class (etiqueta html) (web-component)
//  Instanciar a la  clase
//  Clase esta lista
//  Clase se destruye

  @Input()
  public titulo:string;

  @Input()
  public imagen:string;

  @Input()
  public textoImagen:string;

  @Input()
  public textoBoton:string;

  @Output()
  public cambioSueldo= new EventEmitter();

  // @Output()
  // public aumentarTamano= new EventEmitter();

  constructor() {
    console.log('Instanciando');
  }// Instancia la clase      NO ES BUENA IDEA PONER COSAS EN EL CONSTRUCTOR

  ngOnInit():void {  //  La clase esta lista
    console.log('Esta listo');
    // console.log(this.titulo, this.textoImagen, this.textoBoton);

  }

  ngOnDestroy(): void { // La clase esta destruida

  }

  saludar(){
    alert("HOLAAAAAAA");
  }

  tamanoImagen = 200;
  valorA:number = 0;
  valorB:number = 0;
  totalSuma:number = 0;
  totalResta:number = 0;
  totalMultip:number = 0;
  totalDiv:number = 0;


  sumarNumeros(){
    this.totalSuma=this.valorA+this.valorB;
    console.log('SUMA: ' + this.totalSuma);
    // return  + this.funcionB(event);
  }

  restarNumeros(){
    this.totalResta=this.valorA - this.valorB;
    console.log('RESTA: ' + this.totalResta);
    // return a+b;
  }

  multiplicarNumeros(){
    this.totalMultip= this.valorA * this.valorB;
    console.log('MULT: ' + this.totalMultip);
    // return a+b;
  }

  dividirNumeros(){
    this.totalDiv=this.valorA / this.valorB;
    console.log('DIV: ' + this.totalDiv);
  }

  guardarValorA(valor:number){
    this.valorA=valor;
    console.log(this.valorA);
  }

  funcionChangeA(event){
    const valor = event.srcElement.value;
    console.log(valor);
    this.guardarValorA(Number(valor));

    this.sumarNumeros();
    this.restarNumeros();
    this.multiplicarNumeros();
    this.dividirNumeros();
    // return Number(valor);
  }

  guardarValorB(valor:number){
    this.valorB=valor;
    // console.log(this.valorA);
  }

  funcionChangeB(event){
    const valor = event.srcElement.value;
    console.log(valor);
    this.guardarValorB(Number(valor));
    // return Number(valor);

    this.sumarNumeros();
    this.restarNumeros();
    this.multiplicarNumeros();
    this.dividirNumeros();
  }

  aumentarSueldo(){
    // this.textoBoton = (Number(this.textoBoton )+ 1).toString();
    this.textoBoton = (+this.textoBoton + 1).toString();
    this.cambioSueldo.emit(this.textoBoton);
    this.tamanoImagen = this.tamanoImagen + 10;

  }

}
