import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Persona} from '../../persona.model';
import {LoggingService} from '../../LoggingService.service';
import {PersonasService} from '../../personas.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nombreInput: string;
  apellidoInput: string;
  indicePersona: number;
  modoEdicion: number;

  constructor(private loggingService: LoggingService,
              private personasService: PersonasService,
              private router: Router,
              private route: ActivatedRoute) {
    this.personasService.saludar.subscribe(
      (indice: number) => alert("El indice es: " + indice)
    );
  }

  ngOnInit() {


    //Capturando el id
    this.indicePersona = this.route.snapshot.params['id'];
    console.log("Parametro", this.indicePersona);


    //capturamos el valor del parametro por get
    //con el + , convertimos a entero
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];

    //Si recibe un indice
    //llenamos el formulario con la informacion obtenida
    if (this.indicePersona && this.modoEdicion != null && this.modoEdicion === 1) {
      let persona: Persona = this.personasService.encontrarPersona(this.indicePersona);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }


  }

  onGuardarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);

    if (this.indicePersona) {
      this.personasService.editarPersona(this.indicePersona, persona1);
    } else {
      this.personasService.agregarPersona(persona1);
    }

    this.router.navigate(['/personas']);

  }


  eliminarPersona(indicePersona) {

    this.personasService.eliminarPersona(indicePersona);

    this.router.navigate(['/personas']);

  }

}
