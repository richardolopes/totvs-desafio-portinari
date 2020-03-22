import { Component, OnInit, ViewChild } from '@angular/core';
import { TasksService } from '../tasks.service';
// tslint:disable-next-line: max-line-length
import { PoTableColumn, PoTableLiterals, PoNotificationService, PoModalComponent, PoDynamicFormComponent, PoDynamicFormField, PoModalAction } from '@portinari/portinari-ui';
import { Router } from '@angular/router';
import { Task } from '../task.model';


@Component({
  selector: 'app-pendencies',
  templateUrl: './pendencies.component.html',
  styleUrls: ['./pendencies.component.css']
})
export class PendenciesComponent {

  constructor(private serviceTasks: TasksService, public route: Router, private poNotification: PoNotificationService) {
    this.loadTasks();
  }

  public listOrGrid = true;
  public listTasks: Task;
  public listTasksOpen = [];
  public listTasksStep1 = [];
  public listTasksStep2 = [];
  public listTasksStep3 = [];

  public rowTaskModal: Task;

  public titleModal = 'Mover Tarefa';

  @ViewChild('modal', { static: true })
  modalTask: PoModalComponent;

  @ViewChild('dynamicForm', {static: true})
  dynamicForm: PoDynamicFormComponent;

  fields: Array<PoDynamicFormField> = [
    {
      property: 'taskFinish',
      label: 'Data de entrega',
      type: 'date',
      gridColumns: 5,
      optional: false,
      gridSmColumns: 5,
      minValue: '',
      errorMessage: 'A data não pode ser antes da criação da tarefa.'
    },
  ];

  public readonly columnsDetails: Array<PoTableColumn> = [
    { property: 'name', label: 'Tarefa' },
    {
      property: 'status', type: 'label', width: '10%', labels: [
        { value: 'delayed', color: 'danger', label: 'Atrasada' },
        { value: 'normal', color: '', label: 'Dentro do prazo' },
        { value: 'day', color: 'warning', label: 'Finaliza hoje' },
      ]
    },
    { property: 'taskCreated', label: 'Data Criada', type: 'date', width: '10%', visible: false },
    { property: 'deliveryEstimated', label: 'Data estimada', type: 'date', width: '10%' },
    { property: 'description', label: 'Descrição', type: 'string', width: '30%', visible: false },
    { property: 'category', label: 'Categorias', type: 'string', width: '30%' },
    {
      property: 'steps', type: 'label', width: '8%', labels: [
        { value: 'backlog', color: 'danger', label: 'Backlog' },
        { value: 'progress', color: 'warning', label: 'Andamento' }
      ]
    },
    {property: 'steps', label: 'Ações', type: 'icon', width: '100px', icons:
      [
        { action: this.nextStep.bind(this), icon: 'po-icon po-icon-ok', tooltip: 'Mover para: Finalizar', value: 'progress' },
        { action: this.nextStep.bind(this), icon: 'po-icon po-icon-last-page', tooltip: 'Mover para: Em andamento', value: 'backlog' },
      ]
    },
    {property: 'steps', label: 'Editar', type: 'icon', width: '100px', icons:
      [
        { action: this.editTask.bind(this), icon: 'po-icon po-icon-edit', tooltip: 'Editar', value: 'progress' },
        { action: this.editTask.bind(this), icon: 'po-icon po-icon-edit', tooltip: 'Editar', value: 'backlog' },
      ]
    },
  ];

  public readonly customLiterals: PoTableLiterals = {
    loadMoreData: 'Buscar mais dados',
    loadingData: 'Processando...',
    noColumns: 'Sem colunas',
    noData: 'Sem dados',
  };

  close: PoModalAction = {
    action: () => {
      this.modalTask.close();
    },
    label: 'Fechar',
    danger: true
  };

  confirm: PoModalAction = {
    action: () => {
      if (this.dynamicForm.form.value.taskFinish) {
        this.rowTaskModal.taskFinish = this.dynamicForm.form.value.taskFinish;
        this.rowTaskModal.steps = 'finish';
        this.updateTask(this.rowTaskModal);
        this.modalTask.close();
      } else {
        this.poNotification.error('Digite uma data!');
      }
    },
    label: 'Finalizar',
  };

  changeView() {
    this.listOrGrid = !this.listOrGrid;
  }

  editTask(row: Task) {
    console.log(row);
  }

  nextStep(row: Task) {
    if (row.steps === 'backlog') {
      row.steps = 'progress';
      this.updateTask(row);
    } else {
      this.rowTaskModal = row;
      this.fields[0].minValue = row.taskCreated;
      this.modalTask.open();
    }
  }

  updateTask(row: Task) {
    this.poNotification.information('Enviando informações...');
    return this.serviceTasks.updateTask(row).subscribe(
      () => {
        this.poNotification.success('Tarefa editada com sucesso!');
        this.loadTasks();
      },
      () => {
        this.poNotification.error('Não foi possível alterar a tarefa.');
        this.loadTasks();
      }
    );
  }

  loadTasks() {
    delete this.listTasks;
    delete this.listTasksOpen;
    delete this.listTasksStep1;
    delete this.listTasksStep2;
    delete this.listTasksStep3;

    this.listTasksOpen = [];
    this.listTasksStep1 = [];
    this.listTasksStep2 = [];
    this.listTasksStep3 = [];

    this.serviceTasks.listTasks().subscribe((result: any) => {
      this.listTasks = result;
      this.listTasks = this.serviceTasks.definedStatus(this.listTasks);

      // tslint:disable-next-line: forin
      for (const i in this.listTasks) {
        if (this.listTasks[i].steps === 'backlog') { this.listTasksStep1.push(this.listTasks[i]); }
        if (this.listTasks[i].steps === 'progress') { this.listTasksStep2.push(this.listTasks[i]); }
        if (this.listTasks[i].steps === 'finish') { this.listTasksStep3.push(this.listTasks[i]); }
        if (!this.listTasks[i].taskFinish) { this.listTasksOpen.push(this.listTasks[i]); }
      }
    });
  }
}
