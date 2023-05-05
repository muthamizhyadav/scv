import { TestBed } from '@angular/core/testing';

import { ScvServiceService } from './scv-service.service';

describe('ScvServiceService', () => {
  let service: ScvServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScvServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
