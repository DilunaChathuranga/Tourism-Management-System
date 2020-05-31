import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquSubnavComponent } from './equ-subnav.component';

describe('EquSubnavComponent', () => {
  let component: EquSubnavComponent;
  let fixture: ComponentFixture<EquSubnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquSubnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquSubnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
