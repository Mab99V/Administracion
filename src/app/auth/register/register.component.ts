import { Component, OnInit } from '@angular/core';
import { RegistrarModel } from 'src/app/models/';
/*import { FormControl, FormGroup,Validators } from '@angular/forms';*/
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 /* register = new FormGroup({
    name: new FormControl('',Validators.required),
    first_surname: new FormControl('', Validators.required),
    second_surname: new FormControl('', Validators.required),
    telephone: new FormControl(''),
    role: new FormControl('', Validators.required),
    registration_tag: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })*/

  constructor( private api:AuthService) { }

  ngOnInit(): void {
  
  }
/*
  onRegister(form:RegistrarModel){
    this.api.Register(form).subscribe(data => {
      console.log(data);
    })
  }*/


  

}
