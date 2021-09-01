/* Angular Imports */
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

/* App Imports */
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

/* Decorator */
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

/* Class */
export class HeroDetailComponent implements OnInit {

  /* Properties */
  @Input() hero?: Hero;

  /* Constructor */
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  /* Lifecycle Hooks */
  ngOnInit(): void {
    this.getHero();
  }

  /* Methods */
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  /* 
  The route.snapshot is a static image of the route information shortly after the component was created.

  The paramMap is a dictionary of route parameter values extracted from the URL. The "id" key returns the id of the hero to fetch.

  Route parameters are always strings. The JavaScript Number function converts the string to a number, which is what a hero id should be.
  */

  goBack(): void {
    this.location.back();
  }
}
