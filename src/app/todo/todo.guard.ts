import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from './service/todo';
import { TodoService } from './service/todo.service';

@Injectable({
  providedIn: 'root'
})
export class TodoGuard implements Resolve<Todo[]> {

  constructor(private todoService: TodoService)  {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Todo[]>   {
    return this.todoService.getTodo();
  }

}
