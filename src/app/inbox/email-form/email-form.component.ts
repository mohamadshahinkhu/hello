import { EmailDetail } from './../../_services/email.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
})
export class EmailFormComponent implements OnInit {
  @Input() email: EmailDetail | any;
  @Output() submitemail = new EventEmitter();
  form!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      from: new FormControl({ value: this.email.text, disabled: true }),
      to: new FormControl(this.email?.to, [
        Validators.required,
        Validators.email,
      ]),
      subject: new FormControl(this.email?.subject, [Validators.required]),
      text: new FormControl(this.email?.text, [Validators.required]),
    });
  }
  onsubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitemail.emit(this.form.getRawValue());
  }
}
