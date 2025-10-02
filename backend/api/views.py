from django.shortcuts import render
from django.utils import timezone
from django.http import JsonResponse, HttpResponse, HttpRequest
from api.models import Location, Temporary_Link, User
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from .serializers import LocationSerializer
import json
from django.utils.dateparse import parse_duration

def get_locations(request):
    all_locations = list(Location.objects.values())
    return JsonResponse(all_locations, safe=False)

@csrf_exempt
def get_user_locations(request, user_name):
    jwt_auth = JWTAuthentication()
    auth_result = jwt_auth.authenticate(request)
    user, token = auth_result
    if auth_result == None:
        return JsonResponse({'error': 'Authenticaiton failed!'}, status=401)
    #print('aaaa')
    #print(auth_result)
    if user.username == user_name:
        all_locations = str(Location.objects.get(user__username = user_name))
        return JsonResponse(all_locations, safe=False)
    else:
        return JsonResponse('tehee trying to access different user! xP', safe=False)
    
@csrf_exempt
def create_temporary_share_location_link(request):
    auth_result = JWTAuthentication().authenticate(request)
    expiration_date = request.POST.get("expiration_date")

    if auth_result == None:
        return JsonResponse({'error': 'Authenticaiton failed!'}, status=401)
    
    auth_user, token = auth_result
    
    link = Temporary_Link.objects.create(user = auth_user, expiration_date = expiration_date) #TODO: should create the link based on id not on name
    return JsonResponse({
        'message' : 'Succesfully created link!',
        'uuid' : str(link.token),
        'link' : f"locations/access/{link.token}/"
    })

@csrf_exempt   
def access_temporary_share_location_link(request, token):

    temp_link_object = Temporary_Link.objects.get(token=token)
    if timezone.now() < temp_link_object.expiration_date:
        all_locations = str(Location.objects.get(user=temp_link_object.user))
        return JsonResponse(all_locations, safe=False)
    else:
        return JsonResponse("link expired", safe=False)

@csrf_exempt
@api_view(['POST'])
def recive_location(request):
    serializer = LocationSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.data, status=400)
    
    

