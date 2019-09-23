import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {LoginService} from "src/app/login/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  titulo = 'Listado de Personas';
  constructor(public _loginService:LoginService){}

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCR99Utf_dc0Tj8lcXpM05sjibPqFh8ODQ",
      authDomain: "listado-personas-b67a4.firebaseapp.com",
    });
  }

  salir(){
    this._loginService.logOut();
  }
}
