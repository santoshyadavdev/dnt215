import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() prodList: Array<Product> = [];

  @Input() title : string;

  constructor() { }

  ngOnInit(): void {
  }

}
