import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IContact } from 'src/app/core';
import { TiswebService } from '../services/tisweb.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  contactForm = this.fb.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [
        Validators.required,
        this.validatePhoneNumber
      ]
    ],
    msgBody: ['', [Validators.required]]
  });
  toastName = '';
  showToaster = false;
  isLoading = false;
  messageSentSuccessfully = false;

  subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private serv : TiswebService
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

  hideToaster() {
    this.showToaster = false;
    this.messageSentSuccessfully = false;
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }

    const msg: IContact = this.contactForm.value;

    // console.log('form values', msg);
    this.isLoading = true;
    this.subscription = this.serv.sendEmail(msg).subscribe(r => {
      // console.log(r);
      this.toastName = msg.firstname + ' ' + msg.lastname;

      this.isLoading = false;
      if (r.accepted.length) {
        this.messageSentSuccessfully = true;
        this.showToaster = true;
        this.contactForm.reset();
      }

      // window.scrollTo(0, 0);
      document.body.scrollIntoView({behavior: 'smooth', block: 'start'});
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
