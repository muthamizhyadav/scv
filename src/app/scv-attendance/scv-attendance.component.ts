import { Component, OnInit } from '@angular/core';
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
  constructor(private service: ScvServiceService) {}
  ngOnInit(): void {
    this.fetchAllScvAttendace();
    this.Dateoperations();
  }

  fetchAllScvAttendace() {
    this.service.getAllScvAttendance().subscribe((e: any) => {
      this.attendanceData = e;
      console.log(this.attendanceData);
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
    console.log(data);
    if (data.workingStatus == 'yes') {
      this.disablewarning = true;
    }
  }

  currentDate = new Date();
  Dateoperations() {
    const day = String(this.currentDate.getDate()).padStart(2, '0');
    const month = String(this.currentDate.getMonth() + 1).padStart(2, '0');
    const year = this.currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    this.date = formattedDate;
  }

  // popup

  closeWarning() {
    this.disablewarning = false;
  }
}
