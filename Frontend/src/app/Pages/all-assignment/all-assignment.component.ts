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
  nodata:boolean=false
  images:string='https://img.freepik.com/free-vector/no-data-concept-illustration_114360-616.jpg?w=740&t=st=1693915902~exp=1693916502~hmac=a39fb44291e2cf62f30592c7d7d14266f204d7c17c0867d1d8159d8940c2b0dc'
  constructor(private studentService:StudentService,private router:Router){}
  ngOnInit(): void {
    this.allAssignments()
  }
  allAssignments(){
    this.studentService.getAllassignment().subscribe((res:{data:Assingment[]})=>{
      this.datas=res.data
      if(this.datas.length==0){
        this.nodata=true
      }
      this.isloading=false
      console.log(res)
    })
  }

  HandleClick(id:any){
    localStorage.setItem('id',id)
    this.router.navigate(['/particular']).then(()=>{
      window.location.reload()
    })
  }

}
