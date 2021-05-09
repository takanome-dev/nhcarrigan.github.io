import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as Sentry from '@sentry/angular';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CharacterComponent } from './character/character.component';
import { AudioComponent } from './nav/audio/audio.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { SocialComponent } from './social/social.component';
import { ContactComponent } from './contact/contact.component';
import { SupportComponent } from './support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    CharacterComponent,
    AudioComponent,
    AboutComponent,
    WorkComponent,
    SocialComponent,
    ContactComponent,
    SupportComponent,
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
