import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit{

  datas:any[]=[]
  isloading:boolean=true
  constructor(private studentService:StudentService,private router:Router){}
  ngOnInit(): void {
    this.getAllAnnouncement()
  }

  getAllAnnouncement(){
    this.studentService.getAnnouncement().subscribe((res)=>{
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
