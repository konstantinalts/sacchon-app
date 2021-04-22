import { TestBed } from '@angular/core/testing';

import { AdvicesService } from './advices.service';

describe('AdvicesService', () => {
  let service: AdvicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
