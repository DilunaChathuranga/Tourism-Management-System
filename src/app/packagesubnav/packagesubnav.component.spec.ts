import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesubnavComponent } from './packagesubnav.component';

describe('PackagesubnavComponent', () => {
  let component: PackagesubnavComponent;
  let fixture: ComponentFixture<PackagesubnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagesubnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesubnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
