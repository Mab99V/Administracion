import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Admin_Model_Email} from 'src/app/models';
import { Admin_Model_Registration_Tag } from 'src/app/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new FormGroup({
    email: new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)

  })
  login_with_registration_tag = new FormGroup({
    registration_tag: new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)

  })

  

  constructor( private api:AuthService) { }

  ngOnInit(): void {


  }

  onLogin_with_email(form:Admin_Model_Email){
   this.api.Login_By_Email(form).subscribe(data => {
     console.log(data);
   })
  }

  onLogin_with_registration_tag(form:Admin_Model_Registration_Tag){
    this.api.Login_By_Registration_Tag(form).subscribe(data => {
      console.log(data);
    })
   }

}
