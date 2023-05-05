import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css'],
})
export class VerifyOtpComponent implements OnInit {
  constructor(private route: Router, private AuthService: AuthServiceService) {}
  ngOnInit(): void {}

  VerifyForm: any = new FormGroup({
    OTP: new FormControl(null, [Validators.required]),
  });
  submited: any = false;

  VerifyAttempt() {
    this.submited = true;
    if (this.VerifyForm.valid) {
      this.AuthService.verify_OTP(this.VerifyForm.value).subscribe((e: any) => {
        this.route.navigateByUrl('/set-password');
        console.log(e);
      });
    }
  }
}
