import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username!:string
  email!:string
  password!:string
  role!:string
  isloading!:boolean
  constructor(private studentService:StudentService,private router:Router){}
  HandleSubmit(){
    this.isloading=true
    let obj={
      username:this.username,
      email:this.email,
      password:this.password,
      role:this.role
    }
    this.studentService.registerStudent(obj).subscribe((res)=>{
      console.log(res)
      if(res.msg=="Registration Successful"){
        this.isloading=false
        Swal.fire({
          'icon':'success',
          'title':`${res.msg}`,
          'text':'You have Registered Successfully'
        })
        setTimeout(() => {
          this.router.navigate(['/login'])
        }, 2000);
      }else{
        this.isloading=false
        Swal.fire({
          'icon':'error',
          'title':`${res.msg}`,
          'text':`${res.msg}`
        })
      }
    })

  }

}
