from django.shortcuts import render
from django.http import JsonResponse
import json
from CourseRoutes.models import Course
from .models import Announcement
from EnRollRoutes.models import Enroll
from django.contrib.auth import get_user_model
User=get_user_model()
# Create your views here.

def CreateAnnouncement(req,courseid):
    if req.method=="POST":
        body=json.loads(req.body)
        title=body.get('title')
        content=body.get('content')
        course=Course.objects.get(id=courseid)
        announcement=Announcement.objects.create(course=course,title=title,content=content)
        return JsonResponse({"msg":"Announcement Created"})
    else:
        return JsonResponse({"msg":"some error occured"})


def AnnouncementGet(req):
    if req.method=="GET":
        userid=req.userid
        user=User.objects.get(id=userid)
        enrolledCourses=Enroll.objects.filter(student=user)
        data=[]
        for enrol in enrolledCourses:
            course=enrol.course  
            courseannouncement=Announcement.objects.filter(course=course)
            for ann in courseannouncement:
                obj={
                    "announcementid":ann.id,
                    "coursename":course.title,
                    "title":ann.title,
                    "content":ann.content,
                    "announcement_date":ann.announcement_date,
                    "instructor_name":course.instructor.username
                }
                data.append(obj)
        return JsonResponse({"data":data})
    else:
        return JsonResponse({"msg":"some error occured"})

