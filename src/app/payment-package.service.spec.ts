import { TestBed, inject } from '@angular/core/testing';

import { PaymentPackageService } from './payment-package.service';

describe('PaymentPackageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentPackageService]
    });
  });

  it('should be created', inject([PaymentPackageService], (service: PaymentPackageService) => {
    expect(service).toBeTruthy();
  }));
});
