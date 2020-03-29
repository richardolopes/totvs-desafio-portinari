import { NotfoundComponent } from './notfound/notfound.component';
import { GuardianService } from './guardian/guardian.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HistoricComponent } from './tasks/historic/historic.component';
import { PendenciesComponent } from './tasks/pendencies/pendencies.component';
import { NewTaskComponent } from './tasks/task/new-task/new-task.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: HomeComponent, canActivate: [GuardianService],
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
    ]
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
