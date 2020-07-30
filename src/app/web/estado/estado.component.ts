import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nombre='Alex Josmell';
  apellidos='Quispe Quispe';
  codigou='201911725';
  planA='20101-2019-1';
  periodo='2020-1';
  empresa='Pepi Kids';
  areaF='DTI';
  horasA='655';
  inicio='31/07/2020';
  fin='31/12/2020';
  estado='concluido'
}
