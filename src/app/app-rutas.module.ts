import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SoporteComponent } from './soporte/soporte.component';
import { SoftwareComponent } from './software/software.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'soporte', component: SoporteComponent },
  { path: 'software', component: SoftwareComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRutasModule { }
