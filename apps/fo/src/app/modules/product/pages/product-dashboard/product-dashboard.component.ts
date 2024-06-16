import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { Product } from '../../models/product';

@Component({
  selector: 'fo-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrl: './product-dashboard.component.scss',
  // changeDetection: onPush
})
export class ProductDashboardComponent implements OnInit, AfterViewInit {
  @ViewChild(ProductListComponent) 
  productList!: ProductListComponent;

  constructor(){
    console.log("productList constructor: ", this.productList);
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    console.log("productList ngAfterViewInit: ", this.productList);
  }

  addProduct(p: Product){
    // TODO: Use accessor
    this.productList.products.push(p);
  } 
}
