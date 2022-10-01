import { EmailDetail } from './../../_services/email.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {
showmodal=false;
email : EmailDetail;
  constructor() {
    this.email = {
      id: 0,
      subject: '',
      from: 'test@gmail.com',
      to: '',
      html: '',
      text: '',
    };
   }

  ngOnInit(): void {
  }

}
