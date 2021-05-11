import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourOhFourComponent } from './four-oh-four.component';

describe('FourOhFourComponent', () => {
  let component: FourOhFourComponent;
  let fixture: ComponentFixture<FourOhFourComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FourOhFourComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(FourOhFourComponent);
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

  it('should have the expected links', () => {
    const [github, status, chat] = compiled.querySelectorAll('a');
    expect(github.innerText.trim()).toBe('GitHub');
    expect(github.getAttribute('href')).toBe('https://github.com/nhcarrigan');
    expect(status.innerText.trim()).toBe('Status Page');
    expect(status.getAttribute('href')).toBe('http://status.nhcarrigan.com');
    expect(chat.innerText.trim()).toBe('Chat Server');
    expect(chat.getAttribute('href')).toBe('http://chat.nhcarrigan.com');
  });
});
