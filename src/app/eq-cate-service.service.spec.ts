import { TestBed, inject } from '@angular/core/testing';

import { EqCateServiceService } from './eq-cate-service.service';

describe('EqCateServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EqCateServiceService]
    });
  });

  it('should be created', inject([EqCateServiceService], (service: EqCateServiceService) => {
    expect(service).toBeTruthy();
  }));
});
