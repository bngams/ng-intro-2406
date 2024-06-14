import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { CoreComponent } from 'core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ThemeModule } from './modules/theme/theme.module';
import { HomeComponent } from './pages/home/home.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';

const STANDALONE_IMPORTS = [
  CoreComponent,
  ExponentialStrengthPipe
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GetStartedComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ...STANDALONE_IMPORTS,
    ThemeModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
