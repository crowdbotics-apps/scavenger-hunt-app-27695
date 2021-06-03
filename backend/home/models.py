from django.conf import settings
from django.db import models


class Mission_photo(models.Model):
    "Generated Model"
    mission_title = models.TextField()
    mission_instructions = models.TextField(
        null=True,
        blank=True,
    )
