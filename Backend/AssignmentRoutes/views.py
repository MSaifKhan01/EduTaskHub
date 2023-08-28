from django.shortcuts import render
from django.http import JsonResponse
from CourseRoutes.models import Course
from .models import Assignment
from EnRollRoutes.models import Enroll
import json
# Create your views here.


def CreateAssignment(req, courseid):
    if req.method == "POST":
        user = req.user
        if user.role == "student":
            return JsonResponse({"msg": "You are not authorized"})
        body = json.loads(req.body)
        title = body.get('title')
        description = body.get('description')
        end_date = body.get('end_date')
        course = Course.objects.get(id=courseid)
        assignment = Assignment.objects.create(
            course=course, title=title, description=description, end_date=end_date)
        return JsonResponse({"msg": "Assignment Created"})
    else:
        return JsonResponse({"msg":"some error occured"},status=404)
    
def SeeAssignment(req):
    if req.method=="GET":
        student=req.user
        studentEnrolled=Enroll.objects.filter(student=student)
        data=[]
        for enroll in studentEnrolled:
            course=enroll.course
            assignment=Assignment.objects.filter(course=course)
            for assign in assignment:
                obj={
                    "title":assign.title,
                    "description":assign.description,
                    "start_date":assign.start_date,
                    "end_date":assign.end_date,
                    "course_name":course.title
                }
                data.append(obj)
        return JsonResponse({"data":data})
    else:
        return JsonResponse({"msg":"some error"})