import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOrderComponent } from './post-order.component';

describe('PostOrderComponent', () => {
  let component: PostOrderComponent;
  let fixture: ComponentFixture<PostOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
