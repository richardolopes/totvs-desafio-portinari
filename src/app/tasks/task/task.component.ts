import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Task } from '../tasks.model';
import { PoTableColumn, PoModalComponent } from '@portinari/portinari-ui';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @ViewChild('detailsTaskModal', { static: false }) detailsTaskElement: PoModalComponent;
  @ViewChild('finishTaskModal', { static: true }) finishTaskElement: PoModalComponent;

  public readonly columnsDetails: Array<PoTableColumn> = [
    { property: 'name', label: 'Tarefa', type: 'string', visible: false},
    { property: 'description', label: 'Descrição', type: 'string', width: "50%" },
    { property: 'taskCreated', label: 'Tarefa criada', type: 'date', width: "10%" },
    { property: 'taskFinish', label: 'Tarefa finalizada', type: 'date', width: "10%" },
    { property: 'deliveryEstimated', label: 'Data estimada', type: 'date', width: "10%" },
  ];
  private titleDetailsTask: string;
  private titleFinishTask: string;
  private itemsDetails: any;

  constructor() { }

  ngOnInit() {
  }

  viewTask(task: Task) {
    this.titleDetailsTask = task.name;
    this.itemsDetails = [task];
    this.detailsTaskElement.open();
  }

  finishTask(task: Task) {
    this.titleFinishTask = task.name;
    this.finishTaskElement.open();
  }

}
