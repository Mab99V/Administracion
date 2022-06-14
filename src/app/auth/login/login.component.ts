import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup,MaxValidator,Validators } from '@angular/forms';
import { LoginEmail} from 'src/app/models';
import { LoginMatricula} from 'src/app/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginEmail = new FormGroup({
    email: new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)

  })
  loginMa = new FormGroup({
    registration_tag: new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)

  })

  

  constructor( private api:AuthService) { }

  ngOnInit(): void {


  }

  onLoginEma(form:LoginEmail){
   this.api.LoginEmail(form).subscribe(data => {
     console.log(data);
   })
  }

  onLoginMat(form:LoginMatricula){
    this.api.LoginMa(form).subscribe(data => {
      console.log(data);
    })
   }

}
