import { CommonModule, DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreComponent } from 'core';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';

const libs = [
  RouterOutlet,
  CommonModule, // ngIf, etc..
  CoreComponent,
];

const pipes = [
  UpperCasePipe,
  LowerCasePipe,
  DatePipe,
  ExponentialStrengthPipe
] 

@Component({
  selector: 'fo-root',
  standalone: true,
  imports: [...libs, ...pipes],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fo';
  today = new Date();
  dateFormat = 'short';

  myMethod() {
    alert('Hello !!');
  }
}
