import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScvAttendanceReportComponent } from './scv-attendance-report.component';

describe('ScvAttendanceReportComponent', () => {
  let component: ScvAttendanceReportComponent;
  let fixture: ComponentFixture<ScvAttendanceReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScvAttendanceReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScvAttendanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
