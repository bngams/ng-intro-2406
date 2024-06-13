import { Component } from '@angular/core';

@Component({
  selector: 'fo-get-started',
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.scss'
})
export class GetStartedComponent {
  title = 'fo';
  today = new Date();
  dateFormat = 'short';

  myMethod() {
    alert('Hello !!');
  }
}
