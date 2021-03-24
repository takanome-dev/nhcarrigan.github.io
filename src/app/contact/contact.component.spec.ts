import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let compiled: any;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy('contact component does not build');
  });

  it('should render the title', () => {
    expect(compiled.querySelector('h1').textContent).toBe(
      'Contact me!',
      'does not render title'
    );
  });

  it('should have correct form', () => {
    const form = compiled.querySelector('form');
    expect(form).toBeTruthy('does not render form');
    expect(form.getAttribute('action')).toBe(
      'https://formspree.io/f/xvowlnwe',
      'does not have correct action'
    );
    expect(form.getAttribute('method')).toBe(
      'POST',
      'does not have correct method'
    );
  });
});
