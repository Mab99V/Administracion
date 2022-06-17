import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  admin_data: Array<any> = [];
  newProductFG: FormGroup;

<<<<<<< HEAD
=======
  constructor( private api:AuthService, private router:Router) { }
>>>>>>> 7b60135eb5bd9105c627ede7c2ada20375db7464

  constructor(private api: AuthService) { }

  createForm() {
    this.newProductFG = new FormGroup({
      id_to_find: new FormControl("", [
        Validators.pattern("^[0-9]+$"),
      ]), 

    });
  }

      ngOnInit(): void {
        this.createForm();
        this.api.getLista().subscribe(res => {
          if (res) {
            this.admin_data = res;
            
          }
        })
      }

  Logueado(): boolean {
        return this.api.Autenti();
      }

  borrar_admin(id) {
        this.api.delete_admin(id);
      }

  actualizar_admin(id) {
        console.log(id)
      }

  buscar_admin() {

    if(this.newProductFG.get("id_to_find").value){
      this.api.buscar_admin(this.newProductFG.get("id_to_find").value).subscribe(res => {
        if (res) {
          this.admin_data = [];
          this.admin_data.push(res);

        }

      })
    }else{
      this.api.getLista().subscribe(res => {
        if (res) {
          this.admin_data = res; 
        }
      })
    }

       
      }
    }
  

<<<<<<< HEAD
=======
  actualizar_admin(id){
    console.log(id)
  }
  
  
}
>>>>>>> 7b60135eb5bd9105c627ede7c2ada20375db7464
