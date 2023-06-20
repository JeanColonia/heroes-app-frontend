import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private _authService:AuthService) { }

  ngOnInit(): void {
  }


  login(){

    this._authService.login().subscribe(
      (auth)=>{
        if(auth.id){
          this.router.navigate(['./heroes/listado']);
        }
      }
    );
  }

}
