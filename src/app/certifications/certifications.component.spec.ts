import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { fCC, google } from 'src/assets/data/Certifications';

import { CertificationsComponent } from './certifications.component';

describe('CertificationsComponent', () => {
  let component: CertificationsComponent;
  let fixture: ComponentFixture<CertificationsComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CertificationsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy('certifications component does not build');
  });

  it('should have the correct properties', () => {
    expect(component.fccCerts).toBeTruthy('missing fccCerts property');
    expect(component.fccCerts.length).toEqual(
      fCC.length,
      'incorrect fccCerts value'
    );
    expect(component.googCerts).toBeTruthy('missing googCerts property');
    expect(component.googCerts.length).toEqual(
      google.length,
      'incorrect googCerts value'
    );
  });

  it('should render the title', () => {
    expect(compiled.querySelector('h1').textContent).toBe('Certifications');
  });

  it('should render a certificate properly', () => {
    const cert = fCC[0];
    const rendered = compiled.querySelector('.fCC-cert');
    const link = rendered.querySelector('a').getAttribute('href');
    expect(link).toBe(cert.url, 'does not render cert link correctly');
    expect(rendered.textContent).toBe(
      `${cert.name} - Earned ${cert.date}`,
      'does not render cert name/date correctly'
    );
  });

  it('should render all certificates', () => {
    const fccRendered = compiled.querySelectorAll('.fCC-cert');
    const googRendered = compiled.querySelectorAll('.goog-cert');
    expect(fccRendered.length).toEqual(
      fCC.length,
      'does not render all fCC certs'
    );
    expect(googRendered.length).toEqual(
      google.length,
      'does not render all Google certs'
    );
  });
});
