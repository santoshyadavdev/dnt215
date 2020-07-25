import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { TodoComponent } from './todo/todo.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'todos', component: TodoComponent },
  { path: 'product', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
