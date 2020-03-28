import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Task } from '../../task.model';
import {
  PoModalAction,
  PoModalComponent,
  PoDialogService,
  PoDialogAlertLiterals
} from '@portinari/portinari-ui';
import { TasksService } from '../../tasks.service';
import { TaskModalComponent } from '../task-modal/task-modal.component';

@Component({
  selector: 'app-task-widget',
  templateUrl: './task-widget.component.html',
  styleUrls: []
})
export class TaskComponent implements OnInit {

  constructor(private poAlert: PoDialogService, private serviceTask: TasksService) {}

  @Input() task: Task;

  @ViewChild('detailsTaskModal', { static: false })
  detailsTaskElement: TaskModalComponent;

  @ViewChild('finishTaskModal', { static: false })
  finishTaskElement: PoModalComponent;

  @ViewChild('deleteTaskModal', { static: false })
  deleteTaskElement: PoModalComponent;

  titleFinishTask: string;
  itemsDetails: any;
  finish = 'Concluir';

  description: string;
  created: string;
  category: string;
  taskFinish: string;
  name: string;
  delivery: string;
  statusValue: string;
  statusType: string;
  stepsValue: string;
  stepsType: string;
  deadline: string;

  actionOptions: Array<string>;
  literalsAlert: PoDialogAlertLiterals;
  action: string;

  close: PoModalAction = {
    action: () => {
      this.detailsTaskElement.close();
    },
    label: 'Fechar'
  };

  ngOnInit() {
    if (this.task.taskFinish) {
      this.finish = 'Excluir';
    }
    this.stepsValue = this.task.steps;
    this.name = this.task.name;
    this.delivery = this.serviceTask.toDate(this.task.deliveryEstimated);
    this.created = this.serviceTask.toDate(this.task.taskCreated);
    this.description = this.task.description;
    this.taskFinish = this.serviceTask.toDate(this.task.taskFinish);
    this.category = this.task.category;
    this.deadline = this.task.status;
  }

  viewTask(task: Task) {
    this.detailsTaskElement.open(task);
  }

  finishTask(task: Task) {
    this.titleFinishTask = task.name;
    if (task.taskFinish) {
      this.poAlert.alert({
        literals: this.literalsAlert,
        title: 'this.title',
        message: 'this',
        ok: () =>
          this.actionOptions.includes('ok') ? (this.action = 'OK') : undefined
      });
    } else {
      this.finishTaskElement.open();
    }
  }
}
