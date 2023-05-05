import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-update',
  templateUrl: './stock-update.component.html',
  styleUrls: ['./stock-update.component.css'],
})
export class StockUpdateComponent implements OnInit {
  constructor(private route: Router) {}
  ngOnInit(): void {}

  addOnRoute() {
    this.route.navigateByUrl('/addon-stock');
  }
}
