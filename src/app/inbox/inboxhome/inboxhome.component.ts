import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../_services/email.service';

@Component({
  selector: 'app-inboxhome',
  templateUrl: './inboxhome.component.html',
  styleUrls: ['./inboxhome.component.css'],
})
export class InboxhomeComponent implements OnInit {
  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.emailService.getemails(1).subscribe((data) => {
      console.log(data);
    });}
}
