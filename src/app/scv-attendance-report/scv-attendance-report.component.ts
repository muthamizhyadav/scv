import { Component, ElementRef, ViewChild,OnInit } from '@angular/core';

@Component({
  selector: 'app-scv-attendance-report',
  templateUrl: './scv-attendance-report.component.html',
  styleUrls: ['./scv-attendance-report.component.css']
})
export class ScvAttendanceReportComponent implements OnInit {

constructor(){}
ngOnInit(){

}

  @ViewChild('widgetsContent', { read: ElementRef })
  public widgetsContent!: ElementRef<any>;

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 150), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 150), behavior: 'smooth' });
  }
  


  
  

}
