import { Injectable } from '@angular/core';

import { RegistrarModel, ResponseI } from './../models';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { LoginEmail } from '../models';
import { LoginMatricula} from '../models';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

   url:string = "http://34.94.79.113:9090/api/mode/admin";

  tokenUser: String;
  
  constructor(private http:HttpClient) {
    this.leerToken();
  }

  httpOptions = {
    header: new HttpHeaders({
      'Content-Type': 'aplication/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  }


  LoginEmail(admin:LoginEmail){
    const authData = {
      email: admin.email,
      password: admin.password
    };
    return this.http.post(
      `${this.url}/login/token`,
      authData
    ).pipe(
      map( resp =>{
        this.guardarToken(resp['accesToken']);
        return resp;
      })
    );
  }

  private guardarToken(idToken: string){
    this.tokenUser = idToken;
    localStorage.setItem('token',idToken);
  }
  leerToken(){
    if ( localStorage.getItem('token') ) {
      this.tokenUser = localStorage.getItem('token');
    }else{
      this.tokenUser= "";
    }
  }

  Autenti(): boolean{
    this.leerToken()
    return this.tokenUser.length > 2;
  }

  LoginMa(mat:LoginMatricula){
    const authData = {
      registration_tag: mat.registration_tag,
      password: mat.password
    };
    return this.http.post(
      `${this.url}/login/token`,
      authData
    ).pipe(
      map( resp =>{
        this.guardarToken(resp['accesToken']);
        return resp;
      })
    );
  }


  

  Register(form:RegistrarModel):Observable<ResponseI>{
    let direccion = this.url + " ";
    console.log("SE CREO",form);
    return this.http.post<ResponseI>(direccion,form);
  }

}
