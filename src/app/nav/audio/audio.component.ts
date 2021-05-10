import { Component, OnInit } from '@angular/core';
import { Player, context, start } from 'tone';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css'],
})
export class AudioComponent implements OnInit {
  public song = new Player(
    'https://cdn.nhcarrigan.com/content/audio/fairy-fountain.mp3'
  ).toDestination();

  constructor() {}

  ngOnInit(): void {
    this.song.loop = true;
  }

  click() {
    if (context.state !== 'running') {
      start();
    }
    if (this.song.state === 'stopped') {
      this.song.start();
      return;
    }
    this.song.stop();
  }
}
