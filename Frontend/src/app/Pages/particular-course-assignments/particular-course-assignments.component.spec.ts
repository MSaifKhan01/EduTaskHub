import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularCourseAssignmentsComponent } from './particular-course-assignments.component';

describe('ParticularCourseAssignmentsComponent', () => {
  let component: ParticularCourseAssignmentsComponent;
  let fixture: ComponentFixture<ParticularCourseAssignmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticularCourseAssignmentsComponent]
    });
    fixture = TestBed.createComponent(ParticularCourseAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
