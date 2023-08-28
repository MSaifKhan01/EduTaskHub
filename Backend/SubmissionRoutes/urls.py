from django.urls import path
from . import views
urlpatterns = [
    path("submit/<int:assignID>", views.submitbyStudent, name="submit"),
    path("getsub/<int:assignID>", views.getsubmissions, name="getsub")
]