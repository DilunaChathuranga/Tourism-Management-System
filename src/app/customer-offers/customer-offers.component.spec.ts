import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOffersComponent } from './customer-offers.component';

describe('CustomerOffersComponent', () => {
  let component: CustomerOffersComponent;
  let fixture: ComponentFixture<CustomerOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
