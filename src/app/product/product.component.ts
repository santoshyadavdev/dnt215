import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

  @HostBinding('class') class = 'app-product';

  productList: Array<Product> = [
    {
      id: 1,
      name: 'Samsung',
      price: 5000,
      mfd: new Date('1-Jan-2020')
    },
    {
      id: 2,
      name: 'IPhone',
      price: 6000,
      mfd: new Date('1-Feb-2020')
    },
    {
      id: 3,
      name: 'Pixel',
      price: 8000,
      mfd: new Date('1-Mar-2020')
    }
  ];

  selectedProduct: Product;

  constructor() { }

  ngOnInit(): void {
  }

  receiveProduct(product: Product) {
    console.log(product);
    this.selectedProduct = product;
  }

}
