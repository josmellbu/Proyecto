import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './web/home/home.component';
import { LoginComponent } from './web/login/login.component';
import { PerfilComponent } from './web/perfil/perfil.component';
import { SolicitudComponent } from './web/solicitud/solicitud.component';
import { from } from 'rxjs';
import { EstadoComponent } from './web/estado/estado.component';
import { PracticasComponent } from './web/practicas/practicas.component';
import { FormsModule } from '@angular/forms';
import { AdministradorComponent } from './web/administrador/administrador.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CoordipppComponent } from './web/administrador/coordippp/coordippp.component';
import { ReporteComponent } from './web/administrador/reporte/reporte.component';
import { SelecComponent } from './web/administrador/selec/selec.component';
import { SolicitudesComponent } from './web/administrador/solicitudes/solicitudes.component';
import { VerComponent } from './web/ver/ver.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PerfilComponent,
    SolicitudComponent,
    EstadoComponent,
    PracticasComponent,
    AdministradorComponent,
    CoordipppComponent,
    ReporteComponent,
    SelecComponent,
    SolicitudesComponent,
    VerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
