import {Persona} from './persona.model';
import {LoggingService} from './LoggingService.service';
import {Injectable, EventEmitter} from '@angular/core';
import {DataService} from "src/app/data.service";
import {__await} from "tslib";
import {forEach} from "@angular/router/src/utils/collection";

@Injectable()
export class PersonasService {
  public personas: Persona[] = [];
  saludar = new EventEmitter<number>();

  constructor(private loggingService: LoggingService,
              private _dataService: DataService) {
    this.cargarPersonas();
  }

  agregarPersona(persona: Persona) {
    this.loggingService.enviaMensajeAConsola("agregamos persona:" + persona.nombre);
    this.personas.push(persona);
    this._dataService.guardarPersonas(this.personas);

  }

  cargarPersonas() {
    return this._dataService.obtenerPersonas().subscribe(
      (respuesta: Persona[]) => {
        console.log("Obtener personas", respuesta);

          this.personas = respuesta || [];
        },
      (error) => {
        console.log("Error obtener personas", error);
      }
    )
  }

  encontrarPersona(indicePersona: number) {
    let persona: Persona = this.personas[indicePersona];

    return persona;
  }

  editarPersona(indicePersona: number, persona: Persona) {

    this.personas[indicePersona].nombre = persona.nombre;
    this.personas[indicePersona].apellido = persona.apellido;

    this._dataService.modificarPersona(indicePersona, persona);

  }

  eliminarPersona(indicePersona) {
    this.personas.splice(indicePersona, 1);
    this._dataService.eliminarPersona(indicePersona);
  }

}
