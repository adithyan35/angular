import { TestBed } from '@angular/core/testing';

import { SproductServicesService } from './sproduct-services.service';

describe('SproductServicesService', () => {
  let service: SproductServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SproductServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
