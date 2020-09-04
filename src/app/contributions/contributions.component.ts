import { Component, OnInit } from '@angular/core';
import { ContribInt, Contributions } from '../../assets/data/Contributions';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.css'],
})
export class ContributionsComponent implements OnInit {
  contribList = [];
  constructor() {}

  ngOnInit(): void {
    this.contribList = Contributions;
  }
}
