import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameListComponent } from './name-list/name-list.component';
import { ColorListComponent } from './color-list/color-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NameListComponent,
    ColorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
