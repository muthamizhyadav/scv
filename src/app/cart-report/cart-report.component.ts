import { Component, OnInit } from '@angular/core';
import { ScvServiceService } from '../scv-service.service';

@Component({
  selector: 'app-cart-report',
  templateUrl: './cart-report.component.html',
  styleUrls: ['./cart-report.component.css'],
})
export class CartReportComponent implements OnInit {
  cartName: any;
  cartId: any;
  times: any;
  products: any;
  ngOnInit(): void {
    this.cartDetails();
  }
  constructor(private service: ScvServiceService) {}

  cartDetails() {
    this.service.getActiveCart().subscribe((e: any) => {
      this.cartId = e.cartId;
      this.service.getCartById(e.cartId).subscribe((a: any) => {
        console.log(a);
        this.cartName = a.cartName;
      });
      this.service.getCartReport(this.cartId).subscribe((e: any) => {
        console.log(e);
        this.times = e[0].time;
        this.products = e[0].products;
      });
    });
  }
}
