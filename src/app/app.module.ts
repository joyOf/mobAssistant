import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {Platform} from '@angular/cdk/platform';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [Platform, MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule {
}
