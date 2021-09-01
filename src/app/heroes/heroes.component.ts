/* Angular Imports */
import { Component, OnInit } from '@angular/core';

/* App Imports */
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

/* Decorator que especifica metada para el componente */
@Component({
  selector: 'app-heroes', //El selector del componente
  templateUrl: './heroes.component.html', //Path del template
  styleUrls: ['./heroes.component.css'] //Path de los estilos privados del componente (en array)
})

/* Class */
export class HeroesComponent implements OnInit {

  /* Properties */
  heroes: Hero[] = []; //heroes será un array de objetos Hero, que nos lo dará el servicio HeroService

  /* Constructor */
  constructor(private heroService: HeroService) { }

  /* Lifecycle Hooks */
  ngOnInit(): void {
    this.getHeroes(); //Llamamos al getter para, una vez inicializado el componente, obtener los datos (héroes)
  }

  /* Methods */
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(
        heroes => this.heroes = heroes
      ); //Esperamos al Observable a que emita el array de Heroes y subscribe() pasa el array emitido al callback, donde entonces lo asignamos a la propiedad heroes de la clase
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
