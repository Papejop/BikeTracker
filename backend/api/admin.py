from django.contrib import admin
from api.models import Location, Temporary_Link

@admin.register(Location)
class Location_Admin(admin.ModelAdmin):
    list_display = ["latitude", "longitude", "timestamp", "user"]

@admin.register(Temporary_Link)
class Temp_Link_Admin(admin.ModelAdmin):
    list_display = ["user", "creation_date", "expiration_date", "token"]
