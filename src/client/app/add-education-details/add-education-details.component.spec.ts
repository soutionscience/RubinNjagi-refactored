import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEducationDetailsComponent } from './add-education-details.component';

describe('AddEducationDetailsComponent', () => {
  let component: AddEducationDetailsComponent;
  let fixture: ComponentFixture<AddEducationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEducationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEducationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
