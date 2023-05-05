import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Cookie } from 'ng2-cookies/cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private route: Router, private AuthService: AuthServiceService) {}
  ngOnInit(): void {}

  form: any = new FormGroup({
    mobileNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[6-9]{1}[0-9]{9}$'),
    ]),
    password: new FormControl('', [Validators.required]),
  });

  submitted: any = false;
  incorrect: any = false;
  loginAttempt() {
    this.submitted = true;
    if (this.form.valid) {
      this.AuthService.login(this.form.value).subscribe(
        (e: any) => {
          console.log(e)
          Cookie.set('token',e.token.refresh.token)
          this.route.navigateByUrl('/manage-stock')
        },
        (error) => {
          if (error.error.message == 'Incorrect email or password') {
            this.incorrect = true;
          }
        }
      );
    }
  }

  loginRoute() {
    this.route.navigateByUrl('/signup');
  }
}
