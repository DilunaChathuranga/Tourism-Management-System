import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalSidebarComponent } from './vertical-sidebar.component';

describe('VerticalSidebarComponent', () => {
  let component: VerticalSidebarComponent;
  let fixture: ComponentFixture<VerticalSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
