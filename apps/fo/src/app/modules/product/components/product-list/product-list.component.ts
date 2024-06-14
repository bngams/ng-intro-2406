import { Component, Input, ViewChildren, QueryList, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { PRODUCTS_MOCK } from '../../mocks/products.mock';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'fo-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @ViewChildren(ProductCardComponent) cards!: QueryList<ProductCardComponent>;

  private loading = false;

  @Input()
  productsInput!: Product[];

  products: Product[] = [];

  // inject class ProductService
  constructor(private productsService: ProductService) {
    // better to init in ngInit method (lifecycle hooks)
    // this.products = productsService.products;
  }

  // init products
  ngOnInit(): void {
    // this.loadFromService(); // like a "store" service
    // this.loadProducts();
    this.loadFromMocks();
  }

  loadFromMocks(): void {
    this.loading = true;
    this.products = PRODUCTS_MOCK;
    this.loading = false;
  }

  loadProducts(): void {
    this.loading = true;
    this.productsService.getProducts().subscribe(res => {
      this.products = res.products;
      this.loading = false; // /!\ error / complete // ou timeout
    })
  }

  loadFromService(): void {
    this.productsService.loadProducts();
  }
}