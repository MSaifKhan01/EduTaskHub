import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAssignmentComponent } from './all-assignment.component';

describe('AllAssignmentComponent', () => {
  let component: AllAssignmentComponent;
  let fixture: ComponentFixture<AllAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllAssignmentComponent]
    });
    fixture = TestBed.createComponent(AllAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
