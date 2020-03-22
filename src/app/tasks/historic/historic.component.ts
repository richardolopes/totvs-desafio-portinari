import { Component, OnInit } from '@angular/core';
import { PoTableColumn, PoTableLiterals } from '@portinari/portinari-ui';
import { Task } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: []
})
export class HistoricComponent {

  public listTasksFinish: Task;

  constructor(private serviceTasks: TasksService) {
    this.serviceTasks.listTasksFinish().subscribe((result: any) => {
      this.listTasksFinish = result;
    });
  }

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
    { property: 'deliveryEstimated', label: 'Data estimada', type: 'date', width: '10%', visible: false  },
    { property: 'description', label: 'Descrição', type: 'string', width: '30%', visible: false },
    { property: 'category', label: 'Categorias', type: 'string', width: '30%', visible: false  },
    { property: 'steps', label: 'Excluir', type: 'icon', width: '100px', icons:
      [
        { action: this.deleteTask.bind(this), icon: 'po-icon po-icon-delete', tooltip: 'Excluir', value: 'finish' },
      ]
    },
  ];

  public readonly customLiterals: PoTableLiterals = {
    loadMoreData: 'Buscar mais dados',
    loadingData: 'Processando...',
    noColumns: 'Sem colunas',
    noData: 'Sem dados',
  };





  deleteTask(row: Task) {
    console.log(row);
  }

}
