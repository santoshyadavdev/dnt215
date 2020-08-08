import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoService } from './service/todo.service';
import { Todo } from './service/todo';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { OndestroyService } from '../ondestroy.service';
import { takeUntil, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {
  // todos: Todo[];

  todos$: Observable<Todo[]>

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
