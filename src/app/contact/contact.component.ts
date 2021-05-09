import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {
    const scriptElement = this.document.createElement('script');
    scriptElement.src = `https://assets.calendly.com/assets/external/widget.js`;
    scriptElement.async = true;
    this.document.body.appendChild(scriptElement);
  }

  ngOnInit(): void {}
}
