import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const bear_token = localStorage.getItem('access_token');
    const baseUrl = environment.apiUrl;

    req = req.clone({
      url: `${baseUrl}${req.url}`,
      setHeaders: {
        Authorization: `Bearer ${bear_token}`
      }
    });

    return next.handle(req).pipe(catchError((error: any) => { return throwError(error); }));
  }
}
