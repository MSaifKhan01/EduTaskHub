from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate, login, logout
import json
from django.contrib.auth import get_user_model
User = get_user_model()
# Create your views here.


def Register(request):
    if request.method == "POST":
        body = json.loads(request.body)
        username = body['username']
        email = body['email']
        password = body['password']
        role=body.get('role','student')
        isEnroll=body.get('isEnroll',False)

        # Check if a user with the provided email already exists
        is_user_present = User.objects.filter(email=email).exists()
        if is_user_present:
            return JsonResponse({"msg": "User already present"})
        else:
            hashed_pass = make_password(password)
            user = User.objects.create(
                username=username, email=email, password=hashed_pass,role=role,isEnroll=isEnroll)
            return JsonResponse({"msg": "Registration Successful"})
    else:
        return JsonResponse({"msg": "Some error occurred"})


def Login(request):
    if request.method == "POST":
        body = json.loads(request.body)
        email = body['email']
        password = body['password']
        try:
            user = User.objects.get(email=email)
            authenticated_user = authenticate(email=email, password=password)
            if authenticated_user is not None:
                login(request, authenticated_user)
                return JsonResponse({"msg": "login successful"})
            else:
                return JsonResponse({"msg": "Authentication failed"})
        except User.DoesNotExist:
            return JsonResponse({"msg": "User Does Not exist"})
    else:
        return JsonResponse({"msg": "Wrong route"})



# def Login(request):
#     if request.method == "POST":
#         body = json.loads(request.body)
#         email = body['email']
#         password = body['password']
#         try:
#             UserModel = User.objects.get(email=email)
#             user = authenticate(email=email, password=password)
#             if user is not None:
#                 login(request, user)
#                 return JsonResponse({"msg": "login successful"})  # Return a JsonResponse or HttpResponse
#             else:
#                 return JsonResponse({"msg": "Invalid credentials"})  # Return an error message
#         except User.DoesNotExist:
#             return JsonResponse({"msg": "User does not exist"})  # Return an error message
#     else:
#         return JsonResponse({"msg": "Wrong route"})  # Return an error message for incorrect method


def Logout(req):
    logout(req)
    return JsonResponse({"msg": "Logout Succesful"})


def get(request):
    if request.user.is_authenticated:
        print(request.user)
        return JsonResponse({"msg": "welcome"})
    else:
        return JsonResponse({"msg": "Login first"})


