import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomValidatorDirective } from './custom-validator.directive';
import { PhotosComponent } from './photos/photos.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';


@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoDetailsComponent,
    PhotosComponent,
    TodoAddComponent,
    CustomValidatorDirective
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ]
})
export class TodoModule { }
