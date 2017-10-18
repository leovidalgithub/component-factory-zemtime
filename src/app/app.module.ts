import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { IaCompHeaderComponent } from './components/ia-comp-header/src/ia-comp-header.component';
import { IaCompSidebarComponent } from './components/ia-comp-sidebar/src/ia-comp-sidebar.component';

import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IaCompHeaderComponent,
    IaCompSidebarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
