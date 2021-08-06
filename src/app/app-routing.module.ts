import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactComponent } from './sites/contact/contact.component';
import { GdprComponent } from './sites/gdpr/gdpr.component';
import { ImprintComponent } from './sites/imprint/imprint.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' }, //Main page
  // {path: '**', redirectTo: ''}, //404 File not Found
  { path: 'home', component: LandingPageComponent }, //Landig page with all important informations
  { path: 'imprint', component: ImprintComponent }, //Landig page with all important informations
  { path: 'gdpr', component: GdprComponent }, //Landig page with all important informations
  { path: 'contact', component: ContactComponent }, //Landig page with all important informations
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
