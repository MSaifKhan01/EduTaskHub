import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './Pages/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { StudentEnrollDataComponent } from './Pages/student-enroll-data/student-enroll-data.component';
import { ParticularAssignmentComponent } from './Pages/particular-assignment/particular-assignment.component';
import { AllAssignmentComponent } from './Pages/all-assignment/all-assignment.component';
import { StudentDashboardComponent } from './Components/student-dashboard/student-dashboard.component';
import { CeateAssignmentComponent } from './Components/ceate-assignment/ceate-assignment.component';
import { CeateCourseComponent } from './Components/ceate-course/ceate-course.component';
import { InstructorCourcesComponent } from './Pages/instructor-cources/instructor-cources.component';
import { ParticularCourseAssignmentsComponent } from './Pages/particular-course-assignments/particular-course-assignments.component';
import { SubmissionComponent } from './Pages/submission/submission.component';
import { InstructorDashboardComponent } from './Components/instructor-dashboard/instructor-dashboard.component';
import { LoaderComponent } from './Components/loader/loader.component';
import { UserprofileComponent } from './Components/userprofile/userprofile.component';
import { CreateAnnouncementComponent } from './Components/create-announcement/create-announcement.component';
import { AnnouncementComponent } from './Pages/announcement/announcement.component';
import { GetAnnouncementComponent } from './Pages/get-announcement/get-announcement.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    StudentEnrollDataComponent,
    ParticularAssignmentComponent,
    AllAssignmentComponent,
    StudentDashboardComponent,
    CeateAssignmentComponent,
    CeateCourseComponent,
    InstructorCourcesComponent,
    ParticularCourseAssignmentsComponent,
    SubmissionComponent,
    InstructorDashboardComponent,
    LoaderComponent,
    UserprofileComponent,
    CreateAnnouncementComponent,
    AnnouncementComponent,
    GetAnnouncementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
