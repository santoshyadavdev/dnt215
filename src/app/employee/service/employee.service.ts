import { Injectable } from '@angular/core';
import { employeefactory } from './employee-factory.service';
import { LoginService } from 'src/app/login/services/login.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
  useFactory : employeefactory,
  deps: [LoginService, HttpClient]
})
export class NewEmployeeService {

  constructor() { }

  getLoginStatus() {}
}
