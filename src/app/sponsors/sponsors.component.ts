import { Component, OnInit } from '@angular/core';
import { SponsorInt, sponsorsList } from '../../assets/data/Sponsors';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css'],
})
export class SponsorsComponent implements OnInit {
  platinum: SponsorInt[] = [];
  gold: SponsorInt[] = [];
  silver: SponsorInt[] = [];
  bronze: SponsorInt[] = [];

  constructor() {}

  ngOnInit(): void {
    this.platinum = sponsorsList.platinum;
    this.gold = sponsorsList.gold;
    this.silver = sponsorsList.silver;
    this.bronze = sponsorsList.bronze;
  }
}
