import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UsuarioRestService} from "./services/rest/usuario-rest.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from 'primeng/button';
import {TableModule} from "primeng";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [
    UsuarioRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
