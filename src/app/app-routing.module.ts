import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PersonasComponent} from "src/app/personas/personas.component";
import {FormularioComponent} from "src/app/personas/formulario/formulario.component";
import {ErrorComponent} from "src/app/error/error.component";
import {LoginComponent} from "src/app/login/login.component";
import {GuardianGuard} from "src/app/login/guardian.guard";


//Rutas sin el ajuste de rutas hijas
/*const routes: Routes = [
  {path: '', component: PersonasComponent},  // Ruta por default
  {path: 'personas', component: PersonasComponent},  // /personas
  {path: 'personas/agregar', component: FormularioComponent},  // /personas/agregar
  {path: 'personas/:id', component: FormularioComponent}  // /personas/:id
];*/

const routes: Routes = [
  {
    path: '', // Ruta por default
    component: PersonasComponent,
    canActivate: [GuardianGuard]
  },
  {
    path: 'personas', // /personas
    component: PersonasComponent,
    canActivate: [GuardianGuard],  // Implementando el guardian
    children: [
      {path: 'agregar', component: FormularioComponent},  // /personas/agregar
      {path: ':id', component: FormularioComponent}  // /personas/:id
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: '**', component: ErrorComponent}  //cualquier ruta que no coincida
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
