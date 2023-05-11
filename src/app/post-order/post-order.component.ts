import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScvServiceService } from '../scv-service.service';

@Component({
  selector: 'app-post-order',
  templateUrl: './post-order.component.html',
  styleUrls: ['./post-order.component.css'],
})
export class PostOrderComponent implements OnInit {
  numberOfDaysToAdd: any;
  constructor(private route: Router, private service: ScvServiceService) {}
  showProduct: any = false;
  list: any = false;
  products: any;
  addProduct: any = [];
  addedProducts: any = [];
  postProducts: any = [];
  checkedval: any = false;
  date: any;
  qty: any = 0;

  activeCartId: any;
  ngOnInit(): void {
    this.fetchProducts();
    this.getActiveCart();
    this.FetchPost_OrderProduct();
    this.fetchAddedProduct();
    this.dateOperations();
  }

  fetchProducts() {
    this.service.FetchProduct().subscribe((e: any) => {
      this.products = e;
    });
  }

  onSelectionChange() {
    this.list = !this.list;
  }

  selectProduct(e: any) {
    if (e.target.checked) {
      this.addProduct.push(e.target.value);
      console.log(this.addProduct);
    } else {
      let index = this.addProduct.indexOf(e.target.value);
      this.addProduct.splice(index, 1);
    }
  }

  AddProductToServer() {
    let products = { product: this.addProduct, cartId: this.activeCartId };
    this.service.addProduct(products).subscribe((e: any) => {
      this.showProduct = false;
      this.list = false;
    });
  }

  checked(val: any) {
    let i = this.addedProducts.findIndex((e: any) => {
      return e._id == val;
    });
    if (i == -1) {
      return false;
    } else {
      return true;
    }
  }

  FetchPost_OrderProduct() {}

  getActiveCart() {
    this.service.getActiveCart().subscribe((e: any) => {
      this.activeCartId = e.cartId;
    });
  }
  fetchAddedProduct() {
    this.activeCartId;
    setTimeout(() => {
      this.service.AddedProduct(this.activeCartId).subscribe((e: any) => {
        this.addedProducts = e;
       
      });
    }, 1000);
  }

  addProductQty(e: any, item: any) {
    let qty = item.qty == null ? 0 : item.qty;
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
    item.qty = qty;
  }

  qtychange(e: any, data: any) {
    data.qty = e.target.value;
  }

  dateOperations() {
    this.date = new Date();
    const day = String(this.date.getDate()).padStart(2, '0');
    const month = String(this.date.getMonth() + 1).padStart(2, '0');
    const year = this.date.getFullYear();
    this.date = `${day}/${month}/${year}`;
  }

  dateValue: any = 0;
  currentDate: any = new Date();
  dateChange(method: any) {
    if (method == -1) {
      this.dateValue = this.dateValue - 1;
      this.currentDate.setDate(this.currentDate.getDate() - 1);
    }
    if (method == 1) {
      this.currentDate.setDate(this.currentDate.getDate() + 1);
    }
    const day = String(this.currentDate.getDate()).padStart(2, '0');
    const month = String(this.currentDate.getMonth() + 1).padStart(2, '0');
    const year = this.currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    this.date = formattedDate;
  }

  postOrderSubmit() {
    this.addedProducts.map((e: any) => {
      if (e.qty) {
        this.postProducts.push(e);
      }
    });
    const data = {
      products: this.postProducts,
      cartId: this.activeCartId,
      date: this.date,
    };

    this.service.createPostOrder(data).subscribe((e: any) => {
      this.postProducts = [];
      this.fetchProducts();
    });
  }

  productClick() {
    this.showProduct = true;
  }
  clostProduct() {
    this.showProduct = false;
  }
  closeList() {
    this.list = false;
  }
}
