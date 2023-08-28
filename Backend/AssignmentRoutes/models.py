from django.db import models
from CourseRoutes.models import Course
from django.contrib.auth import get_user_model
User=get_user_model()
# Create your models here.
class Assignment(models.Model):
    course=models.ForeignKey(Course,on_delete=models.CASCADE)
    title=models.CharField(max_length=100)
    description=models.CharField(max_length=300)
    start_date=models.DateTimeField(auto_now_add=True)
    end_date=models.DateTimeField()
    is_active = models.BooleanField(default=True)
    last_modified = models.DateTimeField(auto_now=True)