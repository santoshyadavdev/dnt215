import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    if (request.method === 'GET') {
      const header = new HttpHeaders().set('x-access-token', 'dsjhkhgfjsdkfgkjsfjkfdhgkjfdhg');
      const modifiedRequest = request.clone({
        headers: header
      });
      console.log(`modifiedRequest`, modifiedRequest);
      return next.handle(modifiedRequest);
    }
    if (request.method === 'POST') {
      const header = new HttpHeaders().set('x-access-token', 'dsjhkhgfjsdkfgkjsfjkfdhgkjfdhg');
      const updatedBody: any = request.body;
      updatedBody.createdDate = new Date();
      const modifiedRequest = request.clone({
        body: updatedBody,
        headers: header
      });
      console.log(`modifiedRequest`, modifiedRequest);
      return next.handle(modifiedRequest);
    }

    return next.handle(request);
  }
}
