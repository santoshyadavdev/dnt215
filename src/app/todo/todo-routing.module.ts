import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';
import { AuthGuard } from '../guards/auth.guard';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
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
    path: 'add', component: TodoAddComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
