import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScvServiceService } from '../scv-service.service';

@Component({
  selector: 'app-scv-attendance-report',
  templateUrl: './scv-attendance-report.component.html',
  styleUrls: ['./scv-attendance-report.component.css'],
})
export class ScvAttendanceReportComponent implements OnInit {
  datesArray: Date[] = [];
  currentDate: any;
  scvId: any;
  today: any;
  history: any;
  cart: any;
  scv: any;
  cartName: any;
  cartNumber: any;
  vehicleName: any;
  attendance: any;
  hour: any;

  constructor(
    private Aroute: ActivatedRoute,
    private service: ScvServiceService,
    private route: Router
  ) {
    this.currentDate = new Date();
  }
  ngOnInit() {
    this.Aroute.queryParams.subscribe((p: any) => {
      this.scvId = p['scvId'];
    });

    this.getDates();
    this.getReports();
  }

  getDates() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    currentDate.setDate(1);
    while (currentDate.getMonth() === currentMonth) {
      this.datesArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    // todayDate
    const currentDateFormat = new Date();

    const day = String(currentDateFormat.getDate()).padStart(2, '0');
    const month = String(currentDateFormat.getMonth() + 1).padStart(2, '0');
    const year = currentDateFormat.getFullYear();
    this.today = `${day}-${month}-${year}`;
  }

  getReports() {
    const data = { date: this.today, scvId: this.scvId };
    this.service.getScv_Attendance_Report(data).subscribe((e: any) => {
      console.log(e);
      this.history = e[0].history;
      this.cart = e[0].cart;
      this.scv = e[0].scv.Name;
      this.cartName = e[0].cart.cartName;
      this.cartNumber = e[0].cart.vehicleNumber;
      this.vehicleName = e[0].cart.vehicleName;
      this.attendance = e;

      const totalSeconds = e[0].totalSeconds;
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const remainingSeconds = totalSeconds % 60;

      const formattedTime = `${hours} h : ${minutes} m`;
      this.hour = formattedTime;
    });
  }

  backRedirect() {
    this.route.navigateByUrl('/scv-attendance');
  }

  @ViewChild('widgetsContent', { read: ElementRef })
  public widgetsContent!: ElementRef<any>;

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft + 150,
      behavior: 'smooth',
    });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft - 150,
      behavior: 'smooth',
    });
  }
}
