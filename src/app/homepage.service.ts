import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  constructor(private readonly http: HttpClient) {}

  getAllPost(userId: number): Observable<any> {
    let body = new HttpParams();
    body = body.set('users_id', userId);
    return this.http.post(
      'https://ubaya.fun/hybrid/160719057/api/posts/list.php',
      body
    );
  }
}
