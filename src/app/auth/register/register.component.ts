import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RegistrarModel } from 'src/app/models/';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: RegistrarModel;
  remenber = false;

  constructor( private api:AuthService, private router:Router) { }

  ngOnInit(): void {
  
    this.register = new RegistrarModel();
    
    if(localStorage.getItem('email') || localStorage.getItem('registration_tag')){
      this.register.registration_tag =localStorage.getItem('registration_tag');
      this.register.email = localStorage.getItem('email');
      this.remenber = true;
    }

  }


  onRegister(form: NgForm){
    if(form.invalid){
      return;
    }
    this.api.Register(this.register).subscribe(
      resp => {
         if(this.remenber){
           localStorage.setItem('email', this.register.email);
           console.log(resp)
         }
         this.router.navigateByUrl('/login');
      },(error) => {
        console.log(error)
      }
    )
  }
}
