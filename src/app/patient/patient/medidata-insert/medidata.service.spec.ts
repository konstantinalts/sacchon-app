import { TestBed } from '@angular/core/testing';

import { MedidataService } from './medidata.service';

describe('MedidataService', () => {
  let service: MedidataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedidataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
