// Servicio es un SINGLETON
// -> solo 1 instancia del SERVICIO

import {Injectable} from "@angular/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn:'root'
})
export class UsuarioRestService{
  // Inyeccion de dependencias
  constructor(
    // Dependencia de HTTP
    //public readonly httpClient: HttpClient,
    private readonly _httpClient: HttpClient,
  ){

  }

}
