export interface User{
    username?:string,
    email:string,
    password:string

}

export interface Course{
    id?:number
    image:string
    instructor?:any
    title:string
    description:string
}

export interface Enrol{
    student?:any
    course?:any
    enrollmentdate?:string
}

export interface Assingment{
    id?:number
    course?:any
    course_name?:string
    title:string
    description:string
    start_date?:string
    end_date:string
    assignmentid?:number

}


export interface Submission {
    id?: number,
    studentid?: number,
    studentname?: string,
    instructorname?: string,
    coursename?: string,
    submission_date?: string,
    submission_link: string,
    student?: any,
    assignment?: any
}

export interface Announcement {
    id?: number,
    announcementid?: number,
    coursename?: string,
    title: string,
    content: string,
    announcement_date?: string,
    instructor_name?: string,
    course?:Course,
    
}