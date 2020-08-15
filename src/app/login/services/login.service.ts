import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;
  isAdmin = false;
  constructor() { }

  login(userName: string, password: string): boolean {
    if (userName === 'admin'
      && password === 'admin') {
      this.isLoggedIn = true;
      this.isAdmin = true;
    } else if (userName === 'user'
      && password === 'user') {
      this.isAdmin = false;
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }
}
