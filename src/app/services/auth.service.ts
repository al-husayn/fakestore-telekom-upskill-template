import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { tap } from 'rxjs/operators';
interface LoginResponse {
  id: number;
  username: string;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'https://fakestoreapi.com/auth/login';

  public constructor(private http: HttpClient) {}

  public login(username: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(this.loginUrl, { username, password })
      .pipe(
        tap((response) => {
          localStorage.setItem('token', JSON.stringify(response.token));
        }),
        shareReplay()
      );
  }
  public logout(): void {
    localStorage.removeItem('token');
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
