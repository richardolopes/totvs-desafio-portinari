import { Component, OnInit, ViewChild } from '@angular/core';
import { TasksService } from './tasks.service';
import { PoModalComponent, PoTableColumn, PoSelectOption } from '@portinari/portinari-ui';
import { Task } from './tasks.model';

@Component({
	selector: 'app-tasks',
	templateUrl: './tasks.component.html',
	styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
	public listOrGrid = !true;
	public listTasks: any;
	public listTasksStep1 = [];
	public listTasksStep2 = [];
	public listTasksStep3 = [];
	readonly statusOptions: Array<PoSelectOption> = [
	{ label: 'Backlog', value: 'backlog' },
		{ label: 'Em andamento', value: 'progress' },
		{ label: 'Concluída', value: 'finish' },
	];
	public readonly columnsDetails: Array<PoTableColumn> = [
		{ property: 'name', label: 'Tarefa', type: 'string', visible: false},
		{ property: 'status', type: 'label', width: '15%', labels: [
			{ value: 'delayed', color: 'color-11', label: 'Atrasada' },
			{ value: 'normal', color: 'color-08', label: 'Dentro do prazo' },
			{ value: 'day', color: 'color-01', label: 'Finaliza hoje' },
			{ value: 'finish', color: 'color-01', label: 'Concluída' },
		]},
		{ property: 'steps', type: 'label', width: '8%', labels: [
			{ value: 'backlog', color: 'color-11', label: 'Backlog' },
			{ value: 'progress', color: 'color-08', label: 'Andamento' },
			{ value: 'finish', color: 'color-01', label: 'Concluída' }
		]},
		{ property: 'taskCreated', label: 'Tarefa criada', type: 'date' },
		{ property: 'taskFinish', label: 'Tarefa finalizada', type: 'date' },
		{ property: 'deliveryEstimated', label: 'Data estimada', type: 'date' },
		{ property: 'description', label: 'Descrição', type: 'string', width: "60%" },
	];

// [(ngModel)]="rowItem.status"
// p-label="Transport status"
// [p-options]="statusOptions">

	constructor(private serviceTasks: TasksService) {
		this.serviceTasks.listTasks().subscribe(result => {
			this.listTasks = result;
			// tslint:disable-next-line: forin
			for (const i in result) {
				if (result[i].taskFinish) {
					this.listTasks[i].status = "finish"
				} else {
					if (result[i].deliveryEstimated > result[i].taskCreated) {
						this.listTasks[i].status = "normal"
					}
					if (result[i].deliveryEstimated < result[i].taskCreated) {
						this.listTasks[i].status = "delayed"
					}
					if (result[i].deliveryEstimated == result[i].taskCreated) {
						this.listTasks[i].status = "day"
					}
				}

				if (result[i].steps === 'backlog') {
					console.log("passou em algum lugar")
					this.listTasksStep1.push(this.listTasks[i])
				}
				if (result[i].steps === 'progress') {
					console.log("passou em algum lugar")
					this.listTasksStep2.push(this.listTasks[i])
				}
				if (result[i].steps === 'finish') {
					console.log("passou em algum lugar")
					this.listTasksStep3.push(this.listTasks[i])
				}
			}
		});
	}


	changeView() {
		this.listOrGrid = !this.listOrGrid;
	}

	ngOnInit() {
	}

}
