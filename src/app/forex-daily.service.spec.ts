import { TestBed } from '@angular/core/testing';

import { ForexDailyService } from './forex-daily.service';

describe('ForexDailyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForexDailyService = TestBed.get(ForexDailyService);
    expect(service).toBeTruthy();
  });
});
