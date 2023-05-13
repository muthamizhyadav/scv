import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ScvServiceService } from '../scv-service.service';

@Component({
  selector: 'app-post-order',
  templateUrl: './post-order.component.html',
  styleUrls: ['./post-order.component.css'],
})
export class PostOrderComponent implements OnInit {
  numberOfDaysToAdd: any;
  constructor(
    private route: Router,
    private service: ScvServiceService,
    private Toast: ToastrService
  ) {}
  showProduct: any = false;
  list: any = false;
  products: any;
  addProduct: any = [];
  addedProducts: any = [];
  postProducts: any = [];
  checkedval: any = false;
  cartName: any;
  date: any;
  qty: any = 0;
  tomorrow: any;

  activeCartId: any;
  ngOnInit(): void {
    this.fetchProducts();
    this.getActiveCart();
    this.FetchPost_OrderProduct();
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
      this.getActiveCart();
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
      this.service.AddedProduct(this.activeCartId).subscribe((e: any) => {
        this.addedProducts = e;
      });
      this.service.getCartById(e.cartId).subscribe((e: any) => {
        console.log(e);
        this.cartName = e.cartName;
      });
    });
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
    // tomorrow
    let currentDate = new Date();
    const tDay = String(this.currentDate.getDate() + 1).padStart(2, '0');
    const tmonth = String(this.currentDate.getMonth() + 1).padStart(2, '0');
    const tyear = this.currentDate.getFullYear();
    this.tomorrow = `${tDay}/${tmonth}/${tyear}`;
  }

  dateValue: any = 0;
  currentDate: any = new Date();
  // dateChange(method: any) {
  //   if (method == -1) {
  //     this.dateValue = this.dateValue - 1;
  //     this.currentDate.setDate(this.currentDate.getDate() - 1);
  //   }
  //   if (method == 1) {
  //     this.currentDate.setDate(this.currentDate.getDate() + 1);
  //   }
  //   const day = String(this.currentDate.getDate()).padStart(2, '0');
  //   const month = String(this.currentDate.getMonth() + 1).padStart(2, '0');
  //   const year = this.currentDate.getFullYear();
  //   const formattedDate = `${day}/${month}/${year}`;
  //   this.date = formattedDate;
  // }

  // addedProduct;
  ErrorShow() {
    this.Toast.error('Hello world!', 'Toastr fun!');
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
      date: this.tomorrow,
    };
    this.service.createPostOrder(data).subscribe(
      (e: any) => {
        this.postProducts = [];
        this.fetchProducts();
        this.route.navigateByUrl('/cart-order');
      },
      (error) => {
        if (error.status == 400) {
          this.Toast.error(`Already ordered For this Date ${data.date}`);
        }
      }
    );
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