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
  stockit: any = false;
  orderProducts: any;
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
    console.log(this.singleorder);
  }

  showStockItClick(i: any) {
    this.stockit = true;
    this.singleorder = this.orders[i];
    this.orderProducts = this.orders[i].orderProducts;
    console.log(this.orderProducts);
  }

  StockItPageRoute(id: any, vehicleId: any) {
    this.route.navigateByUrl(`/stockit?id=${id}&vehicleId=${vehicleId}`);
  }

  closeShowStockIt() {
    this.stockit = false;
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
