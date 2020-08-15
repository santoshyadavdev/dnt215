import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppInterceptor } from './app.interceptor';
import { APP_CONFIG, APP_SERVICE } from './app.service';
import { ContainerComponent } from './container/container.component';
import { EmployeeOnboardingComponent } from './employee/employee-onboarding/employee-onboarding.component';
import { EmployeeComponent } from './employee/employee.component';
import { SalaryPipe } from './employee/salary.pipe';
import { HeaderComponent } from './header/header.component';
import { HoverDirective } from './hover.directive';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { WelcomePipe } from './welcome.pipe';

import { ServiceWorkerModule } from '@angular/service-worker';
import { Dnt215CoreModule } from 'dnt215-core';
import { environment } from '../environments/environment';

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
    Dnt215CoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
    { provide: APP_SERVICE, useValue: APP_CONFIG }
    // { provide: HTTP_INTERCEPTORS, useClass: TodoInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
