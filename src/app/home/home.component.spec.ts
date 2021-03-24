import { ComponentFixture, TestBed } from '@angular/core/testing';
import { intro } from 'src/assets/data/Intro';
import { icons, technologies } from 'src/assets/data/Technologies';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let compiled: any;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy('home component does not build');
  });

  it('should have the correct properties', () => {
    expect(component.icons).toBeTruthy('missing icons property');
    expect(component.icons.length).toEqual(
      icons.length,
      'incorrect icons value'
    );
    expect(component.intro).toBeTruthy('missing intro property');
    expect(component.intro.length).toEqual(
      intro.length,
      'incorrect intro value'
    );
    expect(component.techs).toBeTruthy('missing techs property');
    expect(component.techs.length).toEqual(
      technologies.length,
      'incorrect techs value'
    );
  });

  it('should render the title', () => {
    expect(compiled.querySelector('h1').textContent).toBe(
      'Nicholas Carrigan',
      'does not render title'
    );
  });

  it('should render the intro correctly', () => {
    const introRendered = Array.from(compiled.querySelectorAll('.intro')).map(
      (el: any) => el.textContent
    );
    intro.forEach((line, index) => {
      expect(introRendered).toContain(line, `missing intro line ${index}`);
    });
  });

  it('should render the icons correctly', () => {
    const iconsRendered = Array.from(
      compiled.querySelectorAll('i')
    ).map((el: any) => el.getAttribute('title'));
    icons.forEach((el) => {
      expect(iconsRendered).toContain(el.name, `missing ${el.name} icon`);
    });
  });

  it('should render the technologies correctly', () => {
    const techList = Array.from(compiled.querySelectorAll('.tech-item')).map(
      (el: any) => el.textContent
    );
    technologies.forEach((tech) => {
      expect(techList).toContain(tech, `missing ${tech} technology`);
    });
  });
});
