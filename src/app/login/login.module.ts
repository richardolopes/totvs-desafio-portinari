import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoPageLoginModule, PoModalPasswordRecoveryModule } from '@portinari/portinari-templates';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    PoPageLoginModule,
    PoModalPasswordRecoveryModule
  ]
})
export class LoginModule { }
