import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScvServiceService } from '../scv-service.service';

@Component({
  selector: 'app-closing-stock',
  templateUrl: './closing-stock.component.html',
  styleUrls: ['./closing-stock.component.css'],
})
export class ClosingStockComponent implements OnInit {
  constructor(private route: Router, private service: ScvServiceService) {}

  cartId: any;
  cartName: any;
  date: any;
  orders: any;
  ngOnInit(): void {
    this.getCartDetails();
    this.Dateoperations();
    this.cartDetails();
  }

  getCartDetails() {
    this.service.getActiveCart().subscribe((e: any) => {
      this.cartId = e.cartId;
      this.service.getCartById(this.cartId).subscribe((e: any) => {
        this.cartName = e.cartName;
      });
    });
  }

  // current Date Operations
  currentDate = new Date();

  Dateoperations() {
    const day = String(this.currentDate.getDate()).padStart(2, '0');
    const month = String(this.currentDate.getMonth() + 1).padStart(2, '0');
    const year = this.currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    this.date = formattedDate;
  }

  cartDetails() {
    this.service.getActiveCart().subscribe((e: any) => {
      this.service
        .getOrderedProducts(e.cartId, this.date)
        .subscribe((e: any) => {
          this.orders = e.values;
        });
    });
  }

  returnQty(e: any, data: any) {
    let val = data.returnqty ? data.returnqty : 0;
    if (e == -1) {
      console.log(data, 'Decrease');
      if (val == 0) {
        val = 0;
      } else {
        val = val - 1;
      }
    }
    if (e == 1) {
      val = val + 1;
    }
    data.returnqty = val;
  }

  wastageQty(e: any, data: any) {
    let val = data.wastageqty != null ? data.wastageqty : 0;
    if (e == -1) {
      if (val == 0) {
        val = 0;
      } else {
        val = val - 1;
      }
    }
    if (e == 1) {
      val = val + 1;
    }
    data.wastageqty = val;
  }

  returnChangeqty(e: any, data: any) {
    let value = parseInt(e.target.value);
    data.returnqty = value;
  }
  wastageChangeqty(e: any, data: any) {
    let value = parseInt(e.target.value);
    data.wastageqty = value;
  }

  closeStockSubmit() {
    let data: any[] = [];
    this.orders.map((e: any) => {
      if (e.returnqty || e.wastageqty) {
        data.push(e);
      }
    });
    const dataToServer = { cartId: this.cartId, arr: data };
    console.log(data);
    this.service.closeStock(dataToServer).subscribe((e: any) => {
      this.cartDetails();
      this.route.navigateByUrl('/manage-stock');
    });
  }
  backRoute() {
    this.route.navigateByUrl('/stock-update');
  }
}
