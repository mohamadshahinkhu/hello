import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../_services/email.service';
import { of } from 'rxjs';
interface emaildetail {
  id: string;
  from: string;
  to: string;
  subject: string;
  html: string;
  text: string;
}
@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css'],
})
export class EmailIndexComponent implements OnInit {
  public emails: any = [
    {
      id: 1,
      subject: 'mohamad',
      from: 'test@gmail.com',
      to: 'mohamadshahinkhu@gmail.com',
      html: '<h1>test</h1>',
      text: 'test',
    },
    {
      id: 2,
      subject: 'ali',
      from: 'ali@gmail.com',
      to: 'mohamadshahinkhu@gmail.com',
      html: '<h1>test</h1>',
      text: 'test',
    },
    {
      id: 3,
      subject: 'amirmohamad',
      from: 'teza@gmail.com',
      to: 'mohamadshahinkhu@gmail.com',
      html: '<h1>test</h1>',
      text: 'test',
    },
    {
      id: 4,
      subject: 'hossein',
      from: 'sara@gmail.com',
      to: 'mohamadshahinkhu@gmail.com',
      html: '<h1>test</h1>',
      text: 'test',
    },
  ];

  constructor(private emailservice: EmailService) {}
  getemails(id: any) {
    const emails = this.emails.find((e: any) => e.id == id);
    return of(emails);
  }
  ngOnInit(): void {

  }
}
