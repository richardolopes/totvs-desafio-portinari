import { Component, OnInit } from '@angular/core';
import { PoPieChartSeries, PoChartType } from '@portinari/portinari-ui';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent implements OnInit {

  public tasksInBacklog = 1;
  public tasksInProgress = 2;
  public tasksFinish = 1;

  constructor(private services: TasksService) { }

  stepsChartType: PoChartType = PoChartType.Donut;

  stepsChart: Array<PoPieChartSeries> = [
    { category: 'backlog', value: this.tasksInBacklog, tooltip: 'Finland (Europe)' },
    { category: 'progress', value: this.tasksInProgress, tooltip: 'Norway (Europe)' },
    { category: 'finish', value: this.tasksFinish, tooltip: 'Netherlands (Europe)' },
  ];

  ngOnInit() {
    this.services.getTasksInBacklog().subscribe(res => {
      this.tasksInBacklog = Object.keys(res).length;
    });
    this.services.getTasksInProgress().subscribe(res => {
      this.tasksInProgress = Object.keys(res).length;
    });
    this.services.getTasksFinish().subscribe(res => {
      this.tasksFinish = Object.keys(res).length;
    });
  }

}
