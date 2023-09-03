import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAnnouncementComponent } from './get-announcement.component';

describe('GetAnnouncementComponent', () => {
  let component: GetAnnouncementComponent;
  let fixture: ComponentFixture<GetAnnouncementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAnnouncementComponent]
    });
    fixture = TestBed.createComponent(GetAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
