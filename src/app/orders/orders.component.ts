import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScvServiceService } from '../scv-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  constructor(private route: Router, private service: ScvServiceService) {}

  orders: any;
  viewOrder: any = false;
  singleorder: any;
  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.service.getPartnerByPartner().subscribe((e: any) => {
      this.orders = e;
    });
  }

  orderClick(i: any) {
    this.showOrder();
    this.singleorder = this.orders[i];
    console.log(this.singleorder)
  }

  showOrder() {
    this.viewOrder = true;
  }
  closeOrder() {
    this.viewOrder = false;
  }

  OrderRoute() {
    this.route.navigateByUrl('/consolidated-orders');
  }
}
