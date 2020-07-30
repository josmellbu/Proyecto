import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email:string;
  public password:string;

  constructor(public authService:AuthService, public router:Router, public toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmitLogin(){
    this.authService.loginEmail(this.email,this.password).then((res)=>{
      this.toastr.success('asdasd','Usuario logado')
      this.router.navigate(['./administrador'])

    }).catch((err)=>{
      this.toastr.error('asd','datos incorrectos');
    });
  }
}
