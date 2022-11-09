import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = this.auth.accessToken;
    console.log('aqui 0');
    if (authToken) {
      console.log('aqui 1');
      // Clone the request and replace the original headers with
      // cloned headers, updated with the authorization.
      const authReq = req.clone({
        setHeaders: {
          authorization: `Bearer ${authToken}`,
        },
      });

      // send cloned request with header to the next handler.
      return next.handle(authReq);
    }

    return next.handle(req);
  }
}
