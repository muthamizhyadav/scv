import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartReportComponent } from './cart-report.component';

describe('CartReportComponent', () => {
  let component: CartReportComponent;
  let fixture: ComponentFixture<CartReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
