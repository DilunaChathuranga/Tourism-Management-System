import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfSubnavComponent } from './prof-subnav.component';

describe('ProfSubnavComponent', () => {
  let component: ProfSubnavComponent;
  let fixture: ComponentFixture<ProfSubnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfSubnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfSubnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
