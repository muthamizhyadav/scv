import { Component, OnInit } from '@angular/core';
import { ScvServiceService } from '../scv-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manage-stock',
  templateUrl: './manage-stock.component.html',
  styleUrls: ['./manage-stock.component.css'],
})
export class ManageStockComponent implements OnInit {
  allocatedData: any;
  constructor(private service: ScvServiceService, private route: Router) {}
  ngOnInit(): void {
    this.AllocationData();
  }

  AllocationData() {
    this.service.getNewAllocations().subscribe((e: any) => {
      this.allocatedData = e.AllocatedSCV;
      console.log(this.allocatedData);
    });
  }

  currentDate = new Date();
  day = String(this.currentDate.getDate()).padStart(2, '0');
  month = String(this.currentDate.getMonth() + 1).padStart(2, '0');
  year = this.currentDate.getFullYear();
  formattedDate = `${this.day}/${this.month}/${this.year}`;

  Route_Customer_Order(e: any) {
    let data = { cartId: e };
    this.service.createActiveCart(data).subscribe((e: any) => {
      this.service.getCartById(e.cartId).subscribe((data: any) => {
        if (data.cartOnDate == this.formattedDate) {
          this.route.navigateByUrl('/stock-update');
        } else {
          this.route.navigateByUrl('/cart-on');
        }
      });
    });
  }
}
