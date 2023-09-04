import { Component, OnInit } from '@angular/core';
import { BaseServiceService } from 'src/app/services/base-service.service';
import { Submission } from 'src/app/Models/AllModels';
@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit{
  assid=localStorage.getItem('subid')||""
  
  datas:Submission[]=[]
  isloading:boolean=true

  constructor(private instructorService:BaseServiceService){}
  ngOnInit(): void {
    this.seeSubmission()
  }

  seeSubmission(){
    // let ids=this.assid
    // console.log(ids)
    this.instructorService.SeeSubmission(this.assid).subscribe((res:{data:Submission[]})=>{
      this.datas=res.data
      this.isloading=false

      console.log(res)
    })
  }


}
