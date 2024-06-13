import { Component } from '@angular/core';

@Component({
  selector: 'fo-root',
  standalone: false,
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
