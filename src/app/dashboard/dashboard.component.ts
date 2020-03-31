import { Component, OnInit } from '@angular/core';
import { PoPieChartSeries, PoChartType } from '@portinari/portinari-ui';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public tasksInBacklog: number;
  public tasksInProgress: number;
  public tasksFinish: number;


  constructor(private services: TasksService) { }
  // stepsChartType: PoChartType = PoChartType.Donut;
  // stepsChart: Array<PoPieChartSeries> = [
  //   { category: 'backlog', value: this.tasksInBacklog, tooltip: 'Finland (Europe)' },
  //   { category: 'progress', value: this.tasksInProgress, tooltip: 'Norway (Europe)' },
  //   { category: 'finish', value: this.tasksFinish, tooltip: 'Netherlands (Europe)' },
  // ];

  ngOnInit() {
    this.services.getTasksInBacklog().subscribe(num => {
      this.tasksInBacklog = Object.values(num).length;
    });

    this.services.getTasksInProgress().subscribe(num => {
      this.tasksInProgress = Object.values(num).length;
    });

    this.services.getTasksFinish().subscribe(num => {
      this.tasksFinish = Object.values(num).length;
    });
  }
}
