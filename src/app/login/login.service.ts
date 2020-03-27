import { Injectable } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';
import * as jtw_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public user: any;

  constructor(private http: HttpService, private route: Router) { }

  auth(login: string, pass: string) {
    return this.http.post('auth/login', {
      email: login,
      password: pass
    });
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

  returnUser() {
    return this.user;
  }
}
