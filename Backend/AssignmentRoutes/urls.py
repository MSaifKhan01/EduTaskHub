from django.urls import path
from . import views
urlpatterns = [
    path('create/<int:courseid>',views.CreateAssignment,name="create"),
    path('get',views.SeeAssignment,name='get')
]