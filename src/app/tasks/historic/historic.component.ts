import { Component, OnInit } from '@angular/core';
import { PoTableColumn, PoTableLiterals, PoNotificationService } from '@portinari/portinari-ui';
import { Task } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: []
})
export class HistoricComponent {

  public listTasksFinish: Task;

  constructor(private serviceTasks: TasksService, private poNotification: PoNotificationService) {
    this.loadTasks();
  }

  public readonly columnsDetails: Array<PoTableColumn> = [
    { property: 'name', label: 'Tarefa' },
    { property: 'status', type: 'subtitle', width: '80px', subtitles: [
      { value: 'delayed', color: 'danger', label: 'Finalizada Fora do Prazo', content: 'FP' },
      { value: 'day', color: 'warning', label: 'Finalizada na data Estimada de Entrega', content: 'EE' },
      { value: 'normal', color: 'success', label: 'Finalizada Dentro do Prazo', content: 'DP' },
    ]},
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
    this.poNotification.information('Enviando informações...');
    this.serviceTasks.delete(row.id).subscribe(
      () => {
        this.poNotification.success('Tarefa excluída com sucesso!');
        this.loadTasks();
      },
      () => {
        this.poNotification.success('Não foi possível excluir a tarefa.');
      }
    );
  }

  loadTasks() {
    delete this.listTasksFinish;

    this.serviceTasks.listTasksFinish().subscribe((result: any) => {
      this.listTasksFinish = result;
    });
  }

}
