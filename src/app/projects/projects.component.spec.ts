import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { projects } from 'src/assets/data/Projects';

import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy('projects component does not build');
  });

  it('should have the correct properties', () => {
    expect(component.projectList).toBeTruthy('missing projectList property');
    expect(component.projectList.length).toEqual(
      projects.length,
      'incorrect projectList value'
    );
  });

  it('should render the title', () => {
    expect(compiled.querySelector('h1').textContent).toBe(
      'Projects',
      'does not render the title'
    );
  });

  it('should render a project correctly', () => {
    const expected = projects[0];
    const rendered = compiled.querySelector('.project');
    expect(rendered.querySelector('h2').textContent).toBe(
      ' ' + expected.title + ' ',
      'does not render project title'
    );
    expect(rendered.querySelector('.project-image').getAttribute('src')).toBe(
      `../../assets/img/${expected.image}`,
      'does not render project image'
    );
    expect(
      rendered.querySelectorAll('.custom-btn')[0].getAttribute('href')
    ).toBe(expected.liveUrl, 'does not render live url');
    expect(
      rendered.querySelectorAll('.custom-btn')[1].getAttribute('href')
    ).toBe(expected.codeUrl, 'does not render code url');
    expect(rendered.querySelector('.description').textContent).toBe(
      expected.description,
      'does not render description'
    );
    expect(rendered.querySelectorAll('li').length).toEqual(
      expected.tech.length,
      'does not render all technologies'
    );
  });
});
