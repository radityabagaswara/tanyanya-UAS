import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly http: HttpClient) {}

  searchUser(searchQuery: string): Observable<any> {
    let body = new HttpParams();
    body = body.set('search_query', searchQuery);
    return this.http.post('http://localhost/uas/api/user/get.php', body);
  }
}
