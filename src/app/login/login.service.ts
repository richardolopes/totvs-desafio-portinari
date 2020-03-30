import { Injectable } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';
import * as jtw_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public user: any;

  constructor(private http: HttpService, private router: Router) { }

  auth(login: string, pass: string) {
    return this.http.post('auth/login', {
      email: login,
      password: pass
    });
  }

  // tslint:disable-next-line: ban-types
  login(res: Object) {
    // tslint:disable-next-line: no-string-literal
    localStorage.setItem('token', res['access_token']);
    this.router.navigate(['/dashboard']);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  validToken() {
    const token = localStorage.getItem('token');

    if (token) { this.user = jtw_decode(token); }

    return !!token;
  }

  getUser() {
    if (this.validToken()) { return this.user.email; }
    return 'Não autorizado!';
  }
}
