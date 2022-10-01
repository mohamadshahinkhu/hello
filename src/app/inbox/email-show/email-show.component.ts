import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../../_services/email.service';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css'],
})
export class EmailShowComponent implements OnInit {
  emails: any;
  constructor(
    private route: ActivatedRoute,
    private EmailService: EmailService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) =>
      this.EmailService.getemails(id).subscribe((emails) => {
        this.emails = emails;
      })
    );
  }
}
