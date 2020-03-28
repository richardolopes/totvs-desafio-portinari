import { Component, OnInit, ViewChild } from '@angular/core';
import { PoTableColumn, PoTableLiterals, PoNotificationService, PoModalComponent, PoModalAction } from '@portinari/portinari-ui';
import { Task } from '../task.model';
import { TasksService } from '../tasks.service';
import { TaskModalComponent } from '../task/task-modal/task-modal.component';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: []
})
export class HistoricComponent {
  @ViewChild('detailsTaskModal', { static: false })
  detailsTaskModal: TaskModalComponent;

  public listTasksFinish: Task;
  public title = 'Deseja excluir essa tarefa?';

  constructor(private serviceTasks: TasksService, private poNotification: PoNotificationService) {
    this.loadTasks();
  }

  public readonly columnsDetails: Array<PoTableColumn> = [
    { property: 'status', type: 'subtitle', width: '80px', subtitles: [
      { value: 'delayed', color: 'danger', label: 'Finalizada Fora do Prazo', content: 'FP' },
      { value: 'day', color: 'warning', label: 'Finalizada na data Estimada de Entrega', content: 'EE' },
      { value: 'normal', color: 'success', label: 'Finalizada Dentro do Prazo', content: 'DP' },
    ]},
    { property: 'name', label: 'Tarefa' },
    { property: 'taskCreated', label: 'Data Criada', type: 'date', width: '10%', visible: false },
    { property: 'deliveryEstimated', label: 'Data estimada', type: 'date', width: '10%', visible: true  },
    { property: 'description', label: 'Descrição', type: 'string', width: '30%', visible: false },
    { property: 'category', label: 'Categorias', type: 'string', width: '30%', visible: false  },
    { property: 'taskFinish', label: 'Data Finalizada', type: 'date', width: '30%', visible: true  },
    { property: 'steps', label: 'Excluir', type: 'icon', width: '100px', icons:
      [
        { action: this.openModal.bind(this), icon: 'po-icon po-icon-delete', tooltip: 'Excluir', value: 'finish' },
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

  openModal(row: Task) {
    this.detailsTaskModal.open(row);
  }

  loadTasks() {
    delete this.listTasksFinish;

    this.serviceTasks.listTasksFinish().subscribe((result: any) => {
      this.listTasksFinish = result;
    });
  }

}
