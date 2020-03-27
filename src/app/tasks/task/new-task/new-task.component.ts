import { Component, OnInit, ViewChild } from '@angular/core';
import { PoDynamicFormField, PoNotificationService, PoDynamicFormComponent } from '@portinari/portinari-ui';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: []
})
export class NewTaskComponent implements OnInit {
  date = new Date();
  year = this.date.getFullYear();
  month = (`00 ${(this.date.getMonth() + 1)}`).slice(-2);
  day = (`00 ${this.date.getDate()}`).slice(-2);

  @ViewChild('dynamicForm', {static: true})
  dynamicForm: PoDynamicFormComponent;

  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      divider: 'Detalhes da Tarefa',
      label: 'Nome',
      required: true,
      minLength: 1,
      maxLength: 50,
      gridColumns: 3,
      gridSmColumns: 3
    },
    {
      property: 'category',
      label: 'Categoria',
      gridColumns: 3,
      gridSmColumns: 3,
      optional: true,
      options: ['Angular', 'AdvPL', 'Matemática', 'Português'],
      optionsMulti: true,
    },
    {
      property: 'taskCreated',
      divider: 'Datas da tarefa',
      label: 'Data de criação',
      type: 'date',
      required: true,
      gridColumns: 3,
      gridSmColumns: 3,
      maxValue: `${this.year}-${this.month}-${this.day}`,
      errorMessage: 'Data incorreta.'
    },
    {
      property: 'deliveryEstimated',
      label: 'Data estimada de entrega',
      type: 'date',
      gridColumns: 3,
      gridSmColumns: 3,
      minValue: `${this.year}-${this.month}-${this.day}`,
      errorMessage: 'A data não pode ser no passado.'
    },
    {
      property: 'description',
      divider: 'Outros',
      label: 'Descrição',
      gridColumns: 6,
      gridSmColumns: 6,
      optional: true,
      rows: 5
    },
  ];

  onLoadFields(value: any) {
    return '';
  }

  newTask() {
    const data = this.dynamicForm.form.value;
    let categories = '';
    // tslint:disable-next-line: forin
    if (typeof(data.category) === 'object') {
      for (var i = 0; i < (data.category.length - 1); i++) {
        categories += data.category[i] + ', ';
      }
      categories += data.category[i];
      data.category = categories;
    }

    data.taskFinish = '';
    data.steps = 'backlog';
    data.iduser = 1;

    this.poNotification.information('Enviando informações...');

    this.serviceTask.saveTask(data).subscribe(
      () => {
        this.poNotification.success('Tarefa criada com sucesso!');
        this.dynamicForm.form.reset();
      },
      () => {
        this.poNotification.error('Não foi possível criar a tarefa');
      }
    );
  }

  constructor(
    private poNotification: PoNotificationService,
    private serviceTask: TasksService
    ) { }

  ngOnInit() { }

}
