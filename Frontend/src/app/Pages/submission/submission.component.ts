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
  nodata:boolean=false
  images:string='https://img.freepik.com/free-vector/no-data-concept-illustration_114360-616.jpg?w=740&t=st=1693915902~exp=1693916502~hmac=a39fb44291e2cf62f30592c7d7d14266f204d7c17c0867d1d8159d8940c2b0dc'

  constructor(private instructorService:BaseServiceService){}
  ngOnInit(): void {
    this.seeSubmission()
  }

  seeSubmission(){
    // let ids=this.assid
    // console.log(ids)
    this.instructorService.SeeSubmission(this.assid).subscribe((res:{data:Submission[]})=>{
      this.datas=res.data
      if(this.datas.length==0){
        this.nodata=true
      }
      this.isloading=false

      console.log(res)
    })
  }


}
