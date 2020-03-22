import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@portinari/portinari-ui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menuItemSelected: string;

  readonly menus: Array<PoMenuItem> = [
    { label: 'Dashboard', shortLabel: 'Dash', icon: 'po-icon po-icon-chart-area', link: '/' },
    {
      label: 'Tarefas', shortLabel: 'Tarefas', action: this.printMenuAction, icon: 'po-icon po-icon-list', subItems: [
        { label: 'Visualizar Tarefas', action: this.printMenuAction, link: '/tasks/pendencies' },
        { label: 'Histórico de Tarefas', action: this.printMenuAction, link: '/tasks/historic' },
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  printMenuAction(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
  }

}
