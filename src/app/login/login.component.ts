import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  errorMessage = '';

  constructor(private fb: FormBuilder,
              private router: Router,
              private loginService: LoginService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: new FormControl(''),
      password: new FormControl('')
    });
  }

  login() {
    if (this.loginService.login(this.loginForm.get('userName').value,
      this.loginForm.get('password').value)) {
      let loginUrl = '';
      this.route.queryParamMap.subscribe((res) => loginUrl = res.get('loginUrl'));
      // code to redirect
      this.router.navigate(['/employee']);
      // this.router.navigate(
      //   [loginUrl === '' ? '/employee' : loginUrl], {
      //   fragment: 'employee',
      // });
    } else {
      this.errorMessage = 'The username or password you enetered is incorrect!';
    }
  }

}
