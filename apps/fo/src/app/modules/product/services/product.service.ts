import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { PRODUCTS_MOCK } from '../mocks/products.mock';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Subject, Observable
  products: Product[] = PRODUCTS_MOCK;

  constructor(private http: HttpClient) { }

  loadProducts(): void {
    // es5 syntax
    // this.http.get(environment.apiBaseUrl + '/products');
    const observable: Observable<any> = this.http.get(`http://localhost:3004/products`);
    observable.subscribe((res) => {
      this.products = res.products;
    })
  }

  getProducts(): Observable<any> {
    return this.http.get(`http://localhost:3004/products`);
  }
}