import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LibroRestService} from "../../services/rest/libro-rest.service";

@Component({
  selector: 'app-ruta-buscar-libro',
  templateUrl: './ruta-buscar-libro.component.html',
  styleUrls: ['./ruta-buscar-libro.component.scss']
})
export class RutaBuscarLibroComponent implements OnInit {

  libros = [];
  idUsuario:number;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _libroRestService: LibroRestService,
  ) {
  }

  ngOnInit() {  //CUANDO ESTA LISTO EL COMPONENTE SE EJECUTA ESTE CODIGO
    this.escucharParametros();
  }

  escucharParametros() {
    const parametrosPapa$ = this._activatedRoute.parent.params;

    parametrosPapa$
      .subscribe(
        (parametros) => {
          console.log(parametros);
          this.idUsuario = +parametros.idUsuario;
          this.buscarLibrosPorIdUsuario(+parametros.idUsuario);
        }
      );
  }

  buscarLibrosPorIdUsuario(idUsuario: number) {
    const consulta = `idUsuario=${idUsuario}`;
    const libros$ = this._libroRestService
      .buscar(consulta);

    libros$
      .subscribe(
        (libros) => {
          this.libros = libros;
          console.log(libros);
        },
        (error) => {
          console.error(error)
        }
      )
  }


}
