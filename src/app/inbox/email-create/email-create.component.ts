import { EmailDetail } from './../../_services/email.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { EmailService } from '../../_services/email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css'],
})
export class EmailCreateComponent implements OnInit {
  showmodal = false;
  email: EmailDetail | any;
  constructor(
    private AuthService: AuthService,
    private EmailService: EmailService
  ) {}

  ngOnInit(): void {
    this.email = {
      id: 0,
      subject: '',
      from: '$(this.authservice.username)@angular-email.com',
      to: '',
      html: '',
      text: '',
    };
  }
  onsubmitform(email: any) {
    this.EmailService.sendemail(email).subscribe(
      () => (this.showmodal = false)
    );
  }
}
