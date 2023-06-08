import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScvServiceService } from '../scv-service.service';

@Component({
  selector: 'app-stock-distribution',
  templateUrl: './stock-distribution.component.html',
  styleUrls: ['./stock-distribution.component.css'],
})
export class StockDistributionComponent implements OnInit {
  constructor(private service: ScvServiceService, private route: Router) {}

  cartName: any;
  cartId: any;
  orders: any;
  ngOnInit(): void {
    this.getCartDetails();
  }

  // get current date
  currentDate = new Date();
  day = String(this.currentDate.getDate()).padStart(2, '0');
  month = String(this.currentDate.getMonth() + 1).padStart(2, '0');
  year = this.currentDate.getFullYear();
  formattedDate = `${this.day}/${this.month}/${this.year}`;

  // get Cart Details from server

  getCartDetails() {
    this.service.getActiveCart().subscribe((e: any) => {
      this.cartId = e.cartId;
      this.service.getCartById(e.cartId).subscribe((a: any) => {
        this.cartName = a.cartName;
        this.getOrderByCart();
      });
    });
  }

  // get OrderBy Cart From Server

  getOrderByCart() {
    this.service
      .getOrderedProductByCart(this.cartId, this.formattedDate)
      .subscribe((e: any) => {
        this.orders = e;
      });
  }

  // giveStock

  GiveStock(e: any, data: any) {
    let qty = data.dQty ? data.dQty : 0;
    if (e == -1) {
      if (qty == 0) {
        qty = 0;
      } else {
        qty = qty - 1;
      }
    }
    if (e == 1) {
      qty = qty + 1;
    }
    data.dQty = qty;
  }

  inputChange(e: any, data: any) {
    data.dQty = parseInt(e.target.value);
  }

  submitOrders() {
    let arr: any[] = [];
    this.orders.map((e: any) => {
      if (e.dQty) {
        arr.push(e);
      }
    });
    let serverData = {
      arr: arr,
      cartId: this.cartId,
      cartOnDate: this.formattedDate,
    };
    this.service.GiveStockForProducts(serverData).subscribe((e: any) => {
      console.log(e);
      this.route.navigateByUrl('/manage-stock');
    });
  }
}
