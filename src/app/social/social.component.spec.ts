import { ComponentFixture, TestBed } from '@angular/core/testing';
import { social } from 'src/assets/data/Social';

import { SocialComponent } from './social.component';

describe('SocialComponent', () => {
  let component: SocialComponent;
  let fixture: ComponentFixture<SocialComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(SocialComponent);
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
    expect(component.socials).toBeDefined();
    expect(component.socials).toBe(social);
  });

  it('should render the correct title', () => {
    const title = compiled.querySelector('h1');
    expect(title).toBeTruthy();
    expect(title.innerText.trim()).toBe('My Socials');
  });

  social.forEach((item, index) => {
    it(`should render the ${item.site} data correctly`, () => {
      const icon = compiled.querySelectorAll('i')[index];
      const parsedIcon = icon.className.split(' ').reverse().join(' ');
      const description = compiled.querySelectorAll('.social-desc')[index];
      expect(parsedIcon).toBe(item.icon);
      expect(description.innerText.trim()).toBe(item.description);
    });
  });
});
