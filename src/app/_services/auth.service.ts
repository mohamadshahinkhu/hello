import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

export interface SignupCredentials {
  username?: string | null;
  password?: string | null;
  passwordConfirmation?: string | null;
}
export interface SignupResponse {
  username: string;
}
export interface loginCredentials {
  username?: string | null;
  password?: string | null;
}
export interface LoginResponse {
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://api.angular-email.com';
  public signedin$ = new BehaviorSubject<boolean>(false);
  username: string = '';
  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<any>(this.baseUrl + '/auth/username', {
      username: username,
    });
  }

  signup(values: SignupCredentials) {
    return this.http
      .post<SignupResponse>(this.baseUrl + '/auth/signup/', values)
      .pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      );
  }

  checkAuth() {
    return this.http.get(`${this.baseUrl}/auth/signedin`).pipe(
      tap((response: any) => {
        this.signedin$.next(response.authenticated);
        this.username = response?.username;
      })
    );
  }

  signout() {
    return this.http.post(`${this.baseUrl}/auth/signout/`, {}).pipe(
      tap(() => {
        this.signedin$.next(false);
      })
    );
  }
  signin(loginCredentials: loginCredentials) {
    return this.http
      .post<LoginResponse>(`${this.baseUrl}/auth/signin/`, loginCredentials)
      .pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      );
  }
}
