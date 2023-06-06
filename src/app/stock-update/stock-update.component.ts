import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScvServiceService } from '../scv-service.service';

@Component({
  selector: 'app-stock-update',
  templateUrl: './stock-update.component.html',
  styleUrls: ['./stock-update.component.css'],
})
export class StockUpdateComponent implements OnInit {
  cartId: any;
  currentDate = new Date();
  date: any;
  cartDetails: any;
  orderedProducts: any;
  cartName: any;
  latestUpdateStock: any;
  constructor(private route: Router, private service: ScvServiceService) {}
  ngOnInit(): void {
    this.getCart();
  }

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
          this.latestUpdateStock = this.cartDetails.latestUpdateStock;
          this.cartName = this.cartDetails.cartName;
        });
    });
  }

  // StockUpdate

  stockUpdate(e: any, data: any) {
    let item = data.balanceqty ? data.balanceqty : 0;
    if (e == -1) {
      if (item == 0) {
        item = 0;
      } else {
        item = item - 1;
      }
    }
    if (e == 1) {
      item = item + 1;
    }
    data.balanceqty = item;
  }

  stockUpdateChange(e: any, data: any) {
    data.balanceqty = parseInt(e.target.value);
  }

  updateStockSubmit() {
    let message = 'updateStock';
    let data: any[] = [];
    this.orderedProducts.map((e: any) => {
      if (e.balanceqty) {
        data.push(e);
      } else {
        e.balanceqty = e.balanceqty ? e.balanceqty : 0;
        data.push(e);
      }
    });

    let serverData = { arr: data, cartId: this.cartId };
    console.log(serverData);
    this.service.updateBalanceStock(serverData).subscribe((e: any) => {
      this.getCart();
    });
  }

  addOnRoute() {
    this.route.navigateByUrl('/addon-stock');
  }

  closeStock() {
    this.route.navigateByUrl('/closing-stock');
  }
}
