import { Component, OnInit } from '@angular/core';
import { BaseServiceService } from 'src/app/services/base-service.service';
import { Router } from '@angular/router';
import { Course } from 'src/app/Models/AllModels';
@Component({
  selector: 'app-instructor-cources',
  templateUrl: './instructor-cources.component.html',
  styleUrls: ['./instructor-cources.component.css']
})
export class InstructorCourcesComponent implements OnInit{
  datas:Course[]=[]
  isloading:boolean=true
  constructor(private instructorService:BaseServiceService,private router:Router){}
  ngOnInit(): void {
    this.getInstructorCourses()
  }

  getInstructorCourses(){
    this.instructorService.getInstructorCourse().subscribe((res:{data:Course[]})=>{
      // alert()
      this.datas=res.data
      this.isloading=false
      localStorage.setItem("instructordata",JSON.stringify(res.data))
      console.log(res)
    })
  }
  SeeAssignment(id:any){
    localStorage.setItem('id',id)
    this.router.navigate(['/courseAssig']).then(()=>{
      window.location.reload()
    })

  }
  // CreateAssignment(id:any){
  //   localStorage.setItem('id',id)
  //   this.router.navigate(['/courseAssig'])

  // }

}
