import { Component, OnInit } from '@angular/core';
import { Intro } from '../../assets/data/Intro';
import { Technologies, Icons } from '../../assets/data/Technologies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  intro = {};
  techs = [];
  icons = [];
  constructor() {}

  ngOnInit(): void {
    this.intro = Intro;
    this.techs = Technologies;
    this.icons = Icons
  }
}
