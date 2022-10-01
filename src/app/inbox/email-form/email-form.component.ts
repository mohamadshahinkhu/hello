import { EmailDetail } from './../../_services/email.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
})
export class EmailFormComponent implements OnInit {
  @Input() email: EmailDetail | undefined;

  form!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      from: new FormControl(this.email?.from),
      to: new FormControl(this.email?.to),
      subject: new FormControl(this.email?.subject),
      text: new FormControl(this.email?.text),
    });
  }

}
