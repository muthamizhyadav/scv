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

  Route_Customer_Order() {
    this.route.navigateByUrl('/customer-order');
  }
}
