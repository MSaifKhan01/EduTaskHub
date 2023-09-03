import { Component, OnInit } from '@angular/core';
import { BaseServiceService } from 'src/app/services/base-service.service';
import { Assingment } from 'src/app/Models/AllModels';
import { Router } from '@angular/router';
@Component({
  selector: 'app-particular-course-assignments',
  templateUrl: './particular-course-assignments.component.html',
  styleUrls: ['./particular-course-assignments.component.css']
})
export class ParticularCourseAssignmentsComponent implements OnInit{

  courseid=localStorage.getItem("id")||""
  datas:Assingment[]=[]
  isloading:boolean=true


  constructor(private instructorService:BaseServiceService, private router:Router){}
  ngOnInit(): void { 
    this.getParticularAssignments()
  }

  getParticularAssignments(){
    this.instructorService.particularCourseAssign(this.courseid).subscribe((res:{data:Assingment[]})=>{
      console.log(res)
      this.datas=res.data
      this.isloading=false
    })
    
  }
  HandleClick(id:any){
    localStorage.setItem('subid',id)
    this.router.navigate(['/submission'])

  }
  changeVisibility=false
  TogleForm(){
    this.changeVisibility=!this.changeVisibility
  }


}
