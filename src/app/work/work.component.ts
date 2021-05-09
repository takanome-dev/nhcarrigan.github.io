import { Component, OnInit } from '@angular/core';
import { fCC, google } from 'src/assets/data/Certifications';
import { experience } from 'src/assets/data/Experience';
import { ProjectInt, projects } from 'src/assets/data/Projects';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
})
export class WorkComponent implements OnInit {
  public projects = projects;
  public certs = fCC.concat(google);
  public exp = experience;
  public target: ProjectInt | undefined;
  public modal = false;

  constructor() {}

  ngOnInit(): void {}

  showModal(project: ProjectInt) {
    this.target = project;
    this.modal = true;
  }

  closeModal() {
    this.modal = false;
  }

  anchor(id: string) {
    const el = document.querySelector(`#${id}`);
    if (el) {
      el.scrollIntoView();
    }
  }
}
