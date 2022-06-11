import { Component, OnInit } from '@angular/core';

import { AdminModel } from './../../models';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new FormGroup({
    email: new FormControl('',Validators.required),
    registration_tag: new FormControl(''),
    password:new FormControl('',Validators.required)

  })

  constructor( private api:AuthService) { }

  ngOnInit(): void {


  }

  onLogin(form:AdminModel){
   this.api.LoginByEmail(form).subscribe(data => {
     console.log(data);
   })
  }

}
