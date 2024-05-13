import { TestBed } from '@angular/core/testing';

import { MenuListeService } from './menu-liste.service';

describe('MenuListeService', () => {
  let service: MenuListeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuListeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
