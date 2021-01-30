import { Component, OnInit } from '@angular/core';
import { intro } from '../../assets/data/Intro';
import { technologies, icons, IconInt } from '../../assets/data/Technologies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  intro: string[] = [];
  techs: string[] = [];
  icons: IconInt[] = [];
  constructor() {}

  ngOnInit(): void {
    this.intro = intro;
    this.techs = technologies;
    this.icons = icons;
  }
}
