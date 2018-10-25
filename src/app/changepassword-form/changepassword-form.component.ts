import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ChangePasswordFormValidators } from './changepassword-form.validators';

@Component({
  selector: 'changepassword-form',
  templateUrl: './changepassword-form.component.html',
  styleUrls: ['./changepassword-form.component.css']
})
export class ChangePasswordFormComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldpassword: ['', Validators.required, ChangePasswordFormValidators.oldPasswordValidator],
      newpassword: ['', Validators.required],
      confirmpassword: ['', Validators.required],
    },
    {
      validator: ChangePasswordFormValidators.passwordNotMatchValidator
    });
  }

  get oldpassword() {
    return this.form.get('oldpassword');
  }

  get newpassword() {
    return this.form.get('newpassword');
  }

  get confirmpassword() {
    return this.form.get('confirmpassword');
  }
}
