import { TestBed } from '@angular/core/testing';

import { MenuitemService } from './menuitem.service';

describe('MenuitemService', () => {
  let service: MenuitemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuitemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
