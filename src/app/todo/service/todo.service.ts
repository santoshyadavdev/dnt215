import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  // header = new HttpHeaders().set('x-access-token', 'dsjhkhgfjsdkfgkjsfjkfdhgkjfdhg');

  getTodo() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos',
    // {
    //   headers: this.header
    // }
);
  }

  addTodo(todo: Todo) {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo
    // ,
    //   {
    //     headers: this.header
    //   }
      );
  }

  updateTodo(todo: Todo) {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo
    // ,
    //   {
    //     headers: this.header
    //   }
      );
  }

  deleteTodo(todo: Todo) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/todos/${todo.id}`);
  }

  getPhotos() {
    const req = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos', {
      reportProgress: true,
      // headers: this.header
    });

    return this.http.request(req);
  }
}
