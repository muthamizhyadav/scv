import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSellingPriceComponent } from './set-selling-price.component';

describe('SetSellingPriceComponent', () => {
  let component: SetSellingPriceComponent;
  let fixture: ComponentFixture<SetSellingPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetSellingPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetSellingPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
