import { EmailService } from 'src/app/_services/email.service';
import { EmailDetail } from './../../_services/email.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css'],
})
export class EmailReplyComponent implements OnInit {
  showModal = false;
  @Input() email: EmailDetail | any;

  onSubmitForm(email: EmailDetail) {
    this.emailService.sendemail(email).subscribe(() => {
      this.showModal = false;
    });
  }

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
    };
  }
}
