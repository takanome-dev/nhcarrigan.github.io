import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterComponent } from './character.component';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(CharacterComponent);
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

  it('should have the expected properties', () => {
    expect(component.character).toBeDefined();
    expect(component.move).toBeTruthy();
  });

  it('should render the character', () => {
    const char = compiled.querySelector('img');
    expect(char).toBeTruthy();
    expect(char.src).toMatch(/link\.gif/);
  });

  it('should move the character', () => {
    component.move(component.character);
    const start = parseInt(component.character.style.marginLeft, 10);
    component.move(component.character);
    const end = parseInt(component.character.style.marginLeft, 10);
    expect(start).toBeLessThan(end);
    const char = compiled.querySelector('img');
    expect(end).toEqual(parseInt(char.style.marginLeft, 10));
  });
});
