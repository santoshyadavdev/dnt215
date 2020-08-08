import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { PhotosComponent } from './photos/photos.component';
import { FormsModule } from '@angular/forms';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomValidatorDirective } from './custom-validator.directive';
import { MatCheckboxModule } from '@angular/material/checkbox';


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
