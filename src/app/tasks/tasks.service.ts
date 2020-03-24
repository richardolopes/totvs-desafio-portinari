import { HttpService } from "../shared/http.service";
import { Injectable } from "@angular/core";
import { Task } from './task.model';

@Injectable({
  providedIn: "root"
})
export class TasksService {
  constructor(
    private http: HttpService
  ) { }

  // listTasksOpens() {
  //   return this.http.get("tasks?taskFinish=");
  // }

  listTasks() {
    return this.http.get('tasks');
  }

  saveTask(data: Task) {
    console.log('POST Task');
    return this.http.post('tasks', data);
  }

  taskByUser(id: number) {
    return this.http.get(`tasks?iduser=${id}`);
  }

  definedStatus(tasks: any) {
    // tslint:disable-next-line: forin
    for (const i in tasks) {
      if (tasks[i].taskFinish) {
        tasks[i].status = 'finish';
      } else {
        const date = new Date();
        const year = date.getFullYear();
        const month = (`00${(date.getMonth() + 1)}`).slice(-2);
        const day = (`00${date.getDate()}`).slice(-2);

        if (tasks[i].deliveryEstimated === `${year}-${month}-${day}`) {
          tasks[i].status = 'day';
        } else {
          if (tasks[i].deliveryEstimated > tasks[i].taskCreated) {
            tasks[i].status = 'normal';
          } else {
            tasks[i].status = 'delayed';
          }
        }
      }
    }

    return tasks;
  }

  finishTask(task: Task, dateFinish: string) {
    task.steps = 'finish';
    task.taskFinish = dateFinish;
    if (task.deliveryEstimated === dateFinish) { task.status = 'day'; }
    if (task.deliveryEstimated > dateFinish) { task.status = 'normal'; }
    if (task.deliveryEstimated < dateFinish) { task.status = 'delayed'; }
    return task;
  }

  toDate(dateStr: string) {
    if (dateStr) {
      const parts = dateStr.split('-');
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    } else {
      return 'Data não definida';
    }
  }

  dateToString(date: Date) {
    const newDate = date.toString();
    const parts = newDate.split('/');
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }

  updateTask(data: Task) {
    return this.http.put(`tasks/${data.id}`, (data));
  }

  listTasksFinish() {
    return this.http.get(`tasks?steps=finish`);
  }

  delete(id: number) {
    return this.http.delete(`tasks/${id}`);
  }
}
