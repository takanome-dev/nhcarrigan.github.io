import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {
    const scriptElement = this.document.createElement('script');
    scriptElement.src = `https://assets.calendly.com/assets/external/widget.js`;
    scriptElement.async = true;
    this.document.body.appendChild(scriptElement);
  }

  ngOnInit(): void {}
}
