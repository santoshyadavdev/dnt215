import { Injectable } from '@angular/core';
import { Product } from './product';
import { Subject, Observable, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: Product[] = [];

  // products$ = new Subject<Product[]>();

  products$ = new BehaviorSubject<Product[]>([
    {
      id: 0,
      name: '',
      price: 0,
      mfd: new Date('1-Jan-2020')
    }]);

  // products$ = new ReplaySubject<Product[]>(2);

  constructor() {
    console.log('Product Service is intialized');
  }

  addProd(product: Product): void {
    this.productList.push(product);
    this.products$.next(this.productList);
  }

  getProd(): Observable<Product[]> {
    return this.products$.asObservable();
  }

  getProducts() {
    this.productList = [
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

    return this.productList;
  }

  addProduct(product: Product) {
    return this.productList = [...this.productList, product];
  }
}
