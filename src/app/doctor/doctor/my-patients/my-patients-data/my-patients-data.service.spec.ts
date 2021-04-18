import { TestBed } from '@angular/core/testing';

import { MyPatientsDataService } from './my-patients-data.service';

describe('MyPatientsDataService', () => {
  let service: MyPatientsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPatientsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
