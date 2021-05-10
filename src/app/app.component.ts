import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { particles } from 'src/assets/data/Particles';
import { Container, Main } from 'tsparticles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Nicholas Carrigan';
  id = 'particles';
  particlesOptions = particles;
  constructor(public router: Router) {}

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  particlesInit(main: Main): void {
    console.log(main);
  }
}
