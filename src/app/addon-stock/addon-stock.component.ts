import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScvServiceService } from '../scv-service.service';

@Component({
  selector: 'app-addon-stock',
  templateUrl: './addon-stock.component.html',
  styleUrls: ['./addon-stock.component.css'],
})
export class AddonStockComponent implements OnInit {
  cartId: any;
  cartDetails: any;
  cartName: any;
  orderedProducts: any;
  date: any;
  latestUpdateStock: any;
  constructor(private route: Router, private service: ScvServiceService) {}
  ngOnInit(): void {
    this.getCart();
  }

  currentDate = new Date();

  getCart() {
    const day = String(this.currentDate.getDate()).padStart(2, '0');
    const month = String(this.currentDate.getMonth() + 1).padStart(2, '0');
    const year = this.currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    this.date = formattedDate;
    // APi Call
    this.service.getActiveCart().subscribe((e: any) => {
      this.cartId = e.cartId;
      this.service
        .getOrderedProducts(this.cartId, this.date)
        .subscribe((e: any) => {
          this.cartDetails = e.cartDetails;
          this.orderedProducts = e.values;
          this.cartName = this.cartDetails.cartName;
          this.latestUpdateStock = this.cartDetails.latestUpdateStock;
        });
    });
  }

  AddQTY(num: any, data: any) {
    let item = data.given == null ? 0 : data.given;
    if (num == -1) {
      if (item.given == 0) {
        item = 0;
      } else {
        item = item - 1;
      }
    }
    if (num == 1) {
      item = item + 1;
    }
    data.given = item;
  }

  changeAddQTY(e: any, data: any) {
    data.given = parseInt(e.target.value);
  }

  submitFun() {
    let data: any[] = [];
    this.orderedProducts.map((e: any) => {
      if (e.given) {
        data.push(e);
      }
    });
    // giveStock
    this.service.giveStock(data).subscribe((e: any) => {
      console.log(e);
      this.getCart();
    });
  }

  backRoute() {
    this.route.navigateByUrl('/stock-update');
  }
}
