import { Component, OnInit } from '@angular/core';
import { BaseServiceService } from 'src/app/services/base-service.service';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit{
  assid=localStorage.getItem('subid')||""
  
  datas:any[]=[]

  constructor(private instructorService:BaseServiceService){}
  ngOnInit(): void {
    this.seeSubmission()
  }

  seeSubmission(){
    // let ids=this.assid
    // console.log(ids)
    this.instructorService.SeeSubmission(this.assid).subscribe((res)=>{
      this.datas=res.data

      console.log(res)
    })
  }


}
