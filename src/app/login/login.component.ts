import { PoNotificationService } from '@portinari/portinari-ui';
import { Component } from '@angular/core';
import { PoPageLogin } from '@portinari/portinari-templates';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent {
  // tslint:disable-next-line: max-line-length
  public loginPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  constructor(private loginService: LoginService, private router: Router, private poNotification: PoNotificationService) { }

  login(data: PoPageLogin) {
    this.loginService.auth(data.login, data.password).subscribe(
      res => {
        // tslint:disable-next-line: no-string-literal
        localStorage.setItem('token', res['access_token']);
        this.router.navigate(['/']);
      },
      () => {
        this.poNotification.error('Não foi possível realizar o login.');
      }
    );
  }

}
