# events/models.py

from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateTimeField()
    location = models.CharField(max_length=255)
    image_url = models.URLField(max_length=200, blank=True, null=True)  # New field

    def __str__(self):
        return self.title