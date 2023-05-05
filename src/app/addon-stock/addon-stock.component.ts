import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addon-stock',
  templateUrl: './addon-stock.component.html',
  styleUrls: ['./addon-stock.component.css'],
})
export class AddonStockComponent implements OnInit {
  constructor(private rout: Router) {}
  ngOnInit(): void {}

  backRoute() {
    this.rout.navigateByUrl('/stock-update');
  }
}
