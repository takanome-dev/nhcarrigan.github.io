import { Component, OnInit } from '@angular/core';
import { links } from 'src/assets/data/Links';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public links = links;
  public years = Math.floor(
    (Date.now() - new Date('April 15, 2020').getTime()) / 31557600000
  );
  public yearString = `${this.years} ${this.years === 1 ? 'year' : 'years'}`;
  constructor() {}

  ngOnInit(): void {}
}
