import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRutasModule } from './app-rutas.module';
import { InicioComponent } from './inicio/inicio.component';
import { SoporteComponent } from './soporte/soporte.component';
import { SoftwareComponent } from './software/software.component';
import { ServiciosComponent } from './servicios/servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SoporteComponent,
    SoftwareComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRutasModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
