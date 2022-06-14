import { Injectable } from '@angular/core';

import { ResponseI } from './../models';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginEmail } from '../models';
import { LoginMatricula} from '../models';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string = "http://34.94.79.113:9090/api/mode/admin";
  
  constructor(private http:HttpClient) {}


  LoginEmail(form:LoginEmail):Observable<ResponseI>{
    let direccion = this.url + "/login/token";
    console.log("SE RECIBIÓ", form);
    return this.http.post<ResponseI>(direccion,form);

  }

  LoginMa(form:LoginMatricula):Observable<ResponseI>{
    let direccion = this.url + "/login/token";
    console.log("SE RECIBIÓ", form);
    return this.http.post<ResponseI>(direccion,form);

  }

}
