import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'hammerjs';

import { APP_CONFIG, AppConfig } from '../shared/app.config';


import { AppComponent } from './app.component';
import { PoisComponent } from './pois/pois.component';

@NgModule({
  declarations: [
    AppComponent,
    PoisComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
