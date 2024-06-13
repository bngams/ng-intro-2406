import { Component } from '@angular/core';
import { MenuItems } from './modules/theme/models/menuItems';

@Component({
  selector: 'fo-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fo';
  menu: MenuItems = [
    {text: 'Home', link: '/home'},
    {text: 'Get started', link: '/get-started'}
  ];
}
