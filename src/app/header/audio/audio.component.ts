import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css'],
})
export class AudioComponent implements OnInit {
  public icon = '▶';

  public tone = new Tone.Player(
    'https://cdn.nhcarrigan.com/content/audio/fairy-fountain.mp3'
  ).toDestination();

  constructor() {}

  ngOnInit(): void {
    this.tone.loop = true;
  }

  public buttonPress(): void {
    if (Tone.context.state !== 'running') {
      Tone.start();
    }
    if (this.tone.state === 'stopped') {
      this.tone.start();
      this.icon = '■';
      return;
    }
    this.tone.stop();
    this.icon = '▶';
  }
}
