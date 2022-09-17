import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'http://localhost/backend/';

  constructor(private http: HttpClient) {}

  /*  public verificarEmail(obj: Email) {
    return this.http.post<any>(this.url + `auth/`, obj);
  }
*/
  public iniciarSesion(obj: Login) {
    return this.http.post<any>(this.url + `auth/login.php`, obj);
  }
}
