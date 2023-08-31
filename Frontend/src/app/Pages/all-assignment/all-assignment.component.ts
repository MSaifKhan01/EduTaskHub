import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-all-assignment',
  templateUrl: './all-assignment.component.html',
  styleUrls: ['./all-assignment.component.css']
})
export class AllAssignmentComponent implements OnInit{

  datas:any[]=[]
  constructor(private studentService:StudentService,private router:Router){}
  ngOnInit(): void {
    this.allAssignments()
  }
  allAssignments(){
    this.studentService.getAllassignment().subscribe((res)=>{
      this.datas=res.data
    })
  }

  HandleClick(id:any){
    localStorage.setItem('id',id)
    this.router.navigate(['/particular'])
  }

}
