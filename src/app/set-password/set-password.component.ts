import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/cookie';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css'],
})
export class SetPasswordComponent implements OnInit {
  constructor(private service: AuthServiceService, private route: Router) {}
  ngOnInit(): void {}

  SetPassWordForm: any = new FormGroup({
    Password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    mobileNumber: new FormControl(parseInt(Cookie.get('number'))),
  });

  submitted: any = false;
  confirmPWD: any = false;
  SetPasswordAttemp() {
    this.submitted = true;
    if (this.SetPassWordForm.valid) {
      if (
        this.SetPassWordForm.get('Password').value !=
        this.SetPassWordForm.get('confirmPassword').value
      ) {
        this.confirmPWD = true;
      } else {
        this.confirmPWD = false;
      }
      this.service
        .SetPassword(this.SetPassWordForm.value)
        .subscribe((e: any) => {
          this.route.navigateByUrl('/');
        });
      console.log(this.SetPassWordForm.value);
    }
  }
}
