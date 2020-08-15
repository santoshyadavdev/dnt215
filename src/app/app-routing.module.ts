import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EmployeeOnboardingComponent } from './employee/employee-onboarding/employee-onboarding.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeGuard } from './employee/guards/employee.guard';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { TodoDetailsComponent } from './todo/todo-details/todo-details.component';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'employee', component: EmployeeComponent,
    // canActivate: [AuthGuard],
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
    // canActivate: [AuthGuard],
    canDeactivate: [EmployeeGuard]
  },
  {
    path: 'product', component: ProductComponent,
    // canActivate: [AuthGuard]
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
