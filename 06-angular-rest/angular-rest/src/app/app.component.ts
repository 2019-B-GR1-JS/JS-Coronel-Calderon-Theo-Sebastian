import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { FILAS } from './constantes/numero-filas-por-tabla';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-rest';
  url = 'http://localhost:1337';      //Es el puerto de SAILS (05-SAILS)

  //  DEPENDENCIAS SON SERVICIOS!!!!!
  constructor(
    private readonly _httpCLient: HttpClient
  ) {
    //CASI NUNCA DEBE HABER CODIGO ->  ESTAS SON CONFIGURACIONES QUE CASI NUNCA SE DEBE HACER
  }

  usuarios=[];
  FILAS= FILAS;
  nombreFiltrado='';
  apellidoFiltrado='';
  correoFiltrado='';
  passwordFiltrado='';

  ngOnInit(): void {
    const urlUsuarios = this.url + '/usuario';
    //usuarios$  ->  $significa que es observable
    const usuarios$ = this._httpCLient.get(
      urlUsuarios
    );

    usuarios$
      .subscribe(
        (usuarios: any[]) => {
          console.log('Usuarios: ', usuarios);
          this.usuarios = usuarios;

        },
        (error) => {
          console.error(
            {
              error:error,
              mensaje: 'Error consultandodatos'
            }
          )
        }
      )
  }

  editar(usuario){
    console.log('Editando usuario ', usuario);
  }

  eliminar(usuario){
    console.log('Eliminando usuario ', usuario);
  }

  usuariosFiltrados(){

    return this.usuarios.filter(
      (usuario)=>{
        if(
          !usuario.nombre.toLowerCase().includes(this.nombreFiltrado.toLowerCase()) ||
          !usuario.apellido.toLowerCase().includes(this.apellidoFiltrado.toLowerCase()) ||
          !usuario.correo.toLowerCase().includes(this.correoFiltrado.toLowerCase()) ||
          !usuario.password.toLowerCase().includes(this.passwordFiltrado.toLowerCase())
        ) return false;
        return true;
      }
    );

  }

}
