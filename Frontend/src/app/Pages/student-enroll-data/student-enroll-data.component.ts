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
  nodata:boolean=false
  images:string='https://img.freepik.com/free-vector/no-data-concept-illustration_114360-616.jpg?w=740&t=st=1693915902~exp=1693916502~hmac=a39fb44291e2cf62f30592c7d7d14266f204d7c17c0867d1d8159d8940c2b0dc'
  constructor(private studentService:StudentService){}
  ngOnInit(): void {
    this.getStudentcourse()
  }
  getStudentcourse(){
    this.studentService.getStudentCourse().subscribe((res)=>{
      console.log(res)
      this.datas=res.data
      if(this.datas.length==0){
        this.nodata=true
      }
      this.isloading=false
    })
  }

}
