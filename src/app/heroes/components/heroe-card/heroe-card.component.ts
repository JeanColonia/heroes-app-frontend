import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent implements OnInit {


  @Input() heroe!:Heroe;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
