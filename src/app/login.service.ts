import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private readonly http: HttpClient) {}

  loginUser(username: string, password: string): Observable<any> {
    let body = new HttpParams();
    body = body.set('username', username);
    body = body.set('password', password);
    return this.http.post(
      'https://ubaya.fun/hybrid/160719057/api/user/login.php',
      body
    );
  }
}
