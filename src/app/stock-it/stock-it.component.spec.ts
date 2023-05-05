import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItComponent } from './stock-it.component';

describe('StockItComponent', () => {
  let component: StockItComponent;
  let fixture: ComponentFixture<StockItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockItComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
