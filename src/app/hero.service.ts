/* Angular Imports */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

/* App Imports */
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

/* Decorator de servicios (es parte del sistema de inyección de dependencias) */
@Injectable({
  providedIn: 'root' //Provided in the root level: se crea una única instancia compartida del servicio y cualquier clase podrá usarla
})

/* Class */
export class HeroService {

  /* Constructor */
  constructor(private messageService: MessageService) { }

  /* Getters & Setters */
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES); //of(HEROES) devuelve un Observable que emite un único valor (array de objetos Hero)
    this.messageService.add('HeroService: fetched heroes'); //Enviamos un mensaje a la propiedad cache del MessageService
    return heroes;
  }
}
