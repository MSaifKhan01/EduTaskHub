from django.urls import path
from . import views
urlpatterns = [
    path("create", views.CreateCourse, name="createcourse"),
    path("get", views.GetallCourse, name="getallcourse"),
    path("instrucCourses", views.getCourseByID, name="instrucCourses")
]