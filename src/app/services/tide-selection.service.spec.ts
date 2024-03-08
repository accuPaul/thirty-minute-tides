import { TestBed } from '@angular/core/testing';

import { TideSelectionService } from './tide-selection.service';

describe('TideSelectionService', () => {
  let service: TideSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TideSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
