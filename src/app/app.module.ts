import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoModule, PoDialogModule } from '@portinari/portinari-ui';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { PoAvatarModule } from '@portinari/portinari-ui';
import { TaskComponent } from './tasks/task/task-widget.component';
import { HistoricComponent } from './tasks/historic/historic.component';
import { PendenciesComponent } from './tasks/pendencies/pendencies.component';
import { PoPageDynamicTableModule, PoPageDynamicSearchModule } from '@portinari/portinari-templates';
import { NewTaskComponent } from './tasks/task/new-task/new-task.component';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskComponent,
    HistoricComponent,
    PendenciesComponent,
    NewTaskComponent,
  ],
  imports: [
    BrowserModule,
    PoModule,
    AppRoutingModule,
    PoAvatarModule,
    PoDialogModule,
    PoPageDynamicTableModule,
    LoginModule,
    PoPageDynamicSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
