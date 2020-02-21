import { Injectable } from '@angular/core';
import { PrincipalHttpService } from '../http-principal/principal-http.service';
import { Juego } from 'src/app/dto/Juego';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JuegoHttpService extends PrincipalHttpService<Juego> {

  constructor(private readonly _httpClient : HttpClient) {
    super(_httpClient, environment.url, '/Juego')
   }
}
