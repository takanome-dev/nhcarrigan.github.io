import { Component, OnInit } from '@angular/core';
import { links } from 'src/assets/data/Links';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public links = links;
  constructor() {}

  ngOnInit(): void {}
}
