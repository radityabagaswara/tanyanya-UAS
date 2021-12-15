import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private readonly http: HttpClient) {}

  createPost(
    post: string,
    usersId: string,
    image: any,
    fileType: string
  ): Observable<any> {
    let body = new HttpParams();
    body = body.set('post', post);
    body = body.set('users_id', usersId);
    body = body.set('image', image);
    body = body.set('file_type', fileType);
    return this.http.post('http://localhost/uas/api/posts/post.php', body);
  }

  editPost(
    id: any,
    post: string,
    image: any,
    fileType: string
  ): Observable<any> {
    let body = new HttpParams();
    body = body.set('id', id);
    body = body.set('post', post);
    body = body.set('image', image);
    body = body.set('file_type', fileType);
    return this.http.post('http://localhost/uas/api/posts/edit.php', body);
  }

  likePost(post: string, usersId: string) {
    let body = new HttpParams();
    body = body.set('posts_id', post);
    body = body.set('users_id', usersId);
    return this.http.post('http://localhost/uas/api/posts/like.php', body);
  }

  block(usersId: string, usersIdBlocked: string) {
    let body = new HttpParams();
    body = body.set('users_id', usersId);
    body = body.set('users_id_blocked', usersIdBlocked);
    return this.http.post('http://localhost/uas/api/posts/block.php', body);
  }
}
