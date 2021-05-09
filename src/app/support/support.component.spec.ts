import { ComponentFixture, TestBed } from '@angular/core/testing';
import { sponsorLinks, sponsorsList } from 'src/assets/data/Sponsors';

import { SupportComponent } from './support.component';

describe('SupportComponent', () => {
  let component: SupportComponent;
  let fixture: ComponentFixture<SupportComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupportComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(SupportComponent);
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
    expect(component.donate).toBeDefined();
    expect(component.donate).toBe(sponsorLinks);
    expect(component.supporters).toBeDefined();
    expect(component.supporters).toBe(sponsorsList);
  });

  sponsorLinks.forEach((button, index) => {
    it(`should render the ${button.text} button correctly`, () => {
      const icon = compiled.querySelectorAll('i')[index];
      const parsedIcon = icon.className.split(' ').reverse().join(' ');
      const renderedBtn = compiled.querySelectorAll('.support-button')[index];
      expect(renderedBtn.innerText.trim()).toBe(button.text);
      expect(parsedIcon).toBe(button.icon);
    });
  });

  sponsorsList.forEach((sponsor, index) => {
    it(`should render ${sponsor.name} correctly`, () => {
      const renderedName = compiled.querySelectorAll('.name')[index];
      expect(renderedName.innerText.trim()).toBe(sponsor.name);
      const renderedDate = compiled.querySelectorAll('.since')[index];
      expect(renderedDate.innerText.trim()).toBe(
        `supporting since ${sponsor.date}`
      );
    });
  });
});
