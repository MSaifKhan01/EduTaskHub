import { Component, OnInit } from '@angular/core';
import { BaseServiceService } from 'src/app/services/base-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-instructor-cources',
  templateUrl: './instructor-cources.component.html',
  styleUrls: ['./instructor-cources.component.css']
})
export class InstructorCourcesComponent implements OnInit{
  datas:any[]=[]
  constructor(private instructorService:BaseServiceService,private router:Router){}
  ngOnInit(): void {
    this.getInstructorCourses()
  }

  getInstructorCourses(){
    this.instructorService.getInstructorCourse().subscribe((res)=>{
      this.datas=res.data
      console.log(res)
    })
  }
  HandleClick(id:any){
    localStorage.setItem('id',id)
    this.router.navigate(['/courseAssig'])
  }

}
