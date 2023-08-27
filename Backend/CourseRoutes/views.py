from django.shortcuts import render
from .models import Course
from django.http import JsonResponse
from django.contrib.auth import get_user_model
import json
User = get_user_model()


def CreateCourse(req, insid):
     if req.method == "POST":
        try:
            instructor = User.objects.get(id=insid)

            if instructor.role == "instructor":
                body = json.loads(req.body)
                title = body.get('title')
                description = body.get('description')
                course = Course.objects.create(
                    instructor=instructor, title=title, description=description)
                return JsonResponse({"msg": "Course Created"})
            else:
                return JsonResponse({"msg": "You are not authorized"})
        except User.DoesNotExist:
            return JsonResponse({"msg": "Instructor not found"})
        except json.JSONDecodeError:
            return JsonResponse({"msg": "Invalid JSON data"})
     else:
        return JsonResponse({"msg": "Some error occurred"})


def GetCourse(req):
    if req.method == "GET":
        allcourses = Course.objects.all()
        data = {"data": list(allcourses.values())}
        return JsonResponse(data)
    else:
        return JsonResponse({"msg":"some error occured"})