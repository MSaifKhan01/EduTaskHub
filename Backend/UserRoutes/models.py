from django.db import models

from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    role=models.CharField(max_length=20,choices=[('student', 'Student'), ('instructor', 'Instructor')],default='student')
    isEnroll=models.BooleanField(default=False)