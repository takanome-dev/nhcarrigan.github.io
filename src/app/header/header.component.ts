import { Component, OnInit } from '@angular/core';
import { ToggleSideNavService } from '../toggle-side-nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public toggleService: ToggleSideNavService) { }

  ngOnInit(): void {
  }
}
