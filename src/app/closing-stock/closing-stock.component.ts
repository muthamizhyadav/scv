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
  ngOnInit(): void {
    this.getCartDetails();
    this.Dateoperations();
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

  backRoute() {
    this.route.navigateByUrl('/stock-update');
  }
}
