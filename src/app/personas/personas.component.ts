import {Component, OnInit} from '@angular/core';
import {Persona} from "src/app/persona.model";
import {LoggingService} from "src/app/LoggingService.service";
import {PersonasService} from "src/app/personas.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private loggingService: LoggingService,
              private personasService: PersonasService,
              private router: Router) {



    this.loadPersonas();

  }

  ngOnInit(): void {
  }

  loadPersonas(){
   this.personas = this.personasService.personas;
  }


  agregar() {
    this.router.navigate(['/personas/agregar']);
  }

}
