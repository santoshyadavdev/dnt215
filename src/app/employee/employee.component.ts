import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  name = 'Scott';
  hide = true;

  employee: Employee = {
    id: 1,
    name: 'Rob',
    email: 'rob@test.com',
    dob: new Date('10-Mar-2009')
  }

  empList: Array<Employee> = [
    {
      id: 1,
      name: 'Rob',
      email: 'rob@test.com',
      dob: new Date('10-Mar-2009')
    },
    {
      id: 2,
      name: 'Sam',
      email: 'Sam@test.com',
      dob: new Date('10-Mar-2012')
    },
    {
      id: 3,
      name: 'Scott',
      email: 'Scott@test.com',
      dob: new Date('10-Mar-2000')
    }
  ]

  constructor() { }

  toggle() {
    this.hide = !this.hide;
  }

  trackByFn(id: number, data: Employee) {
    return data.id;
  }

}
