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

}
