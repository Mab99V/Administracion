import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { LoginEmail} from 'src/app/models';
import { LoginMatricula} from 'src/app/models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  mat: LoginMatricula;
  admin: LoginEmail;
  remenber = false;

  constructor(private router:Router, private api:AuthService) { }

  ngOnInit(): void {

    this.admin = new LoginEmail();
    this.mat = new LoginMatricula();

    if(localStorage.getItem('email') || localStorage.getItem('registration_tag')){
      this.mat.registration_tag =localStorage.getItem('registration_tag');
      this.admin.email = localStorage.getItem('email');
      this.remenber = true;
    }

  }

onLoginEma(form: NgForm){
  if(form.invalid){
    return;
  }
  this.api.LoginEmail(this.admin).subscribe(
    resp => {
       if(this.remenber){
         localStorage.setItem('email', this.admin.email);
         console.log(resp)
       }
       this.router.navigateByUrl('/home');
    },(error) => {
      console.log(error)
    }
  )
}

onLoginMa(form: NgForm){
  if(form.invalid){
    return;
  }
  this.api.LoginMa(this.mat).subscribe(
    resp => {
       if(this.remenber){
         localStorage.setItem('registration_tag', this.mat.registration_tag);
       }
       this.router.navigateByUrl('/home');
       
    },(error) => {
      console.log(error)
    }
  )
}


}
