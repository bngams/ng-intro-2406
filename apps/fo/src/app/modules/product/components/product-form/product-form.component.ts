import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

/**
 * Source: https://betterprogramming.pub/how-to-build-a-strongly-typed-angular-14-super-form-86837965a0e5
 */
// TODO: put in a separated file and better location
export type ControlsOf<T extends Record<string, any>> = {
  // title: FormControl<string>;
  [K in keyof T]: T[K] extends Record<any, any>
  ? FormGroup<ControlsOf<T[K]>>
  : FormControl<T[K]>;
};

@Component({
  selector: 'fo-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  @Output()
  productSubmit: EventEmitter<Product> = new EventEmitter();

  // create object form
  // untyped => new UntypedFormGroup({
  // with type => (since angular 14/15)
  productForm = new FormGroup<ControlsOf<Product>>({
    title: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.minLength(3)]}),
    price: new FormControl(0, {nonNullable: true, validators: [Validators.required, Validators.min(1)]})
  });

  constructor(private productService: ProductService) { }

  submit(): void {
    // let vs const
    const product: Product = this.productForm.value;

    // debugger vs console.log(product)

    // with @Output()
    // this.productSubmit.emit(product);

    // with service (@Injectable)
    this.productService.products.push(product);
  }
}