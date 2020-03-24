import { Injectable } from '@angular/core';
import { HttpService } from '../shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpService) { }

  auth(login: string, pass: string) {
    return this.http.post('auth/login', {
      email: login,
      password: pass
    });
  }
}
