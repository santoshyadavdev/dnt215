import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { TodoComponent } from './todo/todo.component';
import { ProductComponent } from './product/product.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';


const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'todos', component: TodoComponent },
  { path: 'todos/add', component: TodoAddComponent },
  { path: 'product', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
