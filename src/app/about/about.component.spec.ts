import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AboutComponent);
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

  it('should render the content', () => {
    expect(compiled.querySelector('.content')).toBeTruthy();
  });

  it('should have a link to freeCodeCamp', () => {
    const fcc = compiled.querySelectorAll('a')[0];
    expect(fcc.innerText.trim()).toBe('freeCodeCamp');
    expect(fcc.getAttribute('href')).toBe('https://www.freecodecamp.org');
  });

  it('should have a link to Becca', () => {
    const becca = compiled.querySelectorAll('a')[1];
    expect(becca.innerText.trim()).toBe('Becca Lyria');
    expect(becca.getAttribute('href')).toBe('https://www.beccalyria.com');
  });
});
