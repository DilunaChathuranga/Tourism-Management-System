import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentFilterComponent } from './equipment-filter.component';

describe('EquipmentFilterComponent', () => {
  let component: EquipmentFilterComponent;
  let fixture: ComponentFixture<EquipmentFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
