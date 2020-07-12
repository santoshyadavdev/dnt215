import { Component, OnInit,
  Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() prodList: Array<Product> = [];

  @Input() title : string;

  @Output() selectedProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  sendToParent(product:Product) : void {
    console.log(product);
    this.selectedProduct.emit(product);
  }

}
