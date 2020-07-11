import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
