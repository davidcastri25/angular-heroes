/* Angular Imports */
import { Component, OnInit } from '@angular/core';

/* App Imports */
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

/* Decorator */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

/* Class */
export class DashboardComponent implements OnInit {

  /* Properties */
  heroes: Hero[] = [];

  /* Constructor */
  constructor(private heroService: HeroService) { }

  /* Lifecycle Hooks */
  ngOnInit(): void {
    this.getHeroes();
  }

  /* Getters & Setters */
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5)); // Devuelve solo 4 héroes (2nd, 3rd, 4th, and 5th)
  }
}
