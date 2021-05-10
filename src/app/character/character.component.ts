import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  public character: any;

  constructor() {}

  ngOnInit(): void {
    this.character = document.querySelector('#char');
    setInterval(() => this.move(this.character), 100);
  }

  move(el: HTMLElement) {
    if (!el.style.marginLeft) {
      el.style.marginLeft = '1px';
    } else if (parseInt(el.style.marginLeft, 10) >= window.innerWidth) {
      el.style.marginLeft = '1px';
    } else {
      el.style.marginLeft = parseInt(el.style.marginLeft, 10) + 15 + 'px';
    }
  }
}
