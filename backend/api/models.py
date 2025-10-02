from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from datetime import timedelta
import uuid

class Location(models.Model):
    latitude = models.FloatField()
    longitude = models.FloatField()
    timestamp = models.DateTimeField(default=timezone.now)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    def __str__(self):  
        return f"{self.latitude} {self.longitude} {self.timestamp} {self.user}"

class Temporary_Link(models.Model):
    token = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null = False)
    creation_date = models.DateTimeField(default=timezone.now())
    expiration_date = models.DateTimeField(default=timezone.now() + timedelta(hours=1))    

    def __str__(self):
        return f"{self.user} {self.creation_date} expires in {self.expiration_date}  (expires at {self.expiration_date + self.creation_date})"
