from django.shortcuts import render
from django.http import JsonResponse
from AssignmentRoutes.models import Assignment
from .models import Submission
import json


def submitbyStudent(req, assignID):
    if (req.method == "POST"):
        user = req.user
        body = json.loads(req.body)
        submission_link = body.get("submission_link")

        if (user.role == "instructor"):
            return JsonResponse({"msg": "UnAuthorized"})
        assignment = Assignment.objects.get(id=assignID)
        submited = Submission.objects.create(
            student=user, assignment=assignment, submission_link=submission_link)
        return JsonResponse({"msg": "Assignment Submitted Succesfully"}, status=201)
    else:
        return JsonResponse({"msg": "Invalid Request"}, status=405)


def getsubmissions(req, assignID):
    if (req.method == "GET"):
        user = req.user
        if (user.role == "student"):
            return JsonResponse({"msg": "UnAuthorized"})
        assignment = Assignment.objects.get(id=assignID)
        submission = Submission.objects.filter(assignment=assignment)
        data = []
        for item in submission:
            obj = {
                "id": item.id,
                "student_name": item.student.username,
                "instructor_name": assignment.course.instructor.username,
                "course_name": assignment.course.title,
                "submission_link": item.submission_link,
                "submission_date": item.submission_date,

            }
            data.append(obj)
        return JsonResponse({"data": data}, status=200)
    else:
        return JsonResponse({"msg": "Invalid Request"}, status=405)