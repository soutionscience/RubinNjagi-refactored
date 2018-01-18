import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAboutDetailComponent } from './admin-about-detail.component';

describe('AdminAboutDetailComponent', () => {
  let component: AdminAboutDetailComponent;
  let fixture: ComponentFixture<AdminAboutDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAboutDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAboutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
