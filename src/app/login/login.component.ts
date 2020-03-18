import { Component } from '@angular/core';
import { PoPageLogin } from '@portinari/portinari-templates';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent {
  constructor(private loginService: LoginService) { }

  login(data: PoPageLogin) {
    this.loginService.auth(data).subscribe(result => {
      console.log(result)
    });
  }

}
