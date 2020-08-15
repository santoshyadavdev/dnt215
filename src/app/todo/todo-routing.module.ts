import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoComponent } from './todo.component';
import { TodoGuard } from './todo.guard';


const routes: Routes = [
  {
    path: '', component: TodoComponent, canActivate: [AuthGuard],
    resolve: {
      todoList : TodoGuard
    },
    canActivateChild: [AuthGuard],
    children: [
      {
        path: ':id', component: TodoDetailsComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'task/add', component: TodoAddComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
