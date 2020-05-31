import { TestBed, inject } from '@angular/core/testing';

import { PackagecategoryServiceService } from './packagecategory-service.service';

describe('PackagecategoryServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PackagecategoryServiceService]
    });
  });

  it('should be created', inject([PackagecategoryServiceService], (service: PackagecategoryServiceService) => {
    expect(service).toBeTruthy();
  }));
});
