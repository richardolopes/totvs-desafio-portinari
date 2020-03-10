import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoModule } from '@portinari/portinari-ui';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    PoModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
