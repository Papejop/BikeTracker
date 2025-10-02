from django.urls import path
from . import views

urlpatterns = [
    path("locations/", views.get_locations, name="all_locations"),
    path("locations/<str:user_name>", views.get_user_locations, name="locations_by_username"),
    path("locations/share/", views.create_temporary_share_location_link, name="temp_location_link"),
    path("locations/access/<uuid:token>/", views.access_temporary_share_location_link, name="access_temp_location_link" ),
    path("locations/recieve_location/", views.recive_location, name="recieve_location_from_user")
]