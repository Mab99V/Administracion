import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  admin_data : any;
  search_admin_by_id: number  ;

  constructor( private api:AuthService, private router:Router) { }

  ngOnInit(): void {

    this.api.getLista().subscribe(res => {
      if(res){
        this.admin_data = res;  
      }
    })
  }

  Logueado(): boolean{
    return  this.api.Autenti();
  }

  borrar_admin(id){
    this.api.delete_admin(id);
  }

  actualizar_admin(id){
    console.log(id)
  }
  
  
}
