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
  public valueW:number=200;
  @Input()
  public valueH:number=200;

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


  aumentarTamano(){
    this.valueH +=1;
    this.valueW +=1;
  }

  aumentarSueldo(){
    // this.textoBoton = (Number(this.textoBoton )+ 1).toString();
    this.textoBoton = (+this.textoBoton + 1).toString();
    this.cambioSueldo.emit(this.textoBoton);
    this.aumentarTamano();
  }

}
