import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from 'src/app/login/services/login.service';

export class EmployeeFactoryService {
  constructor(private isLoggedIn: boolean, private http: HttpClient) { }

  getLoginStatus() {
    console.log(this.isLoggedIn);
  }
}

export function employeefactory(loginSerice: LoginService, http: HttpClient) {
  const isLoggedIn = loginSerice.isLoggedIn;
  return new EmployeeFactoryService(isLoggedIn, http);
}
