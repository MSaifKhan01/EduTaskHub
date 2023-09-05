import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Announcement, User } from '../Models/AllModels';
import { Assingment } from '../Models/AllModels';
import { Submission } from '../Models/AllModels';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  
   private Myurl="https://edutaskhubbackend.onrender.com"
   token:string=localStorage.getItem("token")||""
   
  //  private url="http://localhost:8000"
 
  constructor(private http:HttpClient) { }

  registerStudent(obj:User):Observable<any>{
    const url=`${this.Myurl}/user/register`
    return this.http.post<any>(url,obj)
  }

  loginstudent(obj:User):Observable<any>{
    const url=`https://edutaskhubbackend.onrender.com/user/login`
    return this.http.post<any>(url,obj)
  }

  enrolCourse(id:number):Observable<any>{
    console.log(this.token)
    let headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    const url=`https://edutaskhubbackend.onrender.com/enrol/create/${id}`
    return this.http.post<any>(url,{},{headers})
  }

  getStudentCourse():Observable<any>{
    let headers=new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    })
    const url=`https://edutaskhubbackend.onrender.com/enrol/getstudent`
    return this.http.get<any>(url,{headers})
  }





  //  31-08
  getAllassignment():Observable<{data:Assingment[]}>{
    let headers=new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    })
    let url=`https://edutaskhubbackend.onrender.com/assignment/get`
    return this.http.get<{data:Assingment[]}>(url,{headers})
  }

  getParticular(id:any):Observable<{data:Assingment}>{
    let headers=new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    })
    const url=`${this.Myurl}/assignment/see/${id}`
    return this.http.get<{data:Assingment}>(url,{headers})
  }

  SubmitAssign(obj:Submission,id:number):Observable<any>{
    let headers=new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    })
    const url=`${this.Myurl}/sub/submit/${id}`
    return this.http.post(url,obj,{headers})

  }

  getAnnouncement():Observable<{data:Announcement[]}>{
    let headers=new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    })
    const url=`${this.Myurl}/announcement/get`
    return this.http.get<{data:Announcement[]}>(url,{headers})

  }
}
