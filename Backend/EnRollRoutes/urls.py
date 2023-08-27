from django.urls import path
from . import views
urlpatterns = [
    path('create/<int:courseid>',views.CreateEnrol,name="create"),
    path('getstudent',views.GetStudentEnrolData,name="getstudent"),
    path('get',views.GetEnrol,name='get')
]