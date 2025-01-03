import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScvServiceService } from '../scv-service.service';

@Component({
  selector: 'app-scv-attendance',
  templateUrl: './scv-attendance.component.html',
  styleUrls: ['./scv-attendance.component.css'],
})
export class ScvAttendanceComponent implements OnInit {
  popup = false;
  attendanceData: any;
  disablewarning: any = false;
  date: any;
  constructor(private service: ScvServiceService, private route: Router) {}
  ngOnInit(): void {
    this.fetchAllScvAttendace();
    this.Dateoperations();
  }

  fetchAllScvAttendace() {
    this.service.getAllScvAttendance().subscribe((e: any) => {
      this.attendanceData = e;
    });
  }

  active: any;

  checked(val: any) {
    if (val === true) {
      return false;
    } else {
      return true;
    }
  }

  active_InActive_Change(e: any) {
    let data = this.attendanceData[e];
    let status = '';
    if (data.attendance == false) {
      console.log('IN');
      status = 'IN';
    } else {
      console.log('OUT');
      status = 'OUT';
    }
    const dataToserver = { type: status, scvId: data._id };
    console.log(dataToserver);
    this.service.getCartOnDetails(dataToserver.scvId).subscribe((e: any) => {
      console.log(e);
      if (this.date == e.cartOnDate) {
        this.disablewarning = true;
        console.log('same date');
      } else {
        this.service.UpdateAttendance(dataToserver).subscribe((a: any) => {
          this.fetchAllScvAttendace();
        });
      }
    });
  }

  currentDate = new Date();
  Dateoperations() {
    const day = String(this.currentDate.getDate()).padStart(2, '0');
    const month = String(this.currentDate.getMonth() + 1).padStart(2, '0');
    const year = this.currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    this.date = formattedDate;
  }

  close_StockRedirect() {
    this.route.navigateByUrl('/stock-update');
  }

  // popup

  closeWarning() {
    this.disablewarning = false;
    this.fetchAllScvAttendace();
  }

  report_Redirect(id: any) {
    this.route.navigateByUrl(`scv-attendance-report?scvId=${id}`);
  }
}
