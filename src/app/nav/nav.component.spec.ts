import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { links } from 'src/assets/data/Links';
import { AudioComponent } from './audio/audio.component';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavComponent, AudioComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
    const title = compiled.querySelector('.title');
    expect(title.innerText.trim()).toBe('nhcarrigan');
  });

  it('should render the profile image', () => {
    const image = compiled.querySelector('img');
    expect(image).toBeTruthy();
    expect(image.src).toMatch(/profile\.png/);
  });

  links.forEach((link, index) => {
    it(`should render the ${link.navText} link correctly`, () => {
      const rendered = compiled.querySelectorAll('a')[index + 1];
      expect(rendered.innerText.trim()).toBe(link.navText);
      expect(rendered.getAttribute('href')).toBe(link.link);
    });
  });
});
