import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private route: Router, private activeRoute: ActivatedRoute) {}
  currentRoute: any;
  ngOnInit(): void {}
}
