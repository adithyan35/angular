import { TestBed } from '@angular/core/testing';

import { ServicesprodService } from './servicesprod.service';

describe('ServicesprodService', () => {
  let service: ServicesprodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesprodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
