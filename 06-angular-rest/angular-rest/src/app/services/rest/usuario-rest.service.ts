// Servicio es un SINGLETON
// -> solo 1 instancia del SERVICIO

import {Injectable} from "@angular/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {Observable} from "rxjs";

@Injectable({
  providedIn:'root'
})
export class UsuarioRestService{
  // Inyeccion de dependencias
  url = environment.url + '/usuario';

  constructor(
    // Dependencia de HTTP
    //public readonly httpClient: HttpClient,
    private readonly _httpClient: HttpClient,
  ){

  }

  editar(id:number, datos):Observable<any>{
    const urlEditar = this.url + '/' + id;
    return this._httpClient
      .put(
        urlEditar,
        datos
      );

  }

}
