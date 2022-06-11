import { Injectable } from '@angular/core';

import { ResponseI } from './../models';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin_Model_Email, Admin_Model_Registration_Tag } from '../models/login.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string = "http://34.94.79.113:9090/api/mode/admin";
  
  constructor(private http:HttpClient) {}


  Login_By_Email(form:Admin_Model_Email):Observable<ResponseI>{
    let direccion = this.url + "/login/token";
    console.log("SE RECIBIÓ", form);
    return this.http.post<ResponseI>(direccion,form);

  }

  Login_By_Registration_Tag(form:Admin_Model_Registration_Tag):Observable<ResponseI>{
    let direccion = this.url + "/login/token";
    console.log("SE RECIBIÓ", form);
    return this.http.post<ResponseI>(direccion,form);

  }

}
