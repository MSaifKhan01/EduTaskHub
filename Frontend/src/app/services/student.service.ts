import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../Models/AllModels';
import { Assingment } from '../Models/AllModels';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  
  // private url="https://ed-tech-backend-8way.onrender.com"
   // private Myurl="https://edutaskhubbackend.onrender.com"
   token:string=localStorage.getItem("token")||""
   
   private url="http://localhost:8000"
 
  constructor(private http:HttpClient) { }

  registerStudent(obj:User):Observable<any>{
    const url=`${this.url}/user/register`
    return this.http.post<any>(url,obj)
  }

  loginstudent(obj:User):Observable<any>{
    const url=`http://localhost:8000/user/login`
    return this.http.post<any>(url,obj)
  }

  enrolCourse(id:number):Observable<any>{
    console.log(this.token)
    let headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    const url=`http://localhost:8000/enrol/create/${id}`
    return this.http.post<any>(url,{},{headers})
  }

  getStudentCourse():Observable<any>{
    let headers=new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    })
    const url=`http://localhost:8000/enrol/getstudent`
    return this.http.get<any>(url,{headers})
  }





  //  31-08
  getAllassignment():Observable<{data:Assingment[]}>{
    let headers=new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    })
    let url=`http://localhost:8000/assignment/get`
    return this.http.get<{data:Assingment[]}>(url,{headers})
  }

  getParticular(id:any):Observable<{data:Assingment}>{
    let headers=new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    })
    const url=`${this.url}/assignment/see/${id}`
    return this.http.get<{data:Assingment}>(url,{headers})
  }

  SubmitAssign(obj:any,id:number):Observable<any>{
    let headers=new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    })
    const url=`${this.url}/sub/submit/${id}`
    return this.http.post(url,obj,{headers})

  }

  getAnnouncement():Observable<any>{
    let headers=new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    })
    const url=`${this.url}/announcement/get`
    return this.http.get<any>(url,{headers})

  }
}
