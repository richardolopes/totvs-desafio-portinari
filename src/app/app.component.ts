import { Component } from '@angular/core';
import { PoMenuItem } from '@portinari/portinari-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  readonly menus: Array<PoMenuItem> = [
    {label: 'Dashboard', link: '/'},
    {label: 'Tarefas', link: '/tasks'}
  ];

}
