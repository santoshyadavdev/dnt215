import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../service/todo';
import { TodoService } from '../service/todo.service';
import { FormControl, Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  @ViewChild('title', { static:true }) title: FormControl;

  todo: Todo = {
    userId: 0,
    title: '',
    completed: false
  };

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.title.valueChanges.subscribe((res)=> console.log(res));
  }

  addTask(todoForm: NgForm) {
    if(todoForm.invalid) {
      console.log('there are some errors on the form!');
    } else {
      this.todoService.addTodo(this.todo).subscribe((res)=> console.log(res));
    }
  }

}
