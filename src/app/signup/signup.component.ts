import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private route: Router, private Authservice: AuthServiceService) {}

  ngOnInit(): void {}

  SignUpForm: any = new FormGroup({
    mobileNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[6-9]{1}[0-9]{9}$'),
    ]),
  });

  submited: any = false;

  signUpAttemp() {
    this.submited = true;
    if (this.SignUpForm.valid) {
      this.Authservice.SignUp(this.SignUpForm.value).subscribe((e: any) => {
        console.log(e);
        Cookie.set('number', this.SignUpForm.value.mobileNumber);
        this.route.navigateByUrl('/otp-verify');
      });
    }
  }

  singIn() {
    this.route.navigateByUrl('/');
  }
}
