import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GuardianService } from './guardian/guardian.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HistoricComponent } from './tasks/historic/historic.component';
import { PendenciesComponent } from './tasks/pendencies/pendencies.component';
import { NewTaskComponent } from './tasks/task/new-task/new-task.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: HeaderComponent, canActivate: [GuardianService],
    children: [
      {
        path: 'tasks', children: [
          {
            path: 'historic', component: HistoricComponent
          },
          {
            path: 'pendencies', component: PendenciesComponent
          },
          {
            path: 'new', component: NewTaskComponent
          },
        ]
      },
      { path: 'dashboard', component: DashboardComponent }
    ]
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
