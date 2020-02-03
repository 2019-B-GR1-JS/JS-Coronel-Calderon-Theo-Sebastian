import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {UsuarioRestService} from "../../services/rest/usuario-rest.service";
import {ModalEditarUsuarioComponent} from "../../modales/modal-editar-usuario/modal-editar-usuario.component";
import { FILAS } from 'src/app/constantes/numero-filas-por-tabla';

@Component({
  selector: 'app-ruta-gestion-usuarios',
  templateUrl: './ruta-gestion-usuarios.component.html',
  styleUrls: ['./ruta-gestion-usuarios.component.scss']
})
export class RutaGestionUsuariosComponent implements OnInit {
  title = 'angular-rest';
  url = 'http://localhost:1337';      //Es el puerto de SAILS (05-SAILS)

  //  DEPENDENCIAS SON SERVICIOS!!!!!
  constructor(
    private readonly _httpCLient: HttpClient,
    private readonly _matDialog: MatDialog,
    private readonly _usuarioRestService: UsuarioRestService,
  ) {
    //CASI NUNCA DEBE HABER CODIGO ->  ESTAS SON CONFIGURACIONES QUE CASI NUNCA SE DEBE HACER
  }

  usuarios = [];
  FILAS = FILAS;
  nombreFiltrado = '';
  apellidoFiltrado = '';
  correoFiltrado = '';
  passwordFiltrado = '';
  busquedaUsuario = '';

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
              error: error,
              mensaje: 'Error consultandodatos'
            }
          )
        }
      )
  }

  editar(usuario) {
    console.log('Editando usuario ', usuario);

    const matDialogRefModalEditarUsuario = this._matDialog
      .open(
        ModalEditarUsuarioComponent,
        {
          width: '250px',
          data: {
            usuario,
            // usuario: usuario,       Viene a ser lo mismo
          }
        }
      );
    const respuestaDialogo$ = matDialogRefModalEditarUsuario.afterClosed();

    respuestaDialogo$.subscribe(
      (datos) => {  //try
        console.log('Datos: ', datos);
        if (datos) {
          this.editarUsuarioHTTP(usuario.id, datos);
        } else {
          //undefined
        }
      },
      (error) => {  //catch
        console.log('Error: ', error);
      }
    );
  }

  editarUsuarioHTTP(id: number, datos) {
    const usuarioEditado$ = this._usuarioRestService
      .editar(id, datos);
    usuarioEditado$
      .subscribe(
        (usuarioEditado: any) => {
          console.log(usuarioEditado);
          const indice = this.usuarios
            .findIndex(
              (usuario) => {
                return usuario.id === id;
              }
            );
          this.usuarios[indice].nombre = datos.nombre;
          this.usuarios[indice].apellido = datos.apellido;
          this.usuarios[indice].correo = datos.correo;
          this.usuarios[indice].password = datos.password;
          this.usuarios[indice].rol = datos.rol;

        },
        (error) => {
          console.error(error);
        }
      )
  }

  eliminar(usuario) {
    console.log('Eliminando usuario ', usuario);

    const eliminar$ = this._usuarioRestService
      .eliminar(usuario.id)

    eliminar$
      .subscribe(
        (usuarioEliminado)=>{
          console.log(usuarioEliminado);
          const indice = this.usuarios
            .findIndex(
              (usuarioEliminado) => {
                return usuarioEliminado.id === usuario.id;
              }
            );
          this.usuarios.splice(indice,1);
        },
        (error)=>{
          console.error(error);
        }
      )
  }

  buscar(){
    const busqueda$ = this._usuarioRestService
      .buscar(this.busquedaUsuario);
    busqueda$
      .subscribe(
        (usuarios)=>{
          this.usuarios = usuarios;
        },
        (error)=>{
          console.error(error);
        }
      )
  }

  usuariosFiltrados() {

    return this.usuarios.filter(
      (usuario) => {
        if (
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
