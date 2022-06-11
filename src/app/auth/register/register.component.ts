import { Component, OnInit } from '@angular/core';
import { RegistrarModel } from 'src/app/models/';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrarAdmin: RegistrarModel;

  constructor( ) { }

  ngOnInit(): void {
  this.registrarAdmin= new RegistrarModel;
  this.registrarAdmin.email='mabelperezgaribay@gmail.com';
  }

  onSubmit(){
    console.log('Formulario Enviado');
    console.log(this.registrarAdmin);
  }

}
