import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private api:AuthService) { }

  ngOnInit(): void {
  }

  Logueado(): boolean{
    return  this.api.Autenti();
  }
}
