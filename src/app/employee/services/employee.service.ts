import { Injectable } from '@angular/core';
import { LoginService } from 'src/app/login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployeeOnBoardingData() {
    return {
      name: 'Employee1',
      email: 'employee1@ms.com',
      password: 'fdsfsd',
      confirmPassword: 'asfdsf',
      mobileNo: '54654646',
      address: {
        addr1: 'fdsf',
        addr2: 'sdfsdf',
        city: 'dsfsd',
        pin: 'dsf'
      },
      pastExp: [
        {
          orgName: 'safsd',
          fromDate: 'dfsd',
          toDate: 'sdf',
          designation: 'dsfsdf'
        },
        {
          orgName: 'saetrtfsd',
          fromDate: 'dfsd',
          toDate: 'sdf',
          designation: 'dsfsdf'
        }
      ]
    }
  }
}
