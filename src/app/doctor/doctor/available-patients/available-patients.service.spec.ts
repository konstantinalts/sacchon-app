import { TestBed } from '@angular/core/testing';

import { AvailablePatientsService } from './available-patients.service';

describe('AvailablePatientsService', () => {
  let service: AvailablePatientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailablePatientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
