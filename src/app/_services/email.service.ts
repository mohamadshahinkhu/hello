import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})

export class EmailService {
  private rootUrl = 'https://api.angular-email.com';
  emails: any;
  constructor(private http: HttpClient,) {}

  getemails(id:any) {
    // return this.http.get<any>('${this.rootUrl}/emails/${id}');
    return of(this.emails);

  }
}
