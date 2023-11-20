import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    protected httpClient: HttpClient,
    protected router: Router) { }

  login(credentials: any) {
    this.httpClient.post('/auth/login', credentials)
      .subscribe((response: any) => {
        const { status, data } = response;
        if (status == 'ok') {
          localStorage.setItem('access_token', data);
          this.router.navigate(['/inventory']);
        }
      });
  }
}
