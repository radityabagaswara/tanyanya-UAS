import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private readonly http: HttpClient) {}

  createUser(
    name: string,
    username: string,
    email: string,
    password: string
  ): Observable<any> {
    let body = new HttpParams();
    body = body.set('name', name);
    body = body.set('username', username);
    body = body.set('email', email);
    body = body.set('password', password);
    console.log('creating User');

    return this.http.post('http://localhost/uas/api/user/post.php', body);
  }
}
