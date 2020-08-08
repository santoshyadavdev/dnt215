import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { TodoComponent } from './todo/todo.component';
import { ProductComponent } from './product/product.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { EmployeeOnboardingComponent } from './employee/employee-onboarding/employee-onboarding.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TodoDetailsComponent } from './todo/todo-details/todo-details.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { EmployeeGuard } from './employee/guards/employee.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'employee', component: EmployeeComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Employee',
      defaltEmployee: 'Test'
    }
  },
  {
    path: 'todos',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'employee/onboarding', component: EmployeeOnboardingComponent,
    canActivate: [AuthGuard],
    canDeactivate: [EmployeeGuard]
  },
  {
    path: 'product', component: ProductComponent,
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    // {
    //   preloadingStrategy: PreloadAllModules
    // }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
