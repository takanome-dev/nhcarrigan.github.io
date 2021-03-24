import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ConnectComponent } from './connect/connect.component';
import { HeaderComponent } from './header/header.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ContactComponent } from './contact/contact.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ToggleButtonComponent } from './header/toggle-button/toggle-button.component';
import { AudioComponent } from './header/audio/audio.component';
import * as Sentry from '@sentry/angular';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    CertificationsComponent,
    ConnectComponent,
    HeaderComponent,
    CalendarComponent,
    ContactComponent,
    SponsorsComponent,
    ToggleButtonComponent,
    AudioComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
