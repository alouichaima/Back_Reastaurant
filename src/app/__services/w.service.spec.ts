import { TestBed } from '@angular/core/testing';

import { WService } from './w.service';

describe('WService', () => {
  let service: WService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
