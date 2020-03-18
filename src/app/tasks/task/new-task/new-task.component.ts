import { Component, OnInit } from '@angular/core';
import { PoDynamicFormField, PoDynamicFormFieldChanged, PoDynamicFormValidation } from '@portinari/portinari-ui';

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

  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      divider: 'Detalhes da Tarefa',
      label: 'Nome',
      required: true,
      minLength: 4,
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

  sendTask(data) {

  }

  constructor() { }

  ngOnInit() { }

}
