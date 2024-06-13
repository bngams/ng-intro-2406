import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { CoreComponent } from 'core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ThemeModule } from './modules/theme/theme.module';

const STANDALONE_IMPORTS = [
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
    ...STANDALONE_IMPORTS,
    ThemeModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
