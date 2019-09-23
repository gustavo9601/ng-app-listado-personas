import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Persona} from "src/app/persona.model";
import {LoginService} from "src/app/login/login.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public url = 'https://listado-personas-b67a4.firebaseio.com/datos.json';

  constructor(private httpClient: HttpClient,
              private _loginService:LoginService) {
  }

  guardarPersonas(personas: Persona[]) {
    this.httpClient.put(this.url + "?auth=" + this.getTokenLogin(), personas).subscribe(
      (respuesta) => {
        console.log("respuesta al guardar personas", respuesta);
      }, (error) => {
        console.log("error al guardar personas", error);
      }
    )
  }


  obtenerPersonas() {
    return this.httpClient.get(this.url + "?auth=" + this.getTokenLogin());
  }


  modificarPersona(indecePersona:number, persona:Persona){
    let newUrl = "https://listado-personas-b67a4.firebaseio.com/datos/" + indecePersona + '.json' + "?auth=" + this.getTokenLogin();

    this.httpClient.put(newUrl, persona).subscribe(
      (respuesta) => {
        console.log("Respueta al actualziar personsa", persona);
      }
    )
  }


  eliminarPersona(indecePersona:number){

    let newUrl = "https://listado-personas-b67a4.firebaseio.com/datos/" + indecePersona + '.json' + "?auth=" + this.getTokenLogin();

    this.httpClient.delete(newUrl).subscribe(
      (respuesta) => {
        console.log("Elemento eliminado", respuesta);
      }
    )

  }

  getTokenLogin(){
    return this._loginService.getIdToken();
  }

}
