from django.db import models
from AssignmentRoutes.models import Assignment
from django.contrib.auth import get_user_model
User = get_user_model()


class Submission(models.Model):
    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE)
    student = models.ForeignKey(User, on_delete=models.CASCADE)
    submission_date = models.DateTimeField(auto_now_add=True)
    submission_link = models.TextField()