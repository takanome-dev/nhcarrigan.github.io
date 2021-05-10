import { Component, OnInit } from '@angular/core';
import { links } from 'src/assets/data/Links';
import { version } from '../../../package.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public links = links;
  public version = version;
  constructor() {}

  ngOnInit(): void {}
}
