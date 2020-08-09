import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { AppInterceptor } from './app.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { EmployeeOnboardingComponent } from './employee/employee-onboarding/employee-onboarding.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { WelcomePipe } from './welcome.pipe';
import { SalaryPipe } from './employee/salary.pipe';
import { HoverDirective } from './hover.directive';
import { APP_SERVICE, APP_CONFIG } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ProductComponent,
    ProductListComponent,
    HeaderComponent,
    ContainerComponent,
    NavbarComponent,
    EmployeeOnboardingComponent,
    PagenotfoundComponent,
    LoginComponent,
    WelcomePipe,
    SalaryPipe,
    HoverDirective,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
    { provide: APP_SERVICE, useValue: APP_CONFIG }
    // { provide: HTTP_INTERCEPTORS, useClass: TodoInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
