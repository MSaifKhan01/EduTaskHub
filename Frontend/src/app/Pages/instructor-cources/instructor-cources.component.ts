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
  nodata:boolean=false
  images:string='https://img.freepik.com/free-vector/no-data-concept-illustration_114360-616.jpg?w=740&t=st=1693915902~exp=1693916502~hmac=a39fb44291e2cf62f30592c7d7d14266f204d7c17c0867d1d8159d8940c2b0dc'
  constructor(private instructorService:BaseServiceService,private router:Router){}
  ngOnInit(): void {
    this.getInstructorCourses()
  }

  getInstructorCourses(){
    this.instructorService.getInstructorCourse().subscribe((res:{data:Course[]})=>{
      // alert()
      this.datas=res.data
      if(this.datas.length==0){
this.nodata=true
      }
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
