import { Component, OnInit } from '@angular/core';
import { social, SocialInt } from '../../assets/data/Social';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css'],
})
export class ConnectComponent implements OnInit {
  social: SocialInt[] = [];
  constructor() {}

  ngOnInit(): void {
    this.social = social;
  }
}
