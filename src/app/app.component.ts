import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleSideNavService } from './toggle-side-nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Nicholas Carrigan';
  constructor(
    public router: Router,
    public toggleService: ToggleSideNavService
  ) {}
}
