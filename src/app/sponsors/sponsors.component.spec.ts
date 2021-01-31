import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { sponsorsList } from 'src/assets/data/Sponsors';

import { SponsorsComponent } from './sponsors.component';

describe('SponsorsComponent', () => {
  let component: SponsorsComponent;
  let fixture: ComponentFixture<SponsorsComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SponsorsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy('sponsors component does not build');
  });

  it('should have the correct properties', () => {
    expect(component.bronze).toBeTruthy('missing bronze property');
    expect(component.bronze.length).toEqual(
      sponsorsList.bronze.length,
      'incorrect bronze value'
    );
    expect(component.silver).toBeTruthy('missing silver property');
    expect(component.silver.length).toEqual(
      sponsorsList.silver.length,
      'incorrect silver value'
    );
    expect(component.gold).toBeTruthy('missing gold property');
    expect(component.gold.length).toEqual(
      sponsorsList.gold.length,
      'incorrect gold value'
    );
    expect(component.platinum).toBeTruthy('missing platinum property');
    expect(component.platinum.length).toEqual(
      sponsorsList.platinum.length,
      'incorrect platinum value'
    );
  });

  it('should render the title', () => {
    expect(compiled.querySelector('h1').textContent).toBe('My Sponsors!');
  });

  it('should render a sponsor correctly', () => {
    const expected = sponsorsList.platinum[0];
    const rendered = compiled.querySelector('.platinum').querySelector('a');
    expect(rendered.getAttribute('href')).toBe(
      expected.link,
      'does not render link'
    );
    expect(rendered.textContent).toBe(
      ` ${expected.name} - ${expected.date} `,
      'does not render name and date'
    );
  });

  it('should render all sponsors', () => {
    const { platinum, gold, silver, bronze } = sponsorsList;
    expect(compiled.querySelectorAll('.platinum').length).toEqual(
      platinum.length,
      'does not render all platinum'
    );
    expect(compiled.querySelectorAll('.gold').length).toEqual(
      gold.length,
      'does not render all gold sponsors'
    );
    expect(compiled.querySelectorAll('.silver').length).toEqual(
      silver.length,
      'does not render all silver sponsors'
    );
    expect(compiled.querySelectorAll('.bronze').length).toEqual(
      bronze.length,
      'does not render all bronze sponsors'
    );
  });
});
