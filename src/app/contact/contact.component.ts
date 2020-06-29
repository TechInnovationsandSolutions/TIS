import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm = this.fb.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [
        Validators.required,
        this.validatePhoneNumber
      ]
    ],
    body: ['', [Validators.required]]
  });


  constructor(
    private fb: FormBuilder
  ) { }

  get getContactFrom() {
    return this.contactForm.controls;
  }

  ngOnInit(): void {
  }

  validatePhoneNumber(control: AbstractControl): {[key: string]: any} | null {
    const regx = new RegExp(/(^[0]\d{10}$)|(^[\+]?[234]\d{12}$)/g);
    const isNotValidPhone = regx.test(control.value);
    return isNotValidPhone ? null : {isNotValidPhone: true};
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }

    console.log('form values', this.contactForm.value);
  }
}
