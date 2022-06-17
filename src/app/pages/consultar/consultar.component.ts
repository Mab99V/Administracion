import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  cita_data : any;
  constructor(private router:Router, private api: AuthService) { }

  ngOnInit(): void {
    this.api.getListaC().subscribe(res => {
      if(res){
        this.cita_data = res;  
      }
    })
  }

}
