//Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

//Custom
import { DrawerRailModule } from 'angular-material-rail-drawer';

//App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WebsiteHeaderComponent } from './website-header/website-header.component';
import { LandingTextBlockComponent } from './landing-text-block/landing-text-block.component';
import { ImprintComponent } from './sites/imprint/imprint.component';
import { GdprComponent } from './sites/gdpr/gdpr.component';
import { ContactComponent } from './sites/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LandingPageComponent,
    WebsiteHeaderComponent,
    LandingTextBlockComponent,
    ImprintComponent,
    GdprComponent,
    ContactComponent,
  ],
  imports: [
    //Angular
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    //Material
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,

    //Custom
    DrawerRailModule,

    //App
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
