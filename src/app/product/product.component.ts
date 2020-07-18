import {
  Component, OnInit,
  ViewEncapsulation, HostBinding, ViewChild, ElementRef, DoCheck, AfterViewInit, ViewChildren, QueryList
} from '@angular/core';
import { Product } from './product';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit, DoCheck, AfterViewInit {

  @HostBinding('class') class = 'app-product';

  // @ViewChild(HeaderComponent) headerComponent: HeaderComponent;

  @ViewChildren(HeaderComponent) headerComponent: QueryList<HeaderComponent>;

  @ViewChild('nameDiv', { static: true }) div: ElementRef;

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

    this.div.nativeElement.innerText = 'New Title';
  }

  ngDoCheck() {
    console.log('do check is called');
  }

  ngAfterViewInit() {
    this.headerComponent.forEach((header)=> header.title = 'Product');
    // this.headerComponent.title = 'Product';
  }

  receiveProduct(product: Product) {
    console.log(product);
    this.selectedProduct = product;
  }

}
