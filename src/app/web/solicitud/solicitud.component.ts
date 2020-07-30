import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from 'src/app/services/solicitudes.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  constructor(public soliService:SolicitudesService) { }

  ngOnInit(): void {
  }

  onSubmit(soliForm:NgForm){
    this.soliService.insertSoli(soliForm.value);
  }
  
}
