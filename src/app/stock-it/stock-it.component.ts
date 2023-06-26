import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ScvServiceService } from '../scv-service.service';

@Component({
  selector: 'app-stock-it',
  templateUrl: './stock-it.component.html',
  styleUrls: ['./stock-it.component.css'],
})
export class StockItComponent implements OnInit {
  constructor(
    private route: Router,
    private Aroute: ActivatedRoute,
    private service: ScvServiceService
  ) {}
  orderId: any;
  singleOrder: any;
  orderDetails: any;
  ngOnInit(): void {
    this.Aroute.queryParams.subscribe((e: any) => {
      this.orderId = e.id;
    });
    this.getOrders();
  }
  getOrders() {
    this.service.getOrderByOrderId(this.orderId).subscribe((e: any) => {
      (this.singleOrder = e.order.orderId), (this.orderDetails = e.data);
      console.log(this.singleOrder);
    });
  }

  GiveKg(incdec: any, data: any) {}
}
