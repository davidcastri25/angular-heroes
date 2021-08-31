/* Angular Imports */
import { Component, OnInit } from '@angular/core';

/* App Imports */
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

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
  heroes: Hero[] = []; //heroes será un array de objetos Hero, que nos lo dará el servicio HeroService

  /* Constructor */
  constructor(private heroService: HeroService) { }

  /* Lifecycle Hooks */
  ngOnInit(): void {
    this.getHeroes(); //Llamamos al getter para, una vez inicializado el componente, obtener los datos (héroes)
  }

  /* Getters & Setters */
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  /* Methods */
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
