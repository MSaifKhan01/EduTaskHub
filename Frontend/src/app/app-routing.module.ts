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
import { CeateCourseComponent } from './Components/ceate-course/ceate-course.component';
import { roleGuard } from './RoleGuard/role.guard';
import { authGuardGuard } from './RoleGuard/auth-guard.guard';

const routes: Routes = [
 
  {path:'',canActivate:[roleGuard],component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:"userprofile",canActivate:[authGuardGuard],component:UserprofileComponent},
  {path:'course',canActivate:[authGuardGuard],component:StudentEnrollDataComponent},
  {path:'assignment',canActivate:[authGuardGuard],component:AllAssignmentComponent},
  {path:'particular',canActivate:[authGuardGuard],component:ParticularAssignmentComponent},
  {path:'instrucCourse',canActivate:[authGuardGuard],component:InstructorCourcesComponent},
  {path:'courseAssig',canActivate:[authGuardGuard],component:ParticularCourseAssignmentsComponent},
  {path:'createcourse',canActivate:[authGuardGuard],component:CeateCourseComponent},

  {path:'submission',canActivate:[authGuardGuard],component:SubmissionComponent},
  {path:'announcement',canActivate:[authGuardGuard],component:AnnouncementComponent},
  {path:'getannouncement',canActivate:[authGuardGuard],component:GetAnnouncementComponent},
  {path:'createannouncement',canActivate:[authGuardGuard],component:CreateAnnouncementComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
