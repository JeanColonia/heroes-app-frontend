import { Heroe } from './../../interfaces/heroes.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private heroeService:HeroesService, private router:Router) { }
heroe!:Heroe;
  ngOnInit(): void {

   this.activatedRoute.params
   .pipe(
    switchMap(({id})=> this.heroeService.getHeroeById(id)),
    tap(
      console.log
    )

   )
   .subscribe(
    heroeRes=>{
      console.log(heroeRes);
      this.heroe = heroeRes;
    }
   );




  }



  regresar(){
    this.router.navigate(['/heroes/listado']);
  }

}
