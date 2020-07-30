import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth} from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import { take, map , tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private router:Router, private afAuth:AngularFireAuth,
            private authServices:AuthService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authServices.afAuth.authState.pipe(
        take(1),map(authState=>!!authState),tap(logado=>{
          if(!logado){
            this.router.navigate(['/login'])
          }
        })
      )
  }
  
}
