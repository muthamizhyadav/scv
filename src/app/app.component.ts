import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  title = 'scv';
  authenticated: any = true;
  isLoginPage: any = false;
  route: any = this.router;
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage =
          event.url === '/' ||
          event.url === '/signup' ||
          event.url === '/otp-verify' ||
          event.url === '/set-password' ||
          event.url === '/forgot-password';
      }
    });
  }
}
