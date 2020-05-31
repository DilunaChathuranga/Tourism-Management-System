import { TestBed, inject } from '@angular/core/testing';

import { OfferCategoryService } from './offer-category.service';

describe('OfferCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfferCategoryService]
    });
  });

  it('should be created', inject([OfferCategoryService], (service: OfferCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
