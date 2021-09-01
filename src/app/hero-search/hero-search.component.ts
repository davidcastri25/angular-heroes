/* Angular Imports */
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

/* App Imports */
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

/* Decorator */
@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})

/* Class */
export class HeroSearchComponent implements OnInit {

  /* Properties */
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  /* Constructor */
  constructor(private heroService: HeroService) { }

  /* Lifecycle Hooks */
  ngOnInit(): void {
    //Remember that the component class does not subscribe to the heroes$ observable. That's the job of the AsyncPipe in the template.
    this.heroes$ = this.searchTerms.pipe(
      //wait 300ms after each keystroke before considering the term
      debounceTime(300),
      //ignore new term if same as previous term
      distinctUntilChanged(),
      //switch to new search observable each time the term changes. switchMap() preserves the original request order while returning only the observable from the most recent HTTP method call. Results from prior calls are canceled and discarded.
      switchMap((term: string) =>
        this.heroService.searchHeroes(term)),
    );
  }

  /* Methods */
  //Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

}
