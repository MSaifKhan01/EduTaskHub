import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeateCourseComponent } from './ceate-course.component';

describe('CeateCourseComponent', () => {
  let component: CeateCourseComponent;
  let fixture: ComponentFixture<CeateCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeateCourseComponent]
    });
    fixture = TestBed.createComponent(CeateCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
