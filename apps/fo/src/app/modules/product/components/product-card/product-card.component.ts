import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  // property binding [product]
  @Input()
  product!: Product;

  // DI
  // constructor()

  // Init
  // ngOnInit()
}