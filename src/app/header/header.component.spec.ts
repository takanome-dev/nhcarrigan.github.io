import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';

const navLinks = [
  'Home',
  'Projects',
  'Certifications',
  'Connect',
  'Contact',
  'Chat',
  ' nhcarrigan ',
  'Art by Moonlight',
];

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let compiled: any;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, ToggleButtonComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy('header component does not build');
  });

  it('should display toggle button', () => {
    expect(compiled.querySelector('app-toggle-button')).toBeTruthy(
      'does not render toggle button'
    );
  });

  it('should render the title', () => {
    expect(compiled.querySelector('h1').textContent).toBe(
      'Nicholas Carrigan',
      'does not render title'
    );
  });

  it('should render profile image', () => {
    expect(compiled.querySelector('img')).toBeTruthy('does not render image');
    expect(compiled.querySelector('img').getAttribute('src')).toBe(
      '../../assets/img/profile.png',
      'does not render correct image'
    );
  });

  it('should render status text', () => {
    expect(compiled.querySelectorAll('p')[1].textContent).toBe(
      `Drinkin' coffee, boppin' tunes, bangin' code.`
    );
  });

  it('should render all nav links', () => {
    const links = Array.from(compiled.querySelectorAll('a')).map(
      (el: any) => el.textContent
    );
    navLinks.forEach((navLink) => {
      expect(links).toContain(navLink, `missing ${navLink} link`);
    });
  });
});
