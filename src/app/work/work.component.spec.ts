import { ComponentFixture, TestBed } from '@angular/core/testing';
import { fCC, google } from 'src/assets/data/Certifications';
import { experience } from 'src/assets/data/Experience';
import { projects } from 'src/assets/data/Projects';

import { WorkComponent } from './work.component';

describe('WorkComponent', () => {
  let component: WorkComponent;
  let fixture: ComponentFixture<WorkComponent>;
  let compiled: any;
  const certList = fCC.concat(google);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(WorkComponent);
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
    expect(component.projects).toBeDefined();
    expect(component.projects).toBe(projects);
    expect(component.certs).toBeDefined();
    expect(component.certs).toEqual(certList);
    expect(component.modal).toBeDefined();
    expect(component.modal).toBeFalse();
    expect(component.exp).toBeDefined();
    expect(component.exp).toBe(experience);
  });

  projects.forEach((project, index) => {
    it(`should render the ${project.title} project correctly`, () => {
      const projectCard = compiled.querySelectorAll('.project')[index];
      const image = projectCard.querySelector('img');
      expect(image.getAttribute('src')).toMatch(project.image);
      const title = projectCard.querySelector('.project-title');
      expect(title.innerText.trim()).toBe(project.title);
      const button = projectCard.querySelector('.project-button');
      expect(button.innerText.trim()).toBe('Project Info');
    });
  });

  it('should not render the modal on load', () => {
    const modal = compiled.querySelector('.modal');
    expect(modal).toBeNull();
  });

  it('should open and close the modal correctly', () => {
    component.showModal(projects[0]);
    fixture.detectChanges();
    let modal = compiled.querySelector('.modal');
    expect(modal).toBeTruthy();
    component.closeModal();
    fixture.detectChanges();
    modal = compiled.querySelector('.modal');
    expect(modal).toBeNull();
  });

  projects.forEach((project, index) => {
    it(`should render the ${project.title} modal correctly`, () => {
      component.showModal(project);
      fixture.detectChanges();
      const modal = compiled.querySelector('.modal');
      expect(modal).toBeTruthy();
      const title = modal.querySelector('h1');
      expect(title.innerText.trim()).toBe(project.title);
      const desc = modal.querySelector('p');
      expect(desc.innerText.trim()).toBe(project.description);
      project.tech.forEach((line, lineNumber) => {
        const listItem = modal.querySelectorAll('li')[lineNumber];
        expect(listItem.innerText.trim()).toBe(line);
      });
      const [liveButton, codeButton] = modal.querySelectorAll('a');
      expect(liveButton.innerText.trim()).toBe('View Project');
      expect(liveButton.getAttribute('href')).toBe(project.liveUrl);
      expect(codeButton.innerText.trim()).toBe('View Code');
      expect(codeButton.getAttribute('href')).toBe(project.codeUrl);
    });
  });

  certList.forEach((cert, index) => {
    it(`should render the ${cert.name} certificate correctly`, () => {
      const renderedCert = compiled.querySelectorAll('.cert')[index];
      expect(renderedCert.innerText.trim()).toBe(
        `${cert.name} - earned ${cert.date}`
      );
      const certLink = renderedCert.querySelector('a');
      expect(certLink.getAttribute('href')).toBe(cert.url);
    });
  });

  experience.forEach((line, index) => {
    it(`should render the ${line.name} information correctly`, () => {
      const header = compiled.querySelectorAll('.job-header')[index];
      expect(header.innerText.trim()).toBe(`${line.position} at ${line.name}`);
      const bold = header.querySelector('.job-title');
      expect(bold.innerText.trim()).toBe(line.position);
      const date = compiled.querySelectorAll('.job-time')[index];
      expect(date.innerText.trim()).toBe(`${line.start} - ${line.end}`);
      const description = compiled.querySelectorAll('.job-desc')[index];
      expect(description.innerText.trim()).toBe(line.description);
    });
  });
});
