import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username!:string
  email!:string
  password!:string
  constructor(private studentService:StudentService,private router:Router){}
  HandleSubmit(){
    let obj={
      username:this.username,
      email:this.email,
      password:this.password
    }
    this.studentService.registerStudent(obj).subscribe((res)=>{
      console.log(res)
      if(res.msg=="login succesfull"){
        this.router.navigate(['/'])
      }
    })

  }

}
