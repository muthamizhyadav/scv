import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonStockComponent } from './addon-stock.component';

describe('AddonStockComponent', () => {
  let component: AddonStockComponent;
  let fixture: ComponentFixture<AddonStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddonStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddonStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
