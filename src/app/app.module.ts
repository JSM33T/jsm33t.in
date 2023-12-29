import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidepanelComponent } from './shared/sidepanel/sidepanel.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BackToTopComponent } from './shared/back-to-top/back-to-top.component';
import { ModalsComponent } from './shared/modals/modals.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { HomeComponent } from './home/home.component';
import { ApiserviceService } from './services/apiservice.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SidepanelComponent,
    NavbarComponent,
    FooterComponent,
    BackToTopComponent,
    ModalsComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarRouterModule,
    FormsModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
