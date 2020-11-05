import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnanthSidebarModule } from './ananth-sidebar/ananth-sidebar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnanthSidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
