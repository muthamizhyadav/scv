import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuddenOrderComponent } from './sudden-order.component';

describe('SuddenOrderComponent', () => {
  let component: SuddenOrderComponent;
  let fixture: ComponentFixture<SuddenOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuddenOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuddenOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
