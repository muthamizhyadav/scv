import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScvServiceService } from '../scv-service.service';

@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.css'],
})
export class CartOrderComponent implements OnInit {
  activeCartId: any;
  orderDetails: any;
  cartDetails: any;
  constructor(private route: Router, private service: ScvServiceService) {}
  ngOnInit(): void {
    this.getActiveCart();
    // this.fetchOrderDetails();
  }

  getActiveCart() {
    this.service.getActiveCart().subscribe((e: any) => {
      this.activeCartId = e.cartId;
      this.service.getOrders(this.activeCartId).subscribe((e: any) => {
        this.orderDetails = e.orders;
        this.cartDetails = e.cartDetails;
        console.log(this.orderDetails);
      });
    });
  }

  // fetchOrderDetails() {
  //   this.service.getOrders(this.activeCartId).subscribe((e: any) => {
  //     console.log(e);
  //   });
  // }

  postOrderRoute() {
    this.route.navigateByUrl('/post-order');
  }
}
