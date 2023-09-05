import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import { Announcement } from 'src/app/Models/AllModels';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit{

  datas:Announcement[]=[]
  isloading:boolean=true
  nodata:boolean=false
  images:string='https://img.freepik.com/free-vector/no-data-concept-illustration_114360-616.jpg?w=740&t=st=1693915902~exp=1693916502~hmac=a39fb44291e2cf62f30592c7d7d14266f204d7c17c0867d1d8159d8940c2b0dc'
  constructor(private studentService:StudentService,private router:Router){}
  ngOnInit(): void {
    this.getAllAnnouncement()
  }

  getAllAnnouncement(){
    this.studentService.getAnnouncement().subscribe((res:{data:Announcement[]})=>{
      this.datas=res.data
      if(this.datas.length==0){
        this.nodata=true
      }
      this.isloading=false
    })
  }

  HandleClick(data:any){
    localStorage.setItem("announcement",JSON.stringify(data))
    this.router.navigate(['/getannouncement']).then(()=>{
      window.location.reload()
    })

  }


}
