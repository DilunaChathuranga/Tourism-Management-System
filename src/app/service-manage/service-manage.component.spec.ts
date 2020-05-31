import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceManageComponent } from './service-manage.component';

describe('ServiceManageComponent', () => {
  let component: ServiceManageComponent;
  let fixture: ComponentFixture<ServiceManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
