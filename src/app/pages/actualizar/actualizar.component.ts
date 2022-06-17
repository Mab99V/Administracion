import { RegistrarModel } from 'src/app/models/';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  editar: RegistrarModel;
  constructor() { }

  ngOnInit(): void {
    this.editar = new RegistrarModel();
  }


  Actu(){
    
  }
}
