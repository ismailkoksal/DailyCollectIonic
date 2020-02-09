import { TestBed } from '@angular/core/testing';

import { CollectPointsService } from './collect-points.service';

describe('CollectPointsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollectPointsService = TestBed.get(CollectPointsService);
    expect(service).toBeTruthy();
  });
});
