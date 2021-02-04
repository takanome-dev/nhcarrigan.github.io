import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { social } from 'src/assets/data/Social';

import { ConnectComponent } from './connect.component';

describe('ConnectComponent', () => {
  let component: ConnectComponent;
  let fixture: ComponentFixture<ConnectComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy('connect component does not render');
  });

  it('should have the correct properties', () => {
    expect(component.social).toBeTruthy('missing social property');
    expect(component.social.length).toEqual(
      social.length,
      'incorrect social value'
    );
  });

  it('should render the title', () => {
    expect(compiled.querySelector('h1').textContent).toBe(
      'Connect with Me!',
      'does not render the title'
    );
  });

  it('should render a social item correctly', () => {
    const socialItem = social[0];
    const rendered = compiled.querySelector('.social-data');
    const desc = rendered.querySelector('.description');
    const iconClass = socialItem.icon.split(' ').sort().join(' ');
    const renderedIconClass = rendered
      .querySelector('i')
      .getAttribute('class')
      .split(' ')
      .sort()
      .join(' ');
    expect(renderedIconClass).toBe(iconClass, 'does not render icon');
    expect(rendered.querySelector('.custom-btn').getAttribute('href')).toBe(
      socialItem.url,
      'does not render the link'
    );
    expect(rendered.querySelector('a').textContent).toBe(
      ' ' + socialItem.site,
      'does not render the name'
    );
    expect(desc.textContent).toBe(
      socialItem.description,
      'does not render description'
    );
  });

  it('should render all social items', () => {
    expect(compiled.querySelectorAll('.social-data').length).toEqual(
      social.length,
      'does not render all social items'
    );
  });
});
