import { Component } from '@angular/core';

import { BaseServiceService } from 'src/app/services/base-service.service';

@Component({
  selector: 'app-ceate-assignment',
  templateUrl: './ceate-assignment.component.html',
  styleUrls: ['./ceate-assignment.component.css']
})
export class CeateAssignmentComponent {

  courseid=localStorage.getItem("id")||""
  title!:string
  description!:string
  end_date!:any
  constructor(private instructorService:BaseServiceService){}
  HandleSubmit(){
    let obj={
      title:this.title,
      description:this.description,
      end_date:this.end_date
    }
    this.instructorService.CreateAssignment(obj,this.courseid).subscribe((res)=>{
      alert(res.msg)
      console.log(res)
      window.location.reload()
    })
  }


}
