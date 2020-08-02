import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { PhotosComponent } from './photos/photos.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoDetailsComponent,
    PhotosComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule
  ]
})
export class TodoModule { }
