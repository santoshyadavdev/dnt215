import { Component, OnInit, ContentChild, AfterContentInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, AfterContentInit {
  @ContentChild(ProductComponent) productComponet : ProductComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.productComponet.title = 'Product inside container';
  }

}
