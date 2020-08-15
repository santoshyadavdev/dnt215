import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { pluck, takeUntil } from 'rxjs/operators';
import { OndestroyService } from '../ondestroy.service';
import { Todo } from './service/todo';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  // todos: Todo[];

  todos$: Observable<Todo[]>;

  subscription$: Subscription;

  constructor(private todoService: TodoService,
              private route: ActivatedRoute,
              private onDestroyService: OndestroyService) { }


  ngOnInit(): void {
    // this.subscription$ = this.route.data.subscribe((res) => this.todos = res['todoList']);
    // this.route.data.pipe(
    //   takeUntil(this.onDestroyService)
    // )
    //   .subscribe((res) => this.todos = res['todoList']);
    // this.todoService.getTodo().subscribe((data) => this.todos = data);
    this.todoService.getByTodoId().subscribe((res) => console.log(res));
    this.todos$ = this.route.data.pipe(
      pluck('todoList')
    );
    // .subscribe((res) => this.todos = res['todoList']);
  }

  addTask() {
    const task: Todo = {
      title: 'Test Task',
      userId: 1,
      completed: false
    };
    this.subscription$ = this.todoService.addTodo(task).subscribe((res) => console.log(res));
  }

  updateTask() {
    const task: Todo = {
      title: 'Test Task',
      userId: 1,
      completed: false,
      id: 1
    };
    this.subscription$ = this.todoService.updateTodo(task).subscribe((res) => console.log(res));
  }

  deleteTask() {
    const task: Todo = {
      title: 'Test Task',
      userId: 1,
      completed: false,
      id: 1
    };
    this.subscription$ = this.todoService.deleteTodo(task).subscribe((res) => console.log(res));
  }

  // ngOnDestroy() {
  //   if (this.subscription$) {
  //     this.subscription$.unsubscribe();
  //   }
  // }

}
