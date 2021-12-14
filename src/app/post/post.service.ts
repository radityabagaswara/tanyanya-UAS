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

  // $users_id, $posts_id
  likePost(post: string, usersId: string) {
    let body = new HttpParams();
    body = body.set('posts_id', post);
    body = body.set('users_id', usersId);
    return this.http.post('http://localhost/uas/api/posts/like.php', body);
  }

  // likePost(userId: string, postId: string): Observable<any> {
  //   let body = new HttpParams();
  //   body = body.set('users_id', userId);
  //   body = body.set('posts_id', postId);
  //   return this.http.post('http://localhost/uas/api/posts/like.php', body);
  // }
}
