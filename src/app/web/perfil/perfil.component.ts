import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nombre='Alex Josmell';
  apellidos='Quispe Quispe';
  codigou='201911725';
  planA='20101-2019-1';
  periodo='2020-1'
}
