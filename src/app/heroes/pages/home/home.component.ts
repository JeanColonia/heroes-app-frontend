import { Auth } from './../../../auth/interfaces/auth.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles:[
  `
  .container{
    margin:10px;
  }
  `
  ]
})
export class HomeComponent implements OnInit {

auth!:Auth;
  constructor(private _router:Router, private authService:AuthService) { }




  ngOnInit(): void {

    this.authService.login().subscribe(
      (auth)=>{
        this.auth!  = auth
      }
    );
  }





  logout(){


    if(localStorage.getItem('id')){
      localStorage.removeItem('id');
      this._router.navigate(['./auth']);
    }
  }


}
