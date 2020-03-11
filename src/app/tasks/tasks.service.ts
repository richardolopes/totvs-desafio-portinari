import { HttpService } from './../services/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpService) { }

  listTasks() {
    return this.http.get('tasks');
  }

  taskByID(id: string) {
    return this.http.get(`tasks/${id}`);
  }
}
