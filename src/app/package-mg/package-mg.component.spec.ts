import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageMgComponent } from './package-mg.component';

describe('PackageMgComponent', () => {
  let component: PackageMgComponent;
  let fixture: ComponentFixture<PackageMgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageMgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageMgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
