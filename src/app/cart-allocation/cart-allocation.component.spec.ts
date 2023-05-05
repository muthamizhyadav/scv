import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartAllocationComponent } from './cart-allocation.component';

describe('CartAllocationComponent', () => {
  let component: CartAllocationComponent;
  let fixture: ComponentFixture<CartAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartAllocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
