import { ComponentFixture, TestBed } from '@angular/core/testing';
import { loaded } from 'tone';
import { AudioComponent } from './audio.component';

describe('AudioComponent', () => {
  let component: AudioComponent;
  let fixture: ComponentFixture<AudioComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AudioComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AudioComponent);
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
    expect(component.song).toBeTruthy();
  });

  it('should display the image', () => {
    const img = compiled.querySelector('img');
    expect(img).toBeTruthy();
    expect(img.getAttribute('src')).toMatch(/ocarina\.png/);
  });

  it('should not play on load', () => {
    expect(component.song.state).toBe('stopped');
  });

  it('should play audio when image is clicked', async () => {
    await loaded();
    component.click();
    expect(component.song.state).toBe('started');
  });

  it('should pause when button is clicked during play', async () => {
    await loaded();
    component.click();
    expect(component.song.state).toBe('started');
    component.click();
    expect(component.song.state).toBe('stopped');
  });
});
