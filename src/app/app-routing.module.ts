import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ConnectComponent } from './connect/connect.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contributions', component: ContributionsComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'connect', component: ConnectComponent },
  {path: 'calendar', component: CalendarComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
