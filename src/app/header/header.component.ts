import { LoginService } from '../login/login.service';
import { Component, OnInit } from '@angular/core';
import { PoMenuItem, PoToolbarAction, PoToolbarProfile, PoNotificationService } from '@portinari/portinari-ui';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private poNotification: PoNotificationService, private service: TasksService, private loginService: LoginService) { }

  menuItemSelected: string;

  readonly menus: Array<PoMenuItem> = [
    { label: 'Dashboard', shortLabel: 'Dash', icon: 'po-icon po-icon-chart-area', link: '/dashboard' },
    {
      label: 'Tarefas', shortLabel: 'Tarefas', action: this.printMenuAction, icon: 'po-icon po-icon-list', subItems: [
        { label: 'Visualizar Tarefas', action: this.printMenuAction, link: '/tasks/pendencies' },
        { label: 'Histórico de Tarefas', action: this.printMenuAction, link: '/tasks/historic' },
      ]
    },
  ];

  profileActions: Array<PoToolbarAction> = [
    { icon: 'po-icon-exit', label: 'Exit', type: 'danger', separator: true, action: () => { this.loginService.logout(); } }
  ];

  profile: PoToolbarProfile = {
    avatar: '../../assets/user.png',
    title: this.service.user
  };


  ngOnInit() {
  }

  printMenuAction(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
  }

  showAction(item: PoToolbarAction): void {
    this.poNotification.success(`Action clicked: ${item.label}`);
  }

}
