import { Component, OnInit } from '@angular/core';
import { Featured, FeaturedInt } from '../../assets/data/Featured';
import { Intro } from '../../assets/data/Intro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  featured: FeaturedInt[] = [];
  intro = {};
  constructor() {}

  ngOnInit(): void {
    this.featured = Featured;
    this.intro = Intro;
  }
}
