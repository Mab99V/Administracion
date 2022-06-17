import { ListaC } from './../models/ListaC';
import { Lista } from './../models';
import { Injectable } from '@angular/core';

import { RegistrarModel } from './../models';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { LoginEmail } from '../models';
import { LoginMatricula} from '../models';

import Swal from "sweetalert2";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

<<<<<<< HEAD
  url:string = "http://34.94.79.113:9090/api/mode/admin";
=======
   url:string = "http://34.94.79.113:9090/api";

>>>>>>> 7b60135eb5bd9105c627ede7c2ada20375db7464
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
      `${this.url}/mode/admin/login/token`,
      authData
    ).pipe(
      map( resp =>{
        this.guardarToken(resp['accessToken']);
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
      `${this.url}/mode/admin/login/token`,
      authData
    ).pipe(
      map( resp =>{
        this.guardarToken(resp['accessToken']);
        return resp;
      })
    );
  }


  

  Register(register:RegistrarModel){
    const authData = {
      name: register.name,
      first_surname: register.first_surname,
      second_surname: register.second_surname,
      telephone: register.telephone,
      role: register.role,
      registration_tag: register.registration_tag,
      email: register.email,
      password: register.password
      };
      return this.http.post (
        `${this.url}/mode/admin `,
        authData
      ).pipe(
        map(resp =>{
          this.guardarToken(resp['accessToken']);
          return resp;
        })
      );
  }

  getLista():Observable<Lista[]>{
    console.log(this.http.get<Lista[]>(this.url+"/mode/admin"))
    return this.http.get<Lista[]>(this.url+"/mode/admin");
  }

  getListaC():Observable<ListaC[]>{
    console.log(this.http.get<ListaC[]>(this.url+ "/appointments/status_true"))
    return this.http.get<ListaC[]>(this.url +"/appointments/status_true")
  }

  delete_admin(id) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "¿Estas seguro que quieres eliminar este administrador?",
        text: "No podrás deshacer los cambios.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar",
        cancelButtonText: "No, cancelar",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {

          this.http.delete(this.url+"/mode/admin"+id).subscribe(
             data  => {
              console.log(data);
              if (data) {
                swalWithBootstrapButtons
                  .fire(
                    "Eliminado",
                    "Administrador eliminado correctamente",
                    "success",
                  )
                  .then(() => {
                    window.location.reload();
                    
                  });
              }
            },
            (error) => {
              console.error("Error al eliminar admin", error);
            },
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelado",
            "Operración cancelada",
            "error",
          );
        }
      });
  }

<<<<<<< HEAD
  buscar_admin(id){

    console.log(this.http.get(`${this.url}/${id}`))
    return this.http.get(`${this.url}/${id}`);
  }
=======


  update(admin_id: Lista): Observable<Lista>{
    return this.http.put<Lista>(this.url, admin_id);
  }

>>>>>>> 7b60135eb5bd9105c627ede7c2ada20375db7464
}
