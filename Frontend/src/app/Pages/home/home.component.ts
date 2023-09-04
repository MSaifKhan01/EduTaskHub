import { Component,OnInit } from '@angular/core';
import { BaseServiceService } from 'src/app/services/base-service.service';
import { StudentService } from 'src/app/services/student.service';
import Swal from 'sweetalert2';
import { Course } from 'src/app/Models/AllModels';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  datas: Course[] = []
  isloading:boolean=true

  constructor(private BaseService:BaseServiceService,private StudentService:StudentService){}
  ngOnInit(): void {
    this.getallcourse()
  }

  getallcourse(){
    this.BaseService.getAllCourse().subscribe((res:{data:Course[]})=>{
      
      
      this.datas=res.data
      this.isloading=false
    })
  }

  HandleClick(id:number){
    this.StudentService.enrolCourse(id).subscribe((res)=>{
      // localStorage.setItem("token",res.i)
      // console.log(res.data)
      // console.log(res)
      if(res.msg=="You have enrolled successfully"){
        Swal.fire({
          'icon':'success',
          'title':`${res.msg}`,
          'text':'You have enrolled Successfully'
        })
        console.log(res)
      }else{
        console.log(res)
        Swal.fire({
          'icon':'error',
          'title':`${res.msg}`,
          'text':`${res.msg}`
        })
      }
    })
  }

  


}