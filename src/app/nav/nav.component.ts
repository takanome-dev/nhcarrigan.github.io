import { Component, OnInit } from '@angular/core';
import { links } from 'src/assets/data/Links';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public links = links;

  constructor() { }

  ngOnInit(): void {
  }

}
