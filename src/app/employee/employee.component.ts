import { Component, OnInit, Inject } from '@angular/core';
import { Employee } from './employee';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product/services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../product/services/product';
import { inject } from '@angular/core/testing';
import { APP_SERVICE } from '../app.service';
import { AppConfig } from '../app.config';
import { NewEmployeeService } from './service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  amount = 0;
  name = 'Scott';
  hide = true;

  employee: Employee = {
    id: 1,
    name: 'Rob',
    email: 'rob@test.com',
    dob: new Date('10-Mar-2009'),
    salary: 65000
  }

  empList: Array<Employee> = [
    {
      id: 1,
      name: 'Rob',
      email: 'rob@test.com',
      dob: new Date('10-Mar-2009'),
      salary: 1000
    },
    {
      id: 2,
      name: 'Sam',
      email: 'Sam@test.com',
      dob: new Date('10-Mar-2012'),
      salary: 2000
    },
    {
      id: 3,
      name: 'Scott',
      email: 'Scott@test.com',
      dob: new Date('10-Mar-2000'),
      salary: 3000
    }
  ];

  productList$: Observable<Product[]> = this.productService.getProd();


  constructor(private router: ActivatedRoute,
    private factoryDemo: NewEmployeeService,
    private productService: ProductService,
    @Inject(APP_SERVICE) private appService: AppConfig) {
    console.log(appService.jsonAPi);
  }

  ngOnInit() {
    this.router.data.subscribe((res) => console.log(res));
    this.factoryDemo.getLoginStatus();
  }

  toggle() {
    this.hide = !this.hide;
  }

  trackByFn(id: number, data: Employee) {
    return data.id;
  }

  addProduct() {
    const product = {
      id: 5,
      mfd: new Date('1-jan-2019'),
      name: 'test5',
      price: 6000
    };
    this.productService.addProd(product);
  }

}
