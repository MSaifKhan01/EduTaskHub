import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import Swal from 'sweetalert2';
import { Assingment,Submission } from 'src/app/Models/AllModels';
import { Router } from '@angular/router';

@Component({
  selector: 'app-particular-assignment',
  templateUrl: './particular-assignment.component.html',
  styleUrls: ['./particular-assignment.component.css']
})
export class ParticularAssignmentComponent implements OnInit{

  data:any={}
   assid=localStorage.getItem('id')
   link!:string
   isloading:boolean=true
  constructor(private studentService:StudentService,private router: Router){}
  ngOnInit(): void {
    this.getassignment()
  }

  getassignment(){
    this.studentService.getParticular(this.assid).subscribe((res:{data:Assingment})=>{
      console.log(res)
      this.data=res.data
      this.isloading=false
    })
  }

  
  HandleClick(id:number){
    let obj:Submission={
      submission_link:this.link
    }
    this.studentService.SubmitAssign(obj,id).subscribe((res)=>{
      if (res.msg == "Submitted") {
        this.link=""
        Swal.fire({
          'icon': 'success',
          'title': `${res.msg}`,
          'text': 'Assignment Submitted Successfully'
        })
        this.router.navigate(["/assignment"])
      } else {
        this.link=""
        Swal.fire({
          'icon': 'error',
          'title': `${res.msg}`,
          'text': 'Assignment Already Successfully'
        })
      }
    })
  }

}
