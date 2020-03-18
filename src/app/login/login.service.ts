import { Injectable } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { PoPageLogin } from '@portinari/portinari-templates';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpService) { }

  auth(data: PoPageLogin) {
    console.log(data);
    return this.http.post('auth/login', data);
  }
}
