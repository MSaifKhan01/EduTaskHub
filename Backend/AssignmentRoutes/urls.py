from django.urls import path
from . import views
urlpatterns = [
    path('create/<int:courseid>',views.CreateAssignment,name="create"),
    path('get',views.SeeAssignment,name='get'),
    path('see/<int:assignID>',views.ParticularAssignment,name='see'),
     path('ParticularCourse/<int:courseID>',views.ParticularCourse,name='particular'),
    path("update/<int:assignID>", views.updateAssign, name="updateAssign"),
    path("delete/<int:assignID>", views.deleteAssign, name="deleteAssign")
]