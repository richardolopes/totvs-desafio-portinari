import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoModule } from '@portinari/portinari-ui';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { PoAvatarModule } from '@portinari/portinari-ui';
import { TaskComponent } from './tasks/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TasksComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    PoModule,
    AppRoutingModule,
    PoAvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
