import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {
  correo='';
  password='';


  constructor(private readonly _authService:AuthService) { }

  ngOnInit() {
  }

  login(){
    const respuestaLogin$ = this._authService.login(this.correo, this.password);

    respuestaLogin$
      .subscribe(
        (datos: any[])=>{
          if(datos.length>0){
            console.log('USUARIO LOGEADO');
            this._authService.estaLoggeado=true;
            this._authService.sesion=datos[0];
          }else {
            console.log('Usuario no encontrado')
          }
        },
        (error)=>{
          console.error('Error', error);
        }
      )
  }

}
