import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnStockComponent } from './add-on-stock.component';

describe('AddOnStockComponent', () => {
  let component: AddOnStockComponent;
  let fixture: ComponentFixture<AddOnStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOnStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOnStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
