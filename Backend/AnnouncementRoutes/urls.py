from django.urls import path
from . import views
urlpatterns = [
    path('create/<int:courseid>',views.CreateAnnouncement,name="create"),
    path('get',views.AnnouncementGet,name='get')
]
