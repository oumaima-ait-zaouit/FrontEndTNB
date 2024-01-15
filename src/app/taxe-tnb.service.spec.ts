import { TestBed } from '@angular/core/testing';

import { TaxeTNBService } from './taxe-tnb.service';

describe('TaxeTNBService', () => {
  let service: TaxeTNBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxeTNBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
