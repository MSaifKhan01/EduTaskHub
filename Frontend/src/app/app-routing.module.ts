import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { StudentEnrollDataComponent } from './Pages/student-enroll-data/student-enroll-data.component';
import { AllAssignmentComponent } from './Pages/all-assignment/all-assignment.component';
import { ParticularAssignmentComponent } from './Pages/particular-assignment/particular-assignment.component';
import { InstructorCourcesComponent } from './Pages/instructor-cources/instructor-cources.component';
import { ParticularCourseAssignmentsComponent } from './Pages/particular-course-assignments/particular-course-assignments.component';
import { SubmissionComponent } from './Pages/submission/submission.component';
import { UserprofileComponent } from './Components/userprofile/userprofile.component';
import { AnnouncementComponent } from './Pages/announcement/announcement.component';
import { GetAnnouncementComponent } from './Pages/get-announcement/get-announcement.component';
import { CreateAnnouncementComponent } from './Components/create-announcement/create-announcement.component';

const routes: Routes = [
 
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:"userprofile",component:UserprofileComponent},
  {path:'course',component:StudentEnrollDataComponent},
  {path:'assignment',component:AllAssignmentComponent},
  {path:'particular',component:ParticularAssignmentComponent},
  {path:'instrucCourse',component:InstructorCourcesComponent},
  {path:'courseAssig',component:ParticularCourseAssignmentsComponent},
  {path:'submission',component:SubmissionComponent},
  {path:'announcement',component:AnnouncementComponent},
  {path:'getannouncement',component:GetAnnouncementComponent},
  {path:'createannouncement',component:CreateAnnouncementComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
