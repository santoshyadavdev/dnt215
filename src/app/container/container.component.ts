import { AfterContentInit, Component, ContentChild, Host, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../product/services/product.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers: [ProductService]
})
export class ContainerComponent implements OnInit, AfterContentInit {
  @ContentChild(ProductComponent) productComponet: ProductComponent;

  constructor(@Host() productService: ProductService) { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.productComponet.title = 'Product inside container';
  }

}
