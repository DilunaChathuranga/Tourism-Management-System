import { TestBed, inject } from '@angular/core/testing';

import { EmployeeCategoriesService } from './employee-categories.service';

describe('EmployeeCategoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeCategoriesService]
    });
  });

  it('should be created', inject([EmployeeCategoriesService], (service: EmployeeCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
