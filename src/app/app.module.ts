import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardsComponent } from './components/cards/cards.component';
import { OrganizationComponent } from './pages/organization/organization.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { OrganizationListComponent } from './pages/organization-list/organization-list.component';
import { PageListTemplateComponent } from './pages/page-list-template/page-list-template.component';

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
    ListItemsComponent,
    OrganizationListComponent,
    PageListTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
