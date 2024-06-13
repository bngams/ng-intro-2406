import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { CoreComponent } from 'core';

const standaloneImports = [
  CoreComponent,
  ExponentialStrengthPipe
];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ...standaloneImports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
