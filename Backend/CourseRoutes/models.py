from django.db import models
from django.contrib.auth import get_user_model
User=get_user_model()
# Create your models here.
class Course(models.Model):
    image=models.TextField(blank=True)
    instructor=models.ForeignKey(User,on_delete=models.CASCADE)
    title=models.CharField(max_length=100)
    description=models.TextField()