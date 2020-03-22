import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Task } from '../task.model';
import {
  PoModalAction,
  PoModalComponent,
  PoDialogService,
  PoDialogAlertLiterals
} from '@portinari/portinari-ui';

@Component({
  selector: 'app-task-widget',
  templateUrl: './task-widget.component.html',
  styleUrls: []
})
export class TaskComponent implements OnInit {

  constructor(private poAlert: PoDialogService) {}
  @Input() task: Task;
  @ViewChild('detailsTaskModal', { static: false })
  detailsTaskElement: PoModalComponent;
  @ViewChild('finishTaskModal', { static: true })
  finishTaskElement: PoModalComponent;
  @ViewChild('deleteTaskModal', { static: true })
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
    this.statusValue = this.task.steps;
    this.name = this.task.name;
    this.delivery = this.toDate(this.task.deliveryEstimated);
    this.created = this.toDate(this.task.taskCreated);
    this.description = this.task.description;
    this.taskFinish = this.toDate(this.task.taskFinish);
    this.category = this.task.category;
    this.deadline = this.task.status;
  }

  toDate(dateStr: string) {
    if (dateStr) {
      const parts = dateStr.split('-');
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    } else {
      return 'Data não definida';
    }
  }

  viewTask(task: Task) {
    this.detailsTaskElement.open();
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
