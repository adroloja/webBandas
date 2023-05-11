import { TestBed } from '@angular/core/testing';

import { DataBandaService } from './data-banda.service';

describe('DataBandaService', () => {
  let service: DataBandaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBandaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
