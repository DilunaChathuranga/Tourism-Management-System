import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageManageComponent } from './package-manage.component';

describe('PackageManageComponent', () => {
  let component: PackageManageComponent;
  let fixture: ComponentFixture<PackageManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
