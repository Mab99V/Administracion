import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private api: AuthService,
    private router:Router) {}

canActivate(): boolean {

    if (this.api.Autenti()){
      return true;
   }else {
      this.router.navigateByUrl('/home');
      return false;
    }
  }
}
  

