from django.db import models
from django.contrib.auth import get_user_model
from CourseRoutes.models import Course
User=get_user_model()
# Create your models here.
class Enroll(models.Model):
    student=models.ForeignKey(User,on_delete=models.CASCADE)
    course=models.ForeignKey(Course,on_delete=models.CASCADE)
    enrollmentdate=models.DateTimeField(auto_now_add=True)