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

const routes: Routes = [
  // { path: 'homepage', component: HomeComponent },
  // { path: '', pathMatch: 'full', redirectTo: 'homepage' },
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'course',component:StudentEnrollDataComponent},
  {path:'assignment',component:AllAssignmentComponent},
  {path:'particular',component:ParticularAssignmentComponent},
  {path:'instrucCourse',component:InstructorCourcesComponent},
  {path:'courseAssig',component:ParticularCourseAssignmentsComponent},
  {path:'submission',component:SubmissionComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
