import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SocialComponent } from './social/social.component';
import { SupportComponent } from './support/support.component';
import { TermsComponent } from './terms/terms.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkComponent },
  { path: 'social', component: SocialComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'support', component: SupportComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  // All new routes go above this one.
  { path: '**', component: FourOhFourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
