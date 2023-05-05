import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScvAttendanceComponent } from './scv-attendance.component';

describe('ScvAttendanceComponent', () => {
  let component: ScvAttendanceComponent;
  let fixture: ComponentFixture<ScvAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScvAttendanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScvAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
