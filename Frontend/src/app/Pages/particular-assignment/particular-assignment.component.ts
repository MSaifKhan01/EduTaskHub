import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-particular-assignment',
  templateUrl: './particular-assignment.component.html',
  styleUrls: ['./particular-assignment.component.css']
})
export class ParticularAssignmentComponent implements OnInit{

  data:any={}
   assid=localStorage.getItem('id')
   link!:string
  constructor(private studentService:StudentService){}
  ngOnInit(): void {
    this.getassignment()
  }

  getassignment(){
    this.studentService.getParticular(this.assid).subscribe((res)=>{
      console.log(res)
      this.data=res.data
    })
  }

  
  HandleClick(id:number){
    let obj={
      submission_link:this.link
    }
    this.studentService.SubmitAssign(obj,id).subscribe((res)=>{
      alert(res.msg)
      this.link=""
      console.log(res)
    })
  }

}
