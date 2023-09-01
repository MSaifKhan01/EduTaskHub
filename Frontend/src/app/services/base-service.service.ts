import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  
  // private Myurl="https://edutaskhubbackend.onrender.com"
  token:string=localStorage.getItem("token")||""
  private url="http://localhost:8000"
  constructor(private http:HttpClient) { }

  getAllCourse():Observable<any>{
    let headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    const geturl=`${this.url}/course/get`
    return this.http.get<any>(geturl,{headers})
  }

  getInstructorCourse():Observable<any>{
    let headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    const url=`${this.url}/course/instrucCourses`
    return this.http.get<any>(url,{headers})
  }


  particularCourseAssign(id:any):Observable<any>{
    let headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    const url=`${this.url}/assignment/ParticularCourse/${id}`
    return this.http.get<any>(url,{headers})  
  }



  CreateAssignment(obj:any,id:any):Observable<any>{
    let headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    const url=`${this.url}/assignment/create/${id}`
    return this.http.post<any>(url,obj,{headers})

  }

  SeeSubmission(id:any){
    let headers=new HttpHeaders({
      Authorization:`Bearer ${this.token}`
    })
    // console.log(id)
    const url=`${this.url}/sub/getsub/${id}`
    return this.http.get<any>(url,{headers})
  }
}
