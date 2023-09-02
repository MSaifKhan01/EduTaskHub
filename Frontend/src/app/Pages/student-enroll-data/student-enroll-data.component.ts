import { Component ,OnInit} from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-student-enroll-data',
  templateUrl: './student-enroll-data.component.html',
  styleUrls: ['./student-enroll-data.component.css']
})
export class StudentEnrollDataComponent implements OnInit{
  datas:any[]=[]
  isloading:boolean=true
  constructor(private studentService:StudentService){}
  ngOnInit(): void {
    this.getStudentcourse()
  }
  getStudentcourse(){
    this.studentService.getStudentCourse().subscribe((res)=>{
      console.log(res)
      this.datas=res.data
      this.isloading=false
    })
  }

}
