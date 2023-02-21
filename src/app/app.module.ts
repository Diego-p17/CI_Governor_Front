import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { NgbModule }        from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';

import { NotFoundComponent } from './pages/not-found/not-found.component';

import { NavBarComponent }   from './components/nav-bar/nav-bar.component';
import { FooterComponent }   from './components/footer/footer.component';

import { LoginComponent }        from './pages/login/login.component';
import { DashboardComponent }    from './pages/dashboard/dashboard.component';
import { CardsComponent }        from './components/cards/cards.component';
import { OrganizationComponent } from './pages/organization/organization.component';
import { GeneralsComponent }     from './pages/generals/generals.component';
import { PeoplesComponent }      from './pages/peoples/peoples.component';
import { DevicesComponent }      from './pages/devices/devices.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    NotFoundComponent,
    DashboardComponent,
    CardsComponent,
    OrganizationComponent,
    GeneralsComponent,
    PeoplesComponent,
    DevicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ToolbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
