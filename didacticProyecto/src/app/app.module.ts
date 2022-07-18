import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { Instructor1Component } from './components/instructor1/instructor1.component';
import { Instructor2Component } from './components/instructor2/instructor2.component';
import { Instructor3Component } from './components/instructor3/instructor3.component';
import { HomeComponent } from './components/home/home.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ActJuegoComponent } from './components/act-juego/act-juego.component';
import { ActVideoComponent } from './components/act-video/act-video.component';
import { ActLecturaComponent } from './components/act-lectura/act-lectura.component';
import { AgregarActividadComponent } from './components/agregar-actividad/agregar-actividad.component';
import { AgregarTemaComponent } from './components/agregar-tema/agregar-tema.component';
import { InsertarLinkComponent } from './components/insertar-link/insertar-link.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministradorComponent,
    AlumnosComponent,
    InstructorComponent,
    Instructor1Component,
    Instructor2Component,
    Instructor3Component,
    HomeComponent,
    NavegacionComponent,
    PiePaginaComponent,
    RegistroComponent,
    ActJuegoComponent,
    ActVideoComponent,
    ActLecturaComponent,
    AgregarActividadComponent,
    AgregarTemaComponent,
    InsertarLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
