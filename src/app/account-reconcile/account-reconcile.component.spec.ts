import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountReconcileComponent } from './account-reconcile.component';

describe('AccountReconcileComponent', () => {
  let component: AccountReconcileComponent;
  let fixture: ComponentFixture<AccountReconcileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountReconcileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountReconcileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
