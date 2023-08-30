import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEnrollDataComponent } from './student-enroll-data.component';

describe('StudentEnrollDataComponent', () => {
  let component: StudentEnrollDataComponent;
  let fixture: ComponentFixture<StudentEnrollDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentEnrollDataComponent]
    });
    fixture = TestBed.createComponent(StudentEnrollDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
