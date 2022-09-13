import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class MatchPasswordService implements Validator {
  constructor() {}

  validate(control: AbstractControl): ValidationErrors {
    const { password, passwordConfirmation } = control.value;
    if (password === passwordConfirmation) return null!;
    return { passwordDontMatch: true };
  }
}
