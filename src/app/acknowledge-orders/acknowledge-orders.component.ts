import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acknowledge-orders',
  templateUrl: './acknowledge-orders.component.html',
  styleUrls: ['./acknowledge-orders.component.css'],
})
export class AcknowledgeOrdersComponent implements OnInit {
  constructor(private route: Router) {}
  ngOnInit(): void {}

  EditRoute() {
    this.route.navigateByUrl('/edit-orders');
  }
}
