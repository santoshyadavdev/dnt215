import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoService } from './service/todo.service';
import { Todo } from './service/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodo().subscribe((data) => this.todos = data);
  }

  addTask() {
    const task: Todo = {
      title: 'Test Task',
      userId: 1,
      completed: false
    };
    this.todoService.addTodo(task).subscribe((res) => console.log(res));
  }

  updateTask() {
    const task: Todo = {
      title: 'Test Task',
      userId: 1,
      completed: false,
      id: 1
    };
    this.todoService.updateTodo(task).subscribe((res) => console.log(res));
  }

  deleteTask() {
    const task: Todo = {
      title: 'Test Task',
      userId: 1,
      completed: false,
      id: 1
    };
    this.todoService.deleteTodo(task).subscribe((res) => console.log(res));
  }

}
