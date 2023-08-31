import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularAssignmentComponent } from './particular-assignment.component';

describe('ParticularAssignmentComponent', () => {
  let component: ParticularAssignmentComponent;
  let fixture: ComponentFixture<ParticularAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticularAssignmentComponent]
    });
    fixture = TestBed.createComponent(ParticularAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
