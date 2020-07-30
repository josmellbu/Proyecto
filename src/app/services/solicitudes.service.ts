import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Solicitudes } from '../models/solicitudes';


@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  solicitudesList:AngularFireList<any>;
  selectSolicitudes: Solicitudes=new Solicitudes();

  constructor(private firebase:AngularFireDatabase) { 
    this.getSolis();
  }

  getSolis(){
    return this.solicitudesList=this.firebase.list('solicitudes')
  }

  insertSoli(solicitudes: Solicitudes){
    this.solicitudesList.push(solicitudes);
  }
}
