import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  baseUrl:string = environment.baseUrl;
  private _auth:Auth | undefined;

  get auth(){

    return {...this._auth}
  }

  constructor(private http:HttpClient) { }

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
    .pipe(
      tap( (auth) => {
        this._auth = auth
        localStorage.setItem('id', auth.id)
      }
      )
    );
  }



  verificarAutenticacion():Observable<boolean>{
    if(!localStorage.getItem('id')){

      return of(false);
    }

    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
    .pipe(
      map(
        auth =>{
          return true;
        }
      )
    )
  }




}
