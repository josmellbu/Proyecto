import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {

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
