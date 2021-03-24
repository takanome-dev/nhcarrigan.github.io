import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToggleButtonComponent } from './header/toggle-button/toggle-button.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let compiled: any;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, HeaderComponent, ToggleButtonComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy('app does not build');
  });

  it(`should have as title 'Nicholas Carrigan'`, () => {
    expect(app.title).toEqual(
      'Nicholas Carrigan',
      'app does not have correct title'
    );
  });

  it('should render header component', () => {
    expect(compiled.querySelector('app-header')).toBeTruthy(
      'does not render header component'
    );
  });

  it('should render body component', () => {
    expect(compiled.querySelector('body')).toBeTruthy(
      'does not render body component'
    );
    expect(compiled.querySelector('router-outlet')).toBeTruthy(
      'does not render router component'
    );
  });
});
