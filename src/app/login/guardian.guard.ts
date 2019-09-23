import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "src/app/login/login.service";

@Injectable({
  providedIn: 'root'
})
export class GuardianGuard implements CanActivate {

  constructor(private _loginService:LoginService,
              private router:Router){

  }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    if(this._loginService.isAutenticado()){  // verificando que el token este activo
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
