/* Angular Imports */
import { Injectable } from '@angular/core';

/* App Imports */
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

/* Decorator de servicios (es parte del sistema de inyección de dependencias) */
@Injectable({
  providedIn: 'root' //Provided in the root level: se crea una única instancia compartida del servicio y cualquier clase podrá usarla
})

/* Class */
export class HeroService {

  /* Constructor */
  constructor() { }

  /* Getters & Setters */
  getHeroes(): Hero[] {
    return HEROES;
  }
}
