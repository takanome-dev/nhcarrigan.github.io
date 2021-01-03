import { Component, OnInit } from '@angular/core';
import { SponsorsList } from "../../assets/data/Sponsors";

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {
  platinum = [];
  gold = [];
  silver = [];
  bronze = [];

  constructor() { }

  ngOnInit(): void {
    this.platinum = SponsorsList.platinum
    this.gold = SponsorsList.gold;
    this.silver = SponsorsList.silver;
    this.bronze = SponsorsList.bronze;
  }

}
