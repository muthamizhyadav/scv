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
  constructor(private service: ScvServiceService) {}
  ngOnInit(): void {
    this.fetchAllScvAttendace();
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

  // popup

  closeWarning(){
    this.disablewarning = false
  }

}
