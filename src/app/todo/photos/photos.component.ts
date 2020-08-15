import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  total = 0;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getPhotos().subscribe(event => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request sent to the server');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log(event.status);
          break;
        }
        case HttpEventType.DownloadProgress: {
          console.log(event.loaded, event.total);
          this.total += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
          break;
        }
      }
    });
  }

}
