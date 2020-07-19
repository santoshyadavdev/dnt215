import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodo() {
  return  this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
