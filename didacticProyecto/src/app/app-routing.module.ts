import { InsertarLinkComponent } from './components/insertar-link/insertar-link.component';
import { AgregarTemaComponent } from './components/agregar-tema/agregar-tema.component';
import { AgregarActividadComponent } from './components/agregar-actividad/agregar-actividad.component';
import { ActVideoComponent } from './components/act-video/act-video.component';
import { ActLecturaComponent } from './components/act-lectura/act-lectura.component';
import { ActJuegoComponent } from './components/act-juego/act-juego.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { Instructor3Component } from './components/instructor3/instructor3.component';
import { Instructor2Component } from './components/instructor2/instructor2.component';
import { Instructor1Component } from './components/instructor1/instructor1.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'alumnos',component:AlumnosComponent},
  {path:'administrador',component:AdministradorComponent},
  {path:'instructor',component:InstructorComponent},
  {path:'instructor1',component:Instructor1Component},
  {path:'instructor2',component:Instructor2Component},
  {path:'instructor3',component:Instructor3Component},
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'signup',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'act-juego',component:ActJuegoComponent},
  {path:'act-lectura',component:ActLecturaComponent},
  {path:'act-video',component:ActVideoComponent},
  {path:'agregar-actividad',component:AgregarActividadComponent},
  {path:'agregar-tema',component:AgregarTemaComponent},
  {path:'insertar-link',component:InsertarLinkComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
