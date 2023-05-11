import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consolidated-orders',
  templateUrl: './consolidated-orders.component.html',
  styleUrls: ['./consolidated-orders.component.css'],
})
export class ConsolidatedOrdersComponent implements OnInit {
  constructor(private route: Router) {}
  ngOnInit(): void {}

  orderRoute() {
    this.route.navigateByUrl('/orders');
  }
}
