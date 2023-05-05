import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageScvComponent } from './manage-scv.component';

describe('ManageScvComponent', () => {
  let component: ManageScvComponent;
  let fixture: ComponentFixture<ManageScvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageScvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageScvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
