import { HistoricComponent } from './../../historic/historic.component';
import { PendenciesComponent } from './../../pendencies/pendencies.component';
import { Component, ViewChild } from '@angular/core';
import { Task } from '../../task.model';
import {
  PoModalAction,
  PoModalComponent,
  PoNotificationService,
} from '@portinari/portinari-ui';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: []
})
export class TaskModalComponent {
  @ViewChild('detailsTaskModal', { static: false })
  detailsTaskElement: PoModalComponent;

  public task: Task;

  constructor(
    private serviceTask: TasksService,
    private poNotification: PoNotificationService,
    private pendencies: PendenciesComponent,
    private historic: HistoricComponent
    ) {}

  finish = 'Concluir';

  description: string;
  created: string;
  category: string;
  taskFinish: string;
  name: string;
  delivery: string;
  statusValue: string;
  stepsValue: string;
  deadline: string;

  closeModal: PoModalAction = {
    action: () => {
      this.detailsTaskElement.close();
    },
    label: 'Fechar'
  };

  open(row: Task) {
    this.load(row);
    this.detailsTaskElement.open();
  }

  close() {
    this.detailsTaskElement.close();
  }

  load(row: Task) {
    if (row.taskFinish) {
      this.finish = 'Excluir';
      this.detailsTaskElement.title = 'Deseja excluir a tarefa?';
    }
    this.stepsValue = row.steps;
    this.statusValue = row.status;
    this.name = row.name;
    this.delivery = this.serviceTask.toDate(row.deliveryEstimated);
    this.created = this.serviceTask.toDate(row.taskCreated);
    this.description = row.description;
    this.taskFinish = this.serviceTask.toDate(row.taskFinish);
    this.category = row.category;
    this.deadline = row.status;

    this.task = row;
  }

  deleteTask() {
    this.poNotification.information('Enviando informações...');

    this.serviceTask.delete(this.task.id).subscribe(
      () => {
        this.poNotification.success('Tarefa excluída com sucesso!');
        this.pendencies.loadTasks();
        this.historic.loadTasks();
        this.detailsTaskElement.close();
      },
      () => {
        this.poNotification.error('Não foi possível excluir essa tarefa.');
      }
    );
  }

}
