import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { LeftnavComponent } from './leftnav/leftnav.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    LeftnavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
