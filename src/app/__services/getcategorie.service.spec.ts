import { TestBed } from '@angular/core/testing';

import { GetcategorieService } from './getcategorie.service';

describe('GetcategorieService', () => {
  let service: GetcategorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetcategorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
