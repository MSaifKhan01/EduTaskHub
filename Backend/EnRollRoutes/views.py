from django.shortcuts import render
from django.contrib.auth import get_user_model
from django.http import JsonResponse
from .models import Enroll
from CourseRoutes.models import Course
User=get_user_model()
# Create your views here.

def CreateEnrol(req,courseid):
    # userid=req.userid
    # user=User.objects.get(id=userid)
    # if (req.method == "POST"):
    #     user = req.user
    #     if user.role == "student":

    #         course = Course.objects.get(id=courseid)
    #         alreadyEnrolled = Enroll.objects.filter(
    #             student=user, course=courseid).exists()
    #         if alreadyEnrolled:
    #             return JsonResponse({"msg": "You Have Already Enrolled"})
    #         data = Enroll.objects.create(
    #             student=user, course=course
    #         )
    #         return JsonResponse({"msg": "Enrollment Added Succesfully"}, status=201)
    #     else:
    #         return JsonResponse({"msg": "You Are Not Authorized"})
    # else:
    #     return JsonResponse({"msg": "Invalid Request"}, status=405)

    userid=req.userid
    user=User.objects.get(id=userid)
    if req.method=="POST":
        if user.role=="instructor":
            return JsonResponse({"msg":"You cannot enroll"})
        course=Course.objects.get(id=courseid)
        print(course)
        alreadyenrol=Enroll.objects.filter(student=user,course=course)
        if alreadyenrol:
            return JsonResponse({"msg":"You have already enrolled"})
        enroll=Enroll.objects.create(student=user,course=course)
        return JsonResponse({"msg":"You have enrolled successfully"})
    else:
        return JsonResponse({"msg":"some error occurred"})
    



   
    


    
    

    
def GetStudentEnrolData(req):
    #    if req.method == "GET":
    #     student = req.user
    #     enroldata = Enroll.objects.filter(student=student)  # [{},{},{}]
    #     print(enroldata)
    #     data = []
    #     for item in enroldata:
    #         course = item.course
    #         instructor = course.instructor
    #         print(course, instructor)
    #         obj = {
    #             "id": item.id,
    #             "student_name": student.username,
    #             "instructor_name": instructor.username,
    #             "course_name": course.title,
    #             "course_desc": course.description,
    #             "enrollment_date": item.enrollmentdate
    #         }
    #         data.append(obj)
    #     return JsonResponse({"data": data})
       
    #    else:
    #      return JsonResponse({"msg": "Invalid Request"}, status=405)

    student = User.objects.get(id=req.userid)
    print(student)
    print(student)
    if req.method == "GET":
        enroldata = Enroll.objects.filter(student=student)

        serialized_data = []

        for item in enroldata:
            course = item.course
            instructor = course.instructor
            data = {
                "name": student.username,
                "courseid":course.id,
                "image":course.image,
                "coursename": course.title,
                "description": course.description,
                "instructor": instructor.username,
                "date": item.enrollmentdate
            }

            serialized_data.append(data)

        return JsonResponse({"data": serialized_data})
    else:
        return JsonResponse({"msg": "Some error occurred"})
       

       
    
def GetEnrol(req):
    Enroldata=Enroll.objects.all()
    data={"data":list(Enroldata.values())}

    return JsonResponse(data)
