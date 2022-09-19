import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../_services/email.service';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css'],
})
export class EmailIndexComponent implements OnInit {
  emails = [];
  constructor(private emailservice: EmailService) {}

  ngOnInit(): void {
    this.emailservice.getemails().subscribe((data:any) => {
    this.emails= data
    });
  }
}
