import { AuthService } from './../../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchPasswordService } from '../../_validators/matchpassword.service';
import { UniqueUsernameService } from '../../_validators/uniqueusername.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private matchPassword: MatchPasswordService,
    private uniqueUsername: UniqueUsernameService,
    private authService: AuthService
  ) {}

  form = new FormGroup!(
    {
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ],
        [this.uniqueUsername.validate.bind(this.uniqueUsername)]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(25),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(25),
      ]),
    },
    {
      validators: [this.matchPassword.validate],
    }
  );
 get f() {
    return this.form.controls;
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.authService.signup(this.form.value).subscribe(
      (response) => {
        // console.log(response);
      },
      (error) => {
        if (!error.status) {
          this.form.setErrors({ noConnection: true });
        } else {
          this.form.setErrors({ unknownError: true });
        }
      }
    );
  }
  showErrorPasswordDontMatch() {
    return (
      this.form.controls.password.dirty &&
      this.form.controls.password.touched &&
      this.form.controls.passwordConfirmation.dirty &&
      this.form.controls.passwordConfirmation.touched
    );
  }
  ngOnInit(): void {}
}
