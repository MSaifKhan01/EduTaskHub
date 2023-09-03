from django.db import models
from CourseRoutes.models import Course
# Create your models here.

class Announcement(models.Model):
    course=models.ForeignKey(Course,on_delete=models.CASCADE)
    title=models.TextField()
    content=models.TextField()
    announcement_date=models.DateTimeField(auto_now_add=True)