import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

import { Announcement, Assingment, Submission } from '../Models/AllModels';
import { Course } from '../Models/AllModels';
@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  
  private Myurl="https://edutaskhubbackend.onrender.com"
  token:string=localStorage.getItem("token")||""
  // private url="http://localhost:8000"
  constructor(private http:HttpClient) { }

  getAllCourse():Observable<{data:Course[]}>{
    let headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    const geturl=`${this.Myurl}/course/get`
    return this.http.get<{data:Course[]}>(geturl,{headers})
  }

  getInstructorCourse():Observable<{data:Course[]}>{
    let headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    const url=`${this.Myurl}/course/instrucCourses`
    return this.http.get<{data:Course[]}>(url,{headers})
  }


  particularCourseAssign(id:any):Observable<{data:Assingment[]}>{
    let headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    const url=`${this.Myurl}/assignment/ParticularCourse/${id}`
    return this.http.get<{data:Assingment[]}>(url,{headers})  
  }



  CreateAssignment(obj:Assingment,id:any):Observable<any>{
    let headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    const url=`${this.Myurl}/assignment/create/${id}`
    return this.http.post<any>(url,obj,{headers})

  }

  SeeSubmission(id:any):Observable<{data:Submission[]}>{
    let headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    // console.log(id)
    const url=`${this.Myurl}/sub/getsub/${id}`
    return this.http.get<{data:Submission[]}>(url,{headers})
  }

  CreateAnnouncement(obj:Announcement,id:any):Observable<any>{
    let headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    const url=`${this.Myurl}/announcement/create/${id}`
    return this.http.post(url,obj,{headers})
  }

  createCoursedata(obj:Course):Observable<any>{
    let headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    const url=`${this.Myurl}/course/create`
    return this.http.post<any>(url,obj,{headers})
  }
}
