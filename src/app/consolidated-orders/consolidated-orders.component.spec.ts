import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidatedOrdersComponent } from './consolidated-orders.component';

describe('ConsolidatedOrdersComponent', () => {
  let component: ConsolidatedOrdersComponent;
  let fixture: ComponentFixture<ConsolidatedOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsolidatedOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsolidatedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
