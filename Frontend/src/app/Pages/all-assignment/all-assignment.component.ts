import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Assingment } from 'src/app/Models/AllModels';

@Component({
  selector: 'app-all-assignment',
  templateUrl: './all-assignment.component.html',
  styleUrls: ['./all-assignment.component.css']
})
export class AllAssignmentComponent implements OnInit{

  datas:Assingment[]=[]
  isloading:boolean=true
  constructor(private studentService:StudentService,private router:Router){}
  ngOnInit(): void {
    this.allAssignments()
  }
  allAssignments(){
    this.studentService.getAllassignment().subscribe((res:{data:Assingment[]})=>{
      this.datas=res.data
      this.isloading=false
      console.log(res)
    })
  }

  HandleClick(id:any){
    localStorage.setItem('id',id)
    this.router.navigate(['/particular'])
  }

}
