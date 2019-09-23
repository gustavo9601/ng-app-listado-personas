import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoginService} from "src/app/login/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: string = 'pruebas@gmail.com';
  password: string = 'Pruebas1234*';

  constructor(private _loginService: LoginService) {
  }

  ngOnInit() {
  }


  login(formulario: NgForm) {
    const email = formulario.value.email;
    const password = formulario.value.password;

    //console.log(email, password);

    this._loginService.login(email, password);
  }

}
