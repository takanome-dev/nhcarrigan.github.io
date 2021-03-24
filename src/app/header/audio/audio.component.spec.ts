import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioComponent } from './audio.component';
import * as Tone from 'tone';

fdescribe('AudioComponent', () => {
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

  it('should have the correct properties', () => {
    expect(component.tone).toBeDefined('missing tone property');
    expect(component.icon).toBeDefined('missing icon property');
  });

  it('should display a button with the play icon', () => {
    const button = compiled.querySelector('button').textContent;
    expect(button.trim()).toEqual('Click me! ▶');
  });

  it('should not be playing audio on load', () => {
    expect(component.tone.state).toEqual('stopped');
  });

  it('should play audio when button is clicked', async () => {
    await Tone.loaded();
    component.buttonPress();
    expect(component.tone.state).toBe('started');
    fixture.detectChanges();
    const button = compiled.querySelector('button').textContent;
    expect(button.trim()).toEqual('Click me! ■');
  });

  it('should pause audio if button is clicked while playing', async () => {
    await Tone.loaded();
    component.buttonPress();
    expect(component.icon).toBe('■');
    expect(component.tone.state).toBe('started');
    component.buttonPress();
    expect(component.icon).toBe('▶');
    expect(component.tone.state).toBe('stopped');
  });
});
