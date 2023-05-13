import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOnComponent } from './cart-on.component';

describe('CartOnComponent', () => {
  let component: CartOnComponent;
  let fixture: ComponentFixture<CartOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartOnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
