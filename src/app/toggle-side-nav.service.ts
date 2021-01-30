import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleSideNavService {
  hideSideNav = false;

  constructor() {}

  toggleSideNav(): void {
    this.hideSideNav = !this.hideSideNav;
  }
}
