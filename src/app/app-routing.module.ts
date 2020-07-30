import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './web/home/home.component';
import { PerfilComponent } from './web/perfil/perfil.component';
import { SolicitudComponent } from './web/solicitud/solicitud.component';
import { EstadoComponent } from './web/estado/estado.component';
import { LoginComponent } from './web/login/login.component';
import { AdministradorComponent } from './web/administrador/administrador.component';
import { AuthGuard } from './guards/auth.guard'
import { ReporteComponent } from './web/administrador/reporte/reporte.component';
import { SolicitudesComponent } from './web/administrador/solicitudes/solicitudes.component';
import { VerComponent } from './web/ver/ver.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'perfil', component:PerfilComponent},
  {path:'solicitud', component:SolicitudComponent},
  {path:'estado', component:EstadoComponent},
  {path:'login', component:LoginComponent},
  {path:'administrador', component:AdministradorComponent,canActivate:[AuthGuard]},
  {path:'reporte', component:ReporteComponent},
  {path:'solicitudes', component:SolicitudesComponent},
  {path:'versh', component:VerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
