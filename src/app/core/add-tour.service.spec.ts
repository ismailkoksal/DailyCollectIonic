import { TestBed } from '@angular/core/testing';

import { AddTourService } from './add-tour.service';

describe('AddTourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddTourService = TestBed.get(AddTourService);
    expect(service).toBeTruthy();
  });
});
