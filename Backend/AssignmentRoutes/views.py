from django.shortcuts import render
from django.http import JsonResponse

from CourseRoutes.models import Course
from .models import Assignment
from EnRollRoutes.models import Enroll

import json
from django.contrib.auth import get_user_model
User=get_user_model()
# Create your views here.


def CreateAssignment(req, courseid):
    if req.method == "POST":
        userid = req.userid
        user=User.objects.get(id=userid)
        if user.role == "student":
            return JsonResponse({"msg": "UnAuthorized Person"}, status=404)
      
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
    #  if (req.method == "GET"):
    #     user = req.user
    #     if (user.role == "instructor"):
    #         return JsonResponse({"msg": "You Are not Authorized"})
    #     enrollments = Enroll.objects.filter(student=user)
    #     data = []
    #     for enroll in enrollments:
    #         course = enroll.course
    #         assignments = Assignment.objects.filter(course=course)
    #         for assi in assignments:
    #             obj = {
    #                 "id": assi.id,
    #                 "title": assi.title,
    #                 "description": assi.description,
    #                 "due_date": assi.end_date,
    #                 "course_name": course.title,
    #                 "instructor_name": course.instructor.username,

    #             }
    #             data.append(obj)
    #     return JsonResponse({"data": data})
    #  else:
    #     return JsonResponse({"msg": "Invalid request"}, status=405)
    if req.method=="GET":
        studentid=req.userid
        student=User.objects.get(id=studentid)
        studentEnrolled=Enroll.objects.filter(student=student)
        data=[]
        for enroll in studentEnrolled:
            course=enroll.course
            assignment=Assignment.objects.filter(course=course)
            for assign in assignment:
                obj={
                    "title":assign.title,
                    "assignmentid":assign.id,
                    "description":assign.description,
                    "start_date":assign.start_date,
                    "end_date":assign.end_date,
                    "course_name":course.title
                }
                data.append(obj)
        return JsonResponse({"data":data})
    else:
        return JsonResponse({"msg":"some error"})
    



def ParticularAssignment(req,assignID):
    if req.method=="GET":
        assignment=Assignment.objects.get(id=assignID)
        AssignmentObj={
            "id":assignment.id,
            "title":assignment.title,
            "description":assignment.description,
            "start_date":assignment.start_date,
            "end_date":assignment.end_date
        }
        return JsonResponse({"data":AssignmentObj})
    else:
        return JsonResponse({"msg":"some error occured"})
    




def ParticularCourse(req,courseID):
    if req.method=="GET":
        course=Course.objects.get(id=courseID)
        allassignments=Assignment.objects.filter(course=course)
        data={"data":list(allassignments.values())}
        return JsonResponse(data)
    else:
        return JsonResponse({"msg":"some error occured"})

     



# this is not updated not updated 
def updateAssign(req, assignID):
    if (req.method == "PATCH"):
        if (req.user.role == "student"):
            return JsonResponse({"msg": "You Are Not Authorized"})
        body = json.loads(req.body)
        title = body.get("title")
        description = body.get("description")
        is_active = body.get("is_active")
        assign = Assignment.objects.get(id=assignID)

        if title is not None:
            assign.title = title
        if description is not None:
            assign.description = description
        if is_active is not None:
            assign.is_active = is_active

        assign.save()

        return JsonResponse({"msg": "Assignment Updated Succesfully"}, status=201)
    return JsonResponse({"msg": "Invalid Request"}, status=405)

# this is not updated not updated 
def deleteAssign(req, assignID):
    if req.method == "DELETE":
        if req.user.role == "student":
            return JsonResponse({"msg": "You Are not Authorized"})
        try:
            assignment = Assignment.objects.get(id=assignID)
        except Assignment.DoesNotExist:
            return JsonResponse({"msg": "Assignment Not Found"})

        assignment.delete()

        return JsonResponse({"msg": "Assignment Deleted Succesfully"})
    else:
        return JsonResponse({"msg": "Invalid Request"}, status=405)