import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoModule, PoDialogModule } from '@portinari/portinari-ui';
import { AppRoutingModule } from './app.routing.module';
import { HeaderComponent } from './header/header.component';
import { PoAvatarModule } from '@portinari/portinari-ui';
import { TaskComponent } from './tasks/task/task-widget/task-widget.component';
import { HistoricComponent } from './tasks/historic/historic.component';
import { PendenciesComponent } from './tasks/pendencies/pendencies.component';
import { PoPageDynamicTableModule, PoPageDynamicSearchModule } from '@portinari/portinari-templates';
import { NewTaskComponent } from './tasks/task/new-task/new-task.component';
import { LoginModule } from './login/login.module';
import { TaskModalComponent } from './tasks/task/task-modal/task-modal.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskComponent,
    HistoricComponent,
    PendenciesComponent,
    NewTaskComponent,
    TaskModalComponent,
    NotfoundComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    PoModule,
    AppRoutingModule,
    PoAvatarModule,
    PoDialogModule,
    PoPageDynamicTableModule,
    LoginModule,
    PoPageDynamicSearchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
