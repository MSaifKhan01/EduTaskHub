import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
    StudentDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
