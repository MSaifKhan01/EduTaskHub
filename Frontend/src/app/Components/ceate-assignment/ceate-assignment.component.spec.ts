import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeateAssignmentComponent } from './ceate-assignment.component';

describe('CeateAssignmentComponent', () => {
  let component: CeateAssignmentComponent;
  let fixture: ComponentFixture<CeateAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeateAssignmentComponent]
    });
    fixture = TestBed.createComponent(CeateAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
