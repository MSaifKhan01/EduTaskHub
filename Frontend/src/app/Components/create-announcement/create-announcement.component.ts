import { Component, OnInit } from '@angular/core';
import { BaseServiceService } from 'src/app/services/base-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.css']
})
export class CreateAnnouncementComponent implements OnInit{

  title!:string
  content!:string
  courseid:number|string=""
  datas:any[]=[]
  constructor(private instructorService:BaseServiceService){}
  ngOnInit(): void {
    this.datas=JSON.parse(localStorage.getItem("instructordata")||'[]')
  }

  HandleSubmit(){
    // console.log(this.courseid)
    let obj={
      title:this.title,
      content:this.content
    }
    this.instructorService.CreateAnnouncement(obj,this.courseid).subscribe((res)=>{
      if(res.msg=="Announcement Created"){
        Swal.fire({
          'icon':'success',
          'title':`${res.msg}`,
          'text':'Announcement Created Successfully'
        })
      }else{
        Swal.fire({
          'icon':'error',
          'title':`${res.msg}`,
          'text':'Announcement Created Failed'
        })
      }
    })

  }


}
