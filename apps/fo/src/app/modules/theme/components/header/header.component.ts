import { Component, Input } from '@angular/core';
import { MenuItems } from '../../models/menuItems';  

@Component({
  selector: 'fo-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input()
  menuItems!: MenuItems;  // MenuItems = Array<MenuItem> | MenuItem[]   
}
