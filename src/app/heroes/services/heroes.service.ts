import { environment } from './../../../environments/environment';
import { Heroe } from './../interfaces/heroes.interface';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroe!:Heroe;
  heroes:Heroe[]=[];
  constructor(private http:HttpClient) { }
base_Url:string = environment.baseUrl;
  getHeroes():Observable<Heroe[]>{

   return  this.http.get<Heroe[]>(`${this.base_Url}/heroes`);

  }

  getHeroeById(id:string):Observable<Heroe>{
    return  this.http.get<Heroe>(`${this.base_Url}/heroes/${id}`);
  }

buscarSugerencia(termino:string):Observable<Heroe[]>{
  return  this.http.get<Heroe[]>(`${this.base_Url}/heroes/?q=${termino}&limit=6`);

}


guardarHeroe(heroe:Heroe):Observable<Heroe>{
  return this.http.post<Heroe>(`${this.base_Url}/heroes`, heroe);
}


actualizarHeroe(heroe:Heroe):Observable<Heroe>{
  return this.http.put<Heroe>(`${this.base_Url}/heroes/${heroe.id}`, heroe);
}


eliminarHeroe(id:string):Observable<any>{
  return this.http.delete<any>(`${this.base_Url}/heroes/${id}`);
}

}
