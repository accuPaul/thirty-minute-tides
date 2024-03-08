import { TestBed } from '@angular/core/testing';

import { TideDataService } from './tide-data.service';

describe('TideDataService', () => {
  let service: TideDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TideDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
