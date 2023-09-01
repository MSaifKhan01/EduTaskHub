from django.shortcuts import render
from django.http import JsonResponse
from AssignmentRoutes.models import Assignment
from .models import Submission
import json
from django.contrib.auth import get_user_model
User=get_user_model()


def submitbyStudent(req, assignID):
    # if (req.method == "POST"):
    #     user = req.user
    #     body = json.loads(req.body)
    #     submission_link = body.get("submission_link")
    #     userid=req.userid
    #     user=User.objects.get(id=userid)

    #     if (user.role == "instructor"):
    #         return JsonResponse({"msg": "UnAuthorized"})
    #     assignment = Assignment.objects.get(id=assignID)
    #     submited = Submission.objects.create(
    #         student=user, assignment=assignment, submission_link=submission_link)
    #     return JsonResponse({"msg": "Assignment Submitted Succesfully"}, status=201)
    # else:
    #     return JsonResponse({"msg": "Invalid Request"}, status=405)
    if req.method=="POST":
        body=json.loads(req.body)
        submission_link=body.get('submission_link')
        userid=req.userid
        user=User.objects.get(id=userid)
        assignment=Assignment.objects.get(id=assignID)
        alreadysubmit=Submission.objects.filter(student=user,assignment=assignment).exists()
        if alreadysubmit:
            return JsonResponse({"msg":"You have already submitted the assignment"})
        submission=Submission.objects.create(student=user,assignment=assignment,submission_link=submission_link)
        return JsonResponse({"msg":"Submitted"})
    else:
        return JsonResponse({"msg":"some error occured"})


def getsubmissions(req, assignID):
    if req.method=="GET":
        assignment=Assignment.objects.get(id=assignID)
        allsubmission=Submission.objects.filter(assignment=assignment)
        data=[]
        for sub in allsubmission:
            obj={
                "id":sub.id,
                "studentid":sub.student.id,
                "studentname":sub.student.username,
                "instructorname":assignment.course.instructor.username,
                "coursename":assignment.course.title,
                "submission_date":sub.submission_date,
                "submission_link":sub.submission_link
            }
            data.append(obj)
        return JsonResponse({"data":data})
    else:
        return JsonResponse({"msg":"Invalid"},status=405)
    