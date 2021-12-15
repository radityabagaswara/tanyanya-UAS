import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailpostService {
  constructor(private readonly http: HttpClient) {}

  getPost(userId: number, postId: number): Observable<any> {
    let body = new HttpParams();
    body = body.set('users_id', userId);
    body = body.set('posts_id', postId);
    return this.http.post('http://localhost/uas/api/posts/getid.php', body);
  }

  getComment(postId: number): Observable<any> {
    let body = new HttpParams();
    body = body.set('posts_id', postId);
    return this.http.post('http://localhost/uas/api/posts/comment.php', body);
  }

  addComment(comment: string, userId: number, postId: number): Observable<any> {
    let body = new HttpParams();
    body = body.set('content', comment);

    body = body.set('users_id', userId);
    body = body.set('posts_id', postId);
    return this.http.post(
      'http://localhost/uas/api/posts/addcomment.php',
      body
    );
  }

  deletePost(userId: number, postId: number): Observable<any> {
    let body = new HttpParams();
    body = body.set('users_id', userId);
    body = body.set('posts_id', postId);
    return this.http.post('http://localhost/uas/api/posts/delete.php', body);
  }
}
