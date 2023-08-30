import jwt
from decouple import config
from django.http import JsonResponse
secretkey=config("secret_key")

class AuthMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        excluded_urls = ['user/login', 'user/register']

        if any(request.path_info.endswith(url) for url in excluded_urls):
            return self.get_response(request)

        auth_header = request.META.get('HTTP_AUTHORIZATION', '')

        if not auth_header.startswith('Bearer '):
            return JsonResponse({"msg": "Login first"}, status=401)

        token = auth_header.split(' ')[1]

        try:
            decoded = jwt.decode(token, secretkey, algorithms=['HS256'])
            request.userid = decoded['userid']
            return self.get_response(request)
        except jwt.ExpiredSignatureError:
            return JsonResponse({"msg": "Token expired"}, status=401)
        except jwt.DecodeError:
            return JsonResponse({"msg": "Invalid token"}, status=401)
        except KeyError:
            return JsonResponse({"msg": "Invalid token format"}, status=401)