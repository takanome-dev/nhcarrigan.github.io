import { Component, OnInit } from '@angular/core';
import {CertInt, Google, Fcc} from "../../assets/data/Certifications"

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
  fccCerts: CertInt[] = []
  googCerts: CertInt[] = []
  constructor() { }

  ngOnInit(): void {
    this.fccCerts = Fcc
    this.googCerts = Google
  }

}
