import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './user.interface';
import { EqualValidator } from './equal-validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: [ './signup-form.component.css' ]
})
export class SignupFormComponent implements OnInit {

  user: FormGroup;

  constructor() {
  }


  ngOnInit() {

    let emailFormControl = new FormControl('', Validators.required);

    this.user = new FormGroup({
      name: new FormControl('', [ Validators.required, Validators.minLength(2) ]),
      account: new FormGroup({
        email: emailFormControl,
        confirm: new FormControl('', [ Validators.required, EqualValidator.sameValue(emailFormControl) ])
      })
    });
  }

  onSubmitSimplyFormComplete(value: User) {
    console.log(value);
  }

  onSubmitSimply({ value } : { value: User }) {
    console.log(value);
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }


}
