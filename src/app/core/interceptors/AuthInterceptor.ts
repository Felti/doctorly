import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth/service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = "12345"
    //const token = this.authService.getToken();

    if (
      request.url.indexOf('/auth/sign-in') === -1 &&
      request.url.indexOf('/auth/password-reset') === -1 &&
      request.url.indexOf('/auth/change-password') === -1 &&
      request.url.indexOf('/auth/verify-password-reset-token') === -1
    ){
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Unauthorized - redirect to login or refresh token
          //this.authService.logout();
        }
        return throwError(error);
      })
    );
  }
}