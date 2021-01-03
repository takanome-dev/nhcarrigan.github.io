import { Component, OnInit } from '@angular/core';

import {ToggleSideNavService} from "../../toggle-side-nav.service"

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent implements OnInit {

  constructor(public toggleService: ToggleSideNavService) { }

  ngOnInit(): void {
  }

}
