import { Component, OnInit } from '@angular/core';
import { ScvServiceService } from '../scv-service.service';

@Component({
  selector: 'app-cart-allocation',
  templateUrl: './cart-allocation.component.html',
  styleUrls: ['./cart-allocation.component.css'],
})
export class CartAllocationComponent implements OnInit {
  constructor(private service: ScvServiceService) {}

  newAllocations: any;
  showallocation: any = false;
  singleCart: any;
  availableSCV: any;
  allocatedSCV: any;
  absentSCVCart: any;
  show_reAllocation: any = false;
  ngOnInit(): void {
    this.getNewAllocation();
    this.getAvailableSCV();
  }

  // Cart Allocations Flow

  getNewAllocation() {
    this.service.getNewAllocations().subscribe((e: any) => {
      this.newAllocations = e.unAllocatedCart;
      this.allocatedSCV = e.AllocatedSCV;
      this.absentSCVCart = e.getAbsentScvCarts;
      console.log(e);
    });
  }

  getAvailableSCV() {
    this.service.getAvailableSCV().subscribe((e: any) => {
      this.availableSCV = e;
    });
  }
  id: any;
  cartid: any;
  scvName: any;
  scvAllocationChange(e: any, cartId: any) {
    this.id = e.target.value;
    this.cartid = cartId;
    let getSelctedData = this.availableSCV.filter((e: any) => {
      if (e._id == this.id) {
        return e;
      }
    });
    this.scvName = getSelctedData[0].Name;
  }

  Allocation() {
    let datas = {
      scvId: this.id,
      cartId: this.cartid,
      scvName: this.scvName,
    };
    // this.showallocation = false;
    this.service.CartAllocationToSCV(datas).subscribe((e: any) => {
      this.showallocation = false;
      this.getNewAllocation();
      this.getAvailableSCV();
    });
  }

  enableAddAlocation(i: any) {
    this.showallocation = true;
    this.singleCart = this.newAllocations[i];
  }

  RemoveScv(cartId: any) {
    console.log(cartId);
    const data = { cartId: cartId };
    this.service.RemoveScvFromCart(data).subscribe((e: any) => {
      this.getNewAllocation();
      this.getAvailableSCV();
      this.show_reAllocation = false;
    });
  }

  singleForRemove: any;
  enableReAllocation(i: any) {
    this.show_reAllocation = true;
    this.singleForRemove = this.absentSCVCart[i];
    console.log(this.singleForRemove);
  }
  disableReAllocation() {
    this.show_reAllocation = false;
  }

  // popups

  showAllocateScv() {
    this.showallocation = true;
  }
  unshowAllocateScv() {
    this.showallocation = false;
  }
}
