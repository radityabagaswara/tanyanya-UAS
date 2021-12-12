import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpDefault implements HttpInterceptor {
  constructor(@Inject('BASE_API_URL') private baseUrl: string) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiReq = request.clone({
      url: `http://localhost/api/${request.url}.php`,
    });
    return next.handle(apiReq);
  }
}
