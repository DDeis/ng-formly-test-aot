import { Component } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';

import { FormlyFieldConfig } from 'ng-formly';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup = new FormGroup({});
  userFields: FormlyFieldConfig = [{
    className: 'row',
    fieldGroup: [{
        className: 'col-xs-6',
        key: 'email',
        type: 'input',
        templateOptions: {
            type: 'email',
            label: 'Email address',
            placeholder: 'Enter email',
            required: true
        },
        validators: {
          // validation: Validators.compose([Validators.required])
        }
    }, {
        className: 'col-xs-6',
        key: 'password',
        type: 'input',
        templateOptions: {
            type: 'password',
            label: 'Password',
            placeholder: 'Password',
            pattern: ''
        },
        validators: {
          validation: Validators.compose([Validators.required])
        }
    }]
  }];

  user = {
    email: 'email@gmail.com',
    checked: false
  };

  submit(user) {
    console.log(user);
    console.log(this.form)
  }
}
