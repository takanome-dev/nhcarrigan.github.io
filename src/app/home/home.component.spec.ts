import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { links } from 'src/assets/data/Links';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render', () => {
    expect(compiled).toBeTruthy();
  });

  it('should have the correct properties', () => {
    expect(component.links).toBeDefined();
    expect(component.links).toBe(links);
  });

  it('should display the correct title', () => {
    const title = compiled.querySelector('h1');
    expect(title.innerText.trim()).toBe('Nicholas Carrigan');
  });

  it('should render the profile image', () => {
    const image = compiled.querySelector('img');
    expect(image).toBeTruthy();
    expect(image.src).toMatch(/profile\.png/);
  });

  links.forEach((link, index) => {
    it(`should render the ${link.homeText} link correctly`, () => {
      const rendered = compiled.querySelectorAll('a')[index];
      expect(rendered.innerText.trim()).toBe(link.homeText);
      expect(rendered.getAttribute('href')).toBe(link.link);
    });
  });

  it('should link to the source code', () => {
    const linklist = compiled.querySelectorAll('a');
    const target = linklist[linklist.length - 2];
    expect(target.innerText.trim()).toBe('visit the GitHub repository');
    expect(target.getAttribute('href')).toBe(
      'https://github.com/nhcarrigan/nhcarrigan.github.io'
    );
  });

  it('should credit Moonlight', () => {
    const linklist = compiled.querySelectorAll('a');
    const target = linklist[linklist.length - 1];
    expect(target.innerText.trim()).toBe('Moonlight');
    expect(target.getAttribute('href')).toBe(
      'https://www.instagram.com/moonlightkcreations/'
    );
  });
});
