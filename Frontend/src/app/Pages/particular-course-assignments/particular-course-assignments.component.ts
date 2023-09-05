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
  nodata:boolean=false
  images:string='https://img.freepik.com/free-vector/no-data-concept-illustration_114360-616.jpg?w=740&t=st=1693915902~exp=1693916502~hmac=a39fb44291e2cf62f30592c7d7d14266f204d7c17c0867d1d8159d8940c2b0dc'


  constructor(private instructorService:BaseServiceService, private router:Router){}
  ngOnInit(): void { 
    this.getParticularAssignments()
  }

  getParticularAssignments(){
    this.instructorService.particularCourseAssign(this.courseid).subscribe((res:{data:Assingment[]})=>{
      console.log(res)
      this.datas=res.data
      if(this.datas.length==0){
        this.nodata=true
      }
      this.isloading=false
    })
    
  }
  HandleClick(id:any){
    localStorage.setItem('subid',id)
    this.router.navigate(['/submission']).then(()=>{
      window.location.reload()
    })

  }
  changeVisibility=false
  TogleForm(){
    this.changeVisibility=!this.changeVisibility
  }


}
