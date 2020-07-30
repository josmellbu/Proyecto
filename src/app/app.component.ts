import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { auth } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  isLogin:boolean;

  constructor(private authService:AuthService, private router:Router, public toastr: ToastrService){
    this.authService.getAuth().subscribe(auth=>{
      if(auth){
        this.isLogin=true;
      }else{
        this.isLogin=false;
      }
    });
  }

  onLogout(){
    this.authService.logout();
    this.router.navigate(['/']);
    this.toastr.info('asd','asdasd')
  }
  nombre='Alex Josmell';
}
