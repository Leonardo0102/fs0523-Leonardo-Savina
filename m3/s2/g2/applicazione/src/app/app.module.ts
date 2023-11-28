import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './navbar/home/home.component';
import { PostAttiviComponent } from './navbar/post-attivi/post-attivi.component';
import { PostInattiviComponent } from './navbar/post-inattivi/post-inattivi.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostAttiviComponent,
    PostInattiviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
