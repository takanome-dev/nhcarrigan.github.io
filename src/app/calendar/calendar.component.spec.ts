import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;
  let compiled: any;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CalendarComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy('calendar component does not build');
  });

  it('should render the title', () => {
    expect(compiled.querySelector('h1').textContent).toBe(
      'Calendar',
      'does not render the title'
    );
  });

  it('should render the calendar embed', () => {
    expect(compiled.querySelector('.calendly-inline-widget')).toBeTruthy(
      'does not render the calendar'
    );
  });
});
