import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-libro',
  templateUrl: './ruta-editar-libro.component.html',
  styleUrls: ['./ruta-editar-libro.component.scss']
})
export class RutaEditarLibroComponent implements OnInit {

  parametrosEditar;
  parametrosPapa;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {  //CUANDO ESTA LISTO EL COMPONENTE SE EJECUTA ESTE CODIGO
    this.escucharParametrosEdicion();
    this.escucharParametrosPapa();
  }

  escucharParametrosEdicion() {
    const parametros$ = this._activatedRoute.params;

    parametros$
      .subscribe(
        (parametros) => {
          this.parametrosEditar = parametros.idLibro;
          // console.log(parametros);
          this.cargarUsuarioYLibro();
        }
      );
  }

  escucharParametrosPapa() {
    const parametros$ = this._activatedRoute.parent.params;

    parametros$
      .subscribe(
        (parametros) => {
          this.parametrosPapa = parametros.idUsuario;
          this.escucharParametrosEdicion();
          // console.log('Parametros papa: ' , parametros);
        }
      );
  }

  cargarUsuarioYLibro() {
    //Llamar al servidor con los parametros del papa y del hijo
    console.log(this.parametrosPapa);
    console.log(this.parametrosEditar);
  }


}
