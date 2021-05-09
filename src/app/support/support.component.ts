import { Component, OnInit } from '@angular/core';
import { sponsorLinks, sponsorsList } from 'src/assets/data/Sponsors';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css'],
})
export class SupportComponent implements OnInit {
  public donate = sponsorLinks;
  public supporters = sponsorsList;

  constructor() {}

  ngOnInit(): void {}

  navigate(target: string) {
    window.open(target, '_blank');
  }
}
