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
  constructor(private studentService:StudentService,private router:Router){}
  ngOnInit(): void {
    this.getAllAnnouncement()
  }

  getAllAnnouncement(){
    this.studentService.getAnnouncement().subscribe((res:{data:Announcement[]})=>{
      this.datas=res.data
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
