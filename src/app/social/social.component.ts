import { Component, OnInit } from '@angular/core';
import { social } from 'src/assets/data/Social';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
})
export class SocialComponent implements OnInit {
  public socials = social;

  constructor() {}

  ngOnInit(): void {}

  navigate(target: string) {
    window.open(target, '_blank');
  }
}
