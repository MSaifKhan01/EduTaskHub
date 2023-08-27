from django.urls import path
from . import views
urlpatterns = [
    path('create/<int:insid>',views.CreateCourse,name="create"),
    path('get',views.GetCourse,name="get")
]