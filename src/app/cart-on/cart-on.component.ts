import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScvServiceService } from '../scv-service.service';
@Component({
  selector: 'app-cart-on',
  templateUrl: './cart-on.component.html',
  styleUrls: ['./cart-on.component.css'],
})
export class CartOnComponent implements OnInit {
  constructor(private service: ScvServiceService, private route: Router) {}
  cartName: any;
  cartId: any;
  ngOnInit(): void {
    this.getCart();
  }

  currentDate = new Date();
  day = String(this.currentDate.getDate()).padStart(2, '0');
  month = String(this.currentDate.getMonth() + 1).padStart(2, '0');
  year = this.currentDate.getFullYear();
  formattedDate = `${this.day}/${this.month}/${this.year}`;

  getCart() {
    this.service.getActiveCart().subscribe((e: any) => {
      this.cartId = e.cartId;
      this.service.getCartById(this.cartId).subscribe((s: any) => {
        console.log(s);
        this.cartName = s.cartName;
      });
    });
  }

  enableCart(cartId: any) {
    console.log(cartId);
    let data = { cartOnDate: this.formattedDate };
    this.service.EditeScvCart(cartId, data).subscribe((e: any) => {
      this.route.navigateByUrl('/stock-distribution');
    });
  }
}
