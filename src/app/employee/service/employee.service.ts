import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from 'src/app/login/services/login.service';
import { employeefactory } from './employee-factory.service';

@Injectable({
  providedIn: 'root',
  useFactory : employeefactory,
  deps: [LoginService, HttpClient]
})
export class NewEmployeeService {

  constructor() { }

  getLoginStatus() {}
}
