import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public token: string;

  constructor(private router: Router) {
  }

  login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      (respuesta) => {
        firebase.auth().currentUser.getIdToken().then(
          (token) => {
            this.token = token;

            console.log("token", this.token);


            this.router.navigate(['/']);
          }
        )
      }
    )


  }


  getIdToken() {
    return this.token;
  }


  isAutenticado() {
    return this.token != null;  // verifica que se haya llenado el token
  }


  logOut() {
    firebase.auth().signOut().then(
      (respuesta) => {
        console.log("Respuesta salida", respuesta);
        this.token = null;
        this.router.navigate(['/login']);
      }
    ).catch(
      (error) => {
        console.log("Error al salir", error);
      }
    )
  }

}
