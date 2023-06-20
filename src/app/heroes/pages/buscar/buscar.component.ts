import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  heroes:Heroe[]=[];
  heroeSeleccionado!:Heroe | undefined;
  termino:string='';
  constructor(private heroeService:HeroesService) { }

  ngOnInit(): void {
  }


  buscando(){


      this.heroeService.buscarSugerencia(this.termino.trim()).subscribe(
        (heroes)=>{
          this.heroes = heroes;
        });
  }


  opcionSeleccionada(event:MatAutocompleteSelectedEvent){

    if(!event.option.value){
      this.heroeSeleccionado = undefined;
      return;
    }
const heroe:Heroe = event.option.value;


this.termino = heroe.superhero;
this.heroeService.getHeroeById(heroe.id!).subscribe(
  (heroe)=>{
    this.heroeSeleccionado = heroe;
  }
);
  }



}
