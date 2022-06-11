import { Injectable } from '@angular/core';

import { AdminModel } from './../models';
import { ResponseI } from './../models';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string = "http://34.94.79.113:9090/api/mode/admin";
  
  constructor(private http:HttpClient) {}


  LoginByEmail(form:AdminModel):Observable<ResponseI>{
    let direccion = this.url + "/login/token";
    return this.http.post<ResponseI>(direccion,form);

  }

}
