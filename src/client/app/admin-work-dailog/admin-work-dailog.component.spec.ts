import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkDailogComponent } from './admin-work-dailog.component';

describe('AdminWorkDailogComponent', () => {
  let component: AdminWorkDailogComponent;
  let fixture: ComponentFixture<AdminWorkDailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkDailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWorkDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
