/* Angular Imports */
import { Component, OnInit } from '@angular/core';

/* App Imports */
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

/* Decorator que especifica metada para el componente */
@Component({
  selector: 'app-heroes', //El selector del componente
  templateUrl: './heroes.component.html', //Path del template
  styleUrls: ['./heroes.component.css'] //Path de los estilos privados del componente (en array)
})

/* Class */
export class HeroesComponent implements OnInit {

  /* Properties */
  selectedHero?: Hero;
  heroes = HEROES; //Guardamos el array de héroes (simulado que vienen desde servidor)

  /* Constructor */
  constructor() { }

  /* Lifecycle Hooks */
  ngOnInit(): void {
  }

  /* Methods */
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
