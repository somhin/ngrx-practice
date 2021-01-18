import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../_store/app.state';
import { getToken } from '../auth/_state/auth.selector';
import { exhaustMap } from 'rxjs/operators';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.select(getToken).pipe(
      exhaustMap((token) => {
        if (!token) {
          return next.handle(request);
        }

        let modifiedReq = request.clone({
          params: request.params.append('auth', token),
        });

        return next.handle(modifiedReq);
      })
    );
  }
}
