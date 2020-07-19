import {
  Component, OnInit,
  ViewEncapsulation, HostBinding, ViewChild, ElementRef, DoCheck, AfterViewInit, ViewChildren, QueryList, Self
} from '@angular/core';
import { Product } from './services/product';
import { HeaderComponent } from '../header/header.component';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None,
  // providers: [ProductService]
})
export class ProductComponent implements OnInit, DoCheck, AfterViewInit {

  @HostBinding('class') class = 'app-product';

  // @ViewChild(HeaderComponent) headerComponent: HeaderComponent;

  @ViewChildren(HeaderComponent) headerComponent: QueryList<HeaderComponent>;

  @ViewChild('nameDiv', { static: true }) div: ElementRef;

  productList: Array<Product> = [];
  title: string;

  selectedProduct: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
    this.div.nativeElement.innerText = 'New Title';
  }

  ngDoCheck() {
    console.log('do check is called');
  }

  addProduct() {
    // this.productList.push({
    // id: 4,
    // mfd: new Date('1-jan-2019'),
    // name: 'test4',
    // price: 6000
    // })
    // this.productList = [...this.productList, ];

    this.productList = this.productService.addProduct({
      id: 4,
      mfd: new Date('1-jan-2019'),
      name: 'test4',
      price: 6000
    });
  }

  ngAfterViewInit() {
    this.headerComponent.forEach((header) => header.title = 'Product');
    // this.headerComponent.title = 'Product';
  }

  receiveProduct(product: Product) {
    console.log(product);
    this.selectedProduct = product;
  }


}
