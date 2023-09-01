import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorCourcesComponent } from './instructor-cources.component';

describe('InstructorCourcesComponent', () => {
  let component: InstructorCourcesComponent;
  let fixture: ComponentFixture<InstructorCourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorCourcesComponent]
    });
    fixture = TestBed.createComponent(InstructorCourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
