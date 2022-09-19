import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private rootUrl = 'https://api.angular-email.com';
  constructor(private http: HttpClient) {}

  getemails() {
    return this.http.get('${this.rootUrl}/emails');
  }
}
