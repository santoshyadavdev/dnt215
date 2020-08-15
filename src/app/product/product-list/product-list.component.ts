import {
  ChangeDetectionStrategy, Component,
  EventEmitter, Input, OnChanges,
  OnInit, Output, SimpleChanges
} from '@angular/core';
import { Product } from '../services/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit, OnChanges {

  @Input() prodList: Array<Product> = [];

  @Input() title: string;

  @Output() selectedProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
  }

  sendToParent(product: Product): void {
    console.log(product);
    this.selectedProduct.emit(product);
  }

}
