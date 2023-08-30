import { Component,OnInit } from '@angular/core';
import { BaseServiceService } from 'src/app/services/base-service.service';
import { StudentService } from 'src/app/services/student.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  datas:any[]=[]

  constructor(private BaseService:BaseServiceService,private StudentService:StudentService){}
  ngOnInit(): void {
    this.getallcourse()
  }

  getallcourse(){
    this.BaseService.getAllCourse().subscribe((res)=>{
      this.datas=res.data
    })
  }

  HandleClick(id:number){
    this.StudentService.enrolCourse(id).subscribe((res)=>{
      console.log(res)
      alert(res.msg)
    })
  }

  getStudentcourse(){
    this.StudentService.getStudentCourse().subscribe((res)=>{
      console.log(res)
    })
  }


}