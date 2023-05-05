import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcknowledgeOrdersComponent } from './acknowledge-orders.component';

describe('AcknowledgeOrdersComponent', () => {
  let component: AcknowledgeOrdersComponent;
  let fixture: ComponentFixture<AcknowledgeOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcknowledgeOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcknowledgeOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
