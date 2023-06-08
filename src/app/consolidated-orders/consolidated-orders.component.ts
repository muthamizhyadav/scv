import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ScvServiceService } from '../scv-service.service';

@Component({
  selector: 'app-consolidated-orders',
  templateUrl: './consolidated-orders.component.html',
  styleUrls: ['./consolidated-orders.component.css'],
})
export class ConsolidatedOrdersComponent implements OnInit {
  currentDate: any;
  tomorrow: any;
  today: any;
  orderView: any = false;
  showError: any = false;
  qtyCount: any = 0;
  priceCount: any = 0;
  showProduct: any = false;
  AllProducts: any[] = [];
  constructor(
    private route: Router,
    private service: ScvServiceService,
    private Toast: ToastrService
  ) {}

  products: any[] = [];

  ngOnInit(): void {
    this.dateoperation();
    this.getProducts();
  }
  dateoperation() {
    let currentDate = new Date();
    const tDay = String(currentDate.getDate() + 1).padStart(2, '0');
    const tmonth = String(currentDate.getMonth() + 1).padStart(2, '0');
    const tyear = currentDate.getFullYear();
    this.tomorrow = `${tDay}/${tmonth}/${tyear}`;

    // today
    const Day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    this.today = `${Day}/${month}/${year}`;
  }

  getProducts() {
    this.service
      .getProducts_For_PartnerOrder(this.tomorrow)
      .subscribe((e: any) => {
        this.products = e;
      });
  }

  AddQty(e: any, data: any) {
    let totalqty = data.totalqty ? data.totalqty : 0;
    if (e == -1) {
      if (totalqty == 0) {
        totalqty = 0;
      } else {
        totalqty = totalqty - 1;
      }
    }
    if (e == 1) {
      totalqty = totalqty + 1;
    }
    data.totalqty = totalqty;
  }

  changeInput(e: any, data: any) {
    data.totalqty = parseInt(e.target.value);
  }

  RaiseOrder() {
    // let data: any[] = [];
    // this.products.map((e: any) => {
    //   if (e.totalqty) {
    //     data.push(e);
    //   }
    // });
    // let serverData = {
    //   arr: data,
    //   todayDate: this.today,
    //   tomorrowDate: this.tomorrow,
    // };
    // console.log(serverData);
    this.PreviewOrders();
    // this.service.createOrdersFromAdmin(serverData).subscribe((e: any) => {
    //   console.log(e);
    // });
  }

  AgreedPrice(e: any, data: any) {
    let price = data.price ? data.price : 0;
    if (e == -1) {
      if (price == 0) {
        price = 0;
      } else {
        price = price - 1;
      }
    }
    if (e == 1) {
      price = price + 1;
      data.price = price;
    }
    console.log(this.products);
  }
  changePrice(e: any, data: any) {
    data.price = parseInt(e.target.value);
  }

  submitOrder() {
    let data: any[] = [];
    this.qtyCount = 0;
    this.priceCount = 0;
    this.products.map((e: any) => {
      if (e.totalqty) {
        this.qtyCount = this.qtyCount + 1;
      }
      if (e.price) {
        this.priceCount = this.priceCount + 1;
      }
      if (e.price && e.totalqty) {
        data.push(e);
      }
    });

    let serverData = {
      arr: data,
      todayDate: this.today,
      tomorrowDate: this.tomorrow,
    };
    console.log(serverData);
    if (this.qtyCount == this.priceCount) {
      this.service.createOrdersFromAdmin(serverData).subscribe((e: any) => {
        this.showError = false;
        this.closePreview();
        this.getProducts();
        this.orderRoute()
      });
    } else {
      this.showError = true;
    }
  }

  orderRoute() {
    this.route.navigateByUrl('/orders');
  }

  dummyProduct: any;
  dum: any;
  FetchProduct() {
    this.service.FetchProduct().subscribe((e: any) => {
      e.map((a: any) => {
        let findind = this.products.findIndex((w: any) => {
          return w.productId == a._id;
        });
        if (findind == -1) {
          this.AllProducts.push(a);
        }
      });
    });
  }

  clickProduct() {
    this.showProduct = true;
    this.FetchProduct();
  }

  tempData: any[] = [];

  selectProduct(e: any, productName: any) {
    let ind = this.products.findIndex((a: any) => {
      return a.productId == e;
    });
    if (ind == -1) {
      this.products.push({
        productId: e,
        productName: productName,
        scvKG: 0,
      });
    }
    if (ind != -1) {
      this.products.splice(ind, 1);
      console.log('splice');
    }
  }

  addProd() {
    console.log(this.tempData);
    this.products = this.products.concat(this.tempData);
    this.showProduct = false;
    // this.tempData = [];
  }

  Checked(id: any) {
    let val = this.products.findIndex((a: any) => {
      return a.productId == id;
    });
    if (val != -1) {
      return true;
    } else {
      return false;
    }
  }

  list: any = false;

  onSelectionChange() {
    this.list = !this.list;
  }

  PreviewOrders() {
    this.orderView = true;
  }
  closePreview() {
    this.orderView = false;
  }
  clostProduct() {
    this.showProduct = false;
  }
}
