import { Component } from '@angular/core';
import { ProductService } from './product/services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello World</h1>
  //   <h2>From Angular</h2>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dnt215';
  role = 'user';
  adminRole = 'Admin';
  constructor(private productService: ProductService) {

  }

  addProduct() {
   const prodList = this.productService.addProduct({
      id: 5,
      mfd: new Date('10-Mar-2008'),
      name: 'test5',
      price: 4000
    });
    console.log(prodList);
  }
}
