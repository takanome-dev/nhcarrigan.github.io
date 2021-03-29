import { Component, OnInit } from '@angular/core';
import { ToggleSideNavService } from '../toggle-side-nav.service';
import { version } from '../../../package.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public version: string;
  constructor(public toggleService: ToggleSideNavService) {
    this.version = version;
  }

  ngOnInit(): void {}
}
