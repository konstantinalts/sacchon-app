import { TestBed } from '@angular/core/testing';

import { MyPatientsService } from './my-patients.service';

describe('MyPatientsService', () => {
  let service: MyPatientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPatientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
