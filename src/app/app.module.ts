import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {PersonaComponent} from './personas/persona/persona.component';
import {FormularioComponent} from './personas/formulario/formulario.component';
import {LoggingService} from './LoggingService.service';
import {PersonasService} from './personas.service';
import {AppRoutingModule} from "src/app/app-routing.module";
import {PersonasComponent} from './personas/personas.component';
import {ErrorComponent} from './error/error.component';
import {DataService} from "src/app/data.service";
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from './login/login.component';
import {LoginService} from "src/app/login/login.service";
import {GuardianGuard} from "src/app/login/guardian.guard";


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule, // Modulo de rutas
  ],
  providers: [
    LoggingService,
    PersonasService,
    DataService,
    LoginService,
    GuardianGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
