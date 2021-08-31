/* Angular Imports */
import { Component, Input, OnInit } from '@angular/core';

/* App Imports */
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  /* Properties */
  @Input() hero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
