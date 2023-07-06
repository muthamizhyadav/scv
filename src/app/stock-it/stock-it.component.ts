import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ScvServiceService } from '../scv-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stock-it',
  templateUrl: './stock-it.component.html',
  styleUrls: ['./stock-it.component.css'],
})
export class StockItComponent implements OnInit {
  constructor(
    private route: Router,
    private Aroute: ActivatedRoute,
    private service: ScvServiceService,
    private TOAST: ToastrService
  ) {}
  orderId: any;
  singleOrder: any;
  orderDetails: any;
  vehicleId: any;
  ngOnInit(): void {
    this.Aroute.queryParams.subscribe((e: any) => {
      this.orderId = e.id;
      this.vehicleId = e.vehicleId;
      console.log(this.vehicleId);
    });
    this.getOrders();
  }
  getOrders() {
    this.service.getOrderByOrderId(this.orderId).subscribe((e: any) => {
      (this.singleOrder = e.order.orderId), (this.orderDetails = e.data);
      console.log(this.singleOrder);
    });
  }

  addProductQty(e: any, item: any) {
    let qty = item.receivedQTY == null ? 0 : item.receivedQTY;
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
    item.receivedQTY = qty;
  }

  qtychange(e: any, data: any) {
    data.receivedQTY = parseInt(e.target.value);
  }

  submitData: any[] = [];
  warningMSG: any;
  showWarn: any = false;

  stockItSubmit() {
    this.submitData = [];
    this.orderDetails.forEach((e: any) => {
      if (e.receivedQTY > 0) {
        this.submitData.push(e);
      } else {
        e.receivedQTY = 0;
      }
    });
    if (this.orderDetails.length != this.submitData.length) {
      this.showWarn = true;
      this.warningMSG = `You have ${this.orderDetails.length} Products. But You Enter only ${this.submitData.length} Products`;
    } else {
      let data = {
        arr: this.orderDetails,
        orderId: this.orderId,
        vehicleId: this.vehicleId,
      };
      this.service.ReceivedOrdesSubmit(data).subscribe((e: any) => {
        this.route.navigateByUrl('/orders');
      });
    }
    console.log(this.orderDetails);
    this.TOAST.warning(
      `You have ${this.orderDetails.length} Products. But You Enter only ${this.submitData.length} Products`
    );
  }

  BackRoute() {
    this.route.navigateByUrl('/orders');
  }

  continue() {
    let data = {
      arr: this.orderDetails,
      orderId: this.orderId,
      vehicleId: this.vehicleId,
    };
    this.service.ReceivedOrdesSubmit(data).subscribe((e: any) => {
      this.route.navigateByUrl('/orders');
    });
  }

  closeWarn() {
    this.showWarn = false;
  }

  GiveKg(incdec: any, data: any) {}
}
